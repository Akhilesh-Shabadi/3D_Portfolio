import { Html } from '@react-three/drei'

const Loader = () => {
    return (
        <Html center>
            <div className='flex justify-center items-center h-screen'>
                <div className='w-16 h-16 border-2 border-opacity-20 rounded-full animate-spin border-slate-200 border-t-slate-600'>
                    {/* Loading... */}
                </div>
            </div>
        </Html>
    )
}

export default Loader