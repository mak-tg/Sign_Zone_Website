import type { Metadata } from 'next'
import Link from 'next/link'
import LedMessageDemo from '@/components/signs/LedMessageDemo'
import FAQAccordion from '@/components/ui/FAQAccordion'
import FaqJsonLd from '@/components/seo/FaqJsonLd'
import ServiceProjectShowcase from '@/components/common/ServiceProjectShowcase'

export const metadata: Metadata = {
  title: 'LED Message Centers & Digital Monument Signs DFW | Sign Zone',
  description:
    'Programmable full-color LED message centers (EMCs) for pylons, monuments, churches, and schools in Dallas–Fort Worth. Daylight-bright 6mm–16mm displays.',
  alternates: {
    canonical: '/led-message-centers',
  },
  openGraph: {
    title: 'LED Message Centers & Digital Monument Signs DFW | Sign Zone',
    description:
      'High-brightness programmable LED signs for DFW churches, schools, retail centers, and highway pylons.',
    url: 'https://www.signzoneusa.com/led-message-centers',
  },
}

const LED_PARTS = [
  {
    name: 'IP65 Weatherproof LED Modules',
    desc: 'Sealed front-serviceable SMD pixel tiles rated for 100,000+ hours in extreme Texas heat and storms.',
  },
  {
    name: 'Auto-Dimming Light Sensor',
    desc: 'Built-in photocell automatically scales brightness from 8,000+ nits at noon down to code-compliant night levels.',
  },
  {
    name: 'Cloud 4G/LTE & Wi-Fi Controller',
    desc: 'Update promotions, service times, and graphics from any browser or phone without trenching data cables.',
  },
  {
    name: 'Extruded Aluminum Thermal Cabinet',
    desc: 'Thermostatically controlled ventilation and zero-rust aluminum chassis keeping internal drivers cool.',
  },
  {
    name: 'Sealed Power & Surge Protection',
    desc: 'Industrial UL-listed power supplies with integrated lightning/surge suppression for roadside reliability.',
  },
  {
    name: 'Engineered Monument or Pylon Base',
    desc: 'Sealed TX PE structural steel and concrete foundation integrating your digital board with permanent ID signage.',
  },
]

const LED_MOUNTS = [
  {
    name: 'Monument + EMC Combo',
    desc: 'Permanent architectural header with illuminated logo above a full-color programmable LED display.',
    when: 'Churches, schools, municipal buildings, and multi-tenant plazas.',
  },
  {
    name: 'Highway Pylon + EMC',
    desc: 'Elevated 16mm high-brightness display mounted on a steel pole structure for 65+ MPH traffic.',
    when: 'Auto dealerships, gas stations, and highway-frontage retail centers.',
  },
  {
    name: 'Wall-Mounted Digital Marquee',
    desc: 'Flush facade-mounted 6mm or 10mm LED display cabinet wired directly to building power.',
    when: 'Theaters, entertainment venues, and urban commercial corners.',
  },
]

const LED_SIZES = [
  { h: '3 ft x 6 ft (10mm)', readable: '220 ft', stands: '90 ft', range: '$9,500 – $16,000', use: 'Small churches, clinics, neighborhood retail' },
  { h: '4 ft x 8 ft (10mm)', readable: '320 ft', stands: '130 ft', range: '$14,000 – $24,000', use: 'Schools, civic centers, busy arterial roads' },
  { h: '4 ft x 8 ft (6mm HD)', readable: '280 ft', stands: '120 ft', range: '$19,000 – $32,000', use: 'Close-range city streets, photo-sharp graphics' },
  { h: '5 ft x 10 ft (16mm)', readable: '500 ft', stands: '200 ft', range: '$22,000 – $42,000+', use: 'Highway frontage pylons, auto dealerships' },
  { h: 'Full Monument + EMC', readable: '450+ ft', stands: '180+ ft', range: '$25,000 – $85,000+', use: 'Turnkey masonry base, ID header, and LED board' },
]

const LED_FAQ = [
  {
    q: 'Are LED message centers allowed in my DFW city?',
    a: 'Every Texas municipality has specific EMC rules covering brightness limits, minimum hold times (usually 8–10 seconds between messages), zoning districts, and maximum percentage of sign area. We verify your exact parcel zoning before quoting.',
  },
  {
    q: 'What pixel pitch should I choose: 6mm, 10mm, or 16mm?',
    a: 'Lower numbers mean tighter pixels and sharper images up close. Choose 6mm for slow urban streets (< 45 mph), 10mm for most arterial roads (the DFW sweet spot), and 16mm for tall highway pylons.',
  },
  {
    q: 'How do I update messages on the LED sign?',
    a: 'Every Sign Zone EMC includes cloud-based scheduling software accessible from your laptop or smartphone over cellular LTE or Wi-Fi—no proprietary desktop PC required.',
  },
  {
    q: 'Can you retrofit an LED message center into my existing monument or pylon?',
    a: 'Yes! If your steel structure and electrical feed are in good condition, we can replace dated readerboards or static cabinets with a new full-color LED display.',
  },
  {
    q: 'What warranty comes with Sign Zone LED message centers?',
    a: 'Our commercial EMC cabinets carry a 5-year parts warranty with UL 48 certification and local DFW service support.',
  },
]

export default function LedMessageCentersPage() {
  return (
    <div className="view" id="v-led-message-centers">
      <FaqJsonLd items={LED_FAQ} />

      <section className="dark">
        <div className="wrap" style={{ paddingTop: 28, paddingBottom: 88 }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: 'var(--dmuted)' }}>
            <Link href="/" style={{ color: 'var(--dmuted)' }}>Home</Link>
            {' / '}
            <Link href="/signs" style={{ color: 'var(--dmuted)' }}>Signs</Link>
            {' / '}
            <span style={{ color: '#fff' }}>LED message centers</span>
          </nav>

          <div className="cl-hero-grid">
            <div style={{ minWidth: 0 }}>
              <h1 className="disp sec-h" style={{ fontSize: 'clamp(32px, 3.8vw, 48px)', lineHeight: 1.02, margin: 0, maxWidth: 480 }}>
                Programmable LED message centers for DFW.
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--dsub)', margin: '22px 0 0', maxWidth: 480 }}>
                Daylight-bright full-color digital displays integrated into monuments, pylons, or building facades. Update promotions, events, and schedules from your phone in seconds.
              </p>
              <dl className="facts">
                <div><dt>Typical project</dt><dd>$9.5k – $85k+</dd></div>
                <div><dt>Timeline</dt><dd>6 – 10 weeks</dd></div>
                <div><dt>Warranty</dt><dd>5-Year Parts</dd></div>
              </dl>
              <div className="btn-row" style={{ marginTop: 30, gap: 12 }}>
                <Link className="btn btn-blue" href="/quote?type=digital">Quote my LED display</Link>
                <Link className="btn btn-ghost" href="/toolkit#permits">Check zoning rules</Link>
              </div>
            </div>

            <div style={{ minWidth: 0 }}>
              <LedMessageDemo />
            </div>
          </div>
        </div>
      </section>

      <section className="light sec">
        <div className="wrap">
          <div className="eyebrow">What you&apos;re paying for</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>What goes into a commercial LED message center?</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, marginTop: 40, alignItems: 'center' }}>
            <div className="anat" aria-hidden="true" style={{ flex: '1 1 380px', minWidth: 0 }}>
              <div style={{ position: 'absolute', left: '14%', top: '16%', width: '72%', height: '48%', background: '#0B1120', borderRadius: 8, border: '4px solid #334155' }} />
              <div style={{ position: 'absolute', left: '18%', top: '20%', width: '64%', height: '40%', background: 'var(--blue)', borderRadius: 4 }} />
              <div style={{ position: 'absolute', left: '34%', top: '64%', width: '32%', height: '22%', background: '#64748B', borderRadius: 4 }} />

              <span className="pin" style={{ left: '46%', top: '34%' }}>1</span>
              <span className="pin" style={{ left: '78%', top: '24%' }}>2</span>
              <span className="pin" style={{ left: '24%', top: '48%' }}>3</span>
              <span className="pin" style={{ left: '14%', top: '20%' }}>4</span>
              <span className="pin" style={{ left: '66%', top: '56%' }}>5</span>
              <span className="pin" style={{ left: '50%', top: '76%' }}>6</span>
            </div>

            <ol className="parts" style={{ flex: '1 1 420px', minWidth: 0 }}>
              {LED_PARTS.map((p, i) => (
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
          <div className="eyebrow">Deployment Configurations</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>How we integrate LED displays on your site.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 18, marginTop: 40 }}>
            {LED_MOUNTS.map((m) => (
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
              <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>LED matrix sizes, pixel pitch, and budgets.</h2>
            </div>
            <Link className="btn btn-dark" href="/toolkit#cost">Open the cost calculator</Link>
          </div>
          <div className="tbl-wrap" style={{ marginTop: 36 }}>
            <table style={{ minWidth: 680 }}>
              <thead>
                <tr>
                  <th scope="col">Display &amp; pitch</th>
                  <th scope="col">Readable up to</th>
                  <th scope="col">Stands out up to</th>
                  <th scope="col">Typical price range</th>
                  <th scope="col">Common use</th>
                </tr>
              </thead>
              <tbody>
                {LED_SIZES.map((h) => (
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
          <p className="note">Pricing covers double-sided or single-sided commercial EMC cabinets with cloud software; monument masonry and structural foundations quoted per site.</p>
        </div>
      </section>

      <ServiceProjectShowcase
        category="pylon"
        title="Roadside pylon & freestanding displays in DFW."
        subtitle="See how North Texas properties command highway and arterial road attention."
      />

      <section className="paper sec">
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)', margin: 0 }}>Questions about LED message centers</h2>
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span className="kv">Often paired with</span>
              <Link href="/monument-signs" style={{ fontWeight: 700, color: 'var(--blue)' }}>Monument signs →</Link>
              <Link href="/pylon-signs" style={{ fontWeight: 700, color: 'var(--blue)' }}>Pylon &amp; pole signs →</Link>
              <Link href="/digital-menu-boards" style={{ fontWeight: 700, color: 'var(--blue)' }}>Digital menu boards →</Link>
            </div>
          </div>
          <div className="faq" style={{ flex: '2 1 520px', minWidth: 0 }}>
            <FAQAccordion items={LED_FAQ} />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--blue)', color: '#fff' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between', paddingTop: 64, paddingBottom: 64 }}>
          <div>
            <div className="disp" style={{ fontSize: 'clamp(30px,5vw,40px)', lineHeight: 1 }}>Reach every driver passing your property.</div>
            <div style={{ color: '#E6EEFF', marginTop: 8, fontSize: 17 }}>Free municipal zoning check, 3D site mockup, and written quote in 24 hours.</div>
          </div>
          <div className="btn-row" style={{ gap: 12 }}>
            <Link className="btn btn-dark" href="/quote?type=digital">Get my free mockup</Link>
            <a className="btn btn-ghost" href="tel:2147144623">214-714-4623</a>
          </div>
        </div>
      </section>
    </div>
  )
}
