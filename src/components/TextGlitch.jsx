import { useEffect, useRef, useState } from 'react'

export function TextGlitch({
  text,
  hoverText,
  href,
  className = '',
  gradientClass = 'from-white to-white',
  delay = 0,
}) {
  const textRef = useRef(null)
  const spanRef = useRef(null)
  const [displayText] = useState(text)
  const [displayHoverText, setDisplayHoverText] = useState(hoverText || text)
  const hoverIntervalRef = useRef(null)

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import('gsap')

      if (textRef.current) {
        gsap.set(textRef.current, {
          backgroundSize: '0%',
          scale: 0.95,
          opacity: 0.2,
        })

        const tl = gsap.timeline({ delay: delay })

        tl.to(textRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
        }).to(
          textRef.current,
          {
            backgroundSize: '100%',
            duration: 1.5,
            ease: 'power3.out',
          },
          '-=0.3'
        )
      }
    }

    loadGSAP()
  }, [delay])

  const handleMouseEnter = () => {
    const targetText = hoverText || text
    let iteration = 0

    if (hoverIntervalRef.current) {
      clearInterval(hoverIntervalRef.current)
    }

    hoverIntervalRef.current = setInterval(() => {
      setDisplayHoverText(
        targetText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return targetText[index]
            }
            // Keep spaces, symbols, and periods unchanged
            if (/\s|[^a-zA-Z]/.test(targetText[index])) {
              return targetText[index]
            }
            return letters[Math.floor(Math.random() * 26)]
          })
          .join('')
      )

      if (iteration >= targetText.length) {
        clearInterval(hoverIntervalRef.current)
      }

      iteration += 1 / 3
    }, 30)

    if (spanRef.current) {
      spanRef.current.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
    }
  }

  const handleMouseLeave = () => {
    if (hoverIntervalRef.current) {
      clearInterval(hoverIntervalRef.current)
    }
    setDisplayHoverText(hoverText || text)

    if (spanRef.current) {
      spanRef.current.style.clipPath = 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)'
    }
  }

  useEffect(() => {
    return () => {
      if (hoverIntervalRef.current) {
        clearInterval(hoverIntervalRef.current)
      }
    }
  }, [])

  const spanContent = href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="no-underline text-inherit"
    >
      {displayHoverText}
    </a>
  ) : (
    displayHoverText
  )

  return (
    <h1
      ref={textRef}
      className={`
        relative font-semibold leading-[0.88] tracking-[-0.08em]
        text-white/10
        bg-gradient-to-r ${gradientClass} bg-clip-text bg-no-repeat
        transition-all duration-500 ease-out
        cursor-pointer
        overflow-hidden
        select-none
        ${className}
      `}
      style={{
        backgroundSize: '0%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        wordBreak: 'break-word',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {displayText}
      <span
        ref={spanRef}
        className="
          absolute inset-0
          text-black font-semibold
          flex items-center
          transition-all duration-400 ease-out
          pointer-events-none
          overflow-hidden
        "
        style={{
          clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)',
          transformOrigin: 'center',
          backgroundColor: '#FFFFFF',
          maxWidth: '100%',
          whiteSpace: 'nowrap',
        }}
      >
        {spanContent}
      </span>
    </h1>
  )
}
