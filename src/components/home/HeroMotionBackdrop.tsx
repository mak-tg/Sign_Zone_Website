export default function HeroMotionBackdrop() {
  return (
    <div
      className="hero-motion-bg"
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {/* Layer 1: Primary sculpted architectural fold with slow 3D camera push */}
      <img
        src="/images/hero-wave-bg.jpg"
        alt=""
        className="hero-wave-img"
        style={{
          position: 'absolute',
          inset: '-6%',
          width: '112%',
          height: '112%',
          maxWidth: 'none',
          maxHeight: 'none',
          objectFit: 'cover',
          objectPosition: '58% 48%',
        }}
      />

      {/* Layer 2: Counter-drifting depth plane creating 3D parallax separation */}
      <img
        src="/images/hero-wave-bg.jpg"
        alt=""
        className="hero-wave-img-depth"
        style={{
          position: 'absolute',
          inset: '-6%',
          width: '112%',
          height: '112%',
          maxWidth: 'none',
          maxHeight: 'none',
          objectFit: 'cover',
          objectPosition: '62% 52%',
        }}
      />

      {/* Layer 3: Moving studio light sweep across the folded surface */}
      <div
        className="hero-wave-sheen"
        style={{
          position: 'absolute',
          inset: '-30%',
        }}
      />

      {/* Layer 4: Subtle volumetric cobalt aura */}
      <div
        className="hero-wave-ambient"
        style={{
          position: 'absolute',
          inset: 0,
        }}
      />

      {/* Layer 5: Flowing architectural edge-light traces following the fold geometry */}
      <svg
        className="hero-wave-traces"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <defs>
          <linearGradient id="waveTraceBlue" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0050F0" stopOpacity="0" />
            <stop offset="40%" stopColor="#0050F0" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#4D8DFF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="waveTraceSoft" x1="0%" y1="50%" x2="100%" y2="20%">
            <stop offset="0%" stopColor="#0050F0" stopOpacity="0" />
            <stop offset="50%" stopColor="#4D8DFF" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0050F0" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="M 140 900 C 520 710, 960 490, 1495 148"
          fill="none"
          stroke="url(#waveTraceBlue)"
          strokeWidth="3"
          strokeLinecap="round"
          className="hero-trace-line trace-1"
        />
        <path
          d="M 0 245 C 460 230, 880 245, 1235 290"
          fill="none"
          stroke="url(#waveTraceSoft)"
          strokeWidth="2.2"
          strokeLinecap="round"
          className="hero-trace-line trace-2"
        />
        <path
          d="M 480 735 C 760 560, 1140 385, 1465 568"
          fill="none"
          stroke="url(#waveTraceBlue)"
          strokeWidth="2.2"
          strokeLinecap="round"
          className="hero-trace-line trace-3"
        />
      </svg>
    </div>
  )
}
