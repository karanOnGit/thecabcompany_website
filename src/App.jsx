import { Canvas } from '@react-three/fiber'
import { useEffect } from 'react'
import Lenis from 'lenis'
import Scene from './components/Scene'
import Overlay from './components/Overlay'
import CustomCursor from './components/CustomCursor'

function App() {

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    return (
        <>
            <CustomCursor />
            <div className="canvas-container" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
                <Canvas dpr={[1, 2]}>
                    <color attach="background" args={['#030305']} />
                    <Scene />
                </Canvas>
            </div>

            <Overlay />
        </>
    )
}

export default App