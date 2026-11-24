import { LOCATION_PAGES } from '@/data/siteData'

export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': 'https://www.signzoneusa.com/#organization',
    name: 'Sign Zone',
    alternateName: 'Sign Zone DFW',
    url: 'https://www.signzoneusa.com',
    logo: 'https://www.signzoneusa.com/images/logo.png',
    image: 'https://www.signzoneusa.com/images/logo.png',
    foundingDate: '2011',
    description:
      'Licensed commercial electrical sign contractor and manufacturer serving Dallas–Fort Worth. In-house fabrication, municipal permitting, and installation for LED channel letters, monument signs, pylon signs, storefront cabinets, lobby logos, and vehicle wraps.',
    telephone: '+1-214-714-4623',
    email: 'Alex@signzoneusa.com',
    priceRange: '$$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Check, ACH, Commercial Financing',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'TX',
      addressCountry: 'US',
      addressLocality: 'Dallas',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.7767,
      longitude: -96.797,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    areaServed: LOCATION_PAGES.map((loc) => ({
      '@type': 'City',
      name: `${loc.name}, TX`,
      sameAs: `https://www.signzoneusa.com/locations/${loc.slug}`,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Commercial Sign Design, Fabrication, Permitting & Installation',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'LED Channel Letter Signs',
            description:
              'Front-lit, halo-lit reverse, and combination illuminated channel letters built to local municipal codes and landlord specifications.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Monument Signs & Architectural Pylons',
            description:
              'Freestanding multi-tenant stone, brick, stucco, and aluminum monument signs with optional digital LED message centers.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Storefront Cabinets & Lightboxes',
            description:
              'Extruded aluminum commercial sign cabinets with unbreakable polycarbonate faces and high-efficiency LED retrofit illumination.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Interior Lobby & ADA Compliance Signage',
            description:
              'Laser-cut dimensional letters in brushed metal, acrylic, and brass, plus tactile braille ADA room identification signage.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Fleet Vehicle Wraps',
            description:
              'Full and partial 3M cast vinyl vehicle wraps for commercial vans, box trucks, pickup fleets, and service trailers.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'City Sign Permitting & Master Sign Plan Engineering',
            description:
              'Turnkey municipal variance applications, wind-load stamped engineering drawings, and city permit procurement across all North Texas jurisdictions.',
          },
        },
      ],
    },
    knowsAbout: [
      'Commercial Sign Fabrication',
      'LED Lighting Systems',
      'Electrical Sign Contractor Licensing',
      'City Municipal Sign Codes & Setbacks',
      'Landlord Sign Criteria Packages',
      'Sign Installation Cranes & Bucket Trucks',
      'Commercial Sign Maintenance & Retrofits',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
