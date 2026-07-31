import { Children, useEffect, useState } from 'react'

/**
 * Aplica un desplazamiento vertical escalonado a una serie de SVGs.
 * Los SVGs pueden pasarse mediante `svgs` o como hijos del componente.
 */
export default function SVGAnimationWrapper({
    svgs,
    children,
    as: Wrapper = 'span',
    ariaLabel,
    animateOnLoad = false,
    className = '',
    itemClassName = '',
    staggerDelay = 0.04,
    duration = 480,
    easing = 'cubic-bezier(0.16, 1, 0.3, 1)',
    ...wrapperProps
}) {
    const [hasRevealed, setHasRevealed] = useState(!animateOnLoad)

    useEffect(() => {
        if (!animateOnLoad) return undefined

        const frameId = window.requestAnimationFrame(() => {
            setHasRevealed(true)
        })

        return () => window.cancelAnimationFrame(frameId)
    }, [animateOnLoad])

    const items = Children.toArray(svgs ?? children)
    const revealClasses = animateOnLoad && !hasRevealed
        ? 'motion-safe:translate-y-full'
        : 'translate-y-0'

    const layerClasses = `
        block h-full
        transition-transform
        motion-reduce:transition-none
    `

    return (
        <Wrapper
            {...wrapperProps}
            className={`group inline-flex items-stretch leading-none ${className}`}
        >
            {ariaLabel && <span className="sr-only">{ariaLabel}</span>}

            {items.map((svg, index) => {
                const delay = `${index * staggerDelay}s`
                const transitionStyle = {
                    transitionDelay: delay,
                    transitionDuration: `${duration}ms`,
                    transitionTimingFunction: easing,
                }

                return (
                    <span
                        key={svg.key ?? index}
                        className={`relative inline-block h-full shrink-0 -ml-px overflow-x-visible overflow-y-clip ${itemClassName}`}
                    >
                        <span
                            aria-hidden={ariaLabel ? 'true' : undefined}
                            className={`${layerClasses} ${revealClasses} group-hover:-translate-y-full motion-reduce:group-hover:translate-y-0 py-0.5`}
                            style={transitionStyle}
                        >
                            {svg}
                        </span>

                        <span
                            aria-hidden="true"
                            className={`${layerClasses} absolute inset-0 translate-y-full group-hover:translate-y-0 motion-reduce:group-hover:translate-y-full`}
                            style={transitionStyle}
                        >
                            {svg}
                        </span>
                    </span>
                )
            })}
        </Wrapper>
    )
}
