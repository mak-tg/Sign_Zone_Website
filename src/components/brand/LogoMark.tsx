import { useId } from 'react'
import paths from './logoPaths.json'

/**
 * Sign Zone logo, rebuilt as flat-colour SVG.
 *
 * The production logo (public/images/logo.png) is a raster, so the outlines in
 * logoPaths.json were traced from it. Three independent fills ("SIGN", "ZONE", arrow)
 * so each palette can recolour them. Flat fills only: no gradients, strokes or
 * shadows, so it stays valid as cut vinyl and as fabricated channel letters.
 *
 * variant "full": SIGN over ZONE with the arrow between and to the right (520 x 214).
 * variant "icon": near-square mark for favicon / profile photo. "S" over "Z" with
 *   the arrow shaft between them and the arrowhead tucked right beside them (240 x 214).
 */
export type LogoMarkProps = {
  /** Fill for "SIGN" */
  wordOne: string
  /** Fill for "ZONE" */
  wordTwo: string
  /** Fill for the arrow */
  arrow: string
  variant?: 'full' | 'icon'
  className?: string
  style?: React.CSSProperties
  /** Accessible name. Omit for decorative use. */
  title?: string
}

export default function LogoMark({
  wordOne,
  wordTwo,
  arrow,
  variant = 'full',
  className,
  style,
  title,
}: LogoMarkProps) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '')
  const a11y = title ? { role: 'img', 'aria-label': title } : { 'aria-hidden': true as const }

  if (variant === 'icon') {
    const HEAD_SHIFT = 280 // moves the arrowhead (x 430-520) next to the shaft stub (x 0-150)
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 240 214"
        className={className}
        style={style}
        focusable="false"
        {...a11y}
      >
        <defs>
          <clipPath id={`${uid}l`}>
            <rect x="0" y="0" width="150" height="214" />
          </clipPath>
          <clipPath id={`${uid}r`}>
            <rect x="430" y="0" width="90" height="214" />
          </clipPath>
        </defs>
        <path d={paths.S} fill={wordOne} fillRule="evenodd" />
        <path d={paths.Z} fill={wordTwo} fillRule="evenodd" />
        <path d={paths.arrow} fill={arrow} fillRule="evenodd" clipPath={`url(#${uid}l)`} />
        <path
          d={paths.arrow}
          fill={arrow}
          fillRule="evenodd"
          clipPath={`url(#${uid}r)`}
          transform={`translate(${-HEAD_SHIFT} 0)`}
        />
      </svg>
    )
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 520 214"
      className={className}
      style={style}
      focusable="false"
      {...a11y}
    >
      <path d={paths.sign} fill={wordOne} fillRule="evenodd" />
      <path d={paths.zone} fill={wordTwo} fillRule="evenodd" />
      <path d={paths.arrow} fill={arrow} fillRule="evenodd" />
    </svg>
  )
}
