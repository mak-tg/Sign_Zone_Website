import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Accessibility Statement | Sign Zone Commercial Signs Dallas–Fort Worth',
  description:
    'Our commitment to digital accessibility for all users, conforming to WCAG 2.1 AA standards, alongside our architectural ADA/TAS compliant sign fabrication services.',
  alternates: {
    canonical: '/accessibility',
  },
  openGraph: {
    title: 'Accessibility Statement | Sign Zone DFW',
    description:
      'Digital website accessibility policy and architectural ADA/TAS compliance statement for Sign Zone.',
    url: 'https://www.signzoneusa.com/accessibility',
  },
}

export default function AccessibilityPage() {
  return (
    <div className="view" id="v-accessibility">
      <section className="dark" style={{ paddingTop: 48, paddingBottom: 64 }}>
        <div className="wrap">
          <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: 'var(--dmuted)', marginBottom: 20 }}>
            <Link href="/" style={{ color: 'var(--dmuted)', textDecoration: 'none' }}>Home</Link>
            {' / '}
            <span style={{ color: '#fff' }}>Accessibility</span>
          </nav>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Inclusive Design</div>
          <h1 className="disp sec-h" style={{ fontSize: 'clamp(32px, 4vw, 48px)', margin: 0, color: '#fff' }}>
            Accessibility Statement
          </h1>
          <p style={{ fontSize: 16, color: 'var(--dsub)', marginTop: 12 }}>
            Commitment to Digital Accessibility &amp; ADA Compliant Commercial Signage
          </p>
        </div>
      </section>

      <section className="light sec" style={{ padding: '64px 0' }}>
        <div className="wrap" style={{ maxWidth: 840 }}>
          <div style={{ lineHeight: 1.75, color: '#334155', fontSize: 16 }}>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', marginTop: 0, marginBottom: 16 }}>
              1. Our Digital Accessibility Commitment
            </h2>
            <p>
              Sign Zone is committed to facilitating the accessibility and usability of our website,{' '}
              <strong>www.signzoneusa.com</strong>, for all individuals, including people with visual, hearing, cognitive,
              and motor disabilities. We actively work to align our digital user experience with the{' '}
              <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong> standards.
            </p>

            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', marginTop: 36, marginBottom: 16 }}>
              2. Technical Accessibility Measures
            </h2>
            <p>To ensure a robust and accessible browsing experience, we implement the following practices across our website:</p>
            <ul style={{ paddingLeft: 24, marginBottom: 20 }}>
              <li><strong>Semantic HTML Structure:</strong> Logical document headings (H1–H4), structured lists, and semantic landmarks (nav, main, section, footer) to assist assistive technology navigation.</li>
              <li><strong>Screen Reader Compatibility:</strong> Form fields paired with explicit label tags, aria-expanded states on accordions, and descriptive alternative text (alt attributes) on project and signage imagery.</li>
              <li><strong>Keyboard Navigability:</strong> All interactive elements, quote calculators, navigation menus, and call-to-actions are navigable via standard keyboard tab sequences with visible focus indicators.</li>
              <li><strong>Color Contrast &amp; Legibility:</strong> Strict adherence to WCAG AA color contrast ratios (minimum 4.5:1 for standard body text) and responsive typography scaling across mobile, tablet, and desktop viewports.</li>
            </ul>

            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', marginTop: 36, marginBottom: 16 }}>
              3. Architectural ADA &amp; Texas Accessibility Standards (TAS)
            </h2>
            <p>
              Beyond our digital platform, accessibility is a core specialty of our fabrication shop. We manufacture
              interior architectural signage engineered strictly to comply with the <strong>Americans with Disabilities Act (ADA)</strong> and{' '}
              <strong>Texas Accessibility Standards (TAS)</strong>:
            </p>
            <ul style={{ paddingLeft: 24, marginBottom: 20 }}>
              <li>Tactile room identification with 1/32-inch raised characters and accompanying Domed Grade 2 Braille.</li>
              <li>Non-glare matte acrylic substrates with high visual contrast (70%+ luminance differential).</li>
              <li>Strict 48-to-60-inch mounting elevation compliance for inspection sign-offs in commercial facilities.</li>
              <li>Learn more on our dedicated <Link href="/interior-ada-signs" style={{ color: 'var(--blue)', fontWeight: 600 }}>Interior &amp; ADA Signage</Link> page.</li>
            </ul>

            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', marginTop: 36, marginBottom: 16 }}>
              4. Continuous Improvement &amp; Feedback
            </h2>
            <p>
              We continually review and update our site to enhance accessibility as web standards evolve. If you experience difficulty accessing any content, have questions regarding accessibility features, or require information in an alternative format, please let us know:
            </p>
            <div style={{ background: '#f8fafc', padding: '20px 24px', borderRadius: 8, border: '1px solid #e2e8f0', marginTop: 16 }}>
              <p style={{ margin: '0 0 8px' }}><strong>Sign Zone Accessibility Coordinator</strong></p>
              <p style={{ margin: '0 0 8px' }}>Phone: <a href="tel:2147144623" style={{ color: 'var(--blue)', fontWeight: 600 }}>214-714-4623</a></p>
              <p style={{ margin: 0 }}>Email: <a href="mailto:Alex@signzoneusa.com" style={{ color: 'var(--blue)', fontWeight: 600 }}>Alex@signzoneusa.com</a></p>
              <p style={{ margin: '12px 0 0', fontSize: 14, color: '#64748b' }}>We aim to respond to accessibility inquiries within one business day.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
