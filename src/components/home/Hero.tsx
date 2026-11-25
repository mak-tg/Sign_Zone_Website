import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero dark">
      <img
        src="/images/hero-1.jpg"
        alt="Illuminated commercial channel letter signs on storefront at night in Dallas-Fort Worth"
        width={1920}
        height={1080}
        className="hero-background hero-slide slide-1"
      />
      <img
        src="/images/hero-2.jpg"
        alt="Custom exterior commercial monument sign in North Texas business plaza"
        width={1920}
        height={1080}
        className="hero-background hero-slide slide-2"
      />
      <img
        src="/images/hero-3.jpg"
        alt="High-impact commercial business sign fabrication and installation in DFW"
        width={1920}
        height={1080}
        className="hero-background hero-slide slide-3"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="stripes" style={{ top: -80, right: -120 }} />

      <div className="wrap">
        <div style={{ flex: '1 1 480px', minWidth: 0 }}>
          <span className="pill">
            <span className="dot" />
            Custom Sign Company in Dallas–Fort Worth, TX · Since 2011
          </span>
          <h1 className="disp">
            Custom signs that help your business{' '}
            <span style={{ color: 'var(--elec)' }}>stand out.</span>
          </h1>
          <p className="sub">
            Sign Zone is a premier commercial sign company in{' '}
            <Link href="/locations/dallas">
              Dallas
            </Link>{' '}
            and{' '}
            <Link href="/locations/fort-worth">
              Fort Worth, TX
            </Link>
            . We design, fabricate, permit, and install custom business signs under one roof —{' '}
            <Link href="/channel-letters">
              channel letters
            </Link>
            ,{' '}
            <Link href="/monument-signs">
              monument signs
            </Link>
            ,{' '}
            <Link href="/pylon-signs">
              pylon signs
            </Link>
            , and{' '}
            <Link href="/storefront-signs">
              storefront lightboxes
            </Link>{' '}
            across North Texas.
          </p>
          <div className="btn-row" style={{ marginTop: 36 }}>
            <Link href="/quote" className="btn btn-blue" data-quote="">
              Get my free quote{' '}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link href="/#estimate" className="btn btn-ghost">
              Estimate my sign in 60 seconds
            </Link>
          </div>
          <ul className="ticks">
            <li>
              <svg className="check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4D8DFF" strokeWidth="2.5" aria-hidden="true">
                <path d="M4 12l5 5L20 6" />
              </svg>
              Quote within 24 hours
            </li>
            <li>
              <svg className="check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4D8DFF" strokeWidth="2.5" aria-hidden="true">
                <path d="M4 12l5 5L20 6" />
              </svg>
              Permits &amp; landlord approval handled
            </li>
            <li>
              <svg className="check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4D8DFF" strokeWidth="2.5" aria-hidden="true">
                <path d="M4 12l5 5L20 6" />
              </svg>
              Licensed TX electrical sign contractor
            </li>
            <li>
              <svg className="check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4D8DFF" strokeWidth="2.5" aria-hidden="true">
                <path d="M4 12l5 5L20 6" />
              </svg>
              Parts &amp; labor warranty included
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
