'use client'
import { useState } from 'react'

export interface BladeStyle {
  id: string
  label: string
  badge: string
  title: string
  subtitle: string
  desc: string
  best: string
  cost: string
  bg: string
  kind: 'lightbox' | 'routed' | 'halo' | 'wrought'
}

export const BLADE_STYLES: BladeStyle[] = [
  {
    id: 'double-lightbox',
    label: 'Double Lightbox',
    badge: 'Double-Sided · 12V LED',
    title: 'OAK & BEAN',
    subtitle: 'COFFEE · BAKERY',
    desc: 'Extruded aluminum projecting cabinet with illuminated polycarbonate faces on both sides for day and night sidewalk visibility.',
    best: 'Cafes, boutiques, urban retail',
    cost: 'Baseline ($1.6k – $3.2k)',
    bg: '#070C18',
    kind: 'lightbox',
  },
  {
    id: 'routed-push',
    label: 'Push-Through',
    badge: 'CNC Routed · 1/2" Acrylic',
    title: 'ATELIER 14',
    subtitle: 'SALON STUDIO',
    desc: 'CNC-routed black aluminum face with 1/2" push-through acrylic letters that glow crisply against a dark architectural body.',
    best: 'Salons, galleries, upscale dining',
    cost: '+25% vs. baseline',
    bg: '#060A14',
    kind: 'routed',
  },
  {
    id: 'halo-cut',
    label: 'Halo-Lit Metal',
    badge: 'Warm 3000K · Brushed Alloy',
    title: 'MARLOWE',
    subtitle: 'LAW GROUP',
    desc: 'Solid brushed aluminum blade sign with dimensional standoff letters and warm LED halo illumination along the bracket.',
    best: 'Historic districts, law & CPA offices',
    cost: '+35% vs. baseline',
    bg: '#05070D',
    kind: 'halo',
  },
  {
    id: 'scroll-bracket',
    label: 'Scroll Bracket',
    badge: 'Non-Lit · Wrought Steel',
    title: 'RIVERBEND',
    subtitle: 'BOOKS & VINYL',
    desc: 'Heavy-gauge CNC-cut aluminum panel suspended from a powder-coated steel scroll bracket with raised dimensional lettering.',
    best: 'Daytime foot traffic, HOA districts',
    cost: '-25% vs. baseline',
    bg: '#0A101E',
    kind: 'wrought',
  },
]

export default function BladeDemo() {
  const [active, setActive] = useState(0)
  const s = BLADE_STYLES[active]

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
        {/* Architectural Brick / Facade Grid */}
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

        {/* Floating Spec Badge */}
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
              <linearGradient id="bladeWallGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#121928" />
                <stop offset="80%" stopColor="#1D273B" />
                <stop offset="100%" stopColor="#2A3752" />
              </linearGradient>
              <linearGradient id="bladeBoxBlue" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0050F0" />
                <stop offset="100%" stopColor="#062666" />
              </linearGradient>
              <linearGradient id="bladeBrushed" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#94A3B8" />
                <stop offset="35%" stopColor="#E2E8F0" />
                <stop offset="65%" stopColor="#64748B" />
                <stop offset="100%" stopColor="#CBD5E1" />
              </linearGradient>
              <radialGradient id="bladeWarmHalo" cx="50%" cy="50%" r="55%">
                <stop offset="0%" stopColor="rgba(255, 200, 110, 0.48)" />
                <stop offset="60%" stopColor="rgba(255, 180, 80, 0.14)" />
                <stop offset="100%" stopColor="rgba(255, 180, 80, 0)" />
              </radialGradient>
              <radialGradient id="bladeBlueGlow" cx="50%" cy="50%" r="55%">
                <stop offset="0%" stopColor="rgba(0, 80, 240, 0.45)" />
                <stop offset="100%" stopColor="rgba(0, 80, 240, 0)" />
              </radialGradient>
            </defs>

            {/* Brick Facade Pier on Left */}
            <rect x="14" y="10" width="54" height="185" rx="3" fill="url(#bladeWallGrad)" stroke="#334155" strokeWidth="1.5" />
            {[30, 52, 74, 96, 118, 140, 162].map((y) => (
              <line key={y} x1="16" y1={y} x2="66" y2={y} stroke="#0F172A" strokeWidth="1" opacity="0.6" />
            ))}
            {/* Heavy Steel Wall Mounting Plate + Bolts */}
            <rect x="64" y="38" width="12" height="106" rx="2" fill="#334155" stroke="#64748B" strokeWidth="1" />
            <circle cx="70" cy="48" r="2.5" fill="#CBD5E1" />
            <circle cx="70" cy="134" r="2.5" fill="#CBD5E1" />

            {/* Ambient Light Spill */}
            {s.kind === 'halo' && <ellipse cx="205" cy="108" rx="125" ry="68" fill="url(#bladeWarmHalo)" />}
            {(s.kind === 'lightbox' || s.kind === 'routed') && (
              <ellipse cx="205" cy="108" rx="125" ry="68" fill="url(#bladeBlueGlow)" />
            )}

            {s.kind === 'wrought' ? (
              <g>
                {/* Ornate Scroll Bracket */}
                <rect x="76" y="46" width="232" height="8" rx="2" fill="#1E293B" stroke="#475569" strokeWidth="1" />
                <path d="M 76 116 C 95 116, 108 86, 128 54" fill="none" stroke="#475569" strokeWidth="4" />
                <circle cx="102" cy="82" r="10" fill="none" stroke="#475569" strokeWidth="3" />
                {/* Hanging Rings */}
                <rect x="128" y="54" width="6" height="18" rx="2" fill="#94A3B8" />
                <rect x="260" y="54" width="6" height="18" rx="2" fill="#94A3B8" />
                {/* Architectural Shaped Plaque */}
                <rect x="98" y="70" width="198" height="96" rx="14" fill="#0F172A" stroke="#94A3B8" strokeWidth="2.5" />
                <rect x="106" y="78" width="182" height="80" rx="10" fill="none" stroke="#475569" strokeWidth="1" />
                <text x="197" y="116" fill="#F8FAFC" fontSize="20" fontWeight="800" letterSpacing="1.8" textAnchor="middle">
                  {s.title}
                </text>
                <text x="197" y="138" fill="#93C5FD" fontSize="9.5" fontWeight="700" letterSpacing="2.2" textAnchor="middle">
                  {s.subtitle}
                </text>
              </g>
            ) : (
              <g>
                {/* Cantilever Steel Arm + Gusset */}
                <rect x="76" y="48" width="228" height="9" rx="2" fill="#2A364F" stroke="#475569" strokeWidth="1" />
                <polygon points="76,124 128,57 140,57 76,136" fill="#222D42" />
                <rect x="128" y="57" width="7" height="15" fill="#64748B" />
                <rect x="262" y="57" width="7" height="15" fill="#64748B" />

                {/* 3D Side Return Depth Edge */}
                <rect x="94" y="70" width="206" height="96" rx="8" fill="#0B1120" stroke="#334155" strokeWidth="1.5" />

                {/* Main Sign Face */}
                <rect
                  x="100"
                  y="70"
                  width="200"
                  height="96"
                  rx="8"
                  fill={s.kind === 'lightbox' ? 'url(#bladeBoxBlue)' : s.kind === 'halo' ? '#121826' : '#080D1A'}
                  stroke={s.kind === 'halo' ? '#CBD5E1' : '#4D8DFF'}
                  strokeWidth="2"
                />

                {s.kind === 'lightbox' && (
                  <>
                    <rect x="108" y="78" width="184" height="80" rx="5" fill="#EFF6FF" />
                    <rect x="108" y="78" width="184" height="24" rx="5" fill="#DBEAFE" opacity="0.5" />
                  </>
                )}

                {s.kind === 'routed' && (
                  <rect x="112" y="82" width="176" height="72" rx="4" fill="none" stroke="#1E3A8A" strokeWidth="1.5" />
                )}

                <text
                  x="200"
                  y="116"
                  fill={s.kind === 'lightbox' ? '#062666' : s.kind === 'halo' ? 'url(#bladeBrushed)' : '#FFFFFF'}
                  fontSize="21"
                  fontWeight="900"
                  letterSpacing="1.6"
                  textAnchor="middle"
                  style={
                    s.kind === 'routed'
                      ? { filter: 'drop-shadow(0 0 8px rgba(147, 197, 253, 0.85))' }
                      : s.kind === 'halo'
                        ? { filter: 'drop-shadow(0 0 10px rgba(255, 200, 110, 0.75))' }
                        : undefined
                  }
                >
                  {s.title}
                </text>
                <text
                  x="200"
                  y="138"
                  fill={s.kind === 'lightbox' ? '#0050F0' : s.kind === 'halo' ? '#FDE68A' : '#7EB0FF'}
                  fontSize="9.5"
                  fontWeight="700"
                  letterSpacing="2.2"
                  textAnchor="middle"
                >
                  {s.subtitle}
                </text>
              </g>
            )}

            {/* Sidewalk Ground Line */}
            <rect x="10" y="191" width="380" height="6" rx="2" fill="#1E293B" />
          </svg>
        </div>
      </div>

      <div style={{ background: 'var(--panel)', padding: 20 }}>
        <div className="chips" role="tablist" aria-label="Blade sign style" style={{ gap: 8 }}>
          {BLADE_STYLES.map((style, i) => (
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
