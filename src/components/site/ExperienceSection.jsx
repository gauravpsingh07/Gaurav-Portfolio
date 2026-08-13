import { motion as Motion, useReducedMotion } from "framer-motion";
import { experiences } from "../../data/portfolio";
import SectionHeader from "../ui/SectionHeader";
import { MotionSection, Stagger } from "../ui/Reveal";
import { fadeUp } from "../ui/motionVariants";

function ExperienceSection() {
  const reduceMotion = useReducedMotion();

  return (
    <MotionSection id="experience" className="section-block section-muted">
      <div className="site-container">
        <SectionHeader
          eyebrow="Experience"
          title="Professional work across product, platform, and university systems."
          description="A concise, recruiter-friendly view of my current and previous software engineering roles."
        />

        <Stagger className="experience-list" delayChildren={0.04} staggerChildren={0.07}>
          <Motion.span
            className="experience-line"
            aria-hidden="true"
            variants={
              reduceMotion
                ? undefined
                : {
                    hidden: { scaleY: 0 },
                    show: {
                      scaleY: 1,
                      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                    },
                  }
            }
          />
          {experiences.map((role) => (
            <Motion.article
              key={`${role.company}-${role.title}`}
              variants={fadeUp}
              className="experience-item"
            >
              <div className="experience-period">
                <p>{role.period}</p>
                <span>{role.mode}</span>
              </div>

              <div className="experience-content">
                <h3>{role.title}</h3>
                <p className="experience-company">
                  {role.company} <span>/ {role.type}</span>
                </p>
                <p className="experience-location">{role.location}</p>
              </div>
            </Motion.article>
          ))}
        </Stagger>
      </div>
    </MotionSection>
  );
}

export default ExperienceSection;
