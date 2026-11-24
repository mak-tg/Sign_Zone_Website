'use client'
import { useState } from 'react'

export interface WrapStyle {
  id: string
  label: string
  company: string
  tagline: string
  phone: string
  coverageTag: string
  desc: string
  best: string
  cost: string
  vanBaseColor: string
  isPerforated: boolean
  isCutVinylOnly: boolean
}

export const WRAP_STYLES: WrapStyle[] = [
  {
    id: 'full-wrap',
    label: 'Full Commercial Wrap',
    company: 'APEX HVAC & PLUMBING',
    tagline: '24/7 COMMERCIAL · DFW REPAIR',
    phone: '214-555-0199',
    coverageTag: '100% Full Body Coverage',
    desc: '3M Cast vinyl completely encasing painted panels with micro-perforated rear windows for maximum mobile billboard impressions.',
    best: 'HVAC, plumbers, electricians, delivery fleets',
    cost: '$2,800 – $4,500 per van',
    vanBaseColor: '#0050F0',
    isPerforated: true,
    isCutVinylOnly: false,
  },
  {
    id: 'partial-wrap',
    label: 'Partial 1/2 Wrap',
    company: 'TEXAS APPLIANCE PROS',
    tagline: 'FACTORY CERTIFIED TECHS',
    phone: '469-555-0144',
    coverageTag: '50% Rear & Side Body Wrap',
    desc: 'High-impact graphics across the sides and back doors blended cleanly into your vehicle’s factory base paint color.',
    best: 'Budget-conscious contractors, box trucks',
    cost: '$1,400 – $2,400',
    vanBaseColor: '#171E2E',
    isPerforated: true,
    isCutVinylOnly: false,
  },
  {
    id: 'cut-vinyl',
    label: 'Cut Vinyl & DOT Numbers',
    company: 'PRECISION COURIER',
    tagline: 'USDOT 3849201 · TXDOT 00921',
    phone: '972-555-0177',
    coverageTag: 'Computer-Cut Door Decals',
    desc: 'Crisp computer-cut vinyl decals displaying company logo, phone number, website, and mandatory state/federal compliance numbers.',
    best: 'Fleet trucks, cargo vans, trailers',
    cost: '$300 – $750',
    vanBaseColor: '#141A29',
    isPerforated: false,
    isCutVinylOnly: true,
  },
  {
    id: 'perforated-window',
    label: 'Perforated Window Film',
    company: 'METRO LOGISTICS DFW',
    tagline: 'ONE-WAY REAR WINDOW VISION',
    phone: '214-555-0120',
    coverageTag: '50/50 Perforated View',
    desc: 'Full-color printed graphics visible from the outside while allowing the driver clear 100% visibility looking outward.',
    best: 'SUVs, rear van windows, pickups',
    cost: '$250 – $550 per glass',
    vanBaseColor: '#101726',
    isPerforated: true,
    isCutVinylOnly: false,
  },
]

export default function WrapDemo() {
  const [active, setActive] = useState(0)
  const s = WRAP_STYLES[active]

  return (
    <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid var(--line)' }}>
      {/* Simulation Stage */}
      <div
        style={{
          background: '#070C18',
          height: 290,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px 20px 20px',
          overflow: 'hidden',
        }}
      >
        {/* Floating Coverage Pill Tag */}
        <div
          style={{
            position: 'absolute',
            top: 14,
            right: 18,
            background: 'rgba(6, 38, 102, 0.85)',
            border: '1px solid #0050F0',
            borderRadius: 6,
            padding: '4px 10px',
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: '.08em',
            color: '#FFFFFF',
            textTransform: 'uppercase',
            boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
            zIndex: 10,
          }}
        >
          {s.coverageTag}
        </div>

        {/* Detailed High-Top Commercial Van Vector Blueprint */}
        <div
          style={{
            width: '92%',
            maxWidth: 420,
            height: 180,
            position: 'relative',
            marginTop: 10,
            transition: 'all .45s ease',
          }}
        >
          <svg
            viewBox="0 0 460 200"
            style={{
              width: '100%',
              height: '100%',
              filter: 'drop-shadow(0 14px 24px rgba(0,0,0,0.85))',
            }}
          >
            <defs>
              <linearGradient id="wrapGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0050F0" />
                <stop offset="60%" stopColor="#062666" />
                <stop offset="100%" stopColor="#020C1F" />
              </linearGradient>
              <pattern id="perfDots2" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="1.2" fill="rgba(255,255,255,0.35)" />
              </pattern>
              {/* Strict clip paths locking perforated film inside exact window contours */}
              <clipPath id="midWindowClip">
                <path d="M 195 45 L 305 45 L 305 95 L 195 95 Z" />
              </clipPath>
              <clipPath id="rearWindowClip">
                <path d="M 320 45 L 415 48 Q 430 52 433 80 L 433 95 L 320 95 Z" />
              </clipPath>
            </defs>

            {/* Van Base Chassis */}
            <path
              d="M 50 160 L 430 160 Q 445 160 445 145 L 440 90 Q 435 50 410 45 L 360 40 Q 340 35 300 35 L 120 35 Q 90 35 70 55 L 40 95 L 30 115 Q 25 130 30 145 L 35 155 Q 40 160 50 160 Z"
              fill={s.isCutVinylOnly ? '#171E2E' : s.id === 'partial-wrap' ? '#171E2E' : 'url(#wrapGrad2)'}
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1.5"
            />

            {/* Partial Wrap Overlay Mask */}
            {s.id === 'partial-wrap' && (
              <path
                d="M 210 35 L 300 35 Q 340 35 360 40 L 410 45 Q 435 50 440 90 L 445 145 Q 445 160 430 160 L 250 160 Q 230 120 210 35 Z"
                fill="url(#wrapGrad2)"
                stroke="#0050F0"
                strokeWidth="1.5"
              />
            )}

            {/* Front Windshield */}
            <path
              d="M 45 92 L 72 56 Q 85 45 110 45 L 115 95 L 45 95 Z"
              fill="#080E1C"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1"
            />

            {/* Front Driver Door Window */}
            <path
              d="M 125 45 L 180 45 L 180 95 L 125 95 Z"
              fill="#0A1224"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="1"
            />

            {/* Side Cargo Windows / Perforated Film with strict clipping */}
            <path
              d="M 195 45 L 305 45 L 305 95 L 195 95 Z"
              fill={s.isPerforated ? '#0050F0' : '#080E1C'}
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="1"
            />
            {s.isPerforated && (
              <path
                d="M 195 45 L 305 45 L 305 95 L 195 95 Z"
                fill="url(#perfDots2)"
                clipPath="url(#midWindowClip)"
              />
            )}

            <path
              d="M 320 45 L 415 48 Q 430 52 433 80 L 433 95 L 320 95 Z"
              fill={s.isPerforated ? '#062666' : '#080E1C'}
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="1"
            />
            {s.isPerforated && (
              <path
                d="M 320 45 L 415 48 Q 430 52 433 80 L 433 95 L 320 95 Z"
                fill="url(#perfDots2)"
                clipPath="url(#rearWindowClip)"
              />
            )}

            {/* Seams */}
            <line x1="120" y1="40" x2="120" y2="155" stroke="rgba(0,0,0,0.5)" strokeWidth="2" />
            <line x1="188" y1="40" x2="188" y2="155" stroke="rgba(0,0,0,0.5)" strokeWidth="2" />
            <line x1="312" y1="40" x2="312" y2="155" stroke="rgba(0,0,0,0.5)" strokeWidth="2" />
            <line x1="35" y1="115" x2="440" y2="115" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />

            {/* Lights */}
            <polygon points="28,120 40,118 36,132 26,128" fill="#4D8DFF" filter="drop-shadow(0 0 6px #4D8DFF)" />
            <polygon points="442,110 446,110 446,135 440,135" fill="#FF4444" filter="drop-shadow(0 0 6px #FF4444)" />

            {/* Typography on Van */}
            <text
              x="270"
              y="125"
              fill="#FFFFFF"
              fontFamily="Archivo, sans-serif"
              fontWeight="900"
              fontSize="16"
              letterSpacing="0.05em"
              textAnchor="middle"
              filter="drop-shadow(0 2px 4px rgba(0,0,0,0.9))"
            >
              {s.company}
            </text>

            <text
              x="270"
              y="140"
              fill={s.isCutVinylOnly ? '#4D8DFF' : '#FFD54F'}
              fontFamily="Inter, sans-serif"
              fontWeight="800"
              fontSize="8.5"
              letterSpacing="0.12em"
              textAnchor="middle"
            >
              {s.tagline}
            </text>

            <text
              x="270"
              y="152"
              fill="#FFFFFF"
              fontFamily="Inter, sans-serif"
              fontWeight="700"
              fontSize="9"
              letterSpacing="0.08em"
              textAnchor="middle"
            >
              {s.phone}
            </text>

            {/* Wheels & Tires */}
            <g transform="translate(95, 160)">
              <circle cx="0" cy="0" r="26" fill="#0A0E18" stroke="#3A465E" strokeWidth="4" />
              <circle cx="0" cy="0" r="14" fill="#1C2436" stroke="#8A9BB8" strokeWidth="2" />
              <circle cx="0" cy="0" r="5" fill="#4D8DFF" />
            </g>

            <g transform="translate(370, 160)">
              <circle cx="0" cy="0" r="26" fill="#0A0E18" stroke="#3A465E" strokeWidth="4" />
              <circle cx="0" cy="0" r="14" fill="#1C2436" stroke="#8A9BB8" strokeWidth="2" />
              <circle cx="0" cy="0" r="5" fill="#4D8DFF" />
            </g>
          </svg>
        </div>

        {/* Road Surface Directly Under Wheels */}
        <div
          style={{
            width: '100%',
            height: 3,
            background: '#1A2234',
            marginTop: 4,
          }}
        />
      </div>

      {/* Control Panel */}
      <div style={{ background: 'var(--panel)', padding: 20 }}>
        <div className="chips" role="tablist" aria-label="Vehicle wrap style" style={{ gap: 8 }}>
          {WRAP_STYLES.map((style, i) => (
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
            <div style={{ fontSize: 13, color: 'var(--dmuted)', marginTop: 8 }}>Typical cost</div>
            <div style={{ fontWeight: 700, color: 'var(--elec)' }}>{s.cost}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
