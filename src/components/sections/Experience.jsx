function _LegacyExperience() {
  return (
    <section id="experience">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400 mb-3">
        Work Experience
      </p>
      <h2 className="text-2xl font-semibold mb-6">Where I've Worked</h2>

      <div className="space-y-6">
        {/* OSU Student Technician */}
        <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
            <h3 className="font-semibold text-slate-100">
              Information Technology Technician – Oregon State University
            </h3>
            <p className="text-xs text-slate-400">
              May 2024 – Dec 2025 · Corvallis, OR (USA)
            </p>
          </div>
          <p className="text-sm text-slate-300 mb-2">
            Providing technical support, troubleshooting, and documentation for
            students, staff, and faculty in a fast-paced academic environment.
          </p>
          <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
            <li>
              Helped diagnose and resolve hardware, software, and connectivity
              issues, improving user experience and reducing downtime.
            </li>
            <li>
              Documented common issues and solutions to create repeatable
              troubleshooting steps and reduce repeated work.
            </li>
            <li>
              Collaborated with senior staff to escalate complex technical
              problems and ensure timely resolution.
            </li>
          </ul>
        </article>

        {/* TechLuminix – Software Developer Intern */}
        <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
            <h3 className="font-semibold text-slate-100">
              Software Developer Intern – TechLuminix Private Limited
            </h3>
            <p className="text-xs text-slate-400">
              Jun 2024 – Sep 2024 · Mumbai, India (Remote)
            </p>
          </div>

          <p className="text-sm text-slate-300 mb-2">
            Participated in a structured Software Developer internship focused
            on strengthening core programming fundamentals, understanding
            real-world application architecture, and supporting internal
            development tasks through collaboration, documentation, and guided
            mentorship.
          </p>

          <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
            <li>
              Gained hands-on experience with core software development
              concepts, including coding fundamentals, logic building, and
              application structure.
            </li>
            <li>
              Contributed to internal development tasks and assisted in
              completing assigned modules under team mentorship.
            </li>
            <li>
              Collaborated with developers to understand backend workflows,
              application architecture, and real-world development practices.
            </li>
            <li>
              Demonstrated strong dedication, consistent learning habits, and
              the ability to adapt quickly to new tools and project
              requirements.
            </li>
            <li>
              Improved team productivity by supporting documentation, testing
              small features, and contributing to collaborative problem-solving
              sessions.
            </li>
          </ul>
        </article>

        {/* Mepro Tech – Software Engineer */}
        <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
            <h3 className="font-semibold text-slate-100">
              Software Engineer – Mepro Tech
            </h3>
            <p className="text-xs text-slate-400">
              Jun 2022 – Aug 2023 · Mumbai, India
            </p>
          </div>

          <p className="text-sm text-slate-300 mb-2">
            Delivered scalable full-stack solutions by developing APIs,
            optimizing data pipelines, automating backend processes, and
            refactoring service layers to improve performance, maintainability,
            and release reliability in an Agile environment.
          </p>

          <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
            <li>
              Developed full-stack features using JavaScript, React, Node.js,
              Python, and MongoDB/SQL, boosting system stability and enhancing
              UI responsiveness.
            </li>
            <li>
              Engineered and fine-tuned REST API endpoints and data pipelines,
              raising backend throughput and cutting query latency by 20%.
            </li>
            <li>
              Automated backend tasks, validation flows, and deployment
              routines, reducing manual effort and production issues by 25%.
            </li>
            <li>
              Refactored service layers and applied modular architecture
              patterns, lowering bug recurrence and accelerating feature
              delivery by 15–18%.
            </li>
            <li>
              Contributed to Agile/Scrum ceremonies—including sprint planning,
              stand-ups, and retrospectives—to support predictable and
              high-quality releases.
            </li>
            <li>
              Partnered with cross-functional teams to clarify technical
              requirements and document system architecture, improving engineer
              onboarding and alignment.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

function _PreviousStyledExperience() {
  return (
    <section id="experience">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400 mb-3">
        Work Experience
      </p>
      <h2 className="text-2xl font-semibold mb-6">Where I&apos;ve Worked</h2>

      <div className="space-y-6">
        <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
            <h3 className="font-semibold text-slate-100">
              Full Stack Developer - Saayam For All
            </h3>
            <p className="text-xs text-slate-400">
              Jan 2026 - Present | San Jose, CA
            </p>
          </div>
          <p className="text-sm text-slate-300 mb-2">
            Building secure, production-ready backend features and APIs for a
            volunteer-focused platform, with hands-on work across file handling,
            validation, cloud storage, and persistence.
          </p>
          <ul className="list-disc pl-5 text-sm text-slate-400 space-y-1">
            <li>
              Built and tested 3 authenticated profile image APIs for upload,
              view, and delete flows using backend-managed Base64 handling,
              private AWS S3 storage, and secure database path mapping.
            </li>
            <li>
              Enabled reliable, CORS-compatible profile photo management across
              3 environments with safe overwrite and delete behavior and zero
              public S3 exposure.
            </li>
            <li>
              Built an organization details API in the volunteer microservice
              with JWT-based user mapping, validation for 4 required fields,
              and reliable database persistence for frontend submission.
            </li>
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
            <h3 className="font-semibold text-slate-100">
              Information Technology Technician - Oregon State University
            </h3>
            <p className="text-xs text-slate-400">
              May 2024 - Dec 2025 | Corvallis, OR, USA
            </p>
          </div>
          <p className="text-sm text-slate-300 mb-2">
            Provided technical support, troubleshooting, and documentation for
            students, staff, and faculty in a fast-paced academic environment.
          </p>
          <ul className="list-disc pl-5 text-sm text-slate-400 space-y-1">
            <li>
              Helped diagnose and resolve hardware, software, and connectivity
              issues, improving user experience and reducing downtime.
            </li>
            <li>
              Documented common issues and solutions to create repeatable
              troubleshooting steps and reduce repeated work.
            </li>
            <li>
              Collaborated with senior staff to escalate complex technical
              problems and ensure timely resolution.
            </li>
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
            <h3 className="font-semibold text-slate-100">
              Software Engineer - Mepro Tech
            </h3>
            <p className="text-xs text-slate-400">
              Apr 2022 - Aug 2023 | Mumbai, MH, India
            </p>
          </div>

          <p className="text-sm text-slate-300 mb-2">
            Delivered scalable backend and platform improvements across API
            design, database performance, cloud deployment, and automated
            quality practices in an Agile engineering environment.
          </p>

          <ul className="list-disc pl-5 text-sm text-slate-400 space-y-1">
            <li>
              Led migration from a monolithic architecture to 4 independently
              deployable microservices, improving scalability by 30%.
            </li>
            <li>
              Designed REST APIs supporting 5,000+ concurrent users with
              sub-500ms response times.
            </li>
            <li>
              Optimized 5+ SQL queries and service-layer logic, reducing API
              response time by 30% and database latency by 80%.
            </li>
            <li>
              Deployed services to AWS EC2, ensuring 99.9% uptime and seamless
              scalability across frontend and backend systems.
            </li>
            <li>
              Implemented Jest unit testing to reach 85% coverage, reducing
              production bugs by 40% across the application lifecycle.
            </li>
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
            <h3 className="font-semibold text-slate-100">
              Web Developer Intern - Wipro
            </h3>
            <p className="text-xs text-slate-400">
              Jun 2021 - Dec 2021 | Mumbai, MH, India
            </p>
          </div>

          <p className="text-sm text-slate-300 mb-2">
            Contributed to full-stack web delivery by integrating backend APIs,
            rebuilding frontend flows in React, and improving release
            reliability through CI/CD enhancements.
          </p>

          <ul className="list-disc pl-5 text-sm text-slate-400 space-y-1">
            <li>
              Integrated a Python/Django REST API backend with a React
              frontend, enabling real-time data synchronization and improving
              application performance by 30%.
            </li>
            <li>
              Reduced page load time from 6s to 3.6s by rebuilding the frontend
              with React and implementing code-splitting.
            </li>
            <li>
              Enhanced CI/CD pipelines with GitHub Actions, reducing deployment
              failures and improving release stability.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Saayam For All",
      period: "Jan 2026 - Present | San Jose, CA",
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
      period: "May 2024 - Dec 2025 | Corvallis, OR, USA",
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
      period: "Apr 2022 - Aug 2023 | Mumbai, MH, India",
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
      period: "Jun 2021 - Dec 2021 | Mumbai, MH, India",
      summary:
        "Contributed to full-stack web delivery by integrating backend APIs, rebuilding frontend flows in React, and improving release reliability through CI/CD enhancements.",
      bullets: [
        "Integrated a Python/Django REST API backend with a React frontend, enabling real-time data synchronization and improving application performance by 30%.",
        "Reduced page load time from 6s to 3.6s by rebuilding the frontend with React and implementing code-splitting.",
        "Enhanced CI/CD pipelines with GitHub Actions, reducing deployment failures and improving release stability.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="rounded-[2rem] border border-white/70 bg-white/72 p-6 shadow-[var(--shadow)] backdrop-blur-xl"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#a84b32]">
        Experience
      </p>
      <h2 className="text-3xl font-semibold">Work That Shaped My Approach</h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-stone-600">
        A blend of backend-heavy product work, cloud deployment, student-facing
        support, and performance-focused full-stack engineering.
      </p>

      <div className="mt-8 space-y-6">
        {experiences.map((role, index) => (
          <article
            key={`${role.company}-${role.title}`}
            className="rounded-[2rem] border border-[#eadbcc] bg-white/82 p-6 shadow-[0_20px_50px_rgba(110,80,61,0.1)]"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <span
                  className={`mt-3 inline-flex h-3.5 w-3.5 rounded-full ${
                    index % 2 === 0 ? "bg-[#cd6a4d]" : "bg-[#1e7a74]"
                  }`}
                />
                <div>
                  <h3 className="text-2xl font-semibold">
                    {role.title} - {role.company}
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-stone-600">
                    {role.summary}
                  </p>
                </div>
              </div>
              <p className="rounded-full bg-[#fff7ef] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                {role.period}
              </p>
            </div>

            <ul className="mt-6 list-disc space-y-2 pl-8 text-sm leading-7 text-stone-600 marker:text-[#cd6a4d]">
              {role.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
