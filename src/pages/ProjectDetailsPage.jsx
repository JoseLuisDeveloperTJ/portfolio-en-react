import React from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data";
import TechnologyIcon from "../TechnologyIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { faGit } from "@fortawesome/free-brands-svg-icons"; // Importa faGit desde la biblioteca de iconos de marcas

const ProjectDetailsPage = () => {
  const { projectId } = useParams();

  // Depura los valores
  console.log("projectId from URL:", projectId);
  console.log(
    "All project IDs:",
    projects.map((project) => project.id)
  );

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  // Aquí, puedes buscar los detalles del proyecto según el projectId y mostrarlos.
  return (
    <>
      <div className="container mx-auto p-2">
        <div className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto p-4">
          <img
            src={project.image}
            alt={project.title}
            style={{ width: "100%", height: "100%" }}
            className="w-full h-auto"
          />

          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginTop: "30px",
              marginBottom: "20px",
            }}
          >
            {project.title}
          </h1>
          <hr />
          <p style={{ fontSize: "1.5rem", marginTop: "20px" }}>
            Descripcion:
            <br />
            {project.description}
          </p>

          <h2
            style={{
              fontSize: "1.5rem",
              marginTop: "30px",
              marginBottom: "20px",
            }}
          >
            Tecnologias Utilizadas en este proyecto:
            <br />
            <TechnologyIcon technologies={project.subtitle} />
          </h2>
          
          <div className="space-x-2">

            <Link to={project.link}>
            <button className="netlify">
              <FontAwesomeIcon icon={faUpload} /> Ver proyecto
            </button>
            </Link>


            <Link>
            <button className="github">
              <FontAwesomeIcon icon={faGit} /> Ver en GitHub
            </button>
            </Link>

          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsPage;
