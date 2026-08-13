import { motion as Motion } from "framer-motion";
import { profile } from "../../data/portfolio";
import { MotionSection, Stagger } from "../ui/Reveal";
import { fadeUp } from "../ui/motionVariants";

const summaryItems = [
  {
    label: "Education",
    value: "M.Eng. Computer Science, Oregon State University",
  },
  {
    label: "Engineering focus",
    value: "Backend systems, full-stack products, and AI-enabled applications",
  },
  {
    label: "Core tools",
    value: "TypeScript, Java, Spring Boot, React, PostgreSQL, and AWS",
  },
];

function HeroSection() {
  return (
    <MotionSection id="top" className="hero-section">
      <div className="site-container">
        <div className="hero-grid">
          <Stagger className="hero-copy" delayChildren={0.06} staggerChildren={0.07}>
            <Motion.div variants={fadeUp}>
              <p className="eyebrow">{profile.name}</p>
              <p className="hero-role">Software Engineer</p>
            </Motion.div>

            <Motion.h1 variants={fadeUp} className="hero-title">
              I build backend systems, full-stack products, and AI-enabled applications.
            </Motion.h1>

            <Motion.p variants={fadeUp} className="hero-intro">
              Recent Computer Science master&apos;s graduate with experience across secure
              APIs, cloud-backed services, product interfaces, and reliable data workflows.
            </Motion.p>

            <Motion.div variants={fadeUp} className="hero-actions">
              <a href="#projects" className="button-primary">
                View projects
              </a>
              <a href="#contact" className="text-link">
                Contact me
              </a>
            </Motion.div>

            <Motion.div variants={fadeUp} className="hero-availability">
              <span className="availability-dot" aria-hidden="true" />
              Open to new opportunities.
            </Motion.div>
          </Stagger>

          <Motion.figure
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="portrait-wrap"
          >
            <img
              src={profile.portrait}
              alt="Gaurav Pramod Singh outside Oregon State University"
              className="portrait-image"
              fetchPriority="high"
            />
            <figcaption>
              Based in the United States. Available for on-site, hybrid, and remote roles.
            </figcaption>
          </Motion.figure>
        </div>

        <dl className="hero-summary">
          {summaryItems.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </MotionSection>
  );
}

export default HeroSection;
