import { Sphere } from '@react-three/drei'

export default function Sun({ x = 50, y = -20, z = -50 }) {
    return (
        <group position={[x, y, z]}>
            {/* The Sun Mesh - High emitted light for bloom */}
            <Sphere args={[15, 32, 32]}>
                <meshBasicMaterial color={[10, 2, 0]} toneMapped={false} />
            </Sphere>
            {/* Backlight for the planet */}
            <pointLight intensity={5} distance={200} color="#ffaa00" />
        </group>
    )
}
