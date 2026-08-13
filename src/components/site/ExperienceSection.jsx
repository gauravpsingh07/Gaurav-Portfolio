import { motion as Motion } from "framer-motion";
import { experiences } from "../../data/portfolio";
import SectionHeader from "../ui/SectionHeader";
import { MotionSection, Stagger } from "../ui/Reveal";
import { fadeUp } from "../ui/motionVariants";

function ExperienceSection() {
  return (
    <MotionSection id="experience" className="section-block section-muted">
      <div className="site-container">
        <SectionHeader
          eyebrow="Experience"
          title="Professional work across product, platform, and university systems."
          description="A concise, recruiter-friendly view of my current and previous software engineering roles."
        />

        <Stagger className="experience-list" delayChildren={0.04} staggerChildren={0.07}>
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
