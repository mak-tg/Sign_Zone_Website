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

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'SignShop'],
    '@id': `https://www.signzoneusa.com/locations/${loc.slug}#localbusiness`,
    name: `Sign Zone - ${loc.name} Commercial Signs`,
    alternateName: `Sign Zone ${loc.name}`,
    parentOrganization: {
      '@type': 'Organization',
      name: 'Sign Zone',
      url: 'https://www.signzoneusa.com',
    },
    url: `https://www.signzoneusa.com/locations/${loc.slug}`,
    telephone: '+1-214-714-4623',
    email: 'Alex@signzoneusa.com',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: loc.name,
      addressRegion: 'TX',
      postalCode: geo.primaryZip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: geo.lat,
      longitude: geo.lng,
    },
    areaServed: {
      '@type': 'City',
      name: `${loc.name}, Texas`,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: `${geo.county}, Texas`,
      },
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${geo.lat},${geo.lng}`,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
              <h3>Make your business easier to find.</h3>
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
