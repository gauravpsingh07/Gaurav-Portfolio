import { motion as Motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { MotionSection, Stagger } from "../ui/Reveal";
import { fadeUp } from "../ui/motionVariants";

const skillGroups = [
  {
    title: "Frontend Systems",
    description: "Component architecture, fast iteration, polished UX, and responsive interfaces.",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Redux Toolkit", "Vite"],
    accent: "from-[#d7e4ff]/44 to-transparent",
  },
  {
    title: "Backend & APIs",
    description: "Reliable service design, validation, persistence, and production-ready API workflows.",
    skills: ["Node.js", "NestJS", "Flask", "REST APIs", "JWT Auth", "Redis"],
    accent: "from-[#dce4f5]/42 to-transparent",
  },
  {
    title: "Data & Persistence",
    description: "Structured storage, query performance, and practical data modeling across projects.",
    skills: ["PostgreSQL", "MongoDB", "Prisma", "SQL", "Data Modeling"],
    accent: "from-[#e7def7]/44 to-transparent",
  },
  {
    title: "Cloud & Delivery",
    description: "Deployment, CI/CD, automation, and cloud-backed development workflows.",
    skills: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Git"],
    accent: "from-[#f1ddd4]/46 to-transparent",
  },
];

function SkillsSection() {
  return (
    <MotionSection id="skills" className="section-shell px-6 py-8 sm:px-8 sm:py-10">
      <SectionHeader
        eyebrow="Skills"
        title="A practical toolkit for shipping both polished interfaces and dependable systems."
        description="I work across frontend, backend, data, and deployment layers, with most of my best work happening where those disciplines meet."
        action={<span className="tag-chip">Full-stack + Backend Focus</span>}
      />

      <Stagger className="mt-8 grid gap-5 md:grid-cols-2" delayChildren={0.06} staggerChildren={0.08}>
        {skillGroups.map((group, index) => (
          <Motion.article
            key={group.title}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 240, damping: 20 }}
            className="glass-card overflow-hidden p-5 sm:p-6"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${group.accent}`} />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="tag-chip">{`0${index + 1}`}</span>
                <span className="rounded-full border border-[rgba(132,112,94,0.12)] bg-white/74 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                  Capability
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-stone-900">{group.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-600">{group.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Motion.span
                    key={skill}
                    whileHover={{ y: -2 }}
                    className="tag-chip"
                  >
                    {skill}
                  </Motion.span>
                ))}
              </div>
            </div>
          </Motion.article>
        ))}
      </Stagger>
    </MotionSection>
  );
}

export default SkillsSection;
