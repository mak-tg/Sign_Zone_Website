import type { Metadata } from 'next'
import Link from 'next/link'
import FAQAccordion from '@/components/ui/FAQAccordion'
import FaqJsonLd from '@/components/seo/FaqJsonLd'

export const metadata: Metadata = {
  title: 'Commercial Sign Repair & Maintenance Dallas–Fort Worth | Sign Zone',
  description:
    'Rapid commercial sign repair in Dallas–Fort Worth. Dark channel letters, LED retrofits, transformer replacement, cracked sign faces, and emergency storm service with our bucket and crane fleet.',
  alternates: {
    canonical: '/sign-repair',
  },
  openGraph: {
    title: 'Commercial Sign Repair & LED Retrofits DFW | Sign Zone',
    description:
      'Fast commercial sign diagnostics, LED conversion, ballast replacements, and crane service across North Texas.',
    url: 'https://www.signzoneusa.com/sign-repair',
  },
}

const REPAIR_FAQS = [
  {
    q: 'How fast can Sign Zone dispatch for an unlit commercial sign?',
    a: 'We offer rapid 24- to 48-hour service truck dispatch across Dallas, Fort Worth, Plano, Frisco, Arlington, and surrounding cities. For emergency electrical or structural hazards, priority dispatch is available.',
  },
  {
    q: 'Should I repair my old neon sign or convert it to LEDs?',
    a: 'In over 90% of cases, an LED retrofit is far more cost-effective. Commercial LEDs consume up to 75% less electricity, generate minimal heat, eliminate high-voltage glass hazards, and require significantly less ongoing maintenance.',
  },
  {
    q: 'What types of signs do your technicians service?',
    a: 'We repair all exterior and interior commercial signs, including front-lit and halo-lit channel letters, masonry monument signs, highway pylon signs, lightbox cabinets, architectural tenant directories, and electronic message centers.',
  },
  {
    q: 'Do you carry bucket and crane trucks for high-elevation signs?',
    a: 'Yes. Sign Zone operates fully equipped bucket trucks and crane equipment capable of reaching multistory building fascias and highway pole signs up to 65+ feet.',
  },
]

export default function SignRepairPage() {
  return (
    <div className="view" id="v-sign-repair">
      <FaqJsonLd items={REPAIR_FAQS} />
      {/* Hero Section */}
      <section className="dark" style={{ paddingTop: 56, paddingBottom: 80 }}>
        <div className="wrap">
          <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: 'var(--dmuted)', marginBottom: 20 }}>
            <Link href="/" style={{ color: 'var(--dmuted)', textDecoration: 'none' }}>Home</Link>
            {' / '}
            <span style={{ color: '#fff' }}>Sign Repair &amp; Maintenance</span>
          </nav>
          <span className="pill" style={{ marginBottom: 16 }}>
            <span className="dot" />
            24–48 Hr Commercial Dispatch Across DFW
          </span>
          <h1 className="disp sec-h" style={{ fontSize: 'clamp(32px, 4.2vw, 52px)', lineHeight: 1.05, margin: 0, maxWidth: 780, color: '#fff' }}>
            DFW Commercial sign repair, LED retrofits &amp; crane service.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--dsub)', margin: '22px 0 0', maxWidth: 680 }}>
            An unlit or damaged sign drives potential customers straight past your business. Our licensed Texas sign electricians
            troubleshoot electrical faults, replace failing transformers, restore cracked faces, and modernize outdated signs with
            high-efficiency LEDs.
          </p>
          <dl className="facts" style={{ marginTop: 36 }}>
            <div><dt>Dispatch</dt><dd>24 – 48 Hours</dd></div>
            <div><dt>Technicians</dt><dd>Licensed TDLR Electricians</dd></div>
            <div><dt>Fleet Reach</dt><dd>Up to 65+ ft Crane Service</dd></div>
            <div><dt>Warranty</dt><dd>Parts &amp; Labor Coverage</dd></div>
          </dl>
          <div className="btn-row" style={{ marginTop: 32, gap: 14 }}>
            <a href="tel:2147144623" className="btn btn-blue">Call for dispatch: 214-714-4623</a>
            <Link href="/quote?type=repair" className="btn btn-ghost">Request written estimate</Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="light sec" style={{ padding: '80px 0' }}>
        <div className="wrap">
          <div className="eyebrow">Comprehensive Diagnostic &amp; Field Repair</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', color: '#0f172a', margin: '8px 0 36px' }}>
            Commercial sign repair services we handle daily.
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 28, boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
              <div style={{ width: 44, height: 44, borderRadius: 8, background: '#eff6ff', color: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 18 }}>⚡</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', margin: '0 0 10px' }}>LED Retrofits &amp; Power Supplies</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: '#64748b', margin: 0 }}>
                Replace noisy, energy-draining neon tubing or failing ballasts with modern 12V/24V commercial LEDs. Cut electrical costs up to 75% and enjoy crisp, uniform illumination.
              </p>
            </div>

            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 28, boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
              <div style={{ width: 44, height: 44, borderRadius: 8, background: '#eff6ff', color: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 18 }}>🔧</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', margin: '0 0 10px' }}>Channel Letter Relamping &amp; Wiring</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: '#64748b', margin: 0 }}>
                Dark letters, flickering modules, or faulty raceway wiring diagnosed and repaired quickly. We match existing color temperatures (3000K, 6500K, etc.) for seamless appearance.
              </p>
            </div>

            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 28, boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
              <div style={{ width: 44, height: 44, borderRadius: 8, background: '#eff6ff', color: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 18 }}>🛡️</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', margin: '0 0 10px' }}>Sign Face Replacement &amp; Cabinet Repair</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: '#64748b', margin: 0 }}>
                Cracked acrylic or polycarbonate sign faces fabricated in-house with UV-resistant graphics. Structural cabinet reinforcement for storm and wind damage.
              </p>
            </div>

            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 28, boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
              <div style={{ width: 44, height: 44, borderRadius: 8, background: '#eff6ff', color: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 18 }}>🏗️</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', margin: '0 0 10px' }}>Pylon &amp; Monument Structural Service</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: '#64748b', margin: 0 }}>
                High-reach crane access for multistory building wall signs, highway monopoles, and shopping plaza pylons. Foundation inspection and re-anchoring.
              </p>
            </div>

            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 28, boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
              <div style={{ width: 44, height: 44, borderRadius: 8, background: '#eff6ff', color: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 18 }}>⏱️</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', margin: '0 0 10px' }}>Photocell &amp; Timer Calibration</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: '#64748b', margin: 0 }}>
                Ensure your exterior sign activates promptly at dusk and shuts off per municipal sign code curfews (such as 11:00 PM residential restrictions in Plano and Frisco).
              </p>
            </div>

            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 28, boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
              <div style={{ width: 44, height: 44, borderRadius: 8, background: '#eff6ff', color: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 18 }}>📋</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', margin: '0 0 10px' }}>Commercial Maintenance Plans</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: '#64748b', margin: 0 }}>
                Scheduled quarterly or semi-annual maintenance contracts for retail property managers, strip centers, and multi-location franchises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="dark sec" style={{ padding: '80px 0' }}>
        <div className="wrap" style={{ maxWidth: 840 }}>
          <div className="eyebrow">Common Questions</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', color: '#fff', margin: '8px 0 32px' }}>
            Commercial sign repair FAQs.
          </h2>
          <FAQAccordion items={REPAIR_FAQS} />
        </div>
      </section>
    </div>
  )
}
