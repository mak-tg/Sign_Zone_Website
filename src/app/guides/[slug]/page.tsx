import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { GUIDES_ARTICLES } from '@/data/guidesData'
import FaqJsonLd from '@/components/seo/FaqJsonLd'

export const instant = false

type Params = { slug: string }

function renderContentWithLinks(text: string) {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g
  const parts: (string | React.ReactNode)[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    const [, label, href] = match
    const isExternal = href.startsWith('http')
    parts.push(
      <Link
        key={match.index}
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        style={{
          color: 'var(--blue)',
          fontWeight: 600,
          textDecoration: 'underline',
          textDecorationColor: 'rgba(0, 80, 240, 0.35)',
          textUnderlineOffset: 3,
        }}
      >
        {label}
      </Link>
    )
    lastIndex = regex.lastIndex
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }
  return parts.length > 0 ? parts : text
}

export async function generateStaticParams() {
  return Object.keys(GUIDES_ARTICLES).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const article = GUIDES_ARTICLES[slug]
  if (!article) return {}

  return {
    title: article.metaTitle,
    description: article.metaDesc,
    alternates: {
      canonical: `/guides/${slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDesc,
      url: `https://www.signzoneusa.com/guides/${slug}`,
      siteName: 'Sign Zone DFW',
      locale: 'en_US',
      type: 'article',
      images: [
        {
          url: '/images/logo.png',
          width: 800,
          height: 600,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.metaTitle,
      description: article.metaDesc,
      images: ['/images/logo.png'],
    },
  }
}

export default async function GuideDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const article = GUIDES_ARTICLES[slug]
  if (!article) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDesc,
    datePublished: '2026-01-15T08:00:00+00:00',
    dateModified: '2026-03-01T12:00:00+00:00',
    author: {
      '@type': 'Organization',
      name: 'Sign Zone Technical Team',
      url: 'https://www.signzoneusa.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sign Zone',
      url: 'https://www.signzoneusa.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.signzoneusa.com/images/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.signzoneusa.com/guides/${article.slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {article.faqs && <FaqJsonLd items={article.faqs} />}

      <article className="view">
        {/* Article Header (Dark Theme) */}
        <section className="dark" style={{ paddingTop: 36, paddingBottom: 68 }}>
          <div className="wrap" style={{ maxWidth: 880 }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: 'var(--dmuted)', marginBottom: 28 }}>
              <Link href="/" style={{ color: 'var(--dmuted)', textDecoration: 'none' }}>Home</Link>
              {' / '}
              <Link href="/guides" style={{ color: 'var(--dmuted)', textDecoration: 'none' }}>Guides</Link>
              {' / '}
              <span style={{ color: '#fff' }}>{article.tag}</span>
            </nav>

            <span className="eyebrow" style={{ display: 'inline-block', marginBottom: 16 }}>
              {article.tag}
            </span>
            <h1
              className="disp"
              style={{
                fontSize: 'clamp(32px, 5vw, 50px)',
                lineHeight: 1.05,
                color: 'var(--hl)',
                marginBottom: 20,
              }}
            >
              {article.title}
            </h1>
            <div style={{ fontSize: 14, color: 'var(--dsub)', display: 'flex', flexDirection: 'column', gap: 3 }}>
              <span>{article.readTime}</span>
              {article.updatedText && (
                <span style={{ fontSize: 12, color: 'var(--dsub)', opacity: 0.85 }}>
                  {article.updatedText}
                </span>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 22, paddingTop: 18, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--blue)', color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 15, flexShrink: 0 }}>
                SZ
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--hl)' }}>
                  Sign Zone project team
                </div>
                <div style={{ fontSize: 12, color: 'var(--dsub)' }}>
                  15+ Years Commercial Sign Experience · Dallas–Fort Worth, TX
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Body (Light/Paper Theme) */}
        <section className="light sec" style={{ background: '#fff' }}>
          <div className="wrap" style={{ maxWidth: 880 }}>
            {/* Executive Summary Callout */}
            <div
              style={{
                padding: '24px 28px',
                background: 'var(--paper)',
                borderLeft: '4px solid var(--blue)',
                borderRadius: 12,
                fontSize: 17,
                lineHeight: 1.6,
                color: 'var(--text)',
                marginBottom: 40,
              }}
            >
              <strong style={{ color: 'var(--navy)' }}>Executive Summary: </strong>
              <span style={{ color: 'var(--muted)' }}>{renderContentWithLinks(article.summary)}</span>
            </div>

            {/* Key Takeaways Box */}
            {article.keyTakeaways.length > 0 && (
              <div
                style={{
                  background: 'var(--paper)',
                  border: '1px solid var(--soft)',
                  borderRadius: 16,
                  padding: '28px 32px',
                  marginBottom: 48,
                }}
              >
                <div className="eyebrow" style={{ marginBottom: 8, fontSize: 12 }}>
                  Quick guide
                </div>
                <h2
                  className="disp"
                  style={{
                    margin: '0 0 16px',
                    fontSize: 22,
                    color: 'var(--navy)',
                    lineHeight: 1.15,
                  }}
                >
                  Main points for business owners
                </h2>
                <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {article.keyTakeaways.map((item, idx) => (
                    <li key={idx} style={{ fontSize: 15.5, lineHeight: 1.55, color: 'var(--muted)' }}>
                      {renderContentWithLinks(item)}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Content Sections */}
            {article.sections.map((sec, idx) => (
              <section key={idx} style={{ marginBottom: 48 }}>
                <h2
                  className="disp"
                  style={{
                    fontSize: 'clamp(24px, 3.5vw, 32px)',
                    color: 'var(--navy)',
                    lineHeight: 1.15,
                    marginBottom: 18,
                  }}
                >
                  {sec.heading}
                </h2>
                {sec.content.map((p, pIdx) => (
                  <p key={pIdx} style={{ fontSize: 16.5, lineHeight: 1.7, color: 'var(--muted)', marginBottom: 16 }}>
                    {renderContentWithLinks(p)}
                  </p>
                ))}

                {sec.table && (
                  <div style={{ overflowX: 'auto', margin: '28px 0 32px' }}>
                    <table
                      style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        fontSize: 14.5,
                        textAlign: 'left',
                        background: '#fff',
                        border: '1px solid var(--soft)',
                        borderRadius: 12,
                        overflow: 'hidden',
                      }}
                    >
                      <thead>
                        <tr style={{ background: 'var(--navy)', color: '#fff' }}>
                          {sec.table.headers.map((h, hIdx) => (
                            <th key={hIdx} style={{ padding: '14px 18px', fontWeight: 700, fontFamily: 'Archivo, sans-serif', letterSpacing: '.02em' }}>
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {sec.table.rows.map((row, rIdx) => (
                          <tr
                            key={rIdx}
                            style={{
                              borderBottom: '1px solid var(--soft)',
                              background: rIdx % 2 === 0 ? 'var(--paper)' : '#fff',
                            }}
                          >
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                style={{
                                  padding: '13px 18px',
                                  color: cIdx === 0 ? 'var(--navy)' : 'var(--muted)',
                                  fontWeight: cIdx === 0 ? 700 : 400,
                                }}
                              >
                                {renderContentWithLinks(cell)}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {sec.list && (
                  <ul
                    style={{
                      margin: '18px 0',
                      paddingLeft: 22,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 9,
                    }}
                  >
                    {sec.list.map((lItem, lIdx) => (
                      <li key={lIdx} style={{ fontSize: 15.5, lineHeight: 1.55, color: 'var(--muted)' }}>
                        {renderContentWithLinks(lItem)}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* Authoritative Conversion Box (Dark Theme Panel) */}
            <div
              className="guide-cta"
              style={{
                marginTop: 52,
                padding: '36px 40px',
                background: 'var(--panel)',
                border: '1px solid var(--line)',
                borderRadius: 16,
                color: 'var(--hl)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 24,
              }}
            >
              <div>
                <span
                  className="eyebrow"
                  style={{
                    fontSize: 12,
                    display: 'block',
                    marginBottom: 8,
                  }}
                >
                  Ready to calculate your sign?
                </span>
                <h2 className="disp" style={{ margin: '0 0 10px', fontSize: 26, lineHeight: 1.15 }}>
                  Get a clear quote for your sign.
                </h2>
                <p style={{ margin: 0, fontSize: 15, color: 'var(--dsub)', maxWidth: 480, lineHeight: 1.55 }}>
                  One team handles the drawings, city permits, Texas fabrication, and crane installation.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/toolkit" className="btn btn-ghost">
                  Use Cost Calculator →
                </Link>
                <Link href="/quote" className="btn btn-blue">
                  Get Free Quote →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
