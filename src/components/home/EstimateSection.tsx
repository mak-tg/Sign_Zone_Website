'use client'
import { useState } from 'react'
import Link from 'next/link'

interface SizeOption {
  label: string
  sub: string
  min: number
  max: number
}

interface EstConfig {
  name: string
  unlitFactor: number | null
  sizes: SizeOption[]
}

const EST_DATA: Record<string, EstConfig> = {
  channel: {
    name: 'Channel letters',
    unlitFactor: 0.65,
    sizes: [
      { label: 'Small', sub: '12" letters, short name', min: 2500, max: 5000 },
      { label: 'Medium', sub: '18–24" letters', min: 4500, max: 10000 },
      { label: 'Large', sub: '36"+ letters', min: 9000, max: 20000 },
    ],
  },
  cabinet: {
    name: 'Cabinet / lightbox',
    unlitFactor: 0.6,
    sizes: [
      { label: 'Small', sub: 'Up to 24 sq ft', min: 2000, max: 4000 },
      { label: 'Medium', sub: '24–60 sq ft', min: 3500, max: 7000 },
      { label: 'Large', sub: '60+ sq ft', min: 6000, max: 12000 },
    ],
  },
  monument: {
    name: 'Monument',
    unlitFactor: 0.75,
    sizes: [
      { label: 'Small', sub: 'Single tenant, aluminum', min: 5000, max: 12000 },
      { label: 'Medium', sub: 'Masonry base, lit', min: 12000, max: 25000 },
      { label: 'Large', sub: 'Multi-tenant + LED', min: 25000, max: 65000 },
    ],
  },
  pylon: {
    name: 'Pylon',
    unlitFactor: 0.85,
    sizes: [
      { label: 'Small', sub: 'Up to 20 ft', min: 8000, max: 25000 },
      { label: 'Medium', sub: '20–35 ft', min: 25000, max: 75000 },
      { label: 'Large', sub: 'Highway, 35 ft+', min: 75000, max: 200000 },
    ],
  },
  window: {
    name: 'Window graphics',
    unlitFactor: null,
    sizes: [
      { label: 'Small', sub: 'Hours & logo', min: 200, max: 600 },
      { label: 'Medium', sub: 'Full storefront', min: 600, max: 1500 },
      { label: 'Large', sub: 'Multi-panel / perforated', min: 1500, max: 3000 },
    ],
  },
  wrap: {
    name: 'Vehicle wrap',
    unlitFactor: null,
    sizes: [
      { label: 'Small', sub: 'Decals / partial', min: 300, max: 1500 },
      { label: 'Medium', sub: 'Full car or SUV', min: 2500, max: 4500 },
      { label: 'Large', sub: 'Van or box truck', min: 4500, max: 8000 },
    ],
  },
  digital: {
    name: 'LED display',
    unlitFactor: null,
    sizes: [
      { label: 'Small', sub: 'Add-on to existing sign', min: 5000, max: 15000 },
      { label: 'Medium', sub: 'Mid-size full color', min: 15000, max: 40000 },
      { label: 'Large', sub: 'Large roadside', min: 40000, max: 100000 },
    ],
  },
}

function kmoney(n: number): string {
  if (n >= 1000) {
    const k = n / 1000
    return `$${k % 1 === 0 ? k : k.toFixed(1)}k`
  }
  return `$${n}`
}

export default function EstimateSection() {
  const [type, setType] = useState('channel')
  const [sizeIdx, setSizeIdx] = useState(1)
  const [isLit, setIsLit] = useState(true)
  const [distance, setDistance] = useState(150)

  const config = EST_DATA[type]
  const curSize = config.sizes[sizeIdx] || config.sizes[0]
  const factor = config.unlitFactor !== null && !isLit ? config.unlitFactor : 1
  const minCost = curSize.min * factor
  const maxCost = curSize.max * factor
  const rangeStr = `${kmoney(minCost)} – ${kmoney(maxCost)}`

  const minLH = Math.max(1, Math.round(distance / 30))
  const rcmLH = Math.max(2, Math.round(distance / 10))

  return (
    <section className="dark sec" id="estimate">
      <div className="wrap">
        <div className="eyebrow">No-pressure planning tools</div>
        <h2 className="disp sec-h">Plan your budget and size.</h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, marginTop: 44 }}>
          {/* Tool 1 */}
          <div className="tool" style={{ flex: '1.3 1 520px', minWidth: 0 }}>
            <h3>Instant sign estimate</h3>
            <div className="q">1. What kind of sign?</div>
            <div className="chips" id="estTypes" style={{ gap: 8, marginTop: 10 }}>
              {Object.keys(EST_DATA).map((k) => (
                <button
                  key={k}
                  type="button"
                  className="chip chip-d"
                  aria-pressed={type === k}
                  onClick={() => {
                    setType(k)
                    setSizeIdx(1)
                  }}
                >
                  {EST_DATA[k].name}
                </button>
              ))}
            </div>

            <div className="q">2. How big?</div>
            <div className="sizes" id="estSizes">
              {config.sizes.map((z, i) => (
                <button
                  key={z.label}
                  type="button"
                  className="size"
                  aria-pressed={i === sizeIdx}
                  onClick={() => setSizeIdx(i)}
                >
                  <b>{z.label}</b>
                  <small>{z.sub}</small>
                </button>
              ))}
            </div>

            {config.unlitFactor !== null && (
              <div id="estLitWrap">
                <div className="q">3. Lit at night?</div>
                <div className="chips" style={{ gap: 8, marginTop: 10 }}>
                  <button
                    type="button"
                    className="chip chip-d"
                    aria-pressed={isLit}
                    onClick={() => setIsLit(true)}
                  >
                    Yes, illuminated
                  </button>
                  <button
                    type="button"
                    className="chip chip-d"
                    aria-pressed={!isLit}
                    onClick={() => setIsLit(false)}
                  >
                    No lighting
                  </button>
                </div>
              </div>
            )}

            <div className="result">
              <div>
                <div className="kv" style={{ color: 'var(--dmuted)' }}>Planning range</div>
                <div aria-live="polite" className="disp" id="estRange" style={{ fontSize: 44, color: '#fff', marginTop: 6 }}>
                  {rangeStr}
                </div>
                <div style={{ fontSize: 13, color: 'var(--dmuted)', marginTop: 6 }}>
                  Design, fabrication &amp; standard install · permits extra
                </div>
              </div>
              <Link href={`/quote?type=${type}`} className="btn btn-blue" id="estToQuote">
                Lock in a real quote
              </Link>
            </div>
          </div>

          {/* Tool 2 */}
          <div className="tool" style={{ flex: '1 1 380px', minWidth: 0, display: 'flex', flexDirection: 'column' }}>
            <h3>How big should my letters be?</h3>
            <label className="q" htmlFor="dist">
              How far away is your customer?{' '}
              <span id="distLbl" style={{ color: '#fff' }}>{distance} ft</span>
            </label>
            <input
              id="dist"
              type="range"
              min={25}
              max={600}
              step={5}
              value={distance}
              onChange={(e) => setDistance(+e.target.value)}
              style={{ marginTop: 14 }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#7D879A' }}>
              <span>Sidewalk</span>
              <span>Parking lot</span>
              <span>Highway frontage</span>
            </div>

            <div className="mini">
              <div>
                <div style={{ fontSize: 13, color: 'var(--dmuted)', fontWeight: 600 }}>Readable minimum</div>
                <div className="disp" id="minLH" style={{ fontSize: 36, color: '#fff', marginTop: 4 }}>
                  {minLH}&quot;
                </div>
              </div>
              <div className="hl">
                <div style={{ fontSize: 13, color: '#DCE7FF', fontWeight: 600 }}>Stand-out size</div>
                <div className="disp" id="rcmLH" style={{ fontSize: 36, color: '#fff', marginTop: 4 }}>
                  {rcmLH}&quot;
                </div>
              </div>
            </div>

            <p style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--dmuted)', margin: '16px 0 0', flex: 1 }}>
              Minimum uses the U.S. Sign Council legibility index of 30 ft per inch of letter height. Stand-out uses the 1 inch per 10 ft rule many designers use for attention, not just legibility.
            </p>
            <Link href="/toolkit" className="btn btn-ghost" style={{ marginTop: 20 }}>
              Open the full Sign Toolkit
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
