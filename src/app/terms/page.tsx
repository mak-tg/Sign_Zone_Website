import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Sign Zone Commercial Signs Dallas–Fort Worth',
  description:
    'Commercial sign fabrication, municipal permitting, engineering, and installation terms of service for Sign Zone clients in the Dallas–Fort Worth Metroplex.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Service | Sign Zone DFW',
    description:
      'Standard terms and conditions for commercial sign fabrication, installation, permits, and warranty coverage.',
    url: 'https://www.signzoneusa.com/terms',
  },
}

export default function TermsPage() {
  return (
    <div className="view" id="v-terms">
      <section className="dark" style={{ paddingTop: 48, paddingBottom: 64 }}>
        <div className="wrap">
          <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: 'var(--dmuted)', marginBottom: 20 }}>
            <Link href="/" style={{ color: 'var(--dmuted)', textDecoration: 'none' }}>Home</Link>
            {' / '}
            <span style={{ color: '#fff' }}>Terms and conditions</span>
          </nav>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Commercial Agreement</div>
          <h1 className="disp sec-h" style={{ fontSize: 'clamp(32px, 4vw, 48px)', margin: 0, color: '#fff' }}>
            Terms and conditions
          </h1>
          <p style={{ fontSize: 16, color: 'var(--dsub)', marginTop: 12 }}>
            Standard Commercial Fabrication &amp; Installation Agreement · 2026
          </p>
        </div>
      </section>

      <section className="light sec" style={{ padding: '64px 0' }}>
        <div className="wrap" style={{ maxWidth: 840 }}>
          <div style={{ lineHeight: 1.75, color: '#334155', fontSize: 16 }}>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', marginTop: 0, marginBottom: 16 }}>
              1. What this agreement covers
            </h2>
            <p>
              These Terms and Conditions govern all commercial signage proposals, design services, fabrication orders,
              municipal permit expediting, and crane installation work performed by <strong>Sign Zone</strong> for commercial
              clients across North Texas. By approving a project proposal, issuing a purchase order, or submitting a
              deposit, the Client agrees to be bound by these provisions.
            </p>

            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', marginTop: 36, marginBottom: 16 }}>
              2. Quotes and design approval
            </h2>
            <ul style={{ paddingLeft: 24, marginBottom: 20 }}>
              <li><strong>Estimate Validity:</strong> Written quotations remain valid for thirty (30) calendar days from issuance due to fluctuating raw material costs (aluminum, acrylic, and commercial LEDs).</li>
              <li><strong>Shop Drawing Approval:</strong> Fabrication begins only upon receipt of Client&apos;s signed approval of final shop drawings, layout scale, color specifications (Pantone / 3M vinyl codes), and electrical schematics.</li>
              <li><strong>Change Orders:</strong> Any modifications to dimensions, illumination type, or mounting structure requested after drawing approval will be documented via written Change Order reflecting adjusted material costs and timelines.</li>
            </ul>

            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', marginTop: 36, marginBottom: 16 }}>
              3. City permits and landlord rules
            </h2>
            <p>
              Sign Zone is a licensed Texas Electrical Sign Contractor experienced in navigating municipal sign codes across Dallas, Collin, Tarrant, Denton, and surrounding counties:
            </p>
            <ul style={{ paddingLeft: 24, marginBottom: 20 }}>
              <li><strong>Permit Acquisition:</strong> We compile architectural elevation packets, engineering calculations, and handle city permit filings. City application fees are billed as specified in the proposal.</li>
              <li><strong>City Processing Timelines:</strong> Municipal review timeframes are governed solely by local city building departments. While Sign Zone expedites submittals promptly, municipal review delays remain outside contractor control.</li>
              <li><strong>Landlord Approvals:</strong> Client is responsible for ensuring proposed signage conforms to shopping center master sign criteria and obtaining written landlord consent prior to production.</li>
            </ul>

            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', marginTop: 36, marginBottom: 16 }}>
              4. Power and site access
            </h2>
            <ul style={{ paddingLeft: 24, marginBottom: 20 }}>
              <li><strong>Primary Power Supply:</strong> Client is responsible for providing dedicated primary 120V or 277V electrical feed to the designated sign location (direct disconnect or J-box) compliant with the National Electrical Code (NEC).</li>
              <li><strong>Site Accessibility:</strong> Client must ensure clear, unobstructed access to the building facade or pylon/monument foundation for crane trucks and service vehicles during scheduled installation hours.</li>
              <li><strong>Subsurface Conditions:</strong> For freestanding pylon and monument foundations, estimates assume standard soil excavation. Buried debris, rock, or private undocumented utilities requiring specialized drilling will be quoted via Change Order.</li>
            </ul>

            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', marginTop: 36, marginBottom: 16 }}>
              5. Warranty &amp; Service
            </h2>
            <p>
              Sign Zone stands behind every sign we build with comprehensive parts and labor warranty coverage:
            </p>
            <ul style={{ paddingLeft: 24, marginBottom: 20 }}>
              <li><strong>Workmanship &amp; Structure:</strong> Structural integrity, custom aluminum returns, and mounting welds are guaranteed against defects under normal operating conditions.</li>
              <li><strong>LED Illumination &amp; Power Supplies:</strong> Commercial-grade LED modules and low-voltage transformers carry manufacturer parts warranties, supported by Sign Zone labor service.</li>
              <li><strong>Exclusions:</strong> Warranty coverage excludes damage resulting from severe storm events exceeding regional engineering code ratings, vehicular collision, vandalism, client alterations, or electrical power surges from utility feeds.</li>
            </ul>

            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', marginTop: 36, marginBottom: 16 }}>
              6. Which laws apply
            </h2>
            <p>
              This Agreement shall be governed by and construed in accordance with the laws of the State of Texas. Any legal proceedings arising from or relating to commercial signage agreements shall be filed in the courts of Dallas County, Texas.
            </p>

            <div style={{ marginTop: 36, padding: '20px 24px', background: '#f8fafc', borderRadius: 8, border: '1px solid #e2e8f0' }}>
              <p style={{ margin: 0, fontSize: 15, color: '#475569' }}>
                Questions about our commercial terms? Contact our project management team at{' '}
                <a href="tel:2147144623" style={{ color: 'var(--blue)', fontWeight: 600 }}>214-714-4623</a> or{' '}
                <a href="mailto:Alex@signzoneusa.com" style={{ color: 'var(--blue)', fontWeight: 600 }}>Alex@signzoneusa.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
