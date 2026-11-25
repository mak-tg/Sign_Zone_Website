import Link from 'next/link'
import Image from 'next/image'
import { PROJECTS, ProjectItem } from '@/data/projectsData'

interface ServiceProjectShowcaseProps {
  category: ProjectItem['category']
  title?: string
  subtitle?: string
}

export default function ServiceProjectShowcase({
  category,
  title = 'Recent sign installations across Dallas–Fort Worth.',
  subtitle = 'See how local businesses customize their exterior and interior sign systems with Sign Zone.',
}: ServiceProjectShowcaseProps) {
  // Primary matching projects for this sign category
  const directMatches = PROJECTS.filter((p) => p.category === category)

  // If there are no matching projects for this specific sign category in our current portfolio,
  // do NOT show a gallery with mismatched sign types.
  if (directMatches.length === 0) {
    return null
  }

  const displayProjects = directMatches.slice(0, 4)

  return (
    <section className="light sec" style={{ padding: '72px 0', borderTop: '1px solid var(--soft)' }}>
      <div className="wrap">
        <div className="eyebrow">Local Project Proof</div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 20,
            marginBottom: 36,
          }}
        >
          <div>
            <h2
              className="disp sec-h"
              style={{ fontSize: 'clamp(28px, 3.8vw, 42px)', margin: '8px 0 0', color: 'var(--navy)' }}
            >
              {title}
            </h2>
            <p style={{ fontSize: 16.5, color: 'var(--muted)', margin: '12px 0 0', maxWidth: 640 }}>
              {subtitle}
            </p>
          </div>
          <Link href="/projects" className="btn btn-line" style={{ alignSelf: 'flex-start' }}>
            View all 30 DFW projects →
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 24 }}>
          {displayProjects.map((p) => (
            <div
              key={p.id}
              style={{
                background: '#fff',
                borderRadius: 12,
                overflow: 'hidden',
                border: '1px solid var(--soft)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ position: 'relative', width: '100%', height: 210 }}>
                <Image
                  src={p.image}
                  alt={`${p.name} - ${p.signType} installed in ${p.city}, TX by Sign Zone`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: 20, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '.06em',
                    color: 'var(--blue)',
                  }}
                >
                  {p.meta}
                </span>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--navy)', margin: '6px 0 8px' }}>
                  {p.name}
                </h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.5, color: 'var(--muted)', margin: 0, flexGrow: 1 }}>
                  {p.overview}
                </p>
                <div
                  style={{
                    marginTop: 14,
                    paddingTop: 12,
                    borderTop: '1px solid #f1f5f9',
                    fontSize: 12.5,
                    fontWeight: 600,
                    color: 'var(--text)',
                  }}
                >
                  Sign system: <span style={{ color: 'var(--blue)' }}>{p.signType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
