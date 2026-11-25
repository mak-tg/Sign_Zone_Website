'use client'
import { useState, useEffect } from 'react'
import ChipGroup from '@/components/ui/ChipGroup'

export default function VisibilityCalculator() {
  const [aud, setAud] = useState('drive')
  const [speed, setSpeed] = useState(35)
  const [walk, setWalk] = useState(50)
  const [words, setWords] = useState(3)
  const [chars, setChars] = useState(12)
  const [env, setEnv] = useState('mod')
  const [caps, setCaps] = useState(false)
  const [res, setRes] = useState({ lh: '—', dist: '—', time: '—', w: '—', area: '—' })

  useEffect(() => {
    const envF: Record<string, number> = { low: 1, mod: 0.83, high: 0.67 }
    const man: Record<string, number> = { low: 4, mod: 5, high: 6 }
    const w = Math.max(1, words)
    const rt = w / 3 + (aud === 'drive' ? man[env] : 2)
    const d = aud === 'drive' ? speed * 1.47 * rt : walk
    const lh = Math.max(1, Math.round(d / (30 * envF[env]) * (caps ? 1.15 : 1)))
    const line = Math.max(1, chars) * lh * 0.75 / 12
    const area = line * (lh / 12) * Math.max(1, Math.ceil(w / 3)) / 0.4
    setRes({ lh: lh + ' in', dist: Math.round(d) + ' ft', time: (Math.round(rt * 10) / 10) + ' sec', w: (Math.round(line * 10) / 10) + ' ft', area: Math.round(area) + ' sq ft' })
  }, [aud, speed, walk, words, chars, env, caps])

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
      <div className="panel" style={{ flex: '999 1 500px', minWidth: 0 }}>
        <h2 style={{ margin: 0, fontSize: 26, color: 'var(--navy)' }}>Check sign visibility and letter size</h2>
        <p style={{ margin: '8px 0 0', color: 'var(--muted)', fontSize: 15 }}>Based on the U.S. Sign Council research method.</p>

        <span className="lbl" style={{ marginTop: 24, display: 'block' }}>Who needs to read it?</span>
        <ChipGroup options={[{ value: 'drive', label: 'Drivers' }, { value: 'walk', label: 'People on foot' }]} value={aud} onChange={setAud} />

        {aud === 'drive' && (
          <div style={{ marginTop: 22 }}>
            <label className="lbl" htmlFor="spd">Speed limit: <span style={{ color: 'var(--blue)' }}>{speed} mph</span></label>
            <input id="spd" type="range" min={20} max={70} step={5} value={speed} onChange={e => setSpeed(+e.target.value)} style={{ width: '100%', accentColor: 'var(--blue)', height: 28 }} />
          </div>
        )}
        {aud === 'walk' && (
          <div style={{ marginTop: 22 }}>
            <label className="lbl" htmlFor="wd">Viewing distance: <span style={{ color: 'var(--blue)' }}>{walk} ft</span></label>
            <input id="wd" type="range" min={10} max={300} step={5} value={walk} onChange={e => setWalk(+e.target.value)} style={{ width: '100%', accentColor: 'var(--blue)', height: 28 }} />
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 18, marginTop: 22 }}>
          <div>
            <label className="lbl" htmlFor="wrd">Words on the sign</label>
            <input id="wrd" className="inp" type="number" min={1} max={20} value={words} onChange={e => setWords(+e.target.value)} />
          </div>
          <div>
            <label className="lbl" htmlFor="chr">Characters in longest line</label>
            <input id="chr" className="inp" type="number" min={2} max={40} value={chars} onChange={e => setChars(+e.target.value)} />
          </div>
        </div>

        <span className="lbl" style={{ marginTop: 22, display: 'block' }}>How busy is the area?</span>
        <ChipGroup options={[{ value: 'low', label: 'Quiet street' }, { value: 'mod', label: 'Typical commercial' }, { value: 'high', label: 'Busy, sign-heavy corridor' }]} value={env} onChange={setEnv} />

        <label style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 22, cursor: 'pointer', fontWeight: 600, color: 'var(--text)' }}>
          <input type="checkbox" checked={caps} onChange={e => setCaps(e.target.checked)} style={{ width: 22, height: 22, accentColor: 'var(--blue)' }} />
          All capital letters
        </label>
      </div>

      <div style={{ flex: '1 1 260px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div className="out b"><div className="outl">Recommended letter height</div><div className="outv">{res.lh}</div></div>
        <div className="two">
          <div className="out"><div className="outl">Reading distance</div><div className="outv s">{res.dist}</div></div>
          <div className="out"><div className="outl">Time to read</div><div className="outv s">{res.time}</div></div>
          <div className="out"><div className="outl">Line length</div><div className="outv s">{res.w}</div></div>
          <div className="out"><div className="outl">Suggested sign area</div><div className="outv s">{res.area}</div></div>
        </div>
        <p style={{ fontSize: 12.5, lineHeight: 1.55, color: 'var(--muted)', margin: 0 }}>Legibility index of 30 ft/inch (USSC). Your city&apos;s code may cap sign size.</p>
      </div>
    </div>
  )
}
