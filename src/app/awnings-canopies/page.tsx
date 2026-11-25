import type { Metadata } from 'next'
import Link from 'next/link'
import AwningDemo from '@/components/signs/AwningDemo'
import FAQAccordion from '@/components/ui/FAQAccordion'
import FaqJsonLd from '@/components/seo/FaqJsonLd'
import ServiceProjectShowcase from '@/components/common/ServiceProjectShowcase'

export const metadata: Metadata = {
  title: 'Commercial Awnings & Canopies Dallas–Fort Worth | Sign Zone',
  description:
    'Custom branded awnings, backlit vinyl canopies, and architectural metal canopies in Dallas–Fort Worth. Built to shade entrances and showcase your storefront brand.',
  alternates: {
    canonical: '/awnings-canopies',
  },
  openGraph: {
    title: 'Commercial Awnings & Canopies Dallas–Fort Worth | Sign Zone',
    description:
      'Branded Sunbrella fabric awnings, backlit canopies, and extruded aluminum entrance canopies engineered for North Texas storefronts.',
    url: 'https://www.signzoneusa.com/awnings-canopies',
  },
}

const AWNING_PARTS = [
  {
    name: 'Welded Aluminum Frame',
    desc: 'Custom-bent, TIG-welded 6061 aluminum tubing engineered for rust-free strength and heavy wind loads.',
  },
  {
    name: 'Sunbrella or Coated Vinyl Skin',
    desc: 'Fade-resistant solution-dyed acrylic fabric or translucent backlit Cooley/3M vinyl tensioned taut over the frame.',
  },
  {
    name: 'Heat-Applied Valance Graphics',
    desc: 'Crisp logo marks and street numbers applied to the front valance or sloped face for immediate curb identification.',
  },
  {
    name: 'Internal LED Lighting (Optional)',
    desc: 'Sealed 12V LED strips or downward soffit fixtures illuminating both the canopy face and the entrance walkway below.',
  },
  {
    name: 'Structural Z-Clip & Ledger Mount',
    desc: 'Continuous aluminum wall ledger anchored directly into masonry, steel studs, or storefront structural headers.',
  },
  {
    name: 'Under-Side Finishing / Drip Edge',
    desc: 'Clean lace-on or staple-channel trim with aluminum drip channels directing rainwater clear of entry doors.',
  },
]

const AWNING_MOUNTS = [
  {
    name: 'Traditional Sloped Fabric Awning',
    desc: 'Classic angled storefront profile wrapped in woven Sunbrella canvas with custom valance lettering.',
    when: 'Restaurants, cafes, boutiques, and retail strips needing shade and brand color.',
  },
  {
    name: 'Backlit Translucent Canopy',
    desc: 'Internally illuminated coated vinyl canopy that transforms your awning into a glowing storefront sign at night.',
    when: 'Evening dining, entertainment venues, and high-traffic retail corridors.',
  },
  {
    name: 'Architectural Metal Extruded Canopy',
    desc: 'Flat cantilevered aluminum deck suspended by stainless steel tie-rods with dimensional fascia signage.',
    when: 'Modern medical plazas, office buildings, and Class-A retail centers.',
  },
]

const AWNING_SIZES = [
  { h: '6 ft – 8 ft Single Door', readable: '120 ft', stands: '45 ft', range: '$1,800 – $3,400', use: 'Single retail entries, suite doors, small cafes' },
  { h: '10 ft – 16 ft Storefront', readable: '200 ft', stands: '75 ft', range: '$3,200 – $6,500', use: 'Standard strip center bays, restaurants, salons' },
  { h: '20 ft – 30 ft Wide Span', readable: '300 ft', stands: '110 ft', range: '$5,800 – $12,000+', use: 'Corner storefronts, patios, multi-bay retail' },
  { h: 'Backlit Vinyl Upgrade', readable: '320 ft', stands: '130 ft', range: '+30% – 40%', use: 'Evening visibility, theaters, 24-hour businesses' },
  { h: 'Metal Tie-Rod Canopy', readable: '240 ft', stands: '90 ft', range: '$4,800 – $14,000+', use: 'Modern medical offices and corporate lobbies' },
]

const AWNING_FAQ = [
  {
    q: 'How long do commercial Sunbrella and vinyl awnings last in Texas?',
    a: 'Woven Sunbrella acrylic fabric typically lasts 8 to 12+ years against intense Texas UV exposure, while the underlying welded aluminum frame lasts decades. Recovering an existing frame is fast and economical.',
  },
  {
    q: 'Do commercial awnings count toward my city sign square-footage allowance?',
    a: 'Usually only the printed graphic area on the valance or slope counts toward your municipal sign allowance, while the awning structure itself requires a building/awning permit. We verify both codes for your city.',
  },
  {
    q: 'Can you replace torn fabric on an existing awning frame?',
    a: 'Yes! If your aluminum frame is structurally sound, we can measure it on-site, fabricate a fresh Sunbrella or vinyl cover with your updated logo, and re-skin it without replacing the steel/aluminum structure.',
  },
  {
    q: 'Can lights be added underneath an awning to brighten my sidewalk?',
    a: 'Yes. We can integrate downward-facing recessed LED soffit lights or full internal backlighting powered through a dusk-to-dawn photocell.',
  },
  {
    q: 'How long does custom awning fabrication and installation take?',
    a: 'Most branded storefront awnings take 3 to 6 weeks from design approval, depending on municipal permit review and fabric lead times.',
  },
]

export default function AwningsCanopiesPage() {
  return (
    <div className="view" id="v-awnings-canopies">
      <FaqJsonLd items={AWNING_FAQ} />

      <section className="dark">
        <div className="wrap" style={{ paddingTop: 28, paddingBottom: 88 }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: 'var(--dmuted)' }}>
            <Link href="/" style={{ color: 'var(--dmuted)' }}>Home</Link>
            {' / '}
            <Link href="/signs" style={{ color: 'var(--dmuted)' }}>Signs</Link>
            {' / '}
            <span style={{ color: '#fff' }}>Awnings &amp; canopies</span>
          </nav>

          <div className="cl-hero-grid">
            <div style={{ minWidth: 0 }}>
              <h1 className="disp sec-h" style={{ fontSize: 'clamp(32px, 3.8vw, 48px)', lineHeight: 1.02, margin: 0, maxWidth: 480 }}>
                Branded awnings &amp; canopies for DFW storefronts.
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--dsub)', margin: '22px 0 0', maxWidth: 480 }}>
                Custom-welded architectural shade with crisp printed or illuminated lettering. Keep guests cool, lower storefront AC glare, and add unmistakable curb presence.
              </p>
              <dl className="facts">
                <div><dt>Typical project</dt><dd>$2.2k – $12k+</dd></div>
                <div><dt>Timeline</dt><dd>3 – 6 weeks</dd></div>
                <div><dt>Fabric life</dt><dd>8 – 12+ yrs UV</dd></div>
              </dl>
              <div className="btn-row" style={{ marginTop: 30, gap: 12 }}>
                <Link className="btn btn-blue" href="/quote?type=help">Quote my awning</Link>
                <Link className="btn btn-ghost" href="/toolkit#cost">Estimate project cost</Link>
              </div>
            </div>

            <div style={{ minWidth: 0 }}>
              <AwningDemo />
            </div>
          </div>
        </div>
      </section>

      <section className="light sec">
        <div className="wrap">
          <div className="eyebrow">What you&apos;re paying for</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>What goes into a commercial awning?</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, marginTop: 40, alignItems: 'center' }}>
            <div className="anat" aria-hidden="true" style={{ flex: '1 1 380px', minWidth: 0 }}>
              <div style={{ position: 'absolute', left: '16%', top: '24%', width: '68%', height: '32%', background: 'var(--blue)', borderRadius: '6px 6px 0 0', transform: 'perspective(300px) rotateX(22deg)' }} />
              <div style={{ position: 'absolute', left: '13%', top: '54%', width: '74%', height: '14%', background: 'var(--navy)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ height: 6, width: '50%', background: '#fff', borderRadius: 2 }} />
              </div>
              <div style={{ position: 'absolute', left: '18%', top: '20%', width: '64%', height: 6, background: '#94A3B8', borderRadius: 2 }} />

              <span className="pin" style={{ left: '26%', top: '34%' }}>1</span>
              <span className="pin" style={{ left: '54%', top: '38%' }}>2</span>
              <span className="pin" style={{ left: '50%', top: '61%' }}>3</span>
              <span className="pin" style={{ left: '72%', top: '58%' }}>4</span>
              <span className="pin" style={{ left: '20%', top: '20%' }}>5</span>
              <span className="pin" style={{ left: '84%', top: '66%' }}>6</span>
            </div>

            <ol className="parts" style={{ flex: '1 1 420px', minWidth: 0 }}>
              {AWNING_PARTS.map((p, i) => (
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
          <div className="eyebrow">Canopy Profiles</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>Choose the canopy style for your building.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 18, marginTop: 40 }}>
            {AWNING_MOUNTS.map((m) => (
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
              <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>Typical awning spans and budgets.</h2>
            </div>
            <Link className="btn btn-dark" href="/toolkit#cost">Open the cost calculator</Link>
          </div>
          <div className="tbl-wrap" style={{ marginTop: 36 }}>
            <table style={{ minWidth: 680 }}>
              <thead>
                <tr>
                  <th scope="col">Awning span</th>
                  <th scope="col">Readable up to</th>
                  <th scope="col">Stands out up to</th>
                  <th scope="col">Typical price range</th>
                  <th scope="col">Common use</th>
                </tr>
              </thead>
              <tbody>
                {AWNING_SIZES.map((h) => (
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
          <p className="note">Pricing includes welded aluminum framing, Sunbrella or backlit vinyl covering, custom graphics, and standard installation.</p>
        </div>
      </section>

      <ServiceProjectShowcase
        category="storefront"
        title="Storefront transformations across Dallas–Fort Worth."
        subtitle="See how local businesses combine architectural facades, dimensional lettering, and entrance branding."
      />

      <section className="paper sec">
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)', margin: 0 }}>Questions about awnings &amp; canopies</h2>
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span className="kv">Often paired with</span>
              <Link href="/window-graphics" style={{ fontWeight: 700, color: 'var(--blue)' }}>Window graphics →</Link>
              <Link href="/blade-signs" style={{ fontWeight: 700, color: 'var(--blue)' }}>Blade &amp; projecting signs →</Link>
              <Link href="/channel-letters" style={{ fontWeight: 700, color: 'var(--blue)' }}>Channel letters →</Link>
            </div>
          </div>
          <div className="faq" style={{ flex: '2 1 520px', minWidth: 0 }}>
            <FAQAccordion items={AWNING_FAQ} />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--blue)', color: '#fff' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between', paddingTop: 64, paddingBottom: 64 }}>
          <div>
            <div className="disp" style={{ fontSize: 'clamp(30px,5vw,40px)', lineHeight: 1 }}>Give your storefront shade and presence.</div>
            <div style={{ color: '#E6EEFF', marginTop: 8, fontSize: 17 }}>Free on-site measurement, fabric swatch review, and quote within 24 hours.</div>
          </div>
          <div className="btn-row" style={{ gap: 12 }}>
            <Link className="btn btn-dark" href="/quote?type=help">Get my free mockup</Link>
            <a className="btn btn-ghost" href="tel:2147144623">214-714-4623</a>
          </div>
        </div>
      </section>
    </div>
  )
}
