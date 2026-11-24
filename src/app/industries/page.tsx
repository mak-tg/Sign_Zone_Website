import type { Metadata } from 'next'
import Link from 'next/link'
import { INDUSTRY_PROFILES } from '@/data/industryData'

export const metadata: Metadata = {
  title: 'Commercial Signs by Industry | Restaurants, Healthcare, Retail & Corporate',
  description:
    'Custom business signage engineered for your specific industry: restaurants, retail storefronts, medical & dental practices, shopping centers, churches, dealerships, and franchises.',
  alternates: {
    canonical: '/industries',
  },
  openGraph: {
    title: 'Commercial Signs by Industry | Sign Zone DFW',
    description:
      'We know the landlord criteria and municipal sign codes for restaurants, healthcare, retail, auto, and corporate facilities in North Texas.',
    url: 'https://www.signzoneusa.com/industries',
  },
}

export default function IndustriesPage() {
  const industries = Object.values(INDUSTRY_PROFILES)

  return (
    <div className="view" id="v-industries">
      {/* Hero Header (Dark Theme) */}
      <section className="dark" style={{ paddingTop: 48, paddingBottom: 68 }}>
        <div className="wrap">
          <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: 'var(--dmuted)', marginBottom: 28 }}>
            <Link href="/" style={{ color: 'var(--dmuted)', textDecoration: 'none' }}>Home</Link>
            {' / '}
            <span style={{ color: '#fff' }}>Industries</span>
          </nav>
          <div className="eyebrow">Industry-Specific Sign Solutions</div>
          <h1
            className="disp sec-h"
            style={{ fontSize: 'clamp(36px, 5.5vw, 56px)', lineHeight: 0.98, maxWidth: 880 }}
          >
            Signs engineered for your kind of business.
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: 'var(--dsub)',
              margin: '20px 0 0',
              maxWidth: 700,
            }}
          >
            Different industries face vastly different landlord criteria, municipal setback codes,
            and viewing distance requirements. Here is how we build custom signs for North Texas
            businesses.
          </p>
        </div>
      </section>

      {/* Industry Cards Grid (Light Paper Theme) */}
      <section className="light sec" style={{ background: 'var(--paper)' }}>
        <div className="wrap">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {industries.map((ind) => (
              <article
                key={ind.slug}
                id={ind.slug}
                className="card"
                style={{
                  padding: '36px',
                  background: '#fff',
                  border: '1px solid var(--soft)',
                  borderRadius: 16,
                  boxShadow: '0 4px 20px rgba(6, 38, 102, 0.04)',
                  scrollMarginTop: 140,
                }}
              >
                {/* Legacy slug aliases for backwards compatibility */}
                {ind.slug === 'medical-dental' && <span id="medical" style={{ scrollMarginTop: 140, display: 'block' }} />}
                {ind.slug === 'shopping-centers' && <span id="centers" style={{ scrollMarginTop: 140, display: 'block' }} />}
                {ind.slug === 'churches-schools' && <span id="churches" style={{ scrollMarginTop: 140, display: 'block' }} />}
                {ind.slug === 'auto-dealerships' && <span id="auto" style={{ scrollMarginTop: 140, display: 'block' }} />}
                {ind.slug === 'offices' && <span id="corporate" style={{ scrollMarginTop: 140, display: 'block' }} />}
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 16, alignItems: 'flex-start' }}>
                  <div>
                    <span className="tag" style={{ marginBottom: 8, display: 'inline-block' }}>
                      {ind.name}
                    </span>
                    <h2
                      className="disp"
                      style={{
                        margin: '6px 0 10px',
                        fontSize: 'clamp(24px, 3.5vw, 32px)',
                        color: 'var(--navy)',
                        lineHeight: 1.15,
                      }}
                    >
                      <Link href={`/industries/${ind.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {ind.headline}
                      </Link>
                    </h2>
                  </div>
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
                    <div
                      style={{
                        background: '#eff6ff',
                        border: '1px solid #bfdbfe',
                        padding: '8px 16px',
                        borderRadius: 8,
                        fontSize: 13,
                        fontWeight: 700,
                        color: 'var(--blue)',
                      }}
                    >
                      ✓ {ind.projectIds.length} Verified Installs
                    </div>
                    <div
                      style={{
                        background: 'var(--paper)',
                        border: '1px solid var(--soft)',
                        padding: '8px 16px',
                        borderRadius: 8,
                        fontSize: 13,
                        fontWeight: 600,
                        color: 'var(--muted)',
                      }}
                    >
                      ⏱️ Turnaround: {ind.turnaround}
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--muted)', margin: '14px 0 24px', maxWidth: 900 }}>
                  {ind.summary}
                </p>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 24,
                    padding: '24px 0',
                    borderTop: '1px solid var(--soft)',
                    borderBottom: '1px solid var(--soft)',
                    margin: '18px 0 24px',
                  }}
                >
                  <div>
                    <strong
                      className="disp"
                      style={{
                        display: 'block',
                        fontSize: 13,
                        color: 'var(--navy)',
                        marginBottom: 10,
                        letterSpacing: '.06em',
                      }}
                    >
                      Recommended Sign Types:
                    </strong>
                    <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {ind.popularSigns.map((sign, sIdx) => {
                        let linkUrl = ''
                        const lower = sign.toLowerCase()
                        if (lower.includes('channel letter')) linkUrl = '/channel-letters'
                        else if (lower.includes('monument')) linkUrl = '/monument-signs'
                        else if (lower.includes('pylon') || lower.includes('high-rise')) linkUrl = '/pylon-signs'
                        else if (lower.includes('storefront') || lower.includes('blade') || lower.includes('cabinet')) linkUrl = '/storefront-signs'
                        else if (lower.includes('lobby') || lower.includes('reception')) linkUrl = '/lobby-signs'
                        else if (lower.includes('ada') || lower.includes('braille') || lower.includes('wayfinding')) linkUrl = '/interior-ada-signs'
                        else if (lower.includes('wrap') || lower.includes('fleet')) linkUrl = '/vehicle-wraps'

                        return (
                          <li key={sIdx} style={{ fontSize: 14.5, color: 'var(--muted)', lineHeight: 1.5 }}>
                            {linkUrl ? (
                              <Link href={linkUrl} style={{ color: 'var(--navy)', fontWeight: 600, textDecoration: 'underline', textDecorationColor: 'var(--soft)' }}>
                                {sign}
                              </Link>
                            ) : (
                              sign
                            )}
                          </li>
                        )
                      })}
                    </ul>
                  </div>

                  <div>
                    <strong
                      className="disp"
                      style={{
                        display: 'block',
                        fontSize: 13,
                        color: 'var(--navy)',
                        marginBottom: 8,
                        letterSpacing: '.06em',
                      }}
                    >
                      Landlord &amp; Lease Criteria:
                    </strong>
                    <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: 'var(--muted)' }}>
                      {ind.landlordCriteria}
                    </p>
                  </div>

                  <div>
                    <strong
                      className="disp"
                      style={{
                        display: 'block',
                        fontSize: 13,
                        color: 'var(--navy)',
                        marginBottom: 8,
                        letterSpacing: '.06em',
                      }}
                    >
                      Municipal Permitting Pitfalls:
                    </strong>
                    <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: 'var(--muted)' }}>
                      {ind.permittingNotes}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                  <div style={{ fontSize: 13.5, color: 'var(--muted)' }}>
                    <strong style={{ color: 'var(--navy)' }}>Portfolio: </strong> {ind.projectIds.length} real projects completed across DFW
                  </div>
                  <div style={{ display: 'flex', gap: 12, marginLeft: 'auto' }}>
                    <Link href={`/industries/${ind.slug}`} className="btn btn-blue btn-sm">
                      View {ind.name} Signs &amp; Projects →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA (Dark Theme) */}
      <section className="dark" style={{ padding: '72px 0', borderTop: '1px solid var(--line2)' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 28 }}>
          <div>
            <div className="eyebrow">DFW Turnkey Sign Contractor</div>
            <h2 className="disp sec-h" style={{ margin: '8px 0', fontSize: 34, color: '#fff' }}>
              Need signs for your space?
            </h2>
            <p style={{ color: 'var(--dsub)', margin: 0, maxWidth: 540, fontSize: 16.5, lineHeight: 1.55 }}>
              Send a photo of your building facade or lease sign criteria. We will provide a
              written estimate with local permits included.
            </p>
          </div>
          <div className="btn-row">
            <Link href="/quote" className="btn btn-blue">
              Start Free Quote →
            </Link>
            <a href="tel:2147144623" className="btn btn-ghost">
              Call 214-714-4623
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
