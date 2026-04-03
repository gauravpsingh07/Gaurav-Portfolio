import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden text-stone-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="floating-orb absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#efb8a5]/45 blur-3xl" />
        <div className="floating-orb absolute right-[-7rem] top-28 h-72 w-72 rounded-full bg-[#9bd7d0]/45 blur-3xl" />
        <div className="floating-orb absolute left-1/3 top-[42%] h-64 w-64 rounded-full bg-[#f2d59c]/35 blur-3xl" />
      </div>

      <div className="relative">
        <Navbar />
        <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-24 pt-6 sm:px-6 lg:px-8">
          <About />

          <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
            <Skills />
            <Education />
          </div>

          <Projects />
          <Experience />

          <div className="grid gap-10 lg:grid-cols-[0.82fr,1.18fr]">
            <Certifications />
            <Contact />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
