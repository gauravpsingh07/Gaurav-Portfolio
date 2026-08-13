import { motion as Motion, useReducedMotion } from "framer-motion";
import { skillGroups } from "../../data/portfolio";
import SectionHeader from "../ui/SectionHeader";
import { MotionSection, Stagger } from "../ui/Reveal";
import { fadeUp } from "../ui/motionVariants";

function SkillsSection() {
  const reduceMotion = useReducedMotion();

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
            <Motion.article
              key={group.title}
              variants={fadeUp}
              whileHover={reduceMotion ? undefined : { y: -6 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="skill-group"
            >
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
