import Link from "next/link";
import { SiteFooter } from "./_components/SiteFooter";
import { homeImages, projects } from "./data";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <main id="main-content">
        <section className="home-intro" aria-labelledby="home-title">
          <h1 className="visually-hidden" id="home-title">Shrink Circuits</h1>
          <figure className="kit-feature">
            <img
              src="/images/cover/2500.webp"
              alt="The complete Shrink Circuits kit, including the purple Field Notes notebook, circuit modules, shrink-plastic forms, stencils, and materials"
              fetchPriority="high"
            />
          </figure>
          <div className="home-intro-details">
            <div className="hero-intro">
              <p>Mobile MakerLab / Workshops / Design for Learning</p>
              <a href="#projects">Explore the work <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-credit">
              <p>
                <span>
                  Launch grant <span className="grant-thanks">(thank you, Awesome Foundation!)</span>
                </span>
                <a
                  href="https://www.awesomefoundation.org/en/projects/30742-shrink-circuits-nomad-lab"
                  target="_blank"
                  rel="noreferrer"
                >
                  Awesome Foundation — Portland, 2014 <span aria-hidden="true">↗</span>
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="projects-section" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <p className="eyebrow">Maker Edu on the Move</p>
            <h2 id="projects-title">Learning by making.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <Link
                className={`project-card${project.slug === "steamteam" ? " project-card--document" : ""}`}
                href={`/${project.slug}`}
                key={project.slug}
              >
                <figure>
                  <img
                    src={project.hero}
                    alt=""
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </figure>
                <div className="project-card-copy">
                  <span>{project.navLabel}</span>
                  <span aria-hidden="true">↗</span>
                </div>
                <p>{project.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="home-gallery-section" aria-labelledby="field-notes-title">
          <div className="section-heading section-heading-inline">
            <div>
              <p className="eyebrow">Field notes</p>
              <h2 id="field-notes-title">Materials, circuits, play.</h2>
            </div>
          </div>
          <div className="home-gallery">
            {homeImages.map((src, index) => (
              <figure key={src}>
                <img
                  src={src}
                  alt={`Shrink Circuits field note ${index + 1} of ${homeImages.length}`}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
