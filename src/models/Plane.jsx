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
        action.timeScale = isRotating ? 2 : 0.7;
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
            2 * delta // Adjust '4' to make the turn faster or slower
        );

        // Add a slight tilt (roll) based on speed
        const targetRotation1 = isRotating ? rotationSpeed.current * 26 : 0;
        // Clamp the rotation to -45 to 45 degrees (approx -0.8 to 0.8 radians) to prevent flipping
        const clampedRotation = THREE.MathUtils.clamp(targetRotation1, -0.8, 0.8);

        ref.current.rotation.z = THREE.MathUtils.lerp(
            ref.current.rotation.z,
            clampedRotation,
            2 * delta
        );
    });

    return (
        <mesh {...props} ref={ref} rotation={[0, 20.1, 0]}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Plane