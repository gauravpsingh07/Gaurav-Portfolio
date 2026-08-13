import { motion as Motion } from "framer-motion";
import { Stagger } from "./Reveal";
import { fadeUp } from "./motionVariants";

function SectionHeader({
  eyebrow,
  title,
  description,
  action,
}) {
  return (
    <Stagger className="section-heading" delayChildren={0.02} staggerChildren={0.07}>
        <div>
          <Motion.p variants={fadeUp} className="eyebrow">{eyebrow}</Motion.p>
          <Motion.h2 variants={fadeUp} className="section-title">{title}</Motion.h2>
          {description ? (
            <Motion.p variants={fadeUp} className="section-copy">{description}</Motion.p>
          ) : null}
        </div>
        {action ? <Motion.div variants={fadeUp} className="section-action">{action}</Motion.div> : null}
    </Stagger>
  );
}

export default SectionHeader;
