import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { PROJECTS } from '@/data/projectsData'

export const metadata: Metadata = {
  title: 'Franchise & Multi-Location Sign Programs Dallas–Fort Worth | Sign Zone',
  description:
    'Turnkey multi-location sign programs across North Texas. Brand-standard compliance, coordinated multi-city permitting, volume fabrication, and crane installation for expanding franchises.',
  alternates: {
    canonical: '/franchise-signs',
  },
  openGraph: {
    title: 'Franchise & Multi-Location Sign Programs DFW | Sign Zone',
    description:
      'Brand consistency, multi-city permitting, and turnkey sign rollouts across the Dallas–Fort Worth Metroplex.',
    url: 'https://www.signzoneusa.com/franchise-signs',
  },
}

export default function FranchiseSignsPage() {
  // Grab representative franchise & multi-location client examples from real project data
  const franchiseProjects = PROJECTS.filter((p) =>
    ['burn-boot-camp', 'hand-stone', 'gracie-barra', 'rock-n-roll-sushi', 'arwa-coffee'].includes(p.id)
  )

  return (
    <div className="view" id="v-franchise-signs">
      {/* Hero Section */}
      <section className="dark" style={{ paddingTop: 56, paddingBottom: 80 }}>
        <div className="wrap">
          <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: 'var(--dmuted)', marginBottom: 20 }}>
            <Link href="/" style={{ color: 'var(--dmuted)', textDecoration: 'none' }}>Home</Link>
            {' / '}
            <span style={{ color: '#fff' }}>Multi-Location Programs</span>
          </nav>
          <span className="pill" style={{ marginBottom: 16 }}>
            <span className="dot" />
            North Texas Regional Sign Rollouts
          </span>
          <h1 className="disp sec-h" style={{ fontSize: 'clamp(32px, 4.2vw, 54px)', lineHeight: 1.05, margin: 0, maxWidth: 780 }}>
            Signs for franchise businesses across DFW.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--dsub)', margin: '22px 0 0', maxWidth: 680 }}>
            Opening five locations across Dallas, Collin, Tarrant, and Denton counties means dealing with five different
            city sign ordinances, landlord criteria, and general contractor timelines. Sign Zone provides a single,
            accountable manufacturing and installation partner for your entire regional footprint.
          </p>
          <dl className="facts" style={{ marginTop: 36 }}>
            <div><dt>Program Scope</dt><dd>2 to 50+ Regional Locations</dd></div>
            <div><dt>Brand Standards</dt><dd>Exact Color &amp; Extrusion Match</dd></div>
            <div><dt>Permit Coverage</dt><dd>16+ Municipalities Concurrently</dd></div>
            <div><dt>Account Team</dt><dd>Dedicated Project Manager</dd></div>
          </dl>
          <div className="btn-row" style={{ marginTop: 32, gap: 14 }}>
            <Link href="/quote" className="btn btn-blue">Request Multi-Location Consultation</Link>
            <a href="tel:2147144623" className="btn btn-ghost">Call 214-714-4623</a>
          </div>
        </div>
      </section>

      {/* Program Pillars */}
      <section className="light sec" style={{ padding: '80px 0' }}>
        <div className="wrap">
          <div className="eyebrow">Scalable Commercial Execution</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', color: '#0f172a', margin: '8px 0 36px' }}>
            Keep your brand the same at every location.
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            <div style={{ borderLeft: '3px solid var(--blue)', paddingLeft: 20 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', margin: '0 0 10px' }}>Same look at every location</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: '#64748b', margin: 0 }}>
                We adhere strictly to corporate brand books, Pantone colors, 3M vinyl matched components, and exact acrylic formulations. Every storefront looks uniform, whether installed in Southlake, Plano, or Fort Worth.
              </p>
            </div>

            <div style={{ borderLeft: '3px solid var(--blue)', paddingLeft: 20 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', margin: '0 0 10px' }}>Get permits in each city</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: '#64748b', margin: 0 }}>
                Every DFW municipality has distinct sign codes—from Frisco’s square-footage ratios to Southlake’s strict architectural review board. We manage all city filings simultaneously to avoid construction delays.
              </p>
            </div>

            <div style={{ borderLeft: '3px solid var(--blue)', paddingLeft: 20 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', margin: '0 0 10px' }}>Build signs in batches</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: '#64748b', margin: 0 }}>
                Fabricate sign components in volume to achieve cost efficiencies, then stage them in our facility for coordinated delivery precisely when each location&apos;s general contractor completes exterior facade framing.
              </p>
            </div>

            <div style={{ borderLeft: '3px solid var(--blue)', paddingLeft: 20 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', margin: '0 0 10px' }}>One person to contact</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: '#64748b', margin: 0 }}>
                You work directly with a senior sign project manager who coordinates site surveys, engineering packages, city inspections, and installation crews across all sites with weekly consolidated progress reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Franchise Projects Showcase */}
      <section className="dark sec" style={{ padding: '80px 0' }}>
        <div className="wrap">
          <div className="eyebrow">Proven Experience</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', margin: '8px 0 36px' }}>
            Brands we have helped across DFW.
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {franchiseProjects.map((p) => (
              <div
                key={p.id}
                className="keep-dark"
                style={{
                  background: 'var(--panel)',
                  borderRadius: 12,
                  overflow: 'hidden',
                  border: '1px solid var(--line2)',
                }}
              >
                <div style={{ position: 'relative', width: '100%', height: 200 }}>
                  <Image
                    src={p.image}
                    alt={`${p.name} - ${p.signType}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: 20 }}>
                  <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--elec)', fontWeight: 600 }}>
                    {p.meta}
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', margin: '6px 0 10px' }}>
                    {p.name}
                  </h3>
                  <p style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--dsub)', margin: 0 }}>
                    {p.overview}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <Link href="/projects" className="btn btn-ghost">
              Browse All 30 Local Sign Case Studies →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
