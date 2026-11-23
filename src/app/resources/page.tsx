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
  { href: '/toolkit', title: 'Sign Toolkit', desc: 'Cost and payback calculators, a permit checklist and an opening-day planner.' },
  { href: '/process', title: 'How it works', desc: 'Six steps from idea to lights on, with one project manager throughout.' },
  { href: '/guides', title: 'Guides', desc: "Sign buyer's guides with straight answers before you spend a dollar." },
]

export default function Page() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="eyebrow">Resources</div>
        <h1 className="disp sec-h">Plan your sign.</h1>
        <div className="grid-auto" style={{ marginTop: 40, gap: 16 }}>
          {ITEMS.map((i) => (
            <Link key={i.href} href={i.href} className="card" style={{ padding: 28, textDecoration: 'none', display: 'block' }}>
              <h2 style={{ margin: 0, fontSize: 22, color: 'var(--navy)' }}>{i.title}</h2>
              <p style={{ margin: '10px 0 0', color: 'var(--text2, #4a5568)', lineHeight: 1.5 }}>{i.desc}</p>
              <span style={{ display: 'inline-block', marginTop: 16, fontWeight: 700, color: 'var(--blue, #1d4ed8)' }}>Open →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
