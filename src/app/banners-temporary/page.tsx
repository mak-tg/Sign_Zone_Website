import type { Metadata } from 'next'
import Link from 'next/link'
import BannerDemo from '@/components/signs/BannerDemo'
import FAQAccordion from '@/components/ui/FAQAccordion'
import FaqJsonLd from '@/components/seo/FaqJsonLd'
import ServiceProjectShowcase from '@/components/common/ServiceProjectShowcase'

export const metadata: Metadata = {
  title: 'Custom Banners, Grand Opening & Temporary Signs DFW | Sign Zone',
  description:
    'Fast-turnaround grand opening banners, coming soon signs, post & panel leasing signs, and event flags in Dallas–Fort Worth.',
  alternates: {
    canonical: '/banners-temporary',
  },
  openGraph: {
    title: 'Custom Banners, Grand Opening & Temporary Signs DFW | Sign Zone',
    description:
      'Heavy-duty 18oz vinyl banners, wind-slit mesh, feather flags, and post & panel signs ready in days across DFW.',
    url: 'https://www.signzoneusa.com/banners-temporary',
  },
}

const BANNER_PARTS = [
  {
    name: '13oz or 18oz Scrim Vinyl',
    desc: 'Heavy-duty reinforced PVC banner stock resistant to tearing, curling, and intense Texas sun.',
  },
  {
    name: 'Heat-Welded Perimeter Hems',
    desc: 'Double-folded edges thermally welded on all four sides so wind never frays or splits the border.',
  },
  {
    name: 'Solid Brass Grommets',
    desc: 'Rust-proof #2 brass grommets spaced every 24 inches (plus reinforced corners) for secure tensioning.',
  },
  {
    name: 'Wind-Slits / 8oz Mesh Option',
    desc: 'Micro-perforated mesh or reinforced wind-slits allowing gusts to pass safely through large exterior banners.',
  },
  {
    name: 'UV-Cured Full-Color Ink',
    desc: '1200 DPI outdoor-durable print that stays vibrant through months of sun and rain.',
  },
  {
    name: 'Heavy Bungee or Post Hardware',
    desc: 'UV-stabilized bungee cords, masonry anchors, or 4x4 painted wood/aluminum posts for clean, taut mounting.',
  },
]

const BANNER_MOUNTS = [
  {
    name: 'Grand Opening Facade Banner',
    desc: 'High-visibility vinyl banner tensioned cleanly over your storefront sign band while permanent permits clear.',
    when: 'New businesses opening before channel letters or lightboxes are installed.',
  },
  {
    name: 'Construction & Fence Mesh',
    desc: 'Continuous 6 ft or 8 ft printed mesh wraps clipped directly to chain-link construction perimeter fencing.',
    when: 'New retail developments, apartment complexes, and remodel sites.',
  },
  {
    name: 'Post & Panel Site Sign',
    desc: 'Rigid aluminum composite (Dibond) mounted between painted 4x4 posts for crisp 1–3 year roadside presence.',
    when: 'Commercial real estate leasing, "Coming Soon" lots, and builder sites.',
  },
]

const BANNER_SIZES = [
  { h: '3 ft x 8 ft Grand Opening', readable: '120 ft', stands: '50 ft', range: '$120 – $220', use: 'Storefront promos, weekend events, seasonal sales' },
  { h: '4 ft x 12 ft Facade Banner', readable: '220 ft', stands: '90 ft', range: '$240 – $420', use: 'Temporary primary ID while permits clear' },
  { h: '4 ft x 8 ft Post & Panel', readable: '200 ft', stands: '80 ft', range: '$550 – $1,400', use: 'Coming soon sites, commercial leasing, builders' },
  { h: '6 ft x 50 ft Fence Mesh', readable: '300 ft', stands: '120 ft', range: '$950 – $2,200+', use: 'Construction perimeters, outdoor events' },
  { h: 'Feather Flags & A-Frames', readable: '80 ft', stands: '40 ft', range: '$150 – $380', use: 'Sidewalk promos, open houses, grand openings' },
]

const BANNER_FAQ = [
  {
    q: 'How fast can you print a grand opening or coming soon banner?',
    a: 'Most standard vinyl and mesh banners are printed, hemmed, and ready for pickup or DFW installation within 2 to 4 business days.',
  },
  {
    q: 'Do temporary grand opening banners need a city permit?',
    a: 'Most DFW cities allow temporary grand-opening banners for 30 to 60 days with a simple temporary sign permit—especially when you have a permanent sign permit on file. We can include the temporary banner in your permanent sign package.',
  },
  {
    q: 'Should I choose 13oz vinyl, 18oz vinyl, or mesh?',
    a: 'Use 13oz vinyl for short-term promos against a solid wall, 18oz double-sided blockout vinyl for pole-to-pole or windy exposure, and 8oz wind mesh for fences or oversized banners.',
  },
  {
    q: 'Can you install my banner high up on my storefront fascia?',
    a: 'Yes! Our installation crew brings ladders and bucket trucks to mount banners taut and level above your storefront—and removes them cleanly when your permanent sign goes up.',
  },
  {
    q: 'Can I bundle a temporary banner with my permanent channel letters?',
    a: 'Yes. Many new DFW tenants bundle a "Now Open" banner with their channel letter order so they open on time with zero gap in street visibility.',
  },
]

export default function BannersTemporaryPage() {
  return (
    <div className="view" id="v-banners-temporary">
      <FaqJsonLd items={BANNER_FAQ} />

      <section className="dark">
        <div className="wrap" style={{ paddingTop: 28, paddingBottom: 88 }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: 'var(--dmuted)' }}>
            <Link href="/" style={{ color: 'var(--dmuted)' }}>Home</Link>
            {' / '}
            <Link href="/signs" style={{ color: 'var(--dmuted)' }}>Signs</Link>
            {' / '}
            <span style={{ color: '#fff' }}>Banners &amp; temporary</span>
          </nav>

          <div className="cl-hero-grid">
            <div style={{ minWidth: 0 }}>
              <h1 className="disp sec-h" style={{ fontSize: 'clamp(32px, 3.8vw, 48px)', lineHeight: 1.02, margin: 0, maxWidth: 480 }}>
                Banners &amp; temporary signs, ready fast in DFW.
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--dsub)', margin: '22px 0 0', maxWidth: 480 }}>
                Grand openings, &ldquo;Coming Soon&rdquo; announcements, construction fence mesh, and post &amp; panel leasing signs. Built tough for Texas wind and ready in days.
              </p>
              <dl className="facts">
                <div><dt>Typical price</dt><dd>$120 – $1.4k</dd></div>
                <div><dt>Turnaround</dt><dd>2 – 4 days</dd></div>
                <div><dt>Material</dt><dd>18oz / Wind Mesh</dd></div>
              </dl>
              <div className="btn-row" style={{ marginTop: 30, gap: 12 }}>
                <Link className="btn btn-blue" href="/quote?type=window">Order my banner</Link>
                <Link className="btn btn-ghost" href="/toolkit#timeline">Check opening timeline</Link>
              </div>
            </div>

            <div style={{ minWidth: 0 }}>
              <BannerDemo />
            </div>
          </div>
        </div>
      </section>

      <section className="light sec">
        <div className="wrap">
          <div className="eyebrow">What you&apos;re paying for</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>What separates a pro banner from a cheap print?</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, marginTop: 40, alignItems: 'center' }}>
            <div className="anat" aria-hidden="true" style={{ flex: '1 1 380px', minWidth: 0 }}>
              <div style={{ position: 'absolute', left: '14%', top: '24%', width: '72%', height: '48%', background: 'var(--blue)', borderRadius: 6, border: '4px solid var(--navy)' }} />
              <div style={{ position: 'absolute', left: '26%', top: '42%', width: '48%', height: 14, background: '#fff', borderRadius: 3 }} />
              <div style={{ position: 'absolute', left: '18%', top: '28%', width: 8, height: 8, borderRadius: '50%', background: '#FBBF24' }} />
              <div style={{ position: 'absolute', left: '78%', top: '28%', width: 8, height: 8, borderRadius: '50%', background: '#FBBF24' }} />

              <span className="pin" style={{ left: '50%', top: '34%' }}>1</span>
              <span className="pin" style={{ left: '14%', top: '50%' }}>2</span>
              <span className="pin" style={{ left: '80%', top: '28%' }}>3</span>
              <span className="pin" style={{ left: '68%', top: '62%' }}>4</span>
              <span className="pin" style={{ left: '42%', top: '52%' }}>5</span>
              <span className="pin" style={{ left: '18%', top: '76%' }}>6</span>
            </div>

            <ol className="parts" style={{ flex: '1 1 420px', minWidth: 0 }}>
              {BANNER_PARTS.map((p, i) => (
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
          <div className="eyebrow">Temporary Sign Formats</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>Right format for your timeline and exposure.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 18, marginTop: 40 }}>
            {BANNER_MOUNTS.map((m) => (
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
              <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>Standard banner sizes and turnaround budgets.</h2>
            </div>
            <Link className="btn btn-dark" href="/toolkit#cost">Open the cost calculator</Link>
          </div>
          <div className="tbl-wrap" style={{ marginTop: 36 }}>
            <table style={{ minWidth: 680 }}>
              <thead>
                <tr>
                  <th scope="col">Banner / sign size</th>
                  <th scope="col">Readable up to</th>
                  <th scope="col">Stands out up to</th>
                  <th scope="col">Typical price range</th>
                  <th scope="col">Common use</th>
                </tr>
              </thead>
              <tbody>
                {BANNER_SIZES.map((h) => (
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
          <p className="note">Pricing includes full-color UV print, welded hems, and brass grommets. Bucket-truck installation available across DFW.</p>
        </div>
      </section>

      <ServiceProjectShowcase
        category="storefront"
        title="DFW storefronts we launched from day one."
        subtitle="Start with a grand-opening banner while we permit and build your permanent exterior sign."
      />

      <section className="paper sec">
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)', margin: 0 }}>Questions about banners</h2>
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span className="kv">Often paired with</span>
              <Link href="/channel-letters" style={{ fontWeight: 700, color: 'var(--blue)' }}>Channel letters →</Link>
              <Link href="/window-graphics" style={{ fontWeight: 700, color: 'var(--blue)' }}>Window graphics →</Link>
              <Link href="/storefront-signs" style={{ fontWeight: 700, color: 'var(--blue)' }}>Storefront &amp; cabinet signs →</Link>
            </div>
          </div>
          <div className="faq" style={{ flex: '2 1 520px', minWidth: 0 }}>
            <FAQAccordion items={BANNER_FAQ} />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--blue)', color: '#fff' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between', paddingTop: 64, paddingBottom: 64 }}>
          <div>
            <div className="disp" style={{ fontSize: 'clamp(30px,5vw,40px)', lineHeight: 1 }}>Need a sign up this week?</div>
            <div style={{ color: '#E6EEFF', marginTop: 8, fontSize: 17 }}>Send your logo and dimensions for a same-day proof and 2–4 day turnaround.</div>
          </div>
          <div className="btn-row" style={{ gap: 12 }}>
            <Link className="btn btn-dark" href="/quote?type=window">Get my fast quote</Link>
            <a className="btn btn-ghost" href="tel:2147144623">214-714-4623</a>
          </div>
        </div>
      </section>
    </div>
  )
}
