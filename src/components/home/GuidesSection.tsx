import { GUIDES } from '@/data/siteData'

export default function GuidesSection() {
  return (
    <section className="light sec" id="resources">
      <div className="wrap">
        <div className="eyebrow">Sign buyer&apos;s guides</div>
        <h2 className="disp sec-h">Straight answers.</h2>
        <div className="grid-auto" id="guides" style={{ marginTop: 40 }}>
          {GUIDES.map((g) => (
            <article key={g.title} className="card" style={{ gap: 10, minHeight: 170 }}>
              <span className="tag">{g.tag}</span>
              <span style={{ fontSize: 20, fontWeight: 800, lineHeight: 1.25, color: 'var(--navy)' }}>
                {g.title}
              </span>
              <span style={{ fontSize: 14, color: 'var(--muted2)', marginTop: 'auto' }}>
                {g.meta}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
