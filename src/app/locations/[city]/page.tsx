import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { LOCATION_PAGES } from '@/data/siteData'
import { CITY_PAGES_DATA } from '@/data/locationData'

export const instant = false

type Params = { city: string }

export async function generateStaticParams() {
  return LOCATION_PAGES.map((loc) => ({ city: loc.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { city } = await params
  const data = CITY_PAGES_DATA[city]
  if (!data) return {}
  return {
    title: data.title,
    description: data.metaDesc,
  }
}

export default async function LocationPage({ params }: { params: Promise<Params> }) {
  const { city } = await params
  const loc = LOCATION_PAGES.find((l) => l.slug === city)
  const data = CITY_PAGES_DATA[city]
  if (!loc || !data) notFound()

  return (
    <>
      {/* City Hero */}
      <section className="city-hero dark">
        <div className="wrap">
          <div className="city-hero-copy">
            <div className="city-crumb">
              <Link href="/">Home</Link> / <Link href="/#locations">Locations</Link> / {loc.name}
            </div>
            <div className="eyebrow">{loc.name}, Texas · Commercial signs</div>
            <h1 className="disp">
              Business signs built for <span>{data.h1City}</span>
            </h1>
            <p>{data.intro}</p>
            <div className="btn-row">
              <Link href="/quote" className="btn btn-blue">Get my free quote →</Link>
              <a href="tel:2147144623" className="btn btn-ghost">Call 214-714-4623</a>
            </div>
          </div>

          {data.heroImg ? (
            <div className="city-hero-image">
              <Image
                src={data.heroImg}
                alt={data.heroAlt || `${loc.name} signs`}
                width={600}
                height={450}
                priority
                style={{ width: '100%', height: 'auto', aspectRatio: '4/3', objectFit: 'cover' }}
              />
            </div>
          ) : (
            <div className="city-hero-panel">
              <div className="eyebrow">Signs for every setting</div>
              <strong>From first sketch<br />to final install.</strong>
              <span>Storefronts · monuments · interiors</span>
            </div>
          )}
        </div>
      </section>

      {/* Local Work Section */}
      <section className="light sec">
        <div className="wrap">
          <div className="eyebrow">{data.sec2Eye}</div>
          <h2 className="disp sec-h">{data.sec2H2}</h2>
          <p className="city-intro">{data.sec2P}</p>

          {data.projects.length > 0 ? (
            <div className="city-project-grid">
              {data.projects.map((project, idx) => (
                <article key={idx} className="city-project">
                  <Link href={project.link} style={{ display: 'block' }}>
                    <Image
                      src={project.img}
                      alt={project.alt}
                      width={600}
                      height={450}
                      style={{ width: '100%', height: 'auto', aspectRatio: '4/3', objectFit: 'cover' }}
                    />
                  </Link>
                  <div className="city-project-body">
                    <div className="eyebrow">{project.eyebrow}</div>
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                    <Link href={project.link} className="city-project-link">
                      View project details →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="city-empty">
              <h3>Make your business easier to find.</h3>
              <p>Explore the sign types available for your property, then tell us what you have in mind.</p>
              <Link className="btn btn-blue" href="/#signs">
                Explore sign types →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* City CTA */}
      <section className="paper sec city-cta">
        <div className="wrap">
          <div>
            <div className="eyebrow">{data.ctaEye}</div>
            <h2 className="disp sec-h">{data.ctaH2}</h2>
            <p>{data.ctaP}</p>
          </div>
          <Link href="/quote" className="btn btn-blue">Get my free quote →</Link>
        </div>
      </section>
    </>
  )
}
