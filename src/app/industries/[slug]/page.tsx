import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { INDUSTRY_PROFILES } from '@/data/industryData'
import { PROJECTS } from '@/data/projectsData'
import FAQAccordion from '@/components/ui/FAQAccordion'
import FaqJsonLd from '@/components/seo/FaqJsonLd'

type Params = { slug: string }

export async function generateStaticParams() {
  return Object.keys(INDUSTRY_PROFILES).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const ind = INDUSTRY_PROFILES[slug]
  if (!ind) return {}

  const title = `${ind.name} Signs in Dallas–Fort Worth | Sign Zone`
  const description = `Custom commercial signs engineered for ${ind.name} across Dallas–Fort Worth. ${ind.headline}. Permitting, fabrication, and crane installation.`

  return {
    title,
    description,
    alternates: {
      canonical: `/industries/${ind.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.signzoneusa.com/industries/${ind.slug}`,
    },
  }
}

export default async function IndustryDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const ind = INDUSTRY_PROFILES[slug]
  if (!ind) notFound()

  // Match the actual projects from the portfolio assigned to this industry
  const matchingProjects = PROJECTS.filter((p) => ind.projectIds.includes(p.id))

  return (
    <div className="view" id={`v-industry-${ind.slug}`}>
      {ind.faqs && <FaqJsonLd items={ind.faqs} />}

      {/* Hero Header (Dark Theme) */}
      <section className="dark" style={{ paddingTop: 56, paddingBottom: 76 }}>
        <div className="wrap">
          <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: 'var(--dmuted)', marginBottom: 20 }}>
            <Link href="/" style={{ color: 'var(--dmuted)', textDecoration: 'none' }}>Home</Link>
            {' / '}
            <Link href="/industries" style={{ color: 'var(--dmuted)', textDecoration: 'none' }}>Industries</Link>
            {' / '}
            <span style={{ color: '#fff' }}>{ind.name}</span>
          </nav>

          <span className="pill" style={{ marginBottom: 16 }}>
            <span className="dot" />
            Industry-Specific Commercial Signage · Dallas–Fort Worth
          </span>

          <h1 className="disp sec-h" style={{ fontSize: 'clamp(34px, 4.8vw, 54px)', lineHeight: 1.05, margin: 0, maxWidth: 860 }}>
            {ind.headline}
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--dsub)', margin: '22px 0 0', maxWidth: 740 }}>
            {ind.summary}
          </p>

          <dl className="facts" style={{ marginTop: 38 }}>
            <div><dt>Typical Turnaround</dt><dd>{ind.turnaround}</dd></div>
            <div><dt>Portfolio Proof</dt><dd>{matchingProjects.length} Verified Installs</dd></div>
            <div><dt>Permit Coverage</dt><dd>16+ DFW Municipalities</dd></div>
            <div><dt>Installation</dt><dd>Licensed TDLR Crews</dd></div>
          </dl>

          <div className="btn-row" style={{ marginTop: 32, gap: 14 }}>
            <Link href={`/quote?industry=${ind.slug}`} className="btn btn-blue">
              Quote My {ind.name} Sign
            </Link>
            <a href="tel:2147144623" className="btn btn-ghost">
              Call 214-714-4623
            </a>
          </div>
        </div>
      </section>

      {/* Regulatory & Landlord Criteria (Paper Theme) */}
      <section className="paper sec" style={{ padding: '64px 0', borderBottom: '1px solid var(--soft)' }}>
        <div className="wrap">
          <div className="eyebrow">Permitting &amp; Compliance</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', color: 'var(--navy)', margin: '8px 0 32px' }}>
            What {ind.name} businesses need to know before they choose a sign.
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
            <div style={{ background: '#fff', borderRadius: 14, padding: 32, border: '1px solid var(--soft)', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: '#eff6ff', color: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 16 }}>
                📋
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--navy)', margin: '0 0 10px' }}>
                Landlord rules for your sign
              </h3>
              <p style={{ fontSize: 15.5, lineHeight: 1.65, color: '#475569', margin: 0 }}>
                {ind.landlordCriteria}
              </p>
            </div>

            <div style={{ background: '#fff', borderRadius: 14, padding: 32, border: '1px solid var(--soft)', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: '#eff6ff', color: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 16 }}>
                ⚖️
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--navy)', margin: '0 0 10px' }}>
                City rules and permits
              </h3>
              <p style={{ fontSize: 15.5, lineHeight: 1.65, color: '#475569', margin: 0 }}>
                {ind.permittingNotes}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Sign Systems for this industry */}
      <section className="light sec" style={{ padding: '64px 0', borderBottom: '1px solid var(--soft)' }}>
        <div className="wrap">
          <div className="eyebrow">Sign Systems</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', color: 'var(--navy)', margin: '8px 0 28px' }}>
            Signs that work well for {ind.name.toLowerCase()}.
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {ind.popularSigns.map((signItem, idx) => (
              <Link
                key={idx}
                href={signItem.href}
                style={{
                  background: '#fff',
                  border: '1px solid var(--soft)',
                  borderRadius: 12,
                  padding: '20px 22px',
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                  transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
                }}
                className="industry-sign-pill"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ color: 'var(--blue)', fontWeight: 800, fontSize: 16 }}>✓</span>
                  <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--navy)' }}>{signItem.label}</span>
                </div>
                <span style={{ color: 'var(--blue)', fontSize: 14 }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categorical Real Projects Showcase */}
      <section className="paper sec" style={{ padding: '72px 0' }}>
        <div className="wrap">
          <div className="eyebrow">Local Portfolio Proof</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20, marginBottom: 36 }}>
            <div>
              <h2 className="disp sec-h" style={{ fontSize: 'clamp(28px, 3.8vw, 42px)', color: 'var(--navy)', margin: '8px 0 0' }}>
                Projects completed for {ind.name.toLowerCase()}.
              </h2>
              <p style={{ fontSize: 16.5, color: 'var(--muted)', margin: '10px 0 0', maxWidth: 640 }}>
                Every sign below was designed, permitted, fabricated, and installed for local North Texas businesses by Sign Zone.
              </p>
            </div>
            <Link href="/projects" className="btn btn-line" style={{ alignSelf: 'flex-start' }}>
              View all 30 DFW projects →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: 28 }}>
            {matchingProjects.map((p) => (
              <article
                key={p.id}
                style={{
                  background: '#fff',
                  borderRadius: 14,
                  overflow: 'hidden',
                  border: '1px solid var(--soft)',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.22s ease, box-shadow 0.22s ease',
                }}
              >
                <div style={{ position: 'relative', width: '100%', height: 230 }}>
                  <Image
                    src={p.image}
                    alt={`${p.name} - ${p.signType} installed in ${p.city}, TX by Sign Zone`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                <div style={{ padding: 22, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--blue)' }}>
                    {p.meta}
                  </span>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--navy)', margin: '6px 0 10px' }}>
                    {p.name}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--muted)', margin: '0 0 16px', flexGrow: 1 }}>
                    {p.overview}
                  </p>
                  <div style={{ paddingTop: 14, borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, fontSize: 13, flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: 600, color: 'var(--text)', flex: '1 1 auto' }}>
                      System: <span style={{ color: 'var(--blue)' }}>{p.signType}</span>
                    </span>
                    <Link
                      href={`/quote?type=${p.category === 'storefront' ? 'cabinet' : p.category}`}
                      className="quote-sign-btn"
                    >
                      <span>Quote this sign</span>
                      <span className="quote-sign-arrow" aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industry FAQ */}
      {ind.faqs && ind.faqs.length > 0 && (
        <section className="light sec" style={{ padding: '64px 0', borderTop: '1px solid var(--soft)' }}>
          <div className="wrap" style={{ maxWidth: 840 }}>
            <div className="eyebrow">Industry FAQs</div>
            <h2 className="disp sec-h" style={{ fontSize: 'clamp(26px, 3.2vw, 36px)', color: 'var(--navy)', margin: '8px 0 28px' }}>
              Common questions about {ind.name.toLowerCase()} signs.
            </h2>
            <FAQAccordion items={ind.faqs} />
          </div>
        </section>
      )}

      {/* CTA Footer Section */}
      <section style={{ background: 'var(--blue)', color: '#fff', padding: '64px 0' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div className="disp" style={{ fontSize: 'clamp(28px, 4vw, 38px)', lineHeight: 1.05 }}>
              Opening or updating a {ind.name.toLowerCase()} location in DFW?
            </div>
            <div style={{ color: '#E6EEFF', marginTop: 8, fontSize: 17 }}>
              Free 3D site mockup, landlord criteria audit, and quote within 24 hours.
            </div>
          </div>
          <div className="btn-row" style={{ gap: 12 }}>
            <Link className="btn btn-dark" href={`/quote?industry=${ind.slug}`}>
              Get My Free Proposal
            </Link>
            <a className="btn btn-ghost" href="tel:2147144623">
              214-714-4623
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
