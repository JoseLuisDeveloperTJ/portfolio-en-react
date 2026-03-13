import React from "react";
import { AcademicCapIcon, BadgeCheckIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Formation() {
  return (
    <section id="formation" className=" py-20">
      <div className="container px-5 mx-auto ">
        <div className="text-center mb-12 ">
          <AcademicCapIcon className="w-10 inline-block mb-4 text-fuchsia-500" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">
            Education & Certifications
          </h1>
          <p className="mt-4 text-gray-400">My academic background and professional certifications.</p>
        </div>

        <div className="flex flex-col max-w-5xl mx-auto ">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative flex flex-col md:flex-row items-center justify-between p-6 mb-4  bg-opacity-40 border bg-gray-800 border-gray-800 rounded-xl transition-all duration-300 hover:border-fuchsia-500 hover:shadow-[0_0_15px_rgba(217,70,239,0.1)]"
            >
              {/* Contenido Izquierdo: Logo e Info */}
              <div className="flex items-center w-full">
                {/* Contenedor de la Imagen/Logo */}
                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-[#161b22] border border-gray-700 flex items-center justify-center overflow-hidden group-hover:border-fuchsia-500 transition-colors">
                  <img
                    alt={testimonial.company}
                    src={testimonial.image}
                    className="w-12 h-12 object-contain"
                  />
                </div>

                {/* Textos */}
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-blue-400 group-hover:text-fuchsia-400 transition-colors">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                    {testimonial.company}
                  </p>

                </div>
              </div>

              {/* Botón de Acción Derecho */}
              <div className="mt-4 md:mt-0 md:ml-6">
                <a
                  href={testimonial.link2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-2 bg-transparent border border-gray-700 text-gray-300 rounded-lg text-sm font-medium hover:bg-fuchsia-500 hover:text-white hover:border-fuchsia-500 transition-all duration-300"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}