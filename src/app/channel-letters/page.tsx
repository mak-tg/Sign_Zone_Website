import type { Metadata } from 'next'
import Link from 'next/link'
import LightingDemo from '@/components/channel-letters/LightingDemo'
import FAQAccordion from '@/components/ui/FAQAccordion'
import FaqJsonLd from '@/components/seo/FaqJsonLd'
import { CL_PARTS, CL_MOUNTS, CL_SIZES, CL_FAQ } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Custom LED Channel Letter Signs for DFW Storefronts | Sign Zone',
  description:
    'Individually built 3D channel letters, lit with ultra-bright LEDs, mounted to your building. Front-lit, halo-lit, and reverse channel letters built to municipal codes.',
  alternates: {
    canonical: '/channel-letters',
  },
  openGraph: {
    title: 'Custom LED Channel Letter Signs for DFW Storefronts | Sign Zone',
    description:
      'Individually built 3D channel letters, lit with ultra-bright LEDs, mounted to your building. Designed, permitted, and installed across Dallas–Fort Worth.',
    url: 'https://www.signzoneusa.com/channel-letters',
  },
}

export default function ChannelLettersPage() {
  return (
    <div className="view" id="v-channel-letters">
      <FaqJsonLd items={CL_FAQ} />
      {/* Hero Section */}
      <section className="dark">
        <div className="wrap" style={{ paddingTop: 28, paddingBottom: 88 }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: 'var(--dmuted)' }}>
            <Link href="/" style={{ color: 'var(--dmuted)' }}>Home</Link>
            {' / '}
            <Link href="/#signs" style={{ color: 'var(--dmuted)' }}>Signs</Link>
            {' / '}
            <span style={{ color: '#fff' }}>Channel letters</span>
          </nav>

          <div className="cl-hero-grid">
            <div style={{ minWidth: 0 }}>
              <h1 className="disp sec-h" style={{ fontSize: 'clamp(32px, 3.8vw, 48px)', lineHeight: 1.02, margin: 0, maxWidth: 480 }}>
                Channel letter signs for DFW storefronts.
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--dsub)', margin: '22px 0 0', maxWidth: 480 }}>
                Individually built 3D letters, lit with LEDs, mounted to your building. The sign most landlords ask for, and the one customers read from the road.
              </p>
              <dl className="facts">
                <div><dt>Typical project</dt><dd>$3k – $20k+</dd></div>
                <div><dt>Timeline</dt><dd>4 – 8 weeks</dd></div>
                <div><dt>Warranty</dt><dd>[X] years</dd></div>
              </dl>
              <div className="btn-row" style={{ marginTop: 30, gap: 12 }}>
                <Link className="btn btn-blue" href="/quote?type=channel">Quote my channel letters</Link>
                <Link className="btn btn-ghost" href="/toolkit#cost">Price them per letter</Link>
              </div>
            </div>

            <div style={{ minWidth: 0 }}>
              <LightingDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Anatomy */}
      <section className="light sec">
        <div className="wrap">
          <div className="eyebrow">What you&apos;re paying for</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>Anatomy of a channel letter.</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, marginTop: 40, alignItems: 'center' }}>
            <div className="anat" aria-hidden="true" style={{ flex: '1 1 380px', minWidth: 0 }}>
              <div style={{ position: 'absolute', left: '12%', top: '14%', width: '44%', height: '66%', background: 'var(--blue)', borderRadius: 6, boxShadow: '18px 18px 0 var(--navy)' }} />
              <div style={{ position: 'absolute', left: '12%', top: '14%', width: '44%', height: '66%', border: '6px solid var(--text)', borderRadius: 6 }} />
              <div style={{ position: 'absolute', left: '20%', top: '30%', width: '28%', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
                <span style={{ height: 12, borderRadius: 3, background: 'var(--sky)' }} />
                <span style={{ height: 12, borderRadius: 3, background: 'var(--sky)' }} />
                <span style={{ height: 12, borderRadius: 3, background: 'var(--sky)' }} />
                <span style={{ height: 12, borderRadius: 3, background: 'var(--sky)' }} />
                <span style={{ height: 12, borderRadius: 3, background: 'var(--sky)' }} />
                <span style={{ height: 12, borderRadius: 3, background: 'var(--sky)' }} />
              </div>
              <div style={{ position: 'absolute', left: '6%', right: '6%', bottom: '10%', height: 18, background: '#9AA3B2', borderRadius: 4 }} />
              <span className="pin" style={{ left: '30%', top: '8%' }}>1</span>
              <span className="pin" style={{ left: '60%', top: '28%' }}>2</span>
              <span className="pin" style={{ left: '8%', top: '40%' }}>3</span>
              <span className="pin" style={{ left: '26%', top: '52%' }}>4</span>
              <span className="pin" style={{ left: '62%', top: '70%' }}>5</span>
              <span className="pin" style={{ left: '80%', top: '82%' }}>6</span>
            </div>

            <ol className="parts" id="clParts" style={{ flex: '1 1 420px', minWidth: 0 }}>
              {CL_PARTS.map((p, i) => (
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
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>How they attach to your building.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 18, marginTop: 40 }} id="clMounts">
            {CL_MOUNTS.map((m) => (
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
              <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>Pick a height. See distance and price.</h2>
            </div>
            <Link className="btn btn-dark" href="/toolkit#cost">Open the cost calculator</Link>
          </div>
          <div className="tbl-wrap" style={{ marginTop: 36 }}>
            <table style={{ minWidth: 680 }}>
              <thead>
                <tr>
                  <th scope="col">Letter height</th>
                  <th scope="col">Readable up to</th>
                  <th scope="col">Stands out up to</th>
                  <th scope="col">Typical price per letter</th>
                  <th scope="col">Common use</th>
                </tr>
              </thead>
              <tbody id="clSizes">
                {CL_SIZES.map((h) => (
                  <tr key={h.h}>
                    <th scope="row" style={{ fontWeight: 800, color: 'var(--blue)' }}>{h.h}&quot;</th>
                    <td>{h.h * 30} ft</td>
                    <td>{h.h * 10} ft</td>
                    <td style={{ fontWeight: 700, color: 'var(--text)' }}>{h.range}</td>
                    <td>{h.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="note">Readable = 30 ft per inch (U.S. Sign Council). Stands out = 10 ft per inch. Prices are 2026 U.S. industry ranges for front-lit letters, before install and permits.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="paper sec">
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)', margin: 0 }}>Channel letter questions.</h2>
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span className="kv">Often paired with</span>
              <Link href="/monument-signs" style={{ fontWeight: 700, color: 'var(--blue)' }}>Monument signs →</Link>
              <Link href="/storefront-signs" style={{ fontWeight: 700, color: 'var(--blue)' }}>Storefront lightboxes &amp; blade signs →</Link>
              <Link href="/lobby-signs" style={{ fontWeight: 700, color: 'var(--blue)' }}>Lobby &amp; reception signs →</Link>
            </div>
          </div>
          <div className="faq" id="clFaq" style={{ flex: '2 1 520px', minWidth: 0 }}>
            <FAQAccordion items={CL_FAQ} />
          </div>
        </div>
      </section>

      {/* Blue CTA Bar */}
      <section style={{ background: 'var(--blue)', color: '#fff' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between', paddingTop: 64, paddingBottom: 64 }}>
          <div>
            <div className="disp" style={{ fontSize: 'clamp(30px,5vw,40px)', lineHeight: 1 }}>See your letters on your building.</div>
            <div style={{ color: '#E6EEFF', marginTop: 8, fontSize: 17 }}>Free mockup, day and night, with your quote.</div>
          </div>
          <div className="btn-row" style={{ gap: 12 }}>
            <Link className="btn btn-dark" href="/quote?type=channel">Get my free mockup</Link>
            <a className="btn btn-ghost" href="tel:2147144623">214-714-4623</a>
          </div>
        </div>
      </section>
    </div>
  )
}
