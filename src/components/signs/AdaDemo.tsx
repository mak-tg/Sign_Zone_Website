'use client'
import { useState } from 'react'

export interface AdaStyle {
  id: string
  label: string
  title: string
  subtitle: string
  brailleDots: string
  desc: string
  best: string
  cost: string
  wallBg: string
  plaqueBg: string
}

export const ADA_STYLES: AdaStyle[] = [
  {
    id: 'restroom',
    label: 'All-Gender Restroom',
    title: 'RESTROOM',
    subtitle: 'ALL-GENDER · ACCESSIBLE',
    brailleDots: '⠗⠑⠎⠞⠗⠕⠕⠍',
    desc: 'Tactile lettering with Grade 2 Braille and raised universal accessibility pictograms at compliant 48"–60" mounting height.',
    best: 'Medical facilities, restaurants, corporate offices',
    cost: 'Standard ADA Unit',
    wallBg: '#090E1A',
    plaqueBg: '#062666',
  },
  {
    id: 'room-id',
    label: 'Room & Suite ID',
    title: 'SUITE 400',
    subtitle: 'EXECUTIVE BOARDROOM',
    brailleDots: '⠎⠥⠊⠞⠑⠀⠙⠚⠚',
    desc: 'Dual-layer acrylic with raised 1/32" tactile numbers, dome Braille, and a laser-machined interchangeable tenant name slider.',
    best: 'Executive suites, clinics, legal offices',
    cost: '+15% for slider slot',
    wallBg: '#0C1220',
    plaqueBg: '#121A2E',
  },
  {
    id: 'wayfinding',
    label: 'Directional Wayfinding',
    title: 'ELEVATORS & STAIRS →',
    subtitle: 'WING B · SUITES 200 - 280',
    brailleDots: '⠎⠞⠁⠊⠗⠎',
    desc: 'High-contrast hallway directional sign pointing visitors to stairwells, emergency exits, and department wings.',
    best: 'Hospitals, universities, multi-story buildings',
    cost: 'Multi-directional',
    wallBg: '#080E1C',
    plaqueBg: '#0050F0',
  },
  {
    id: 'evac-map',
    label: 'Evacuation Map',
    title: 'EMERGENCY EXIT',
    subtitle: 'STAIRWELL 2 · FLOOR 4',
    brailleDots: '⠑⠭⠊⠞',
    desc: 'Non-glare acrylic emergency egress map displaying mandatory floor routes, fire pull stations, and storm shelter zones.',
    best: 'Mandatory for commercial occupancy',
    cost: 'Per floor plan',
    wallBg: '#0D111A',
    plaqueBg: '#1C2436',
  },
]

export default function AdaDemo() {
  const [active, setActive] = useState(0)
  const s = ADA_STYLES[active]

  return (
    <div className="ada-sign-demo" style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid var(--line)' }}>
      {/* Simulation Stage */}
      <div
        style={{
          background: s.wallBg,
          height: 300,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
          overflow: 'hidden',
          transition: 'background .4s ease',
        }}
      >
        {/* Architectural Plaque Container (Rendered pure SVG for crisp millimeter scale) */}
        <div
          style={{
            width: '85%',
            maxWidth: 320,
            height: 200,
            position: 'relative',
            filter: 'drop-shadow(0 20px 32px rgba(0,0,0,0.8)) drop-shadow(0 4px 8px rgba(0,0,0,0.6))',
          }}
        >
          <svg viewBox="0 0 320 200" style={{ width: '100%', height: '100%', display: 'block' }}>
            <defs>
              <linearGradient id="plaqueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={s.plaqueBg} />
                <stop offset="100%" stopColor="#040D1D" />
              </linearGradient>
              <linearGradient id="bevelTop" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.7)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
              </linearGradient>
            </defs>

            {/* Plaque Solid Acrylic Body */}
            <rect
              x="2"
              y="2"
              width="316"
              height="196"
              rx="12"
              fill="url(#plaqueGrad)"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1.5"
            />

            {/* Top Bevel Highlight */}
            <line x1="14" y1="4" x2="306" y2="4" stroke="url(#bevelTop)" strokeWidth="1.5" />

            {/* Pictogram Graphic Area */}
            {s.id === 'restroom' && (
              <g transform="translate(160, 48)">
                {/* Man */}
                <circle cx="-32" cy="-14" r="5" fill="#FFFFFF" />
                <path d="M -39 -7 L -25 -7 A 3 3 0 0 1 -22 -4 L -22 6 L -26 6 L -26 18 L -30 18 L -30 6 L -34 6 L -34 18 L -38 18 L -38 6 L -42 6 L -42 -4 A 3 3 0 0 1 -39 -7 Z" fill="#FFFFFF" />
                {/* Woman */}
                <circle cx="0" cy="-14" r="5" fill="#FFFFFF" />
                <path d="M 0 -7 L 7 6 L 3 6 L 3 18 L -3 18 L -3 6 L -7 6 Z" fill="#FFFFFF" />
                {/* Wheelchair Accessible */}
                <circle cx="32" cy="-14" r="4" fill="#FFFFFF" />
                <path d="M 40 -2 L 32 -2 L 30 7 L 38 7 L 38 9 L 28 9 L 26 -4 L 38 -4 Z" fill="#FFFFFF" />
                <circle cx="30" cy="11" r="7" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
              </g>
            )}

            {s.id === 'room-id' && (
              <g transform="translate(160, 42)">
                <rect x="-24" y="-18" width="48" height="34" rx="4" fill="none" stroke="#4D8DFF" strokeWidth="2" />
                <circle cx="12" cy="0" r="2.5" fill="#4D8DFF" />
              </g>
            )}

            {s.id === 'wayfinding' && (
              <g transform="translate(160, 44)">
                <path d="M -30 14 L -16 14 L -16 4 L -2 4 L -2 -6 L 12 -6 L 12 -16 L 26 -16" fill="none" stroke="#FFFFFF" strokeWidth="3" />
                <path d="M 32 -16 L 42 -16 M 38 -20 L 42 -16 L 38 -12" fill="none" stroke="#4D8DFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            )}

            {s.id === 'evac-map' && (
              <g transform="translate(160, 42)">
                <rect x="-28" y="-16" width="56" height="32" rx="4" fill="none" stroke="#FFB74D" strokeWidth="2" strokeDasharray="4 2" />
                <path d="M -16 8 L 0 -8 L 16 8" fill="none" stroke="#FFB74D" strokeWidth="2" />
              </g>
            )}

            {/* Tactile 1/32" Main Heading */}
            <text
              x="160"
              y="108"
              fill="#FFFFFF"
              fontFamily="Archivo, sans-serif"
              fontWeight="900"
              fontSize="20"
              letterSpacing="0.08em"
              textAnchor="middle"
              filter="drop-shadow(0 2px 2px rgba(0,0,0,0.9))"
            >
              {s.title}
            </text>

            {/* Tactile Subtitle */}
            <text
              x="160"
              y="126"
              fill="#BFD3FF"
              fontFamily="Inter, sans-serif"
              fontWeight="700"
              fontSize="9"
              letterSpacing="0.14em"
              textAnchor="middle"
            >
              {s.subtitle}
            </text>

            {/* Grade 2 Dome Braille Dots (Soft authentic tactile beads) */}
            <text
              x="160"
              y="154"
              fill="rgba(255,255,255,0.45)"
              fontFamily="monospace"
              fontSize="16"
              letterSpacing="0.28em"
              textAnchor="middle"
            >
              {s.brailleDots}
            </text>

            {/* Bottom Inspection Spec Strip */}
            <line x1="20" y1="172" x2="300" y2="172" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <text
              x="25"
              y="186"
              fill="rgba(255,255,255,0.55)"
              fontFamily="Inter, sans-serif"
              fontWeight="800"
              fontSize="7.5"
              letterSpacing="0.12em"
            >
              TAS / ADA §703 COMPLIANT
            </text>
            <text
              x="295"
              y="186"
              fill="rgba(255,255,255,0.55)"
              fontFamily="Inter, sans-serif"
              fontWeight="800"
              fontSize="7.5"
              letterSpacing="0.12em"
              textAnchor="end"
            >
              GRADE 2 BRAILLE · TACTILE 1/32&quot;
            </text>
          </svg>
        </div>
      </div>

      {/* Control Panel */}
      <div style={{ background: 'var(--panel)', padding: 20 }}>
        <div className="chips" role="tablist" aria-label="ADA sign style" style={{ gap: 8 }}>
          {ADA_STYLES.map((style, i) => (
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
            <div style={{ fontSize: 13, color: 'var(--dmuted)', marginTop: 8 }}>Cost tier</div>
            <div style={{ fontWeight: 700, color: 'var(--elec)' }}>{s.cost}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
