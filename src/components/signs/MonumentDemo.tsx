'use client'
import { useState } from 'react'

export interface MonumentStyle {
  id: string
  label: string
  title: string
  subtitle: string
  desc: string
  best: string
  cost: string
  bg: string
  baseType: 'stone' | 'masonry' | 'tenant' | 'digital'
}

export const MONUMENT_STYLES: MonumentStyle[] = [
  {
    id: 'push-through',
    label: 'Push-through LED',
    title: 'THE RIDGEWAY',
    subtitle: 'MEDICAL & COMMERCE PARK',
    desc: 'Acrylic letters route through a satin aluminum face, glowing crisp white at night while keeping the sign face dark and legible.',
    best: 'Corporate campuses, medical plazas',
    cost: 'Baseline',
    bg: '#070C18',
    baseType: 'stone',
  },
  {
    id: 'masonry-stone',
    label: 'Stone & Masonry',
    title: 'LAKESIDE PLAZA',
    subtitle: 'SUITES 100 - 450',
    desc: 'Natural or cast limestone masonry base matched to building brick with individual dimensional bronze or black standoff letters.',
    best: 'HOAs, banks, high-end developments',
    cost: '+20% vs. aluminum',
    bg: '#0A0F1D',
    baseType: 'masonry',
  },
  {
    id: 'multi-tenant',
    label: 'Multi-Tenant',
    title: 'NORTH PARK VILLAGE',
    subtitle: '6 SLOTS · ILLUMINATED PANELS',
    desc: 'Internal steel armature supporting modular illuminated tenant directory panels with slide-in acrylic faces for effortless lease changes.',
    best: 'Shopping strip centers, retail hubs',
    cost: '+30% vs. baseline',
    bg: '#080E1C',
    baseType: 'tenant',
  },
  {
    id: 'digital-emc',
    label: 'Digital EMC',
    title: 'FIRST BAPTIST',
    subtitle: 'SUNDAY 10AM · WORSHIP SERVICE',
    desc: 'Combines an architectural tenant identification top header with a dynamic full-color programmable electronic message center for event schedules.',
    best: 'Churches, schools, municipal centers',
    cost: '+80% – 120%',
    bg: '#05070D',
    baseType: 'digital',
  },
]

export default function MonumentDemo() {
  const [active, setActive] = useState(0)
  const s = MONUMENT_STYLES[active]

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
          padding: '24px 20px 16px',
          overflow: 'hidden',
          transition: 'background .4s ease',
        }}
      >
        {/* Landscape Grass & Soil Substrate */}
        <div
          style={{
            position: 'absolute',
            bottom: 24,
            left: 0,
            right: 0,
            height: 6,
            background: 'linear-gradient(180deg, #1C2E1E 0%, #0E1A10 100%)',
            borderTop: '2px solid #2E4E30',
          }}
        />

        {/* Photorealistic Monument Architecture Vector Blueprint */}
        <div
          style={{
            width: '90%',
            maxWidth: 380,
            height: 195,
            position: 'relative',
            filter: 'drop-shadow(0 18px 30px rgba(0,0,0,0.8))',
          }}
        >
          <svg viewBox="0 0 400 200" style={{ width: '100%', height: '100%', display: 'block' }}>
            <defs>
              {/* Stone Base Gradient */}
              <linearGradient id="stoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4A453E" />
                <stop offset="50%" stopColor="#36322C" />
                <stop offset="100%" stopColor="#25221E" />
              </linearGradient>
              {/* Brick Base Pattern */}
              <pattern id="brickPattern" x="0" y="0" width="24" height="12" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="23" height="5" fill="#8C4E34" />
                <rect x="12" y="6" width="23" height="5" fill="#7A432D" />
                <rect x="0" y="6" width="11" height="5" fill="#7A432D" />
              </pattern>
              {/* Brushed Aluminum Sign Cabinet Body */}
              <linearGradient id="metalCabinet" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1B2438" />
                <stop offset="60%" stopColor="#0B1222" />
                <stop offset="100%" stopColor="#050912" />
              </linearGradient>
              {/* Bevel Highlight */}
              <linearGradient id="monumentBevel" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
              </linearGradient>
              {/* LED Matrix Screen Pattern for Digital */}
              <pattern id="ledMatrix" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.2" fill="#FFC107" opacity="0.8" />
              </pattern>
            </defs>

            {/* Base Masonry Pillars Left and Right */}
            {s.baseType === 'masonry' ? (
              <g>
                <rect x="35" y="45" width="40" height="135" rx="3" fill="url(#brickPattern)" stroke="#4A2518" strokeWidth="1.5" />
                <rect x="325" y="45" width="40" height="135" rx="3" fill="url(#brickPattern)" stroke="#4A2518" strokeWidth="1.5" />
                <rect x="30" y="38" width="50" height="10" rx="2" fill="#D5C5B5" stroke="#9A8878" strokeWidth="1" />
                <rect x="320" y="38" width="50" height="10" rx="2" fill="#D5C5B5" stroke="#9A8878" strokeWidth="1" />
              </g>
            ) : (
              <g>
                <rect x="45" y="40" width="30" height="140" rx="2" fill="url(#stoneGrad)" stroke="#1F1C18" strokeWidth="1" />
                <rect x="325" y="40" width="30" height="140" rx="2" fill="url(#stoneGrad)" stroke="#1F1C18" strokeWidth="1" />
                <rect x="40" y="34" width="40" height="8" rx="1" fill="#786F65" />
                <rect x="320" y="34" width="40" height="8" rx="1" fill="#786F65" />
              </g>
            )}

            {/* Main Sign Cabinet (Spans Between Pillars) */}
            <rect
              x="70"
              y="40"
              width="260"
              height="105"
              rx="6"
              fill="url(#metalCabinet)"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="1.5"
            />
            {/* Top Bevel Line */}
            <line x1="75" y1="42" x2="325" y2="42" stroke="url(#monumentBevel)" strokeWidth="1.5" />

            {/* Content Based on Style */}
            {s.baseType === 'digital' ? (
              <g>
                {/* Static Upper Header */}
                <rect x="75" y="45" width="250" height="34" rx="4" fill="#062666" />
                <text x="200" y="68" fill="#FFFFFF" fontFamily="Archivo, sans-serif" fontWeight="900" fontSize="14" letterSpacing="0.08em" textAnchor="middle">
                  {s.title}
                </text>
                {/* Full-Color Digital Message Board Screen */}
                <rect x="75" y="84" width="250" height="55" rx="3" fill="#000000" stroke="#FFC107" strokeWidth="1" />
                <rect x="75" y="84" width="250" height="55" fill="url(#ledMatrix)" />
                <text x="200" y="118" fill="#FFD54F" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="10" letterSpacing="0.08em" textAnchor="middle" filter="drop-shadow(0 0 6px #FFC107)">
                  {s.subtitle}
                </text>
              </g>
            ) : s.baseType === 'tenant' ? (
              <g>
                {/* Plaza Header */}
                <text x="200" y="66" fill="#FFFFFF" fontFamily="Archivo, sans-serif" fontWeight="900" fontSize="15" letterSpacing="0.06em" textAnchor="middle">
                  {s.title}
                </text>
                {/* Grid of 4 Tenant Directory Slots */}
                <g transform="translate(78, 76)">
                  <rect x="0" y="0" width="118" height="26" rx="3" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.15)" />
                  <text x="59" y="17" fill="#BFD3FF" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="8.5" textAnchor="middle">PRIME DENTAL</text>

                  <rect x="126" y="0" width="118" height="26" rx="3" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.15)" />
                  <text x="185" y="17" fill="#BFD3FF" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="8.5" textAnchor="middle">METRO SPA</text>

                  <rect x="0" y="30" width="118" height="26" rx="3" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.15)" />
                  <text x="59" y="47" fill="#BFD3FF" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="8.5" textAnchor="middle">LAW GROUP</text>

                  <rect x="126" y="30" width="118" height="26" rx="3" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.15)" />
                  <text x="185" y="47" fill="#BFD3FF" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="8.5" textAnchor="middle">COFFEE ROASTERS</text>
                </g>
              </g>
            ) : (
              <g>
                {/* Push-Through Acrylic Glow Effect */}
                <text
                  x="200"
                  y="92"
                  fill="#FFFFFF"
                  fontFamily="Archivo, sans-serif"
                  fontWeight="900"
                  fontSize="21"
                  letterSpacing="0.06em"
                  textAnchor="middle"
                  filter="drop-shadow(0 0 14px rgba(77, 141, 255, 0.95)) drop-shadow(0 2px 3px rgba(0,0,0,0.9))"
                >
                  {s.title}
                </text>
                <text
                  x="200"
                  y="118"
                  fill="#9DB8E8"
                  fontFamily="Inter, sans-serif"
                  fontWeight="700"
                  fontSize="9.5"
                  letterSpacing="0.14em"
                  textAnchor="middle"
                >
                  {s.subtitle}
                </text>
              </g>
            )}

            {/* Bottom Foundation Base Curb */}
            <rect
              x="25"
              y="178"
              width="350"
              height="18"
              rx="3"
              fill="#252F42"
              stroke="#3D4B68"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>

      {/* Control Panel */}
      <div style={{ background: 'var(--panel)', padding: 20 }}>
        <div className="chips" role="tablist" aria-label="Monument style" style={{ gap: 8 }}>
          {MONUMENT_STYLES.map((style, i) => (
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
