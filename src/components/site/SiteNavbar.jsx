import {
  AnimatePresence,
  motion as Motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "../../data/portfolio";

const navLinks = [
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
];

const externalLinks = [
  { href: profile.github, label: "GitHub" },
  { href: profile.linkedin, label: "LinkedIn" },
];

function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("");
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.25,
  });

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (current?.target?.id) {
          setActiveHref(`#${current.target.id}`);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.35] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <Motion.div
        className="scroll-progress"
        style={{ scaleX: reduceMotion ? scrollYProgress : smoothProgress }}
        aria-hidden="true"
      />
      <nav className="site-container nav-shell" aria-label="Primary navigation">
        <a href="#top" className="brand-link" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            GS
          </span>
          <span>
            <span className="brand-name">{profile.shortName}</span>
            <span className="brand-role">{profile.role}</span>
          </span>
        </a>

        <div className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              aria-current={activeHref === link.href ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="desktop-actions">
          {externalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="nav-external"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <Motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="mobile-nav"
          >
            <div className="site-container mobile-nav-inner">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
              <div className="mobile-nav-external">
                {externalLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </Motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default SiteNavbar;
