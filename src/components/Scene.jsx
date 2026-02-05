import { useRef, useLayoutEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera, Environment, Float, Stars, Sphere } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'
import Particles from './Particles'

export default function Scene() {
    const meshRef = useRef()
    const atmosphereRef = useRef()
    const cameraRef = useRef()

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.05
        }
        if (atmosphereRef.current) {
            atmosphereRef.current.rotation.y += delta * 0.07 // Rotate atmosphere slightly faster
        }
    })

    useLayoutEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            const maxScroll = document.body.scrollHeight - window.innerHeight
            const progress = scrollY / maxScroll

            if (cameraRef.current) {
                // Fly through effect
                cameraRef.current.position.z = 8 - progress * 10
                cameraRef.current.position.y = -progress * 2
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} ref={cameraRef} />

            {/* Space Lighting - Dramatic and cool */}
            <ambientLight intensity={0.1} color="#4040a0" />
            <pointLight position={[50, 20, 30]} intensity={2.5} color="#00f3ff" />
            <pointLight position={[-50, -20, -30]} intensity={1.5} color="#bf00ff" />

            <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
                <group ref={meshRef}>
                    {/* Planet Core */}
                    <Sphere args={[2.5, 64, 64]}>
                        <meshStandardMaterial
                            color="#1a1a3a"
                            roughness={0.7}
                            metalness={0.2}
                        />
                    </Sphere>

                    {/* Planet Rings (Torus) */}
                    <mesh rotation={[Math.PI / 2.5, 0, 0]}>
                        <torusGeometry args={[3.8, 0.05, 16, 100]} />
                        <meshBasicMaterial color="#00f3ff" transparent opacity={0.6} />
                    </mesh>
                    <mesh rotation={[Math.PI / 2.5, 0, 0]}>
                        <torusGeometry args={[4.0, 0.02, 16, 100]} />
                        <meshBasicMaterial color="#bf00ff" transparent opacity={0.4} />
                    </mesh>

                    {/* Atmosphere / Glow */}
                    <Sphere args={[2.65, 64, 64]} ref={atmosphereRef}>
                        <meshPhongMaterial
                            color="#4040ff"
                            transparent
                            opacity={0.15}
                            side={THREE.BackSide}
                            blending={THREE.AdditiveBlending}
                        />
                    </Sphere>
                </group>
            </Float>

            <Particles count={3000} />
            <Stars radius={200} depth={50} count={7000} factor={4} saturation={1} fade speed={1.5} />

            <Environment preset="city" />

            <EffectComposer>
                <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} height={300} intensity={1.5} radius={0.6} />
            </EffectComposer>
        </>
    )
}