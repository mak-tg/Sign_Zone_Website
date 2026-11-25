'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'

function money(n: number) {
  return '$' + Math.round(n).toLocaleString('en-US')
}

const PRESETS = [5000, 15000, 30000, 60000, 100000]

export default function FinancingSection({ asH1 = false }: { asH1?: boolean }) {
  const [amount, setAmount] = useState(15000)
  const animRef = useRef<number | null>(null)
  const r = 0.0999 / 12
  const terms = [24, 36, 60]

  // Smooth rolling animation to target amount
  const animateToAmount = (target: number) => {
    if (animRef.current) cancelAnimationFrame(animRef.current)
    const start = amount
    const change = target - start
    const duration = 280
    const startTime = performance.now()

    const step = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3)
      setAmount(Math.round(start + change * ease))

      if (progress < 1) {
        animRef.current = requestAnimationFrame(step)
      } else {
        setAmount(target)
      }
    }

    animRef.current = requestAnimationFrame(step)
  }

  // Calculate percentage for dynamic track fill
  const percent = Math.min(Math.max(((amount - 2000) / (100000 - 2000)) * 100, 0), 100)

  return (
    <section className="sec" id="financing" style={{ background: 'var(--blue)', color: '#fff' }}>
      <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'center' }}>
        {/* Left Column: Heading & Value Proposition */}
        <div style={{ flex: '1 1 420px', minWidth: 0 }}>
          <div className="eyebrow" style={{ color: '#DCE7FF' }}>
            Sign financing
          </div>
          {asH1 ? (
            <h1 className="disp sec-h" style={{ color: '#fff' }}>
              Get your sign now and pay over time.
            </h1>
          ) : (
            <h2 className="disp sec-h" style={{ color: '#fff' }}>
              Get your sign now and pay over time.
            </h2>
          )}
          <p style={{ fontSize: 18, lineHeight: 1.6, color: '#E6EEFF', margin: '20px 0 0', maxWidth: 520 }}>
            Spread the cost of your sign over 12–60 months with commercial equipment financing. Quick online application, flexible terms, and capital-preserving financing options.
          </p>
          <Link href="/quote" className="btn btn-dark" data-quote="" style={{ marginTop: 28 }}>
            Check my financing options
          </Link>
        </div>

        {/* Right Column: Interactive Financial Calculator Card */}
        <div
          style={{
            flex: '1 1 400px',
            minWidth: 0,
            background: '#ffffff',
            color: 'var(--text)',
            borderRadius: 24,
            padding: '36px 32px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
          }}
        >
          {/* Top Label & Rolling Display */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              flexWrap: 'wrap',
              gap: 8,
              marginBottom: 4,
            }}
          >
            <label
              htmlFor="fin"
              style={{
                fontSize: 13,
                fontWeight: 800,
                color: 'var(--muted2)',
                letterSpacing: '.06em',
                textTransform: 'uppercase',
              }}
            >
              Project Amount
            </label>
            <div
              id="finLbl"
              style={{
                fontFamily: 'var(--font-archivo, Archivo, sans-serif)',
                fontSize: 'clamp(28px, 4vw, 36px)',
                fontWeight: 900,
                color: 'var(--blue)',
                lineHeight: 1,
                letterSpacing: '-.02em',
              }}
            >
              {money(amount)}
            </div>
          </div>

          {/* Custom Styled Roller (Slider) */}
          <input
            id="fin"
            type="range"
            min={2000}
            max={100000}
            step={500}
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
            className="fin-slider"
            aria-label="Project financing amount"
            style={{
              background: `linear-gradient(to right, var(--blue) 0%, var(--blue) ${percent}%, #E2E8F0 ${percent}%, #E2E8F0 100%)`,
            }}
          />

          {/* Min & Max Scale Labels */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: 12,
              fontWeight: 600,
              color: 'var(--muted2)',
              marginBottom: 16,
            }}
          >
            <span>$2,000</span>
            <span>$50,000</span>
            <span>$100,000+</span>
          </div>

          {/* Quick Preset Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 22 }}>
            {PRESETS.map((p) => {
              const active = amount === p
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => animateToAmount(p)}
                  className="fin-preset-chip"
                  style={{
                    background: active ? 'var(--blue)' : 'var(--paper)',
                    color: active ? '#ffffff' : 'var(--navy)',
                    border: active ? '1px solid var(--blue)' : '1px solid var(--soft)',
                    borderRadius: 999,
                    padding: '5px 12px',
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  {p === 100000 ? '$100k' : `$${p / 1000}k`}
                </button>
              )
            })}
          </div>

          {/* Payment Terms Grid */}
          <div
            id="finTerms"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: 12,
            }}
          >
            {terms.map((n) => {
              const p = (amount * r) / (1 - Math.pow(1 + r, -n))
              return (
                <div
                  key={n}
                  className="fin-term-card"
                  style={{
                    background: 'var(--paper)',
                    border: '1px solid var(--soft)',
                    borderRadius: 16,
                    padding: '16px 10px',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--muted2)', letterSpacing: '.04em' }}>
                    {n} months
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-archivo, Archivo, sans-serif)',
                      fontSize: 'clamp(18px, 2.5vw, 24px)',
                      fontWeight: 800,
                      color: 'var(--navy)',
                      marginTop: 6,
                      lineHeight: 1.1,
                    }}
                  >
                    {money(p)}
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4, fontWeight: 600 }}>
                    per month
                  </div>
                </div>
              )
            })}
          </div>

          {/* Disclaimer Note */}
          <p style={{ fontSize: 12, lineHeight: 1.5, color: 'var(--muted2)', margin: '16px 0 0', textAlign: 'center' }}>
            Example only, at a sample 9.99% APR. Rates, terms and approval are set by the lending partner.
          </p>
        </div>
      </div>
    </section>
  )
}
