'use client'
import { useState } from 'react'
import Link from 'next/link'

function money(n: number) {
  return '$' + Math.round(n).toLocaleString('en-US')
}

export default function FinancingSection() {
  const [amount, setAmount] = useState(15000)
  const r = 0.0999 / 12
  const terms = [24, 36, 60]

  return (
    <section className="sec" id="financing" style={{ background: 'var(--blue)', color: '#fff' }}>
      <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'center' }}>
        <div style={{ flex: '1 1 420px', minWidth: 0 }}>
          <div className="eyebrow" style={{ color: '#DCE7FF' }}>Sign financing</div>
          <h2 className="disp sec-h" style={{ color: '#fff' }}>
            Get the sign. Pay over time.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: '#E6EEFF', margin: '20px 0 0', maxWidth: 520 }}>
            Spread the cost of your sign over 12–60 months through [financing partner]. Quick application, decision in [X] hours, no effect on your credit score.
          </p>
          <Link href="/quote" className="btn btn-dark" data-quote="" style={{ marginTop: 28 }}>
            Check my financing options
          </Link>
        </div>

        <div style={{ flex: '1 1 380px', minWidth: 0, background: '#fff', color: 'var(--text)', borderRadius: 20, padding: 32 }}>
          <label htmlFor="fin" style={{ fontSize: 15, fontWeight: 700 }}>
            Project amount:{' '}
            <span id="finLbl" style={{ color: 'var(--blue)' }}>{money(amount)}</span>
          </label>
          <input
            id="fin"
            type="range"
            min={2000}
            max={100000}
            step={500}
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
            style={{ marginTop: 14 }}
          />
          <div id="finTerms" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 10, marginTop: 20 }}>
            {terms.map((n) => {
              const p = (amount * r) / (1 - Math.pow(1 + r, -n))
              return (
                <div key={n} style={{ background: 'var(--paper)', borderRadius: 14, padding: 16, textAlign: 'center' }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--muted2)' }}>{n} months</div>
                  <div style={{ fontSize: 24, fontWeight: 800, color: 'var(--navy)', marginTop: 4 }}>{money(p)}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted2)' }}>per month</div>
                </div>
              )
            })}
          </div>
          <p style={{ fontSize: 12, lineHeight: 1.5, color: 'var(--muted2)', margin: '14px 0 0' }}>
            Example only, at a sample 9.99% APR. Rates, terms and approval are set by the lending partner.
          </p>
        </div>
      </div>
    </section>
  )
}
