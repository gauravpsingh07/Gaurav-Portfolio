import { motion as Motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { MotionSection, Stagger } from "../ui/Reveal";
import { fadeUp } from "../ui/motionVariants";

const educationItems = [
  {
    degree: "Master of Engineering in Computer Science",
    school: "Oregon State University",
    period: "Sep 2023 - Dec 2025",
    location: "Corvallis, OR",
    description:
      "Graduate work focused on algorithms, computer architecture, human-computer interaction, graphics, full-stack development, and data analysis.",
  },
  {
    degree: "Bachelor's Degree in Computer Science",
    school: "Thakur College of Science and Commerce",
    period: "Jun 2019 - Apr 2022",
    location: "Mumbai, India",
    description:
      "Built a strong foundation in programming, data structures, algorithms, databases, operating systems, computer networks, Linux, and software engineering.",
  },
];

function EducationSection() {
  return (
    <MotionSection
      id="education"
      className="section-shell flex h-full flex-col px-6 py-8 sm:px-8 sm:py-10"
    >
      <SectionHeader
        eyebrow="Education"
        title="Academic grounding that strengthened both my systems thinking and product instincts."
        description="Formal training gave me the theory, but the most important outcome was learning how to connect technical depth with practical software delivery."
      />

      <Stagger
        className="mt-8 flex flex-1 flex-col gap-4"
        delayChildren={0.05}
        staggerChildren={0.08}
      >
        {educationItems.map((item, index) => (
          <Motion.article
            key={item.degree}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="glass-card flex-1 overflow-hidden p-5 sm:p-6"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${
                index === 0
                  ? "from-[#d7e4ff]/44 via-transparent to-[#dce4f5]/34"
                  : "from-[#e7def7]/44 via-transparent to-[#f1ddd4]/32"
              }`}
            />
            <div className="relative flex h-full flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                  {item.period}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-stone-900">{item.degree}</h3>
                <p className="mt-1 text-sm font-medium text-[#5572d8]">{item.school}</p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600">
                  {item.description}
                </p>
              </div>

              <span className="w-max rounded-full border border-[rgba(132,112,94,0.12)] bg-white/76 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                {item.location}
              </span>
            </div>
          </Motion.article>
        ))}
      </Stagger>
    </MotionSection>
  );
}

export default EducationSection;
