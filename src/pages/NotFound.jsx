import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Fox from '../models/Fox';

const NotFound = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-slate-300/20 flex-col'>
            <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
                <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000, }}>
                    <directionalLight position={[0, 0, 1]} intensity={2.5} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[5, 10, 0]} intensity={2} />
                    <spotLight
                        position={[10, 10, 10]}
                        angle={0.15}
                        penumbra={1}
                        intensity={2}
                    />

                    <Suspense fallback={<Loader />}>
                        <Fox position={[0.5, 0.4, 0]} scale={[0.8, 0.8, 0.8]}
                            rotation={[12.6, -0.8, 0]}
                            currentAnimation='walk'
                        />
                    </Suspense>
                </Canvas>
            </div>
            <div className='text-center p-8 bg-white rounded-lg shadow-xl'>
                <h1 className='text-6xl font-bold text-gray-800 mb-4'>404</h1>
                <h2 className='text-2xl font-semibold text-gray-700 mb-4'>Page Not Found</h2>
                <p className='text-gray-600 mb-8'>
                    The page you are looking for doesn't exist or has been moved.
                </p>
                <Link to='/'
                    className='px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors'
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
