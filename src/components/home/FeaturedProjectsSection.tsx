import Link from 'next/link'
import { PROJECTS, type ProjectItem } from '@/data/projectsData'

const FEATURED_PROJECT_IDS = new Set([
  'arwa-coffee',
  'burn-boot-camp',
  'malani-jewelers',
])

const SIGN_TYPE_LABELS: Record<ProjectItem['category'], string> = {
  channel: 'Channel letters',
  monument: 'Monument sign',
  pylon: 'Pylon sign',
  storefront: 'Storefront letters',
  interior: 'Interior sign',
  wrap: 'Vehicle wrap',
}

const CLIENT_LABELS: Record<string, string> = {
  'malani-jewelers': 'Malani Jewelers',
}

export default function FeaturedProjectsSection() {
  const featuredProjects = PROJECTS.filter((project) => FEATURED_PROJECT_IDS.has(project.id))

  return (
    <section className="dark sec home-featured-projects" aria-labelledby="featured-projects-heading">
      <div className="wrap">
        <div className="featured-projects-heading">
          <div>
            <div className="eyebrow">Featured projects</div>
            <h2 className="disp sec-h" id="featured-projects-heading">
              Signs we built for local brands.
            </h2>
          </div>
          <p>See three different kinds of signs we built for North Texas businesses.</p>
        </div>

        <div className="featured-projects-grid">
          {featuredProjects.map((project) => (
            <Link className="featured-project" href={`/projects#${project.id}`} key={project.id}>
              <img src={project.image} alt={`${CLIENT_LABELS[project.id] ?? project.name} sign installed in ${project.city}`} loading="lazy" width={600} height={450} />
              <div className="featured-project-copy">
                <span className="featured-project-location">{SIGN_TYPE_LABELS[project.category]}</span>
                <h3>{CLIENT_LABELS[project.id] ?? project.name}</h3>
                <p className="featured-project-detail">{project.signType} · {project.city}</p>
                <span className="featured-project-link">View project <span aria-hidden="true">→</span></span>
              </div>
            </Link>
          ))}
        </div>

        <Link href="/projects" className="btn btn-blue featured-projects-all">
          See all projects <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}
