import { useAnimations, useGLTF } from "@react-three/drei"
import planeScene from '../assets/3D/plane.glb'
import { useEffect, useRef } from "react"

const Plane = ({ ...props }) => {
    const ref = useRef(null);
    const { scene, animations } = useGLTF(planeScene);
    const { actions } = useAnimations(animations, ref);

    useEffect(() => {
        actions['Take 001'].play();
    }, [])
    return (
        <mesh {...props} ref={ref} rotation={[0, 20, 0]}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Plane