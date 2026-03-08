import React from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data";
import TechnologyIcon from "../TechnologyIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { faGit } from "@fortawesome/free-brands-svg-icons"; // Importa faGit desde la biblioteca de iconos de marcas
import ProjectGallery from "../components/ProjectGallery";



const N8nLogo = ({ className }) => (
  <svg
    viewBox="0 0 50 50" // Definimos el lienzo del SVG
    className={className}
    fill="currentColor" // Esto permite que tome el color del texto del botón
    style={{ display: 'inline-block', verticalAlign: 'middle' }} // Alineación básica
  >
    <path d="M25 0C11.19 0 0 11.19 0 25s11.19 25 25 25 25-11.19 25-25S38.81 0 25 0zm11.85 36.17c-.16.29-.41.52-.72.64l-9.15 3.33c-.32.12-.67.12-.99 0l-9.15-3.33a1.492 1.492 0 0 1-.72-.64c-.16-.29-.22-.62-.18-.95l1.64-10.1c.04-.26.16-.5.35-.69l7.35-7.35c.2-.2.46-.32.73-.36l10.1-1.64c.33-.05.66.01.95.17.29.16.52.41.64.72l3.33 9.15c.12.32.12.67 0 .99l-3.33 9.15c-.12.32-.34.57-.63.72zm-8.85-8.85a4.167 4.167 0 1 1-5.89-5.89 4.167 4.167 0 0 1 5.89 5.89z" />
  </svg>
);

const ProjectDetailsPage = () => {
  const { projectId } = useParams();

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  const openInNewTab = (url) => {
    if (url !== '#') {
      const newWindow = window.open(url, '_blank', 'noopener, noreferrer');
      if (newWindow) newWindow.opener = null;
    }
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
          <p style={{ fontSize: "1.5rem", marginTop: "20px", whiteSpace: "pre-line"}}>
            Description:
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

            {/* --- GALERÍA DESPUÉS DE DATA STACK --- */}
          {project.gallery && (
            <div className="my-10, mb-5">
              <h2 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>Project Gallery:</h2>
              <ProjectGallery images={project.gallery} />
            </div>
          )}


            Data Stack:
            <br />
            <TechnologyIcon technologies={project.subtitle} />
          </h2>
          
          <div className="space-x-2">

          <button className="netlify" onClick={() => openInNewTab(project.link)}>
            <FontAwesomeIcon icon={faUpload} /> Ver proyecto
          </button>


            <Link>
            <button className="github" onClick={() => openInNewTab(project.git)}>
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
