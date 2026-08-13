import { motion as Motion } from "framer-motion";
import { education } from "../../data/portfolio";
import SectionHeader from "../ui/SectionHeader";
import { MotionSection, Stagger } from "../ui/Reveal";
import { fadeUp } from "../ui/motionVariants";

function EducationSection() {
  return (
    <MotionSection id="education" className="section-block section-muted">
      <div className="site-container">
        <SectionHeader
          eyebrow="Education"
          title="Computer science education grounded in systems and applied software work."
        />

        <Stagger className="education-list" delayChildren={0.03} staggerChildren={0.06}>
          {education.map((item) => (
            <Motion.article key={item.degree} variants={fadeUp} className="education-item">
              <div>
                <p className="education-period">{item.period}</p>
                <h3>{item.degree}</h3>
                <p className="education-school">{item.school}</p>
              </div>
              <p className="education-location">{item.location}</p>
            </Motion.article>
          ))}
        </Stagger>
      </div>
    </MotionSection>
  );
}

export default EducationSection;
