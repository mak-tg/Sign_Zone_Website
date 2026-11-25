import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/contact/ContactForm'

function ContactInfoIcon({ type }: { type: 'phone' | 'email' | 'location' }) {
  const iconProps = {
    width: 19,
    height: 19,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  }

  if (type === 'phone') {
    return (
      <svg {...iconProps}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.04-6.04A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.07 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8 9.7a16 16 0 0 0 6.3 6.3l1.25-1.25a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92Z" />
      </svg>
    )
  }

  if (type === 'email') {
    return (
      <svg {...iconProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    )
  }

  return (
    <svg {...iconProps}>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Contact Sign Zone | Dallas–Fort Worth Commercial Sign Company',
  description:
    'Contact Sign Zone for commercial sign design, municipal permitting, and installation across North Texas. Call 214-714-4623, email Alex@signzoneusa.com, or request a quote.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Sign Zone | Dallas–Fort Worth Sign Contractor',
    description:
      'Connect with our commercial sign estimators and permitting team. Rapid response within 24 hours across Dallas, Fort Worth, Plano, Frisco, and Arlington.',
    url: 'https://www.signzoneusa.com/contact',
  },
}

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Sign Zone',
    description: 'Direct contact page for commercial sign fabrication, design, and permitting in Dallas–Fort Worth.',
    url: 'https://www.signzoneusa.com/contact',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Sign Zone',
      telephone: '+1-214-714-4623',
      email: 'Alex@signzoneusa.com',
      areaServed: 'Dallas–Fort Worth Metroplex, Texas',
    },
  }

  return (
    <div className="view" id="v-contact">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* Hero Header (Dark Theme) */}
      <section className="dark" style={{ paddingTop: 56, paddingBottom: 72 }}>
        <div className="wrap">
          <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: 'var(--dmuted)', marginBottom: 20 }}>
            <Link href="/" style={{ color: 'var(--dmuted)', textDecoration: 'none' }}>Home</Link>
            {' / '}
            <span style={{ color: 'var(--hl)' }}>Contact Us</span>
          </nav>

          <span className="pill" style={{ marginBottom: 16 }}>
            <span className="dot" />
            Direct Communication · North Texas Sign Shop
          </span>

          <h1 className="disp sec-h" style={{ fontSize: 'clamp(34px, 4.5vw, 54px)', lineHeight: 1.05, margin: 0, maxWidth: 820 }}>
            Let&apos;s talk about your business sign.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--dsub)', margin: '22px 0 0', maxWidth: 720 }}>
            Have questions about municipal sign codes, pricing, or custom fabrication? Call us directly, send your
            storefront photos, or submit a message below. We respond within 24 business hours.
          </p>

          <dl className="facts" style={{ marginTop: 36 }}>
            <div><dt>Direct Phone</dt><dd>214-714-4623</dd></div>
            <div><dt>Quote Turnaround</dt><dd>Within 24 Hours</dd></div>
            <div><dt>Territory</dt><dd>16+ DFW Municipalities</dd></div>
            <div><dt>Licensing</dt><dd>Licensed TDLR Contractor</dd></div>
          </dl>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="paper sec" style={{ padding: '72px 0', minHeight: '600px' }}>
        <div className="wrap">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 48,
              alignItems: 'flex-start',
            }}
          >
            {/* Left Column: Direct Contact Methods & Info */}
            <div>
              <div className="eyebrow">Get In Touch</div>
              <h2 className="disp sec-h" style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', color: 'var(--navy)', margin: '8px 0 24px' }}>
                Contact our team.
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--muted)', marginBottom: 32 }}>
                Whether you need preliminary budget numbers for a lease negotiation or full turnkey fabrication and permitting,
                we are ready to help.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {/* Phone & Text Card */}
                <div
                  style={{
                    background: '#fff',
                    borderRadius: 14,
                    padding: '24px 24px',
                    border: '1px solid var(--soft)',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: '#eff6ff', color: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>
                      <ContactInfoIcon type="phone" />
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--blue)' }}>
                        Phone &amp; Text-a-Photo
                      </div>
                      <a href="tel:2147144623" style={{ fontSize: 20, fontWeight: 800, color: 'var(--navy)', textDecoration: 'none' }}>
                        214-714-4623
                      </a>
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: 'var(--muted)', margin: '6px 0 12px', lineHeight: 1.5 }}>
                    Call our estimators directly or text storefront photos to <strong>214-714-4623</strong> for a quick preliminary review.
                  </p>
                  <div style={{ fontSize: 12.5, fontWeight: 600, color: '#64748b' }}>
                    Hours: Monday – Friday · 8:00 AM – 6:00 PM CST
                  </div>
                </div>

                {/* Email Card */}
                <div
                  style={{
                    background: '#fff',
                    borderRadius: 14,
                    padding: '24px 24px',
                    border: '1px solid var(--soft)',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: '#eff6ff', color: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>
                      <ContactInfoIcon type="email" />
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--blue)' }}>
                        Estimating &amp; Plans Email
                      </div>
                      <a href="mailto:Alex@signzoneusa.com" style={{ fontSize: 18, fontWeight: 800, color: 'var(--navy)', textDecoration: 'none' }}>
                        Alex@signzoneusa.com
                      </a>
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: 'var(--muted)', margin: '6px 0 0', lineHeight: 1.5 }}>
                    Send architectural PDF elevations, landlord criteria documents, and vector logo files. Written estimates delivered in 24 hours.
                  </p>
                </div>

                {/* Service Region Card */}
                <div
                  style={{
                    background: '#fff',
                    borderRadius: 14,
                    padding: '24px 24px',
                    border: '1px solid var(--soft)',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: '#eff6ff', color: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>
                      <ContactInfoIcon type="location" />
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--blue)' }}>
                        Service Territory
                      </div>
                      <div style={{ fontSize: 17, fontWeight: 800, color: 'var(--navy)' }}>
                        Dallas–Fort Worth Metroplex
                      </div>
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: 'var(--muted)', margin: '6px 0 0', lineHeight: 1.5 }}>
                    In-house crane installation fleet serving Dallas, Fort Worth, Plano, Frisco, Arlington, Irving, Carrollton, and surrounding North Texas communities.
                  </p>
                </div>
              </div>

              {/* Instant estimator callout */}
              <div style={{ marginTop: 28, padding: '20px 24px', background: '#eff6ff', borderRadius: 12, border: '1px solid #bfdbfe' }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--navy)', marginBottom: 4 }}>
                  Looking for instant pricing ballpark?
                </div>
                <p style={{ fontSize: 13.5, color: '#1e40af', margin: '0 0 12px' }}>
                  Use our free 60-second sign cost estimator tool to calculate expected ranges by sign type.
                </p>
                <Link href="/toolkit#cost" style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--blue)', textDecoration: 'none' }}>
                  Open Sign Cost Calculator →
                </Link>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Mini FAQ Section */}
      <section className="light sec" style={{ padding: '64px 0', borderTop: '1px solid var(--soft)' }}>
        <div className="wrap" style={{ maxWidth: 840 }}>
          <div className="eyebrow">Common Inquiries</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(26px, 3.2vw, 36px)', color: 'var(--navy)', margin: '8px 0 28px' }}>
            Questions people often ask.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: '#fff', border: '1px solid var(--soft)', borderRadius: 12, padding: '20px 24px' }}>
              <strong style={{ fontSize: 16, color: 'var(--navy)', display: 'block', marginBottom: 6 }}>
                How quickly will I receive my sign estimate?
              </strong>
              <p style={{ fontSize: 14.5, color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>
                We provide written proposals within 24 hours for standard channel letters, monument signs, and storefront lightboxes. For complex multi-tenant pylons or custom architectural projects, quotes are completed within 48 hours.
              </p>
            </div>

            <div style={{ background: '#fff', border: '1px solid var(--soft)', borderRadius: 12, padding: '20px 24px' }}>
              <strong style={{ fontSize: 16, color: 'var(--navy)', display: 'block', marginBottom: 6 }}>
                Do you perform on-site measurements and surveys?
              </strong>
              <p style={{ fontSize: 14.5, color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>
                Yes. Our technicians conduct physical on-site surveys across North Texas to measure building facades, evaluate electrical feeds, inspect existing raceways, and take elevation photographs.
              </p>
            </div>

            <div style={{ background: '#fff', border: '1px solid var(--soft)', borderRadius: 12, padding: '20px 24px' }}>
              <strong style={{ fontSize: 16, color: 'var(--navy)', display: 'block', marginBottom: 6 }}>
                Do you handle municipal city sign permits?
              </strong>
              <p style={{ fontSize: 14.5, color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>
                Yes, turnkey permitting is included in our process. As a licensed Texas electrical sign contractor, we prepare engineering packets, submit applications, track review progress, and coordinate final inspections.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
