'use client'
import { useState, useEffect } from 'react'
import ChipGroup from '@/components/ui/ChipGroup'

function money(n: number) { return '$' + Math.round(n).toLocaleString('en-US') }
function kmoney(n: number) {
  if (n >= 1000) { const k = n / 1000; return '$' + (k >= 10 ? Math.round(k) : Math.round(k * 10) / 10) + 'k' }
  return money(n)
}

const PER_LETTER: Record<string, [number, number]> = {
  '12': [200, 400], '18': [300, 550], '24': [400, 750], '36': [700, 1200], '48': [1000, 2000],
}
const LIT_F: Record<string, number> = { front: 1, halo: 1.2, combo: 1.35, none: 0.7 }
const MOUNT_F: Record<string, number> = { direct: 0, raceway: 0.08, backer: 0.15 }
const INST: Record<string, [number, number]> = { one: [600, 1200], two: [1200, 2500], high: [2500, 5000] }

export default function CostCalculator() {
  const [text, setText] = useState("Rosa's Kitchen")
  const [height, setHeight] = useState('18')
  const [lit, setLit] = useState('front')
  const [mount, setMount] = useState('direct')
  const [inst, setInst] = useState('one')
  const [result, setResult] = useState({ total: '—', lines: [] as [string, string][] })

  useEffect(() => {
    const n = text.replace(/[^A-Za-z0-9&]/g, '').length
    if (!n) { setResult({ total: '—', lines: [] }); return }
    const pl = PER_LETTER[height]
    const lLo = n * pl[0] * LIT_F[lit], lHi = n * pl[1] * LIT_F[lit]
    const mLo = lLo * MOUNT_F[mount], mHi = lHi * MOUNT_F[mount]
    const i = INST[inst]
    const pLo = lit === 'none' ? 250 : 450, pHi = lit === 'none' ? 600 : 1100
    setResult({
      total: kmoney(lLo + mLo + i[0] + pLo) + ' – ' + kmoney(lHi + mHi + i[1] + pHi),
      lines: [
        [n + ' letters × ' + height + '"', kmoney(lLo) + ' – ' + kmoney(lHi)],
        ['Mounting', mLo ? kmoney(mLo) + ' – ' + kmoney(mHi) : 'Included'],
        ['Installation', kmoney(i[0]) + ' – ' + kmoney(i[1])],
        ['Permits & drawings', kmoney(pLo) + ' – ' + kmoney(pHi)],
      ],
    })
  }, [text, height, lit, mount, inst])

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
      <div className="panel" style={{ flex: '999 1 500px', minWidth: 0 }}>
        <h2 style={{ margin: 0, fontSize: 26, color: 'var(--navy)' }}>Estimate channel letter cost</h2>
        <p style={{ margin: '8px 0 0', color: 'var(--muted)', fontSize: 15 }}>Priced the way sign shops price them: per letter, by height, plus lighting, mounting and install.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 18, marginTop: 26 }}>
          <div>
            <label className="lbl" htmlFor="clt">Sign text</label>
            <input id="clt" className="inp" type="text" value={text} onChange={e => setText(e.target.value)} />
            <span style={{ display: 'block', fontSize: 13, color: 'var(--muted)', marginTop: 6 }}>
              {text.replace(/[^A-Za-z0-9&]/g, '').length} letters (spaces don&apos;t count)
            </span>
          </div>
          <div>
            <label className="lbl" htmlFor="clh">Letter height</label>
            <select id="clh" className="inp" value={height} onChange={e => setHeight(e.target.value)}>
              {['12', '18', '24', '36', '48'].map(h => <option key={h} value={h}>{h} inches</option>)}
            </select>
          </div>
        </div>

        <span className="lbl" style={{ marginTop: 22, display: 'block' }}>Lighting style</span>
        <ChipGroup options={[{ value: 'front', label: 'Front-lit' }, { value: 'halo', label: 'Halo / back-lit' }, { value: 'combo', label: 'Front + halo' }, { value: 'none', label: 'Non-lit' }]} value={lit} onChange={setLit} />

        <span className="lbl" style={{ marginTop: 22, display: 'block' }}>Mounting</span>
        <ChipGroup options={[{ value: 'direct', label: 'Direct to wall' }, { value: 'raceway', label: 'On a raceway' }, { value: 'backer', label: 'On a backer panel' }]} value={mount} onChange={setMount} />

        <span className="lbl" style={{ marginTop: 22, display: 'block' }}>Install height</span>
        <ChipGroup options={[{ value: 'one', label: 'One story' }, { value: 'two', label: 'Two story / lift' }, { value: 'high', label: 'High-rise / crane' }]} value={inst} onChange={setInst} />
      </div>

      <div style={{ flex: '1 1 260px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div className="out b">
          <div className="outl">Estimated total</div>
          <div className="outv">{result.total}</div>
        </div>
        {result.lines.length > 0 && (
          <div className="panel" style={{ padding: 20 }}>
            {result.lines.map(([label, val]) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', gap: 12, padding: '10px 0', borderBottom: '1px solid #EDF1F7', fontSize: 15 }}>
                <span style={{ color: 'var(--muted)' }}>{label}</span>
                <span style={{ fontWeight: 700, color: 'var(--navy)' }}>{val}</span>
              </div>
            ))}
          </div>
        )}
        <p style={{ fontSize: 12.5, lineHeight: 1.55, color: 'var(--muted)', margin: 0 }}>Per-letter ranges reflect published 2026 U.S. pricing. Mounting, install and permit lines are sample values.</p>
        <a className="btn btn-dark" href="/quote">Send this to Sign Zone →</a>
      </div>
    </div>
  )
}
