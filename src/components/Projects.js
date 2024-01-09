import React from "react";
import { projects } from "../data";
import { Link, useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    // Usar navigate para navegar a la página de detalles del proyecto
    navigate(`/proyectos/${projectId}`);
  };

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Aplicaciones que he construido
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Estas son algunas de las aplicaciones que he construido con distintas tecnologías.
          </p>
        </div>
        <div className=" flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <div key={index} className="sm:w-1/2 w-100 p-4">
              {/* Usar una función para manejar el clic y redirigir al proyecto */}
              <div onClick={() => handleProjectClick(project.id)}>
                <img  className="card" src={project.image} alt={project.title} />
                <p className="  font-bold  p-4">{project.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;




