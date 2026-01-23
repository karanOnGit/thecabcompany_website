import { useRef, useLayoutEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera, Environment, Float, Stars } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Particles from './Particles'

export default function Scene() {
    const meshRef = useRef()
    const cameraRef = useRef()

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.1
            meshRef.current.rotation.y += delta * 0.15
        }
    })

    useLayoutEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            const maxScroll = document.body.scrollHeight - window.innerHeight
            const progress = scrollY / maxScroll

            if (cameraRef.current) {
                cameraRef.current.position.z = 8 + progress * 5
                cameraRef.current.position.y = -progress * 5
            }

            if (meshRef.current) {
                meshRef.current.rotation.z = progress * Math.PI * 2
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} ref={cameraRef} />
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <spotLight position={[-10, -10, -10]} intensity={0.5} color="blue" />

            <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                <mesh ref={meshRef}>
                    <dodecahedronGeometry args={[1.5, 0]} />
                    <meshStandardMaterial color="#222" roughness={0.2} metalness={0.8} />
                </mesh>
            </Float>

            <Particles count={2000} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            <Environment preset="city" />

            <EffectComposer>
                <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} intensity={0.5} />
            </EffectComposer>
        </>
    )
}
