import Link from 'next/link'
import { CITIES_ALL, LOCATION_PAGES } from '@/data/siteData'

export default function BottomCTA() {
  return (
    <section className="dark sec home-bottom-cta" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="stripes" style={{ bottom: -200, left: -160, opacity: 0.16 }} />
      <div className="wrap" style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'flex-start' }}>
        <div style={{ flex: '1.3 1 480px', minWidth: 0 }}>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(36px,6vw,64px)', lineHeight: 0.95, margin: 0 }}>
            <span style={{ color: 'var(--elec)' }}>Get a quote in 24 hours.</span>
          </h2>
          <p style={{ fontSize: 19, lineHeight: 1.55, color: 'var(--dsub)', margin: '24px 0 0', maxWidth: 560 }}>
            Send a photo of your building and your logo. We&apos;ll come back with a mockup, a price and a timeline.
          </p>
          <div className="btn-row" style={{ marginTop: 32 }}>
            <Link href="/quote" className="btn btn-blue" data-quote="">
              Start my free quote
            </Link>
            <a href="sms:2147144623" className="btn btn-ghost">
              Text us a photo
            </a>
            <a href="tel:2147144623" className="btn btn-ghost">
              Call 214-714-4623
            </a>
          </div>
          <div className="bottom-cta-proof" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 10, marginTop: 32 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: 16, border: '1px solid rgba(130,165,225,.2)', borderRadius: 12, background: 'rgba(255,255,255,.035)' }}><strong style={{ color: '#fff', fontSize: 15 }}>24 hours</strong><span style={{ color: 'var(--dmuted)', fontSize: 12, lineHeight: 1.4 }}>Written quote turnaround</span></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: 16, border: '1px solid rgba(130,165,225,.2)', borderRadius: 12, background: 'rgba(255,255,255,.035)' }}><strong style={{ color: '#fff', fontSize: 15 }}>One local team</strong><span style={{ color: 'var(--dmuted)', fontSize: 12, lineHeight: 1.4 }}>Design, permits, fabrication, install</span></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: 16, border: '1px solid rgba(130,165,225,.2)', borderRadius: 12, background: 'rgba(255,255,255,.035)' }}><strong style={{ color: '#fff', fontSize: 15 }}>Photo friendly</strong><span style={{ color: 'var(--dmuted)', fontSize: 12, lineHeight: 1.4 }}>Start with a storefront picture</span></div>
          </div>
        </div>

        <div className="tool bottom-cta-areas" style={{ flex: '1 1 360px', minWidth: 0, padding: 28 }}>
          <div className="kv" style={{ color: 'var(--dmuted)' }}>Where we install</div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '6px 10px',
              marginTop: 14,
            }}
          >
            {CITIES_ALL.map((city) => {
              const loc = LOCATION_PAGES.find(
                (l) => l.name.toLowerCase() === city.toLowerCase()
              )
              const inner = (
                <>
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: '50%',
                      background: 'var(--elec)',
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: 13, fontWeight: 500, color: '#D5DCEA' }}>
                    {city}
                  </span>
                </>
              )

              return loc ? (
                <Link
                  key={city}
                  href={`/locations/${loc.slug}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '7px 10px',
                    borderRadius: 8,
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    textDecoration: 'none',
                    transition: 'all 0.15s ease',
                  }}
                  className="city-link-item"
                >
                  {inner}
                </Link>
              ) : (
                <div
                  key={city}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '7px 10px',
                    borderRadius: 8,
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.04)',
                  }}
                >
                  {inner}
                </div>
              )
            })}
          </div>
          <div
            style={{
              marginTop: 20,
              padding: '14px 16px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.09)',
              borderRadius: 12,
              display: 'flex',
              flexDirection: 'column',
              gap: 5,
            }}
          >
            <span style={{ fontSize: 13, color: '#C8D3E6', lineHeight: 1.4 }}>
              Outside DFW or opening in several states?
            </span>
            <Link
              href="/quote"
              style={{
                fontSize: 13.5,
                fontWeight: 700,
                color: 'var(--elec)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              Ask about our multi-location program <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
