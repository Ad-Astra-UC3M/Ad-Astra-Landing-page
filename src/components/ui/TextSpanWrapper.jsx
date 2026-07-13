import { useEffect, useState } from 'react'

// El siguiente componente esta basado en el text wrap de la pagina https://landonorris.com/ y lo he replicado en React
// He usado este video para parte del codigo https://www.youtube.com/watch?v=9H34nxxVEgc

/**
 * Componente que aplica el efecto de deslizamiento de texto como en la pagina de Lando Norris.
 * Utiliza dos capas por letra y CSS en línea para el retraso escalonado (staggering).
 */
export default function TextSpanWrapper({
    children,
    makeSmall = false,
    animateOnLoad = false,
    className = '',
    classname = '',
}) {
    const [hasRevealed, setHasRevealed] = useState(!animateOnLoad)

    useEffect(() => {
        if (!animateOnLoad) return undefined

        const frameId = window.requestAnimationFrame(() => {
            setHasRevealed(true)
        })

        return () => window.cancelAnimationFrame(frameId)
    }, [animateOnLoad])

    // 1. Segmenter: Divide el texto en caracteres de forma segura (incluyendo emojis)
    // Usa 'grapheme' para dividir correctamente emojis y caracteres compuestos
    const text = typeof children === 'string' ? children : String(children ?? '')
    const segmenter = (typeof Intl !== 'undefined' && 'Segmenter' in Intl)
        ? new Intl.Segmenter(undefined, { granularity: 'grapheme' })
        : null

    const letters = segmenter
        ? Array.from(segmenter.segment(text))
        : [...text].map(ch => ({ segment: ch }))

    // La altura en em sigue siempre el tamaño de la tipografía heredada.
    const letterContainerClasses = `
        inline-block relative h-[1em] align-top leading-none overflow-hidden
        transition-colors duration-300
    `

    // Clase para las capas animadas (movimiento vertical)
    const layerClasses = `
        block h-full
        transition-transform duration-300 timing-custom-ease
        motion-reduce:transition-none 
    `

    const revealClasses = animateOnLoad && !hasRevealed
        ? 'motion-safe:translate-y-full'
        : 'translate-y-0'

    const resolvedClassName = className || classname

    const headingClasses = `
        font-extrabold uppercase group leading-none text-xl sm:text-2xl
        ${!makeSmall ? ' md:text-5xl lg:text-6xl' : ''}
        ${resolvedClassName}
    `

    return (
        <h1 aria-label={text} className={headingClasses}>
            {letters.map((segment, index) => {
                const letter = segment.segment === ' ' ? '\u00A0' : segment.segment

                // El retraso se calcula dinámicamente y se aplica como CSS en línea
                const delay = `${index * 0.01}s`

                return (
                    <span
                        key={letter + index}
                        className={letterContainerClasses}
                    >
                        {/* -------------------- CAPA SUPERIOR (Contenido principal) -------------------- */}
                        <span
                            className={`${layerClasses} ${revealClasses} group-hover:-translate-y-full`}
                            style={{ transitionDelay: delay }}
                        >
                            {letter}
                        </span>

                        {/* -------------------- CAPA INFERIOR (Oculta, se desliza hacia arriba) -------------------- */}
                        <span
                            aria-hidden="true"
                            className={`${layerClasses} ${revealClasses} group-hover:-translate-y-full`}
                            style={{ transitionDelay: delay }}
                        >
                            {letter}
                        </span>
                    </span>
                )
            })}
        </h1>
    )
}
