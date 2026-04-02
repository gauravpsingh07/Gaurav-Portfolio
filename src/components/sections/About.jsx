function _LegacyAbout() {
  return (
    <section id="about" className="pt-6">
      <div className="grid md:grid-cols-[2fr,1fr] gap-10 items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400 mb-3">
            About Me
          </p>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Hi, I&apos;m <span className="text-indigo-400">Gaurav Pramod Singh</span>{" "}
            —{" "}
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

function About() {
  return (
    <section id="about" className="pt-6">
      <div className="grid md:grid-cols-[2fr,1fr] gap-10 items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400 mb-3">
            About Me
          </p>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Hi, I&apos;m <span className="text-indigo-400">Gaurav Pramod Singh</span>{" "}
            -{" "}
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
            <span className="text-indigo-400 font-medium">
              Saayam For All
            </span>{" "}
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

export default About;
