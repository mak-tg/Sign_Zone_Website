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

const SIGN_HREFS: Record<string, string> = {
  'Channel letters': '/channel-letters',
  'Monument signs': '/monument-signs',
  'Pylon & pole signs': '/pylon-signs',
  'Cabinet & lightbox signs': '/storefront-signs',
  'Blade & projecting signs': '/blade-signs',
  'Awnings & canopies': '/awnings-canopies',
  'Lobby & logo walls': '/lobby-signs',
  'ADA & wayfinding': '/interior-ada-signs',
  'Wall murals & graphics': '/wall-murals',
  'Vehicle wraps': '/vehicle-wraps',
  'Window graphics': '/window-graphics',
  'Banners & temporary': '/banners-temporary',
  'LED message centers': '/led-message-centers',
  'Digital menu boards': '/digital-menu-boards',
  'Sign repair & relighting': '/sign-repair',
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
            const href = SIGN_HREFS[s.name] ?? `/quote?type=${s.quoteType}`

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
                  alt={`Illustrative example of ${s.name.toLowerCase()}`}
                  loading="lazy"
                />
                <span className="tag">{CAT_LABELS[s.cat]} · Illustrative example</span>
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
                    Explore →
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
