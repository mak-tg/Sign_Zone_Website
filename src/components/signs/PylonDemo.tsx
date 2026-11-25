'use client'
import { useState } from 'react'

export interface PylonStyle {
  id: string
  label: string
  title: string
  slots: string[]
  desc: string
  best: string
  height: string
  bg: string
  poleType: 'single' | 'dual' | 'lattice' | 'digital'
}

export const PYLON_STYLES: PylonStyle[] = [
  {
    id: 'highway-retail',
    label: 'Highway Center',
    title: 'METROPLEX CROSSING',
    slots: ['CINEMA 14', 'METRO BISTRO', 'HORIZON DENTAL', 'LUMEN FITNESS'],
    desc: 'Towering multi-tenant pylon sign visible from 1,200+ feet along interstate corridors. Individually lit acrylic tenant slots.',
    best: 'I-35, I-635, Hwy 75 regional plazas',
    height: '45 – 65 ft',
    bg: '#060B18',
    poleType: 'dual',
  },
  {
    id: 'monopole',
    label: 'Single Monopole',
    title: 'TEXAS TRAVEL PLAZA',
    slots: ['FUEL · FOOD · DIESEL'],
    desc: 'Massive heavy-duty steel pipe elevating an oversized illuminated contour logo above tree canopies and highway overpasses.',
    best: 'Dealerships, gas stations, truck stops',
    height: '35 – 50 ft',
    bg: '#080F22',
    poleType: 'single',
  },
  {
    id: 'emc-tower',
    label: 'LED Video Tower',
    title: 'GATEWAY ARENA',
    slots: ['CONCERT TONIGHT · TICKETS OPEN'],
    desc: 'Combines architectural steel branding with a full-color 10mm or 16mm outdoor video screen for high-impact moving promotions.',
    best: 'Entertainment districts, churches',
    height: '40 – 60 ft',
    bg: '#04070F',
    poleType: 'digital',
  },
  {
    id: 'dual-pole',
    label: 'Dual Architectural',
    title: 'INNOVATION CAMPUS',
    slots: ['RESEARCH PARK', 'BLDG 100 - 400'],
    desc: 'Enclosed decorative columns clad in custom-formed aluminum panels for upscale executive parks and hospital entrances.',
    best: 'Medical districts, office parks',
    height: '25 – 40 ft',
    bg: '#0A1224',
    poleType: 'lattice',
  },
]

export default function PylonDemo() {
  const [active, setActive] = useState(0)
  const s = PYLON_STYLES[active]

  return (
    <div className="pylon-sign-demo" style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid var(--line)' }}>
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
          padding: '20px 20px 14px',
          overflow: 'hidden',
          transition: 'background .4s ease',
        }}
      >
        {/* Distant Highway Horizon Silhouette */}
        <div
          style={{
            position: 'absolute',
            bottom: 24,
            left: 0,
            right: 0,
            height: 4,
            background: '#1A2234',
            borderTop: '2px solid #334466',
          }}
        />

        {/* Photorealistic Pylon Tower Vector */}
        <div
          style={{
            width: '90%',
            maxWidth: 320,
            height: 220,
            position: 'relative',
            filter: 'drop-shadow(0 18px 30px rgba(0,0,0,0.85))',
          }}
        >
          <svg viewBox="0 0 320 220" style={{ width: '100%', height: '100%', display: 'block' }}>
            <defs>
              <linearGradient id="pylonSteel" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1C2438" />
                <stop offset="35%" stopColor="#4A5B7D" />
                <stop offset="65%" stopColor="#25324E" />
                <stop offset="100%" stopColor="#101828" />
              </linearGradient>
              <linearGradient id="headCabinetGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#082A7A" />
                <stop offset="100%" stopColor="#041236" />
              </linearGradient>
              <pattern id="matrixDotsPylon" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.2" fill="#FFB74D" opacity="0.8" />
              </pattern>
            </defs>

            {/* Steel Support Poles */}
            {s.poleType === 'single' ? (
              <g>
                <rect x="148" y="110" width="24" height="90" fill="url(#pylonSteel)" stroke="#0E1524" strokeWidth="1" />
                {/* Gusset support plates */}
                <polygon points="144,198 148,150 148,198" fill="#2C3B59" />
                <polygon points="176,198 172,150 172,198" fill="#2C3B59" />
              </g>
            ) : s.poleType === 'dual' ? (
              <g>
                <rect x="110" y="130" width="16" height="70" fill="url(#pylonSteel)" />
                <rect x="194" y="130" width="16" height="70" fill="url(#pylonSteel)" />
                {/* Structural cross truss bars */}
                <line x1="126" y1="140" x2="194" y2="165" stroke="#374868" strokeWidth="3" />
                <line x1="126" y1="165" x2="194" y2="140" stroke="#374868" strokeWidth="3" />
                <line x1="126" y1="168" x2="194" y2="192" stroke="#374868" strokeWidth="3" />
                <line x1="126" y1="192" x2="194" y2="168" stroke="#374868" strokeWidth="3" />
              </g>
            ) : (
              <g>
                {/* Architectural decorative clad pylon pillars */}
                <rect x="95" y="110" width="24" height="90" rx="3" fill="#1C273E" stroke="#3B4F75" strokeWidth="1.5" />
                <rect x="201" y="110" width="24" height="90" rx="3" fill="#1C273E" stroke="#3B4F75" strokeWidth="1.5" />
              </g>
            )}

            {/* Concrete Drilled Pier Foundation Footing */}
            <rect x="80" y="198" width="160" height="14" rx="2" fill="#222C3E" stroke="#40506D" strokeWidth="1" />

            {/* Main Upper Header Cabinet */}
            <rect
              x="50"
              y="12"
              width="220"
              height="45"
              rx="6"
              fill="url(#headCabinetGrad)"
              stroke="#0050F0"
              strokeWidth="2"
              filter="drop-shadow(0 0 16px rgba(0, 80, 240, 0.6))"
            />
            <line x1="55" y1="14" x2="265" y2="14" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />

            <text
              x="160"
              y="40"
              fill="#FFFFFF"
              fontFamily="Archivo, sans-serif"
              fontWeight="900"
              fontSize="14.5"
              letterSpacing="0.06em"
              textAnchor="middle"
              filter="drop-shadow(0 0 8px rgba(77, 141, 255, 0.95))"
            >
              {s.title}
            </text>

            {/* Mid Section Content (Tenant Stack or EMC Display) */}
            {s.poleType === 'digital' ? (
              <g>
                <rect x="60" y="62" width="200" height="48" rx="4" fill="#000000" stroke="#FFC107" strokeWidth="1.5" />
                <rect x="60" y="62" width="200" height="48" fill="url(#matrixDotsPylon)" />
                <text x="160" y="90" fill="#FFD54F" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="9" letterSpacing="0.08em" textAnchor="middle" filter="drop-shadow(0 0 6px #FFC107)">
                  {s.slots[0]}
                </text>
              </g>
            ) : (
              <g transform="translate(60, 60)">
                {s.slots.map((slot, i) => (
                  <g key={i} transform={`translate(0, ${i * 16})`}>
                    <rect x="0" y="0" width="200" height="14" rx="2" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
                    <text x="100" y="10.5" fill="#E6EEFF" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="8" letterSpacing="0.08em" textAnchor="middle">
                      {slot}
                    </text>
                  </g>
                ))}
              </g>
            )}
          </svg>
        </div>
      </div>

      {/* Control Panel */}
      <div style={{ background: 'var(--panel)', padding: 20 }}>
        <div className="chips" role="tablist" aria-label="Pylon style" style={{ gap: 8 }}>
          {PYLON_STYLES.map((style, i) => (
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
            <div style={{ fontSize: 13, color: 'var(--dmuted)', marginTop: 8 }}>Elevation height</div>
            <div style={{ fontWeight: 700, color: 'var(--elec)' }}>{s.height}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
