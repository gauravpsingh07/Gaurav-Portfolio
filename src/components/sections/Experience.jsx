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

function Experience() {
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

export default Experience;
