import Link from 'next/link'

export default function MonumentSection() {
  return (
    <section className="dark sec">
      <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 56, alignItems: 'center' }}>
        <div style={{ flex: '1.2 1 480px', minWidth: 0, borderRadius: 20, overflow: 'hidden', border: '1px solid var(--line)' }}>
          <img
            src="/images/monument.jpg"
            alt="Stone-base monument sign with multi-tenant panels for a shopping center"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
        <div style={{ flex: '1 1 380px', minWidth: 0 }}>
          <div className="eyebrow">Featured: monument signs</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(34px,5vw,48px)' }}>
            Monument signs people can see.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--dsub)', margin: '20px 0 0' }}>
            For retail centers, shopping plazas, medical buildings and offices set back from the road. Stone, brick or aluminum bases, lit tenant panels you can swap when tenants change.
          </p>
          <ul className="ticks" style={{ gridTemplateColumns: '1fr', marginTop: 24, fontSize: 16, color: 'var(--dtext)' }}>
            <li>
              <svg className="check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4D8DFF" strokeWidth="2.5" aria-hidden="true">
                <path d="M4 12l5 5L20 6" />
              </svg>
              Engineering &amp; foundation drawings included
            </li>
            <li>
              <svg className="check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4D8DFF" strokeWidth="2.5" aria-hidden="true">
                <path d="M4 12l5 5L20 6" />
              </svg>
              Multi-tenant panels with replacement program
            </li>
            <li>
              <svg className="check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4D8DFF" strokeWidth="2.5" aria-hidden="true">
                <path d="M4 12l5 5L20 6" />
              </svg>
              Optional LED message center built in
            </li>
          </ul>
          <div className="btn-row" style={{ marginTop: 32 }}>
            <Link href="/monument-signs" className="btn btn-blue">
              Explore Monument Signs →
            </Link>
            <Link href="/quote?type=monument" className="btn btn-ghost" data-quote="monument">
              Get written quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
