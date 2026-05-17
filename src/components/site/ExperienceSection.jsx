import { motion as Motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { MotionSection, Stagger } from "../ui/Reveal";
import { fadeUp } from "../ui/motionVariants";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Saayam For All",
    period: "Jan 2026 - Present",
    location: "SAN JOSE, CA, USA",
    summary:
      "Building secure backend workflows and onboarding APIs for a volunteer-focused platform, with hands-on work across Java REST services, validation, AWS S3 storage, and cloud-backed user flows.",
    bullets: [
      "Secured profile photos with Java REST APIs, AWS S3, and database path mapping, eliminating public S3 exposure.",
      "Fixed profile image access issues by implementing CORS-safe Java REST upload and retrieval flows backed by AWS S3 storage.",
      "Reduced onboarding errors with a JWT-mapped Java organization API, validation, and reliable database persistence.",
      "Improved onboarding visibility by exposing wizard status APIs through AWS API Gateway and Java REST services.",
    ],
  },
  {
    title: "Information Technology Technician",
    company: "Oregon State University",
    period: "May 2024 - Dec 2025",
    location: "CORVALLIS, OR, USA",
    summary:
      "Provided technical support, troubleshooting, and documentation for students, staff, and faculty in a fast-paced academic environment.",
    bullets: [
      "Helped diagnose and resolve hardware, software, and connectivity issues, improving user experience and reducing downtime.",
      "Documented common issues and solutions to create repeatable troubleshooting steps and reduce repeated work.",
      "Collaborated with senior staff to escalate complex technical problems and ensure timely resolution.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Mepro Tech",
    period: "Apr 2022 - May 2023",
    location: "MUMBAI, MH, INDIA",
    summary:
      "Delivered backend and platform improvements across Django REST APIs, caching, database performance, and AWS-hosted microservices in a production engineering environment.",
    bullets: [
      "Improved scalability by 30% by helping split a Django monolith into 4 Python microservices on AWS EC2.",
      "Supported 5,000+ users with sub-500ms DRF APIs using Redis caching, Gunicorn, and Nginx.",
      "Cut database latency by 80% by optimizing 15+ MySQL queries with indexing and connection pooling.",
      "Maintained 99.9% uptime with AWS EC2, RDS, Load Balancer, CloudWatch, Nginx, and Gunicorn.",
    ],
  },
];

function ExperienceSection() {
  return (
    <MotionSection id="experience" className="section-shell px-6 py-8 sm:px-8 sm:py-10">
      <SectionHeader
        eyebrow="Experience"
        title="A timeline of backend, platform, and technical support work that shaped how I build."
        description="From production APIs and cloud delivery to frontline troubleshooting and support, each role has made me more deliberate about reliability, maintainability, and clarity."
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
                      {role.company}
                    </p>
                  </div>
                  <span className="w-max rounded-full border border-[rgba(132,112,94,0.12)] bg-white/76 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                    {role.location}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-7 text-stone-600">{role.summary}</p>

                <ul className="mt-5 space-y-3 text-sm leading-7 text-stone-600">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="grid grid-cols-[0.8rem,1fr] gap-3">
                      <span className="mt-2.5 h-2 w-2 rounded-full bg-[#5572d8]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Motion.div>
          </Motion.article>
        ))}
      </Stagger>
    </MotionSection>
  );
}

export default ExperienceSection;
