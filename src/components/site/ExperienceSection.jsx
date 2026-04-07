import { motion as Motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { MotionSection, Stagger } from "../ui/Reveal";
import { fadeUp } from "../ui/motionVariants";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Saayam For All",
    period: "Jan 2026 - Present",
    location: "San Jose, CA",
    summary:
      "Building secure, production-ready backend features and APIs for a volunteer-focused platform, with hands-on work across file handling, validation, cloud storage, and persistence.",
    bullets: [
      "Built and tested 3 authenticated profile image APIs for upload, view, and delete flows using backend-managed Base64 handling, private AWS S3 storage, and secure database path mapping.",
      "Enabled reliable, CORS-compatible profile photo management across 3 environments with safe overwrite and delete behavior and zero public S3 exposure.",
      "Built an organization details API in the volunteer microservice with JWT-based user mapping, validation for 4 required fields, and reliable database persistence for frontend submission.",
    ],
  },
  {
    title: "Information Technology Technician",
    company: "Oregon State University",
    period: "May 2024 - Dec 2025",
    location: "Corvallis, OR",
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
    period: "Apr 2022 - Aug 2023",
    location: "Mumbai, India",
    summary:
      "Delivered scalable backend and platform improvements across API design, database performance, cloud deployment, and automated quality practices in an Agile engineering environment.",
    bullets: [
      "Led migration from a monolithic architecture to 4 independently deployable microservices, improving scalability by 30%.",
      "Designed REST APIs supporting 5,000+ concurrent users with sub-500ms response times.",
      "Optimized 5+ SQL queries and service-layer logic, reducing API response time by 30% and database latency by 80%.",
      "Deployed services to AWS EC2, ensuring 99.9% uptime and seamless scalability across frontend and backend systems.",
      "Implemented Jest unit testing to reach 85% coverage, reducing production bugs by 40% across the application lifecycle.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Wipro",
    period: "Jun 2021 - Dec 2021",
    location: "Mumbai, India",
    summary:
      "Contributed to full-stack web delivery by integrating backend APIs, rebuilding frontend flows in React, and improving release reliability through CI/CD enhancements.",
    bullets: [
      "Integrated a Python/Django REST API backend with a React frontend, enabling real-time data synchronization and improving application performance by 30%.",
      "Reduced page load time from 6s to 3.6s by rebuilding the frontend with React and implementing code-splitting.",
      "Enhanced CI/CD pipelines with GitHub Actions, reducing deployment failures and improving release stability.",
    ],
  },
];

function ExperienceSection() {
  return (
    <MotionSection id="experience" className="section-shell px-6 py-8 sm:px-8 sm:py-10">
      <SectionHeader
        eyebrow="Experience"
        title="A timeline of product, platform, and technical support work that shaped how I build."
        description="My background blends backend implementation, systems troubleshooting, deployment work, and user-facing problem solving, which has made me deliberate about both reliability and clarity."
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
