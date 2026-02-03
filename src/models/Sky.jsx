import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import skyScene from '../assets/3D/sky.glb'

const Sky = ({ isRotating }) => {
    const skyRef = useRef();
    const sky = useGLTF(skyScene);

    useFrame((_, delta) => {
        if (isRotating) {
            skyRef.current.rotation.y += 0.25 * delta;
        } else
            skyRef.current.rotation.y += 0.001;
    })
    return (
        <mesh ref={skyRef}>
            <primitive object={sky.scene} />
        </mesh>
    )
}

export default Sky