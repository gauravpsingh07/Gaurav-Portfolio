import { motion as Motion } from "framer-motion";
import { certifications } from "../../data/portfolio";
import SectionHeader from "../ui/SectionHeader";
import { MotionSection, Stagger } from "../ui/Reveal";
import { fadeUp } from "../ui/motionVariants";

function CertificationsSection() {
  return (
    <MotionSection id="certifications" className="section-block compact-section">
      <div className="site-container">
        <SectionHeader
          eyebrow="Certifications"
          title="Verified cloud and data credentials."
        />

        <Stagger className="certification-list" delayChildren={0.03} staggerChildren={0.06}>
          {certifications.map((credential) => (
            <Motion.article key={credential.title} variants={fadeUp} className="certification-item">
              <div>
                <h3>{credential.title}</h3>
                <p>
                  {credential.issuer}
                  {credential.period ? <span> / {credential.period}</span> : null}
                </p>
              </div>
              <a href={credential.href} target="_blank" rel="noreferrer" className="text-link">
                {credential.linkLabel}
              </a>
            </Motion.article>
          ))}
        </Stagger>
      </div>
    </MotionSection>
  );
}

export default CertificationsSection;
