import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function RingParticles({ count = 4000, radius = 4, thickness = 1, speed = 0.02 }) {
    const mesh = useRef()

    const points = useMemo(() => {
        const p = new Float32Array(count * 3)
        const c = new Float32Array(count * 3)
        const baseColor = new THREE.Color('#FFFFFF') // White glow

        for (let i = 0; i < count; i++) {
            // Angle around the ring
            const angle = Math.random() * Math.PI * 2

            // Distance from center (Gaussian-like distribution for fade effect)
            const r = radius + (Math.random() - 0.5) * thickness

            // Vertical scatter for volume
            const y = (Math.random() - 0.5) * 0.15

            const x = Math.cos(angle) * r
            const z = Math.sin(angle) * r

            p[i * 3] = x
            p[i * 3 + 1] = y
            p[i * 3 + 2] = z

            // Color variation (White to slight silver/blue)
            c[i * 3] = baseColor.r
            c[i * 3 + 1] = baseColor.g * (0.8 + Math.random() * 0.2)
            c[i * 3 + 2] = baseColor.b * (0.8 + Math.random() * 0.2)
        }
        return { p, c }
    }, [count, radius, thickness])

    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.y += delta * speed // Spin around its own Y axis
        }
    })

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={points.p.length / 3}
                    array={points.p}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={points.c.length / 3}
                    array={points.c}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                vertexColors
                transparent
                opacity={0.4}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    )
}
