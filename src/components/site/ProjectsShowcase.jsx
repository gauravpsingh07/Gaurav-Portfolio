import { motion as Motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { MotionSection, Reveal, Stagger } from "../ui/Reveal";
import { fadeUp } from "../ui/motionVariants";

const featuredProject = {
  title: "Agent Canary",
  eyebrow: "Featured Build",
  description:
    "A safety testing platform for AI agents that runs repeatable adversarial suites before agents are trusted with real tools or customer-facing work. It validates structured outputs, checks simulated tool calls, applies policy rules, scores safety dimensions, and stores full audit history across a FastAPI, LangGraph, and pgvector-backed system.",
  stack: ["Next.js", "TypeScript", "FastAPI", "Python", "LangGraph", "PostgreSQL", "pgvector", "Pydantic", "Pytest"],
  highlights: [
    "Adversarial suites for prompt injection, unsafe tools, weak retrieval, and policy bypass",
    "Policy engine, approval queue, scoring model, and complete audit history",
    "RAG safety checks with ingestion, chunking, embeddings, and pgvector retrieval",
  ],
  links: [
    {
      label: "Repo",
      href: "https://github.com/gauravpsingh07/agent-canary",
    },
  ],
};

const supportingProjects = [
  {
    title: "AgentOps Firewall",
    description:
      "A policy, audit, and approval layer for AI agents that mediates risky actions before agents can send emails, delete files, call APIs, modify databases, deploy code, or run terminal commands.",
    stack: ["Java 21", "Spring Boot", "Angular", "PostgreSQL", "Kafka", "RabbitMQ", "Docker", "Playwright"],
    accent: "from-[#dbeafe]/42 via-[#e8f1f2]/30 to-transparent",
    preview: {
      eyebrow: "Agent Guardrails",
      stat: "Policy",
      label: "Approval workflows, audit logs, role-aware dashboards, and simulated risky actions",
      bars: [64, 82, 58, 90, 76],
    },
    links: [
      {
        label: "Repo",
        href: "https://github.com/gauravpsingh07/agentops-firewall",
        primary: true,
      },
    ],
  },
  {
    title: "SignalForge",
    description:
      "An incident intelligence platform that groups failures, detects latency and error anomalies, and generates AI-assisted incident summaries across a FastAPI + ClickHouse pipeline.",
    stack: ["SvelteKit", "TypeScript", "FastAPI", "Python", "ClickHouse", "Gemini API", "Redis"],
    accent: "from-[#efe0d8]/30 via-[#d9def9]/28 to-transparent",
    preview: {
      eyebrow: "Incident Intelligence",
      stat: "AI Triage",
      label: "Anomaly detection, async pipelines, and generated incident summaries",
      bars: [50, 82, 66, 90, 74],
    },
    links: [
      {
        label: "Live Demo",
        href: "https://signalforge-orcin.vercel.app",
        primary: true,
      },
      {
        label: "Repo",
        href: "https://github.com/gauravpsingh07/signalforge",
      },
    ],
  },
  {
    title: "FormFlow",
    description:
      "A JWT-secured form builder for creating, publishing, and analyzing dynamic forms across a full-stack React and NestJS architecture, backed by PostgreSQL, Prisma, Redis workflows, and containerized deployment.",
    stack: ["React", "NestJS", "Node.js", "PostgreSQL", "Prisma", "Redis", "Docker", "Kubernetes"],
    accent: "from-[#d7e4ff]/44 via-[#e2def8]/28 to-transparent",
    preview: {
      eyebrow: "Dynamic Forms",
      stat: "JWT",
      label: "Form creation, searchable submissions, analytics, and reliable async delivery",
      bars: [52, 74, 66, 86, 70],
    },
    links: [
      {
        label: "Frontend Repo",
        href: "https://github.com/gauravpsingh07/formflow-frontend",
        primary: true,
      },
      {
        label: "Backend Repo",
        href: "https://github.com/gauravpsingh07/formflow-backend",
      },
    ],
  },
  {
    title: "PulseOps",
    description:
      "A serverless uptime monitoring platform that checks API health, automates incident detection, and publishes status updates with latency history and check results across a Cloudflare-powered stack.",
    stack: ["React", "TypeScript", "Cloudflare Workers", "Cloudflare D1", "Cron Triggers", "GitHub Actions"],
    accent: "from-[#cfe2f8]/38 via-[#d7ecf4]/34 to-transparent",
    preview: {
      eyebrow: "Uptime Platform",
      stat: "24/7",
      label: "Automated health checks, incident states, and public status visibility",
      bars: [54, 76, 68, 88, 72],
    },
    links: [
      {
        label: "Live Demo",
        href: "https://pulseops-a0u.pages.dev",
        primary: true,
      },
      {
        label: "Repo",
        href: "https://github.com/gauravpsingh07/pulseops",
      },
    ],
  },
  {
    title: "CivicPulse",
    description:
      "A civic issue reporting platform with map-based submissions, Supabase-backed auth and storage, realtime updates, and admin workflows for moderation, analytics, and public visibility.",
    stack: ["Next.js", "Supabase", "PostgreSQL", "Leaflet", "Recharts", "Vitest"],
    accent: "from-[#d9eef0]/34 via-[#e5def4]/24 to-transparent",
    preview: {
      eyebrow: "Civic Reporting",
      stat: "Live Map",
      label: "Filtered issue maps, realtime status updates, and role-based workflows",
      bars: [46, 60, 84, 70, 92],
    },
    links: [
      {
        label: "Live Demo",
        href: "https://civic-pulse-sandy.vercel.app",
        primary: true,
      },
      {
        label: "Repo",
        href: "https://github.com/gauravpsingh07/CivicPulse",
      },
    ],
  },
  {
    title: "Stock Market Tracker",
    description:
      "A real-time stock market tracking app that fetches live stock prices using public APIs, supports instant symbol lookup, and presents pricing changes in a clean responsive UI.",
    stack: ["React", "API Integration", "Tailwind CSS", "Vite"],
    accent: "from-[#b9d6dd]/38 via-[#d7e1fb]/36 to-transparent",
    preview: {
      eyebrow: "Realtime Pricing",
      stat: "+4.2%",
      label: "AAPL intraday movement",
      bars: [72, 48, 64, 86, 54],
    },
    links: [
      {
        label: "Live Demo",
        href: "https://stock-market-tracker-teal.vercel.app",
        primary: true,
      },
      {
        label: "Repo",
        href: "https://github.com/gauravpsingh07/StockMarketTracker",
      },
    ],
  },
  {
    title: "Anime & Manga Search App",
    description:
      "A search-focused app for discovering anime and manga with real-time results, filtering, and a lightweight experience designed for quick exploration across titles and scores.",
    stack: ["React", "API Integration", "Tailwind CSS", "Vite"],
    accent: "from-[#d8cdef]/34 via-[#efd7dd]/28 to-transparent",
    preview: {
      eyebrow: "Fast Discovery",
      stat: "12",
      label: "Live search results surfaced instantly",
      bars: [40, 58, 74, 62, 88],
    },
    links: [
      {
        label: "Live Demo",
        href: "https://anime-manga-search.vercel.app/",
        primary: true,
      },
      {
        label: "Repo",
        href: "https://github.com/gauravpsingh07/anime-manga-search",
      },
    ],
  },
  {
    title: "Personal Portfolio Website",
    description:
      "This portfolio itself, rebuilt with a stronger visual system, modern motion, polished section hierarchy, and a recruiter-friendly structure that highlights both product thinking and engineering depth.",
    stack: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
    accent: "from-white/60 via-[#d9e2fb]/36 to-transparent",
    preview: {
      eyebrow: "Design System",
      stat: "Premium UI",
      label: "Glass layers, reveal motion, and premium spacing",
      bars: [60, 76, 64, 70, 90],
    },
    links: [],
  },
];

function PreviewCard({ preview, accent }) {
  return (
    <div className="glass-card overflow-hidden p-4">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
      <div className="relative">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
              {preview.eyebrow}
            </p>
            <p className="mt-3 text-3xl font-semibold text-stone-900">{preview.stat}</p>
          </div>
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-300/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/70" />
          </div>
        </div>

        <p className="text-sm leading-6 text-stone-600">{preview.label}</p>

        <div className="mt-5 flex items-end gap-2 rounded-[1.25rem] border border-[rgba(132,112,94,0.12)] bg-white/75 p-3">
          {preview.bars.map((value, index) => (
            <div key={`${preview.eyebrow}-${index}`} className="flex-1 rounded-full bg-[#f0e8dd] p-1">
              <div
                className="w-full rounded-full bg-gradient-to-t from-[#27485f] via-[#5572d8] to-[#cb8465]"
                style={{ height: `${value}px` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectsShowcase() {
  return (
    <MotionSection id="projects" className="section-shell px-6 py-8 sm:px-8 sm:py-10">
      <SectionHeader
        eyebrow="Projects"
        title="A product-style showcase of the systems and interfaces I build."
        description="These projects show a mix of backend-heavy engineering, cloud systems, monitoring tools, civic workflows, and polished frontend execution across the kinds of products I like to build."
        action={<span className="tag-chip">{supportingProjects.length + 1} Selected Builds</span>}
      />

      <div className="mt-8 grid gap-6">
        <Reveal className="glass-card overflow-hidden p-6 sm:p-8" delay={0.08}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(85,114,216,0.1),transparent_42%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.38),transparent_38%,rgba(203,132,101,0.12))]" />

          <div className="relative grid gap-8 xl:grid-cols-[1fr,0.95fr] xl:items-center">
            <Stagger className="flex flex-col gap-5" delayChildren={0.08} staggerChildren={0.08}>
              <Motion.div variants={fadeUp} className="tag-chip w-max">
                {featuredProject.eyebrow}
              </Motion.div>

              <Motion.div variants={fadeUp}>
                <h3 className="text-3xl font-semibold text-stone-900 sm:text-4xl">
                  {featuredProject.title}
                </h3>
                <p className="mt-4 max-w-3xl text-sm leading-8 text-stone-600 sm:text-[15px]">
                  {featuredProject.description}
                </p>
              </Motion.div>

              <Motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                {featuredProject.stack.map((item) => (
                  <span key={item} className="tag-chip">
                    {item}
                  </span>
                ))}
              </Motion.div>

              <Motion.div variants={fadeUp} className="grid gap-3 sm:grid-cols-3">
                {featuredProject.highlights.map((item) => (
                  <div key={item} className="stat-card">
                    <p className="text-sm leading-6 text-stone-700">{item}</p>
                  </div>
                ))}
              </Motion.div>

              <Motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                {featuredProject.links.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={index === 0 ? "button-primary" : "button-secondary"}
                  >
                    {link.label}
                  </a>
                ))}
              </Motion.div>
            </Stagger>

            <Reveal delay={0.16}>
              <div className="glass-card overflow-hidden p-4 sm:p-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(131,105,201,0.14),transparent_55%)]" />
                <div className="relative">
                  <div className="mb-4 flex items-center justify-between rounded-[1.25rem] border border-[rgba(132,112,94,0.12)] bg-white/76 px-4 py-3">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-300/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/70" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                      Agent Safety Dashboard
                    </span>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-[1.08fr,0.92fr]">
                    <div className="rounded-[1.6rem] border border-[rgba(132,112,94,0.12)] bg-white/78 p-4">
                      <div className="mb-4 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#27485f]">
                            Evaluation
                          </p>
                          <h4 className="mt-2 text-xl font-semibold text-stone-900">
                            Adversarial suites before real tool access
                          </h4>
                        </div>
                        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-300">
                          Live
                        </span>
                      </div>

                      <div className="space-y-3">
                        {[
                          "Validated JSON contracts and simulated tool calls",
                          "Scored safety, retrieval quality, and citation coverage",
                          "Created review requests with audit evidence",
                        ].map((item) => (
                          <div
                            key={item}
                            className="rounded-[1rem] border border-[rgba(132,112,94,0.12)] bg-[#fbf7f1] px-4 py-3 text-sm text-stone-700"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-[1.6rem] border border-[rgba(132,112,94,0.12)] bg-white/78 p-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                          Backend
                        </p>
                        <div className="mt-4 grid gap-3">
                          {["FastAPI API", "LangGraph workflow", "Postgres + pgvector"].map((item) => (
                            <div
                              key={item}
                              className="rounded-[1rem] border border-[rgba(132,112,94,0.12)] bg-[#fbf7f1] px-4 py-3 text-sm text-stone-700"
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-[1.6rem] border border-[rgba(132,112,94,0.12)] bg-white/78 p-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                          Delivery
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {["Next.js", "Pydantic", "Pytest", "Docker Compose"].map((item) => (
                            <span key={item} className="tag-chip">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Reveal>

        <Stagger className="grid gap-6 lg:grid-cols-3" delayChildren={0.06} staggerChildren={0.08}>
          {supportingProjects.map((project) => (
            <Motion.article
              key={project.title}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="glass-card flex h-full flex-col overflow-hidden p-5"
            >
              <PreviewCard preview={project.preview} accent={project.accent} />

              <div className="mt-5 flex flex-1 flex-col">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                  Project
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-stone-900">{project.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-stone-600">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="tag-chip">
                      {item}
                    </span>
                  ))}
                </div>

                {project.links.length ? (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className={link.primary ? "button-primary" : "button-secondary"}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </Motion.article>
          ))}
        </Stagger>
      </div>
    </MotionSection>
  );
}

export default ProjectsShowcase;
