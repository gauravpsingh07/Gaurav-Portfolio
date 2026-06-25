import { motion as Motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { MotionSection, Stagger } from "../ui/Reveal";
import { fadeUp } from "../ui/motionVariants";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Saayam For All",
    type: "Full-time",
    period: "Mar 2026 - Present",
    location: "SAN JOSE, CALIFORNIA, UNITED STATES",
    mode: "Remote",
  },
  {
    title: "Software Engineering Assistant",
    company: "Oregon State University",
    type: "Part-time",
    period: "Jan 2024 - Dec 2025",
    location: "CORVALLIS, OREGON, UNITED STATES",
    mode: "Hybrid",
  },
  {
    title: "Software Engineer",
    company: "TechLuminix Private Limited",
    type: "Internship",
    period: "Jun 2022 - Jul 2023",
    location: "MUMBAI, MAHARASHTRA, INDIA",
    mode: "On-site",
  },
];

function ExperienceSection() {
  return (
    <MotionSection id="experience" className="section-shell px-6 py-8 sm:px-8 sm:py-10">
      <SectionHeader
        eyebrow="Experience"
        title="A concise timeline of the roles listed on my LinkedIn."
        description="Current and past software engineering experience across full-stack development, university engineering support, and internship work."
      />

      <Stagger className="relative mt-8 space-y-5" delayChildren={0.05} staggerChildren={0.08}>
        <div className="absolute bottom-0 left-[0.7rem] top-3 hidden w-px bg-gradient-to-b from-[#5572d8]/0 via-[#5572d8]/35 to-[#cb8465]/0 sm:block" />
        {experiences.map((role, index) => (
          <Motion.article
            key={`${role.company}-${role.title}`}
            variants={fadeUp}
            className="relative grid gap-4 sm:grid-cols-[2rem,1fr]"
          >
            <div className="hidden pt-5 sm:flex sm:justify-center">
              <span
                className={`mt-1.5 h-4 w-4 rounded-full border border-[rgba(255,255,255,0.75)] ${
                  index % 2 === 0 ? "bg-[#5572d8]" : "bg-[#cb8465]"
                }`}
              />
            </div>

            <Motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="glass-card overflow-hidden p-5 sm:p-6"
            >
              <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.34),transparent_35%,rgba(85,114,216,0.08))]" />
              <div className="relative">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                      {role.period}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-stone-900">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#5572d8]">
                      {role.company} - {role.type}
                    </p>
                  </div>
                  <span className="w-max rounded-full border border-[rgba(132,112,94,0.12)] bg-white/76 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                    {role.location}
                  </span>
                </div>

                <p className="mt-5 text-sm font-medium text-stone-600">{role.mode}</p>
              </div>
            </Motion.div>
          </Motion.article>
        ))}
      </Stagger>
    </MotionSection>
  );
}

export default ExperienceSection;
