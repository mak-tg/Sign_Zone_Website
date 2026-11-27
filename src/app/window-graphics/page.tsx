import type { Metadata } from 'next'
import Link from 'next/link'
import WindowGraphicsDemo from '@/components/signs/WindowGraphicsDemo'
import FAQAccordion from '@/components/ui/FAQAccordion'
import FaqJsonLd from '@/components/seo/FaqJsonLd'
import ServiceProjectShowcase from '@/components/common/ServiceProjectShowcase'

export const metadata: Metadata = {
  title: 'Storefront Window Graphics & Vinyl Lettering DFW | Sign Zone',
  description:
    'Custom storefront window graphics, business hours vinyl, perforated one-way window film, and frosted glass privacy vinyl in Dallas–Fort Worth.',
  alternates: {
    canonical: '/window-graphics',
  },
  openGraph: {
    title: 'Storefront Window Graphics & Vinyl Lettering DFW | Sign Zone',
    description:
      'Turn storefront glass into 24/7 advertising with cut vinyl lettering, 50/50 perforated film, and etched privacy glass.',
    url: 'https://www.signzoneusa.com/window-graphics',
  },
}

const WINDOW_PARTS = [
  {
    name: 'High-Performance 3M Vinyl',
    desc: '7-year outdoor-rated cast or polymeric vinyl engineered to resist shrinking, cracking, and peeling in Texas sun.',
  },
  {
    name: '50/50 Micro-Perforated Film',
    desc: 'One-way vision film displaying vibrant full-color promos outside while keeping clear outward visibility from inside.',
  },
  {
    name: 'Optically Clear UV Laminate',
    desc: 'Essential for perforated window graphics—seals the micro-holes against rain, dust, and window-washing squeegees.',
  },
  {
    name: 'Dusted & Frosted Crystal Film',
    desc: 'Translucent etched-glass vinyl that provides daytime privacy and filters glare without darkening your interior.',
  },
  {
    name: 'Precision Glass Prep',
    desc: 'Razor-scraped, isopropyl-cleaned storefront glass ensuring bubble-free, edge-sealed application.',
  },
  {
    name: 'Code-Compliant Coverage',
    desc: 'Sized to meet local DFW city limits (typically 25%–50% max glass coverage) and fire-department visibility rules.',
  },
]

const WINDOW_MOUNTS = [
  {
    name: 'Cut Vinyl Logo & Hours',
    desc: 'Clean die-cut lettering on your entry door showing business logo, hours, phone, and website.',
    when: 'Every retail storefront, restaurant, and medical office entrance.',
  },
  {
    name: 'Full-Coverage Perforated Film',
    desc: 'Edge-to-edge full-color photographic graphics applied to storefront panes with clear one-way visibility.',
    when: 'Gyms, salons, clinics, and retail shops wanting high-impact street advertising.',
  },
  {
    name: 'Etched Frosted Privacy Bands',
    desc: 'Custom-cut frosted glass bands with reverse-cut logos hiding waiting rooms or back-of-house areas.',
    when: 'Dental/medical suites, law firms, spas, and financial offices.',
  },
]

const WINDOW_SIZES = [
  { h: 'Entry Door Logo & Hours', readable: '30 ft', stands: '15 ft', range: '$180 – $380', use: 'Storefront entry doors, suite numbers, hours' },
  { h: '2–3 Storefront Panes', readable: '80 ft', stands: '40 ft', range: '$450 – $1,100', use: 'Service lists, promotional callouts, frosted bands' },
  { h: 'Full Perforated Storefront', readable: '160 ft', stands: '80 ft', range: '$1,100 – $2,800', use: 'Fitness studios, salons, quick-service dining' },
  { h: 'Seasonal Promo Vinyl', readable: '100 ft', stands: '50 ft', range: '$300 – $900', use: 'Short-term campaigns, grand openings, leasing' },
  { h: 'Interior Glass Suite', readable: '40 ft', stands: '20 ft', range: '$650 – $2,200', use: 'Conference room frosted privacy & brand strips' },
]

const WINDOW_FAQ = [
  {
    q: 'Do storefront window graphics require a city sign permit in DFW?',
    a: 'Most DFW cities allow small door hours and up to 20–25% window coverage without a permit, though rules vary by city and shopping center lease. We check your city limits before printing.',
  },
  {
    q: 'Can people see inside through perforated window film?',
    a: 'During the day, outsiders see your vibrant full-color print while your staff can see straight out. At night when interior lights are brighter than outside, silhouettes become slightly visible from the street.',
  },
  {
    q: 'How long do exterior window graphics last in Texas heat?',
    a: 'With UV overlaminate, 3M cast cut vinyl lasts 5 to 7+ years and perforated window film lasts 3 to 5 years before fading or needing a refresh.',
  },
  {
    q: 'Should window graphics go on the inside or outside of the glass?',
    a: 'Cut vinyl logos and frosted films can be reverse-cut for inside mounting (protecting them from vandalism), while perforated one-way film is always installed on the exterior glass so interior tint does not dull the colors.',
  },
  {
    q: 'How fast can you produce and install window graphics?',
    a: 'Most door hours and storefront window packages are printed and installed within 3 to 5 business days.',
  },
]

export default function WindowGraphicsPage() {
  return (
    <div className="view" id="v-window-graphics">
      <FaqJsonLd items={WINDOW_FAQ} />

      <section className="dark">
        <div className="wrap" style={{ paddingTop: 28, paddingBottom: 88 }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: 'var(--dmuted)' }}>
            <Link href="/" style={{ color: 'var(--dmuted)' }}>Home</Link>
            {' / '}
            <Link href="/signs" style={{ color: 'var(--dmuted)' }}>Signs</Link>
            {' / '}
            <span style={{ color: '#fff' }}>Window graphics</span>
          </nav>

          <div className="cl-hero-grid">
            <div style={{ minWidth: 0 }}>
              <h1 className="disp sec-h" style={{ fontSize: 'clamp(32px, 3.8vw, 48px)', lineHeight: 1.02, margin: 0, maxWidth: 480 }}>
                Window graphics &amp; storefront vinyl for DFW.
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--dsub)', margin: '22px 0 0', maxWidth: 480 }}>
                Entry door hours, full-color perforated window film, and frosted privacy glass. Fast turnaround that turns empty storefront glass into 24/7 street-level marketing.
              </p>
              <dl className="facts">
                <div><dt>Typical project</dt><dd>$200 – $3k+</dd></div>
                <div><dt>Turnaround</dt><dd>3 – 5 days</dd></div>
                <div><dt>Material</dt><dd>3M UV Vinyl</dd></div>
                <div><dt>Options</dt><dd>Perf / Frosted</dd></div>
              </dl>
              <div className="btn-row" style={{ marginTop: 30, gap: 12 }}>
                <Link className="btn btn-blue" href="/quote?type=window">Quote my window graphics</Link>
                <Link className="btn btn-ghost" href="/toolkit#cost">Estimate project cost</Link>
              </div>
            </div>

            <div style={{ minWidth: 0 }}>
              <WindowGraphicsDemo />
            </div>
          </div>
        </div>
      </section>

      <section className="light sec">
        <div className="wrap">
          <div className="eyebrow">What you&apos;re paying for</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>What goes into commercial window graphics?</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, marginTop: 40, alignItems: 'center' }}>
            <div className="anat" aria-hidden="true" style={{ flex: '1 1 380px', minWidth: 0 }}>
              <div style={{ position: 'absolute', left: '14%', top: '16%', width: '72%', height: '66%', background: '#0F172A', border: '6px solid #64748B', borderRadius: 6 }} />
              <div style={{ position: 'absolute', left: '18%', top: '20%', width: '30%', height: '58%', background: 'var(--blue)', borderRadius: 4 }} />
              <div style={{ position: 'absolute', left: '52%', top: '20%', width: '30%', height: '58%', background: '#1E293B', borderRadius: 4 }} />
              <div style={{ position: 'absolute', left: '56%', top: '42%', width: '22%', height: 10, background: '#fff', borderRadius: 2 }} />

              <span className="pin" style={{ left: '66%', top: '34%' }}>1</span>
              <span className="pin" style={{ left: '32%', top: '36%' }}>2</span>
              <span className="pin" style={{ left: '24%', top: '58%' }}>3</span>
              <span className="pin" style={{ left: '66%', top: '62%' }}>4</span>
              <span className="pin" style={{ left: '46%', top: '22%' }}>5</span>
              <span className="pin" style={{ left: '80%', top: '72%' }}>6</span>
            </div>

            <ol className="parts" style={{ flex: '1 1 420px', minWidth: 0 }}>
              {WINDOW_PARTS.map((p, i) => (
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
          <div className="eyebrow">Film &amp; Lettering Options</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>Match your glass graphics to your storefront goals.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 18, marginTop: 40 }}>
            {WINDOW_MOUNTS.map((m) => (
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
              <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>Storefront glass packages and budgets.</h2>
            </div>
            <Link className="btn btn-dark" href="/toolkit#cost">Open the cost calculator</Link>
          </div>
          <div className="tbl-wrap" style={{ marginTop: 36 }}>
            <table style={{ minWidth: 680 }}>
              <thead>
                <tr>
                  <th scope="col">Package scope</th>
                  <th scope="col">Readable up to</th>
                  <th scope="col">Stands out up to</th>
                  <th scope="col">Typical price range</th>
                  <th scope="col">Common use</th>
                </tr>
              </thead>
              <tbody>
                {WINDOW_SIZES.map((h) => (
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
          <p className="note">Pricing includes glass prep, custom vinyl printing/cutting, UV lamination on printed graphics, and DFW installation.</p>
        </div>
      </section>

      <ServiceProjectShowcase
        category="storefront"
        title="Storefront sign & glass branding in DFW."
        subtitle="See how local businesses pair clean window vinyl with primary channel letters and cabinet signs."
      />

      <section className="paper sec">
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)', margin: 0 }}>Questions about window graphics</h2>
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span className="kv">Often paired with</span>
              <Link href="/channel-letters" style={{ fontWeight: 700, color: 'var(--blue)' }}>Channel letters →</Link>
              <Link href="/storefront-signs" style={{ fontWeight: 700, color: 'var(--blue)' }}>Storefront &amp; cabinet signs →</Link>
              <Link href="/banners-temporary" style={{ fontWeight: 700, color: 'var(--blue)' }}>Banners &amp; temporary →</Link>
            </div>
          </div>
          <div className="faq" style={{ flex: '2 1 520px', minWidth: 0 }}>
            <FAQAccordion items={WINDOW_FAQ} />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--blue)', color: '#fff' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between', paddingTop: 64, paddingBottom: 64 }}>
          <div>
            <div className="disp" style={{ fontSize: 'clamp(30px,5vw,40px)', lineHeight: 1 }}>Make your storefront glass work for you.</div>
            <div style={{ color: '#E6EEFF', marginTop: 8, fontSize: 17 }}>Free on-site glass measurement, layout proof, and 24-hour quote.</div>
          </div>
          <div className="btn-row" style={{ gap: 12 }}>
            <Link className="btn btn-dark" href="/quote?type=window">Get my free mockup</Link>
            <a className="btn btn-ghost" href="tel:2147144623">214-714-4623</a>
          </div>
        </div>
      </section>
    </div>
  )
}
