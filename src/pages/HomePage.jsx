import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Formation from "../components/Formation";
import Contact from "../components/Contact";
import Carruse3D from "../components/Carruse3D";

function HomePage() {
  return (
    <div className="overflow-x-hidden	">
      <About />
      <Projects />
      <Skills />
      <Formation />
      <Contact />
    </div>
  );
}

export default HomePage;