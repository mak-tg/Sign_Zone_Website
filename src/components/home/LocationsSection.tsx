import Link from 'next/link'

interface LocationItem {
  slug: string
  name: string
  county: string
  districts: string
}

const LOCATIONS_LIST: LocationItem[] = [
  { slug: 'dallas',        name: 'Dallas',        county: 'Dallas County',          districts: 'Downtown · Uptown · Deep Ellum · North Dallas' },
  { slug: 'fort-worth',    name: 'Fort Worth',    county: 'Tarrant County',         districts: 'Sundance Square · 7th St · Stockyards' },
  { slug: 'plano',         name: 'Plano',         county: 'Collin County',          districts: 'Legacy West · Downtown Plano · Hwy 121' },
  { slug: 'frisco',        name: 'Frisco',        county: 'Collin & Denton County', districts: 'The Star · PGA Parkway · Preston Road' },
  { slug: 'arlington',     name: 'Arlington',     county: 'Tarrant County',         districts: 'Entertainment District · Highlands · UTA' },
  { slug: 'carrollton',    name: 'Carrollton',    county: 'Dallas & Denton County', districts: 'Belt Line Corridor · Koreatown · Valwood' },
  { slug: 'richardson',    name: 'Richardson',    county: 'Dallas & Collin County', districts: 'Telecom Corridor · CityLine · Arapaho' },
  { slug: 'mckinney',      name: 'McKinney',      county: 'Collin County',          districts: 'Historic Downtown · Craig Ranch · US-380' },
  { slug: 'allen',         name: 'Allen',         county: 'Collin County',          districts: 'Watters Creek · US-75 · Premium Outlets' },
  { slug: 'southlake',     name: 'Southlake',     county: 'Tarrant & Denton County',districts: 'Town Square · Southlake Blvd · Carroll' },
  { slug: 'irving',        name: 'Irving',        county: 'Dallas County',          districts: 'Las Colinas · Urban Center · MacArthur' },
  { slug: 'grand-prairie', name: 'Grand Prairie', county: 'Dallas & Tarrant County',districts: 'EpicCentral · I-20 Corridor · Main St' },
  { slug: 'mansfield',     name: 'Mansfield',     county: 'Tarrant & Johnson County',districts: 'Historic Downtown · Broad St · US-287' },
  { slug: 'addison',       name: 'Addison',       county: 'Dallas County',          districts: 'Addison Circle · Belt Line Corridor · Vitruvian' },
  { slug: 'coppell',       name: 'Coppell',       county: 'Dallas & Denton County', districts: 'Old Town · Sandy Lake · Denton Tap' },
  { slug: 'ennis',         name: 'Ennis',         county: 'Ellis County',           districts: 'Historic Downtown · I-45 Corridor · Ennis Ave' },
]

export default function LocationsSection() {
  return (
    <section className="paper sec" id="locations">
      <div className="wrap">
        <div className="eyebrow">Where we work</div>
        <h2 className="disp sec-h">We serve businesses across DFW.</h2>
        <p className="loc-intro">
          From storefronts and offices to shopping centers and campuses, we help businesses across Dallas–Fort Worth find the right sign for their location.
        </p>

        {/* Split Layout: Dark panel left + city list right */}
        <div className="loc-split">
          {/* Left anchor panel */}
          <div className="loc-anchor">
            <span className="loc-anchor-badge">DFW</span>
            <h3 className="loc-anchor-title">Signs Made for Your City.</h3>
            <p className="loc-anchor-body">
              Every location has its own property requirements and sign rules. We help you plan for the details, from the first site review to installation.
            </p>
            <Link href="/quote" className="btn btn-blue loc-anchor-cta">
              Tell us about your location →
            </Link>
          </div>

          {/* Right city box grid (2 in a row) */}
          <div className="loc-right-col">
            <div className="loc-box-grid">
              {LOCATIONS_LIST.map((loc) => (
                <Link key={loc.slug} href={`/locations/${loc.slug}`} className="loc-box">
                  <div className="loc-box-info">
                    <span className="loc-box-city">{loc.name}</span>
                    <span className="loc-box-county">{loc.county}</span>
                  </div>
                  <span className="loc-box-arrow" aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
            <p className="loc-list-footnote">
              Serving the wider Dallas–Fort Worth area too.{' '}
              <Link href="/quote" className="loc-list-ask">Ask about your city →</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
