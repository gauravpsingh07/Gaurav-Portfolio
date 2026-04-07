import { motion as Motion } from "framer-motion";
import { MotionSection, Reveal, Stagger } from "../ui/Reveal";
import { fadeUp } from "../ui/motionVariants";

const profileImageUrl = `${import.meta.env.BASE_URL}assets/me.jpeg`;

const highlights = [
  {
    label: "Education",
    value: "M.Eng. Computer Science",
  },
  {
    label: "Experience",
    value: "2+ years across backend and full-stack delivery",
  },
  {
    label: "Focus",
    value: "Full-stack products with a backend-first mindset",
  },
  {
    label: "Core stack",
    value: "React, TypeScript, Node.js, PostgreSQL, AWS",
  },
];

const metrics = [
  { value: "2+", label: "Years building production software" },
  { value: "4", label: "Core focus areas across frontend, backend, cloud, data" },
  { value: "M.Eng.", label: "Graduate-level systems and product training" },
];

function HeroSection() {
  return (
    <MotionSection
      id="about"
      className="section-shell card-shimmer overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="beam-drift absolute left-[-12%] top-0 h-48 w-1/2 bg-[radial-gradient(circle,rgba(85,114,216,0.16),transparent_72%)] blur-3xl" />
        <div className="ambient-orb absolute right-[-5rem] top-10 h-56 w-56 rounded-full bg-[#d8cdef]/28 blur-3xl" />
        <div className="ambient-orb-slow absolute bottom-[-6rem] left-[-4rem] h-64 w-64 rounded-full bg-[#b9d6dd]/24 blur-3xl" />
      </div>

      <div className="relative grid gap-10 lg:grid-cols-[1.12fr,0.88fr] lg:items-center">
        <Stagger
          className="min-w-0 flex flex-col gap-6"
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
            <p className="section-label">Gaurav Pramod Singh</p>
            <h1 className="mt-4 max-w-4xl break-words text-[clamp(2.25rem,9vw,4.75rem)] font-semibold leading-[1.02] text-stone-900">
              Building{" "}
              <span className="bg-gradient-to-r from-[#27485f] via-[#5572d8] to-[#cb8465] bg-clip-text text-transparent">
                polished software products
              </span>{" "}
              with backend depth, clean UX, and production-minded execution.
            </h1>
          </Motion.div>

          <Motion.p variants={fadeUp} className="max-w-3xl text-base leading-8 text-stone-600">
            I am a full-stack software engineer focused on turning complex product
            requirements into reliable APIs, thoughtful interfaces, and scalable
            systems. My work spans modern React frontends, backend architecture,
            cloud deployment, and performance-focused engineering.
          </Motion.p>

          <Motion.p variants={fadeUp} className="max-w-3xl text-sm leading-7 text-stone-500 sm:text-[15px]">
            Most recently, I worked on secure backend workflows, authenticated API
            delivery, cloud storage integrations, and resilient persistence layers.
            I recently completed my Master of Engineering in Computer Science at
            Oregon State University and am looking for roles where product quality
            and engineering rigor both matter.
          </Motion.p>

          <Motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <a href="#projects" className="button-primary">
              Explore Projects
            </a>
            <a href="#contact" className="button-secondary">
              Let&apos;s Connect
            </a>
          </Motion.div>

          <Motion.div variants={fadeUp} className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.label} className="stat-card">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                  {item.label}
                </p>
                <p className="mt-3 text-sm font-medium leading-6 text-stone-800">
                  {item.value}
                </p>
              </div>
            ))}
          </Motion.div>
        </Stagger>

        <div className="grid min-w-0 gap-4">
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

          <Reveal className="glass-card p-5 sm:p-6" delay={0.26}>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#27485f]">
                Current Focus
              </p>
              <h3 className="mt-2 break-words text-[clamp(1.95rem,7vw,2.55rem)] font-semibold leading-tight text-stone-900">
                Shipping APIs, cloud-backed flows, and product-ready experiences
              </h3>
            </div>

            <p className="mt-4 text-sm leading-7 text-stone-600">
              I like systems that feel dependable to both users and teammates:
              clear interfaces, stable backend contracts, strong validation, and
              thoughtful product polish from end to end.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="stat-card">
                  <p className="text-2xl font-semibold text-stone-900">{metric.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-stone-500">
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
