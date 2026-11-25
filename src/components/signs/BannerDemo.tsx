'use client'
import { useState } from 'react'

export interface BannerStyle {
  id: string
  label: string
  badge: string
  title: string
  sub: string
  desc: string
  best: string
  cost: string
  bg: string
  kind: 'vinyl' | 'mesh' | 'post' | 'feather'
}

export const BANNER_STYLES: BannerStyle[] = [
  {
    id: 'heavy-vinyl',
    label: '18oz Vinyl Banner',
    badge: 'Heat-Welded · Brass Grommets',
    title: 'NOW OPEN!',
    sub: 'GRAND OPENING SPECIALS · WALK-INS WELCOME',
    desc: 'Heavy-duty reinforced vinyl with heat-welded hems and brass grommets every 24 inches, printed with UV-resistant full-color ink.',
    best: 'Grand openings while permits clear',
    cost: 'Baseline ($120 – $350)',
    bg: '#070C18',
    kind: 'vinyl',
  },
  {
    id: 'wind-mesh',
    label: 'Wind-Slit Mesh',
    badge: '8oz Perforated · 30% Airflow',
    title: 'COMING SOON',
    sub: 'NEW RETAIL & DINING · FALL 2026',
    desc: 'Micro-perforated 8oz vinyl mesh allowing 30% airflow so large storefront or fence banners stay intact in strong Texas winds.',
    best: 'Construction fences, windy facades',
    cost: '+20% vs. standard vinyl',
    bg: '#080E1C',
    kind: 'mesh',
  },
  {
    id: 'post-panel',
    label: 'Post & Panel',
    badge: '4x4 Timber · Dibond Face',
    title: 'LEASING NOW',
    sub: '1,200 – 4,500 SQ FT · 214-714-4623',
    desc: 'Rigid aluminum composite (Dibond) mounted between 4x4 treated timber or aluminum posts for 1–3 year site visibility.',
    best: 'Commercial real estate, new developments',
    cost: '$450 – $1,800',
    bg: '#0A101E',
    kind: 'post',
  },
  {
    id: 'feather-flags',
    label: 'Flags & A-Frames',
    badge: 'Dye-Sublimated · Double-Sided',
    title: 'OPEN',
    sub: 'DRIVE-THRU & CURBSIDE',
    desc: 'Double-sided dye-sublimated wind flags and heavy-duty sidewalk A-frames that bring immediate curb appeal within days.',
    best: 'Weekend promos, car washes, leasing',
    cost: '$150 – $400 / unit',
    bg: '#060A14',
    kind: 'feather',
  },
]

export default function BannerDemo() {
  const [active, setActive] = useState(0)
  const s = BANNER_STYLES[active]

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
              <linearGradient id="bannerBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0050F0" />
                <stop offset="100%" stopColor="#062666" />
              </linearGradient>
              <pattern id="meshFencePat" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                <path d="M 0 6 L 6 0 L 12 6 L 6 12 Z" fill="none" stroke="rgba(148,163,184,0.28)" strokeWidth="1" />
              </pattern>
              <pattern id="meshDotsBanner" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
                <circle cx="2.5" cy="2.5" r="0.9" fill="rgba(5, 10, 22, 0.45)" />
              </pattern>
            </defs>

            {s.kind === 'vinyl' && (
              <g>
                {/* Storefront Fascia Wall */}
                <rect x="24" y="24" width="352" height="156" rx="4" fill="#101829" stroke="#28354E" strokeWidth="2" />
                {/* Tension Bungees */}
                {[66, 155, 245, 334].map((x) => (
                  <g key={x}>
                    <line x1={x} y1="42" x2={x} y2="56" stroke="#94A3B8" strokeWidth="2" />
                    <line x1={x} y1="142" x2={x} y2="156" stroke="#94A3B8" strokeWidth="2" />
                  </g>
                ))}
                {/* 18oz Welded Banner */}
                <rect x="46" y="54" width="308" height="90" rx="4" fill="url(#bannerBlueGrad)" stroke="#60A5FA" strokeWidth="2" />
                <rect x="52" y="60" width="296" height="78" rx="2" fill="none" stroke="rgba(255,255,255,0.2)" strokeDasharray="4 3" strokeWidth="1" />
                {[66, 155, 245, 334].map((gx) => (
                  <g key={gx}>
                    <circle cx={gx} cy="62" r="3.2" fill="#FBBF24" stroke="#78350F" strokeWidth="0.8" />
                    <circle cx={gx} cy="136" r="3.2" fill="#FBBF24" stroke="#78350F" strokeWidth="0.8" />
                  </g>
                ))}
                <text x="200" y="99" fill="#FFFFFF" fontSize="26" fontWeight="900" letterSpacing="2" textAnchor="middle">
                  {s.title}
                </text>
                <text x="200" y="121" fill="#DBEAFE" fontSize="8.5" fontWeight="700" letterSpacing="1.8" textAnchor="middle">
                  {s.sub}
                </text>
              </g>
            )}

            {s.kind === 'mesh' && (
              <g>
                {/* Chain-Link Fence Frame */}
                <rect x="26" y="34" width="348" height="146" fill="url(#meshFencePat)" stroke="#475569" strokeWidth="3" />
                <rect x="24" y="32" width="10" height="154" fill="#334155" />
                <rect x="366" y="32" width="10" height="154" fill="#334155" />
                {/* Printed Mesh Wrap */}
                <rect x="44" y="50" width="312" height="106" rx="3" fill="url(#bannerBlueGrad)" stroke="#93C5FD" strokeWidth="1.5" />
                <rect x="44" y="50" width="312" height="106" rx="3" fill="url(#meshDotsBanner)" />
                <text x="200" y="102" fill="#FFFFFF" fontSize="24" fontWeight="900" letterSpacing="2.2" textAnchor="middle">
                  {s.title}
                </text>
                <text x="200" y="124" fill="#DBEAFE" fontSize="8.5" fontWeight="700" letterSpacing="1.8" textAnchor="middle">
                  {s.sub}
                </text>
              </g>
            )}

            {s.kind === 'post' && (
              <g>
                {/* 4x4 Painted Posts with Pyramid Caps */}
                <rect x="76" y="36" width="16" height="150" rx="2" fill="#E2E8F0" stroke="#64748B" strokeWidth="1.5" />
                <polygon points="73,36 84,26 95,36" fill="#CBD5E1" />
                <rect x="308" y="36" width="16" height="150" rx="2" fill="#E2E8F0" stroke="#64748B" strokeWidth="1.5" />
                <polygon points="305,36 316,26 327,36" fill="#CBD5E1" />
                {/* Dibond Panel */}
                <rect x="92" y="46" width="216" height="108" rx="4" fill="#0F172A" stroke="#3B82F6" strokeWidth="2.5" />
                <rect x="92" y="46" width="216" height="30" rx="2" fill="#0050F0" />
                <text x="200" y="66" fill="#FFFFFF" fontSize="14" fontWeight="900" letterSpacing="2" textAnchor="middle">
                  {s.title}
                </text>
                <text x="200" y="104" fill="#FFFFFF" fontSize="12" fontWeight="800" letterSpacing="1" textAnchor="middle">
                  PRIME RETAIL SPACE
                </text>
                <text x="200" y="126" fill="#93C5FD" fontSize="8.5" fontWeight="700" letterSpacing="1.4" textAnchor="middle">
                  {s.sub}
                </text>
              </g>
            )}

            {s.kind === 'feather' && (
              <g>
                {/* Curved Feather Flag on Left */}
                <line x1="108" y1="184" x2="108" y2="28" stroke="#94A3B8" strokeWidth="3" />
                <path d="M 108 26 C 148 26, 152 64, 146 138 L 108 148 Z" fill="url(#bannerBlueGrad)" stroke="#60A5FA" strokeWidth="1.5" />
                <text x="127" y="92" fill="#FFFFFF" fontSize="14" fontWeight="900" letterSpacing="1.5" textAnchor="middle" transform="rotate(-90 127 92)">
                  {s.title}
                </text>
                {/* Weighted Sidewalk A-Frame on Right */}
                <polygon points="222,184 248,68 298,68 324,184 310,184 290,82 256,82 236,184" fill="#334155" />
                <rect x="234" y="76" width="76" height="92" rx="3" fill="#0050F0" stroke="#93C5FD" strokeWidth="2" />
                <text x="272" y="114" fill="#FFFFFF" fontSize="16" fontWeight="900" textAnchor="middle">
                  {s.title}
                </text>
                <text x="272" y="134" fill="#DBEAFE" fontSize="6.5" fontWeight="700" textAnchor="middle">
                  {s.sub}
                </text>
              </g>
            )}

            {/* Ground Curb */}
            <rect x="16" y="184" width="368" height="8" rx="3" fill="#1E293B" />
          </svg>
        </div>
      </div>

      <div style={{ background: 'var(--panel)', padding: 20 }}>
        <div className="chips" role="tablist" aria-label="Banner style" style={{ gap: 8 }}>
          {BANNER_STYLES.map((style, i) => (
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
