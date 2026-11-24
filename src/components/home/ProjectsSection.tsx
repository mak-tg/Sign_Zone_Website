'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PROJECTS, type ProjectItem } from '@/data/projectsData'

export function ProjectCard({ project }: { project: ProjectItem }) {
  const [open, setOpen] = useState(false)

  return (
    <article className="case-card" id={project.id}>
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

        {/* Smooth Accordion Toggle Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={`case-toggle-btn ${open ? 'open' : ''}`}
          aria-expanded={open}
          style={{ marginTop: 8 }}
        >
          <span>{open ? 'Hide case study' : 'Explore case study'}</span>
          <span className="case-icon" aria-hidden="true">
            +
          </span>
        </button>

        {/* Animated Open / Close Drawer */}
        <div
          className={`case-drawer ${open ? 'open' : ''}`}
          style={{
            display: 'grid',
            gridTemplateRows: open ? '1fr' : '0fr',
            opacity: open ? 1 : 0,
            visibility: open ? 'visible' : 'hidden',
            transition: 'grid-template-rows 0.32s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease, visibility 0.25s ease',
          }}
        >
          <div style={{ minHeight: 0, overflow: 'hidden' }}>
            <div className="case-detail">
              <strong>Project overview</strong>
              <p>{project.overview}</p>
              <strong>Sign system</strong>
              <p>{project.signSystem}</p>
              <Link
                href={`/quote?type=${project.quoteType || 'channel'}`}
                className="case-quote-link"
              >
                <span>Request a quote for a sign like this</span>
                <span className="case-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function ProjectsSection({ asH1 = false }: { asH1?: boolean }) {
  return (
    <section className="light sec" id="projects">
      <div className="wrap">
        <div className="eyebrow">Selected projects</div>
        {asH1 ? (
          <h1 className="disp sec-h">Real signs. Real places.</h1>
        ) : (
          <h2 className="disp sec-h">Real signs. Real places.</h2>
        )}
        <p className="loc-intro">
          See how different sign systems come together for businesses across North Texas. Open a case study to explore the project.
        </p>

        <div className="case-grid">
          {PROJECTS.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
