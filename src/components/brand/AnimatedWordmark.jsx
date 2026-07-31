import A1 from '../../assets/leters-svg/A1.svg'
import D1 from '../../assets/leters-svg/D1.svg'
import A2 from '../../assets/leters-svg/A2.svg'
import S1 from '../../assets/leters-svg/S1.svg'
import T1 from '../../assets/leters-svg/T1.svg'
import R1 from '../../assets/leters-svg/R1.svg'
import A3 from '../../assets/leters-svg/A3.svg'
import SVGAnimationWrapper from '../ui/SVGAnimationWrapper'

const WORDMARK_LETTERS = [
    { key: 'a-1', src: A1 },
    { key: 'd-1', src: D1, spacingClass: '-ml-1' },
    { key: 'a-2', src: A2, spacingClass: 'ml-2 sm:ml-3' },
    { key: 's-1', src: S1, spacingClass: 'ml-1' },
    { key: 't-1', src: T1, spacingClass: 'ml-[-16%]' },
    { key: 'r-1', src: R1, spacingClass: 'ml-[-16%]' },
    { key: 'a-3', src: A3, spacingClass: '-ml-[15%] ' },
]

export default function AnimatedWordmark({
    ariaLabel = 'AD ASTRA',
    className = '',
    ...wrapperProps
}) {
    return (
        <SVGAnimationWrapper
            {...wrapperProps}
            ariaLabel={ariaLabel}
            className={className}
        >
            {WORDMARK_LETTERS.map(({ key, src, spacingClass = '' }) => (
                <img
                    key={key}
                    alt=""
                    aria-hidden="true"
                    className={`block h-full w-auto max-w-none  ${spacingClass}`}
                    src={src}
                />
            ))}
        </SVGAnimationWrapper>
    )
}
