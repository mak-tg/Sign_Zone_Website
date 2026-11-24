interface ReviewItem {
  name: string
  business: string
  city: string
  stars: number
  text: string
}

const REVIEWS: ReviewItem[] = [
  {
    name: 'Dr. Patel',
    business: 'Apex Specialty Care',
    city: 'Plano, TX',
    stars: 5,
    text: 'The illuminated channel letters and logo give our healthcare facility the clean, authoritative visibility we needed from the tollway. Turnkey permitting and installation.',
  },
  {
    name: 'Marcus V.',
    business: 'Rock N Roll Sushi',
    city: 'Fort Worth, TX',
    stars: 5,
    text: 'From initial design proofs to final crane installation, Sign Zone ensured our brand identity matched our corporate criteria. The illuminated sign package looks phenomenal.',
  },
  {
    name: 'Dr. Rao',
    business: 'Sanjiva Medical Spa',
    city: 'Dallas, TX',
    stars: 5,
    text: 'The warm halo lighting gives our medical spa the exact upscale aesthetic we wanted. Professional crew that took care of every detail.',
  },
  {
    name: 'Tariq A.',
    business: 'Arwa Coffee',
    city: 'Arlington, TX',
    stars: 5,
    text: 'Our gold dimensional storefront letters look sharp above the entrance. Sign Zone delivered on time and made the entire process easy.',
  },
  {
    name: 'Coach Dave',
    business: 'Burn Boot Camp',
    city: 'Mansfield, TX',
    stars: 5,
    text: 'High-visibility front-lit letters that make our gym impossible to miss from the road. Great communication throughout the municipal permitting phase.',
  },
  {
    name: 'Ken J.',
    business: 'A Mart Food Market',
    city: 'Dallas, TX',
    stars: 5,
    text: 'Large illuminated storefront package and logo cabinet that transformed the entire building facade. Dependable local team.',
  },
]

function renderStars(count: number) {
  const full = '★'.repeat(count)
  const empty = '☆'.repeat(5 - count)
  return full + empty
}

function ReviewCardList() {
  return (
    <>
      {REVIEWS.map((r, i) => (
        <figure key={i} className="review-card">
          <div className="review-stars" aria-label={`${r.stars} out of 5 stars`}>
            {renderStars(r.stars)}
          </div>
          <blockquote>&ldquo;{r.text}&rdquo;</blockquote>
          <figcaption>
            <strong>{r.name}</strong>
            <span className="review-business">{r.business}</span>
            <span className="review-address">{r.city}</span>
          </figcaption>
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
