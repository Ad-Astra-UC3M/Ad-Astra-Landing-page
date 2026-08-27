import { useEffect, useState } from 'react'

// El siguiente componente esta basado en el text wrap de la pagina https://landonorris.com/ y lo he replicado en React
// He usado este video para parte del codigo https://www.youtube.com/watch?v=9H34nxxVEgc

/**
 * Componente que aplica el efecto de deslizamiento de texto como en la pagina de Lando Norris.
 * Utiliza dos capas por letra y CSS en línea para el retraso escalonado (staggering).
 */
export default function TextSpanWrapper({
    children,
    as: Heading = 'h1',
    makeSmall = false,
    animateOnLoad = false,
    className = '',
    classname = '',
    ...headingProps
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

    let staggerIndex = 0
    const textGroups = text
        .split(/(\s+)/)
        .filter(Boolean)
        .map((group, groupIndex) => {
            if (/^\s+$/.test(group)) {
                return {
                    key: `space-${groupIndex}`,
                    isWhitespace: true,
                    value: group,
                }
            }

            const letters = segmenter
                ? Array.from(segmenter.segment(group))
                : [...group].map(ch => ({ segment: ch }))

            return {
                key: `word-${groupIndex}`,
                isWhitespace: false,
                letters: letters.map(({ segment }) => ({
                    segment,
                    staggerIndex: staggerIndex++,
                })),
            }
        })

    // `1lh` equivale al line-height calculado: sincroniza el recorte y el recorrido animado.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/length#lh
    const letterContainerClasses = `
        inline-block relative h-[1lh] align-top overflow-hidden
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
    ${resolvedClassName}
    group leading-[1.15] sm:leading-[1.08] md:leading-[1.05]
    `

    return (
        <Heading {...headingProps} aria-label={text} className={headingClasses}>
            {textGroups.map((group) => {
                if (group.isWhitespace) {
                    return (
                        <span
                            key={group.key}
                            aria-hidden="true"
                            className="whitespace-pre-wrap"
                        >
                            {group.value}
                        </span>
                    )
                }

                return (
                    <span
                        key={group.key}
                        className="inline-block whitespace-nowrap"
                    >
                        {group.letters.map(({ segment, staggerIndex: index }) => {
                            // El retraso sigue siendo global aunque las letras se agrupen por palabras.
                            const delay = `${index * 0.01}s`

                            return (
                                <span
                                    key={segment + index}
                                    className={letterContainerClasses}
                                >
                                    {/* -------------------- CAPA SUPERIOR (Contenido principal) -------------------- */}
                                    <span
                                        className={`${layerClasses} ${revealClasses} group-hover:-translate-y-full`}
                                        style={{ transitionDelay: delay }}
                                    >
                                        {segment}
                                    </span>

                                    {/* -------------------- CAPA INFERIOR (Oculta, se desliza hacia arriba) -------------------- */}
                                    <span
                                        aria-hidden="true"
                                        className={`${layerClasses} ${revealClasses} group-hover:-translate-y-full`}
                                        style={{ transitionDelay: delay }}
                                    >
                                        {segment}
                                    </span>
                                </span>
                            )
                        })}
                    </span>
                )
            })}
        </Heading>
    )
}