import { memo, Suspense, useMemo, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import FoxIsland from '../models/FoxIsland'
import Sky from '../models/Sky'
import Plane from '../models/Plane'
import Bird from '../models/Bird'
import HomeInfoPopUp from '../components/HomeInfoPopUp'

// Move these outside the component so they are static
const getIslandConfigs = (width) => {
    const isMobile = width <= 768;
    return [
        isMobile ? [0.9, 0.9, 0.9] : [1, 1, 1]
    ];
};

const getPlaneConfigs = (width) => {
    const isMobile = width <= 768;
    return [
        isMobile ? [1.5, 1.5, 1.5] : [3, 3, 3],
        isMobile ? [0, -1.5, 0] : [0, -4, -4]
    ];
};

const ModelHolder = memo(({ setCurrentStage }) => {
    const islandRef = useRef(null);
    const [isRotating, setIsRotating] = useState(false);
    const rotationSpeed = useRef(0);

    // const screenResp = () => {
    //     const scalePoint = window.innerWidth <= 768 ? 0.9 : 1;
    //     const positionPoint = [-0.6, -6.9, -43];
    //     const rotationPoint = [0.1, 4.7, 0];
    //     return [scalePoint, positionPoint, rotationPoint]
    // }

    // const planeResp = () => {
    //     const scalePoint = window.innerWidth <= 768 ? 1.5 : 3;
    //     const positionPoint = window.innerWidth <= 768 ? [0, -2.5, 0] : [0, -4, -4];
    //     // const rotationPoint = window.innerWidth <= 768 ? [0.1, 4.7, 0] : [0, 0, 0];
    //     return [scalePoint, positionPoint]
    // }

    // Inside ModelHolder, memoize the values
    const islandConfigs = useMemo(() => getIslandConfigs(window.innerWidth), []);
    const planeConfigs = useMemo(() => getPlaneConfigs(window.innerWidth), []);

    const [islandScale] = islandConfigs;
    const [planeScale, planePosition] = planeConfigs;

    return (
        <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
            camera={{ near: 0.1, far: 1000 }}
        >
            <Suspense fallback={<Loader />}>
                <directionalLight position={[1, 1, 1]} intensity={2} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 5, 10]} intensity={2} />
                <spotLight
                    position={[0, 50, 10]}
                    angle={0.15}
                    penumbra={1}
                    intensity={2}
                />
                <hemisphereLight skyColor="#b1e1ff" groundColor={'#000000'} intensity={1} />

                <Bird />
                <Sky isRotating={isRotating} rotationSpeed={rotationSpeed} />
                <FoxIsland scale={islandScale} position={[-0.6, -6.9, -43.4]} rotation={[0.1, 4.7077, 0]} islandRef={islandRef}
                    isRotating={isRotating} setIsRotating={setIsRotating} setCurrentStage={setCurrentStage} rotationSpeed={rotationSpeed}
                />
                <Plane scale={planeScale} position={planePosition} isRotating={isRotating} rotationSpeed={rotationSpeed} />
            </Suspense>
        </Canvas>
    )
})


const Home = memo(() => {
    const [currentStage, setCurrentStage] = useState(1);
    return (
        <section className='w-full h-screen relative flex justify-center items-center'>
            <div className='absolute top-23 left-0 right-0 z-10 flex items-center justify-center'>
                {currentStage && <HomeInfoPopUp currentStage={currentStage} />}
            </div>
            <ModelHolder setCurrentStage={setCurrentStage} />
        </section>
    )
})

export default Home