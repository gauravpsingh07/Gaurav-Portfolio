function _LegacyEducation() {
  return (
    <section id="education">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400 mb-3">
        Education
      </p>
      <h2 className="text-2xl font-semibold mb-6">Academic Background</h2>

      <div className="space-y-4">

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <h3 className="font-semibold text-slate-100">
            Master of Engineering in Computer Science – Oregon State University
          </h3>
          <p className="text-xs text-slate-400 mb-1">
            Expected Graduation: Fall 2025 · Corvallis, OR, USA
          </p>
          <p className="text-sm text-slate-300">
            Coursework includes algorithms, computer architecture, and
            human-computer interaction, along with projects in graphics,
            full-stack development, and data analysis. This program is helping
            me strengthen both my problem-solving and software engineering
            skills.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
          <h3 className="font-semibold text-slate-100">
            Bachelor&apos;s Degree – Thakur College of Science and Commerce
          </h3>
          <p className="text-xs text-slate-400 mb-1">
            Jun 2019 - Apr 2022 · Mumbai, India
          </p>
          <p className="text-sm text-slate-300">
            My bachelor’s coursework included programming (C, Python, Java),
            data structures, algorithms, databases, operating systems, computer
            networks, and software engineering, along with Linux, web
            technologies, and applied mathematics.
          </p>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section
      id="education"
      className="rounded-[2rem] border border-white/70 bg-white/72 p-6 shadow-[var(--shadow)] backdrop-blur-xl"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#a84b32]">
        Education
      </p>
      <h2 className="text-3xl font-semibold">Academic Background</h2>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-stone-600">
        A computer science foundation shaped by graduate-level systems work,
        full-stack projects, and applied problem solving.
      </p>

      <div className="mt-6 space-y-4">
        <article className="rounded-[1.75rem] border border-[#eadbc8] bg-[#fff8f1] p-5">
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">
                Master of Engineering in Computer Science
              </h3>
              <p className="mt-1 text-sm font-medium text-[#a84b32]">
                Oregon State University
              </p>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              Sep 2023 - Dec 2025 | Corvallis, OR
            </p>
          </div>
          <p className="mt-4 text-sm leading-6 text-stone-600">
            Coursework included algorithms, computer architecture, human-computer
            interaction, graphics, full-stack development, and data analysis,
            helping strengthen both product thinking and software engineering
            depth.
          </p>
        </article>

        <article className="rounded-[1.75rem] border border-[#d8e7e3] bg-[#eef8f6] p-5">
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">
                Bachelor&apos;s Degree in Computer Science
              </h3>
              <p className="mt-1 text-sm font-medium text-[#1e7a74]">
                Thakur College of Science and Commerce
              </p>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              Jun 2019 - Apr 2022 | Mumbai, India
            </p>
          </div>
          <p className="mt-4 text-sm leading-6 text-stone-600">
            Covered programming, data structures, algorithms, databases,
            operating systems, computer networks, software engineering, Linux,
            web technologies, and applied mathematics.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Education;
