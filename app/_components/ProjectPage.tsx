import Link from "next/link";
import type { Project } from "../data";
import { ProjectGallery } from "./ProjectGallery";
import { SiteFooter } from "./SiteFooter";

export function ProjectPage({ project }: { project: Project }) {
  return (
    <>
      <a className="skip-link" href="#project-content">
        Skip to project
      </a>
      <main id="project-content">
        <section className="project-intro">
          <div>
            <p className="eyebrow">{project.eyebrow}</p>
            <h1>{project.title}</h1>
          </div>
          <div className="project-description-group">
            <p className="project-description">{project.description}</p>
            {project.externalLink ? (
              <a
                className="project-external-link"
                href={project.externalLink.href}
                target="_blank"
                rel="noreferrer"
              >
                {project.externalLink.label} <span aria-hidden="true">↗</span>
              </a>
            ) : null}
          </div>
        </section>

        <figure className="project-hero">
          <img src={project.hero} alt={`${project.title} project`} />
        </figure>

        <section className="project-documentation" aria-labelledby="documentation-title">
          <div className="section-heading">
            <p className="eyebrow">Process / people / outcomes</p>
            <h2 id="documentation-title">Project documentation</h2>
          </div>
          <ProjectGallery images={project.images} altPrefix={project.title} />
        </section>

        <Link className="back-link" href="/#projects">
          <span aria-hidden="true">←</span> All projects
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
