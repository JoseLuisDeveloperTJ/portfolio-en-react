import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Detectar el scroll para cambiar el estado
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-[100] w-full transition-all duration-500 ease-in-out ${
        scrolled 
          ? "bg-white/70 backdrop-blur-md shadow-lg py-2" // Efecto cristal blanco al bajar
          : "bg-gray-800 py-5" // Estado inicial que te gusta
      }`}
    >
      <div className="container mx-auto flex flex-wrap px-5 flex-col md:flex-row items-center">
        <Link to={'/'} className="title-font font-medium mb-4 md:mb-0">
          <span className={`ml-3 text-xl font-extrabold transition-colors duration-500 ${
            scrolled ? "text-gray-900" : "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          }`}>
            [Jose Luis Arteaga]
          </span>
        </Link>
        
        <nav className={`md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l flex flex-wrap items-center text-base justify-center transition-colors duration-500 ${
          scrolled ? "text-gray-800 border-gray-300" : "text-gray-400 border-gray-700"
        }`}>
          <a href="#projects" className="mr-5 hover:text-fuchsia-600">Projects</a>
          <a href="#skills" className="mr-5 hover:text-fuchsia-600">Skills</a>
          <a href="#formation" className="mr-5 hover:text-fuchsia-600">Education</a>
        </nav>

        <a
          href="./Analytics_engineer_JoseLuisArteagaCV.pdf" download
          className={`inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 transition-all duration-500 ${
            scrolled 
              ? "bg-fuchsia-600 text-white hover:bg-gray-900" 
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          ¡Donwload CV!
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}