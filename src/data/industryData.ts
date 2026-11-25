export interface IndustryProfile {
  slug: string
  name: string
  headline: string
  summary: string
  popularSigns: string[]
  landlordCriteria: string
  permittingNotes: string
  turnaround: string
  projectIds: string[]
  faqs: { q: string; a: string }[]
}

export const INDUSTRY_PROFILES: Record<string, IndustryProfile> = {
  restaurants: {
    slug: 'restaurants',
    name: 'Restaurants & Dining',
    headline: 'Signs that help people find restaurants and cafes',
    summary:
      'From fast-casual storefront channel letters to cafe dimensional lettering, patio illumination, and drive-thru signage, we build restaurant signs engineered to withstand Texas heat, kitchen grease, and high customer volume.',
    popularSigns: [
      'Front-lit & combination LED channel letters',
      'Under-canopy double-sided pedestrian blade signs',
      'Illuminated contour storefront lightboxes',
      'Architectural patio lighting & window merchandising graphics',
    ],
    landlordCriteria:
      'Landlords typically mandate raceway mounting to avoid puncturing EIFS or architectural brick facades, plus exterior-accessible UL-listed emergency shutoff disconnect switches.',
    permittingNotes:
      'Drive-thru directional signs, menu boards, and order point clearance bars are regulated separately from building wall signs in cities like Plano, Frisco, and Arlington, requiring dedicated site-plan reviews.',
    turnaround: '3 – 5 weeks',
    projectIds: [
      'arwa-coffee',
      'scratch-wings',
      'rock-n-roll-sushi',
      'wings-over-usa',
      'gufos-pizza',
      'milk-cake-karwan',
      'blimpie-coldstone',
      'omiya',
      'busy-bee',
      'pure-green',
      'moka-co',
      'inso-kitchen',
      'la-cuentista',
    ],
    faqs: [
      {
        q: 'Do Dallas–Fort Worth cities allow neon or faux-neon signs for restaurants?',
        a: 'Most North Texas municipalities restrict exposed high-voltage neon but eagerly approve low-voltage LED faux-neon and acrylic-faced illuminated channel letters that meet UL 48 standards.',
      },
      {
        q: 'Can Sign Zone help meet our restaurant grand opening deadline?',
        a: 'Yes. We pull temporary banner permits while your permanent channel letters are progressing through city plan review, ensuring your doors open with prominent visibility.',
      },
      {
        q: 'What type of lighting lasts longest in intense Texas heat?',
        a: 'We use commercial-grade, IP67-rated constant-current LEDs with heavy aluminum heatsink backing and external low-voltage transformers mounted in well-ventilated raceways.',
      },
    ],
  },

  retail: {
    slug: 'retail',
    name: 'Retail & Storefronts',
    headline: 'Storefront signs people can see from the road and sidewalk',
    summary:
      'Retail signage must bridge distant roadway visibility with close-up pedestrian foot traffic. We design, permit, and install high-contrast storefront channel letters, illuminated cabinet signs, and luxury monument plaques across DFW shopping centers.',
    popularSigns: [
      'High-contrast LED channel letters (18"–30" letter height)',
      'Shopping center tenant pylon & monument panels',
      'Pedestrian storefront blade signs & window graphics',
      'Halo-lit reverse luxury lettering for jewelers & boutiques',
    ],
    landlordCriteria:
      'Strict square footage formulas (typically 1.0 to 1.5 sq ft per linear foot of store frontage) and mandated letter height caps (usually 24 inches for single-line tenant names).',
    permittingNotes:
      'Sign Zone calculates maximum allowable square footage against local municipal zoning ordinances before drafting production drawings to avoid municipal submittal rejections.',
    turnaround: '3 – 4 weeks',
    projectIds: ['a-mart', 'moda-studio', 'malani-jewelers', 'la-cuentista'],
    faqs: [
      {
        q: 'How do I know what size sign my shopping center allows?',
        a: 'We review your commercial lease Exhibit titled "Tenant Sign Criteria" to verify allowable square footage, mounting style, font constraints, and illumination guidelines.',
      },
      {
        q: 'What is the difference between direct flush mount and raceway mount?',
        a: 'Flush mounting attaches each letter directly to the exterior wall with wiring passed through the back, while a raceway mounts all letters to a pre-wired aluminum container painted to match the building facade.',
      },
    ],
  },

  'medical-dental': {
    slug: 'medical-dental',
    name: 'Medical & Healthcare',
    headline: 'Clear signs for medical and dental offices',
    summary:
      'Healthcare practices require professional authority and effortless patient wayfinding. We craft elegant reverse halo-lit channel letters, ADA-compliant tactile interior room signage, and exterior medical plaza monument plaques.',
    popularSigns: [
      'Halo-lit reverse channel letters (warm white 3000K–4000K)',
      'ADA-compliant Grade 2 Braille room identifiers & directories',
      'Freestanding medical plaza masonry monument signs',
      'Brushed aluminum & acrylic reception logo walls',
    ],
    landlordCriteria:
      'Subdued, elegant illumination standards; non-glare finishes; and strict compliance with medical complex master sign programs.',
    permittingNotes:
      'Monument signs along arterial roadways require certified Texas811 utility locate tickets, structural wind-load engineering, and foundation setback clearances.',
    turnaround: '3 – 5 weeks',
    projectIds: ['apex-specialty-care', 'fix-dental', 'addison-park', 'sanjiva-spa'],
    faqs: [
      {
        q: 'What interior signs are legally required before a clinic can open in Texas?',
        a: 'Texas Accessibility Standards (TAS) and ADA codes require tactile room numbers, permanent restroom identifiers with Grade 2 Braille, directional exit wayfinding, and maximum occupancy plaques.',
      },
      {
        q: 'Why do medical clinics prefer halo-lit (reverse) channel letters?',
        a: 'Halo lighting projects a soft, sophisticated glow onto the wall behind each letter, creating a calm, high-end architectural impression suited for healthcare and aesthetics.',
      },
    ],
  },

  'fitness-wellness': {
    slug: 'fitness-wellness',
    name: 'Fitness, Spas & Wellness',
    headline: 'Bold signs for gyms, studios, and spas',
    summary:
      'Gyms and fitness studios require bold, energetic exterior branding readable from high-speed roads, while luxury spas and salons demand refined, ambient aesthetics that welcome clients.',
    popularSigns: [
      'High-lumen front-lit commercial channel letters',
      'Architectural halo-lit letters for luxury spas & studios',
      'Dimensional brushed metal logo signs for reception areas',
      'High-contrast window vinyl graphics & frosted privacy glass',
    ],
    landlordCriteria:
      'Landlords require durable, weatherproof exterior materials and tight electrical enclosures, particularly for facilities operating early morning and late evening hours.',
    permittingNotes:
      'Exterior illumination must comply with local municipality nighttime light curfew standards (often dimming or turning off between 11:00 PM and 6:00 AM if adjacent to residential zones).',
    turnaround: '3 – 5 weeks',
    projectIds: [
      'burn-boot-camp',
      'hand-and-stone',
      'gracie-barra',
      'kings-gambit',
      'amazing-nails',
      'oui-massage',
      'kathak-rhythms',
      'the-den',
    ],
    faqs: [
      {
        q: 'Can Sign Zone match national franchise fitness brand guidelines?',
        a: 'Yes. We match exact corporate Pantone colors, 3M translucent vinyl specs, and font kerning guidelines required by national fitness brands and regional studio chains.',
      },
      {
        q: 'Can our gym exterior sign stay lit 24/7?',
        a: 'City ordinances vary: commercial corridors along major highways usually permit all-night illumination, whereas centers bordering residential neighborhoods require automatic photocell/timer shutoffs at 11:00 PM.',
      },
    ],
  },

  offices: {
    slug: 'offices',
    name: 'Offices & Corporate',
    headline: 'Building signs and lobby logos for offices',
    summary:
      'Corporate headquarters demand flawless brand representation. We manufacture building-top halo letters visible from highways, laser-cut lobby logos in brushed metals, and frosted glass privacy graphics for conference rooms.',
    popularSigns: [
      'High-elevation building-top LED channel letters',
      'Waterjet-cut brushed aluminum & brass lobby logos',
      'Architectural directional directories & floor suite plaques',
      'Frosted crystal vinyl privacy film for glass conference rooms',
    ],
    landlordCriteria:
      'Direct-mount rear-access wiring preferred; exact corporate Pantone brand color matching required.',
    permittingNotes:
      'High-elevation installations require FAA airspace reviews if located within flight approaches for DFW Airport, Dallas Love Field, or Addison Airport.',
    turnaround: '3 – 5 weeks',
    projectIds: ['all-integrity', 'bclm'],
    faqs: [
      {
        q: 'What materials are best for indoor corporate reception logo walls?',
        a: 'Brushed aluminum, matte acrylic, solid brass, and painted high-density urethane (HDU) are the most popular materials for modern corporate lobbies.',
      },
      {
        q: 'Do you install conference room privacy film?',
        a: 'Yes. We cut custom frosted crystal vinyl with company logo knockouts, gradient dust patterns, or solid modesty bands for glass office partitions.',
      },
    ],
  },

  franchises: {
    slug: 'franchises',
    name: 'Franchises & Chains',
    headline: 'Keep your signs the same at every location',
    summary:
      'Multi-unit operators need exact brand compliance across multiple DFW cities. We manage surveys, municipal variances, custom fabrication, and coordinated installations for regional and national franchise brands.',
    popularSigns: [
      'Corporate brand-standard LED channel letters',
      'Under-canopy uniform pedestrian blade signs',
      'Standardized monument & pylon acrylic tenant faces',
      'Multi-location coordinated installation rollouts',
    ],
    landlordCriteria:
      'Balancing rigid corporate franchise brand books against restrictive local shopping center sign criteria.',
    permittingNotes:
      'We handle permit submittals simultaneously across multiple DFW cities (e.g. opening Plano, Frisco, and Arlington units concurrently).',
    turnaround: '3 – 5 weeks',
    projectIds: [
      'burn-boot-camp',
      'hand-and-stone',
      'gracie-barra',
      'rock-n-roll-sushi',
      'blimpie-coldstone',
      'milk-cake-karwan',
    ],
    faqs: [
      {
        q: 'How do you handle conflicting city and franchise guidelines?',
        a: 'When city sign codes restrict a franchise’s standard size or color, our engineering team drafts alternative code-compliant layouts that preserve brand integrity while securing quick city approval.',
      },
      {
        q: 'Can you warehouse our signs until general contractors are ready on site?',
        a: 'Yes. We fabricate sign components in volume, store them in our DFW facility, and deploy install crews precisely when building facade framing is ready.',
      },
    ],
  },
}
