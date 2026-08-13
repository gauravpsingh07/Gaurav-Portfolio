import { motion as Motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "./motionVariants";

const baseTransition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1],
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 16,
  once = true,
}) {
  const reduceMotion = useReducedMotion();

  const variants = reduceMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        show: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            ...baseTransition,
            delay,
          },
        },
      };

  return (
    <Motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      variants={variants}
      className={className}
    >
      {children}
    </Motion.div>
  );
}

export function MotionSection({ children, className = "", id }) {
  const reduceMotion = useReducedMotion();

  return (
    <Motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      variants={
        reduceMotion
          ? {
              hidden: { opacity: 1, y: 0 },
              show: { opacity: 1, y: 0 },
            }
          : fadeUp
      }
    >
      {children}
    </Motion.section>
  );
}

export function Stagger({
  children,
  className = "",
  delayChildren = 0.04,
  staggerChildren: staggerAmount = 0.06,
  once = true,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <Motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      variants={
        reduceMotion
          ? { hidden: {}, show: {} }
          : staggerContainer(delayChildren, staggerAmount)
      }
    >
      {children}
    </Motion.div>
  );
}
