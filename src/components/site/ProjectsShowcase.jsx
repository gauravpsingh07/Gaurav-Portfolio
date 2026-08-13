import { motion as Motion } from "framer-motion";
import { additionalProjects, featuredProjects } from "../../data/portfolio";
import SectionHeader from "../ui/SectionHeader";
import { MotionSection, Reveal, Stagger } from "../ui/Reveal";
import { fadeUp } from "../ui/motionVariants";

function ProjectLinks({ links }) {
  return (
    <div className="project-links">
      {links.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="text-link">
          {link.label}
        </a>
      ))}
    </div>
  );
}

function FeaturedProject({ project, index }) {
  const imageFirst = index % 2 === 1;

  return (
    <Motion.article variants={fadeUp} className="featured-project">
      <div className={`project-copy ${imageFirst ? "lg:order-2" : ""}`}>
        <div className="project-index" aria-hidden="true">
          0{index + 1}
        </div>
        <p className="project-kicker">{project.kicker}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-engineering">
          <h4>Engineering</h4>
          <ul>
            {project.engineering.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="tech-list" aria-label={`${project.title} technologies`}>
          {project.stack.map((item) => (
            <span key={item} className="tech-tag">
              {item}
            </span>
          ))}
        </div>

        <ProjectLinks links={project.links} />
      </div>

      <a
        href={project.links[0].href}
        target="_blank"
        rel="noreferrer"
        className={`project-image-link ${imageFirst ? "lg:order-1" : ""}`}
        aria-label={`Open ${project.title}`}
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
          className={project.imagePosition}
        />
      </a>
    </Motion.article>
  );
}

function ProjectsShowcase() {
  return (
    <MotionSection id="projects" className="section-block">
      <div className="site-container">
        <SectionHeader
          eyebrow="Selected work"
          title="Systems built around real product and engineering constraints."
          description="The strongest projects are shown with real application screens and the technical decisions that make them useful, secure, and maintainable."
        />

        <Stagger className="featured-projects" delayChildren={0.04} staggerChildren={0.08}>
          {featuredProjects.map((project, index) => (
            <FeaturedProject key={project.title} project={project} index={index} />
          ))}
        </Stagger>

        <Reveal className="additional-projects" delay={0.06}>
          <div className="additional-projects-heading">
            <p className="eyebrow">Additional projects</p>
            <p>Smaller builds and supporting systems, listed without equal visual weight.</p>
          </div>

          <div>
            {additionalProjects.map((project) => (
              <article key={project.title} className="project-row">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-row-meta">
                  <div className="tech-list">
                    {project.stack.map((item) => (
                      <span key={item} className="tech-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                  <ProjectLinks links={project.links} />
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </MotionSection>
  );
}

export default ProjectsShowcase;
