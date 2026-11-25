'use client'
import { useState } from 'react'

export interface MenuStyle {
  id: string
  label: string
  badge: string
  title: string
  desc: string
  best: string
  cost: string
  bg: string
  kind: 'trio' | 'drivethru' | 'portrait' | 'cloud'
}

export const MENU_STYLES: MenuStyle[] = [
  {
    id: 'indoor-trio',
    label: '3-Screen Indoor',
    badge: '500-Nit 4K · 24/7 Commercial',
    title: 'ORDER HERE · PICKUP LEFT',
    desc: 'Commercial 500-nit 4K displays rated for 24/7 operation, zero-gap wall mounts, and cloud scheduling for breakfast/lunch dayparting.',
    best: 'QSR, coffee shops, fast-casual',
    cost: 'Baseline ($3.8k – $6.5k)',
    bg: '#070C18',
    kind: 'trio',
  },
  {
    id: 'drive-thru',
    label: 'Drive-Thru Lane',
    badge: '2,500-Nit Sunlight · IP65',
    title: 'DRIVE-THRU LANE 1',
    desc: 'Weatherproof IP65 enclosures with 2,500+ nit high-bright anti-glare screens readable in direct Texas sunlight with speaker posts.',
    best: 'Drive-thru restaurants & coffee lanes',
    cost: '$8.5k – $16k+ / lane',
    bg: '#050812',
    kind: 'drivethru',
  },
  {
    id: 'portrait-promo',
    label: 'Portrait Promo',
    badge: 'Vertical 4K · Loyalty QR',
    title: 'SEASONAL SPECIALS',
    desc: 'Vertical commercial monitors highlighting high-margin specials, seasonal drinks, and loyalty QR codes at the register.',
    best: 'Lobbies, bakeries, juice bars',
    cost: '$1.4k – $2.4k / screen',
    bg: '#0A101E',
    kind: 'portrait',
  },
  {
    id: 'multi-location',
    label: 'Cloud Fleet Sync',
    badge: 'Live Mobile CMS · Multi-Store',
    title: 'SYNCED ACROSS 12 DFW STORES',
    desc: 'Centralized cloud CMS lets owners push price changes, sold-out tags, and seasonal promos across 1 or 50 stores from a phone.',
    best: 'Multi-unit franchises & chains',
    cost: 'SaaS + turnkey install',
    bg: '#080E1C',
    kind: 'cloud',
  },
]

export default function DigitalMenuDemo() {
  const [active, setActive] = useState(0)
  const s = MENU_STYLES[active]

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
            opacity: 0.1,
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

        <div style={{ width: '92%', maxWidth: 390, height: 205, position: 'relative', filter: 'drop-shadow(0 20px 32px rgba(0,0,0,0.9))' }}>
          <svg viewBox="0 0 400 205" style={{ width: '100%', height: '100%', display: 'block' }}>
            <defs>
              <linearGradient id="menuScreenGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0D1E45" />
                <stop offset="100%" stopColor="#060D21" />
              </linearGradient>
            </defs>

            {(s.kind === 'trio' || s.kind === 'cloud') && (
              <g>
                {/* Restaurant Back Wall */}
                <rect x="18" y="18" width="364" height="168" rx="6" fill="#0F172A" stroke="#28354E" strokeWidth="2" />
                {[
                  { x: 32, cat: 'BURGERS', items: ['Classic', 'Double', 'Spicy'] },
                  { x: 146, cat: 'COMBOS', items: ['Meal #1', 'Meal #2', 'Tenders'] },
                  { x: 260, cat: 'DRINKS', items: ['Shakes', 'Cold Brew', 'Tea'] },
                ].map((col, idx) => (
                  <g key={col.cat}>
                    {/* Zero-Gap 4K Bezel */}
                    <rect
                      x={col.x}
                      y="36"
                      width="108"
                      height="96"
                      rx="3"
                      fill="url(#menuScreenGlow)"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      style={{ filter: 'drop-shadow(0 0 10px rgba(37, 99, 235, 0.35))' }}
                    />
                    <rect x={col.x + 6} y="42" width="96" height="15" rx="2" fill="#0050F0" />
                    <text x={col.x + 54} y="52" fill="#FFFFFF" fontSize="7.5" fontWeight="900" letterSpacing="1.2" textAnchor="middle">
                      {col.cat}
                    </text>
                    {/* Menu Photo Thumb */}
                    <rect x={col.x + 6} y="62" width="96" height="20" rx="2" fill={idx === 1 ? '#1E40AF' : '#172554'} />
                    <circle cx={col.x + 22} cy="72" r="6" fill="#FBBF24" opacity="0.9" />
                    <rect x={col.x + 34} y="68" width="56" height="4" rx="1.5" fill="#E2E8F0" />
                    <rect x={col.x + 34} y="75" width="38" height="3" rx="1.5" fill="#93C5FD" />
                    {/* Menu Item Rows + Prices */}
                    {col.items.map((item, rIdx) => (
                      <g key={item} transform={`translate(0, ${rIdx * 13})`}>
                        <text x={col.x + 8} y="96" fill="#E2E8F0" fontSize="7" fontWeight="700">{item}</text>
                        <text x={col.x + 100} y="96" fill="#60A5FA" fontSize="7" fontWeight="800" textAnchor="end">
                          ${8 + idx + rIdx}.95
                        </text>
                      </g>
                    ))}
                  </g>
                ))}
                {s.kind === 'cloud' && (
                  <g>
                    <rect x="132" y="21" width="136" height="14" rx="7" fill="#064E3B" stroke="#10B981" strokeWidth="1" />
                    <circle cx="144" cy="28" r="3" fill="#34D399" />
                    <text x="204" y="31" fill="#A7F3D0" fontSize="7" fontWeight="800" textAnchor="middle">
                      LIVE SYNC · ALL STORES
                    </text>
                  </g>
                )}
                {/* Service Counter */}
                <rect x="18" y="150" width="364" height="36" rx="2" fill="#1E293B" />
                <text x="200" y="172" fill="#93C5FD" fontSize="9" fontWeight="800" letterSpacing="2" textAnchor="middle">
                  {s.title}
                </text>
              </g>
            )}

            {s.kind === 'drivethru' && (
              <g>
                {/* Sky / Lane Backdrop */}
                <rect x="18" y="18" width="364" height="168" rx="6" fill="#0B1324" stroke="#28354E" strokeWidth="2" />
                {/* Weatherproof IP65 Canopy Hood */}
                <polygon points="62,36 338,36 346,48 54,48" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                {/* Pedestal Legs */}
                <rect x="108" y="146" width="16" height="34" fill="#334155" />
                <rect x="276" y="146" width="16" height="34" fill="#334155" />
                {/* Dual 2,500-Nit Outdoor Screens */}
                {[68, 206].map((x, idx) => (
                  <g key={x}>
                    <rect x={x} y="48" width="126" height="98" rx="4" fill="#06122B" stroke="#60A5FA" strokeWidth="2.5" />
                    <rect x={x + 8} y="56" width="110" height="18" rx="2" fill="#0050F0" />
                    <text x={x + 63} y="68" fill="#FFFFFF" fontSize="8.5" fontWeight="900" textAnchor="middle">
                      {idx === 0 ? 'COMBO MEALS' : 'DRINKS & SIDES'}
                    </text>
                    {[0, 1, 2].map((r) => (
                      <g key={r} transform={`translate(0, ${r * 18})`}>
                        <rect x={x + 8} y="82" width="76" height="8" rx="2" fill="#E2E8F0" />
                        <rect x={x + 92} y="82" width="26" height="8" rx="2" fill="#60A5FA" />
                      </g>
                    ))}
                  </g>
                ))}
                {/* Speaker Callbox */}
                <rect x="348" y="84" width="22" height="96" rx="3" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                <circle cx="359" cy="100" r="5" fill="#0050F0" />
                {/* Asphalt Lane */}
                <rect x="18" y="178" width="364" height="10" rx="2" fill="#1E293B" />
              </g>
            )}

            {s.kind === 'portrait' && (
              <g>
                <rect x="18" y="18" width="364" height="168" rx="6" fill="#0F172A" stroke="#28354E" strokeWidth="2" />
                {/* Vertical Portrait Display */}
                <rect
                  x="130"
                  y="26"
                  width="140"
                  height="152"
                  rx="6"
                  fill="url(#menuScreenGlow)"
                  stroke="#3B82F6"
                  strokeWidth="2.5"
                  style={{ filter: 'drop-shadow(0 0 14px rgba(37, 99, 235, 0.4))' }}
                />
                <rect x="140" y="36" width="120" height="24" rx="3" fill="#0050F0" />
                <text x="200" y="51" fill="#FFFFFF" fontSize="8" fontWeight="900" letterSpacing="0.7" textAnchor="middle">
                  {s.title}
                </text>
                <rect x="140" y="68" width="120" height="58" rx="4" fill="#1E3A8A" />
                <circle cx="200" cy="96" r="18" fill="#FBBF24" opacity="0.9" />
                <text x="200" y="100" fill="#0A1E46" fontSize="10" fontWeight="900" textAnchor="middle">$7.99</text>
                {/* Loyalty QR Block */}
                <rect x="144" y="134" width="30" height="30" rx="2" fill="#FFFFFF" />
                <rect x="149" y="139" width="20" height="20" fill="#0F172A" />
                <text x="220" y="147" fill="#FFFFFF" fontSize="8" fontWeight="800" textAnchor="middle">SCAN FOR</text>
                <text x="220" y="159" fill="#93C5FD" fontSize="7.5" fontWeight="700" textAnchor="middle">REWARDS</text>
              </g>
            )}
          </svg>
        </div>
      </div>

      <div style={{ background: 'var(--panel)', padding: 20 }}>
        <div className="chips" role="tablist" aria-label="Digital menu board style" style={{ gap: 8 }}>
          {MENU_STYLES.map((style, i) => (
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
