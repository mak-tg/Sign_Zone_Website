'use client'
import { useState } from 'react'

export interface LedStyle {
  id: string
  label: string
  badge: string
  title: string
  subtitle: string
  desc: string
  best: string
  cost: string
  bg: string
  kind: '10mm' | '6mm' | '16mm' | 'combo'
}

export const LED_STYLES: LedStyle[] = [
  {
    id: '10mm-full',
    label: '10mm Full-Color',
    badge: '10mm Pitch · Auto-Dimming',
    title: 'OPEN ENROLLMENT',
    subtitle: 'TOURS DAILY · 214-714-4623',
    desc: 'High-density 10mm pixel pitch delivering crisp photography, smooth video, and sharp small text for mid-speed arterial roads.',
    best: 'Schools, churches, retail plazas',
    cost: 'Baseline ($9.5k – $24k)',
    bg: '#050812',
    kind: '10mm',
  },
  {
    id: '6mm-ultra',
    label: '6mm Ultra-HD',
    badge: '6mm Ultra-HD · Close Range',
    title: 'FALL SPECIALS',
    subtitle: 'CLOUD SCHEDULED · 4G LTE',
    desc: 'Tight 6mm pixel spacing engineered for close-range city streets and pedestrian centers where crisp graphics matter most.',
    best: 'City streets, medical centers, banks',
    cost: '+35% vs. 10mm',
    bg: '#060A16',
    kind: '6mm',
  },
  {
    id: '16mm-highway',
    label: '16mm Highway',
    badge: '8,500+ Nits · Highway Spec',
    title: 'EXIT 42 · NEXT RIGHT',
    subtitle: 'OPEN 24 HOURS · FRESH FOOD',
    desc: 'Ultra-bright 8,500+ nit cabinets designed to cut through direct Texas afternoon sun and reach 65+ MPH highway traffic.',
    best: 'Highway pylons, auto dealers',
    cost: '-15% per sq ft',
    bg: '#040710',
    kind: '16mm',
  },
  {
    id: 'monument-combo',
    label: 'ID + EMC Combo',
    badge: 'Masonry + LED Matrix',
    title: 'GRACE FELLOWSHIP',
    subtitle: 'SUNDAY 9:30 & 11:00 AM',
    desc: 'Pairs a permanent illuminated architectural header with a lower programmable LED message center inside a masonry monument.',
    best: 'Churches, municipal & civic campuses',
    cost: '$25k – $65k+ turnkey',
    bg: '#070C18',
    kind: 'combo',
  },
]

export default function LedMessageDemo() {
  const [active, setActive] = useState(0)
  const s = LED_STYLES[active]

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

        <div style={{ width: '92%', maxWidth: 390, height: 205, position: 'relative', filter: 'drop-shadow(0 20px 34px rgba(0,0,0,0.9))' }}>
          <svg viewBox="0 0 400 205" style={{ width: '100%', height: '100%', display: 'block' }}>
            <defs>
              <pattern id="ledMatrixDots" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.05" fill="rgba(255,255,255,0.16)" />
              </pattern>
              <linearGradient id="ledScreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0044CC" />
                <stop offset="55%" stopColor="#0050F0" />
                <stop offset="100%" stopColor="#072363" />
              </linearGradient>
              <radialGradient id="ledAmbientGlow" cx="50%" cy="45%" r="55%">
                <stop offset="0%" stopColor="rgba(37, 99, 235, 0.45)" />
                <stop offset="100%" stopColor="rgba(37, 99, 235, 0)" />
              </radialGradient>
            </defs>

            <ellipse cx="200" cy="92" rx="170" ry="78" fill="url(#ledAmbientGlow)" />

            {s.kind === 'combo' ? (
              <g>
                {/* Masonry Stone Base */}
                <rect x="44" y="148" width="312" height="36" rx="4" fill="#36322C" stroke="#524B42" strokeWidth="1.5" />
                {/* Upper Permanent ID Header */}
                <rect x="54" y="20" width="292" height="42" rx="5" fill="#0B1324" stroke="#475569" strokeWidth="2" />
                <text x="200" y="47" fill="#FFFFFF" fontSize="16" fontWeight="900" letterSpacing="2" textAnchor="middle">
                  {s.title}
                </text>
                {/* Lower EMC LED Cabinet */}
                <rect x="54" y="66" width="292" height="82" rx="4" fill="#0B1120" stroke="#334155" strokeWidth="2.5" />
                <rect x="64" y="74" width="272" height="66" rx="3" fill="url(#ledScreenGrad)" />
                <rect x="64" y="74" width="272" height="66" rx="3" fill="url(#ledMatrixDots)" />
                <text x="200" y="102" fill="#FFFFFF" fontSize="15" fontWeight="900" letterSpacing="1.4" textAnchor="middle">
                  {s.subtitle}
                </text>
                <text x="200" y="124" fill="#FDE68A" fontSize="9.5" fontWeight="800" letterSpacing="1.8" textAnchor="middle">
                  ALL ARE WELCOME · 72°F
                </text>
              </g>
            ) : (
              <g>
                {/* Twin Steel Pylon Columns */}
                <rect x="108" y="142" width="24" height="44" fill="#1E293B" stroke="#334155" strokeWidth="1" />
                <rect x="268" y="142" width="24" height="44" fill="#1E293B" stroke="#334155" strokeWidth="1" />
                {/* Extruded Thermal Cabinet */}
                <rect x="30" y="22" width="340" height="124" rx="8" fill="#0B1120" stroke="#475569" strokeWidth="2.5" />
                {/* Photocell Light Sensor */}
                <circle cx="42" cy="34" r="3" fill="#60A5FA" />
                {/* Active LED Matrix */}
                <rect
                  x="46"
                  y="36"
                  width="308"
                  height="96"
                  rx="4"
                  fill="url(#ledScreenGrad)"
                  style={{ filter: 'drop-shadow(0 0 18px rgba(0, 80, 240, 0.6))' }}
                />
                <rect x="46" y="36" width="308" height="96" rx="4" fill="url(#ledMatrixDots)" />
                {/* Split Graphic Zone: Left Icon + Right Text */}
                <rect x="58" y="48" width="52" height="72" rx="4" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                <text x="84" y="84" fill="#FDE68A" fontSize="18" fontWeight="900" textAnchor="middle">74°</text>
                <text x="84" y="102" fill="#DBEAFE" fontSize="7.5" fontWeight="700" textAnchor="middle">2:15 PM</text>

                <text x="232" y="78" fill="#FFFFFF" fontSize="18.5" fontWeight="900" letterSpacing="1.2" textAnchor="middle">
                  {s.title}
                </text>
                <text x="232" y="102" fill="#93C5FD" fontSize="9.5" fontWeight="700" letterSpacing="1.4" textAnchor="middle">
                  {s.subtitle}
                </text>
              </g>
            )}

            {/* Concrete Curb */}
            <rect x="16" y="184" width="368" height="10" rx="3" fill="#252F42" />
          </svg>
        </div>
      </div>

      <div style={{ background: 'var(--panel)', padding: 20 }}>
        <div className="chips" role="tablist" aria-label="LED message center style" style={{ gap: 8 }}>
          {LED_STYLES.map((style, i) => (
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
