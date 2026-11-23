interface ClientBrand {
  name: string
  src: string
  className?: string
}

const CLIENT_BRANDS: ClientBrand[] = [
  { name: 'Cold Stone Creamery', src: '/images/client-coldstone.svg', className: 'client-coldstone' },
  { name: 'Burn Boot Camp', src: '/images/client-burnbootcamp.svg', className: 'client-burnbootcamp' },
  { name: 'Blimpie', src: '/images/client-blimpie.svg', className: 'client-blimpie' },
  { name: 'Jabil', src: '/images/client-jabil.svg', className: 'client-jabil' },
  { name: 'Hand & Stone Massage', src: '/images/client-handandstone.svg', className: 'client-handandstone' },
  { name: 'Gracie Barra', src: '/images/client-graciebarra.png', className: 'client-graciebarra' },
  { name: 'Rock N Roll Sushi', src: '/images/client-rock.png', className: 'client-rock' },
  { name: 'Pure Green', src: '/images/client-puregreen.png', className: 'client-puregreen' },
  { name: 'Malani Jewelers', src: '/images/client-malani.png', className: 'client-malani' },
  { name: 'Scratch Wings', src: '/images/client-scratch.png', className: 'client-scratch' },
  { name: 'Auréa House', src: '/images/client-aurea.png' },
  { name: 'Teapioca Lounge', src: '/images/client-teapioca.png', className: 'client-teapioca' },
  { name: 'Sanjiva Medical Spa', src: '/images/client-sanjiva.png', className: 'client-sanjiva' },
]

export default function ClientStrip() {
  return (
    <section className="client-strip" aria-label="Brands Sign Zone has worked with">
      <div className="wrap">
        <p className="client-strip-label">Some of the brands we&apos;ve worked with</p>
        <div className="client-window">
          <div className="client-track">
            <div className="client-group">
              {CLIENT_BRANDS.map((brand, i) => (
                <div key={i} className="client-logo">
                  <img
                    className={brand.className}
                    src={brand.src}
                    alt={brand.name}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <div className="client-group" aria-hidden="true">
              {CLIENT_BRANDS.map((brand, i) => (
                <div key={`clone-${i}`} className="client-logo">
                  <img
                    className={brand.className}
                    src={brand.src}
                    alt=""
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
