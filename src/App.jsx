import AboutSection from "./components/site/AboutSection";
import CertificationsSection from "./components/site/CertificationsSection";
import ContactSection from "./components/site/ContactSection";
import EducationSection from "./components/site/EducationSection";
import ExperienceSection from "./components/site/ExperienceSection";
import HeroSection from "./components/site/HeroSection";
import ProjectsShowcase from "./components/site/ProjectsShowcase";
import SiteFooter from "./components/site/SiteFooter";
import SiteNavbar from "./components/site/SiteNavbar";
import SkillsSection from "./components/site/SkillsSection";

function App() {
  return (
    <div className="site-page">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <SiteNavbar />
      <main id="main-content">
        <HeroSection />
        <ProjectsShowcase />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <CertificationsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
