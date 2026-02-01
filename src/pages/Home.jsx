import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import FoxIsland from '../models/FoxIsland'

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
    return (
        <Canvas className='w-full h-screen bg-transparent'
            camera={{ near: 0.1, far: 1000 }}
        >
            <Suspense fallback={<Loader />}>
                <directionalLight />
                <ambientLight />
                <pointLight />
                <spotLight />
                <hemisphereLight />
                <FoxIsland />
            </Suspense>
        </Canvas>
    )
}

export default Home