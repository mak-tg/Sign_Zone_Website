import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Commercial Sign Planning Resources & Guides | Sign Zone DFW',
  description:
    'Free tools, cost calculators, permit checklists, and sign buyer guides to help you plan your commercial sign in Dallas–Fort Worth.',
  alternates: {
    canonical: '/resources',
  },
  openGraph: {
    title: 'Commercial Sign Planning Resources | Sign Zone DFW',
    description:
      'Tools, guides, and our 6-step turnkey process to help you plan your sign before spending a dollar.',
    url: 'https://www.signzoneusa.com/resources',
  },
}

const ITEMS = [
  {
    href: '/toolkit',
    category: 'Interactive Tools',
    title: 'Sign Toolkit',
    desc: 'Cost and payback calculators, a permit checklist and an opening-day planner.',
    action: 'Open Toolkit',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--blue, #0050F0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="8" y1="6" x2="16" y2="6" />
        <line x1="16" y1="14" x2="16" y2="18" />
        <path d="M16 10h.01" />
        <path d="M12 10h.01" />
        <path d="M8 10h.01" />
        <path d="M12 14h.01" />
        <path d="M8 14h.01" />
        <path d="M12 18h.01" />
        <path d="M8 18h.01" />
      </svg>
    ),
  },
  {
    href: '/process',
    category: 'Turnkey Process',
    title: 'How It Works',
    desc: 'Six steps from idea to lights on, with one project manager throughout.',
    action: 'View Steps',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--blue, #0050F0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    href: '/guides',
    category: 'Buyer Knowledge',
    title: 'Guides',
    desc: "Sign buyer's guides with straight answers before you spend a dollar.",
    action: 'Read Guides',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--blue, #0050F0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
]

export default function ResourcesPage() {
  return (
    <div className="view" id="v-resources">
      {/* Hero Header (Dark Theme) */}
      <section className="dark" style={{ paddingTop: 48, paddingBottom: 68 }}>
        <div className="wrap">
          <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: 'var(--dmuted)', marginBottom: 28 }}>
            <Link href="/" style={{ color: 'var(--dmuted)', textDecoration: 'none' }}>Home</Link>
            {' / '}
            <span style={{ color: '#fff' }}>Resources</span>
          </nav>
          <div className="eyebrow">Resources &amp; Planning</div>
          <h1
            className="disp sec-h"
            style={{ fontSize: 'clamp(36px, 5.5vw, 56px)', lineHeight: 0.98, maxWidth: 880 }}
          >
            Plan your sign.
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: 'var(--dsub)',
              margin: '20px 0 0',
              maxWidth: 640,
            }}
          >
            Tools, guides, and our 6-step turnkey process to help you plan your commercial sign before spending a dollar.
          </p>
        </div>
      </section>

      {/* Resource Cards Section (Light Paper Theme - Project Standard Card Theme) */}
      <section className="light sec" style={{ background: 'var(--paper)', paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 24,
              justifyContent: 'center',
            }}
          >
            {ITEMS.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="card"
                style={{
                  padding: '32px 28px',
                  background: '#fff',
                  border: '1px solid var(--soft)',
                  borderRadius: 16,
                  boxShadow: '0 4px 20px rgba(6, 38, 102, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none',
                  transition: 'transform .18s ease, box-shadow .18s ease, border-color .18s ease',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: 'var(--paper)',
                      border: '1px solid var(--soft)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {i.icon}
                  </div>
                  <span className="tag">{i.category}</span>
                </div>

                <h2
                  style={{
                    fontFamily: 'var(--font-archivo, Archivo, sans-serif)',
                    margin: 0,
                    fontSize: 22,
                    fontWeight: 800,
                    color: 'var(--navy)',
                    lineHeight: 1.25,
                  }}
                >
                  {i.title}
                </h2>

                <p
                  style={{
                    margin: '12px 0 0',
                    color: 'var(--muted)',
                    fontSize: 15,
                    lineHeight: 1.55,
                    flex: 1,
                  }}
                >
                  {i.desc}
                </p>

                <div
                  style={{
                    marginTop: 24,
                    paddingTop: 16,
                    borderTop: '1px solid var(--soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--blue)' }}>
                    {i.action} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
