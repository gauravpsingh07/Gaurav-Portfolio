import HeroSection from "./components/site/HeroSection";
import ProjectsShowcase from "./components/site/ProjectsShowcase";
import SkillsSection from "./components/site/SkillsSection";
import ExperienceSection from "./components/site/ExperienceSection";
import EducationSection from "./components/site/EducationSection";
import ContactSection from "./components/site/ContactSection";
import SiteFooter from "./components/site/SiteFooter";
import SiteNavbar from "./components/site/SiteNavbar";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden text-stone-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="soft-halo absolute left-1/2 top-[-16rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.72),rgba(85,114,216,0.1)_44%,transparent_72%)] blur-3xl" />
        <div className="ambient-orb absolute left-[-8rem] top-[-2rem] h-80 w-80 rounded-full bg-[#9ac5d2]/24 blur-3xl" />
        <div className="ambient-orb-slow absolute right-[-10rem] top-12 h-[26rem] w-[26rem] rounded-full bg-[#cec1ec]/24 blur-3xl" />
        <div className="ambient-orb absolute bottom-[-10rem] left-1/4 h-[24rem] w-[24rem] rounded-full bg-[#e0b59e]/22 blur-3xl" />
        <div className="aurora-ribbon absolute left-[-8%] top-[12rem] h-64 w-[72%] rotate-[-10deg] bg-[linear-gradient(90deg,transparent,rgba(85,114,216,0.12),rgba(77,166,188,0.16),transparent)] blur-3xl" />
        <div className="aurora-ribbon absolute right-[-16%] top-[36rem] h-72 w-[60%] rotate-[12deg] bg-[linear-gradient(90deg,transparent,rgba(203,132,101,0.1),rgba(131,105,201,0.12),transparent)] blur-3xl" />
        <div className="beam-drift absolute inset-x-[-10%] top-40 h-64 bg-[radial-gradient(circle,rgba(85,114,216,0.12),transparent_70%)] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.42),transparent_58%)]" />
        <div className="absolute inset-x-0 bottom-[-12rem] h-80 bg-[radial-gradient(circle_at_bottom,rgba(203,132,101,0.12),transparent_60%)] blur-2xl" />
      </div>

      <div className="relative">
        <SiteNavbar />
        <main className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pb-24 pt-5 sm:px-6 sm:pt-6 lg:px-8">
          <HeroSection />
          <ProjectsShowcase />
          <ExperienceSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}

export default App;
