import type { Metadata } from 'next'
import Link from 'next/link'
import PylonDemo from '@/components/signs/PylonDemo'
import FAQAccordion from '@/components/ui/FAQAccordion'
import FaqJsonLd from '@/components/seo/FaqJsonLd'
import ServiceProjectShowcase from '@/components/common/ServiceProjectShowcase'

export const metadata: Metadata = {
  title: 'Custom Highway Pylon & Pole Signs Dallas–Fort Worth | Sign Zone',
  description:
    'Commercial highway pylon and pole signs in Dallas–Fort Worth. Tall roadside signs that reach highway traffic at 70 MPH, single or multi-tenant with high-output LEDs.',
  alternates: {
    canonical: '/pylon-signs',
  },
  openGraph: {
    title: 'Custom Highway Pylon & Pole Signs Dallas–Fort Worth | Sign Zone',
    description:
      'Towering commercial roadside signs engineered for maximum highway viewing distances across Texas corridors.',
    url: 'https://www.signzoneusa.com/pylon-signs',
  },
}

const PYLON_PARTS = [
  {
    name: 'Illuminated Header Cabinet',
    desc: 'Heavy structural aluminum cabinet with high-impact embossed polycarbonate or routed push-through acrylic faces.',
  },
  {
    name: 'Structural Steel Pipe Column',
    desc: 'Heavy-wall steel schedule-40/80 pipe engineered to resist 115+ MPH Texas winds and torsional forces.',
  },
  {
    name: 'Modular Tenant Panels',
    desc: 'Independent slide-in illuminated slots allowing tenants to be swapped quickly as commercial leases change.',
  },
  {
    name: 'High-Output LED Modules',
    desc: 'Daylight-visible UL-listed commercial LED arrays engineered for deep cabinets and wide light diffusion.',
  },
  {
    name: 'Anchor Bolt Rebar Cage',
    desc: 'High-tensile Grade 55/105 steel anchor bolts tied directly into the sub-grade structural rebar cage.',
  },
  {
    name: 'Drilled Caisson Pier',
    desc: '15 to 30 ft deep concrete caisson poured directly into bedrock to counteract lateral wind overturning moments.',
  },
]

const PYLON_MOUNTS = [
  {
    name: 'Single Monopole Tower',
    desc: 'A single massive structural steel pipe supporting an oversized double-faced cabinet high in the air.',
    when: 'Gas stations, truck stops, auto dealerships, and highway frontage parcels with limited ground footprint.',
  },
  {
    name: 'Multi-Tenant Highway Pylon',
    desc: 'A towering structural pylon featuring an anchor brand header and multiple stacked illuminated tenant directories.',
    when: 'Regional shopping centers, retail strip developments, and commercial mixed-use centers near interstates.',
  },
  {
    name: 'Dual-Post Architectural Tower',
    desc: 'Twin structural uprights enclosed in decorative architectural aluminum cladding matching campus aesthetics.',
    when: 'Hospital complexes, corporate business parks, and master developments requiring an upscale profile.',
  },
]

const PYLON_SIZES = [
  { h: '25 ft', readable: '750 ft', stands: '250 ft', range: '$12,000 – $22,000', use: 'Commercial frontage, suburban arterial roadways (35–45 MPH)' },
  { h: '35 ft', readable: '1,050 ft', stands: '350 ft', range: '$18,000 – $36,000', use: 'State highways (SH-121, SH-183, Hwy 67), mid-size retail strips' },
  { h: '50 ft', readable: '1,500 ft', stands: '500 ft', range: '$32,000 – $65,000', use: 'Interstate thoroughfares (I-35, I-30, I-635), shopping malls' },
  { h: '65+ ft', readable: '2,000+ ft', stands: '700+ ft', range: '$55,000 – $120,000+', use: 'Elevated highway flyovers, regional power centers' },
  { h: 'Digital EMC Pylon', readable: '1,800+ ft', stands: '600+ ft', range: '$45,000 – $150,000+', use: 'Entertainment venues, auto mega-centers, sports arenas' },
]

const PYLON_FAQ = [
  {
    q: 'How much do highway pylon signs cost in Dallas–Fort Worth?',
    a: 'Turnkey pylon signs typically range from $12,000 for standard 25-ft single-tenant signs up to $85,000+ for large 50+ ft multi-tenant towers. Soil conditions, footing depth, steel diameter, and digital message boards are key cost factors.',
  },
  {
    q: 'How high can a pylon sign be on my property?',
    a: 'Permitted height depends entirely on your property zoning and highway corridor overlay. Most DFW cities permit 25 to 50+ feet along interstate highways. We audit your exact property GIS parcel to determine maximum legal height.',
  },
  {
    q: 'Does Sign Zone perform the geotechnical soil testing and drilling?',
    a: 'Yes. Every pylon sign project includes soil borings, foundation engineering stamped by a Texas Professional Engineer (PE), heavy drill-rig caisson excavation, and certified crane erection.',
  },
  {
    q: 'Can our existing highway pole sign be retrofitted with new LED panels?',
    a: 'Yes. If your existing steel pole and concrete base pass structural safety inspections, we can fabricate a new modern cabinet, swap faces, or upgrade fluorescent lighting to high-output LEDs.',
  },
  {
    q: 'How long does a pylon sign project take?',
    a: 'Pylon sign projects typically take 6 to 10 weeks from architectural drawings to final crane erection. This timeline includes city zoning checks, PE engineering stamps, foundation excavation, and multi-piece metal fabrication.',
  },
]

export default function PylonSignsPage() {
  return (
    <div className="view" id="v-pylon-signs">
      <FaqJsonLd items={PYLON_FAQ} />

      {/* Hero Section */}
      <section className="dark">
        <div className="wrap" style={{ paddingTop: 28, paddingBottom: 88 }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: 'var(--dmuted)' }}>
            <Link href="/" style={{ color: 'var(--dmuted)' }}>Home</Link>
            {' / '}
            <Link href="/signs" style={{ color: 'var(--dmuted)' }}>Signs</Link>
            {' / '}
            <span style={{ color: '#fff' }}>Pylon &amp; pole signs</span>
          </nav>

          <div className="cl-hero-grid">
            <div style={{ minWidth: 0 }}>
              <h1 className="disp sec-h" style={{ fontSize: 'clamp(32px, 3.8vw, 48px)', lineHeight: 1.02, margin: 0, maxWidth: 480 }}>
                Tall pylon signs for Texas roads.
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--dsub)', margin: '22px 0 0', maxWidth: 480 }}>
                Tall roadside signs that reach highway traffic at 70 MPH. Engineered steel superstructures, multi-tenant cabinets, and digital LED displays built to Texas wind codes.
              </p>
              <dl className="facts">
                <div><dt>Typical project</dt><dd>$12k – $85k+</dd></div>
                <div><dt>Timeline</dt><dd>6 – 10 weeks</dd></div>
                <div><dt>Elevation</dt><dd>20 – 65+ ft</dd></div>
                <div><dt>Engineering</dt><dd>Sealed TX PE</dd></div>
              </dl>
              <div className="btn-row" style={{ marginTop: 30, gap: 12 }}>
                <Link className="btn btn-blue" href="/quote?type=pylon">Quote my pylon sign</Link>
                <Link className="btn btn-ghost" href="/toolkit#distance">Check viewing distance</Link>
              </div>
            </div>

            <div style={{ minWidth: 0 }}>
              <PylonDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Anatomy */}
      <section className="light sec">
        <div className="wrap">
          <div className="eyebrow">What you&apos;re paying for</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>What makes up a highway pylon sign?</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, marginTop: 40, alignItems: 'center' }}>
            <div className="anat" aria-hidden="true" style={{ flex: '1 1 380px', minWidth: 0 }}>
              {/* Cabinet Head */}
              <div style={{ position: 'absolute', left: '22%', top: '10%', width: '56%', height: '36%', background: 'var(--navy)', borderRadius: 8, boxShadow: '0 12px 28px rgba(6,38,102,0.3)' }} />
              {/* Internal Tenant Slots */}
              <div style={{ position: 'absolute', left: '28%', top: '18%', width: '44%', display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ height: 10, borderRadius: 2, background: 'var(--sky)' }} />
                <span style={{ height: 10, borderRadius: 2, background: 'var(--sky)' }} />
                <span style={{ height: 10, borderRadius: 2, background: 'var(--sky)' }} />
              </div>
              {/* Center Steel Pipe */}
              <div style={{ position: 'absolute', left: '46%', top: '46%', width: '8%', height: '38%', background: 'linear-gradient(90deg, #1C2744 0%, #374463 50%, #1A2234 100%)', borderRadius: 2 }} />
              {/* Subgrade Caisson */}
              <div style={{ position: 'absolute', left: '38%', bottom: '4%', width: '24%', height: '14%', background: '#9AA3B2', borderRadius: 4 }} />

              {/* Numbered Pins */}
              <span className="pin" style={{ left: '50%', top: '6%' }}>1</span>
              <span className="pin" style={{ left: '40%', top: '56%' }}>2</span>
              <span className="pin" style={{ left: '76%', top: '24%' }}>3</span>
              <span className="pin" style={{ left: '24%', top: '28%' }}>4</span>
              <span className="pin" style={{ left: '58%', top: '76%' }}>5</span>
              <span className="pin" style={{ left: '50%', top: '90%' }}>6</span>
            </div>

            <ol className="parts" id="pylonParts" style={{ flex: '1 1 420px', minWidth: 0 }}>
              {PYLON_PARTS.map((p, i) => (
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

      {/* Mounting / Structural options */}
      <section className="paper sec">
        <div className="wrap">
          <div className="eyebrow">Structural Configurations</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>How they stand tall by the highway.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 18, marginTop: 40 }} id="pylonMounts">
            {PYLON_MOUNTS.map((m) => (
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
              <div className="eyebrow">Height &amp; visibility guide</div>
              <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>See how sign height affects reading distance and price.</h2>
            </div>
            <Link className="btn btn-dark" href="/toolkit#distance">Open visibility calculator</Link>
          </div>
          <div className="tbl-wrap" style={{ marginTop: 36 }}>
            <table style={{ minWidth: 680 }}>
              <thead>
                <tr>
                  <th scope="col">Overall tower height</th>
                  <th scope="col">Readable up to</th>
                  <th scope="col">Stands out up to</th>
                  <th scope="col">Typical price range</th>
                  <th scope="col">Common use</th>
                </tr>
              </thead>
              <tbody id="pylonSizes">
                {PYLON_SIZES.map((h) => (
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
          <p className="note">Calculations based on 65–70 MPH highway speeds (FHWA &amp; USSC formula). Prices reflect structural steel, multi-tenant cabinet fabrication, LED illumination, and heavy crane erection.</p>
        </div>
      </section>

      {/* Real Project Proof */}
      <ServiceProjectShowcase
        category="pylon"
        title="Highway pylon and commercial center sign projects."
        subtitle="High-impact highway commercial signs fabricated and installed along major DFW corridors."
      />

      {/* FAQ */}
      <section className="paper sec">
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)', margin: 0 }}>Questions about highway pylon signs</h2>
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span className="kv">Often paired with</span>
              <Link href="/monument-signs" style={{ fontWeight: 700, color: 'var(--blue)' }}>Monument signs →</Link>
              <Link href="/channel-letters" style={{ fontWeight: 700, color: 'var(--blue)' }}>Channel letters →</Link>
              <Link href="/storefront-signs" style={{ fontWeight: 700, color: 'var(--blue)' }}>Storefront lightboxes →</Link>
            </div>
          </div>
          <div className="faq" id="pylonFaq" style={{ flex: '2 1 520px', minWidth: 0 }}>
            <FAQAccordion items={PYLON_FAQ} />
          </div>
        </div>
      </section>

      {/* Blue CTA Bar */}
      <section style={{ background: 'var(--blue)', color: '#fff' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between', paddingTop: 64, paddingBottom: 64 }}>
          <div>
            <div className="disp" style={{ fontSize: 'clamp(30px,5vw,40px)', lineHeight: 1 }}>See your pylon sign along the corridor.</div>
            <div style={{ color: '#E6EEFF', marginTop: 8, fontSize: 17 }}>Free line-of-sight elevation analysis and preliminary quote within 24 hours.</div>
          </div>
          <div className="btn-row" style={{ gap: 12 }}>
            <Link className="btn btn-dark" href="/quote?type=pylon">Get my free mockup</Link>
            <a className="btn btn-ghost" href="tel:2147144623">214-714-4623</a>
          </div>
        </div>
      </section>
    </div>
  )
}
