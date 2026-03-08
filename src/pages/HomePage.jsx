import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Formation from "../components/Formation";
import Contact from "../components/Contact";
import Experience from "../components/ExperienceTimeline"

function HomePage() {
  return (
    <div className="overflow-x-hidden	">
      <About />
      <Projects />
      <Experience / >
      <Skills />
      <Formation />
      <Contact />
    </div>
  );
}

export default HomePage;