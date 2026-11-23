export interface IndustryProfile {
  slug: string
  name: string
  headline: string
  summary: string
  popularSigns: string[]
  landlordCriteria: string
  permittingNotes: string
  turnaround: string
  featuredClient?: string
}

export const INDUSTRY_PROFILES: Record<string, IndustryProfile> = {
  restaurants: {
    slug: 'restaurants',
    name: 'Restaurants & QSR',
    headline: 'High-Visibility Dining & Drive-Thru Signage',
    summary:
      'From fast-casual storefront channel letters to illuminated drive-thru menu boards and patio neon, we build signage engineered to withstand Texas heat, kitchen grease, and high customer traffic.',
    popularSigns: [
      'Front-lit & combination LED channel letters',
      'Under-canopy double-sided pedestrian blade signs',
      'Drive-thru clearance bars & directional pylons',
      'Architectural patio neon & window vinyl graphics',
    ],
    landlordCriteria:
      'Landlords typically mandate raceway mounting to avoid puncturing EIFS or brick facades, plus UL-listed disconnect switches accessible from the exterior.',
    permittingNotes:
      'Drive-thru directional signs are regulated separately from building wall signs in cities like Plano, Frisco, and Arlington, requiring dedicated site plan clearance reviews.',
    turnaround: '3 – 5 weeks',
    featuredClient: "Rock N Roll Sushi, Gufo's Pizza, Omiya Sushi",
  },
  retail: {
    slug: 'retail',
    name: 'Retail & Storefronts',
    headline: 'Storefront Signs that Capture Foot & Vehicle Traffic',
    summary:
      'Retail signage must bridge highway visibility with close-up foot traffic. We design, permit, and install high-contrast storefront channel letters and tenant monument panels across major DFW shopping corridors.',
    popularSigns: [
      'High-contrast LED channel letters (18"–30" height)',
      'Shopping center tenant pylon & monument panels',
      'Storefront blade signs & window merchandising vinyl',
      'Illuminated return and border accents',
    ],
    landlordCriteria:
      'Strict square footage ratios (typically 1.0 to 1.5 sq ft per linear foot of facade) and mandated letter height maximums (usually 24 inches for single-line copy).',
    permittingNotes:
      'Sign Zone calculates maximum allowable square footage against city zoning ordinances before drafting production plans.',
    turnaround: '3 – 4 weeks',
    featuredClient: 'Malani Jewelers, Sleep Doctors, bclm',
  },
  'medical-dental': {
    slug: 'medical-dental',
    name: 'Medical & Dental Clinics',
    headline: 'Clean, Professional Healthcare & Dental Signage',
    summary:
      'Healthcare practices require professional authority and effortless patient wayfinding. We craft elegant reverse halo-lit channel letters, ADA-compliant tactile interior room signage, and exterior monument plaques.',
    popularSigns: [
      'Halo-lit reverse channel letters (warm white 3000K–4000K)',
      'ADA-compliant braille room signs & directory boards',
      'Freestanding medical plaza monument signs',
      'Brushed metal & acrylic lobby reception logos',
    ],
    landlordCriteria:
      'Subdued, elegant illumination standards; non-glare finishes; and strict compliance with medical complex master sign programs.',
    permittingNotes:
      'Monument signs along arterial roadways require certified utility locate tickets (Texas811) and foundation setback clearances.',
    turnaround: '3 – 5 weeks',
    featuredClient: 'Fix Dental, Addison Park Smiles, Hand & Stone Spa',
  },
  'shopping-centers': {
    slug: 'shopping-centers',
    name: 'Shopping Centers & Commercial Properties',
    headline: 'Multi-Tenant Monuments & Comprehensive Pylon Programs',
    summary:
      'For property managers and commercial developers, we fabricate and maintain multi-tenant monument signs, highway pylons, and standardized tenant panel changeout programs across North Texas.',
    popularSigns: [
      'Multi-tenant stone, brick & aluminum monument signs',
      'Highway pylon signs (20–40 ft structural steel)',
      'Tenant acrylic replacement panels with UV-laminated vinyl',
      'Property entrance architectural monument markers',
    ],
    landlordCriteria:
      'Standardized tenant panel dimensions (e.g., 18"x48" or 24"x72") ensuring quick, uniform tenant turnover without structural rework.',
    permittingNotes:
      'Highway pylons require stamped structural engineering calculations certified for 115 MPH three-second gust wind loads.',
    turnaround: '4 – 8 weeks',
    featuredClient: 'Various DFW retail strips & commercial plazas',
  },
  'churches-schools': {
    slug: 'churches-schools',
    name: 'Churches & Schools',
    headline: 'Architectural Monuments & LED Digital Message Centers',
    summary:
      'Keep your congregation and community informed with full-color outdoor LED digital message centers integrated into handsome masonry monument bases, plus campus wayfinding signage.',
    popularSigns: [
      'High-resolution outdoor LED digital message boards (EMCs)',
      'Cast stone & brick architectural monument signs',
      'Campus directional wayfinding & parking lot pylons',
      'Sanctuary dimensional letters & donor recognition walls',
    ],
    landlordCriteria:
      'Usually owner-occupied properties, requiring master campus planning and city zoning board approvals.',
    permittingNotes:
      'Digital message centers (EMCs) face strict municipal brightness limits (typically 5,000 nits day / 500 nits night) and minimum message hold times (8 to 12 seconds in most DFW cities).',
    turnaround: '4 – 6 weeks',
    featuredClient: 'Community churches & private academies in North Texas',
  },
  'auto-dealerships': {
    slug: 'auto-dealerships',
    name: 'Auto Dealerships & Service Centers',
    headline: 'High-Impact Pylons, Bay Signage & Fleet Graphics',
    summary:
      'Automotive businesses require massive visibility from expressways and busy commercial thoroughfares. We build heavy-duty highway pylons, illuminated service bay signs, and full fleet vehicle wraps.',
    popularSigns: [
      'High-rise highway pylons & illuminated brand cabinets',
      'Service bay overhead identification signs',
      'Custom commercial vehicle fleet wraps (3M cast vinyl)',
      'Heavy-duty perimeter lot banners & pole flags',
    ],
    landlordCriteria:
      'High wind resistance ratings and durable finishes resistant to automotive oils and cleaning chemicals.',
    permittingNotes:
      'Dealership pylon signs frequently require city variance hearings if exceeding standard municipal height limits along major freeways.',
    turnaround: '3 – 6 weeks',
    featuredClient: 'Independent dealerships & collision centers across DFW',
  },
  offices: {
    slug: 'offices',
    name: 'Offices & Corporate Facilities',
    headline: 'Architectural Building Tops & Precision Lobby Logos',
    summary:
      'Corporate headquarters demand flawless brand representation. We manufacture building-top halo letters visible from highways, laser-cut lobby logos in brushed metals, and frosted glass privacy graphics.',
    popularSigns: [
      'High-elevation building-top LED channel letters',
      'Waterjet-cut brushed aluminum & brass lobby logos',
      'Architectural directional directories & floor suite plaques',
      'Frosted crystal vinyl privacy film for conference rooms',
    ],
    landlordCriteria:
      'Direct-mount rear-access wiring preferred; exact corporate Pantone brand color matching required.',
    permittingNotes:
      'High-elevation installations require FAA airspace reviews if located within flight approaches for DFW Airport, Dallas Love Field, or Addison Airport.',
    turnaround: '3 – 5 weeks',
    featuredClient: 'Corporate headquarters & multi-tenant office towers',
  },
  franchises: {
    slug: 'franchises',
    name: 'Franchises & Multi-Unit Chains',
    headline: 'Strict Brand-Standard Rollouts Across Municipalities',
    summary:
      'Multi-unit operators need exact brand compliance across multiple DFW cities. We manage surveys, municipal variances, custom fabrication, and coordinated installations for regional and national franchise brands.',
    popularSigns: [
      'Corporate brand-standard LED channel letters',
      'Drive-thru lane ordering canopies & preview boards',
      'Uniform blade signs & interior menu header graphics',
      'Multi-location coordinated installation rollouts',
    ],
    landlordCriteria:
      'Negotiating between rigid corporate franchise brand books and restrictive local shopping center sign criteria.',
    permittingNotes:
      'We handle permit submittals simultaneously across multiple DFW cities (e.g. opening Plano, Frisco, and Arlington units concurrently).',
    turnaround: '3 – 5 weeks',
    featuredClient: 'Milk Cake Bakery, Fix Dental, regional franchise partners',
  },
}
