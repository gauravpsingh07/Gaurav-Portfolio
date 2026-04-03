function _LegacyFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 py-4 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-2">
        <p>© {year} Gaurav Pramod Singh. All rights reserved.</p>
        <p>
          Built with <span className="text-indigo-400">React</span> &{" "}
          <span className="text-indigo-400">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 pb-10 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 rounded-[2rem] border border-white/70 bg-white/68 px-6 py-5 text-sm text-stone-600 shadow-[var(--shadow)] backdrop-blur-xl md:flex-row md:items-center md:justify-between">
        <p>Copyright {year} Gaurav Pramod Singh. All rights reserved.</p>
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-stone-500">
          Built with React, Tailwind CSS, and a lot of iteration.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
