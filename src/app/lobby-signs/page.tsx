import type { Metadata } from 'next'
import Link from 'next/link'
import LobbyDemo from '@/components/signs/LobbyDemo'
import FAQAccordion from '@/components/ui/FAQAccordion'
import FaqJsonLd from '@/components/seo/FaqJsonLd'

export const metadata: Metadata = {
  title: 'Custom Lobby & Reception Signs Dallas–Fort Worth | Sign Zone',
  description:
    'Custom interior lobby signs and corporate reception logos in Dallas–Fort Worth. Acrylic, brushed metal, backlit halo-lit lettering, and ADA directional signage.',
  alternates: {
    canonical: '/lobby-signs',
  },
  openGraph: {
    title: 'Custom Lobby & Reception Signs Dallas–Fort Worth | Sign Zone',
    description:
      'Elevate your office reception with architectural dimensional letters, frosted glass graphics, and illuminated indoor logo walls.',
    url: 'https://www.signzoneusa.com/lobby-signs',
  },
}

const LOBBY_PARTS = [
  {
    name: 'Precision-Cut Logo Face',
    desc: 'Solid waterjet-cut aluminum, laser-cut acrylic, or brushed stainless steel fabricated to exact brand vector outlines.',
  },
  {
    name: 'Architectural Standoff Hardware',
    desc: 'Machined brushed nickel, brass, or black anodized barrels holding the sign 1/2" to 1" off the finished wall for dimensional shadow.',
  },
  {
    name: 'Low-Voltage Halo Backlighting',
    desc: 'Concealed 12V 3000K warm or 6000K daylight LED ribbons projecting a glowing halo aura against accent drywall or stone.',
  },
  {
    name: 'Concealed Wire Harness',
    desc: 'Ultra-slim low-voltage lead wires fed cleanly through wall anchors into ceiling plenums or adjacent electrical closets.',
  },
  {
    name: 'Anti-Glare Matte / Satin Finish',
    desc: 'Matthews architectural coatings and non-glare frosted faces preventing harsh office fluorescent reflections.',
  },
  {
    name: 'Precision Drill Template',
    desc: 'Full-scale CAD plotted alignment stencil ensuring letters and logo marks are spaced with 1/16" millimeter perfection.',
  },
]

const LOBBY_MOUNTS = [
  {
    name: 'Pin Mount with Standoffs',
    desc: 'Threaded stainless steel studs epoxied into wall drywall anchors with spacing collars that float the letters off the wall.',
    when: 'Solid drywall, accent shiplap, acoustic felt, and architectural stone lobby walls.',
  },
  {
    name: 'Clear Acrylic Panel Plaque',
    desc: 'Logo letters and subtext mounted to an optically clear or frosted acrylic backer panel supported by 4 or 6 perimeter barrel standoffs.',
    when: 'Difficult wall textures (corrugated metal, brick, uneven stone) or temporary executive leases.',
  },
  {
    name: 'Flush Magnetic / VHB Tape Mount',
    desc: 'Heavy-duty 3M VHB closed-cell adhesive or concealed magnetic backing requiring zero drywall drill holes.',
    when: 'Smooth painted drywall, polished glass partitions, or landlord restricted interior spaces.',
  },
]

const LOBBY_SIZES = [
  { h: '24" wide', readable: '40 ft', stands: '15 ft', range: '$700 – $1,400', use: 'Executive suite doors, small conference rooms, reception desks' },
  { h: '36" wide', readable: '75 ft', stands: '30 ft', range: '$1,100 – $2,200', use: 'Standard office reception walls, waiting areas, clinic entries' },
  { h: '48" wide', readable: '120 ft', stands: '50 ft', range: '$1,600 – $3,500', use: 'Corporate boardrooms, spacious main lobby walls' },
  { h: '60"+ wide', readable: '180+ ft', stands: '75+ ft', range: '$2,500 – $6,500+', use: 'Multi-story corporate atriums, flagship headquarters' },
  { h: 'Halo-Lit LED Logo', readable: '150+ ft', stands: '60+ ft', range: '$2,800 – $8,500+', use: 'Medical spas, luxury aesthetic clinics, tech innovation centers' },
]

const LOBBY_FAQ = [
  {
    q: 'How much do custom lobby signs cost in Dallas–Fort Worth?',
    a: 'Turnkey interior reception signs typically range from $800 to $3,200 for non-illuminated dimensional metal or acrylic letters, and $2,800 to $7,500+ for illuminated halo-lit LED logo walls. Letter count, material thickness (1/4" vs 1/2"), and finish dictate final cost.',
  },
  {
    q: 'Do indoor lobby signs require city permits in Texas?',
    a: 'No. Interior office lobby signs and reception logos do not require municipal sign permits in DFW cities, saving both permit fees and multi-week city review delays.',
  },
  {
    q: 'How fast can a reception sign be fabricated and installed?',
    a: 'Most interior signs complete in 10 to 15 business days. Because no exterior city permits are needed, we begin laser cutting and finishing immediately upon design proof approval.',
  },
  {
    q: 'How do you hide the wires for illuminated halo-lit lobby signs?',
    a: 'For halo-lit signs, each letter has a tiny low-voltage wire that passes directly through a micro-hole behind each stud into the wall cavity. The wires join inside the wall and connect to a 12V transformer tucked into the ceiling drop tiles or closet.',
  },
  {
    q: 'Can you install on delicate textured walls like tile, wood slat, or marble?',
    a: 'Yes. Our experienced interior installation specialists use diamond-core bits and specialized non-impact drills to install cleanly into natural stone, porcelain tile, glass partitions, and custom millwork without cracking.',
  },
]

export default function LobbySignsPage() {
  return (
    <div className="view" id="v-lobby-signs">
      <FaqJsonLd items={LOBBY_FAQ} />

      {/* Hero Section */}
      <section className="dark">
        <div className="wrap" style={{ paddingTop: 28, paddingBottom: 88 }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: 'var(--dmuted)' }}>
            <Link href="/" style={{ color: 'var(--dmuted)' }}>Home</Link>
            {' / '}
            <Link href="/signs" style={{ color: 'var(--dmuted)' }}>Signs</Link>
            {' / '}
            <span style={{ color: '#fff' }}>Lobby &amp; logo walls</span>
          </nav>

          <div className="cl-hero-grid">
            <div style={{ minWidth: 0 }}>
              <h1 className="disp sec-h" style={{ fontSize: 'clamp(32px, 3.8vw, 48px)', lineHeight: 1.02, margin: 0, maxWidth: 480 }}>
                Lobby signs for DFW corporate spaces.
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--dsub)', margin: '22px 0 0', maxWidth: 480 }}>
                Dimensional logos in brushed metal, acrylic, or halo-lit LEDs behind reception. Precision laser-cut to your vector logo and installed with zero visible hardware.
              </p>
              <dl className="facts">
                <div><dt>Typical project</dt><dd>$800 – $6k+</dd></div>
                <div><dt>Timeline</dt><dd>10 – 15 days</dd></div>
                <div><dt>Permit delay</dt><dd>0 days (None)</dd></div>
              </dl>
              <div className="btn-row" style={{ marginTop: 30, gap: 12 }}>
                <Link className="btn btn-blue" href="/quote?type=interior">Quote my lobby sign</Link>
                <Link className="btn btn-ghost" href="/toolkit#cost">Estimate logo dimensions</Link>
              </div>
            </div>

            <div style={{ minWidth: 0 }}>
              <LobbyDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Anatomy */}
      <section className="light sec">
        <div className="wrap">
          <div className="eyebrow">What you&apos;re paying for</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>Anatomy of an interior lobby sign.</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, marginTop: 40, alignItems: 'center' }}>
            <div className="anat" aria-hidden="true" style={{ flex: '1 1 380px', minWidth: 0 }}>
              {/* Finished Accent Wall */}
              <div style={{ position: 'absolute', left: '8%', right: '8%', top: '12%', bottom: '12%', background: '#E2E8F2', borderRadius: 12, border: '1px solid #CBD5E6' }} />
              {/* Acrylic / Metal Logo Disc */}
              <div style={{ position: 'absolute', left: '26%', top: '22%', width: '48%', height: '56%', background: 'var(--navy)', borderRadius: '50%', boxShadow: '0 12px 30px rgba(6,38,102,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ width: '40%', height: '40%', border: '4px solid #fff', borderRadius: 6 }} />
              </div>
              {/* Standoff Barrels */}
              <div style={{ position: 'absolute', left: '20%', top: '26%', width: 14, height: 14, borderRadius: '50%', background: '#9AA3B2', boxShadow: '0 2px 6px rgba(0,0,0,0.3)' }} />
              <div style={{ position: 'absolute', right: '20%', top: '26%', width: 14, height: 14, borderRadius: '50%', background: '#9AA3B2', boxShadow: '0 2px 6px rgba(0,0,0,0.3)' }} />
              <div style={{ position: 'absolute', left: '20%', bottom: '26%', width: 14, height: 14, borderRadius: '50%', background: '#9AA3B2', boxShadow: '0 2px 6px rgba(0,0,0,0.3)' }} />
              <div style={{ position: 'absolute', right: '20%', bottom: '26%', width: 14, height: 14, borderRadius: '50%', background: '#9AA3B2', boxShadow: '0 2px 6px rgba(0,0,0,0.3)' }} />

              {/* Numbered Pins */}
              <span className="pin" style={{ left: '50%', top: '16%' }}>1</span>
              <span className="pin" style={{ left: '16%', top: '22%' }}>2</span>
              <span className="pin" style={{ left: '76%', top: '50%' }}>3</span>
              <span className="pin" style={{ left: '32%', top: '74%' }}>4</span>
              <span className="pin" style={{ left: '50%', top: '46%' }}>5</span>
              <span className="pin" style={{ left: '80%', top: '80%' }}>6</span>
            </div>

            <ol className="parts" id="lobbyParts" style={{ flex: '1 1 420px', minWidth: 0 }}>
              {LOBBY_PARTS.map((p, i) => (
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
          <div className="eyebrow">Mounting &amp; Wall Options</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>How they mount to your reception wall.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 18, marginTop: 40 }} id="lobbyMounts">
            {LOBBY_MOUNTS.map((m) => (
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
              <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>Pick a width. See distance and price.</h2>
            </div>
            <Link className="btn btn-dark" href="/toolkit#cost">Open the cost calculator</Link>
          </div>
          <div className="tbl-wrap" style={{ marginTop: 36 }}>
            <table style={{ minWidth: 680 }}>
              <thead>
                <tr>
                  <th scope="col">Overall logo width</th>
                  <th scope="col">Readable up to</th>
                  <th scope="col">Stands out up to</th>
                  <th scope="col">Typical price range</th>
                  <th scope="col">Common use</th>
                </tr>
              </thead>
              <tbody id="lobbySizes">
                {LOBBY_SIZES.map((h) => (
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
          <p className="note">Readable distance is tailored for interior hallway and lobby viewing distances. Prices include laser cutting, custom PMS paint matching, standoff mounting hardware, and professional Dallas–Fort Worth installation.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="paper sec">
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)', margin: 0 }}>Lobby sign questions.</h2>
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span className="kv">Often paired with</span>
              <Link href="/channel-letters" style={{ fontWeight: 700, color: 'var(--blue)' }}>Exterior channel letters →</Link>
              <Link href="/storefront-signs" style={{ fontWeight: 700, color: 'var(--blue)' }}>Storefront lightboxes →</Link>
              <Link href="/interior-ada-signs" style={{ fontWeight: 700, color: 'var(--blue)' }}>ADA room &amp; restroom signs →</Link>
            </div>
          </div>
          <div className="faq" id="lobbyFaq" style={{ flex: '2 1 520px', minWidth: 0 }}>
            <FAQAccordion items={LOBBY_FAQ} />
          </div>
        </div>
      </section>

      {/* Blue CTA Bar */}
      <section style={{ background: 'var(--blue)', color: '#fff' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between', paddingTop: 64, paddingBottom: 64 }}>
          <div>
            <div className="disp" style={{ fontSize: 'clamp(30px,5vw,40px)', lineHeight: 1 }}>See your logo on your reception wall.</div>
            <div style={{ color: '#E6EEFF', marginTop: 8, fontSize: 17 }}>Upload a photo of your wall for a free photorealistic 3D proof with your quote.</div>
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
