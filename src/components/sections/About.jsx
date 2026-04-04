function _LegacyAbout() {
  return (
    <section id="about" className="pt-6">
      <div className="grid md:grid-cols-[2fr,1fr] gap-10 items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400 mb-3">
            About Me
          </p>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Hi, I&apos;m{" "}
            <span className="text-indigo-400">Gaurav Pramod Singh</span> —{" "}
            <span className="text-slate-300">
              <span className="text-indigo-400">Software Engineer</span> &{" "}
              <span className="text-indigo-400">Full Stack Developer</span>
            </span>
          </h1>

          <p className="text-slate-300 leading-relaxed mb-4">
            Software Engineer and Computer Science graduate from{" "}
            <span className="text-indigo-400 font-medium">
              Oregon State University (M.Eng)
            </span>{" "}
            with hands-on experience building and deploying{" "}
            <span className="text-indigo-400 font-medium">
              full-stack and backend systems
            </span>
            .
          </p>

          <p className="text-slate-300 leading-relaxed mb-4">
            Skilled in{" "}
            <span className="text-indigo-400 font-medium">
              JavaScript, Python, React, Node.js, Flask, SQL, MongoDB, and AWS
            </span>
            , with experience developing{" "}
            <span className="text-indigo-400 font-medium">RESTful APIs</span>,
            optimizing backend performance, and contributing to{" "}
            <span className="text-indigo-400 font-medium">CI/CD pipelines</span>{" "}
            in Agile environments.
          </p>

          <p className="text-slate-300 leading-relaxed mb-6">
            Previously worked at{" "}
            <span className="text-indigo-400 font-medium">Mepro Tech</span> and{" "}
            <span className="text-indigo-400 font-medium">TechLuminix</span>,
            delivering production-ready features, improving code quality, and
            collaborating across teams. Actively seeking{" "}
            <span className="text-indigo-400 font-medium">
              Software Engineer
            </span>{" "}
            or{" "}
            <span className="text-indigo-400 font-medium">
              Full-Stack Engineer
            </span>{" "}
            roles to build impactful, scalable products.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full border border-slate-600 text-sm font-medium hover:border-indigo-500 hover:text-indigo-300 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-slate-700 p-[3px]">
            <img
              src="/assets/me.jpeg"
              alt="Gaurav Pramod Singh"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function _PreviousStyledAbout() {
  return (
    <section id="about" className="pt-6">
      <div className="grid md:grid-cols-[2fr,1fr] gap-10 items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400 mb-3">
            About Me
          </p>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Hi, I&apos;m{" "}
            <span className="text-indigo-400">Gaurav Pramod Singh</span> -{" "}
            <span className="text-slate-300">
              <span className="text-indigo-400">Software Engineer</span> &{" "}
              <span className="text-indigo-400">Full Stack Developer</span>
            </span>
          </h1>

          <p className="text-slate-300 leading-relaxed mb-4">
            Full-stack Software Engineer with{" "}
            <span className="text-indigo-400 font-medium">
              2+ years of experience
            </span>{" "}
            building and deploying{" "}
            <span className="text-indigo-400 font-medium">
              scalable applications
            </span>{" "}
            using React, TypeScript, Node.js, PostgreSQL, and AWS.
          </p>

          <p className="text-slate-300 leading-relaxed mb-4">
            Most recently, I contributed at{" "}
            <span className="text-indigo-400 font-medium">Saayam For All</span>{" "}
            by building authenticated APIs and secure backend workflows for
            profile image management, cloud storage, validation, and reliable
            database persistence in a production-style environment.
          </p>

          <p className="text-slate-300 leading-relaxed mb-6">
            I have also improved API performance, testing coverage, cloud
            deployments, and release stability at{" "}
            <span className="text-indigo-400 font-medium">Mepro Tech</span> and{" "}
            <span className="text-indigo-400 font-medium">Wipro</span>. I am
            currently pursuing my{" "}
            <span className="text-indigo-400 font-medium">
              Master of Engineering in Computer Science
            </span>{" "}
            at Oregon State University and actively seeking{" "}
            <span className="text-indigo-400 font-medium">
              Software Engineer
            </span>{" "}
            or{" "}
            <span className="text-indigo-400 font-medium">
              Full-Stack Engineer
            </span>{" "}
            roles to build impactful, scalable products.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full border border-slate-600 text-sm font-medium hover:border-indigo-500 hover:text-indigo-300 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-slate-700 p-[3px]">
            <img
              src="/assets/me.jpeg"
              alt="Gaurav Pramod Singh"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="grid gap-6 lg:grid-cols-[1.08fr,0.92fr]">
      <div className="rounded-[2.5rem] border border-white/70 bg-white/76 p-8 shadow-[var(--shadow)] backdrop-blur-xl sm:p-10">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#a84b32]">
          Software Engineer Portfolio
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
          Designing <span className="text-[#cd6a4d]">scalable products</span>{" "}
          with full-stack execution and backend depth.
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-8 text-stone-600">
          I&apos;m{" "}
          <span className="font-semibold text-stone-900">
            Gaurav Pramod Singh
          </span>
          , a full-stack software engineer with 2+ years of experience building
          and deploying scalable applications using React, TypeScript, Node.js,
          PostgreSQL, and AWS.
        </p>

        <p className="mt-4 max-w-3xl text-base leading-8 text-stone-600">
          Most recently, I contributed at{" "}
          <span className="font-semibold text-[#1e7a74]">Saayam For All</span>{" "}
          by shipping authenticated APIs, secure backend workflows, cloud
          storage integrations, and reliable data persistence in a
          production-style environment.
        </p>

        <p className="mt-4 max-w-3xl text-base leading-8 text-stone-600">
          I recently graduated with a Master of Engineering in Computer Science
          from Oregon State University and am looking for software engineering
          opportunities where strong systems thinking and polished product
          delivery both matter.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center rounded-full bg-[#cd6a4d] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(205,106,77,0.24)] hover:-translate-y-0.5 hover:bg-[#b8573c]"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-[#d9c7b7] bg-[#fff7ef] px-5 py-3 text-sm font-semibold text-stone-700 hover:-translate-y-0.5 hover:border-[#1e7a74] hover:text-[#1e7a74]"
          >
            Start a Conversation
          </a>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-[1.5rem] bg-[#fff4ec] p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a84b32]">
              Experience
            </p>
            <p className="mt-2 text-2xl font-semibold text-stone-900">2+ yrs</p>
          </div>
          <div className="rounded-[1.5rem] bg-[#eef8f6] p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#1e7a74]">
              Focus
            </p>
            <p className="mt-2 text-2xl font-semibold text-stone-900">
              APIs + UX
            </p>
          </div>
          <div className="rounded-[1.5rem] bg-[#fff7e8] p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#94611f]">
              Toolkit
            </p>
            <p className="mt-2 text-2xl font-semibold text-stone-900">
              React / AWS
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-gradient-to-br from-[#f6d9c7] via-[#f5ece2] to-[#d7ebe7] p-4 shadow-[var(--shadow)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.45),transparent_55%)]" />
          <img
            src="/assets/me.jpeg"
            alt="Gaurav Pramod Singh"
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[0_24px_50px_rgba(78,54,36,0.18)]"
          />
        </div>

        <div className="rounded-[2rem] bg-[#173743] p-6 text-[#fdf4ea] shadow-[0_24px_60px_rgba(23,55,67,0.24)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#f2c078]">
            Now
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-white">
            Building thoughtful products with a backend-first mindset.
          </h3>
          <p className="mt-3 text-sm leading-7 text-[#d5e8e5]">
            From authenticated image workflows to performance-focused APIs and
            cloud deployments, I enjoy making systems feel reliable, fast, and
            easy for people to use.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
