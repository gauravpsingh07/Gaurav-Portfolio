import { profile } from "../../data/portfolio";
import { MotionSection, Reveal } from "../ui/Reveal";

function AboutSection() {
  return (
    <MotionSection id="about" className="section-block about-section">
      <div className="site-container about-grid">
        <Reveal>
          <p className="eyebrow">About</p>
          <h2 className="about-title">I care about the software around the feature, not only the feature itself.</h2>
        </Reveal>

        <Reveal className="about-copy" delay={0.06}>
          <p>
            I&apos;m a software engineer and recent Computer Science master&apos;s graduate from Oregon
            State University. My work leans toward backend-heavy product engineering: secure APIs,
            reliable data flows, authentication, testing, and deployment practices that make an
            application easier to operate.
          </p>
          <p>
            Recently, I&apos;ve focused on AI support systems, agent safety, observability, and cloud
            monitoring. I&apos;m looking for a team where I can contribute across backend systems,
            full-stack product work, and AI-enabled applications.
          </p>
          <div className="about-links">
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-link">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-link">
              LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </MotionSection>
  );
}

export default AboutSection;
