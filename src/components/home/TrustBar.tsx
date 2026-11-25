import { TRUST_STATS } from '@/data/siteData'

export default function TrustBar() {
  return (
    <section className="trust keep-dark">
      <div className="wrap">
        {TRUST_STATS.map((s) => (
          <div key={s.value}>
            <div className="disp">{s.value}</div>
            <small>{s.label}</small>
          </div>
        ))}
      </div>
    </section>
  )
}
