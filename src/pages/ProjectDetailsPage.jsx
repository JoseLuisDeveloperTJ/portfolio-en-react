import React, { useEffect } from "react"; // 1. Importa useEffect
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

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [projectId]); 

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
      <div className="container mx-auto p-2 mb-10">
        <div className="w-full md:w-3/4 lg:w-[80%] xl:w-[60%] mx-auto p-4">
      {project.video ? (
        <iframe
          src={project.video.replace("watch?v=", "embed/")}
          title={project.title}
          className="w-full aspect-video rounded-lg shadow-lg"
          style={{ 
      width: "100%", 
      height: "450px", // Altura ideal para desktop
      maxHeight: "60vh", // Evita que en pantallas pequeñas sea demasiado alto
      border: "none" 
    }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            style={{ width: "100%", height: "100%" }}
            className="w-full h-auto"
          />
        )}  

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
            <FontAwesomeIcon icon={faUpload} /> View GitHub
          </button>




          </div>
          
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsPage;
