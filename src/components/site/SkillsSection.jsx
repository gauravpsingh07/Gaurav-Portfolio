import { motion as Motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { MotionSection, Stagger } from "../ui/Reveal";
import { fadeUp } from "../ui/motionVariants";

const credentials = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    period: "Issued Jun 2026 - Expires Jun 2029",
    description:
      "Validated foundational AWS cloud knowledge across core services, security, architecture, pricing, and operational concepts.",
    link: "https://www.credly.com/badges/4b5ff172-ae3a-459d-a818-4b96ccfa4027",
    action: "View Credential",
    tags: ["AWS", "Cloud Foundations", "Cloud Security"],
  },
  {
    title: "Microsoft Power BI Certification",
    issuer: "Supplementary Credential",
    period: "Completed Mar 2023",
    description:
      "Built practical familiarity with reporting workflows, dashboards, visualization, and business intelligence concepts.",
    link: `${import.meta.env.BASE_URL}assets/documents/PowerBiCertificate.pdf`,
    action: "View Certificate",
    tags: ["Reporting", "Dashboards", "Business Intelligence"],
  },
];

const skillGroups = [
  {
    title: "Languages",
    description: "Core languages I use across full-stack, backend, and data-oriented work.",
    skills: ["JavaScript (ES6)", "TypeScript", "Python", "Java"],
    accent: "from-[#d7e4ff]/44 to-transparent",
  },
  {
    title: "Frontend",
    description: "Modern UI tooling for fast iteration, strong state management, and polished interfaces.",
    skills: ["React.js", "Next.js", "Angular", "Tailwind CSS", "Redux Toolkit", "Vite", "Recharts", "SSE"],
    accent: "from-[#dce4f5]/42 to-transparent",
  },
  {
    title: "Backend",
    description: "Service design, authentication, validation, and API delivery across JavaScript and Python stacks.",
    skills: ["Node.js", "Express.js", "Django REST Framework", "FastAPI", "Spring Boot", "Spring Security", "REST APIs", "Auth.js", "RBAC", "JWT"],
    accent: "from-[#e7def7]/44 to-transparent",
  },
  {
    title: "Database",
    description: "Structured persistence, caching, and practical data modeling across product and platform builds.",
    skills: ["PostgreSQL", "pgvector", "MySQL", "MongoDB", "Redis", "Prisma", "ClickHouse", "SQLAlchemy", "Hybrid RAG"],
    accent: "from-[#f1ddd4]/46 to-transparent",
  },
  {
    title: "Cloud & DevOps",
    description: "Deployment, automation, observability, and cloud delivery workflows for production systems.",
    skills: ["AWS", "Docker", "Docker Compose", "Kubernetes", "Nginx", "Gunicorn", "Kafka", "RabbitMQ", "GitHub Actions", "CI/CD", "Eval-gated CI"],
    accent: "from-[#d9eef0]/34 to-transparent",
  },
  {
    title: "Testing & Tools",
    description: "Testing, API workflows, schema validation, and engineering tools I use day to day.",
    skills: ["Jest", "Pytest", "Vitest", "Playwright", "JUnit 5", "Mockito", "Zod", "Pydantic", "JSON Schema", "LangGraph", "Swagger/OpenAPI", "Gemini API", "PII Redaction"],
    accent: "from-[#efe0d8]/30 via-[#d9def9]/28 to-transparent",
  },
];

function SkillsSection() {
  return (
    <MotionSection id="skills" className="section-shell px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
      <SectionHeader
        eyebrow="Skills"
        title="A practical toolkit for building product-grade interfaces and dependable systems."
        description="My stack spans frontend delivery, backend services, data systems, cloud deployment, and the testing workflows that keep production software stable."
        action={<span className="tag-chip">Full-stack + Backend Focus</span>}
      />

      <Stagger className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3" delayChildren={0.06} staggerChildren={0.08}>
        {skillGroups.map((group, index) => (
          <Motion.article
            key={group.title}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 240, damping: 20 }}
            className="glass-card flex h-full flex-col overflow-hidden p-6 sm:p-7"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${group.accent}`} />
            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between gap-3">
                <span className="tag-chip">{`0${index + 1}`}</span>
                <span className="rounded-full border border-[rgba(132,112,94,0.12)] bg-white/74 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                  Capability
                </span>
              </div>

              <h3 className="mt-6 text-[1.9rem] font-semibold leading-tight text-stone-900">
                {group.title}
              </h3>
              <p className="mt-4 max-w-[30ch] text-sm leading-7 text-stone-600">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
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

        <Motion.article
          variants={fadeUp}
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 240, damping: 20 }}
          className="glass-card overflow-hidden p-6 sm:p-7 md:col-span-2 xl:col-span-3"
        >
          <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(85,114,216,0.1),transparent_40%,rgba(255,255,255,0.34))]" />
          <div className="relative flex flex-col gap-6">
            <div>
              <p className="section-label">Credentials</p>
              <h3 className="mt-3 text-2xl font-semibold text-stone-900">
                Certifications that support my cloud, data, and product engineering work.
              </h3>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {credentials.map((credential) => (
                <Motion.div
                  key={credential.title}
                  whileHover={{ y: -4 }}
                  className="stat-card flex h-full flex-col gap-5 p-5 sm:p-6"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                        {credential.period}
                      </p>
                      <h4 className="mt-3 text-2xl font-semibold leading-tight text-stone-900">
                        {credential.title}
                      </h4>
                      <p className="mt-2 text-sm font-medium text-[#5572d8]">
                        {credential.issuer}
                      </p>
                    </div>

                    <a
                      href={credential.link}
                      target="_blank"
                      rel="noreferrer"
                      className="button-primary shrink-0"
                    >
                      {credential.action}
                    </a>
                  </div>

                  <p className="text-sm leading-7 text-stone-600">{credential.description}</p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {credential.tags.map((tag) => (
                      <span key={tag} className="tag-chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>
        </Motion.article>
      </Stagger>
    </MotionSection>
  );
}

export default SkillsSection;
