import Link from 'next/link'
import { GUIDES_ARTICLES } from '@/data/guidesData'

export default function GuidesSection({ asH1 = false }: { asH1?: boolean }) {
  const guidesList = Object.values(GUIDES_ARTICLES)

  return (
    <section className="light sec" id="resources">
      <div className="wrap">
        <div className="eyebrow">Sign buyer&apos;s guides</div>
        {asH1 ? (
          <h1 className="disp sec-h">Clear answers before you choose a sign.</h1>
        ) : (
          <h2 className="disp sec-h">Clear answers before you choose a sign.</h2>
        )}
        <p style={{ color: 'var(--muted)', fontSize: 17, maxWidth: 640, marginTop: 14, lineHeight: 1.55 }}>
          No sales spin. Straight, engineered answers to commercial sign costs, municipal permits, landlord criteria, and visibility formulas in Dallas–Fort Worth.
        </p>

        <div className="grid-auto guides-card-grid" id="guides" style={{ marginTop: 36, gap: 18 }}>
          {guidesList.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="card"
              style={{
                gap: 12,
                minHeight: 190,
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform .18s ease, box-shadow .18s ease',
              }}
            >
              <span className="tag" style={{ alignSelf: 'flex-start' }}>
                {g.tag}
              </span>
              <span style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.3, color: 'var(--navy)' }}>
                {g.title}
              </span>
              <div
                style={{
                  fontSize: 13,
                  color: 'var(--muted2)',
                  marginTop: 'auto',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <span>{g.readTime}</span>
                  {g.updatedText && (
                    <span style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 600 }}>
                      {g.updatedText}
                    </span>
                  )}
                </div>
                <span style={{ color: 'var(--blue)', fontWeight: 700 }}>Read guide →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
