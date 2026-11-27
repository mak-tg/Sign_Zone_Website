import type { Metadata } from 'next'
import Link from 'next/link'
import MonumentDemo from '@/components/signs/MonumentDemo'
import FAQAccordion from '@/components/ui/FAQAccordion'
import FaqJsonLd from '@/components/seo/FaqJsonLd'
import ServiceProjectShowcase from '@/components/common/ServiceProjectShowcase'

export const metadata: Metadata = {
  title: 'Custom Monument Signs Dallas–Fort Worth | Ground & Architectural Signs',
  description:
    'Custom commercial monument signs in DFW. Ground signs with stone, brick, or aluminum bases for shopping centers, medical offices, and corporate parks.',
  alternates: {
    canonical: '/monument-signs',
  },
  openGraph: {
    title: 'Custom Monument Signs Dallas–Fort Worth | Sign Zone',
    description:
      'Engineered ground signs for shopping centers, corporate headquarters, medical parks, and subdivisions across North Texas.',
    url: 'https://www.signzoneusa.com/monument-signs',
  },
}

const MONUMENT_PARTS = [
  {
    name: 'Sign Cabinet Face',
    desc: 'Heavy-gauge aluminum or routed push-through acrylic that displays tenant names and diffuses LED light cleanly.',
  },
  {
    name: 'Masonry / Architectural Base',
    desc: 'Brick, stone, or stucco base engineered to match the landlord’s master architectural building finish.',
  },
  {
    name: 'Internal Steel Skeleton',
    desc: 'Welded steel tube superstructure designed to withstand 115+ MPH Texas wind shear.',
  },
  {
    name: 'Low-Voltage LED Modules',
    desc: 'Commercial Samsung/SloanLED illumination rated for 50,000+ hours of maintenance-free nightly use.',
  },
  {
    name: 'Drainage & Weather Seals',
    desc: 'Precision gaskets and weep channels preventing Texas rain and condensation from entering electrical enclosures.',
  },
  {
    name: 'Reinforced Concrete Footing',
    desc: 'Engineered rebar cage and deep concrete piers anchored below frost and expansive clay movement.',
  },
]

const MONUMENT_MOUNTS = [
  {
    name: 'Cast Stone & Masonry Base',
    desc: 'A permanent ground-level masonry structure built to complement surrounding brick facade architecture.',
    when: 'Required by municipal setback codes, master planned commercial parks, or luxury developments.',
  },
  {
    name: 'All-Aluminum Architectural Monument',
    desc: 'Sleek, contemporary fabricated aluminum structure with polyurethane automotive finishes and routed push-through letters.',
    when: 'Modern corporate headquarters, tech campuses, medical centers, and urban storefronts.',
  },
  {
    name: 'Multi-Tenant Modular Directory',
    desc: 'Interchangeable illuminated tenant panels that slide into structural aluminum tracks without redesigning the monument.',
    when: 'Shopping centers, retail strips, and multi-tenant commercial office buildings.',
  },
]

const MONUMENT_SIZES = [
  { h: '4 ft x 8 ft', readable: '120 ft', stands: '40 ft', range: '$5,500 – $11,000', use: 'Small business parks, single-story professional offices' },
  { h: '6 ft x 10 ft', readable: '240 ft', stands: '80 ft', range: '$8,500 – $18,000', use: 'Strip centers, medical clinics, corporate entrances' },
  { h: '8 ft x 12 ft', readable: '360 ft', stands: '120 ft', range: '$14,000 – $28,000', use: 'Multi-tenant retail centers, regional shopping plazas' },
  { h: '10 ft x 14 ft', readable: '480 ft', stands: '160 ft', range: '$22,000 – $45,000+', use: 'Highway access frontage, large commercial developments' },
  { h: 'Digital EMC Combo', readable: '600+ ft', stands: '200+ ft', range: '$25,000 – $65,000+', use: 'Churches, high schools, event venues, municipal centers' },
]

const MONUMENT_FAQ = [
  {
    q: 'How much do commercial monument signs cost in Dallas–Fort Worth?',
    a: 'Most DFW commercial monument sign projects land between $6,000 and $35,000+ including concrete footing, steel armature, city permits, and LED illumination. Sign dimensions, masonry finish, and whether digital message boards are added are the primary price drivers.',
  },
  {
    q: 'Will my city require engineering drawings for a monument sign?',
    a: 'Yes. Cities like Dallas, Plano, Fort Worth, Frisco, and Arlington require sealed structural engineer drawings showing wind-load calculations and footing depth before issuing permits. Sign Zone handles all structural engineering and city filings directly.',
  },
  {
    q: 'How long does a monument sign take from design to installation?',
    a: 'Turnkey monument sign projects typically take 5 to 8 weeks. This includes 2 to 3 weeks for municipal permit review and approval, concurrent shop fabrication, foundation excavation, and crane setting.',
  },
  {
    q: 'Can tenant slots be replaced when leasing changes?',
    a: 'Yes. Our multi-tenant monument signs feature accessible slide-in acrylic or routed aluminum panels that our service crew can update within days when a new tenant moves in.',
  },
  {
    q: 'Do monument signs require high-voltage electrical work?',
    a: 'Monument signs use low-voltage 12V LED drivers powered by a dedicated 120V feed run underground from your main electrical panel. We coordinate trenching and final hookups as a licensed Texas electrical sign contractor.',
  },
]

export default function MonumentSignsPage() {
  return (
    <div className="view" id="v-monument-signs">
      <FaqJsonLd items={MONUMENT_FAQ} />

      {/* Hero Section */}
      <section className="dark">
        <div className="wrap" style={{ paddingTop: 28, paddingBottom: 88 }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: 'var(--dmuted)' }}>
            <Link href="/" style={{ color: 'var(--dmuted)' }}>Home</Link>
            {' / '}
            <Link href="/signs" style={{ color: 'var(--dmuted)' }}>Signs</Link>
            {' / '}
            <span style={{ color: '#fff' }}>Monument signs</span>
          </nav>

          <div className="cl-hero-grid">
            <div style={{ minWidth: 0 }}>
              <h1 className="disp sec-h" style={{ fontSize: 'clamp(32px, 3.8vw, 48px)', lineHeight: 1.02, margin: 0, maxWidth: 480 }}>
                Monument signs for DFW businesses.
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--dsub)', margin: '22px 0 0', maxWidth: 480 }}>
                Ground signs with stone, brick, or aluminum bases for centers and offices. Built to municipal setback codes and engineered to withstand 115+ MPH Texas winds.
              </p>
              <dl className="facts">
                <div><dt>Typical project</dt><dd>$6k – $45k+</dd></div>
                <div><dt>Timeline</dt><dd>5 – 8 weeks</dd></div>
                <div><dt>Engineering</dt><dd>Sealed TX PE</dd></div>
                <div><dt>Permits</dt><dd>Turnkey DFW</dd></div>
              </dl>
              <div className="btn-row" style={{ marginTop: 30, gap: 12 }}>
                <Link className="btn btn-blue" href="/quote?type=monument">Quote my monument sign</Link>
                <Link className="btn btn-ghost" href="/toolkit#cost">Estimate ground sign cost</Link>
              </div>
            </div>

            <div style={{ minWidth: 0 }}>
              <MonumentDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Anatomy */}
      <section className="light sec">
        <div className="wrap">
          <div className="eyebrow">What you&apos;re paying for</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>What makes up a monument sign?</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, marginTop: 40, alignItems: 'center' }}>
            <div className="anat" aria-hidden="true" style={{ flex: '1 1 380px', minWidth: 0 }}>
              {/* Outer sign cabinet */}
              <div style={{ position: 'absolute', left: '16%', top: '16%', width: '68%', height: '48%', background: 'var(--navy)', borderRadius: 8, boxShadow: '0 12px 28px rgba(6,38,102,0.3)' }} />
              {/* Push-through typography effect */}
              <div style={{ position: 'absolute', left: '22%', top: '24%', width: '56%', height: '16%', background: '#fff', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ height: 6, width: '70%', background: 'var(--blue)', borderRadius: 2 }} />
              </div>
              {/* Internal LEDs */}
              <div style={{ position: 'absolute', left: '26%', top: '46%', width: '48%', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8 }}>
                <span style={{ height: 8, borderRadius: 2, background: 'var(--elec)' }} />
                <span style={{ height: 8, borderRadius: 2, background: 'var(--elec)' }} />
                <span style={{ height: 8, borderRadius: 2, background: 'var(--elec)' }} />
                <span style={{ height: 8, borderRadius: 2, background: 'var(--elec)' }} />
              </div>
              {/* Masonry Base */}
              <div style={{ position: 'absolute', left: '10%', right: '10%', bottom: '16%', height: '22%', background: '#8C7A68', borderRadius: 4, borderTop: '4px solid #635343' }} />
              {/* Concrete Sub-grade Footing */}
              <div style={{ position: 'absolute', left: '6%', right: '6%', bottom: '6%', height: '10%', background: '#9AA3B2', borderRadius: 4 }} />

              {/* Numbered Pins */}
              <span className="pin" style={{ left: '50%', top: '10%' }}>1</span>
              <span className="pin" style={{ left: '8%', top: '65%' }}>2</span>
              <span className="pin" style={{ left: '82%', top: '32%' }}>3</span>
              <span className="pin" style={{ left: '50%', top: '44%' }}>4</span>
              <span className="pin" style={{ left: '14%', top: '40%' }}>5</span>
              <span className="pin" style={{ left: '50%', top: '86%' }}>6</span>
            </div>

            <ol className="parts" id="monumentParts" style={{ flex: '1 1 420px', minWidth: 0 }}>
              {MONUMENT_PARTS.map((p, i) => (
                <li key={p.name}>
                  <span className="pnum">{i + 1}</span>
                  <span>
                    <b style={{ display: 'block', color: 'var(--navy)' }}>{p.name}</b>
                    <span style={{ display: 'block', fontSize: 14, lineHeight: 1.5, color: 'var(--muted)', marginTop: 2 }}>{p.desc}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Mounting / Base options */}
      <section className="paper sec">
        <div className="wrap">
          <div className="eyebrow">Architectural Base Options</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>How we secure them on your property.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 18, marginTop: 40 }} id="monumentMounts">
            {MONUMENT_MOUNTS.map((m) => (
              <div key={m.name} className="card" style={{ borderRadius: 18, padding: 28, gap: 10 }}>
                <span style={{ fontSize: 22, fontWeight: 800, color: 'var(--navy)' }}>{m.name}</span>
                <span style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--muted)' }}>{m.desc}</span>
                <span className="you" style={{ marginTop: 'auto' }}>
                  <strong>Choose it when:</strong> {m.when}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Size & price guide */}
      <section className="light sec">
        <div className="wrap">
          <div className="head-row">
            <div>
              <div className="eyebrow">Size &amp; price guide</div>
              <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>See how sign size affects reading distance and price.</h2>
            </div>
            <Link className="btn btn-dark" href="/toolkit#cost">Open the cost calculator</Link>
          </div>
          <div className="tbl-wrap" style={{ marginTop: 36 }}>
            <table style={{ minWidth: 680 }}>
              <thead>
                <tr>
                  <th scope="col">Monument dimensions</th>
                  <th scope="col">Readable up to</th>
                  <th scope="col">Stands out up to</th>
                  <th scope="col">Typical price range</th>
                  <th scope="col">Common use</th>
                </tr>
              </thead>
              <tbody id="monumentSizes">
                {MONUMENT_SIZES.map((h) => (
                  <tr key={h.h}>
                    <th scope="row" style={{ fontWeight: 800, color: 'var(--blue)' }}>{h.h}</th>
                    <td>{h.readable}</td>
                    <td>{h.stands}</td>
                    <td style={{ fontWeight: 700, color: 'var(--text)' }}>{h.range}</td>
                    <td>{h.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="note">Readable distance is based on road setback and roadway speed (U.S. Sign Council). Prices include structural steel and aluminum fabrication; concrete footing and municipal permits quoted per site conditions.</p>
        </div>
      </section>

      {/* Real Project Proof */}
      <ServiceProjectShowcase
        category="monument"
        title="Freestanding monument and entrance signs in North Texas."
        subtitle="Custom masonry, aluminum cabinet, and multi-tenant monuments engineered for Texas wind loads."
      />

      {/* FAQ */}
      <section className="paper sec">
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)', margin: 0 }}>Questions about monument signs</h2>
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span className="kv">Often paired with</span>
              <Link href="/channel-letters" style={{ fontWeight: 700, color: 'var(--blue)' }}>Channel letters →</Link>
              <Link href="/storefront-signs" style={{ fontWeight: 700, color: 'var(--blue)' }}>Storefront lightboxes →</Link>
              <Link href="/pylon-signs" style={{ fontWeight: 700, color: 'var(--blue)' }}>Highway pylon signs →</Link>
            </div>
          </div>
          <div className="faq" id="monumentFaq" style={{ flex: '2 1 520px', minWidth: 0 }}>
            <FAQAccordion items={MONUMENT_FAQ} />
          </div>
        </div>
      </section>

      {/* Blue CTA Bar */}
      <section style={{ background: 'var(--blue)', color: '#fff' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between', paddingTop: 64, paddingBottom: 64 }}>
          <div>
            <div className="disp" style={{ fontSize: 'clamp(30px,5vw,40px)', lineHeight: 1 }}>See your monument sign on your property.</div>
            <div style={{ color: '#E6EEFF', marginTop: 8, fontSize: 17 }}>Free 3D site mockup, setback audit, and quote within 24 hours.</div>
          </div>
          <div className="btn-row" style={{ gap: 12 }}>
            <Link className="btn btn-dark" href="/quote?type=monument">Get my free mockup</Link>
            <a className="btn btn-ghost" href="tel:2147144623">214-714-4623</a>
          </div>
        </div>
      </section>
    </div>
  )
}
