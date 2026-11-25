'use client'
import { useState } from 'react'
import { CL_STYLES } from '@/data/siteData'

export default function LightingDemo() {
  const [active, setActive] = useState(0)
  const s = CL_STYLES[active]

  return (
    <div className="channel-lighting-demo" style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid var(--line)' }}>
      <div className="demo" id="clDemo" style={{ background: s.bg }}>
        <span
          className="disp"
          id="clDemoText"
          style={{
            color: s.color,
            textShadow: s.shadow,
            WebkitTextStroke: s.id === 'open' ? '3px #8DB6FF' : undefined,
          }}
        >
          ROSA&apos;S
        </span>
      </div>
      <div style={{ background: 'var(--panel)', padding: 20 }}>
        <div className="chips" role="tablist" aria-label="Lighting style" id="clStyles" style={{ gap: 8 }}>
          {CL_STYLES.map((style, i) => (
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
          <p id="clDesc" style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: '#D5DCEA', flex: '1 1 300px' }}>
            {s.desc}
          </p>
          <div>
            <div style={{ fontSize: 13, color: 'var(--dmuted)' }}>Best for</div>
            <div id="clBest" style={{ fontWeight: 700, color: '#fff', maxWidth: 220 }}>{s.best}</div>
            <div style={{ fontSize: 13, color: 'var(--dmuted)', marginTop: 8 }}>Cost vs. front-lit</div>
            <div id="clCost" style={{ fontWeight: 700, color: 'var(--elec)' }}>{s.cost}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
