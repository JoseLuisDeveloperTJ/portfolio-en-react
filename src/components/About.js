import React from "react";
import Projects from "./Projects";



export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hola👋 soy Jose Luis Arteaga,
            <br className="hidden lg:inline-block" /> Me encanta construir aplicaciones web.
          </h1>
          <p className="mb-8 leading-relaxed">
          Soy un desarrollador web especializado en ReactJS y Three.js, con experiencia en WordPress, Elementor, PHP y MySQL. Anteriormente, trabajé como freelance antes de unirme formalmente a una empresa de desarrollo web. Mi enfoque está en soluciones innovadoras con ReactJS y Three.js, y mi versatilidad se refleja en proyectos anteriores con WordPress y Elementor. Comprometido con la excelencia técnica, busco contribuir con mi experiencia en el desarrollo web.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-4">
              Trabaja conmigo
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Mira mis trabajos anteriores
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img src='./profile.png' alt="Perfil" width="300px"/>
        </div>
      </div>
    </section>

  );
}