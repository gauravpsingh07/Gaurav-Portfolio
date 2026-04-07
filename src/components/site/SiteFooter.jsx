import { motion as Motion } from "framer-motion";

function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 pb-10 pt-4 sm:px-6 lg:px-8">
      <Motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex max-w-7xl flex-col gap-3 rounded-[1.75rem] border border-[rgba(132,112,94,0.14)] bg-white/72 px-6 py-5 text-sm text-stone-600 shadow-[0_18px_44px_rgba(96,72,54,0.1)] backdrop-blur-xl md:flex-row md:items-center md:justify-between"
      >
        <p>Copyright {year} Gaurav Pramod Singh. All rights reserved.</p>
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-stone-500">
          Built with React, Tailwind CSS, Framer Motion, and iterative product polish.
        </p>
      </Motion.div>
    </footer>
  );
}

export default SiteFooter;
