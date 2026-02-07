import { useEffect, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useAnimations, useGLTF } from "@react-three/drei"
import * as THREE from 'three';
import planeScene from '../assets/3D/plane.glb'

const Plane = ({ isRotating, rotationSpeed, ...props }) => {
    const ref = useRef(null);
    const { scene, animations } = useGLTF(planeScene);
    const { actions } = useAnimations(animations, ref);

    // useEffect(() => {
    //     actions['Take 001'].play();
    // }, [])

    // useFrame(({ clock, camera }) => {
    //     if (isRotating) {
    //         if (rotationSpeed.current > 0.001) {
    //             ref.current.rotation.y = -Math.PI / 2.35;
    //         } else if (rotationSpeed.current < -0.001) {
    //             ref.current.rotation.y = Math.PI / 2.35;
    //         }
    //     }
    // })

    useEffect(() => {
        const action = actions['Take 001'];
        action.play();
        // You can adjust timeScale to speed up the propeller when moving
        action.timeScale = isRotating ? 1.5 : 0.5;
    }, [isRotating]);

    useFrame((state, delta) => {
        // 1. Determine the target rotation based on movement
        let targetRotation = 1.35; // Default starting rotation

        if (isRotating) {
            if (rotationSpeed.current > 0.001) {
                targetRotation = -Math.PI / 2.35;
            } else if (rotationSpeed.current < -0.001) {
                targetRotation = Math.PI / 2.35;
            }
        }

        // 2. Smoothly interpolate toward the target
        // We use a factor (e.g., 4 * delta) to control the speed of the turn
        ref.current.rotation.y = THREE.MathUtils.lerp(
            ref.current.rotation.y,
            targetRotation,
            4 * delta // Adjust '4' to make the turn faster or slower
        );

        // Add a slight tilt (roll) based on speed
        ref.current.rotation.z = THREE.MathUtils.lerp(
            ref.current.rotation.z,
            isRotating ? rotationSpeed.current * 2.5 : 0,
            2 * delta
        );
    });

    return (
        <mesh {...props} ref={ref} rotation={[0, 1.35, 0]}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Plane