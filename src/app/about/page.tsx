import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Sign Zone | 15+ Years Commercial Sign Contractor Dallas–Fort Worth',
  description:
    'Founded in 2011, Sign Zone is Dallas–Fort Worth’s trusted commercial sign contractor. In-house fabrication, licensed Texas electrical sign electricians, and modern crane install fleet.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Sign Zone | Dallas–Fort Worth Commercial Sign Company',
    description:
      'Over 15 years designing, permitting, and building commercial business signs across North Texas. In-house fabrication, crane fleet, and TDLR licensed crew.',
    url: 'https://www.signzoneusa.com/about',
  },
}

export default function AboutPage() {
  return (
    <div className="view" id="v-about">
      {/* Hero Section */}
      <section className="dark" style={{ paddingTop: 56, paddingBottom: 80 }}>
        <div className="wrap">
          <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: 'var(--dmuted)', marginBottom: 20 }}>
            <Link href="/" style={{ color: 'var(--dmuted)', textDecoration: 'none' }}>Home</Link>
            {' / '}
            <span style={{ color: '#fff' }}>About Us</span>
          </nav>
          <span className="pill" style={{ marginBottom: 16 }}>
            <span className="dot" />
            Serving North Texas Since 2011
          </span>
          <h1 className="disp sec-h" style={{ fontSize: 'clamp(34px, 4.5vw, 54px)', lineHeight: 1.05, margin: 0, maxWidth: 760 }}>
            15+ years building commercial signs that put North Texas on the map.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--dsub)', margin: '24px 0 0', maxWidth: 680 }}>
            We are not sign brokers or an internet print shop. Sign Zone is a licensed Texas electrical sign contractor
            with an in-house fabrication facility, licensed install crews, and high-reach crane and bucket service trucks
            serving the entire Dallas–Fort Worth Metroplex.
          </p>

          <dl className="facts" style={{ marginTop: 40 }}>
            <div><dt>Established</dt><dd>2011 (15+ Years)</dd></div>
            <div><dt>Licensing</dt><dd>Texas TDLR Licensed</dd></div>
            <div><dt>Fleet</dt><dd>Crane &amp; Bucket Capability</dd></div>
            <div><dt>Territory</dt><dd>16+ DFW Municipalities</dd></div>
          </dl>
        </div>
      </section>

      {/* Story & Differentiators */}
      <section className="light sec" style={{ padding: '80px 0' }}>
        <div className="wrap">
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 48, alignItems: 'center' }}>
            <div>
              <div className="eyebrow">The Sign Zone Advantage</div>
              <h2 className="disp sec-h" style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', color: '#0f172a', margin: '8px 0 20px' }}>
                Why North Texas businesses trust our crew.
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: '#475569', marginBottom: 16 }}>
                Commercial signage is one of the single largest branding investments a brick-and-mortar business makes.
                Too often, business owners deal with brokers who outsource manufacturing to distant states and hire third-party
                installers with no local accountability.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: '#475569', marginBottom: 16 }}>
                Since 2011, Sign Zone has operated with a straightforward philosophy: <strong>do everything under one roof.</strong>{' '}
                From initial site surveys and landlord criteria reviews to structural CAD engineering, municipal permit expediting,
                precision CNC routing, letter bending, wiring, and high-reach crane installation, our own team controls every step.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 24 }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#eff6ff', color: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>✓</div>
                  <div><strong style={{ color: '#0f172a' }}>Direct Municipal Permitting:</strong> We have established relationships with building and zoning departments across Dallas, Fort Worth, Plano, Frisco, Arlington, and surrounding North Texas cities.</div>
                </div>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#eff6ff', color: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>✓</div>
                  <div><strong style={{ color: '#0f172a' }}>Licensed Master Electrical Craftsmanship:</strong> Compliant with UL 48 electric sign standards, NFPA 70 National Electrical Code, and Texas Department of Licensing and Regulation standards.</div>
                </div>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#eff6ff', color: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>✓</div>
                  <div><strong style={{ color: '#0f172a' }}>Turnkey Accountability:</strong> You get a dedicated commercial project manager who updates you from site survey to final city inspection sign-off.</div>
                </div>
              </div>
            </div>

            <div className="keep-dark" style={{ background: 'var(--panel)', borderRadius: 16, padding: 36, color: '#fff' }}>
              <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--elec)', fontWeight: 700, marginBottom: 8 }}>
                Company Highlights
              </div>
              <h3 style={{ fontSize: 26, fontWeight: 800, margin: '0 0 24px', color: '#fff' }}>
                Our Capabilities at a Glance
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 16 }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: '#fff' }}>Custom Channel Letters</div>
                  <div style={{ fontSize: 14, color: 'var(--dsub)', marginTop: 4 }}>Front-lit, halo-lit reverse, combination open-face, and contour letter cabinets.</div>
                </div>
                <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 16 }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: '#fff' }}>Monument &amp; Highway Pylons</div>
                  <div style={{ fontSize: 14, color: 'var(--dsub)', marginTop: 4 }}>Heavy-duty steel, masonry integration, electronic message centers, and multi-tenant pylons.</div>
                </div>
                <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 16 }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: '#fff' }}>Interior &amp; ADA Wayfinding</div>
                  <div style={{ fontSize: 14, color: 'var(--dsub)', marginTop: 4 }}>Grade 2 Braille room identifiers, tactile compliance, dimensional logo lobbies.</div>
                </div>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: '#fff' }}>Service &amp; Retrofit Fleet</div>
                  <div style={{ fontSize: 14, color: 'var(--dsub)', marginTop: 4 }}>Bucket and crane truck dispatch for LED upgrades, transformer replacements, and storm repair.</div>
                </div>
              </div>
              <div style={{ marginTop: 28 }}>
                <Link href="/projects" className="btn btn-blue" style={{ width: '100%', textAlign: 'center' }}>
                  Explore 30+ Real DFW Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="dark" style={{ padding: '64px 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(28px, 3.8vw, 42px)', margin: 0 }}>
            Ready to work with a local sign builder?
          </h2>
          <p style={{ fontSize: 17, color: 'var(--dsub)', margin: '16px 0 32px' }}>
            Call Alex directly at 214-714-4623 or submit your project details for a written proposal within 24 hours.
          </p>
          <div className="btn-row" style={{ justifyContent: 'center', gap: 14 }}>
            <Link href="/quote" className="btn btn-blue">Get my free quote</Link>
            <Link href="/locations/dallas" className="btn btn-ghost">View Dallas Service Area</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
