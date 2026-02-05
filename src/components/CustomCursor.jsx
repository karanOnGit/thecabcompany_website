import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
    const cursorRef = useRef(null)

    useEffect(() => {
        // Check if device is touch
        if (window.matchMedia("(pointer: coarse)").matches) return

        const moveCursor = (e) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.2,
                ease: "power2.out"
            })
        }

        window.addEventListener('mousemove', moveCursor)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
        }
    }, [])

    return (
        <div
            ref={cursorRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '20px',
                height: '20px',
                backgroundColor: 'white',
                borderRadius: '50%',
                pointerEvents: 'none',
                transform: 'translate(-50%, -50%)',
                zIndex: 9999,
                mixBlendMode: 'difference'
            }}
        />
    )
}