// ── Sign types ────────────────────────────────────────────────────────────────
export const SIGN_TYPES = [
  { cat: 'ext', name: 'Channel letters',        desc: 'Individual 3D letters, front-lit, halo-lit or both. The storefront standard.',  price: '$3k – $20k+',  quoteType: 'channel',  featured: true, image: '/images/signs/demo-channel.webp' },
  { cat: 'ext', name: 'Monument signs',          desc: 'Ground signs with stone, brick or aluminum bases for centers and offices.',       price: '$5k – $65k+',  quoteType: 'monument', image: '/images/signs/demo-monument.webp' },
  { cat: 'ext', name: 'Pylon & pole signs',       desc: 'Tall roadside signs that reach highway traffic, single or multi-tenant.',         price: '$8k – $200k+', quoteType: 'pylon',    image: '/images/signs/demo-pylon.webp' },
  { cat: 'ext', name: 'Cabinet & lightbox signs', desc: 'Lit boxes with printed faces. Great value, easy to update.',                      price: '$2k – $12k+',  quoteType: 'cabinet',  image: '/images/signs/demo-cabinet.webp' },
  { cat: 'ext', name: 'Blade & projecting signs', desc: 'Perpendicular signs that catch foot traffic along the sidewalk.',                 price: 'Quote in 24 hrs', quoteType: 'cabinet',  image: '/images/signs/demo-blade.webp' },
  { cat: 'ext', name: 'Awnings & canopies',       desc: 'Branded shade with lit or printed lettering.',                                   price: 'Quote in 24 hrs', quoteType: 'help',     image: '/images/signs/demo-awning.webp' },
  { cat: 'int', name: 'Lobby & logo walls',       desc: 'Dimensional logos in acrylic, metal or wood behind reception.',                  price: 'Quote in 24 hrs', quoteType: 'interior', image: '/images/signs/demo-lobby.webp' },
  { cat: 'int', name: 'ADA & wayfinding',          desc: 'Code-compliant room, restroom and directional signs with braille.',               price: '$45 – $250 per sign', quoteType: 'ada', image: '/images/signs/demo-ada.webp' },
  { cat: 'int', name: 'Wall murals & graphics',   desc: 'Large-format walls, frosted glass and office branding.',                          price: 'Quote in 24 hrs', quoteType: 'interior', image: '/images/signs/demo-mural.webp' },
  { cat: 'veh', name: 'Vehicle wraps',             desc: 'Full and partial wraps, fleet graphics and DOT lettering.',                      price: '$300 – $8k+',  quoteType: 'wrap',     image: '/images/signs/demo-wrap.webp' },
  { cat: 'veh', name: 'Window graphics',           desc: 'Storefront vinyl, hours, perforated window film and promos.',                    price: '$200 – $3k+',  quoteType: 'window',   image: '/images/signs/demo-window.webp' },
  { cat: 'veh', name: 'Banners & temporary',       desc: 'Grand openings, "coming soon" and event signs, fast.',                          price: 'Quote in 24 hrs', quoteType: 'window',   image: '/images/signs/demo-banner.webp' },
  { cat: 'dig', name: 'LED message centers',       desc: 'Programmable full-color displays for pylons and monuments.',                     price: '$5k – $100k+', quoteType: 'digital',  image: '/images/signs/demo-digital.webp' },
  { cat: 'dig', name: 'Digital menu boards',       desc: 'Indoor and drive-thru screens you update from your phone.',                     price: 'Quote in 24 hrs', quoteType: 'digital',  image: '/images/signs/demo-menu.webp' },
  { cat: 'ext', name: 'Sign repair & relighting', desc: 'Restore faded faces, replace failed lighting, and get existing signs working again.', price: 'Quote in 24 hrs', quoteType: 'repair', image: '/images/signs/demo-repair.png' },
];

// ── Quote types ───────────────────────────────────────────────────────────────
export const QUOTE_TYPES = [
  { id: 'channel',  label: 'Channel letters',    desc: 'Lit 3D letters on your building',   image: '/images/signs/demo-channel.webp' },
  { id: 'cabinet',  label: 'Cabinet / lightbox', desc: 'Lit box sign with printed face',    image: '/images/signs/demo-cabinet.webp' },
  { id: 'monument', label: 'Monument sign',       desc: 'Ground sign near the entrance',    image: '/images/signs/demo-monument.webp' },
  { id: 'pylon',    label: 'Pylon / pole sign',   desc: 'Tall sign for road visibility',    image: '/images/signs/demo-pylon.webp' },
  { id: 'window',   label: 'Window graphics',     desc: 'Vinyl, hours, promos',             image: '/images/signs/demo-window.webp' },
  { id: 'interior', label: 'Lobby / interior',    desc: 'Logo wall, office signs',          image: '/images/signs/demo-lobby.webp' },
  { id: 'ada',      label: 'ADA & wayfinding',    desc: 'Room, restroom, directional',      image: '/images/signs/demo-ada.webp' },
  { id: 'wrap',     label: 'Vehicle wrap',         desc: 'Car, van, truck or fleet',        image: '/images/signs/demo-wrap.webp' },
  { id: 'digital',  label: 'LED / digital',        desc: 'Message centers, menu boards',    image: '/images/signs/demo-digital.webp' },
  { id: 'repair',   label: 'Repair / relight',     desc: 'Fix or upgrade an existing sign', image: '/images/hero-1.jpg' },
];

export const TYPE_RANGE: Record<string, [number, number]> = {
  channel: [3000, 20000], cabinet: [2000, 12000], monument: [5000, 65000],
  pylon: [8000, 200000],  window: [200, 3000],     interior: [800, 8000],
  ada: [300, 3000],        wrap: [300, 8000],       digital: [5000, 100000],
};

// ── Trust bar ─────────────────────────────────────────────────────────────────
export const TRUST_STATS = [
  { value: '15+ Yrs',   label: 'Serving Dallas–Fort Worth' },
  { value: '16 Cities', label: 'Actively permitted & installed' },
  { value: '24 hrs',    label: 'Turnaround to written quote' },
  { value: 'TDLR',      label: 'Licensed electrical sign contractor' },
];

// ── Stages (what stage are you at) ───────────────────────────────────────────
export const STAGES = [
  {
    id: 'open',
    label: 'Opening a new location',
    title: 'Opening soon? Get your sign up before your doors open.',
    body: 'Most leases require an approved exterior sign, and permits take weeks. Start your sign the week you sign the lease and you open with your name lit up, not a banner.',
    budget: '$4k – $15k',
    time: '4 – 8 weeks',
    cta: 'Plan my grand-opening signs',
    type: 'channel',
    link: '/channel-letters',
    stack: [
      ['Storefront channel letters or cabinet sign', 'Your main ID. Usually required by your landlord.'],
      ['Window graphics & hours', 'Tells walk-ups what you do and when you are open.'],
      ['Grand-opening banner', 'Covers you while permits clear.'],
      ['Interior logo wall + ADA signs', 'First impression inside, plus code-required restroom signs.'],
    ],
  },
  {
    id: 'grow',
    label: 'Growing or rebranding',
    title: 'Outgrowing your old sign? Make the upgrade count.',
    body: "A faded or dark sign quietly tells drivers you are closed. We swap faces, retrofit LEDs or replace the whole sign, often reusing the permit and structure you already have.",
    budget: '$2k – $25k',
    time: '3 – 6 weeks',
    cta: 'Get a rebrand quote',
    type: 'repair',
    link: '/storefront-signs',
    stack: [
      ['LED retrofit or new sign faces', 'Brightest, cheapest fix for an existing sign.'],
      ['Upgrade to halo-lit or dimensional letters', 'A more premium look on the same wall.'],
      ['Vehicle wraps for your fleet', 'Your brand on every job site.'],
      ['Lobby sign & wayfinding', 'Match the inside to the new brand.'],
    ],
  },
  {
    id: 'multi',
    label: 'Multi-location, franchise or property',
    title: 'One partner for every location, every tenant, every code.',
    body: 'Brand standards, landlord criteria and a different sign code in every city. We survey, permit and install across sites on one schedule, with one report you can share with your team.',
    budget: '$25k – $250k+',
    time: '6 – 16 weeks',
    cta: 'Talk to our programs team',
    type: 'pylon',
    link: '/pylon-signs',
    stack: [
      ['Pylon or monument with tenant panels', 'Visibility from the road for the whole center.'],
      ['Rollout of channel letters across sites', 'Same look, permitted city by city.'],
      ['Site surveys for every location', 'Photos, measurements and power checks in one report.'],
      ['Maintenance plan', 'Scheduled checks so no location goes dark.'],
    ],
  },
];

// ── Process steps ─────────────────────────────────────────────────────────────
export const PROCESS_STEPS = [
  { title: 'Free consult & quote', timing: 'Day 1–2',   desc: 'Tell us what you need, or text a photo of your building. You get a written quote with a price range within 24 hours.', you: 'Share your logo, address and opening date.' },
  { title: 'Site survey',          timing: 'Week 1',    desc: "We measure the wall, photograph the site, check power and read your landlord's sign criteria.",                           you: 'Give us access and your lease sign exhibit.' },
  { title: 'Design & mockup',      timing: 'Week 1–2',  desc: 'You see your sign on a photo of your actual building, day and night, with sizes and materials called out.',               you: 'Approve the design or ask for changes.' },
  { title: 'Permits & approvals',  timing: 'Week 2–5',  desc: 'We prepare drawings, get landlord sign-off and file city sign and electrical permits for you.',                           you: 'Sign the landlord approval form.' },
  { title: 'Fabrication',          timing: 'Week 3–6',  desc: 'Your sign is built, wired with UL-listed LEDs and quality-checked before it leaves the shop.',                           you: 'Nothing. We send progress photos.' },
  { title: 'Install & aftercare',  timing: '1–2 days',  desc: 'Our licensed crew installs, connects and tests it, then cleans up. Warranty and maintenance plans keep it bright.',       you: 'Flip the switch and open your doors.' },
];

// ── Industries ────────────────────────────────────────────────────────────────
export const INDUSTRIES = [
  { slug: 'restaurants', name: 'Restaurants & Dining', desc: 'Channel letters, drive-thru menu boards, patio neon, and window graphics' },
  { slug: 'retail', name: 'Retail & Storefronts', desc: 'Storefront letters, blade signs, window merchandising vinyl, and promo displays' },
  { slug: 'medical-dental', name: 'Medical & Healthcare', desc: 'Monument signs, suite signs, ADA tactile braille, and halo-lit lobby walls' },
  { slug: 'fitness-wellness', name: 'Fitness, Spas & Wellness', desc: 'High-visibility channel letters, branded fascia logos, and interior signage' },
  { slug: 'offices', name: 'Offices & Corporate', desc: 'Lobby logos, building-top letters, architectural directories, and privacy film' },
  { slug: 'franchises', name: 'Franchises & Chains', desc: 'Brand-standard rollouts, site surveys, and multi-city permitting' },
];

// ── Comparison table ──────────────────────────────────────────────────────────
export const COMPARE_ROWS = [
  { feature: 'Written quote',           us: 'Within 24 hours',          other: '1–2 weeks',              online: 'Instant (standard sizes only)' },
  { feature: 'Mockup on your building', us: 'Free, day and night',      other: 'Sometimes, extra cost',  online: 'No' },
  { feature: 'Permits & landlord approval', us: 'We handle it',         other: 'Varies',                 online: 'You handle it' },
  { feature: 'Licensed electrical install', us: 'Our own crew',         other: 'Often subcontracted',    online: 'You hire someone' },
  { feature: 'Online project tracking', us: 'Live status updates',      other: 'Phone calls',            online: 'Shipping tracking only' },
  { feature: 'Financing',               us: '12–60 months',             other: 'Rarely',                 online: 'Card only' },
  { feature: 'Warranty & maintenance',  us: 'Multi-year + service plans', other: 'Varies',                 online: 'Product only' },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────
export const HOME_FAQ = [
  {
    q: 'How long does a new sign take?',
    a: 'Most storefront signs take 4–8 weeks from approval to install. Permits are usually the longest step, so the earlier you start, the better. Banners and window graphics can be ready in days. Use our [Opening-Day Timeline Planner](/toolkit#timeline) to estimate your launch schedule.',
  },
  {
    q: 'Do you handle permits and landlord approval?',
    a: 'Yes. We prepare the drawings, get your landlord\'s sign-off and file sign and electrical permits with the city. You just sign the forms. Learn how codes work in our [DFW Sign Permits Guide](/guides/dfw-sign-permits-explained).',
  },
  {
    q: 'Can you work with my existing logo?',
    a: 'Yes. Send any file you have. If it is low quality we redraw it for production at no extra charge on sign projects, ready for 3D [channel letters](/channel-letters) or dimensional [lobby signs](/lobby-signs).',
  },
  {
    q: "What if I don't have a logo yet?",
    a: 'Our designers can create a sign-ready logo and brand colors as part of your project, coordinated with our [commercial sign fabrication standards](/process).',
  },
  {
    q: 'Do you repair or relight existing signs?',
    a: 'Yes. LED retrofits, new faces, ballast and power-supply repairs, and scheduled maintenance plans. [Request a repair quote or inspection](/quote?type=repair).',
  },
  {
    q: 'Do you offer financing?',
    a: 'Yes, 12–60 month terms through our lending partner. Applying does not change your quote. Explore our [commercial sign financing options](/financing).',
  },
];

// ── Guides ────────────────────────────────────────────────────────────────────
export const GUIDES = [
  { tag: 'Cost guide',  title: 'How much does a business sign cost in DFW?',                           meta: '8 min read' },
  { tag: 'Compare',     title: 'Channel letters vs. cabinet signs: which one fits your storefront?',   meta: '6 min read' },
  { tag: 'Permits',     title: 'Sign permits in Dallas, Fort Worth, Plano & Frisco, explained',        meta: '10 min read' },
  { tag: 'Checklist',   title: 'What to send us for a fast, accurate quote',                           meta: 'Printable checklist' },
  { tag: 'Leasing',     title: "Your landlord's sign criteria: what it means and what to ask",         meta: '5 min read' },
  { tag: 'Design',      title: 'Colors, fonts and lighting that read from the road',                   meta: '7 min read' },
];

// ── Cities ────────────────────────────────────────────────────────────────────
export const CITIES_ALL = ['Dallas','Fort Worth','Arlington','Plano','Frisco','Irving','Garland','McKinney','Carrollton','Richardson','Allen','Denton','Grand Prairie','Lewisville','Mesquite','Southlake'];

export const LOCATION_PAGES = [
  { slug: 'dallas', name: 'Dallas', desc: 'Downtown & Uptown' },
  { slug: 'fort-worth', name: 'Fort Worth', desc: 'Stockyards & 7th' },
  { slug: 'plano', name: 'Plano', desc: 'Legacy & Preston' },
  { slug: 'frisco', name: 'Frisco', desc: 'The Star & PGA Pkwy' },
  { slug: 'arlington', name: 'Arlington', desc: 'Entertainment Dist.' },
  { slug: 'carrollton', name: 'Carrollton', desc: 'I-35E & Josey' },
  { slug: 'richardson', name: 'Richardson', desc: 'Telecom Corridor' },
  { slug: 'mckinney', name: 'McKinney', desc: 'Historic Downtown' },
  { slug: 'allen', name: 'Allen', desc: 'Watters Creek' },
  { slug: 'southlake', name: 'Southlake', desc: 'Town Square' },
  { slug: 'irving', name: 'Irving', desc: 'Las Colinas' },
  { slug: 'grand-prairie', name: 'Grand Prairie', desc: 'EpicCentral' },
  { slug: 'mansfield', name: 'Mansfield', desc: 'Downtown & US-287' },
  { slug: 'addison', name: 'Addison', desc: 'Belt Line & Tollway' },
  { slug: 'coppell', name: 'Coppell', desc: 'Old Town & MacArthur' },
  { slug: 'ennis', name: 'Ennis', desc: 'Historic District' },
];

// ── Channel letters data ───────────────────────────────────────────────────────
export const CL_STYLES = [
  { id: 'front', label: 'Front-lit',    desc: 'LEDs inside light up a colored acrylic face. The brightest, most readable option and the most common storefront sign.', best: 'Retail, restaurants, strip centers', cost: 'Baseline',    bg: '#14171F', color: '#FFFFFF', shadow: '0 0 6px #fff, 0 0 22px #4D8DFF, 0 0 48px #0050F0' },
  { id: 'halo',  label: 'Halo / back-lit', desc: 'Solid metal faces with light shining onto the wall behind, for a soft halo. Premium, upscale look.',                desc2: '', best: 'Medical, salons, offices, boutiques', cost: 'About +20%', bg: '#2A2F3B', color: '#1B1F29', shadow: '0 0 2px #fff, 0 0 18px #9DBBFF, 0 0 40px #4D8DFF' },
  { id: 'combo', label: 'Front + halo', desc: 'A lit face plus a halo behind. Maximum presence day and night.',                                                       best: 'Flagship stores, busy corridors',     cost: 'About +35%', bg: '#14171F', color: '#E6EEFF', shadow: '0 0 4px #fff, 0 0 14px #fff, 0 0 30px #4D8DFF, 0 0 70px #0050F0' },
  { id: 'open',  label: 'Open-face',    desc: 'Exposed LEDs or neon-look tubing inside the letter, no face. Retro, high-energy look.',                              best: 'Bars, entertainment, retro brands',    cost: 'Quote',      bg: '#14171F', color: 'transparent', shadow: '0 0 10px #4D8DFF, 0 0 30px #0050F0' },
  { id: 'none',  label: 'Non-lit',      desc: 'Dimensional letters in painted aluminum, acrylic or brushed metal. Clean and low-cost for daytime businesses.',      best: 'Offices, warehouses, interiors',      cost: 'About −30%', bg: '#D8D1C3', color: '#062666', shadow: '4px 4px 0 #9AA3B2' },
];

export const CL_PARTS = [
  { name: 'Face',               desc: 'Colored acrylic that shows your brand color and diffuses the light.' },
  { name: 'Returns',            desc: 'The aluminum sides that give each letter its depth, usually 3–5 inches.' },
  { name: 'Trim cap',           desc: 'Edge that holds the face to the returns, color-matched or contrasting.' },
  { name: 'LED modules',        desc: 'UL-listed, energy-efficient LEDs. Rated for years of nightly use.' },
  { name: 'Back & drainage',    desc: 'Sealed aluminum back with weep holes for Texas storms.' },
  { name: 'Raceway / mounting', desc: 'Hides wiring and the power supply; one connection to your building.' },
];

export const CL_MOUNTS = [
  { name: 'Direct mount',   desc: 'Each letter is fastened straight to the wall and wired through it. The cleanest look.',                             when: 'You own the building or the wall can be penetrated freely.' },
  { name: 'Raceway mount',  desc: 'Letters sit on a slim painted box that holds the wiring. Fewer holes, faster install, easy to remove.',             when: 'You lease, or the landlord limits wall penetrations.' },
  { name: 'Backer panel',   desc: 'Letters mounted on a shaped panel for contrast against busy brick or glass.',                                        when: 'Your wall color or texture fights with your logo.' },
];

export const CL_SIZES = [
  { h: 12, range: '$200 – $400',    use: 'Small storefronts, suites' },
  { h: 18, range: '$300 – $550',    use: 'Strip-center tenants' },
  { h: 24, range: '$400 – $750',    use: 'Anchor tenants, pad sites' },
  { h: 36, range: '$700 – $1,200',  use: 'Big-box, set-back buildings' },
  { h: 48, range: '$1,000 – $2,000',use: 'Building tops, highway frontage' },
];

export const CL_FAQ = [
  { q: 'How much do channel letters cost?',          a: 'Most DFW storefront channel letter projects land between $3,000 and $20,000 including install. Letter height, number of letters, lighting style and install height are the big drivers.' },
  { q: 'Will my landlord approve them?',             a: "Most shopping centers have sign criteria that specify letter height, color, lighting and mounting. Send us your lease exhibit and we design within it, then submit for approval." },
  { q: 'How long do LED channel letters last?',      a: 'Quality LED modules are rated for many years of nightly use. Our warranty covers parts and labor, and ongoing maintenance plans are available.' },
  { q: 'Can you reuse my existing raceway or permit?', a: 'Often, yes, especially for a face change or rebrand on the same wall. We check this during the site survey.' },
  { q: 'Do they need a timer?',                      a: 'We add a photocell or timer so your sign turns on at dusk and off when you choose, which also keeps you within any city lighting rules.' },
];
