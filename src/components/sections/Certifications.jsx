function _LegacyCertifications() {
  return (
    <section id="certifications">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400 mb-3">
        Certifications
      </p>
      <h2 className="text-2xl font-semibold mb-4">Certifications &amp; Courses</h2>

      <ul className="space-y-3 text-sm text-slate-300">

        {/* Power BI Certificate */}
        <li className="flex justify-between items-center gap-4">
          <a
            href="/assets/documents/PowerBiCertificate.pdf"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 text-indigo-300 hover:text-indigo-400 transition"
          >
            Microsoft Power BI Certification
          </a>

          <span className="text-xs text-slate-500 whitespace-nowrap">
            Completed · Mar 2023
          </span>
        </li>

      </ul>
    </section>
  );
}

function Certifications() {
  return (
    <section
      id="certifications"
      className="rounded-[2rem] border border-white/70 bg-white/72 p-6 shadow-[var(--shadow)] backdrop-blur-xl"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#a84b32]">
        Certifications
      </p>
      <h2 className="text-3xl font-semibold">Courses & Credentials</h2>
      <p className="mt-2 text-sm leading-6 text-stone-600">
        A growing set of practical credentials that support the technical work
        shown throughout the portfolio.
      </p>

      <div className="mt-6 rounded-[1.75rem] border border-[#eadbc8] bg-[#fff8f1] p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold">
              Microsoft Power BI Certification
            </h3>
            <p className="mt-1 text-sm text-stone-600">
              Focused on dashboarding, reporting, and business intelligence
              fundamentals.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:items-end">
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              Completed Mar 2023
            </span>
            <a
              href="/assets/documents/PowerBiCertificate.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-[#cd6a4d] px-4 py-2 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-[#b8573c]"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
