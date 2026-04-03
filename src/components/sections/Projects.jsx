function _LegacyProjects() {
  const projects = [
    {
      title: "Stock Market Tracker",
      description:
        "A real-time stock market tracking app that fetches live stock prices using public APIs. Includes clean UI, instant search, price updates, and responsive design. Built with React and deployed on Vercel.",
      tech: ["React", "API Integration", "Tailwind CSS", "Vite"],
      liveUrl: "https://stock-market-tracker-wheat.vercel.app/",
    },
    {
      title: "Anime & Manga Search App",
      description:
        "A React-based web application that lets users search for anime and manga using a public API. Includes real-time search, score filtering, and a clean, responsive UI. Deployed on Vercel.",
      tech: ["React", "API Integration", "Tailwind CSS", "Vite"],
      liveUrl: "https://anime-manga-search.vercel.app/",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "This portfolio itself, built as a single-page React application with Tailwind CSS, EmailJS contact integration, and Vite for fast development and deployment.",
      tech: ["React", "Vite", "Tailwind CSS", "EmailJS"],
      // liveUrl: "https://gaurav-portfolio.vercel.app/",
    },
  ];

  return (
    <section id="projects">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400 mb-3">
        Projects
      </p>
      <h2 className="text-2xl font-semibold mb-2">Featured Projects</h2>
      <p className="text-slate-400 text-sm mb-6">
        Here are a few full-stack projects that showcase what I’ve been working
        on recently. I’m actively building more applications using modern web
        technologies and will continue adding new projects here.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-semibold text-slate-200 mb-2">
                {project.title}
              </h3>
              <p className="text-xs text-slate-400 mb-3">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-2 mb-3">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2 py-1 rounded-full bg-slate-800 text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.liveUrl && (
              <div className="mt-auto">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-indigo-400 underline hover:text-indigo-300"
                >
                  Live Demo
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function _PreviousStyledProjects() {
  const projects = [
    {
      title: "FormFlow",
      description:
        "A full-stack form builder with JWT authentication, role-based access control, dynamic form creation, PostgreSQL + Prisma persistence, Redis caching, and rate limiting. Built with React and NestJS, then containerized for local Kubernetes deployment and API testing workflows.",
      tech: [
        "React",
        "NestJS",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "Docker",
        "Kubernetes",
      ],
      links: [
        {
          label: "Frontend Repo",
          href: "https://github.com/gauravpsingh07/formflow-frontend",
        },
        {
          label: "Backend Repo",
          href: "https://github.com/gauravpsingh07/formflow-backend",
        },
      ],
    },
    {
      title: "Stock Market Tracker",
      description:
        "A real-time stock market tracking app that fetches live stock prices using public APIs. Includes clean UI, instant search, price updates, and responsive design. Built with React and deployed on Vercel.",
      tech: ["React", "API Integration", "Tailwind CSS", "Vite"],
      links: [
        {
          label: "Live Demo",
          href: "https://stock-market-tracker-wheat.vercel.app/",
        },
      ],
    },
    {
      title: "Anime & Manga Search App",
      description:
        "A React-based web application that lets users search for anime and manga using a public API. Includes real-time search, score filtering, and a clean, responsive UI. Deployed on Vercel.",
      tech: ["React", "API Integration", "Tailwind CSS", "Vite"],
      links: [
        {
          label: "Live Demo",
          href: "https://anime-manga-search.vercel.app/",
        },
      ],
    },
    {
      title: "Personal Portfolio Website",
      description:
        "This portfolio itself, built as a single-page React application with Tailwind CSS, EmailJS contact integration, and Vite for fast development and deployment.",
      tech: ["React", "Vite", "Tailwind CSS", "EmailJS"],
      links: [],
    },
  ];

  return (
    <section id="projects">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400 mb-3">
        Projects
      </p>
      <h2 className="text-2xl font-semibold mb-2">Featured Projects</h2>
      <p className="text-slate-400 text-sm mb-6">
        Here are a few projects that showcase what I&apos;ve been building
        recently. I&apos;m actively adding more full-stack applications focused on
        clean UX, scalable APIs, and solid engineering practices.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-semibold text-slate-200 mb-2">
                {project.title}
              </h3>
              <p className="text-xs text-slate-400 mb-3">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-2 mb-3">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2 py-1 rounded-full bg-slate-800 text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.links.length > 0 && (
              <div className="mt-auto flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-indigo-400 underline hover:text-indigo-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "FormFlow",
      featured: true,
      description:
        "A full-stack form builder with JWT authentication, role-based access control, dynamic form creation, PostgreSQL + Prisma persistence, Redis caching, and rate limiting. Built with React and NestJS, then containerized for local Kubernetes deployment and API testing workflows.",
      tech: [
        "React",
        "NestJS",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "Docker",
        "Kubernetes",
      ],
      links: [
        {
          label: "Frontend Repo",
          href: "https://github.com/gauravpsingh07/formflow-frontend",
        },
        {
          label: "Backend Repo",
          href: "https://github.com/gauravpsingh07/formflow-backend",
        },
      ],
    },
    {
      title: "Stock Market Tracker",
      description:
        "A real-time stock market tracking app that fetches live stock prices using public APIs. Includes clean UI, instant search, price updates, and responsive design. Built with React and deployed on Vercel.",
      tech: ["React", "API Integration", "Tailwind CSS", "Vite"],
      links: [
        {
          label: "Live Demo",
          href: "https://stock-market-tracker-wheat.vercel.app/",
        },
      ],
    },
    {
      title: "Anime & Manga Search App",
      description:
        "A React-based web application that lets users search for anime and manga using a public API. Includes real-time search, score filtering, and a clean, responsive UI. Deployed on Vercel.",
      tech: ["React", "API Integration", "Tailwind CSS", "Vite"],
      links: [
        {
          label: "Live Demo",
          href: "https://anime-manga-search.vercel.app/",
        },
      ],
    },
    {
      title: "Personal Portfolio Website",
      description:
        "This portfolio itself, built as a single-page React application with Tailwind CSS, EmailJS contact integration, and Vite for fast development and deployment.",
      tech: ["React", "Vite", "Tailwind CSS", "EmailJS"],
      links: [],
    },
  ];

  return (
    <section
      id="projects"
      className="rounded-[2rem] border border-white/70 bg-white/72 p-6 shadow-[var(--shadow)] backdrop-blur-xl"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#a84b32]">
        Projects
      </p>
      <h2 className="text-3xl font-semibold">Featured Work</h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-stone-600">
        A mix of product-focused builds, backend-heavy systems, and polished
        frontend work that shows how I approach both engineering and user
        experience.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((project) => {
          const cardClass = project.featured
            ? "border-[#173743] bg-[#173743] text-[#fdf4ea]"
            : "border-[#eadbcc] bg-white/82 text-stone-900";
          const descriptionClass = project.featured
            ? "text-[#d7e7e4]"
            : "text-stone-600";
          const tagClass = project.featured
            ? "border border-white/10 bg-white/10 text-[#fdf4ea]"
            : "bg-[#fff7ef] text-stone-700";
          const linkClass = project.featured
            ? "bg-[#f2c078] text-[#173743] hover:bg-[#f0b75e]"
            : "bg-[#cd6a4d] text-white hover:bg-[#b8573c]";

          return (
            <article
              key={project.title}
              className={`rounded-[2rem] border p-6 shadow-[0_20px_50px_rgba(110,80,61,0.12)] ${cardClass}`}
            >
              <div>
                <p
                  className={`text-[10px] font-semibold uppercase tracking-[0.28em] ${
                    project.featured ? "text-[#f2c078]" : "text-[#a84b32]"
                  }`}
                >
                  {project.featured ? "Highlighted Build" : "Project"}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">{project.title}</h3>
              </div>

              <p className={`mt-4 text-sm leading-7 ${descriptionClass}`}>
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${tagClass}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.links.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold ${linkClass}`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
