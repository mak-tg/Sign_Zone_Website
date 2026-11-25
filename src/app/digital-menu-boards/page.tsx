import type { Metadata } from 'next'
import Link from 'next/link'
import DigitalMenuDemo from '@/components/signs/DigitalMenuDemo'
import FAQAccordion from '@/components/ui/FAQAccordion'
import FaqJsonLd from '@/components/seo/FaqJsonLd'
import ServiceProjectShowcase from '@/components/common/ServiceProjectShowcase'

export const metadata: Metadata = {
  title: 'Digital Menu Boards & Drive-Thru Screens DFW | Sign Zone',
  description:
    'Indoor 4K commercial digital menu boards and weatherproof outdoor drive-thru menu screens in Dallas–Fort Worth. Cloud-managed updates from your phone.',
  alternates: {
    canonical: '/digital-menu-boards',
  },
  openGraph: {
    title: 'Digital Menu Boards & Drive-Thru Screens DFW | Sign Zone',
    description:
      'Turnkey digital menu board systems for restaurants, coffee shops, and drive-thrus across Dallas–Fort Worth.',
    url: 'https://www.signzoneusa.com/digital-menu-boards',
  },
}

const MENU_PARTS = [
  {
    name: '24/7 Commercial 4K Displays',
    desc: 'Commercial-grade LG/Samsung signage monitors rated for 16/7 or 24/7 operation—never consumer TVs that burn out.',
  },
  {
    name: 'High-Bright 2,500+ Nit Outdoor Option',
    desc: 'Sunlight-readable anti-glare screens inside IP65 enclosures built for Texas summer drive-thru lanes.',
  },
  {
    name: 'Zero-Gap Alignment Mounts',
    desc: 'Micro-adjustable scissor and rail mounts keeping 2-, 3-, or 5-screen arrays razor-level across the counter.',
  },
  {
    name: 'Cloud CMS Media Players',
    desc: 'Compact solid-state players allowing instant price edits, sold-out toggles, and automated breakfast/lunch swaps.',
  },
  {
    name: 'Custom Menu Layout Design',
    desc: 'Clean, high-margin menu architecture designed for fast eye-tracking and shorter register wait times.',
  },
  {
    name: 'Concealed Power & Data Routing',
    desc: 'Clean low-profile wall or concrete trench cabling installed by licensed commercial technicians.',
  },
]

const MENU_MOUNTS = [
  {
    name: 'Multi-Screen Counter Array',
    desc: 'Two to five 49" or 55" commercial displays mounted side-by-side above your order counter.',
    when: 'Fast-casual restaurants, cafes, bakeries, and food halls.',
  },
  {
    name: 'Outdoor Drive-Thru Pedestal',
    desc: 'Weather-sealed dual or triple high-bright screens on structural steel posts with clearance bars and canopies.',
    when: 'Coffee drive-thrus, QSR lanes, and car wash pay stations.',
  },
  {
    name: 'Vertical Promo & Kiosk Screens',
    desc: 'Portrait-mounted 43" or 55" displays highlighting seasonal specials, loyalty QR codes, and combos.',
    when: 'Lobbies, bars, ice cream shops, and pickup waiting areas.',
  },
]

const MENU_SIZES = [
  { h: 'Single 50" Portrait Promo', readable: '25 ft', stands: 'Counter', range: '$1,400 – $2,400', use: 'Specials boards, loyalty promos, pickup queues' },
  { h: '3-Screen 50" Indoor Array', readable: '40 ft', stands: 'Dining room', range: '$3,800 – $6,500', use: 'Standard QSR, coffee shops, fast-casual dining' },
  { h: '4–5 Screen Wide Counter', readable: '50 ft', stands: 'Full store', range: '$5,500 – $9,500', use: 'Full-menu restaurants, food halls, cafeterias' },
  { h: 'Dual Outdoor Drive-Thru', readable: '60 ft', stands: 'Drive lane', range: '$8,500 – $16,000+', use: 'High-bright sunlight-readable drive-thru pedestals' },
  { h: 'Multi-Store Cloud Rollout', readable: 'Fleet-wide', stands: 'Cloud sync', range: 'Custom package', use: 'Franchise chains syncing pricing across DFW' },
]

const MENU_FAQ = [
  {
    q: 'Why use commercial displays instead of regular retail TVs for menu boards?',
    a: 'Consumer TVs are only rated for 4–6 hours of home use per day, overheat in portrait orientation, and void their warranty in restaurants. Commercial signage displays are rated for 16–24 hours daily with 3-year commercial warranties and higher brightness.',
  },
  {
    q: 'Can I update prices and sold-out items from my phone?',
    a: 'Yes! Our cloud CMS software lets you update prices, swap specials, or schedule breakfast-to-lunch menu transitions automatically from any phone or laptop.',
  },
  {
    q: 'Do you design the menu graphics or just install the screens?',
    a: 'Both. Our design team formats your menu items, photography, and pricing into clean, high-converting digital templates ready to go live on day one.',
  },
  {
    q: 'Are outdoor drive-thru screens bright enough for direct Texas sunlight?',
    a: 'Yes. Our outdoor drive-thru enclosures use 2,500+ nit commercial panels with optical bonding and anti-reflective glass, plus thermostatically controlled cooling.',
  },
  {
    q: 'How fast can an indoor digital menu board system be installed?',
    a: 'Most 2- to 4-screen indoor menu board packages are delivered, mounted, and configured within 1 to 2 weeks of order approval.',
  },
]

export default function DigitalMenuBoardsPage() {
  return (
    <div className="view" id="v-digital-menu-boards">
      <FaqJsonLd items={MENU_FAQ} />

      <section className="dark">
        <div className="wrap" style={{ paddingTop: 28, paddingBottom: 88 }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: 'var(--dmuted)' }}>
            <Link href="/" style={{ color: 'var(--dmuted)' }}>Home</Link>
            {' / '}
            <Link href="/signs" style={{ color: 'var(--dmuted)' }}>Signs</Link>
            {' / '}
            <span style={{ color: '#fff' }}>Digital menu boards</span>
          </nav>

          <div className="cl-hero-grid">
            <div style={{ minWidth: 0 }}>
              <h1 className="disp sec-h" style={{ fontSize: 'clamp(32px, 3.8vw, 48px)', lineHeight: 1.02, margin: 0, maxWidth: 480 }}>
                Digital menu boards &amp; drive-thru screens for DFW.
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--dsub)', margin: '22px 0 0', maxWidth: 480 }}>
                Commercial 24/7 indoor arrays and sunlight-readable drive-thru displays. Update prices, daypart menus, and specials across one or fifty stores from your phone.
              </p>
              <dl className="facts">
                <div><dt>Typical project</dt><dd>$1.4k – $16k+</dd></div>
                <div><dt>Turnaround</dt><dd>1 – 3 weeks</dd></div>
                <div><dt>Displays</dt><dd>24/7 Commercial</dd></div>
              </dl>
              <div className="btn-row" style={{ marginTop: 30, gap: 12 }}>
                <Link className="btn btn-blue" href="/quote?type=digital">Quote my menu boards</Link>
                <Link className="btn btn-ghost" href="/toolkit#cost">Estimate project cost</Link>
              </div>
            </div>

            <div style={{ minWidth: 0 }}>
              <DigitalMenuDemo />
            </div>
          </div>
        </div>
      </section>

      <section className="light sec">
        <div className="wrap">
          <div className="eyebrow">What you&apos;re paying for</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>What goes into a commercial digital menu system?</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, marginTop: 40, alignItems: 'center' }}>
            <div className="anat" aria-hidden="true" style={{ flex: '1 1 380px', minWidth: 0 }}>
              <div style={{ position: 'absolute', left: '12%', top: '20%', width: '23%', height: '46%', background: 'var(--navy)', borderRadius: 6, border: '3px solid var(--blue)' }} />
              <div style={{ position: 'absolute', left: '38%', top: '20%', width: '23%', height: '46%', background: 'var(--navy)', borderRadius: 6, border: '3px solid var(--blue)' }} />
              <div style={{ position: 'absolute', left: '64%', top: '20%', width: '23%', height: '46%', background: 'var(--navy)', borderRadius: 6, border: '3px solid var(--blue)' }} />
              <div style={{ position: 'absolute', left: '10%', right: '10%', bottom: '14%', height: 14, background: '#9AA3B2', borderRadius: 4 }} />

              <span className="pin" style={{ left: '23%', top: '34%' }}>1</span>
              <span className="pin" style={{ left: '75%', top: '30%' }}>2</span>
              <span className="pin" style={{ left: '50%', top: '22%' }}>3</span>
              <span className="pin" style={{ left: '50%', top: '48%' }}>4</span>
              <span className="pin" style={{ left: '23%', top: '54%' }}>5</span>
              <span className="pin" style={{ left: '60%', top: '76%' }}>6</span>
            </div>

            <ol className="parts" style={{ flex: '1 1 420px', minWidth: 0 }}>
              {MENU_PARTS.map((p, i) => (
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
          <div className="eyebrow">Screen Configurations</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>Indoor counter arrays and outdoor drive-thru lanes.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 18, marginTop: 40 }}>
            {MENU_MOUNTS.map((m) => (
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
              <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>Turnkey menu board packages and budgets.</h2>
            </div>
            <Link className="btn btn-dark" href="/toolkit#cost">Open the cost calculator</Link>
          </div>
          <div className="tbl-wrap" style={{ marginTop: 36 }}>
            <table style={{ minWidth: 680 }}>
              <thead>
                <tr>
                  <th scope="col">System configuration</th>
                  <th scope="col">Viewing distance</th>
                  <th scope="col">Placement</th>
                  <th scope="col">Typical price range</th>
                  <th scope="col">Common use</th>
                </tr>
              </thead>
              <tbody>
                {MENU_SIZES.map((h) => (
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
          <p className="note">Pricing includes commercial-grade displays, zero-gap mounting hardware, media players, and professional DFW installation.</p>
        </div>
      </section>

      <ServiceProjectShowcase
        category="interior"
        title="Interior & restaurant branding across DFW."
        subtitle="See how local restaurants, coffee houses, and retail brands finish their interiors."
      />

      <section className="paper sec">
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)', margin: 0 }}>Questions about digital menu boards</h2>
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span className="kv">Often paired with</span>
              <Link href="/led-message-centers" style={{ fontWeight: 700, color: 'var(--blue)' }}>LED message centers →</Link>
              <Link href="/channel-letters" style={{ fontWeight: 700, color: 'var(--blue)' }}>Channel letters →</Link>
              <Link href="/window-graphics" style={{ fontWeight: 700, color: 'var(--blue)' }}>Window graphics →</Link>
            </div>
          </div>
          <div className="faq" style={{ flex: '2 1 520px', minWidth: 0 }}>
            <FAQAccordion items={MENU_FAQ} />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--blue)', color: '#fff' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between', paddingTop: 64, paddingBottom: 64 }}>
          <div>
            <div className="disp" style={{ fontSize: 'clamp(30px,5vw,40px)', lineHeight: 1 }}>Upgrade to effortless menu updates.</div>
            <div style={{ color: '#E6EEFF', marginTop: 8, fontSize: 17 }}>Free counter layout review, menu screen demo, and written quote in 24 hours.</div>
          </div>
          <div className="btn-row" style={{ gap: 12 }}>
            <Link className="btn btn-dark" href="/quote?type=digital">Get my free quote</Link>
            <a className="btn btn-ghost" href="tel:2147144623">214-714-4623</a>
          </div>
        </div>
      </section>
    </div>
  )
}
