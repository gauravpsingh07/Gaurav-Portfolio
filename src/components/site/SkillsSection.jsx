import { motion as Motion } from "framer-motion";
import { skillGroups } from "../../data/portfolio";
import SectionHeader from "../ui/SectionHeader";
import { MotionSection, Stagger } from "../ui/Reveal";
import { fadeUp } from "../ui/motionVariants";

function SkillsSection() {
  return (
    <MotionSection id="skills" className="section-block">
      <div className="site-container">
        <SectionHeader
          eyebrow="Skills"
          title="A practical stack for building and operating software."
          description="Grouped by the work each tool supports, from service design and interfaces to data, cloud delivery, and testing."
        />

        <Stagger className="skills-grid" delayChildren={0.04} staggerChildren={0.06}>
          {skillGroups.map((group) => (
            <Motion.article key={group.title} variants={fadeUp} className="skill-group">
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </Motion.article>
          ))}
        </Stagger>
      </div>
    </MotionSection>
  );
}

export default SkillsSection;
