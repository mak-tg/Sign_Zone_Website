'use client'
import { useState } from 'react'

export interface StorefrontStyle {
  id: string
  label: string
  title: string
  subtext: string
  desc: string
  best: string
  cost: string
  bg: string
  type: 'lightbox' | 'blade' | 'contour' | 'awning'
}

export const STOREFRONT_STYLES: StorefrontStyle[] = [
  {
    id: 'lightbox',
    label: 'Extruded Lightbox',
    title: 'TEXAS FRESH MARKET',
    subtext: 'ORGANIC GROCERY & DELI',
    desc: 'Heavy-gauge aluminum frame with an unbreakable polycarbonate face. Internal 12V LEDs brightly illuminate your entire logo in vivid color.',
    best: 'Strip centers, grocery, service businesses',
    cost: 'Most Economical',
    bg: '#0A0F1D',
    type: 'lightbox',
  },
  {
    id: 'blade',
    label: 'Projecting Blade',
    title: 'ARTISAN BAKERY',
    subtext: 'FRESH BREAD & COFFEE',
    desc: 'Double-sided sign mounted perpendicular to your storefront facade. Catches pedestrians walking along the sidewalk before they pass your door.',
    best: 'Downtown districts, pedestrian strips',
    cost: 'Moderate',
    bg: '#080C16',
    type: 'blade',
  },
  {
    id: 'contour',
    label: 'Contour Cloud',
    title: "BELLA'S SALON",
    subtext: 'HAIR · NAILS · ESTHETICS',
    desc: 'Custom CNC-routed cabinet welded exactly to the outline of your logo typography and emblem for a premium architectural silhouette.',
    best: 'Boutiques, salons, specialty dining',
    cost: '+25% vs. rectangle',
    bg: '#060A14',
    type: 'contour',
  },
  {
    id: 'awning',
    label: 'Canopy / Awning',
    title: 'CORNER ESPRESSO',
    subtext: 'SPECIALTY COFFEE ROASTERS',
    desc: 'Commercial-grade canvas or rigid metal awning providing pedestrian shade while displaying crisp storefront branding across the valance.',
    best: 'Cafes, bistros, boutique retail',
    cost: 'Varies by width',
    bg: '#0B101E',
    type: 'awning',
  },
]

export default function StorefrontDemo() {
  const [active, setActive] = useState(0)
  const s = STOREFRONT_STYLES[active]

  return (
    <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid var(--line)' }}>
      {/* Simulation Stage */}
      <div
        style={{
          background: s.bg,
          height: 300,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px 20px',
          overflow: 'hidden',
          transition: 'background .4s ease',
        }}
      >
        {/* Commercial Building Stucco/Brick Fascia Texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.12,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            pointerEvents: 'none',
          }}
        />

        {/* Photorealistic Storefront Architecture Vector Blueprint */}
        <div
          style={{
            width: '92%',
            maxWidth: 390,
            height: 190,
            position: 'relative',
            filter: 'drop-shadow(0 20px 32px rgba(0,0,0,0.85))',
          }}
        >
          <svg viewBox="0 0 400 190" style={{ width: '100%', height: '100%', display: 'block' }}>
            <defs>
              <linearGradient id="lightboxFaceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0050F0" />
                <stop offset="100%" stopColor="#062666" />
              </linearGradient>
              <linearGradient id="extrusionMetal" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#374463" />
                <stop offset="50%" stopColor="#1E273A" />
                <stop offset="100%" stopColor="#0E1424" />
              </linearGradient>
              <linearGradient id="canopyStripe" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#062666" />
                <stop offset="33%" stopColor="#062666" />
                <stop offset="33%" stopColor="#0050F0" />
                <stop offset="66%" stopColor="#0050F0" />
                <stop offset="66%" stopColor="#062666" />
                <stop offset="100%" stopColor="#062666" />
              </linearGradient>
            </defs>

            {/* Back Wall Mounting Cleat Bar / Raceway */}
            <rect x="25" y="160" width="350" height="8" rx="2" fill="#1C2436" stroke="#374868" strokeWidth="1" />

            {/* Render Graphic Based on Style */}
            {s.type === 'blade' ? (
              <g transform="translate(40, 20)">
                {/* Wall Bracket & Cantilever Arm */}
                <rect x="20" y="20" width="12" height="120" rx="2" fill="#1C2436" stroke="#4D8DFF" strokeWidth="1" />
                <line x1="32" y1="35" x2="80" y2="35" stroke="#3A4D73" strokeWidth="6" />
                <line x1="32" y1="125" x2="80" y2="125" stroke="#3A4D73" strokeWidth="6" />

                {/* Perpendicular Hanging Blade Box */}
                <rect
                  x="80"
                  y="20"
                  width="220"
                  height="120"
                  rx="8"
                  fill="url(#lightboxFaceGrad)"
                  stroke="#4D8DFF"
                  strokeWidth="2"
                  filter="drop-shadow(0 0 20px rgba(0, 80, 240, 0.6))"
                />
                <circle cx="95" cy="35" r="4" fill="#E6EEFF" />
                <circle cx="95" cy="125" r="4" fill="#E6EEFF" />

                <text x="190" y="75" fill="#FFFFFF" fontFamily="Archivo, sans-serif" fontWeight="900" fontSize="16" letterSpacing="0.05em" textAnchor="middle">
                  {s.title}
                </text>
                <text x="190" y="96" fill="#BFD3FF" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="9" letterSpacing="0.12em" textAnchor="middle">
                  {s.subtext}
                </text>
              </g>
            ) : s.type === 'awning' ? (
              <g transform="translate(30, 25)">
                {/* 3D Sloped Architectural Fabric Canopy */}
                <polygon points="20,80 320,80 300,25 40,25" fill="url(#canopyStripe)" stroke="#0E1A30" strokeWidth="2" />
                {/* Front Scalloped / Box Valance Strip */}
                <rect x="20" y="80" width="300" height="34" rx="2" fill="#04163E" stroke="#0050F0" strokeWidth="1.5" />
                <text x="170" y="102" fill="#FFFFFF" fontFamily="Archivo, sans-serif" fontWeight="900" fontSize="15" letterSpacing="0.08em" textAnchor="middle">
                  {s.title}
                </text>
                {/* Downward Illumination Spotlights */}
                <ellipse cx="90" cy="130" rx="35" ry="12" fill="rgba(77,141,255,0.15)" />
                <ellipse cx="250" cy="130" rx="35" ry="12" fill="rgba(77,141,255,0.15)" />
              </g>
            ) : s.type === 'contour' ? (
              <g transform="translate(30, 20)">
                {/* Contour Routed Cloud Shape */}
                <rect
                  x="30"
                  y="25"
                  width="280"
                  height="100"
                  rx="36"
                  fill="#0B1324"
                  stroke="#FFD54F"
                  strokeWidth="2.5"
                  filter="drop-shadow(0 0 24px rgba(255, 213, 79, 0.55))"
                />
                <text x="170" y="75" fill="#FFFFFF" fontFamily="Archivo, sans-serif" fontWeight="900" fontSize="21" letterSpacing="0.06em" textAnchor="middle" filter="drop-shadow(0 0 10px rgba(255,213,79,0.8))">
                  {s.title}
                </text>
                <text x="170" y="98" fill="#FFD54F" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="9.5" letterSpacing="0.14em" textAnchor="middle">
                  {s.subtext}
                </text>
              </g>
            ) : (
              /* Standard Extruded Lightbox Cabinet */
              <g transform="translate(20, 20)">
                {/* Heavy Extruded Aluminum Perimeter Capping */}
                <rect x="20" y="20" width="320" height="110" rx="10" fill="url(#extrusionMetal)" stroke="#374868" strokeWidth="2" />
                {/* Retainer Edge Frame */}
                <rect x="25" y="25" width="310" height="100" rx="8" fill="url(#lightboxFaceGrad)" stroke="#0050F0" strokeWidth="1.5" filter="drop-shadow(0 0 24px rgba(0, 80, 240, 0.75))" />
                {/* Top Bevel Highlight */}
                <line x1="30" y1="28" x2="330" y2="28" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />

                <text
                  x="180"
                  y="74"
                  fill="#FFFFFF"
                  fontFamily="Archivo, sans-serif"
                  fontWeight="900"
                  fontSize="20"
                  letterSpacing="0.06em"
                  textAnchor="middle"
                  filter="drop-shadow(0 2px 4px rgba(0,0,0,0.8))"
                >
                  {s.title}
                </text>

                <text
                  x="180"
                  y="96"
                  fill="#BFD3FF"
                  fontFamily="Inter, sans-serif"
                  fontWeight="800"
                  fontSize="9.5"
                  letterSpacing="0.14em"
                  textAnchor="middle"
                >
                  {s.subtext}
                </text>
              </g>
            )}
          </svg>
        </div>
      </div>

      {/* Control Panel */}
      <div style={{ background: 'var(--panel)', padding: 20 }}>
        <div className="chips" role="tablist" aria-label="Storefront style" style={{ gap: 8 }}>
          {STOREFRONT_STYLES.map((style, i) => (
            <button
              key={style.id}
              type="button"
              role="tab"
              className="chip chip-d"
              aria-selected={active === i}
              onClick={() => setActive(i)}
            >
              {style.label}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', marginTop: 16 }}>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: '#D5DCEA', flex: '1 1 300px' }}>
            {s.desc}
          </p>
          <div>
            <div style={{ fontSize: 13, color: 'var(--dmuted)' }}>Best for</div>
            <div style={{ fontWeight: 700, color: '#fff', maxWidth: 220 }}>{s.best}</div>
            <div style={{ fontSize: 13, color: 'var(--dmuted)', marginTop: 8 }}>Cost benchmark</div>
            <div style={{ fontWeight: 700, color: 'var(--elec)' }}>{s.cost}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
