import { motion as Motion } from "framer-motion";
import { MotionSection, Reveal, Stagger } from "../ui/Reveal";
import { fadeUp } from "../ui/motionVariants";

const profileImageUrl = `${import.meta.env.BASE_URL}assets/me.jpeg`;

const highlights = [
  {
    label: "Education",
    value: "M.Eng. in Computer Science",
  },
  {
    label: "Experience",
    value: "Backend, platform, and full-stack delivery",
  },
  {
    label: "Focus",
    value: "Full-stack, backend, and AI-enabled product engineering",
  },
  {
    label: "Core stack",
    value: "TypeScript, Next.js, React, Java, Spring Boot, PostgreSQL, AWS",
  },
];

const metrics = [
  { value: "Backend-first", label: "Scalable REST APIs, validation, and production-ready service design" },
  { value: "Cloud-ready", label: "AWS integrations, deployment workflows, and resilient platform delivery" },
  { value: "M.Eng.", label: "Graduate-level systems and product training" },
];

function HeroSection() {
  return (
    <MotionSection
      id="about"
      className="section-shell card-shimmer overflow-hidden px-6 pb-8 pt-5 sm:px-8 sm:pb-10 sm:pt-6 lg:px-10 lg:pb-12 lg:pt-7"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="beam-drift absolute left-[-12%] top-0 h-48 w-1/2 bg-[radial-gradient(circle,rgba(85,114,216,0.16),transparent_72%)] blur-3xl" />
        <div className="ambient-orb absolute right-[-5rem] top-10 h-56 w-56 rounded-full bg-[#d8cdef]/28 blur-3xl" />
        <div className="ambient-orb-slow absolute bottom-[-6rem] left-[-4rem] h-64 w-64 rounded-full bg-[#b9d6dd]/24 blur-3xl" />
      </div>

      <div className="relative grid gap-8 lg:grid-cols-[1.12fr,0.88fr] lg:items-stretch">
        <Stagger
          className="min-w-0 flex h-full flex-col gap-5"
          delayChildren={0.12}
          staggerChildren={0.1}
        >
          <Motion.div
            variants={fadeUp}
            className="tag-chip max-w-full self-start text-center text-[10px] leading-5 tracking-[0.2em] sm:w-max sm:text-left"
          >
            Open to software engineering opportunities
          </Motion.div>

          <Motion.div variants={fadeUp} className="min-w-0">
            <p className="block text-[15px] font-semibold tracking-[0.16em] leading-none text-[#5572d8] sm:text-[16px]">
              Gaurav Pramod Singh
            </p>
            <h1 className="mt-3 max-w-4xl break-words text-[clamp(2.25rem,9vw,4.75rem)] font-semibold leading-[1.02] text-stone-900">
              Building{" "}
              <span className="bg-gradient-to-r from-[#27485f] via-[#5572d8] to-[#cb8465] bg-clip-text text-transparent">
                full-stack AI products
              </span>{" "}
              with backend depth, clean UX, and production-minded execution.
            </h1>
          </Motion.div>

          <Motion.p variants={fadeUp} className="max-w-3xl text-base leading-8 text-stone-600">
            I am a software engineer and recent Master&apos;s graduate in Computer
            Science from Oregon State University, focused on full-stack and
            backend-heavy product engineering.
          </Motion.p>

          <Motion.p variants={fadeUp} className="max-w-3xl text-sm leading-7 text-stone-500 sm:text-[15px]">
            I build web applications that combine clean user interfaces, secure
            APIs, reliable data workflows, authentication, role-based access
            control, testing, and production-style deployment practices. Recently,
            I have been building projects around AI support systems, AI-agent
            safety, observability, and cloud monitoring.
          </Motion.p>

          <Motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <a href="#projects" className="button-primary">
              Explore Projects
            </a>
            <a href="#contact" className="button-secondary">
              Let&apos;s Connect
            </a>
          </Motion.div>

          <Motion.div variants={fadeUp} className="mt-auto grid min-h-0 flex-1 grid-rows-4 gap-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="stat-card flex h-full flex-col justify-center gap-3 p-4 sm:p-5"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                  {item.label}
                </p>
                <p className="text-sm font-medium leading-6 text-stone-800">
                  {item.value}
                </p>
              </div>
            ))}
          </Motion.div>
        </Stagger>

        <div className="grid min-w-0 h-full gap-4">
          <Reveal className="glass-card overflow-hidden p-4 sm:p-5" delay={0.18}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(85,114,216,0.12),transparent_46%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.3),transparent_34%,rgba(203,132,101,0.12))]" />
            <div className="relative">
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#5572d8]">
                    Engineer Snapshot
                  </p>
                  <h2 className="mt-2 max-w-[14ch] text-[clamp(1.95rem,7vw,2.6rem)] font-semibold leading-tight text-stone-900">
                    Full-stack delivery with strong backend instincts
                  </h2>
                </div>
                <span className="self-start rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  Available
                </span>
              </div>

              <div className="relative overflow-hidden rounded-[1.75rem] border border-[rgba(132,112,94,0.14)] bg-white/72 p-3">
                <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(131,105,201,0.14),transparent_72%)]" />
                <img
                  src={profileImageUrl}
                  alt="Portrait of Gaurav Pramod Singh"
                  className="relative aspect-[4/5] w-full rounded-[1.4rem] object-cover object-center"
                />
              </div>
            </div>
          </Reveal>

          <Reveal className="glass-card flex h-full flex-col p-5 sm:p-6" delay={0.26}>
            <div className="flex flex-1 flex-col">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#27485f]">
                Current Focus
              </p>
              <h3 className="mt-2 break-words text-[clamp(1.95rem,7vw,2.55rem)] font-semibold leading-tight text-stone-900">
                Shipping secure APIs, AI-enabled workflows, and product-ready
                experiences
              </h3>
            </div>

            <p className="mt-4 text-sm leading-7 text-stone-600">
              I am currently looking for new-grad and early-career software
              engineering roles where I can contribute to backend systems,
              full-stack product development, AI-enabled applications, platform
              engineering, and reliable cloud-based software.
            </p>

            <div className="mt-6 grid auto-rows-fr gap-3 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="stat-card flex h-full flex-col gap-3 p-4 sm:p-5">
                  <p className="text-[1.65rem] font-semibold leading-tight text-stone-900">
                    {metric.value}
                  </p>
                  <p className="text-[12px] leading-5 text-stone-500">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </MotionSection>
  );
}

export default HeroSection;
