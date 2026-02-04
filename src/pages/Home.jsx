import { Suspense, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import FoxIsland from '../models/FoxIsland'
import Sky from '../models/Sky'
import Plane from '../models/Plane'
import Bird from '../models/Bird'

const Home = () => {
    return (
        <section className='w-full h-screen relative flex justify-center items-center'>
            {/* <div className='absolute top-20 left-0 right-0 z-10 flex flex-col items-center justify-center'>
                <p className='text-xl font-medium text-gray-500'>Hi, I'm</p>
                <h1 className='text-5xl font-bold text-gray-900'>Alex</h1>
            </div> */}
            <ModelHolder />
        </section>
    )
}

function ModelHolder() {
    const islandRef = useRef(null);
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);
    const rotationSpeed = useRef(0);

    const screenResp = () => {
        const scalePoint = window.innerWidth <= 768 ? 0.9 : 1;
        const positionPoint = [-0.6, -5.8, -43];
        const rotationPoint = [0.1, 4.7, 0];
        return [scalePoint, positionPoint, rotationPoint]
    }

    const planeResp = () => {
        const scalePoint = window.innerWidth <= 768 ? 1.5 : 3;
        const positionPoint = window.innerWidth <= 768 ? [0, -1.5, 0] : [0, -4, -4];
        // const rotationPoint = window.innerWidth <= 768 ? [0.1, 4.7, 0] : [0, 0, 0];
        return [scalePoint, positionPoint]
    }

    const [islandScale, islandPosition, islandRotation] = screenResp();
    const [planeScale, planePosition] = planeResp();

    return (
        <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
            camera={{ near: 0.1, far: 1000 }}
        >
            <Suspense fallback={<Loader />}>
                <directionalLight position={[1.3, 1, 1]} intensity={1.9} />
                <ambientLight intensity={0.5} />
                {/* <pointLight position={[1.3, 1, 1]} intensity={1.9} />
                <spotLight position={[1.3, 1, 1]} intensity={1.9} /> */}
                <hemisphereLight skyColor="#b1e1ff" groundColor={'#000000'} intensity={1} />

                <Bird />
                <Sky isRotating={isRotating} rotationSpeed={rotationSpeed} />
                <FoxIsland scale={islandScale} position={islandPosition} rotation={islandRotation} islandRef={islandRef}
                    isRotating={isRotating} setIsRotating={setIsRotating} setCurrentStage={setCurrentStage} rotationSpeed={rotationSpeed}
                />
                <Plane scale={planeScale} position={planePosition} isRotating={isRotating} rotationSpeed={rotationSpeed} />
            </Suspense>
        </Canvas>
    )
}

export default Home