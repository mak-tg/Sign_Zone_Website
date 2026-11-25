import type { Metadata } from 'next'
import Link from 'next/link'
import WallMuralDemo from '@/components/signs/WallMuralDemo'
import FAQAccordion from '@/components/ui/FAQAccordion'
import FaqJsonLd from '@/components/seo/FaqJsonLd'
import ServiceProjectShowcase from '@/components/common/ServiceProjectShowcase'

export const metadata: Metadata = {
  title: 'Custom Wall Murals & Office Graphics Dallas–Fort Worth | Sign Zone',
  description:
    'Large-format wall murals, frosted glass privacy film, and custom interior office graphics in Dallas–Fort Worth. Printed on 3M vinyl with commercial installation.',
  alternates: {
    canonical: '/wall-murals',
  },
  openGraph: {
    title: 'Custom Wall Murals & Office Graphics Dallas–Fort Worth | Sign Zone',
    description:
      'Turn blank drywall, brick, and glass conference walls into high-impact brand spaces across North Texas.',
    url: 'https://www.signzoneusa.com/wall-murals',
  },
}

const MURAL_PARTS = [
  {
    name: '3M Cast or Calendered Vinyl',
    desc: 'Commercial-grade 3M IJ180cV3 or IJ35c media selected specifically for smooth drywall, painted concrete, or brick.',
  },
  {
    name: 'Matte UV Overlaminate',
    desc: 'Anti-glare protective laminate that resists scuffs, cleans easily with mild soap, and eliminates office light reflections.',
  },
  {
    name: '1200 DPI Latex Printing',
    desc: 'Odorless water-based HP Latex inks safe for hospitals, schools, and occupied corporate offices with zero VOC fumes.',
  },
  {
    name: 'Overlap-Matched Panels',
    desc: 'Precision-tiled 52" vertical drops with 1/2" overlap seams aligned to millimeter tolerances on your wall.',
  },
  {
    name: 'Surface Adhesion Testing',
    desc: 'Pre-install wall tack checks for low-VOC matte paints so vinyl never peels or bubbles after application.',
  },
  {
    name: 'Optional 3D Acrylic Accents',
    desc: 'Layer laser-cut acrylic mission statements or dimensional logos directly over your printed wall mural.',
  },
]

const MURAL_MOUNTS = [
  {
    name: 'Seamless Drywall Mural',
    desc: 'Floor-to-ceiling custom printed vinyl installed edge-to-edge across conference rooms, hallways, and breakrooms.',
    when: 'Corporate offices, fitness gyms, clinics, and collaborative workspaces.',
  },
  {
    name: 'Textured Brick & Concrete Wrap',
    desc: 'High-conformability cast film heat-rolled with specialized foam rollers into mortar joints and masonry texture.',
    when: 'Industrial lofts, breweries, restaurants, and exposed-brick retail walls.',
  },
  {
    name: 'Etched & Frosted Glass Film',
    desc: 'Plotted 3M dusted crystal privacy bands, geometric patterns, and cut-out logos for glass office fronts.',
    when: 'Conference rooms, medical exam suites, and executive offices needing privacy.',
  },
]

const MURAL_SIZES = [
  { h: '8 ft x 10 ft Accent Wall', readable: 'Interior', stands: 'Room-wide', range: '$950 – $1,600', use: 'Small conference rooms, reception backdrops' },
  { h: '10 ft x 20 ft Feature Wall', readable: 'Interior', stands: 'Floor-wide', range: '$1,800 – $3,200', use: 'Main office hallways, fitness studios, showrooms' },
  { h: '12 ft x 30 ft+ Panorama', readable: 'Interior', stands: 'Multi-zone', range: '$2,900 – $5,500+', use: 'Corporate headquarters, school gyms, lobbies' },
  { h: 'Textured Brick Upgrade', readable: 'Interior', stands: 'Masonry', range: '+30% – 40%', use: 'Exposed brick, cinderblock, painted stucco' },
  { h: 'Frosted Glass Package', readable: 'Interior', stands: 'Glass fronts', range: '$12 – $22 / sq ft', use: 'Conference glass walls, clinic privacy bands' },
]

const MURAL_FAQ = [
  {
    q: 'How much do custom office wall murals cost in Dallas–Fort Worth?',
    a: 'Most commercial drywall murals run $10 to $16 per square foot installed, depending on wall height, surface texture, and artwork complexity. Textured brick murals run slightly higher due to cast film and heat-application labor.',
  },
  {
    q: 'Are your wall mural inks safe for medical offices and schools?',
    a: 'Yes. We print exclusively with UL GREENGUARD Gold certified HP Latex inks, which are odorless, water-based, and zero-VOC—safe for immediate occupancy in hospitals, clinics, and classrooms.',
  },
  {
    q: 'Can wall murals be removed when our lease ends?',
    a: 'Yes. Standard interior vinyl murals remove cleanly with gentle heat at lease-end, leaving the underlying drywall ready for a fresh coat of paint.',
  },
  {
    q: 'Does low-VOC or eggshell paint affect vinyl adhesion?',
    a: 'Some stain-resistant or zero-VOC paints resist standard adhesives. We perform a quick adhesion test during our site survey and specify 3M high-tack wall vinyl whenever needed.',
  },
  {
    q: 'How fast can you print and install an office wall mural?',
    a: 'Once artwork is approved, printing, laminating, and outgassing take 4 to 6 business days, with most single-wall installations completed in half a day.',
  },
]

export default function WallMuralsPage() {
  return (
    <div className="view" id="v-wall-murals">
      <FaqJsonLd items={MURAL_FAQ} />

      <section className="dark">
        <div className="wrap" style={{ paddingTop: 28, paddingBottom: 88 }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: 'var(--dmuted)' }}>
            <Link href="/" style={{ color: 'var(--dmuted)' }}>Home</Link>
            {' / '}
            <Link href="/signs" style={{ color: 'var(--dmuted)' }}>Signs</Link>
            {' / '}
            <span style={{ color: '#fff' }}>Wall murals &amp; graphics</span>
          </nav>

          <div className="cl-hero-grid">
            <div style={{ minWidth: 0 }}>
              <h1 className="disp sec-h" style={{ fontSize: 'clamp(32px, 3.8vw, 48px)', lineHeight: 1.02, margin: 0, maxWidth: 480 }}>
                Wall murals &amp; interior graphics for DFW spaces.
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--dsub)', margin: '22px 0 0', maxWidth: 480 }}>
                Large-format brand walls, frosted glass conference privacy film, and textured brick wraps. Printed odorless in-house and installed seamlessly by our DFW crew.
              </p>
              <dl className="facts">
                <div><dt>Typical project</dt><dd>$950 – $5.5k+</dd></div>
                <div><dt>Turnaround</dt><dd>5 – 8 days</dd></div>
                <div><dt>Inks</dt><dd>Zero-VOC Latex</dd></div>
              </dl>
              <div className="btn-row" style={{ marginTop: 30, gap: 12 }}>
                <Link className="btn btn-blue" href="/quote?type=interior">Quote my wall mural</Link>
                <Link className="btn btn-ghost" href="/toolkit#cost">Estimate project cost</Link>
              </div>
            </div>

            <div style={{ minWidth: 0 }}>
              <WallMuralDemo />
            </div>
          </div>
        </div>
      </section>

      <section className="light sec">
        <div className="wrap">
          <div className="eyebrow">What you&apos;re paying for</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>What goes into a commercial wall mural?</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, marginTop: 40, alignItems: 'center' }}>
            <div className="anat" aria-hidden="true" style={{ flex: '1 1 380px', minWidth: 0 }}>
              <div style={{ position: 'absolute', left: '12%', top: '16%', width: '76%', height: '64%', background: 'var(--navy)', borderRadius: 8 }} />
              <div style={{ position: 'absolute', left: '12%', top: '16%', width: '25%', height: '64%', borderRight: '2px dashed rgba(255,255,255,0.28)' }} />
              <div style={{ position: 'absolute', left: '37%', top: '16%', width: '25%', height: '64%', borderRight: '2px dashed rgba(255,255,255,0.28)' }} />
              <div style={{ position: 'absolute', left: '24%', top: '38%', width: '52%', height: 14, background: 'var(--blue)', borderRadius: 4 }} />
              <div style={{ position: 'absolute', left: '32%', top: '52%', width: '36%', height: 8, background: '#fff', borderRadius: 3 }} />

              <span className="pin" style={{ left: '20%', top: '28%' }}>1</span>
              <span className="pin" style={{ left: '50%', top: '24%' }}>2</span>
              <span className="pin" style={{ left: '72%', top: '42%' }}>3</span>
              <span className="pin" style={{ left: '37%', top: '64%' }}>4</span>
              <span className="pin" style={{ left: '16%', top: '76%' }}>5</span>
              <span className="pin" style={{ left: '50%', top: '54%' }}>6</span>
            </div>

            <ol className="parts" style={{ flex: '1 1 420px', minWidth: 0 }}>
              {MURAL_PARTS.map((p, i) => (
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

      <section className="paper sec">
        <div className="wrap">
          <div className="eyebrow">Surface &amp; Film Options</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>Engineered for every interior wall and glass surface.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 18, marginTop: 40 }}>
            {MURAL_MOUNTS.map((m) => (
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

      <section className="light sec">
        <div className="wrap">
          <div className="head-row">
            <div>
              <div className="eyebrow">Size &amp; price guide</div>
              <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>Typical wall mural sizes and budgets.</h2>
            </div>
            <Link className="btn btn-dark" href="/toolkit#cost">Open the cost calculator</Link>
          </div>
          <div className="tbl-wrap" style={{ marginTop: 36 }}>
            <table style={{ minWidth: 680 }}>
              <thead>
                <tr>
                  <th scope="col">Wall dimensions</th>
                  <th scope="col">Setting</th>
                  <th scope="col">Coverage</th>
                  <th scope="col">Typical price range</th>
                  <th scope="col">Common use</th>
                </tr>
              </thead>
              <tbody>
                {MURAL_SIZES.map((h) => (
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
          <p className="note">Pricing includes 3M commercial vinyl, matte UV lamination, and professional installation across Dallas–Fort Worth.</p>
        </div>
      </section>

      <ServiceProjectShowcase
        category="interior"
        title="Interior branding & office sign projects in DFW."
        subtitle="See how local headquarters, clinics, and studios elevate their interiors with dimensional logos and custom wall graphics."
      />

      <section className="paper sec">
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)', margin: 0 }}>Questions about wall murals</h2>
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span className="kv">Often paired with</span>
              <Link href="/lobby-signs" style={{ fontWeight: 700, color: 'var(--blue)' }}>Lobby &amp; logo walls →</Link>
              <Link href="/interior-ada-signs" style={{ fontWeight: 700, color: 'var(--blue)' }}>ADA &amp; wayfinding →</Link>
              <Link href="/window-graphics" style={{ fontWeight: 700, color: 'var(--blue)' }}>Window graphics →</Link>
            </div>
          </div>
          <div className="faq" style={{ flex: '2 1 520px', minWidth: 0 }}>
            <FAQAccordion items={MURAL_FAQ} />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--blue)', color: '#fff' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between', paddingTop: 64, paddingBottom: 64 }}>
          <div>
            <div className="disp" style={{ fontSize: 'clamp(30px,5vw,40px)', lineHeight: 1 }}>Turn blank walls into brand spaces.</div>
            <div style={{ color: '#E6EEFF', marginTop: 8, fontSize: 17 }}>Free on-site wall measurement, print proof, and quote within 24 hours.</div>
          </div>
          <div className="btn-row" style={{ gap: 12 }}>
            <Link className="btn btn-dark" href="/quote?type=interior">Get my free mockup</Link>
            <a className="btn btn-ghost" href="tel:2147144623">214-714-4623</a>
          </div>
        </div>
      </section>
    </div>
  )
}
