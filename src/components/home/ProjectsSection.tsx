import Link from 'next/link'

interface ProjectItem {
  id: string
  name: string
  image: string
  meta: string
  signType: string
  overview: string
  signSystem: string
  quoteType?: string
}

const PROJECTS: ProjectItem[] = [
  {
    id: 'arwa-coffee',
    name: 'Arwa Coffee',
    image: '/images/project-arwa.webp',
    meta: 'Arlington, TX · Coffee house',
    signType: 'Dimensional storefront letters + logo',
    overview: 'Gold dimensional letters and a logo identify the coffee house above the glass entrance of a brick mixed-use building.',
    signSystem: 'Dimensional storefront letters + logo',
  },
  {
    id: 'apex-specialty-care',
    name: 'Apex Specialty Care',
    image: '/images/project-apex.webp',
    meta: 'Plano, TX · Specialty hospital',
    signType: 'Illuminated channel letters + logo',
    overview: 'White illuminated letters and a peak-shaped mark span the hospital facade, with the sign mounted high above the windows.',
    signSystem: 'Illuminated channel letters + logo',
  },
  {
    id: 'a-mart',
    name: 'A Mart Food Market',
    image: '/images/project-amart.webp',
    meta: 'Dallas, TX · Grocery store',
    signType: 'Channel letters + logo cabinet + backer',
    overview: 'An illuminated logo cabinet identifies the entry tower while a separate set of storefront letters carries the market name across the facade.',
    signSystem: 'Channel letters + logo cabinet + backer',
  },
  {
    id: 'sanjiva-spa',
    name: 'Sanjiva Medical Spa',
    image: '/images/project-sanjiva.webp',
    meta: 'Dallas, TX · Medical spa',
    signType: 'Halo-lit letters + logo',
    overview: 'Dimensional letters and a looping logo stand off a marble-look facade, with backlighting outlining the sign after dark.',
    signSystem: 'Halo-lit letters + logo',
  },
  {
    id: 'scratch-wings',
    name: 'Scratch Wings',
    image: '/images/project-scratch.webp',
    meta: 'Grand Prairie, TX · Restaurant',
    signType: 'Channel letters + logo + tagline cabinet',
    overview: 'Red dimensional lettering, a rooster logo and a tagline cabinet bring the restaurant identity together above the storefront.',
    signSystem: 'Channel letters + logo + tagline cabinet',
  },
  {
    id: 'burn-boot-camp',
    name: 'Burn Boot Camp',
    image: '/images/project-burnbootcamp.webp',
    meta: 'Mansfield, TX · Fitness center',
    signType: 'Front-lit channel letters',
    overview: 'Vibrant electric-blue channel letters mounted high on a charcoal masonry facade, ensuring clear visibility across the commercial center.',
    signSystem: 'Front-lit LED channel letters with blue acrylic faces',
  },
  {
    id: 'rock-n-roll-sushi',
    name: 'Rock N Roll Sushi',
    image: '/images/project-rock.webp',
    meta: 'Fort Worth, TX · Restaurant',
    signType: 'Channel letters + illuminated logo cabinet',
    overview: 'Custom lightning-bolt channel letters paired with an illuminated red contour cabinet mounted on a natural split-face limestone tower.',
    signSystem: 'Custom channel letters + red acrylic logo box',
  },
  {
    id: 'hand-and-stone',
    name: 'Hand & Stone Spa',
    image: '/images/project-handandstone.webp',
    meta: 'Southlake, TX · Spa & wellness',
    signType: 'Dimensional channel letters + subtext cabinet',
    overview: 'Clean white architectural channel letters mounted on a multi-tone brick entrance with secondary service line typography.',
    signSystem: 'Front-lit channel letters + illuminated tagline strip',
  },
  {
    id: 'gracie-barra',
    name: 'Gracie Barra Jiu-Jitsu',
    image: '/images/project-graciebarra.webp',
    meta: 'Carrollton, TX · Martial arts academy',
    signType: 'Logo cabinet + channel letters + subtext backer',
    overview: 'High-output LED circular crest logo cabinet flanked by bold dual-tone channel letters and an integrated subtitle backer bar.',
    signSystem: 'Custom circular contour cabinet + channel letters',
  },
  {
    id: 'wings-over-usa',
    name: 'Wings Over USA',
    image: '/images/project-wingsoverusa.webp',
    meta: 'Ennis, TX · Sports grill & bar',
    signType: 'Dual-color channel letters + subline cabinet',
    overview: 'Dimensional sky-blue and white channel letters with a winged star emblem atop an illuminated menu and tagline raceway cabinet.',
    signSystem: 'Dual-color front-lit channel letters + raceway cabinet',
  },
  {
    id: 'kings-gambit',
    name: "King's Gambit Jiu Jitsu",
    image: '/images/project-kingsgambit.webp',
    meta: 'Plano, TX · Martial arts gym',
    signType: 'Contour logo cabinet + channel letters',
    overview: 'A round custom logo medallion featuring chess knight artwork paired with clean white uppercase channel letters on commercial stucco fascia.',
    signSystem: 'Illuminated round logo cabinet + front-lit channel letters',
  },
  {
    id: 'gufos-pizza',
    name: "Gufo's Pizza",
    image: '/images/project-gufospizza.webp',
    meta: 'Irving, TX · Pizzeria',
    signType: 'Shaped contour cabinet + channel letters',
    overview: 'A custom red winged owl contour cabinet paired with bold red and white front-lit channel letters mounted on building brick.',
    signSystem: 'Shaped logo cabinet + dual-tone channel letters',
  },
  {
    id: 'the-den',
    name: 'The Den Poker Lounge',
    image: '/images/project-theden.webp',
    meta: 'Dallas, TX · Entertainment lounge',
    signType: 'Dimensional metal logo disc + standoff letters',
    overview: 'Architectural bronze bear medallion with card-suit detailing and dark bronze standoff letters mounted on rough-cut white limestone.',
    signSystem: 'Dimensional metal logo disc + standoff pin-mounted letters',
  },
  {
    id: 'milk-cake-karwan',
    name: 'Milk Cake Bakery',
    image: '/images/project-milkcake.webp',
    meta: 'Richardson, TX · Bakery & dining',
    signType: 'Channel letters + dimensional signage',
    overview: 'Coordinated multi-tenant facade installation featuring two-tone illuminated letters for the bakery and gold dimensional letters for dining.',
    signSystem: 'Front-lit channel letters + metallic dimensional letters',
  },
  {
    id: 'all-integrity',
    name: 'All-Integrity Insurance',
    image: '/images/project-allintegrity.webp',
    meta: 'McKinney, TX · Insurance agency',
    signType: 'Parapet channel letters + matching panel',
    overview: 'High-visibility magenta and white channel letters on roofline parapet paired with an architectural lower entrance panel.',
    signSystem: 'Parapet-mounted channel letters + entry monument panel',
  },
  {
    id: 'blimpie-coldstone',
    name: 'Blimpie & Cold Stone Creamery',
    image: '/images/project-coldstone.webp',
    meta: 'Frisco, TX · Quick service restaurant',
    signType: 'Dual-brand illuminated channel letters + cabinet',
    overview: 'Dual-franchise installation balancing two corporate brand guidelines with illuminated channel letters and contoured logo cabinets.',
    signSystem: 'Illuminated logo cabinet + red channel letters',
  },
  {
    id: 'omiya',
    name: 'Omiya Sushi Ramen Hibachi',
    image: '/images/project-omiya.webp',
    meta: 'Allen, TX · Japanese restaurant',
    signType: 'Front-lit channel letters + custom contour backer',
    overview: 'High-visibility white channel letters on black backer installed above a Mediterranean blue tile entryway tower.',
    signSystem: 'Front-lit channel letters on custom backer plate',
  },
  {
    id: 'addison-park',
    name: 'Addison Park Smiles',
    image: '/images/project-addisonpark.webp',
    meta: 'Addison, TX · Dental clinic',
    signType: 'Contour logo + channel letters + backer',
    overview: 'Neon-look blue LED contour tooth symbol and clean white channel letters installed on a gloss black architectural backer band.',
    signSystem: 'Contour LED logo cabinet + white channel letters',
  },
  {
    id: 'busy-bee',
    name: 'The Busy Bee Coffee House',
    image: '/images/project-busybee.webp',
    meta: 'Carrollton, TX · Coffee house',
    signType: 'Interior brushed metal dimensional sign',
    overview: 'Precision-cut brushed metallic honeycomb bee emblem and dimensional wall letters creating an upscale lobby feature wall.',
    signSystem: 'Brushed brass dimensional letters + laser-cut emblem',
  },
  {
    id: 'fix-dental',
    name: 'Fix Dental and Implant Center',
    image: '/images/project-fixdental.webp',
    meta: 'Richardson, TX · Dental clinic',
    signType: 'Back-lit LED lobby sign + 3D contour logo',
    overview: 'Back-lit illuminated white acrylic backer board featuring high-contrast black dimensional letters and a multi-element tooth mosaic logo.',
    signSystem: 'Interior illuminated panel with halo-lit contour logo',
  },
  {
    id: 'amazing-nails',
    name: 'Amazing Nails Salon',
    image: '/images/project-amazingnails.webp',
    meta: 'Frisco, TX · Nail salon & spa',
    signType: 'Dimensional storefront channel letters',
    overview: 'Tall, slender black dimensional channel letters mounted directly to the stucco commercial facade above custom metal entrance awnings.',
    signSystem: 'Front-lit stylized channel letters',
  },
  {
    id: 'moda-studio',
    name: 'Moda Studio',
    image: '/images/project-modastudio.webp',
    meta: 'Plano, TX · Retail fashion boutique',
    signType: 'Illuminated halo-lit entrance sign',
    overview: 'Halo-lit dimensional letters and flowing accent wave mounted to a crisp white entrance backer panel spanning the mall retail storefront.',
    signSystem: 'Halo-lit dimensional letters on architectural backer',
  },
  {
    id: 'oui-massage',
    name: 'Oui Massage',
    image: '/images/project-ouimassage.webp',
    meta: 'Dallas, TX · Massage & wellness',
    signType: 'Front-lit channel letters + cloud logo cabinet',
    overview: 'Clean white front-lit channel letters paired with a soft-blue illuminated cloud contour cabinet mounted to the brick building face.',
    signSystem: 'Front-lit channel letters + custom contour logo cabinet',
  },
  {
    id: 'pure-green',
    name: 'Pure Green',
    image: '/images/project-puregreen.webp',
    meta: 'Southlake, TX · Juice & smoothie bar',
    signType: 'Front-lit channel letters + tagline raceway',
    overview: 'Vibrant green and white front-lit channel letters with heart-drop leaf emblem mounted on a natural limestone corner tower.',
    signSystem: 'Front-lit channel letters + integrated tagline cabinet',
  },
  {
    id: 'kathak-rhythms',
    name: 'Kathak Rhythms',
    image: '/images/project-kathakrhythms.webp',
    meta: 'Coppell, TX · Dance academy',
    signType: 'Custom contour dancer cabinet + script letters',
    overview: 'Large, colorful full-figure traditional dancer contour cabinet topped with flowing green script channel letters on dark brick.',
    signSystem: 'High-output LED custom contour cabinet + script channel letters',
  },
  {
    id: 'moka-co',
    name: 'Moka & Co Specialty Coffee',
    image: '/images/project-mokaco.webp',
    meta: 'Plano, TX · Specialty coffee house',
    signType: 'Warm halo-lit letters + illuminated subtitle bar',
    overview: 'Warm golden halo-lit dimensional letters with coffee cup insignia set above a clean illuminated subtitle raceway on stacked stone.',
    signSystem: 'Reverse halo-lit channel letters + illuminated raceway box',
  },
  {
    id: 'bclm',
    name: 'bclm Industrial Facility',
    image: '/images/project-bclm.webp',
    meta: 'Irving, TX · Commercial & industrial',
    signType: 'Dimensional letters + address package',
    overview: 'Bold white dimensional industrial logo letters and building identification numbers engineered for high-visibility industrial complex facades.',
    signSystem: 'Heavy-gauge architectural dimensional letters + address signage',
  },
  {
    id: 'inso-kitchen',
    name: 'InSo Live Fire Kitchen',
    image: '/images/project-inso.webp',
    meta: 'Frisco, TX · Fine dining & grill',
    signType: 'Gold brushed dimensional letters + dual heraldic crests',
    overview: 'Stunning gold dimensional serif lettering flanked by crowned rampant lions mounted to a dramatic black architectural slat wall.',
    signSystem: 'Cast metal gold dimensional letters + custom cut crests',
  },
  {
    id: 'la-cuentista',
    name: 'La Cuentista Books & Coffee',
    image: '/images/project-lacuentista.webp',
    meta: 'Dallas, TX · Bookstore & cafe',
    signType: 'Illuminated storefront sign + gooseneck downlights',
    overview: 'Atmospheric evening lighting package featuring warm gooseneck fixtures illuminating dimensional facade letters with a side blade sign.',
    signSystem: 'Dimensional facade lettering + architectural gooseneck lighting + projecting blade sign',
  },
  {
    id: 'malani-jewelers',
    name: 'Malani Jewelers Monument Sign',
    image: '/images/project-malani.webp',
    meta: 'Dallas, TX · Luxury retail & outdoor',
    signType: 'Multi-tenant highway monument sign with illuminated panels',
    overview: 'Substantial commercial architectural monument sign with white masonry frame, address header and illuminated tenant panels along a major roadway.',
    signSystem: 'Architectural pylon/monument sign with changeable tenant cabinets',
  },
]

export default function ProjectsSection() {
  return (
    <section className="light sec" id="projects">
      <div className="wrap">
        <div className="eyebrow">Selected projects</div>
        <h2 className="disp sec-h">Real signs. Real places.</h2>
        <p className="loc-intro">
          See how different sign systems come together for businesses across North Texas. Open a case study to explore the project.
        </p>

        <div className="case-grid">
          {PROJECTS.map((project) => (
            <article className="case-card" id={project.id} key={project.id}>
              <div className="case-image">
                <img
                  src={project.image}
                  alt={`${project.name} - custom ${project.signType.toLowerCase()} designed, permitted and installed by Sign Zone DFW`}
                  loading="lazy"
                  width={600}
                  height={450}
                />
              </div>
              <div className="case-body">
                <div className="case-meta">{project.meta}</div>
                <h3>{project.name}</h3>
                <p className="case-type">{project.signType}</p>
                <details>
                  <summary>
                    Explore case study
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="case-detail">
                    <strong>Project overview</strong>
                    <p>{project.overview}</p>
                    <strong>Sign system</strong>
                    <p>{project.signSystem}</p>
                    <Link
                      href={`/quote?type=${project.quoteType || 'channel'}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        marginTop: 12,
                        fontSize: 14,
                        fontWeight: 700,
                        color: 'var(--blue)',
                      }}
                    >
                      Request a quote for a sign like this →
                    </Link>
                  </div>
                </details>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
