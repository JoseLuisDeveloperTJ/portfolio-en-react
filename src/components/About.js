import React from "react";
import Projects from "./Projects";



export default function About() {
  return (
    <section id="about" className="relative overflow-hidden "> 
      {/* 1. El fondo de partículas */}
     
      
      {/* 2. El contenido con z-index para estar arriba */}
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center relative z-10">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi👋 I am Luis Analytics Engineer | BI & Automation Specialist | Lean Six Sigma Yellow Belt (LSSYB)
          </h1>
          <p className="mb-8 leading-relaxed text-gray-300">
            Analytics Engineer specialized in building autonomous cloud ecosystems. I transform manual, complex workflows into scalable, event-driven pipelines using n8n, Python, and Snowflake. With a foundation in Systems Engineering and Lean Six Sigma, I focus on architecting end-to-end data systems that eliminate reporting delays and deliver real-time, strategic intelligence for operational excellence.
          </p>
          <div className="flex justify-center">
            {/* Tus botones aquí */}
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative z-10">
          <img src='./profile.png' alt="Perfil" width="300px" className="rounded-full shadow-2xl"/>
        </div>
      </div>
    </section>
  );
}