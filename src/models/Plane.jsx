import { useAnimations, useGLTF } from "@react-three/drei"
import planeScene from '../assets/3D/plane.glb'
import { useEffect, useRef } from "react"
import { useFrame } from "@react-three/fiber"

const Plane = ({ isRotating, rotationSpeed, ...props }) => {
    const ref = useRef(null);
    const { scene, animations } = useGLTF(planeScene);
    const { actions } = useAnimations(animations, ref);

    useEffect(() => {
        actions['Take 001'].play();
    }, [])

    useFrame(({ clock, camera }) => {
        if (isRotating) {
            if (rotationSpeed.current > 0.001) {
                ref.current.rotation.y = -Math.PI / 2.35;
            } else if (rotationSpeed.current < -0.001) {
                ref.current.rotation.y = Math.PI / 2.35;
            }
        }
    })

    return (
        <mesh {...props} ref={ref} rotation={[0, 1.35, 0]}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Plane