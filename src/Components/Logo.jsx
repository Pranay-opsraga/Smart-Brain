import { useRef, useCallback } from 'react'
import brain from '../assets/brain.svg'

const Logo = () => {
    const cardRef = useRef(null)
    const rafRef = useRef(null)

    const handleMouseMove = useCallback((e) => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current)

        rafRef.current = requestAnimationFrame(() => {
            const card = cardRef.current
            if (!card) return

            const rect = card.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            const centerX = rect.width / 2
            const centerY = rect.height / 2


            const rotateY = ((x - centerX) / centerX) * 20
            const rotateX = ((centerY - y) / centerY) * 20


            const glowX = (x / rect.width) * 100
            const glowY = (y / rect.height) * 100


            const dist = Math.sqrt(
                Math.pow((x - centerX) / centerX, 2) +
                Math.pow((y - centerY) / centerY, 2)
            )
            const glowOpacity = Math.min(0.35, dist * 0.3)

            card.style.setProperty('--rotate-x', `${rotateX}deg`)
            card.style.setProperty('--rotate-y', `${rotateY}deg`)
            card.style.setProperty('--glow-x', `${glowX}%`)
            card.style.setProperty('--glow-y', `${glowY}%`)
            card.style.setProperty('--glow-opacity', glowOpacity)
            card.style.setProperty('--card-scale', '1.05')
        })
    }, [])

    const handleMouseLeave = useCallback(() => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current)

        const card = cardRef.current
        if (!card) return

        card.style.setProperty('--rotate-x', '0deg')
        card.style.setProperty('--rotate-y', '0deg')
        card.style.setProperty('--glow-opacity', '0')
        card.style.setProperty('--card-scale', '1')
    }, [])

    return (
        <div style={{ margin: '1rem', marginLeft: '1.5rem' }}>
            <div
                ref={cardRef}
                className="hero-logo-card"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    '--rotate-x': '0deg',
                    '--rotate-y': '0deg',
                    '--glow-x': '50%',
                    '--glow-y': '50%',
                    '--glow-opacity': 0,
                    '--card-scale': 1,
                }}
            >
                {/* Radial glow overlay */}
                <div className="hero-logo-glow" />

                {/* Shine sweep overlay */}
                <div className="hero-logo-shine" />

                <div className="hero-logo-content">
                    <img
                        src={brain}
                        alt="logo"
                        style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 0 8px rgba(167, 139, 250, 0.4))' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Logo;