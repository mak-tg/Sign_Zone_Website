import type { Metadata } from 'next'
import Link from 'next/link'
import BladeDemo from '@/components/signs/BladeDemo'
import FAQAccordion from '@/components/ui/FAQAccordion'
import FaqJsonLd from '@/components/seo/FaqJsonLd'
import ServiceProjectShowcase from '@/components/common/ServiceProjectShowcase'

export const metadata: Metadata = {
  title: 'Custom Blade & Projecting Signs Dallas–Fort Worth | Sign Zone',
  description:
    'Double-sided blade and projecting sidewalk signs in Dallas–Fort Worth. Illuminated lightboxes, routed push-through cabinets, and architectural brackets for walkable retail.',
  alternates: {
    canonical: '/blade-signs',
  },
  openGraph: {
    title: 'Custom Blade & Projecting Signs Dallas–Fort Worth | Sign Zone',
    description:
      'Perpendicular projecting signs that capture sidewalk foot traffic in DFW lifestyle centers, historic downtowns, and urban storefronts.',
    url: 'https://www.signzoneusa.com/blade-signs',
  },
}

const BLADE_PARTS = [
  {
    name: 'Double-Sided Aluminum Cabinet',
    desc: 'Heavy-gauge welded aluminum housing built for 360-degree exposure and 115+ MPH Texas wind loads.',
  },
  {
    name: 'Structural Cantilever Bracket',
    desc: 'Engineered steel wall plate and diagonal gusset arm bolted into structural masonry or steel columns.',
  },
  {
    name: 'Routed or Polycarbonate Faces',
    desc: 'Push-through acrylic letters or high-impact Lexan faces on both sides for crisp legibility from either direction.',
  },
  {
    name: '12V Low-Voltage LED Modules',
    desc: 'UL-listed commercial LEDs inside the cabinet delivering bright, even illumination with minimal power draw.',
  },
  {
    name: 'Concealed Power Feed',
    desc: 'Low-voltage wiring routed cleanly through the hollow mounting arm into your building electrical junction.',
  },
  {
    name: 'Weatherproof Perimeter Seals',
    desc: 'Silicone gaskets and concealed weep holes keeping rainwater out during heavy North Texas storms.',
  },
]

const BLADE_MOUNTS = [
  {
    name: 'Cantilever Arm Mount',
    desc: 'A heavy steel horizontal arm with top and bottom mounting plates projecting the sign 24" to 48" from the wall.',
    when: 'Walkable retail centers like Legacy West, Bishop Arts, and Southlake Town Square.',
  },
  {
    name: 'Flush Spine Wall Mount',
    desc: 'The vertical spine of the blade cabinet bolts directly to a brick pier or storefront mullion with concealed fasteners.',
    when: 'Narrow pedestrian corridors and tight landlord clearance zones.',
  },
  {
    name: 'Under-Canopy / Soffit Drop',
    desc: 'Suspended from rigid threaded rods beneath a covered arcade or sidewalk awning at 8–9 ft clearance.',
    when: 'Covered strip center walkways where fascia signs are blocked by the overhang.',
  },
]

const BLADE_SIZES = [
  { h: '18" x 24" Under-Canopy', readable: '80 ft', stands: '35 ft', range: '$950 – $1,800', use: 'Covered walkways, suites, boutique entrances' },
  { h: '24" x 36" Standard Blade', readable: '140 ft', stands: '60 ft', range: '$1,600 – $3,200', use: 'Cafes, salons, urban retail storefronts' },
  { h: '30" x 48" Routed Cabinet', readable: '200 ft', stands: '85 ft', range: '$2,600 – $4,800', use: 'Restaurants, bars, corner retail spaces' },
  { h: '36" x 60" Vertical Marquee', readable: '280 ft', stands: '120 ft', range: '$4,200 – $7,500+', use: 'Theaters, hotels, multi-story downtown facades' },
  { h: 'Non-Lit Architectural', readable: '100 ft', stands: '45 ft', range: '$850 – $2,100', use: 'Historic districts with non-lit sign ordinances' },
]

const BLADE_FAQ = [
  {
    q: 'How high does a blade sign have to hang above a sidewalk?',
    a: 'Most DFW cities and shopping center landlords require a minimum clearance of 8 feet (96 inches) from the finished sidewalk to the bottom of the projecting sign so pedestrians can walk safely underneath.',
  },
  {
    q: 'Do projecting blade signs require city permits and engineering?',
    a: 'Yes. Because blade signs project outward over public or private walkways, cities require sign permits, electrical permits (if illuminated), and wind-load attachment details. Sign Zone handles the entire permit and landlord approval process.',
  },
  {
    q: 'Can a blade sign be double-sided with different graphics?',
    a: 'Yes. Both faces are fabricated independently, so you can keep identical branding on both sides or tailor messaging for incoming vs. outgoing traffic.',
  },
  {
    q: 'How far can a blade sign project from my storefront wall?',
    a: 'Typical landlord criteria and municipal codes allow 24 to 48 inches of projection from the building face, depending on sidewalk width and zoning district.',
  },
  {
    q: 'How long does it take to fabricate and install a blade sign?',
    a: 'Most custom blade and projecting signs take 3 to 5 weeks from design approval, including city permitting, custom bracket welding, and licensed installation.',
  },
]

export default function BladeSignsPage() {
  return (
    <div className="view" id="v-blade-signs">
      <FaqJsonLd items={BLADE_FAQ} />

      <section className="dark">
        <div className="wrap" style={{ paddingTop: 28, paddingBottom: 88 }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: 'var(--dmuted)' }}>
            <Link href="/" style={{ color: 'var(--dmuted)' }}>Home</Link>
            {' / '}
            <Link href="/signs" style={{ color: 'var(--dmuted)' }}>Signs</Link>
            {' / '}
            <span style={{ color: '#fff' }}>Blade &amp; projecting signs</span>
          </nav>

          <div className="cl-hero-grid">
            <div style={{ minWidth: 0 }}>
              <h1 className="disp sec-h" style={{ fontSize: 'clamp(32px, 3.8vw, 48px)', lineHeight: 1.02, margin: 0, maxWidth: 480 }}>
                Blade &amp; projecting signs for walkable storefronts.
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--dsub)', margin: '22px 0 0', maxWidth: 480 }}>
                Perpendicular double-sided signs that reach sidewalk pedestrians before they reach your door. Custom-engineered brackets, illuminated cabinets, and historic-district designs.
              </p>
              <dl className="facts">
                <div><dt>Typical project</dt><dd>$1.4k – $4.8k</dd></div>
                <div><dt>Timeline</dt><dd>3 – 5 weeks</dd></div>
                <div><dt>Clearance</dt><dd>8 ft+ code spec</dd></div>
                <div><dt>Visibility</dt><dd>Double-Sided</dd></div>
              </dl>
              <div className="btn-row" style={{ marginTop: 30, gap: 12 }}>
                <Link className="btn btn-blue" href="/quote?type=cabinet">Quote my blade sign</Link>
                <Link className="btn btn-ghost" href="/toolkit#cost">Estimate sign cost</Link>
              </div>
            </div>

            <div style={{ minWidth: 0 }}>
              <BladeDemo />
            </div>
          </div>
        </div>
      </section>

      <section className="light sec">
        <div className="wrap">
          <div className="eyebrow">What you&apos;re paying for</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>What goes into a blade sign?</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, marginTop: 40, alignItems: 'center' }}>
            <div className="anat" aria-hidden="true" style={{ flex: '1 1 380px', minWidth: 0 }}>
              <div style={{ position: 'absolute', left: '12%', top: '16%', width: '10%', height: '68%', background: '#64748B', borderRadius: 4 }} />
              <div style={{ position: 'absolute', left: '22%', top: '26%', width: '58%', height: 10, background: 'var(--navy)', borderRadius: 3 }} />
              <div style={{ position: 'absolute', left: '28%', top: '36%', width: '48%', height: '40%', background: 'var(--blue)', borderRadius: 8, boxShadow: '0 12px 24px rgba(0,80,240,0.3)' }} />
              <div style={{ position: 'absolute', left: '34%', top: '48%', width: '36%', height: 12, background: '#fff', borderRadius: 3 }} />

              <span className="pin" style={{ left: '52%', top: '34%' }}>1</span>
              <span className="pin" style={{ left: '18%', top: '24%' }}>2</span>
              <span className="pin" style={{ left: '52%', top: '54%' }}>3</span>
              <span className="pin" style={{ left: '38%', top: '66%' }}>4</span>
              <span className="pin" style={{ left: '26%', top: '30%' }}>5</span>
              <span className="pin" style={{ left: '74%', top: '72%' }}>6</span>
            </div>

            <ol className="parts" style={{ flex: '1 1 420px', minWidth: 0 }}>
              {BLADE_PARTS.map((p, i) => (
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
          <div className="eyebrow">Mounting Options</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>How we mount projecting signs on your facade.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 18, marginTop: 40 }}>
            {BLADE_MOUNTS.map((m) => (
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
              <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>Blade sign dimensions, reach, and budgets.</h2>
            </div>
            <Link className="btn btn-dark" href="/toolkit#cost">Open the cost calculator</Link>
          </div>
          <div className="tbl-wrap" style={{ marginTop: 36 }}>
            <table style={{ minWidth: 680 }}>
              <thead>
                <tr>
                  <th scope="col">Blade size</th>
                  <th scope="col">Readable up to</th>
                  <th scope="col">Stands out up to</th>
                  <th scope="col">Typical price range</th>
                  <th scope="col">Common use</th>
                </tr>
              </thead>
              <tbody>
                {BLADE_SIZES.map((h) => (
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
          <p className="note">All projecting blade signs include double-sided graphics, structural mounting brackets, and UL-listed illumination where specified.</p>
        </div>
      </section>

      <ServiceProjectShowcase
        category="storefront"
        title="Storefront & projecting sign installations in DFW."
        subtitle="See how local restaurants, coffee houses, and retail shops pair blade signs with their primary storefront branding."
      />

      <section className="paper sec">
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)', margin: 0 }}>Questions about blade signs</h2>
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span className="kv">Often paired with</span>
              <Link href="/storefront-signs" style={{ fontWeight: 700, color: 'var(--blue)' }}>Storefront &amp; cabinet signs →</Link>
              <Link href="/window-graphics" style={{ fontWeight: 700, color: 'var(--blue)' }}>Window graphics →</Link>
              <Link href="/channel-letters" style={{ fontWeight: 700, color: 'var(--blue)' }}>Channel letters →</Link>
            </div>
          </div>
          <div className="faq" style={{ flex: '2 1 520px', minWidth: 0 }}>
            <FAQAccordion items={BLADE_FAQ} />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--blue)', color: '#fff' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between', paddingTop: 64, paddingBottom: 64 }}>
          <div>
            <div className="disp" style={{ fontSize: 'clamp(30px,5vw,40px)', lineHeight: 1 }}>Catch every pedestrian walking by.</div>
            <div style={{ color: '#E6EEFF', marginTop: 8, fontSize: 17 }}>Free storefront mockup, landlord criteria review, and written quote in 24 hours.</div>
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
