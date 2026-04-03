import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Work" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

function LegacyNavbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((o) => !o);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
      <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <a
          href="#about"
          className="text-lg font-semibold tracking-tight"
          onClick={close}
        >
          <span className="text-indigo-400">&lt;/&gt;</span> Gaurav Pramod Singh
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-indigo-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/assets/Resume.pdf"
            target="_blank"
            className="px-3 py-1 rounded-full border border-indigo-500 text-indigo-300 hover:bg-indigo-600 hover:text-white transition"
          >
            Resume
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggle}
            className="p-2 border border-slate-700 rounded-lg text-slate-200"
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950">
          <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-3 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-indigo-400"
                onClick={close}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/assets/Resume.pdf"
              target="_blank"
              className="px-3 py-1 rounded-full border border-indigo-500 text-indigo-300 hover:bg-indigo-600 hover:text-white transition w-max"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((state) => !state);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/70 bg-white/78 px-4 py-3 shadow-[var(--shadow)] backdrop-blur-xl">
        <a href="#about" className="flex items-center gap-3" onClick={close}>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#cd6a4d] text-sm font-bold text-white shadow-[0_14px_28px_rgba(205,106,77,0.28)]">
            &lt;/&gt;
          </span>
          <span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-[#a84b32]">
              Portfolio
            </span>
            <span className="text-sm font-semibold text-stone-900 sm:text-base">
              Gaurav Pramod Singh
            </span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1 rounded-full bg-[#fff7ef] p-1 text-sm text-stone-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 hover:bg-white hover:text-stone-900"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="/assets/Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-[#1e7a74] px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(30,122,116,0.24)] hover:-translate-y-0.5 hover:bg-[#176661]"
          >
            Resume
          </a>
        </div>

        <button
          onClick={toggle}
          className="rounded-full border border-[#e7d7c8] bg-[#fff7ef] px-4 py-2 text-sm font-semibold text-stone-700 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-3 max-w-6xl rounded-[2rem] border border-white/70 bg-white/82 p-4 shadow-[var(--shadow)] backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-2 text-sm text-stone-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 hover:bg-[#fff7ef]"
                onClick={close}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/assets/Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex w-max items-center rounded-full bg-[#1e7a74] px-4 py-2 font-semibold text-white"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
