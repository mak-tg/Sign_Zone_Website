import Link from 'next/link'
import { INDUSTRIES } from '@/data/siteData'

export default function IndustriesSection() {
  return (
    <section className="light sec" id="industries">
      <div className="wrap">
        <div className="eyebrow">Industries</div>
        <h2 className="disp sec-h">
          Built for your industry.
        </h2>
        <div className="grid-auto" id="indGrid" style={{ marginTop: 40, gap: 14 }}>
          {INDUSTRIES.map((ind) => (
            <Link
              key={ind.slug}
              id={ind.slug}
              href={`/industries/${ind.slug}`}
              className="card"
              style={{
                background: 'var(--paper)',
                borderColor: 'transparent',
                gap: 8,
                minHeight: 120,
                padding: 22,
                textDecoration: 'none',
              }}
            >
              <span style={{ fontSize: 19, fontWeight: 800, color: 'var(--navy)' }}>
                {ind.name}
              </span>
              <span style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--muted)' }}>
                {ind.desc}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
