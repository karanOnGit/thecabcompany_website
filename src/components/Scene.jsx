import { useRef, useMemo, useLayoutEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Environment, Float, Stars, Sphere, Cloud, Sparkles } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'
import Particles from './Particles'

function Asteroids({ count = 300 }) {
    const mesh = useRef()
    const dummy = useMemo(() => new THREE.Object3D(), [])

    const asteroids = useMemo(() => {
        const temp = []
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100
            const factor = 20 + Math.random() * 100
            const speed = 0.01 + Math.random() / 200
            const xFactor = -50 + Math.random() * 100
            const yFactor = -50 + Math.random() * 100
            const zFactor = -50 + Math.random() * 100
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
        }
        return temp
    }, [count])

    useFrame((state, delta) => {
        asteroids.forEach((data, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor } = data
            t = data.t += speed / 2
            const a = Math.cos(t) + Math.sin(t * 1) / 10
            const b = Math.sin(t) + Math.cos(t * 2) / 10
            const s = Math.cos(t)

            dummy.position.set(
                (data.xFactor + Math.cos(t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                (data.yFactor + Math.sin(t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                (data.zFactor + Math.cos(t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
            )
            dummy.scale.set(s, s, s)
            dummy.rotation.set(s * 5, s * 5, s * 5)
            dummy.updateMatrix()

            mesh.current.setMatrixAt(i, dummy.matrix)
        })
        mesh.current.instanceMatrix.needsUpdate = true
        mesh.current.rotation.y += delta * 0.02
    })

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            <dodecahedronGeometry args={[0.2, 0]} />
            <meshStandardMaterial color="#505050" roughness={0.8} />
        </instancedMesh>
    )
}

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
                cameraRef.current.position.z = 12 - progress * 15 // Start further, go deeper
                cameraRef.current.position.y = -progress * 4

                // Slight camera rotation for dynamic feel
                cameraRef.current.rotation.z = progress * 0.1
                cameraRef.current.rotation.x = -progress * 0.2
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 12]} ref={cameraRef} />

            {/* Space Lighting - Dramatic and cool */}
            <ambientLight intensity={0.05} color="#4040a0" />
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

            <Asteroids />

            {/* Nebula Clouds */}
            <Cloud opacity={0.3} speed={0.4} width={10} depth={1.5} segments={20} position={[-5, 2, -10]} color="#bf00ff" />
            <Cloud opacity={0.3} speed={0.4} width={10} depth={1.5} segments={20} position={[5, -2, -15]} color="#00f3ff" />

            <Particles count={3000} />
            <Sparkles count={500} scale={12} size={2} speed={0.4} opacity={0.5} color="#fff" />
            <Stars radius={300} depth={50} count={10000} factor={4} saturation={1} fade speed={1.5} />

            <Environment preset="city" />

            <EffectComposer>
                <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} height={300} intensity={1.5} radius={0.6} />
            </EffectComposer>
        </>
    )
}