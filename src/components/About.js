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
            Hi👋 I am BI Developer | Data Automation | Six Sigma Yellow Belt (SSYB) 
          </h1>
          <p className="mb-8 leading-relaxed text-gray-300">
            Business Intelligence Developer focused on turning operational data into automated analytics systems. I build end-to-end workflows that eliminate manual reporting and deliver near real-time insights using Power BI, SQL, Python, and workflow automation tools like n8n. My work centers on operational analytics, SLA monitoring, and scalable data pipelines that support faster decision-making and more efficient business operations.
          </p>
          <div className="flex justify-center">
            {/* Tus botones aquí */}
          </div>
        </div>
<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative z-10 flex justify-center items-center">         
 <img src='./profile.png' alt="Perfil" width="300px" className="rounded-full shadow-2xl"/>
        </div>
      </div>
    </section>
  );
}