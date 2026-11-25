import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { LOCATION_PAGES } from '@/data/siteData'
import { CITY_PAGES_DATA } from '@/data/locationData'
import { CITY_GEO_DATA } from '@/data/geoData'

export const instant = false

type Params = { city: string }

export async function generateStaticParams() {
  return LOCATION_PAGES.map((loc) => ({ city: loc.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { city } = await params
  const loc = LOCATION_PAGES.find((l) => l.slug === city)
  const data = CITY_PAGES_DATA[city]
  const geo = CITY_GEO_DATA[city]
  if (!loc || !data || !geo) return {}

  const cityName = `${loc.name}, Texas`
  return {
    title: data.title,
    description: data.metaDesc,
    keywords: [
      `commercial signs ${geo.name}`,
      `channel letters ${geo.name} TX`,
      `monument signs ${geo.name}`,
      `storefront signs ${geo.name}`,
      `custom business signs ${geo.name} Texas`,
      `sign company ${geo.county}`,
      ...geo.corridors,
    ],
    alternates: {
      canonical: `/locations/${city}`,
    },
    openGraph: {
      title: data.title,
      description: data.metaDesc,
      url: `https://www.signzoneusa.com/locations/${city}`,
      siteName: 'Sign Zone DFW',
      locale: 'en_US',
      type: 'article',
      images: [
        {
          url: data.heroImg || '/images/logo.png',
          width: 1600,
          height: 1200,
          alt: data.heroAlt || `${cityName} Commercial Business Signage`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.metaDesc,
      images: [data.heroImg || '/images/logo.png'],
    },
    other: {
      'geo.region': 'US-TX',
      'geo.placename': `${geo.name}, Texas`,
      'geo.position': `${geo.lat};${geo.lng}`,
      ICBM: `${geo.lat}, ${geo.lng}`,
    },
  }
}

export default async function LocationPage({ params }: { params: Promise<Params> }) {
  const { city } = await params
  const loc = LOCATION_PAGES.find((l) => l.slug === city)
  const data = CITY_PAGES_DATA[city]
  const geo = CITY_GEO_DATA[city]
  if (!loc || !data || !geo) notFound()

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.signzoneusa.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Locations',
        item: 'https://www.signzoneusa.com/#locations',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${loc.name}, TX`,
        item: `https://www.signzoneusa.com/locations/${loc.slug}`,
      },
    ],
  }

  const localServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://www.signzoneusa.com/locations/${loc.slug}#service`,
    name: `Commercial Sign Fabrication & Installation in ${loc.name}, TX`,
    serviceType: 'Commercial Sign Contractor',
    provider: {
      '@id': 'https://www.signzoneusa.com/#organization',
    },
    url: `https://www.signzoneusa.com/locations/${loc.slug}`,
    areaServed: {
      '@type': 'City',
      name: `${loc.name}, Texas`,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: `${geo.county}, Texas`,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: geo.lat,
        longitude: geo.lng,
      },
    },
    description: data.metaDesc,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localServiceSchema) }}
      />

      {/* City Hero */}
      <section className="city-hero dark">
        <div className="wrap">
          <div className="city-hero-copy">
            <div className="city-crumb">
              <Link href="/">Home</Link> / <Link href="/#locations">Locations</Link> / {loc.name}
            </div>
            <div className="eyebrow">
              {loc.name}, Texas · {geo.county}
            </div>
            <h1 className="disp">
              Business signs built for <span>{data.h1City}</span>
            </h1>
            <p>{data.intro}</p>
            <div className="btn-row">
              <Link href="/quote" className="btn btn-blue">
                Get my free quote →
              </Link>
              <a href="tel:2147144623" className="btn btn-ghost">
                Call 214-714-4623
              </a>
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
              <strong>
                From first sketch
                <br />
                to final install.
              </strong>
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
                      style={{
                        width: '100%',
                        height: 'auto',
                        aspectRatio: '4/3',
                        objectFit: 'cover',
                      }}
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
              <h3>Help people find your business.</h3>
              <p>
                Explore the sign types available for your property, then tell us what you have in
                mind.
              </p>
              <Link className="btn btn-blue" href="/#signs">
                Explore sign types →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* City Sign Types Cross-Linking Section */}
      <section className="paper sec" style={{ padding: '64px 0', borderTop: '1px solid var(--soft)' }}>
        <div className="wrap">
          <div className="eyebrow">Sign Fabrication for {loc.name}</div>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(28px, 4vw, 38px)' }}>
            Business signs made for {loc.name}, TX.
          </h2>
          <p style={{ fontSize: 16.5, color: 'var(--muted)', maxWidth: 700, margin: '14px 0 32px' }}>
            We handle municipal permits directly with the {loc.name} building and zoning department, ensuring all setback, wind-load, and electrical codes are met.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            <Link href="/channel-letters" className="card" style={{ padding: 20, background: '#fff', textDecoration: 'none' }}>
              <span className="tag" style={{ marginBottom: 6 }}>Storefronts</span>
              <strong style={{ fontSize: 18, color: 'var(--navy)' }}>Channel Letters in {loc.name} →</strong>
              <span style={{ fontSize: 13.5, color: 'var(--muted)', marginTop: 4 }}>Front-lit, halo-lit &amp; reverse letters built to landlord criteria.</span>
            </Link>
            <Link href="/monument-signs" className="card" style={{ padding: 20, background: '#fff', textDecoration: 'none' }}>
              <span className="tag" style={{ marginBottom: 6 }}>Ground Signs</span>
              <strong style={{ fontSize: 18, color: 'var(--navy)' }}>Monument Signs in {loc.name} →</strong>
              <span style={{ fontSize: 13.5, color: 'var(--muted)', marginTop: 4 }}>Stone, brick &amp; aluminum architectural ground monuments.</span>
            </Link>
            <Link href="/pylon-signs" className="card" style={{ padding: 20, background: '#fff', textDecoration: 'none' }}>
              <span className="tag" style={{ marginBottom: 6 }}>Highways</span>
              <strong style={{ fontSize: 18, color: 'var(--navy)' }}>Pylon &amp; Pole Signs →</strong>
              <span style={{ fontSize: 13.5, color: 'var(--muted)', marginTop: 4 }}>Corridor highway visibility engineered for Texas wind speeds.</span>
            </Link>
            <Link href="/storefront-signs" className="card" style={{ padding: 20, background: '#fff', textDecoration: 'none' }}>
              <span className="tag" style={{ marginBottom: 6 }}>Retail Strips</span>
              <strong style={{ fontSize: 18, color: 'var(--navy)' }}>Storefront &amp; Lightboxes →</strong>
              <span style={{ fontSize: 13.5, color: 'var(--muted)', marginTop: 4 }}>Illuminated aluminum cabinet signs and pedestrian blade signs.</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Nearby DFW Service Areas */}
      <section className="light sec" style={{ padding: '48px 0', borderTop: '1px solid var(--soft)', background: '#fff' }}>
        <div className="wrap">
          <div className="eyebrow">Service Coverage</div>
          <h3 className="disp sec-h" style={{ fontSize: 'clamp(22px, 3vw, 28px)', margin: '0 0 16px' }}>
            Signs we have installed across North Texas.
          </h3>
          <p style={{ fontSize: 15, color: 'var(--muted)', maxWidth: 640, marginBottom: 24 }}>
            In addition to {loc.name}, our licensed installation crews and master electricians operate daily throughout the Dallas–Fort Worth Metroplex:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {LOCATION_PAGES.filter(c => c.slug !== loc.slug).map(c => (
              <Link
                key={c.slug}
                href={`/locations/${c.slug}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '8px 14px',
                  borderRadius: 8,
                  background: 'var(--paper)',
                  border: '1px solid var(--soft)',
                  color: 'var(--navy)',
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.15s ease',
                }}
              >
                <span>{c.name}, TX</span>
                <span style={{ color: 'var(--blue)', fontSize: 12 }}>→</span>
              </Link>
            ))}
          </div>
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
          <Link href="/quote" className="btn btn-blue">
            Get my free quote →
          </Link>
        </div>
      </section>
    </>
  )
}
