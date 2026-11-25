'use client'
import { useState } from 'react'
import Link from 'next/link'
import { STAGES } from '@/data/siteData'

export default function StagesSection() {
  const [active, setActive] = useState(0)
  const s = STAGES[active]

  return (
    <section className="paper sec">
      <div className="wrap">
        <div className="head-row">
          <div>
            <div className="eyebrow">Start where you are</div>
            <h2 className="disp sec-h">Signs for every stage of your business.</h2>
          </div>
          <p className="lead">
            Pick the one that sounds like you. We&apos;ll show you what most businesses at your stage install, what it costs and how long it takes.
          </p>
        </div>

        <div className="chips" role="tablist" aria-label="Business stage" style={{ marginTop: 40 }}>
          {STAGES.map((stage, i) => (
            <button
              key={stage.id}
              type="button"
              role="tab"
              className="chip"
              aria-selected={active === i}
              onClick={() => setActive(i)}
            >
              {stage.label}
            </button>
          ))}
        </div>

        <div className="stage-box" role="tabpanel">
          <div>
            <h3 className="disp" style={{ fontSize: 32, lineHeight: 1.05, margin: 0, color: 'var(--navy)' }}>
              {s.title}
            </h3>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--muted)', margin: '16px 0 0' }}>
              {s.body}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, marginTop: 28 }}>
              <div>
                <div className="kv">Typical budget</div>
                <div className="big">{s.budget}</div>
              </div>
              <div>
                <div className="kv">Typical timeline</div>
                <div className="big">{s.time}</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
              <Link
                href={s.link || '/quote'}
                className="btn btn-blue"
              >
                Learn more about this sign system →
              </Link>
              <Link
                href="/quote"
                className="btn btn-line"
                data-quote={s.type}
              >
                {s.cta}
              </Link>
            </div>
          </div>
          <div>
            <div className="kv">Your sign stack</div>
            <ol className="stack">
              {s.stack.map(([title, desc], i) => (
                <li key={i}>
                  <span className="num">{i + 1}</span>
                  <span>
                    <b style={{ display: 'block' }}>{title}</b>
                    <span style={{ display: 'block', fontSize: 14, color: 'var(--muted)', marginTop: 2 }}>
                      {desc}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
