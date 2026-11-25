import type { Metadata } from 'next'
import Link from 'next/link'
import AdaDemo from '@/components/signs/AdaDemo'
import FAQAccordion from '@/components/ui/FAQAccordion'
import FaqJsonLd from '@/components/seo/FaqJsonLd'
import ServiceProjectShowcase from '@/components/common/ServiceProjectShowcase'

export const metadata: Metadata = {
  title: 'ADA & Interior Wayfinding Signs Dallas–Fort Worth | Sign Zone',
  description:
    'Code-compliant ADA interior signs, tactile room numbers, grade 2 braille, and building wayfinding directories in Dallas–Fort Worth. Engineered for smooth municipal inspection sign-off.',
  alternates: {
    canonical: '/interior-ada-signs',
  },
  openGraph: {
    title: 'ADA & Interior Wayfinding Signs Dallas–Fort Worth | Sign Zone',
    description:
      'Code-compliant ADA signs with tactile lettering and Grade 2 Braille for Texas commercial building inspections.',
    url: 'https://www.signzoneusa.com/interior-ada-signs',
  },
}

const ADA_PARTS = [
  {
    name: '1/32" Tactile Characters',
    desc: 'Chemically bonded or laser-engraved raised letters and numbers with uppercase sans-serif typography.',
  },
  {
    name: 'Domed Grade 2 Braille',
    desc: 'Raster spheres inserted directly into acrylic substrate meeting Texas Accessibility Standards (TAS) specs.',
  },
  {
    name: 'Non-Glare Matte Substrate',
    desc: 'High-contrast matte finish acrylic or metal eliminating reflections and maximizing visual readability.',
  },
  {
    name: 'Pictogram Visual Field',
    desc: '6-inch minimum dedicated symbol height for International Symbols of Accessibility, restrooms, and stairs.',
  },
  {
    name: 'Heavy-Duty 3M Adhesive Backing',
    desc: 'Industrial-grade closed-cell tape ensuring permanent mounting without damaging drywall or wood doors.',
  },
  {
    name: 'Framed Sub-Backer / Standoffs',
    desc: 'Optional brushed aluminum or wood composite accent border complementing high-end corporate architecture.',
  },
]

const ADA_MOUNTS = [
  {
    name: 'Latch-Side Wall Mount',
    desc: 'Positioned on the latch side of the door, 48" to 60" above the finished floor to center of tactile characters.',
    when: 'Mandatory for permanent room identification (restrooms, electrical, conference rooms, exits).',
  },
  {
    name: 'Overhead Suspended Wayfinding',
    desc: 'Suspended from ceiling grids or bracketed perpendicular to walls to guide large foot traffic flows.',
    when: 'Hospital corridors, university halls, airport terminals, and spacious corporate campuses.',
  },
  {
    name: 'Main Lobby Directory Board',
    desc: 'Wall-mounted modular aluminum directory with magnetic or interchangeable acrylic tenant listings.',
    when: 'Multi-tenant commercial buildings and medical arts complexes near main public entrances.',
  },
]

const ADA_SIZES = [
  { h: '6" x 8" Room ID', readable: '15 ft', stands: '5 ft', range: '$45 – $85', use: 'Offices, conference rooms, utility closets, exam rooms' },
  { h: '8" x 8" Restroom', readable: '25 ft', stands: '10 ft', range: '$65 – $120', use: 'All-gender, men, women, and accessible family restrooms' },
  { h: '8" x 10" Exit / Stair', readable: '35 ft', stands: '15 ft', range: '$75 – $145', use: 'Emergency stairwells, roof access, floor level indicators' },
  { h: '12" x 18" Directional', readable: '60 ft', stands: '25 ft', range: '$140 – $280', use: 'Hallway intersections, elevators, department directories' },
  { h: 'Building Directory', readable: '80+ ft', stands: '40+ ft', range: '$650 – $2,400+', use: 'Multi-tenant office lobbies and commercial entrances' },
]

const ADA_FAQ = [
  {
    q: 'Are ADA signs required for a Certificate of Occupancy (CO) in Texas?',
    a: 'Yes. In every DFW municipality, commercial building inspectors will not issue your Certificate of Occupancy until all permanent rooms, restrooms, and emergency exits feature TAS/ADA-compliant tactile and Braille signage installed at proper heights.',
  },
  {
    q: 'What are the mounting height rules for ADA signs?',
    a: 'Under the 2010 ADA Standards and Texas Accessibility Standards, the baseline of the lowest tactile character must be at least 48 inches above the finished floor, and the baseline of the highest tactile character cannot exceed 60 inches.',
  },
  {
    q: 'Can ADA signs match our company branding and colors?',
    a: 'Yes! While ADA regulations require high visual contrast (e.g., light text on dark background or dark on light) and non-glare finishes, the signs can be customized to your brand’s custom PMS colors, brushed metal finishes, and architectural frames.',
  },
  {
    q: 'How fast can an ADA sign package be produced?',
    a: 'Standard tactile room and restroom signs typically ship within 5 to 8 business days. Rush production is available for pending building inspections.',
  },
  {
    q: 'Do you offer on-site ADA placement and installation in DFW?',
    a: 'Yes. Our installation technicians map your architectural floor plans and install every plaque to exact millimeter tolerances, ensuring strict compliance with ADA and Texas Accessibility Standards.',
  },
]

export default function InteriorAdaSignsPage() {
  return (
    <div className="view" id="v-ada-signs">
      <FaqJsonLd items={ADA_FAQ} />

      {/* Hero Section */}
      <section className="dark">
        <div className="wrap" style={{ paddingTop: 28, paddingBottom: 88 }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: 'var(--dmuted)' }}>
            <Link href="/" style={{ color: 'var(--dmuted)' }}>Home</Link>
            {' / '}
            <Link href="/signs" style={{ color: 'var(--dmuted)' }}>Signs</Link>
            {' / '}
            <span style={{ color: '#fff' }}>Interior &amp; ADA signs</span>
          </nav>

          <div className="cl-hero-grid">
            <div style={{ minWidth: 0 }}>
              <h1 className="disp sec-h" style={{ fontSize: 'clamp(32px, 3.8vw, 48px)', lineHeight: 1.02, margin: 0, maxWidth: 480 }}>
                ADA signs that help everyone find their way.
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--dsub)', margin: '22px 0 0', maxWidth: 480 }}>
                Code-compliant room, restroom, and directional signs with Grade 2 Braille and tactile lettering. Engineered strictly to Texas Accessibility Standards (TAS) and ADA specifications.
              </p>
              <dl className="facts">
                <div><dt>Typical price</dt><dd>$45 – $250/sign</dd></div>
                <div><dt>Timeline</dt><dd>5 – 8 days</dd></div>
                <div><dt>Compliance</dt><dd>TAS &amp; ADA Compliant</dd></div>
              </dl>
              <div className="btn-row" style={{ marginTop: 30, gap: 12 }}>
                <Link className="btn btn-blue" href="/quote?type=ada">Quote my ADA sign package</Link>
                <Link className="btn btn-ghost" href="/toolkit#permits">View checklist</Link>
              </div>
            </div>

            <div style={{ minWidth: 0 }}>
              <AdaDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Anatomy */}
      <section className="light sec">
        <div className="wrap">
          <div className="eyebrow">What you&apos;re paying for</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>What goes into an ADA sign?</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, marginTop: 40, alignItems: 'center' }}>
            <div className="anat" aria-hidden="true" style={{ flex: '1 1 380px', minWidth: 0 }}>
              {/* Main Plaque Body */}
              <div style={{ position: 'absolute', left: '20%', top: '16%', width: '60%', height: '62%', background: 'var(--navy)', borderRadius: 10, boxShadow: '0 12px 28px rgba(6,38,102,0.35)' }} />
              {/* Tactile Symbol */}
              <div style={{ position: 'absolute', left: '38%', top: '24%', width: '24%', height: '20%', background: '#fff', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ width: '40%', height: '40%', background: 'var(--blue)', borderRadius: 2 }} />
              </div>
              {/* Tactile Text */}
              <div style={{ position: 'absolute', left: '30%', top: '50%', width: '40%', height: 10, background: '#fff', borderRadius: 2 }} />
              {/* Tactile Braille Strip */}
              <div style={{ position: 'absolute', left: '34%', top: '64%', width: '32%', height: 6, background: 'rgba(255,255,255,0.45)', borderRadius: 3 }} />
              {/* Wall Surface Line */}
              <div style={{ position: 'absolute', left: '10%', right: '10%', bottom: '10%', height: 8, background: '#9AA3B2', borderRadius: 4 }} />

              {/* Numbered Pins */}
              <span className="pin" style={{ left: '50%', top: '44%' }}>1</span>
              <span className="pin" style={{ left: '50%', top: '68%' }}>2</span>
              <span className="pin" style={{ left: '16%', top: '20%' }}>3</span>
              <span className="pin" style={{ left: '50%', top: '12%' }}>4</span>
              <span className="pin" style={{ left: '76%', top: '70%' }}>5</span>
              <span className="pin" style={{ left: '50%', top: '86%' }}>6</span>
            </div>

            <ol className="parts" id="adaParts" style={{ flex: '1 1 420px', minWidth: 0 }}>
              {ADA_PARTS.map((p, i) => (
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

      {/* Mounting options */}
      <section className="paper sec">
        <div className="wrap">
          <div className="eyebrow">Mounting &amp; Wayfinding Systems</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>How we install them to meet the rules.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 18, marginTop: 40 }} id="adaMounts">
            {ADA_MOUNTS.map((m) => (
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
              <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>Sign sizes, reading distance, and cost.</h2>
            </div>
            <Link className="btn btn-dark" href="/toolkit#cost">Open the cost calculator</Link>
          </div>
          <div className="tbl-wrap" style={{ marginTop: 36 }}>
            <table style={{ minWidth: 680 }}>
              <thead>
                <tr>
                  <th scope="col">Sign type &amp; size</th>
                  <th scope="col">Readable up to</th>
                  <th scope="col">Tactile range</th>
                  <th scope="col">Price per sign</th>
                  <th scope="col">Common use</th>
                </tr>
              </thead>
              <tbody id="adaSizes">
                {ADA_SIZES.map((h) => (
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
          <p className="note">All signs comply with Americans with Disabilities Act (ADA) and Texas Accessibility Standards (TAS). Volume discounts available for full-building packages.</p>
        </div>
      </section>

      {/* Real Project Proof */}
      <ServiceProjectShowcase
        category="interior"
        title="ADA &amp; interior architectural signage across DFW."
        subtitle="Grade 2 Braille room markers, wayfinding directories, and tactile signs engineered to Texas code."
      />

      {/* FAQ */}
      <section className="paper sec">
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)', margin: 0 }}>Questions about ADA signs</h2>
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span className="kv">Often paired with</span>
              <Link href="/lobby-signs" style={{ fontWeight: 700, color: 'var(--blue)' }}>Lobby &amp; reception signs →</Link>
              <Link href="/storefront-signs" style={{ fontWeight: 700, color: 'var(--blue)' }}>Storefront lightboxes →</Link>
              <Link href="/channel-letters" style={{ fontWeight: 700, color: 'var(--blue)' }}>Channel letters →</Link>
            </div>
          </div>
          <div className="faq" id="adaFaq" style={{ flex: '2 1 520px', minWidth: 0 }}>
            <FAQAccordion items={ADA_FAQ} />
          </div>
        </div>
      </section>

      {/* Blue CTA Bar */}
      <section style={{ background: 'var(--blue)', color: '#fff' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between', paddingTop: 64, paddingBottom: 64 }}>
          <div>
            <div className="disp" style={{ fontSize: 'clamp(30px,5vw,40px)', lineHeight: 1 }}>Need ADA signs for building sign-off?</div>
            <div style={{ color: '#E6EEFF', marginTop: 8, fontSize: 17 }}>Upload your architectural floor plan for a complete turnkey take-off quote.</div>
          </div>
          <div className="btn-row" style={{ gap: 12 }}>
            <Link className="btn btn-dark" href="/quote?type=ada">Get my free package quote</Link>
            <a className="btn btn-ghost" href="tel:2147144623">214-714-4623</a>
          </div>
        </div>
      </section>
    </div>
  )
}
