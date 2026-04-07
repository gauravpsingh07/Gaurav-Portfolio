import { AnimatePresence, motion as Motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Credentials" },
  { href: "#contact", label: "Contact" },
];

const profileLinks = [
  {
    href: "https://github.com/gauravpsingh07",
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/gauravpramodsingh/",
    label: "LinkedIn",
  },
];

const resumeUrl = `${import.meta.env.BASE_URL}assets/Resume.pdf`;

function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#about");
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveHref(`#${visible.target.id}`);
        }
      },
      {
        threshold: [0.2, 0.45, 0.7],
        rootMargin: "-22% 0px -52% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const closeOnResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);

    return () => window.removeEventListener("resize", closeOnResize);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <Motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 backdrop-blur-2xl sm:px-5 ${
          scrolled
            ? "border-[rgba(129,103,84,0.16)] bg-[rgba(255,251,245,0.88)] shadow-[0_20px_55px_rgba(96,72,54,0.12)]"
            : "border-[rgba(129,103,84,0.14)] bg-[rgba(255,252,248,0.72)] shadow-[0_12px_36px_rgba(96,72,54,0.08)]"
        }`}
      >
        <a href="#about" className="flex items-center gap-3" onClick={closeMenu}>
          <span className="relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-[rgba(85,114,216,0.16)] bg-[rgba(255,255,255,0.82)] text-sm font-semibold text-stone-900">
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(85,114,216,0.18),transparent_55%)]" />
            <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(85,114,216,0.14),transparent_52%,rgba(203,132,101,0.14))]" />
            <span className="relative">GP</span>
          </span>
          <span className="hidden min-[380px]:block">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.34em] text-[#5572d8]">
              Software Engineer
            </span>
            <span className="text-sm font-semibold text-stone-900 sm:text-base">
              Gaurav Pramod Singh
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-[rgba(129,103,84,0.12)] bg-[rgba(255,255,255,0.62)] p-1 lg:flex">
          {navLinks.map((link) => {
            const active = activeHref === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium ${
                  active ? "text-stone-900" : "text-stone-500 hover:text-stone-900"
                }`}
              >
                {active ? (
                  <Motion.span
                    layoutId="active-nav-pill"
                    className="absolute inset-0 -z-10 rounded-full border border-[rgba(85,114,216,0.14)] bg-white/90"
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  />
                ) : null}
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          {profileLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="button-ghost"
            >
              {link.label}
            </a>
          ))}
          <a href={resumeUrl} target="_blank" rel="noreferrer" className="button-primary">
            Resume
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center rounded-full border border-[rgba(129,103,84,0.14)] bg-white/80 px-4 py-2 text-sm font-semibold text-stone-800 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </Motion.nav>

      <AnimatePresence>
        {open ? (
          <Motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-[rgba(129,103,84,0.14)] bg-[rgba(255,251,245,0.9)] p-4 shadow-[0_24px_60px_rgba(96,72,54,0.14)] backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const active = activeHref === link.href;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`rounded-[1.2rem] px-4 py-3 text-sm font-medium ${
                      active
                        ? "bg-white/90 text-stone-900"
                        : "text-stone-600 hover:bg-white/75 hover:text-stone-900"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            <div className="mt-4 flex flex-wrap gap-2 border-t border-[rgba(129,103,84,0.12)] pt-4">
              {profileLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="button-ghost"
                >
                  {link.label}
                </a>
              ))}
              <a href={resumeUrl} target="_blank" rel="noreferrer" className="button-primary">
                Resume
              </a>
            </div>
          </Motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default SiteNavbar;
