'use client'
import { useState } from 'react'

export interface WindowStyle {
  id: string
  label: string
  badge: string
  title: string
  sub: string
  desc: string
  best: string
  cost: string
  bg: string
  kind: 'cut' | 'perf' | 'frost' | 'promo'
}

export const WINDOW_STYLES: WindowStyle[] = [
  {
    id: 'cut-vinyl',
    label: 'Cut Vinyl & Hours',
    badge: '7-Yr 3M High-Performance',
    title: 'MON–SAT · 9AM–7PM',
    sub: 'SUITE 104 · 214-714-4623',
    desc: 'Precision-plotted 3M high-performance vinyl lettering for business hours, logos, suite numbers, and phone/website details.',
    best: 'Every storefront entrance door',
    cost: 'Baseline ($200 – $450)',
    bg: '#070C18',
    kind: 'cut',
  },
  {
    id: 'perforated',
    label: 'Perforated 50/50',
    badge: 'One-Way Vision · UV Sealed',
    title: 'JOIN TODAY',
    sub: 'PILATES · RECOVERY · SAUNA',
    desc: '50/50 micro-perforated window film showing bold full-color graphics outside while letting staff and daylight see clearly from inside.',
    best: 'Fitness studios, salons, clinics, retail',
    cost: '+60% vs. cut vinyl',
    bg: '#080E1C',
    kind: 'perf',
  },
  {
    id: 'frosted',
    label: 'Frosted Privacy',
    badge: 'Etched Crystal · Reverse-Cut',
    title: 'NORTH TEXAS DENTAL',
    sub: 'COSMETIC & IMPLANT CARE',
    desc: 'Translucent etched-glass vinyl that softens harsh sunlight, blocks street view into waiting areas, and showcases clean cutout logos.',
    best: 'Dental/medical offices, spas, banks',
    cost: '+40% vs. cut vinyl',
    bg: '#0A101E',
    kind: 'frost',
  },
  {
    id: 'seasonal',
    label: 'Promo Panels',
    badge: 'Removable Retail Vinyl',
    title: 'NEW SEASON',
    sub: '20% OFF ALL PACKAGES',
    desc: 'Removable intermediate vinyl graphics designed for clean 3–12 month retail campaigns without leaving adhesive residue on glass.',
    best: 'Restaurants, retail chains, gyms',
    cost: '$350 – $1,200+',
    bg: '#060A14',
    kind: 'promo',
  },
]

export default function WindowGraphicsDemo() {
  const [active, setActive] = useState(0)
  const s = WINDOW_STYLES[active]

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
              <pattern id="winPerfDots" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="1.15" fill="rgba(10, 20, 40, 0.55)" />
              </pattern>
              <linearGradient id="glassReflection" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.14)" />
                <stop offset="45%" stopColor="rgba(255,255,255,0.03)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
            </defs>

            {/* Aluminum Storefront Frame */}
            <rect x="24" y="18" width="352" height="168" rx="4" fill="#162033" stroke="#475569" strokeWidth="2.5" />

            {/* Left, Center Door, Right Glass Panes */}
            <rect x="36" y="30" width="102" height="146" fill="#0B1528" stroke="#334155" strokeWidth="1.5" />
            <rect x="148" y="30" width="104" height="146" fill="#11203B" stroke="#64748B" strokeWidth="2" />
            <rect x="262" y="30" width="102" height="146" fill="#0B1528" stroke="#334155" strokeWidth="1.5" />

            {/* Door Push Bar */}
            <rect x="154" y="116" width="92" height="5" rx="2" fill="#94A3B8" />

            {s.kind === 'perf' && (
              <>
                <rect x="36" y="30" width="102" height="146" fill="#0050F0" />
                <rect x="262" y="30" width="102" height="146" fill="#0050F0" />
                <rect x="36" y="30" width="102" height="146" fill="url(#winPerfDots)" />
                <rect x="262" y="30" width="102" height="146" fill="url(#winPerfDots)" />
                <text x="87" y="96" fill="#fff" fontSize="12" fontWeight="900" textAnchor="middle">{s.title}</text>
                <text x="313" y="96" fill="#fff" fontSize="12" fontWeight="900" textAnchor="middle">{s.title}</text>
                <text x="313" y="114" fill="#DBEAFE" fontSize="7" fontWeight="700" textAnchor="middle">50/50 ONE-WAY</text>
              </>
            )}

            {s.kind === 'frost' && (
              <>
                <rect x="36" y="54" width="102" height="84" fill="rgba(226, 232, 240, 0.28)" />
                <rect x="148" y="54" width="104" height="84" fill="rgba(226, 232, 240, 0.28)" />
                <rect x="262" y="54" width="102" height="84" fill="rgba(226, 232, 240, 0.28)" />
              </>
            )}

            {s.kind === 'promo' && (
              <>
                <rect x="44" y="44" width="86" height="106" rx="4" fill="#0050F0" stroke="#93C5FD" strokeWidth="1.5" />
                <rect x="270" y="44" width="86" height="106" rx="4" fill="#062666" stroke="#60A5FA" strokeWidth="1.5" />
                <text x="87" y="92" fill="#FFFFFF" fontSize="11.5" fontWeight="900" textAnchor="middle">{s.title}</text>
                <text x="87" y="110" fill="#DBEAFE" fontSize="7.5" fontWeight="700" textAnchor="middle">20% OFF</text>
                <text x="313" y="92" fill="#FFFFFF" fontSize="11.5" fontWeight="900" textAnchor="middle">WALK-INS</text>
                <text x="313" y="110" fill="#93C5FD" fontSize="7.5" fontWeight="700" textAnchor="middle">WELCOME</text>
              </>
            )}

            {/* Center Door Logo Emblem + Business Hours */}
            <circle cx="200" cy="68" r="15" fill="none" stroke="#60A5FA" strokeWidth="2.5" />
            <path d="M 193 68 L 198 73 L 208 62" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <text x="200" y="98" fill="#FFFFFF" fontSize="8.5" fontWeight="800" letterSpacing="1" textAnchor="middle">
              {s.title}
            </text>
            <text x="200" y="142" fill="#93C5FD" fontSize="7.2" fontWeight="700" letterSpacing="1" textAnchor="middle">
              {s.sub}
            </text>

            {/* Brand Swoosh Along Lower Glass */}
            <path d="M 36 154 Q 200 132 364 154 L 364 166 Q 200 144 36 166 Z" fill="#3B82F6" opacity="0.85" />

            {/* Diagonal Glass Reflection */}
            <polygon points="36,30 120,30 36,140" fill="url(#glassReflection)" />
            <polygon points="148,30 220,30 148,130" fill="url(#glassReflection)" />

            {/* Sidewalk Curb */}
            <rect x="16" y="186" width="368" height="8" rx="2" fill="#1E293B" />
          </svg>
        </div>
      </div>

      <div style={{ background: 'var(--panel)', padding: 20 }}>
        <div className="chips" role="tablist" aria-label="Window graphics style" style={{ gap: 8 }}>
          {WINDOW_STYLES.map((style, i) => (
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
