'use client'
import { useState } from 'react'

export interface LobbyStyle {
  id: string
  label: string
  title: string
  sub: string
  desc: string
  best: string
  cost: string
  bg: string
  type: 'brushed' | 'halo' | 'acrylic' | 'matte'
}

export const LOBBY_STYLES: LobbyStyle[] = [
  {
    id: 'brushed-metal',
    label: 'Brushed Metal',
    title: 'VANGUARD PARTNERS',
    sub: 'CAPITAL MANAGEMENT · SUITE 800',
    desc: 'Solid waterjet-cut aluminum plate with a horizontal brushed satin finish pin-mounted with 1/2" architectural wall standoffs.',
    best: 'Law firms, financial, executive offices',
    cost: 'Popular Standard',
    bg: '#0B101E',
    type: 'brushed',
  },
  {
    id: 'backlit-halo',
    label: 'Backlit Halo Glow',
    title: 'AURA AESTHETICS',
    sub: 'MEDICAL SPA & WELLNESS CLINIC',
    desc: 'Dimensional metal letters with warm 3000K or crisp 6000K LED backlighting creating a sophisticated halo aura against dark accent walls.',
    best: 'Med spas, luxury clinics, creative agencies',
    cost: '+40% vs. brushed',
    bg: '#05070D',
    type: 'halo',
  },
  {
    id: 'acrylic-plaque',
    label: 'Acrylic Plaque',
    title: 'STERLING ASSOCIATES',
    sub: 'FAMILY & COSMETIC DENTISTRY',
    desc: 'Flame-polished clear cast acrylic panel with frosted or second-surface vinyl logo mounted via stainless steel barrel standoffs.',
    best: 'Dental suites, multi-tenant offices',
    cost: 'Budget Friendly',
    bg: '#080E1C',
    type: 'acrylic',
  },
  {
    id: 'black-matte',
    label: 'Matte Architectural',
    title: 'APEX ARCHITECTURE',
    sub: 'DESIGN + BUILD STUDIO',
    desc: 'Laser-cut cast acrylic finished in ultra-matte jet black or brand PMS colors mounted flush to wood slat or white marble reception walls.',
    best: 'Design studios, modern tech lobbies',
    cost: 'Moderate',
    bg: '#121622',
    type: 'matte',
  },
]

export default function LobbyDemo() {
  const [active, setActive] = useState(0)
  const s = LOBBY_STYLES[active]

  return (
    <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid var(--line)' }}>
      {/* Simulation Stage */}
      <div
        className="demo"
        style={{
          background: s.bg,
          height: 300,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px 20px',
          overflow: 'hidden',
          transition: 'background .4s ease',
        }}
      >
        {/* Architectural Reception Accent Wall Texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.15,
            backgroundImage: s.type === 'matte'
              ? 'repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 12px, transparent 12px, transparent 24px)'
              : 'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: s.type === 'matte' ? 'auto' : '30px 30px',
            pointerEvents: 'none',
          }}
        />

        {/* Photorealistic Reception Logo Vector Blueprint */}
        <div
          style={{
            width: '92%',
            maxWidth: 390,
            height: 190,
            position: 'relative',
            filter: 'drop-shadow(0 20px 36px rgba(0,0,0,0.85))',
          }}
        >
          <svg viewBox="0 0 400 190" style={{ width: '100%', height: '100%', display: 'block' }}>
            <defs>
              <linearGradient id="brushedMetalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#BACADE" />
                <stop offset="25%" stopColor="#F0F4FA" />
                <stop offset="50%" stopColor="#A8BCCC" />
                <stop offset="75%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#98AAB8" />
              </linearGradient>
              <linearGradient id="plaqueGlassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
              </linearGradient>
            </defs>

            {s.type === 'acrylic' ? (
              <g transform="translate(25, 20)">
                {/* 1/2" Clear Acrylic Floating Plaque */}
                <rect
                  x="20"
                  y="15"
                  width="310"
                  height="120"
                  rx="10"
                  fill="url(#plaqueGlassGrad)"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="1.5"
                  filter="drop-shadow(0 14px 28px rgba(0,0,0,0.7))"
                />
                {/* 4 Corner Stainless Steel Barrel Standoffs */}
                <circle cx="34" cy="28" r="5" fill="#BACADE" stroke="#4A5873" strokeWidth="1.5" />
                <circle cx="316" cy="28" r="5" fill="#BACADE" stroke="#4A5873" strokeWidth="1.5" />
                <circle cx="34" cy="122" r="5" fill="#BACADE" stroke="#4A5873" strokeWidth="1.5" />
                <circle cx="316" cy="122" r="5" fill="#BACADE" stroke="#4A5873" strokeWidth="1.5" />

                <text x="175" y="70" fill="#4D8DFF" fontFamily="Archivo, sans-serif" fontWeight="900" fontSize="18" letterSpacing="0.06em" textAnchor="middle">
                  {s.title}
                </text>
                <text x="175" y="92" fill="#FFFFFF" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="9" letterSpacing="0.14em" textAnchor="middle">
                  {s.sub}
                </text>
              </g>
            ) : s.type === 'halo' ? (
              <g transform="translate(20, 20)">
                {/* Halo Backlighting Ambient Glow Behind Letters */}
                <text
                  x="180"
                  y="80"
                  fill="#0050F0"
                  fontFamily="Archivo, sans-serif"
                  fontWeight="900"
                  fontSize="22"
                  letterSpacing="0.06em"
                  textAnchor="middle"
                  filter="drop-shadow(0 0 28px #4D8DFF) drop-shadow(0 0 45px rgba(0, 80, 240, 0.95))"
                >
                  {s.title}
                </text>
                {/* Crisp White Dimensional Face Letters */}
                <text
                  x="180"
                  y="80"
                  fill="#FFFFFF"
                  fontFamily="Archivo, sans-serif"
                  fontWeight="900"
                  fontSize="22"
                  letterSpacing="0.06em"
                  textAnchor="middle"
                  filter="drop-shadow(0 2px 4px rgba(0,0,0,0.9))"
                >
                  {s.title}
                </text>
                <text
                  x="180"
                  y="105"
                  fill="#BFD3FF"
                  fontFamily="Inter, sans-serif"
                  fontWeight="800"
                  fontSize="9.5"
                  letterSpacing="0.14em"
                  textAnchor="middle"
                >
                  {s.sub}
                </text>
              </g>
            ) : s.type === 'matte' ? (
              <g transform="translate(20, 20)">
                {/* Ultra-Matte Jet Black Dimensional Letters */}
                <text
                  x="180"
                  y="80"
                  fill="#0E131E"
                  stroke="#374868"
                  strokeWidth="1"
                  fontFamily="Archivo, sans-serif"
                  fontWeight="900"
                  fontSize="22"
                  letterSpacing="0.06em"
                  textAnchor="middle"
                  filter="drop-shadow(0 6px 12px rgba(0,0,0,0.85))"
                >
                  {s.title}
                </text>
                <text
                  x="180"
                  y="105"
                  fill="#8A9BB8"
                  fontFamily="Inter, sans-serif"
                  fontWeight="800"
                  fontSize="9.5"
                  letterSpacing="0.14em"
                  textAnchor="middle"
                >
                  {s.sub}
                </text>
              </g>
            ) : (
              /* Brushed Satin Aluminum Dimensional Letters */
              <g transform="translate(20, 20)">
                <text
                  x="180"
                  y="80"
                  fill="url(#brushedMetalGrad)"
                  fontFamily="Archivo, sans-serif"
                  fontWeight="900"
                  fontSize="22"
                  letterSpacing="0.06em"
                  textAnchor="middle"
                  filter="drop-shadow(0 8px 16px rgba(0,0,0,0.9)) drop-shadow(0 1px 1px rgba(255,255,255,0.4))"
                >
                  {s.title}
                </text>
                <text
                  x="180"
                  y="105"
                  fill="#E6EEFF"
                  fontFamily="Inter, sans-serif"
                  fontWeight="800"
                  fontSize="9.5"
                  letterSpacing="0.14em"
                  textAnchor="middle"
                >
                  {s.sub}
                </text>
              </g>
            )}
          </svg>
        </div>
      </div>

      {/* Control Panel */}
      <div style={{ background: 'var(--panel)', padding: 20 }}>
        <div className="chips" role="tablist" aria-label="Lobby style" style={{ gap: 8 }}>
          {LOBBY_STYLES.map((style, i) => (
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
