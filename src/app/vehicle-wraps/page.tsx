import type { Metadata } from 'next'
import Link from 'next/link'
import WrapDemo from '@/components/signs/WrapDemo'
import FAQAccordion from '@/components/ui/FAQAccordion'
import FaqJsonLd from '@/components/seo/FaqJsonLd'
import ServiceProjectShowcase from '@/components/common/ServiceProjectShowcase'

export const metadata: Metadata = {
  title: 'Commercial Vehicle Wraps & Fleet Graphics Dallas–Fort Worth | Sign Zone',
  description:
    'Custom commercial vehicle wraps, truck lettering, and fleet graphics in Dallas–Fort Worth. Turn your work vehicles into mobile billboards with premium 3M Cast vinyl.',
  alternates: {
    canonical: '/vehicle-wraps',
  },
  openGraph: {
    title: 'Commercial Vehicle Wraps & Fleet Graphics Dallas–Fort Worth | Sign Zone',
    description:
      'Turnkey vehicle wraps, cargo van graphics, and fleet lettering printed on 3M Cast vinyl in DFW.',
    url: 'https://www.signzoneusa.com/vehicle-wraps',
  },
}

const WRAP_PARTS = [
  {
    name: '3M Cast Vinyl Media',
    desc: 'Premium 3M Controltac / Avery Dennison cast vinyl film engineered for compound vehicle curves and deep body channels.',
  },
  {
    name: 'UV Luster Overlaminate',
    desc: 'Optically clear protective overlaminate shielding vehicle graphics from Texas sun fading, road salts, and car washes.',
  },
  {
    name: 'High-Res Latex Ink Print',
    desc: 'Eco-solvent / latex inks curing at 1200 DPI for photo-sharp product imagery, gradients, and bold corporate colors.',
  },
  {
    name: 'Perforated Window Film',
    desc: '50/50 micro-perforated vinyl covering rear and side windows while maintaining 100% outward driver visibility.',
  },
  {
    name: 'Surface Prep & Knifeless Tape',
    desc: 'Alcohol-degreased surface prep and 3M knifeless filament tape ensuring zero razor cuts into your vehicle factory clear coat.',
  },
  {
    name: 'Thermal Post-Heating',
    desc: 'Precision infrared post-heating to 180°F+ setting the vinyl memory so edges never lift or curl in extreme Texas heat.',
  },
]

const WRAP_MOUNTS = [
  {
    name: 'Full Commercial Wrap',
    desc: 'Completely covers all painted exterior metal panels, front to rear bumper, turning the vehicle into a 24/7 mobile billboard.',
    when: 'Service vans (HVAC, plumbing, roofing), delivery fleets, and high-growth franchise operations.',
  },
  {
    name: 'Partial Wrap (1/2 to 3/4)',
    desc: 'Covers rear doors and side cargo panels while blending into the vehicle factory paint color for great cost-per-impression efficiency.',
    when: 'Budget-conscious contractors, pickup truck beds, and multi-truck fleet expansions.',
  },
  {
    name: 'Cut Vinyl Logos & DOT Letters',
    desc: 'Computer-cut contour logos, phone numbers, website URLs, and mandatory state TXDOT / USDOT compliance numbers.',
    when: 'Commercial fleet compliance, flatbed work trucks, trailers, and delivery sprinter vans.',
  },
]

const WRAP_SIZES = [
  { h: 'Cargo Van (Transit / ProMaster)', readable: '120 ft', stands: '50 ft', range: '$2,800 – $4,400', use: 'Service contractors, plumbers, electricians, mobile mechanics' },
  { h: 'Box Truck (14ft – 24ft)', readable: '250 ft', stands: '100 ft', range: '$3,400 – $5,800', use: 'Moving companies, regional logistics, wholesale distributors' },
  { h: 'Pickup Truck (Full Wrap)', readable: '100 ft', stands: '40 ft', range: '$2,400 – $3,600', use: 'General contractors, roofers, landscapers, supervisors' },
  { h: 'Enclosed Cargo Trailer (16ft)', readable: '200 ft', stands: '80 ft', range: '$2,600 – $4,500', use: 'Mobile job-site billboard, equipment haulers' },
  { h: 'Door Logos & DOT Kit', readable: '50 ft', stands: '20 ft', range: '$350 – $750', use: 'State compliance, discreet corporate identification' },
]

const WRAP_FAQ = [
  {
    q: 'How long does a commercial vehicle wrap last in Texas?',
    a: 'When printed on premium 3M Cast vinyl with matched UV overlaminate, our vehicle wraps last 5 to 7+ years under Texas weather conditions without cracking, peeling, or fading.',
  },
  {
    q: 'Will removing the vehicle wrap damage my factory paint?',
    a: 'No. In fact, premium vinyl wraps protect your vehicle OEM paint from rock chips, UV damage, and scratches. When removed properly with heat, the factory paint underneath looks brand new, boosting vehicle resale value.',
  },
  {
    q: 'How long will my vehicle need to be in the shop for installation?',
    a: 'Full commercial wraps typically take 2 to 3 business days for surface prep, panel installation, and proper thermal curing. Partial wraps and cut vinyl packages take 1 to 2 business days.',
  },
  {
    q: 'Can I wash my wrapped vehicle in an automatic car wash?',
    a: 'Hand washing or touchless car washes are recommended. Avoid high-pressure spray nozzles held closer than 18 inches to the edges or aggressive rotating brush car washes.',
  },
  {
    q: 'Do you design the wrap layout if I only have a logo?',
    a: 'Yes. Our in-house vehicle designers scale your logo, branding, contact details, and services onto precise vehicle CAD blueprints so you can approve 360-degree proofs before any vinyl is printed.',
  },
]

export default function VehicleWrapsPage() {
  return (
    <div className="view" id="v-vehicle-wraps">
      <FaqJsonLd items={WRAP_FAQ} />

      {/* Hero Section */}
      <section className="dark">
        <div className="wrap" style={{ paddingTop: 28, paddingBottom: 88 }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: 'var(--dmuted)' }}>
            <Link href="/" style={{ color: 'var(--dmuted)' }}>Home</Link>
            {' / '}
            <Link href="/signs" style={{ color: 'var(--dmuted)' }}>Signs</Link>
            {' / '}
            <span style={{ color: '#fff' }}>Vehicle wraps</span>
          </nav>

          <div className="cl-hero-grid">
            <div style={{ minWidth: 0 }}>
              <h1 className="disp sec-h" style={{ fontSize: 'clamp(32px, 3.8vw, 48px)', lineHeight: 1.02, margin: 0, maxWidth: 480 }}>
                Vehicle wraps for DFW work vehicles.
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--dsub)', margin: '22px 0 0', maxWidth: 480 }}>
                Full and partial vehicle wraps, fleet graphics, and DOT lettering printed on 3M Cast vinyl. Turn every mile driven in North Texas into customer impressions.
              </p>
              <dl className="facts">
                <div><dt>Typical project</dt><dd>$1.4k – $4.5k</dd></div>
                <div><dt>Timeline</dt><dd>3 – 5 days</dd></div>
                <div><dt>Durability</dt><dd>5 – 7 Years</dd></div>
              </dl>
              <div className="btn-row" style={{ marginTop: 30, gap: 12 }}>
                <Link className="btn btn-blue" href="/quote?type=wrap">Quote my vehicle wrap</Link>
                <Link className="btn btn-ghost" href="/toolkit#roi">Calculate wrap ROI</Link>
              </div>
            </div>

            <div style={{ minWidth: 0 }}>
              <WrapDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Anatomy */}
      <section className="light sec">
        <div className="wrap">
          <div className="eyebrow">What you&apos;re paying for</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>What goes into a vehicle wrap?</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, marginTop: 40, alignItems: 'center' }}>
            <div className="anat" aria-hidden="true" style={{ flex: '1 1 380px', minWidth: 0 }}>
              {/* Van Body Outline */}
              <div style={{ position: 'absolute', left: '14%', top: '22%', width: '72%', height: '52%', background: 'var(--navy)', borderRadius: '28px 8px 8px 8px', boxShadow: '0 12px 28px rgba(6,38,102,0.35)' }} />
              {/* Window Cutout */}
              <div style={{ position: 'absolute', left: '22%', top: '28%', width: '22%', height: '20%', background: '#CBD5E6', borderRadius: '12px 4px 4px 4px' }} />
              {/* Printed Branding Overlay */}
              <div style={{ position: 'absolute', left: '48%', top: '34%', width: '32%', height: '24%', background: 'var(--blue)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ width: '60%', height: 6, background: '#fff', borderRadius: 2 }} />
              </div>
              {/* Rear Perforated Window */}
              <div style={{ position: 'absolute', right: '18%', top: '28%', width: '12%', height: '20%', background: '#4D8DFF', borderRadius: 2 }} />
              {/* Wheels */}
              <div style={{ position: 'absolute', bottom: '16%', left: '26%', width: 28, height: 28, borderRadius: '50%', background: '#07090F', border: '3px solid #9AA3B2' }} />
              <div style={{ position: 'absolute', bottom: '16%', right: '24%', width: 28, height: 28, borderRadius: '50%', background: '#07090F', border: '3px solid #9AA3B2' }} />

              {/* Numbered Pins */}
              <span className="pin" style={{ left: '50%', top: '16%' }}>1</span>
              <span className="pin" style={{ left: '60%', top: '44%' }}>2</span>
              <span className="pin" style={{ left: '38%', top: '48%' }}>3</span>
              <span className="pin" style={{ left: '80%', top: '24%' }}>4</span>
              <span className="pin" style={{ left: '20%', top: '56%' }}>5</span>
              <span className="pin" style={{ left: '65%', top: '70%' }}>6</span>
            </div>

            <ol className="parts" id="wrapParts" style={{ flex: '1 1 420px', minWidth: 0 }}>
              {WRAP_PARTS.map((p, i) => (
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

      {/* Coverage options */}
      <section className="paper sec">
        <div className="wrap">
          <div className="eyebrow">Coverage Options</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>How we add signs to your vehicles.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 18, marginTop: 40 }} id="wrapMounts">
            {WRAP_MOUNTS.map((m) => (
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
              <div className="eyebrow">Vehicle &amp; pricing guide</div>
              <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>See how many people may notice your vehicle and what it may cost.</h2>
            </div>
            <Link className="btn btn-dark" href="/toolkit#roi">Open ROI calculator</Link>
          </div>
          <div className="tbl-wrap" style={{ marginTop: 36 }}>
            <table style={{ minWidth: 680 }}>
              <thead>
                <tr>
                  <th scope="col">Vehicle category</th>
                  <th scope="col">Readable up to</th>
                  <th scope="col">Stands out up to</th>
                  <th scope="col">Typical price range</th>
                  <th scope="col">Common use</th>
                </tr>
              </thead>
              <tbody id="wrapSizes">
                {WRAP_SIZES.map((h) => (
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
          <p className="note">Prices include 3M Cast vinyl printing, UV laminate protection, and professional Dallas–Fort Worth shop installation. Fleet discounts available for 3+ vehicles.</p>
        </div>
      </section>

      {/* Real Project Proof */}
      <ServiceProjectShowcase
        category="wrap"
        title="Commercial fleet graphics and wraps in Dallas–Fort Worth."
        subtitle="Turn your work trucks, vans, and trailers into 24/7 mobile billboards with 3M cast vinyl."
      />

      {/* FAQ */}
      <section className="paper sec">
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)', margin: 0 }}>Questions about vehicle wraps</h2>
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span className="kv">Often paired with</span>
              <Link href="/storefront-signs" style={{ fontWeight: 700, color: 'var(--blue)' }}>Storefront lightboxes →</Link>
              <Link href="/channel-letters" style={{ fontWeight: 700, color: 'var(--blue)' }}>Channel letters →</Link>
              <Link href="/quote?type=window" style={{ fontWeight: 700, color: 'var(--blue)' }}>Storefront window vinyl →</Link>
            </div>
          </div>
          <div className="faq" id="wrapFaq" style={{ flex: '2 1 520px', minWidth: 0 }}>
            <FAQAccordion items={WRAP_FAQ} />
          </div>
        </div>
      </section>

      {/* Blue CTA Bar */}
      <section style={{ background: 'var(--blue)', color: '#fff' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between', paddingTop: 64, paddingBottom: 64 }}>
          <div>
            <div className="disp" style={{ fontSize: 'clamp(30px,5vw,40px)', lineHeight: 1 }}>See your brand on your work vehicles.</div>
            <div style={{ color: '#E6EEFF', marginTop: 8, fontSize: 17 }}>Send your vehicle year, make, and model for a free digital blueprint mockup.</div>
          </div>
          <div className="btn-row" style={{ gap: 12 }}>
            <Link className="btn btn-dark" href="/quote?type=wrap">Get my free vehicle proof</Link>
            <a className="btn btn-ghost" href="tel:2147144623">214-714-4623</a>
          </div>
        </div>
      </section>
    </div>
  )
}
