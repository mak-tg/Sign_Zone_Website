import Link from 'next/link'

interface ReviewItem {
  name: string
  business: string
  city: string
  signType: string
  projectId: string
  image: string
  rating: number
  text: string
}

const REVIEWS: ReviewItem[] = [
  {
    name: 'Dr. Patel',
    business: 'Apex Specialty Care',
    city: 'Plano, TX',
    signType: 'Channel Letters',
    projectId: 'apex-specialty-care',
    image: '/images/project-apex.webp',
    rating: 5.0,
    text: 'Clean illuminated channel letters with great tollway visibility. Permitting and install were seamless.',
  },
  {
    name: 'Marcus V.',
    business: 'Rock N Roll Sushi',
    city: 'Fort Worth, TX',
    signType: 'Channel + Logo Box',
    projectId: 'rock-n-roll-sushi',
    image: '/images/project-rock.webp',
    rating: 5.0,
    text: 'Matched our brand specs from proof to crane install. The lit sign package looks phenomenal.',
  },
  {
    name: 'Dr. Rao',
    business: 'Sanjiva Medical Spa',
    city: 'Dallas, TX',
    signType: 'Halo-Lit Letters',
    projectId: 'sanjiva-spa',
    image: '/images/project-sanjiva.webp',
    rating: 4.7,
    text: 'Warm halo lighting gave our spa the exact upscale look we wanted. Very detail-oriented crew.',
  },
  {
    name: 'Tariq A.',
    business: 'Arwa Coffee',
    city: 'Arlington, TX',
    signType: 'Storefront Letters',
    projectId: 'arwa-coffee',
    image: '/images/project-arwa.webp',
    rating: 5.0,
    text: 'Sharp gold dimensional letters above our entrance. Delivered on time and made everything easy.',
  },
  {
    name: 'Coach Dave',
    business: 'Burn Boot Camp',
    city: 'Mansfield, TX',
    signType: 'Front-Lit Letters',
    projectId: 'burn-boot-camp',
    image: '/images/project-burnbootcamp.webp',
    rating: 4.6,
    text: 'Bold front-lit letters impossible to miss from the road. Great communication through city permits.',
  },
  {
    name: 'Ken J.',
    business: 'A Mart Food Market',
    city: 'Dallas, TX',
    signType: 'Facade + Cabinet',
    projectId: 'a-mart',
    image: '/images/project-amart.webp',
    rating: 5.0,
    text: 'Large illuminated storefront package that transformed our facade. Dependable local team.',
  },
]

function StarRating({ rating }: { rating: number }) {
  const starPath =
    'M12 2.2l2.92 5.92 6.53.95-4.72 4.6 1.11 6.5L12 17.1l-5.84 3.07 1.11-6.5-4.72-4.6 6.53-.95L12 2.2z'

  return (
    <div
      className="review-stars"
      aria-label={`${rating.toFixed(1)} out of 5 stars`}
      style={{ display: 'inline-flex', flexDirection: 'row', alignItems: 'center', gap: 3 }}
    >
      {[0, 1, 2, 3, 4].map((idx) => {
        const fill = Math.min(Math.max(rating - idx, 0), 1)
        const fillPct = Math.round(fill * 100)
        return (
          <svg
            key={idx}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            aria-hidden="true"
            style={{ display: 'block', flexShrink: 0 }}
          >
            <path d={starPath} fill="currentColor" opacity="0.22" />
            {fillPct > 0 && (
              <g style={fillPct < 100 ? { clipPath: `inset(0 ${100 - fillPct}% 0 0)` } : undefined}>
                <path d={starPath} fill="currentColor" />
              </g>
            )}
          </svg>
        )
      })}
    </div>
  )
}

function ReviewCardList() {
  return (
    <>
      {REVIEWS.map((r, i) => (
        <figure key={i} className="review-card">
          <Link href={`/projects#${r.projectId}`} className="review-media" aria-label={`View ${r.business} sign project`}>
            <img
              src={r.image}
              alt={`${r.business} — ${r.signType} installed in ${r.city}`}
              width={600}
              height={450}
              loading="lazy"
            />
            <span className="review-sign-tag">{r.signType}</span>
          </Link>

          <div className="review-body">
            <div className="review-rating-row">
              <StarRating rating={r.rating} />
              <span className="review-verified">{r.rating.toFixed(1)}</span>
            </div>

            <blockquote>&ldquo;{r.text}&rdquo;</blockquote>

            <figcaption>
              <div>
                <strong>{r.name}</strong>
                <span className="review-business">{r.business} · {r.city}</span>
              </div>
              <Link href={`/projects#${r.projectId}`} className="review-project-link">
                View sign →
              </Link>
            </figcaption>
          </div>
        </figure>
      ))}
    </>
  )
}

export default function ReviewCarousel() {
  return (
    <section className="dark sec review-section" aria-labelledby="review-heading">
      <div className="wrap">
        <div className="head-row">
          <div>
            <h2 className="disp sec-h" id="review-heading" style={{ margin: 0, maxWidth: 720 }}>
              What customers value.
            </h2>
            <p className="review-intro">
              Quality, communication, and care at every step.
            </p>
          </div>
        </div>
      </div>
      <div className="review-window" aria-label="Sample customer reviews">
        <div className="review-track">
          <div className="review-group">
            <ReviewCardList />
          </div>
          <div className="review-group" aria-hidden="true">
            <ReviewCardList />
          </div>
        </div>
      </div>
    </section>
  )
}
