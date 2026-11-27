import type { Metadata } from 'next'
import Link from 'next/link'
import StorefrontDemo from '@/components/signs/StorefrontDemo'
import FAQAccordion from '@/components/ui/FAQAccordion'
import FaqJsonLd from '@/components/seo/FaqJsonLd'
import ServiceProjectShowcase from '@/components/common/ServiceProjectShowcase'

export const metadata: Metadata = {
  title: 'Custom Storefront Signs & Lightboxes Dallas–Fort Worth | Sign Zone',
  description:
    'Commercial storefront signs and illuminated lightbox cabinets in Dallas–Fort Worth. Great value, easy to update, built to landlord lease criteria and city codes.',
  alternates: {
    canonical: '/storefront-signs',
  },
  openGraph: {
    title: 'Custom Storefront Signs & Lightboxes Dallas–Fort Worth | Sign Zone',
    description:
      'Storefront lightboxes, dimensional letters, blade signs, and window graphics for DFW retail strips and commercial developments.',
    url: 'https://www.signzoneusa.com/storefront-signs',
  },
}

const STOREFRONT_PARTS = [
  {
    name: 'Extruded Aluminum Cabinet',
    desc: 'Welded, weather-sealed aluminum body with a baked-on industrial enamel finish that will not rust.',
  },
  {
    name: 'High-Impact Face Panel',
    desc: 'Unbreakable polycarbonate (Lexan) or heavy acrylic face with embossed or flat UV-cured graphics.',
  },
  {
    name: 'Structural Retainer Cap',
    desc: 'Hinged or screw-fastened perimeter frame that securely locks the face panel in place during high winds.',
  },
  {
    name: '12V Low-Voltage LED Array',
    desc: 'Uniform, high-efficiency Samsung LEDs that distribute edge-to-edge light with no dark spots.',
  },
  {
    name: 'Internal Water Weep Holes',
    desc: 'Concealed bottom drain ports that vent condensation and prevent moisture accumulation during Texas storms.',
  },
  {
    name: 'Facade Mounting Cleat / Raceway',
    desc: 'Structural aluminum wall bracket anchoring the cabinet directly into building studs or masonry fascia.',
  },
]

const STOREFRONT_MOUNTS = [
  {
    name: 'Flush Facade Mount',
    desc: 'The cabinet is bolted directly against the building exterior wall, concealing all wiring directly behind the sign.',
    when: 'Smooth brick, stucco, or EIFS building facades with rear attic electrical access.',
  },
  {
    name: 'Projecting Blade Mount',
    desc: 'Mounted perpendicularly to the storefront wall via an engineered cantilever bracket to catch sidewalk foot traffic.',
    when: 'Boutiques, cafes, historic shopping districts, and walkable lifestyle retail strips.',
  },
  {
    name: 'Raceway / Wireway Mount',
    desc: 'Mounted on an intermediate structural aluminum bar that carries the wiring, requiring fewer wall penetrations.',
    when: 'Strip centers where landlords require minimal holes in the building facade.',
  },
]

const STOREFRONT_SIZES = [
  { h: '3 ft x 8 ft', readable: '240 ft', stands: '80 ft', range: '$1,800 – $3,400', use: 'Small retail suites, boutique storefronts, nail salons' },
  { h: '4 ft x 10 ft', readable: '320 ft', stands: '110 ft', range: '$2,400 – $4,600', use: 'Standard shopping strip units, local restaurants, medical clinics' },
  { h: '5 ft x 14 ft', readable: '420 ft', stands: '140 ft', range: '$3,800 – $6,800', use: 'Anchor stores, auto service centers, neighborhood grocers' },
  { h: '6 ft x 20 ft', readable: '540 ft', stands: '180 ft', range: '$5,500 – $11,000+', use: 'Supermarkets, big-box retailers, furniture showrooms' },
  { h: 'Projecting Blade', readable: '120 ft', stands: '60 ft', range: '$1,400 – $3,800', use: 'Sidewalk pedestrian visibility in urban centers' },
]

const STOREFRONT_FAQ = [
  {
    q: 'How much do storefront cabinet and lightbox signs cost in DFW?',
    a: 'Most commercial storefront lightbox cabinets land between $2,000 and $7,500 including custom graphics, internal UL-listed LEDs, city permits, and installation. Cabinet dimensions, single vs. double face, and facade access are the primary price drivers.',
  },
  {
    q: 'Will my landlord approve a cabinet sign?',
    a: 'Most retail strip centers allow cabinet signs if they match the shopping center’s approved size ratio and raceway color. We review your lease sign criteria upfront and submit architectural proofs to your landlord for written approval before manufacturing.',
  },
  {
    q: 'Can I replace just the face if I already have a working box?',
    a: 'Yes! Face replacements are fast and economical. If your aluminum cabinet and wiring are in good shape, we can measure your box and slide in a brand-new polycarbonate face in 5 to 7 business days for a fraction of full replacement cost.',
  },
  {
    q: 'How long do LED storefront lightboxes last?',
    a: 'Our commercial-grade Samsung/SloanLED modules are rated for 50,000 hours of nightly operation—roughly 10 to 12 years of regular use. The extruded aluminum cabinet itself lasts decades with virtually zero maintenance.',
  },
  {
    q: 'Do storefront lightboxes need a dedicated timer or sensor?',
    a: 'Yes. Most Texas cities and commercial leases require exterior illuminated signs to operate on an automatic photocell (dusk-to-dawn) or a 7-day digital astronomic timer so the sign turns on and off automatically.',
  },
]

export default function StorefrontSignsPage() {
  return (
    <div className="view" id="v-storefront-signs">
      <FaqJsonLd items={STOREFRONT_FAQ} />

      {/* Hero Section */}
      <section className="dark">
        <div className="wrap" style={{ paddingTop: 28, paddingBottom: 88 }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: 'var(--dmuted)' }}>
            <Link href="/" style={{ color: 'var(--dmuted)' }}>Home</Link>
            {' / '}
            <Link href="/signs" style={{ color: 'var(--dmuted)' }}>Signs</Link>
            {' / '}
            <span style={{ color: '#fff' }}>Storefront signs</span>
          </nav>

          <div className="cl-hero-grid">
            <div style={{ minWidth: 0 }}>
              <h1 className="disp sec-h" style={{ fontSize: 'clamp(32px, 3.8vw, 48px)', lineHeight: 1.02, margin: 0, maxWidth: 480 }}>
                Storefront signs for DFW shops.
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--dsub)', margin: '22px 0 0', maxWidth: 480 }}>
                Illuminated lightbox cabinets, blade signs, and architectural storefront lettering. Great value, easy to update, and built strictly to landlord lease criteria.
              </p>
              <dl className="facts">
                <div><dt>Typical project</dt><dd>$2k – $12k+</dd></div>
                <div><dt>Timeline</dt><dd>2 – 4 weeks</dd></div>
                <div><dt>Efficiency</dt><dd>80% Less Power</dd></div>
                <div><dt>Components</dt><dd>UL 48 Listed</dd></div>
              </dl>
              <div className="btn-row" style={{ marginTop: 30, gap: 12 }}>
                <Link className="btn btn-blue" href="/quote?type=cabinet">Quote my storefront sign</Link>
                <Link className="btn btn-ghost" href="/toolkit#cost">Estimate cabinet cost</Link>
              </div>
            </div>

            <div style={{ minWidth: 0 }}>
              <StorefrontDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Anatomy */}
      <section className="light sec">
        <div className="wrap">
          <div className="eyebrow">What you&apos;re paying for</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>What goes into a storefront sign?</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, marginTop: 40, alignItems: 'center' }}>
            <div className="anat" aria-hidden="true" style={{ flex: '1 1 380px', minWidth: 0 }}>
              {/* Outer Cabinet Frame */}
              <div style={{ position: 'absolute', left: '16%', top: '20%', width: '68%', height: '54%', background: 'var(--navy)', borderRadius: 10, boxShadow: '0 12px 28px rgba(6,38,102,0.3)' }} />
              {/* Face Panel */}
              <div style={{ position: 'absolute', left: '20%', top: '24%', width: '60%', height: '46%', background: 'var(--blue)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ height: 10, width: '60%', background: '#fff', borderRadius: 3 }} />
              </div>
              {/* Perimeter Retainer */}
              <div style={{ position: 'absolute', left: '16%', top: '20%', width: '68%', height: '54%', border: '4px solid var(--text)', borderRadius: 10 }} />
              {/* Internal LEDs */}
              <div style={{ position: 'absolute', left: '26%', top: '38%', width: '48%', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
                <span style={{ height: 6, borderRadius: 2, background: 'var(--sky)' }} />
                <span style={{ height: 6, borderRadius: 2, background: 'var(--sky)' }} />
                <span style={{ height: 6, borderRadius: 2, background: 'var(--sky)' }} />
              </div>
              {/* Mounting Cleat Base */}
              <div style={{ position: 'absolute', left: '12%', right: '12%', bottom: '14%', height: 12, background: '#9AA3B2', borderRadius: 4 }} />

              {/* Numbered Pins */}
              <span className="pin" style={{ left: '12%', top: '24%' }}>1</span>
              <span className="pin" style={{ left: '50%', top: '28%' }}>2</span>
              <span className="pin" style={{ left: '80%', top: '16%' }}>3</span>
              <span className="pin" style={{ left: '38%', top: '48%' }}>4</span>
              <span className="pin" style={{ left: '24%', top: '70%' }}>5</span>
              <span className="pin" style={{ left: '50%', top: '82%' }}>6</span>
            </div>

            <ol className="parts" id="storefrontParts" style={{ flex: '1 1 420px', minWidth: 0 }}>
              {STOREFRONT_PARTS.map((p, i) => (
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
          <div className="eyebrow">Mounting options</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>How we attach them to your storefront.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 18, marginTop: 40 }} id="storefrontMounts">
            {STOREFRONT_MOUNTS.map((m) => (
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
                  <th scope="col">Cabinet dimensions</th>
                  <th scope="col">Readable up to</th>
                  <th scope="col">Stands out up to</th>
                  <th scope="col">Typical price range</th>
                  <th scope="col">Common use</th>
                </tr>
              </thead>
              <tbody id="storefrontSizes">
                {STOREFRONT_SIZES.map((h) => (
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
          <p className="note">Readable distance is based on road setback and roadway speed (U.S. Sign Council). Prices are complete turnkey estimates including UL electrical certification and local Texas installation.</p>
        </div>
      </section>

      {/* Real Project Proof */}
      <ServiceProjectShowcase
        category="storefront"
        title="Storefront and cabinet signs across Dallas–Fort Worth."
        subtitle="Extruded aluminum lightboxes, blade signs, and contour dimensional storefront logos."
      />

      {/* FAQ */}
      <section className="paper sec">
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)', margin: 0 }}>Questions about storefront signs</h2>
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span className="kv">Often paired with</span>
              <Link href="/channel-letters" style={{ fontWeight: 700, color: 'var(--blue)' }}>Channel letters →</Link>
              <Link href="/quote?type=window" style={{ fontWeight: 700, color: 'var(--blue)' }}>Window graphics &amp; hours →</Link>
              <Link href="/monument-signs" style={{ fontWeight: 700, color: 'var(--blue)' }}>Monument signs →</Link>
            </div>
          </div>
          <div className="faq" id="storefrontFaq" style={{ flex: '2 1 520px', minWidth: 0 }}>
            <FAQAccordion items={STOREFRONT_FAQ} />
          </div>
        </div>
      </section>

      {/* Blue CTA Bar */}
      <section style={{ background: 'var(--blue)', color: '#fff' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between', paddingTop: 64, paddingBottom: 64 }}>
          <div>
            <div className="disp" style={{ fontSize: 'clamp(30px,5vw,40px)', lineHeight: 1 }}>See your sign on your storefront.</div>
            <div style={{ color: '#E6EEFF', marginTop: 8, fontSize: 17 }}>Free photorealistic mockup, day and night, with your written quote.</div>
          </div>
          <div className="btn-row" style={{ gap: 12 }}>
            <Link className="btn btn-dark" href="/quote?type=cabinet">Get my free mockup</Link>
            <a className="btn btn-ghost" href="tel:2147144623">214-714-4623</a>
          </div>
        </div>
      </section>
    </div>
  )
}
