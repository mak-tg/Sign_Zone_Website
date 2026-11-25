'use client'
import { useState } from 'react'
import Link from 'next/link'
import { SIGN_TYPES } from '@/data/siteData'

const CATEGORIES: [string, string][] = [
  ['all', 'All signs'],
  ['ext', 'Exterior'],
  ['int', 'Interior'],
  ['veh', 'Vehicle & graphics'],
  ['dig', 'Digital & LED'],
]

const CAT_LABELS: Record<string, string> = {
  ext: 'Exterior',
  int: 'Interior',
  veh: 'Vehicle & graphics',
  dig: 'Digital & LED',
}

export default function SignTypesGrid({ asH1 = false }: { asH1?: boolean }) {
  const [activeCat, setActiveCat] = useState('all')

  const filteredSigns = SIGN_TYPES.filter(
    (s) => activeCat === 'all' || s.cat === activeCat
  )

  return (
    <section className="light sec" id="signs">
      <div className="wrap">
        <div className="eyebrow">Every kind of sign</div>
        {asH1 ? (
          <h1 className="disp sec-h">
            Find the right sign for your business.
          </h1>
        ) : (
          <h2 className="disp sec-h">
            Find the right sign for your business.
          </h2>
        )}

        <div
          className="chips"
          role="group"
          aria-label="Filter sign types"
          id="catChips"
          style={{ marginTop: 36 }}
        >
          {CATEGORIES.map(([key, label]) => (
            <button
              key={key}
              type="button"
              className="chip"
              aria-pressed={activeCat === key}
              onClick={() => setActiveCat(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid-auto" id="signGrid" style={{ marginTop: 28 }}>
          {filteredSigns.map((s) => {
            let href = `/quote?type=${s.quoteType}`
            if (s.name === 'Channel letters') href = '/channel-letters'
            else if (s.name === 'Monument signs') href = '/monument-signs'
            else if (s.name === 'Pylon & pole signs') href = '/pylon-signs'
            else if (s.name === 'Cabinet & lightbox signs') href = '/storefront-signs'
            else if (s.name === 'Lobby & logo walls') href = '/lobby-signs'

            return (
              <Link
                key={s.name}
                href={href}
                className="card"
                data-quote={s.featured ? undefined : s.quoteType}
                style={{ minHeight: 200 }}
              >
                <img
                  className="sign-photo"
                  src={s.image}
                  alt={`${s.name} - Commercial sign fabricated by Sign Zone DFW`}
                  loading="lazy"
                />
                <span className="tag">{CAT_LABELS[s.cat]}</span>
                <span
                  className="disp"
                  style={{
                    fontSize: 24,
                    lineHeight: 1.05,
                    color: 'var(--navy)',
                    marginTop: 10,
                  }}
                >
                  {s.name}
                </span>
                <span
                  style={{
                    fontSize: 15,
                    lineHeight: 1.5,
                    color: 'var(--muted)',
                    marginTop: 10,
                    flex: 1,
                  }}
                >
                  {s.desc}
                </span>
                <span
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 18,
                    paddingTop: 14,
                    borderTop: '1px solid #EDF1F7',
                  }}
                >
                  <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>
                    {s.price}
                  </span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--blue)' }}>
                    {s.featured ? 'Explore →' : 'Get a quote →'}
                  </span>
                </span>
              </Link>
            )
          })}
        </div>

        <p className="note">
          Ranges are typical U.S. project budgets including design, fabrication and install, for planning only. Your written quote is based on your site.
        </p>
      </div>
    </section>
  )
}
