import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Sign Zone Commercial Signs Dallas–Fort Worth',
  description:
    'Sign Zone privacy policy and data practices: how we collect, use, and protect information submitted through our commercial sign quote requests and SMS text-a-photo service.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Sign Zone Commercial Signs DFW',
    description:
      'Information privacy practices, TCPA SMS messaging disclosures, and data protection for Sign Zone clients.',
    url: 'https://www.signzoneusa.com/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <div className="view" id="v-privacy">
      <section className="dark" style={{ paddingTop: 48, paddingBottom: 64 }}>
        <div className="wrap">
          <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: 'var(--dmuted)', marginBottom: 20 }}>
            <Link href="/" style={{ color: 'var(--dmuted)', textDecoration: 'none' }}>Home</Link>
            {' / '}
            <span style={{ color: '#fff' }}>Privacy Policy</span>
          </nav>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Data Protection &amp; Legal</div>
          <h1 className="disp sec-h" style={{ fontSize: 'clamp(32px, 4vw, 48px)', margin: 0, color: '#fff' }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: 16, color: 'var(--dsub)', marginTop: 12 }}>
            Effective Date: January 1, 2026 · Last Updated: January 2026
          </p>
        </div>
      </section>

      <section className="light sec" style={{ padding: '64px 0' }}>
        <div className="wrap" style={{ maxWidth: 840 }}>
          <div style={{ lineHeight: 1.75, color: '#334155', fontSize: 16 }}>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', marginTop: 0, marginBottom: 16 }}>
              1. Introduction &amp; Scope
            </h2>
            <p>
              Sign Zone (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates{' '}
              <strong>www.signzoneusa.com</strong>. We are a commercial sign design, fabrication, permitting, and
              installation contractor serving the Dallas–Fort Worth Metroplex. This Privacy Policy details how we
              collect, use, disclose, and safeguard personal and business information when you visit our website, submit
              quote requests, or communicate with our team via telephone, email, or SMS text messaging.
            </p>

            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', marginTop: 36, marginBottom: 16 }}>
              2. Information We Collect
            </h2>
            <p>
              We collect information that you voluntarily provide to us when requesting a commercial sign proposal,
              ordering sign maintenance, or uploading project site photos:
            </p>
            <ul style={{ paddingLeft: 24, marginBottom: 20 }}>
              <li><strong>Contact Information:</strong> Name, business name, business address, email address, and phone number.</li>
              <li><strong>Project Specifications:</strong> Storefront dimensions, building photos, landlord sign criteria documents, architectural blueprints, and municipal permit documentation.</li>
              <li><strong>Communications Data:</strong> Records of communications via our website quote forms, telephone inquiries, emails, and SMS text messages sent to <strong>214-714-4623</strong>.</li>
              <li><strong>Technical Browsing Data:</strong> Standard server logs, IP addresses, browser types, and anonymized analytics data used strictly to optimize site performance and responsiveness.</li>
            </ul>

            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', marginTop: 36, marginBottom: 16 }}>
              3. TCPA &amp; SMS Messaging Compliance
            </h2>
            <div style={{ background: '#f8fafc', borderLeft: '4px solid var(--blue)', padding: '16px 20px', borderRadius: '0 8px 8px 0', marginBottom: 24 }}>
              <p style={{ margin: 0, fontWeight: 500, color: '#1e293b' }}>
                <strong>Text-a-Photo &amp; Mobile Updates:</strong> When you provide your mobile telephone number through our
                quote forms, estimate requests, or directly text our shop at <strong>214-714-4623</strong>, you consent to receive
                operational text messages (SMS/MMS) from Sign Zone regarding your project inquiries, quote estimates,
                artwork approvals, permit progress, and installation scheduling.
              </p>
            </div>
            <ul style={{ paddingLeft: 24, marginBottom: 20 }}>
              <li>Message frequency varies according to your project milestones and active inquiries.</li>
              <li>Message and data rates may apply depending on your cellular service provider.</li>
              <li><strong>Opt-Out:</strong> You may opt out of receiving SMS text messages at any time by replying <strong>STOP</strong> to any message, or by emailing us directly. For assistance, reply <strong>HELP</strong> or call 214-714-4623.</li>
              <li><strong>No Third-Party Sharing:</strong> Mobile phone numbers and SMS consent data are strictly kept confidential. We do not sell, rent, or share your mobile number or messaging consent with third-party marketers or affiliates for promotional purposes.</li>
            </ul>

            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', marginTop: 36, marginBottom: 16 }}>
              4. How We Use Your Information
            </h2>
            <p>We use information collected strictly for legitimate commercial signage operations:</p>
            <ul style={{ paddingLeft: 24, marginBottom: 20 }}>
              <li>Calculating accurate signage material, electrical, and crane installation estimates.</li>
              <li>Preparing engineering wind-load calculation packets and architectural site submittals.</li>
              <li>Filing commercial sign permits with municipal building and zoning departments across North Texas.</li>
              <li>Coordinating utility line locates (Texas811) and bucket/crane truck installation logistics.</li>
              <li>Providing warranty support, electrical diagnostics, and routine sign maintenance.</li>
            </ul>

            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', marginTop: 36, marginBottom: 16 }}>
              5. Information Disclosure &amp; Third Parties
            </h2>
            <p>
              We do not sell, trade, or monetize your personal or corporate information. Information is disclosed solely in the following necessary contexts:
            </p>
            <ul style={{ paddingLeft: 24, marginBottom: 20 }}>
              <li><strong>Municipal Authorities:</strong> City building inspections and zoning departments (such as City of Dallas, City of Fort Worth, Plano, Frisco) for legal permit issuance.</li>
              <li><strong>Licensed Engineering Partners:</strong> Texas-licensed professional structural engineers when required for sealed wind-load calculations.</li>
              <li><strong>Legal Compliance:</strong> When required by Texas or federal law, court order, or governmental regulation.</li>
            </ul>

            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', marginTop: 36, marginBottom: 16 }}>
              6. Data Security &amp; Retention
            </h2>
            <p>
              We implement industry-standard technical and operational security controls to safeguard customer information, design assets, and communications. Project documentation is retained for warranty verification, re-orders, and ongoing service agreement fulfillment.
            </p>

            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', marginTop: 36, marginBottom: 16 }}>
              7. Contact Our Privacy Officer
            </h2>
            <p>
              If you have questions regarding this Privacy Policy or wish to review, update, or delete your contact information, please contact us:
            </p>
            <div style={{ background: '#f1f5f9', padding: '20px 24px', borderRadius: 8, marginTop: 16 }}>
              <p style={{ margin: '0 0 8px' }}><strong>Sign Zone — Commercial Signs</strong></p>
              <p style={{ margin: '0 0 8px' }}>Dallas–Fort Worth Metroplex, Texas</p>
              <p style={{ margin: '0 0 8px' }}>Phone: <a href="tel:2147144623" style={{ color: 'var(--blue)' }}>214-714-4623</a></p>
              <p style={{ margin: 0 }}>Email: <a href="mailto:Alex@signzoneusa.com" style={{ color: 'var(--blue)' }}>Alex@signzoneusa.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
