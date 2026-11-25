'use client'
import { useState } from 'react'

export interface AwningStyle {
  id: string
  label: string
  badge: string
  title: string
  subtitle: string
  desc: string
  best: string
  cost: string
  bg: string
  kind: 'fabric' | 'backlit' | 'metal' | 'dome'
}

export const AWNING_STYLES: AwningStyle[] = [
  {
    id: 'sunbrella-slope',
    label: 'Sunbrella Fabric',
    badge: 'Solution-Dyed Acrylic',
    title: 'CAFE VERONA',
    subtitle: 'ESPRESSO · PASTRY',
    desc: 'Welded aluminum frame wrapped in UV-resistant Sunbrella acrylic fabric with crisp heat-transferred valance graphics.',
    best: 'Restaurants, bakeries, boutiques',
    cost: 'Baseline ($2.2k – $6.5k)',
    bg: '#080D1A',
    kind: 'fabric',
  },
  {
    id: 'backlit-vinyl',
    label: 'Backlit Canopy',
    badge: 'Internal LED · Translucent',
    title: 'BISTRO 24',
    subtitle: 'LATE NIGHT KITCHEN',
    desc: 'Translucent coated vinyl stretched taut over an internal LED-lit aluminum frame so the entire awning glows evenly after sunset.',
    best: '24-hour dining, theaters, corner retail',
    cost: '+35% vs. baseline',
    bg: '#040710',
    kind: 'backlit',
  },
  {
    id: 'metal-canopy',
    label: 'Metal Extruded',
    badge: 'Cantilevered · Tie-Rod',
    title: 'WESTWOOD DENTAL',
    subtitle: 'SUITE 110 · ENTRANCE',
    desc: 'Flat cantilevered extruded aluminum canopy with stainless tie-rods and dimensional fascia letters mounted along the front beam.',
    best: 'Modern offices, medical plazas',
    cost: '+50% vs. baseline',
    bg: '#0A101E',
    kind: 'metal',
  },
  {
    id: 'dome-entrance',
    label: 'Entrance Dome',
    badge: 'Curved Marquee · Soffit LED',
    title: 'THE CLARENDON',
    subtitle: 'BOUTIQUE HOTEL',
    desc: 'Curved architectural entrance awning framing double glass doors while shielding guests from sun and Texas rain.',
    best: 'Hotels, lounges, upscale dining',
    cost: '+25% vs. baseline',
    bg: '#060B16',
    kind: 'dome',
  },
]

export default function AwningDemo() {
  const [active, setActive] = useState(0)
  const s = AWNING_STYLES[active]

  return (
    <div className="monument-sign-demo" style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid var(--line)' }}>
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
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.12,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)',
            backgroundSize: '26px 26px',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: 14,
            right: 16,
            background: 'rgba(6, 38, 102, 0.85)',
            border: '1px solid #0050F0',
            borderRadius: 6,
            padding: '4px 10px',
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: '.08em',
            color: '#FFFFFF',
            textTransform: 'uppercase',
            boxShadow: '0 4px 12px rgba(0,0,0,0.45)',
            zIndex: 10,
          }}
        >
          {s.badge}
        </div>

        <div style={{ width: '92%', maxWidth: 390, height: 205, position: 'relative', filter: 'drop-shadow(0 20px 32px rgba(0,0,0,0.85))' }}>
          <svg viewBox="0 0 400 205" style={{ width: '100%', height: '100%', display: 'block' }}>
            <defs>
              <linearGradient id="awningLitGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#0050F0" />
              </linearGradient>
              <linearGradient id="awningFabricGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#062666" />
                <stop offset="25%" stopColor="#0D3B8C" />
                <stop offset="50%" stopColor="#062666" />
                <stop offset="75%" stopColor="#0D3B8C" />
                <stop offset="100%" stopColor="#062666" />
              </linearGradient>
              <linearGradient id="metalBeamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#94A3B8" />
                <stop offset="50%" stopColor="#475569" />
                <stop offset="100%" stopColor="#1E293B" />
              </linearGradient>
              <linearGradient id="downLightCone" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(147, 197, 253, 0.35)" />
                <stop offset="100%" stopColor="rgba(147, 197, 253, 0)" />
              </linearGradient>
            </defs>

            {/* Building Storefront Facade */}
            <rect x="34" y="20" width="332" height="168" rx="4" fill="#101829" stroke="#28354E" strokeWidth="2" />
            {/* Glass Windows & Double Entry Doors */}
            <rect x="52" y="102" width="84" height="82" fill="#0B1528" stroke="#334155" strokeWidth="1.5" />
            <rect x="150" y="96" width="100" height="88" fill="#152847" stroke="#475569" strokeWidth="1.5" />
            <line x1="200" y1="96" x2="200" y2="184" stroke="#475569" strokeWidth="2" />
            {/* Door Pull Handles */}
            <rect x="191" y="132" width="3" height="18" rx="1" fill="#CBD5E1" />
            <rect x="206" y="132" width="3" height="18" rx="1" fill="#CBD5E1" />
            <rect x="264" y="102" width="84" height="82" fill="#0B1528" stroke="#334155" strokeWidth="1.5" />

            {/* Under-Awning Downlight Spill */}
            {(s.kind === 'backlit' || s.kind === 'dome') && (
              <polygon points="48,116 352,116 334,184 66,184" fill="url(#downLightCone)" />
            )}

            {s.kind === 'metal' ? (
              <g>
                {/* Stainless Steel Tie-Rods */}
                <line x1="92" y1="30" x2="62" y2="86" stroke="#CBD5E1" strokeWidth="2.5" />
                <line x1="308" y1="30" x2="338" y2="86" stroke="#CBD5E1" strokeWidth="2.5" />
                <circle cx="92" cy="30" r="4" fill="#94A3B8" />
                <circle cx="308" cy="30" r="4" fill="#94A3B8" />
                {/* Flat Aluminum Deck */}
                <polygon points="56,74 344,74 374,90 26,90" fill="#1E293B" stroke="#64748B" strokeWidth="1.5" />
                <rect x="26" y="90" width="348" height="22" rx="2" fill="url(#metalBeamGrad)" stroke="#94A3B8" strokeWidth="1" />
                {/* Dimensional Letters Above Fascia */}
                <text x="200" y="62" fill="#F8FAFC" fontSize="16" fontWeight="800" letterSpacing="2" textAnchor="middle">
                  {s.title}
                </text>
                <text x="200" y="104" fill="#E2E8F0" fontSize="8.5" fontWeight="700" letterSpacing="2.4" textAnchor="middle">
                  {s.subtitle}
                </text>
              </g>
            ) : s.kind === 'dome' ? (
              <g>
                {/* Curved Entrance Dome Canopy */}
                <path
                  d="M 52 96 C 52 38, 348 38, 348 96 Z"
                  fill="#0A296B"
                  stroke="#60A5FA"
                  strokeWidth="2"
                  style={{ filter: 'drop-shadow(0 0 14px rgba(59, 130, 246, 0.45))' }}
                />
                <path d="M 110 96 C 110 46, 290 46, 290 96" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
                <rect x="46" y="96" width="308" height="24" rx="3" fill="#061B4D" stroke="#60A5FA" strokeWidth="1.5" />
                <text x="200" y="112" fill="#FFFFFF" fontSize="13.5" fontWeight="800" letterSpacing="2.4" textAnchor="middle">
                  {s.title}
                </text>
                <text x="200" y="80" fill="#93C5FD" fontSize="8.5" fontWeight="700" letterSpacing="2" textAnchor="middle">
                  {s.subtitle}
                </text>
              </g>
            ) : (
              <g>
                {/* Sloped Fabric or Backlit Awning */}
                <polygon
                  points="52,38 348,38 374,94 26,94"
                  fill={s.kind === 'backlit' ? 'url(#awningLitGrad)' : 'url(#awningFabricGrad)'}
                  stroke={s.kind === 'backlit' ? '#93C5FD' : '#3B82F6'}
                  strokeWidth="1.5"
                  style={s.kind === 'backlit' ? { filter: 'drop-shadow(0 0 22px rgba(37, 99, 235, 0.7))' } : undefined}
                />
                {/* Rib Seams */}
                {[115, 200, 285].map((x) => (
                  <line key={x} x1={x} y1="38" x2={x + (x - 200) * 0.14} y2="94" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
                ))}
                {/* Front Valance */}
                <rect
                  x="26"
                  y="94"
                  width="348"
                  height="26"
                  rx="2"
                  fill={s.kind === 'backlit' ? '#0050F0' : '#062666'}
                  stroke={s.kind === 'backlit' ? '#BFDBFE' : '#3B82F6'}
                  strokeWidth="1.5"
                />
                <text x="200" y="111" fill="#FFFFFF" fontSize="14.5" fontWeight="900" letterSpacing="2.4" textAnchor="middle">
                  {s.title}
                </text>
                <text x="200" y="72" fill="#DBEAFE" fontSize="8.5" fontWeight="700" letterSpacing="2" textAnchor="middle" opacity="0.85">
                  {s.subtitle}
                </text>
              </g>
            )}

            {/* Sidewalk Curb */}
            <rect x="20" y="186" width="360" height="8" rx="3" fill="#1E293B" />
          </svg>
        </div>
      </div>

      <div style={{ background: 'var(--panel)', padding: 20 }}>
        <div className="chips" role="tablist" aria-label="Awning style" style={{ gap: 8 }}>
          {AWNING_STYLES.map((style, i) => (
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
