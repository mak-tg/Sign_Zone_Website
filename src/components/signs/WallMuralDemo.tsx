'use client'
import { useState } from 'react'

export interface MuralStyle {
  id: string
  label: string
  badge: string
  title: string
  sub: string
  desc: string
  best: string
  cost: string
  bg: string
  kind: 'panorama' | 'brick' | 'frost' | 'diecut'
}

export const MURAL_STYLES: MuralStyle[] = [
  {
    id: 'full-wall',
    label: 'Full-Wall Mural',
    badge: '3M Matte Laminate · Zero VOC',
    title: 'BUILT FOR TEXAS',
    sub: 'DALLAS · FORT WORTH · SINCE 2011',
    desc: 'Seamless floor-to-ceiling 3M cast wall wrap printed at 1200 DPI with matte UV overlaminate to eliminate office glare.',
    best: 'Conference rooms, fitness studios, corridors',
    cost: 'Baseline ($10 – $16 / sq ft)',
    bg: '#070C18',
    kind: 'panorama',
  },
  {
    id: 'textured-brick',
    label: 'Textured Brick',
    badge: 'High-Conformability Cast',
    title: 'LONE STAR ROASTERS',
    sub: 'SMALL BATCH · DEEP ELLUM',
    desc: 'High-conformability cast vinyl heat-rolled directly into exposed brick, cinderblock, or concrete texture for a painted-on look.',
    best: 'Loft offices, breweries, retail feature walls',
    cost: '+30% vs. drywall',
    bg: '#0A0E18',
    kind: 'brick',
  },
  {
    id: 'frosted-glass',
    label: 'Frosted Glass',
    badge: '3M Dusted Crystal Film',
    title: 'APEX VENTURES',
    sub: 'EXECUTIVE BOARDROOM',
    desc: 'Etched-look 3M dusted crystal film custom-plotted with company patterns and privacy bands for glass conference rooms.',
    best: 'Medical suites, law firms, corporate offices',
    cost: '$12 – $22 / sq ft',
    bg: '#08101E',
    kind: 'frost',
  },
  {
    id: 'timeline-cut',
    label: 'Die-Cut + 3D',
    badge: 'Contour Vinyl + Acrylic',
    title: 'OUR VALUES',
    sub: 'CRAFT · SPEED · ACCOUNTABILITY',
    desc: 'Contour-cut vinyl typography, core values, and brand timelines paired with 3D acrylic accents for high-impact culture walls.',
    best: 'HQs, schools, clinics, hallways',
    cost: '-20% vs. full wrap',
    bg: '#0B1120',
    kind: 'diecut',
  },
]

export default function WallMuralDemo() {
  const [active, setActive] = useState(0)
  const s = MURAL_STYLES[active]

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
            backgroundSize: '28px 28px',
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
              <pattern id="muralBrickPat" x="0" y="0" width="28" height="14" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="26" height="6" fill="#3B231C" />
                <rect x="14" y="7" width="26" height="6" fill="#321D17" />
                <rect x="0" y="7" width="12" height="6" fill="#321D17" />
              </pattern>
              <linearGradient id="ceilingSpot" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(147, 197, 253, 0.28)" />
                <stop offset="100%" stopColor="rgba(147, 197, 253, 0)" />
              </linearGradient>
            </defs>

            {/* Interior Room Wall */}
            <rect x="24" y="16" width="352" height="160" rx="6" fill="#0F172A" stroke="#334155" strokeWidth="2" />

            {/* Ceiling Recessed Spotlights */}
            <polygon points="105,16 65,120 145,120" fill="url(#ceilingSpot)" />
            <polygon points="295,16 255,120 335,120" fill="url(#ceilingSpot)" />

            {s.kind === 'panorama' && (
              <g>
                <polygon points="24,176 130,66 238,176" fill="#1D4ED8" opacity="0.45" />
                <polygon points="148,176 266,48 376,176" fill="#0050F0" opacity="0.65" />
                <polygon points="88,176 196,94 304,176" fill="#60A5FA" opacity="0.28" />
                <text x="200" y="96" fill="#FFFFFF" fontSize="21" fontWeight="900" letterSpacing="2" textAnchor="middle">
                  {s.title}
                </text>
                <text x="200" y="118" fill="#BFDBFE" fontSize="9.5" fontWeight="700" letterSpacing="2.4" textAnchor="middle">
                  {s.sub}
                </text>
              </g>
            )}

            {s.kind === 'brick' && (
              <g>
                <rect x="26" y="18" width="348" height="156" fill="url(#muralBrickPat)" opacity="0.88" />
                <circle cx="200" cy="96" r="54" fill="rgba(0, 80, 240, 0.85)" stroke="#93C5FD" strokeWidth="2.5" />
                <text x="200" y="94" fill="#FFFFFF" fontSize="14" fontWeight="900" letterSpacing="1.6" textAnchor="middle">
                  {s.title}
                </text>
                <text x="200" y="112" fill="#DBEAFE" fontSize="7.5" fontWeight="700" letterSpacing="1.8" textAnchor="middle">
                  {s.sub}
                </text>
              </g>
            )}

            {s.kind === 'frost' && (
              <g>
                {/* Glass Partition Mullions */}
                <rect x="26" y="18" width="348" height="156" fill="#0B1424" />
                <line x1="142" y1="18" x2="142" y2="174" stroke="#475569" strokeWidth="3" />
                <line x1="258" y1="18" x2="258" y2="174" stroke="#475569" strokeWidth="3" />
                {/* Etched Frosted Band */}
                <rect x="26" y="54" width="348" height="82" fill="rgba(226, 232, 240, 0.22)" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
                {/* Diagonal Architectural Accent Lines */}
                <line x1="40" y1="136" x2="96" y2="54" stroke="rgba(255,255,255,0.22)" strokeWidth="6" />
                <line x1="304" y1="136" x2="360" y2="54" stroke="rgba(255,255,255,0.22)" strokeWidth="6" />
                <text x="200" y="96" fill="#FFFFFF" fontSize="19" fontWeight="800" letterSpacing="2.2" textAnchor="middle">
                  {s.title}
                </text>
                <text x="200" y="116" fill="#CBD5E1" fontSize="8.5" fontWeight="700" letterSpacing="2.2" textAnchor="middle">
                  {s.sub}
                </text>
              </g>
            )}

            {s.kind === 'diecut' && (
              <g>
                {/* Timeline Horizontal Track */}
                <line x1="56" y1="126" x2="344" y2="126" stroke="#3B82F6" strokeWidth="2.5" />
                {[88, 162, 238, 312].map((cx, idx) => (
                  <g key={cx}>
                    <circle cx={cx} cy="126" r="7" fill="#0050F0" stroke="#93C5FD" strokeWidth="2" />
                    <rect x={cx - 24} y="140" width="48" height="12" rx="3" fill="#1E293B" />
                    <text x={cx} y="149" fill="#93C5FD" fontSize="7" fontWeight="700" textAnchor="middle">
                      201{idx + 1}
                    </text>
                  </g>
                ))}
                <text x="200" y="76" fill="#FFFFFF" fontSize="22" fontWeight="900" letterSpacing="2.2" textAnchor="middle">
                  {s.title}
                </text>
                <text x="200" y="96" fill="#60A5FA" fontSize="9.5" fontWeight="700" letterSpacing="2" textAnchor="middle">
                  {s.sub}
                </text>
              </g>
            )}

            {/* Floor Baseboard & Desk Silhouette */}
            <rect x="16" y="176" width="368" height="12" rx="2" fill="#1E293B" />
          </svg>
        </div>
      </div>

      <div style={{ background: 'var(--panel)', padding: 20 }}>
        <div className="chips" role="tablist" aria-label="Wall mural style" style={{ gap: 8 }}>
          {MURAL_STYLES.map((style, i) => (
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
