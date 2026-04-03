const skillGroups = [
  {
    title: "Languages",
    tone: "bg-[#fff4ec] border-[#efcfbe]",
    badgeTone: "bg-white/80 text-[#a84b32]",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
  },
  {
    title: "Frontend",
    tone: "bg-[#eef8f6] border-[#cbe5e1]",
    badgeTone: "bg-white/80 text-[#1e7a74]",
    items: ["React.js", "Next.js", "Tailwind CSS", "Redux Toolkit", "Vite"],
  },
  {
    title: "Backend & Data",
    tone: "bg-[#fff8ee] border-[#edd8b8]",
    badgeTone: "bg-white/80 text-[#94611f]",
    items: ["Node.js", "NestJS", "Flask", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Cloud & Delivery",
    tone: "bg-[#f5f0ff] border-[#ddd2f2]",
    badgeTone: "bg-white/85 text-[#7052a3]",
    items: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Git"],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="rounded-[2rem] border border-white/70 bg-white/72 p-6 shadow-[var(--shadow)] backdrop-blur-xl"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#a84b32]">
        Skills
      </p>

      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-semibold">Tools I Build With</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-stone-600">
            A practical stack built around fast frontend delivery, reliable APIs,
            production-minded backend systems, and modern cloud workflows.
          </p>
        </div>
        <div className="rounded-full border border-[#e7d7c8] bg-[#fff7ef] px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-stone-500">
          Full-stack Focus
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className={`rounded-[1.75rem] border p-5 ${group.tone}`}
          >
            <h3 className="text-xl font-semibold">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${group.badgeTone}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
