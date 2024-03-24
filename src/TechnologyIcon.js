import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHtml5,
    faCss3,
    faJs,
    faReact,
    faAngular,
    faBootstrap,
    faSass,
    faFigma,
    faWordpress,
    faElementor,
    faPhp,
    
  } from "@fortawesome/free-brands-svg-icons";
  import { faCode, faDatabase } from "@fortawesome/free-solid-svg-icons"; // Ícono de Tailwind CSS

  
  const technologyIcons = {
    html5: <FontAwesomeIcon icon={faHtml5} className="text-red-500" />,
    css3: <FontAwesomeIcon icon={faCss3} className="text-blue-500" />,
    javascript: <FontAwesomeIcon icon={faJs} className="text-yellow-500" />,
    reactjs: <FontAwesomeIcon icon={faReact} className="text-teal-500" />,
    angular: <FontAwesomeIcon icon={faAngular} className="text-red-500" />,
    bootstrap: <FontAwesomeIcon icon={faBootstrap} className="text-purple-500" />,
    sass: <FontAwesomeIcon icon={faSass} className="text-pink-500" />,
    figma: <FontAwesomeIcon icon={faFigma} className="text-purple-500" />,
    wordpress: <FontAwesomeIcon icon={faWordpress} className="text-blue-500" />,
    elementor: <FontAwesomeIcon icon={faElementor} className="text-rose-300" />, // Cambiado a color rosa claro
    tailwind: <FontAwesomeIcon icon={faCode} className="text-teal-500" />, // Ícono de Tailwind CSS
    php: <FontAwesomeIcon icon={faPhp} className="text-purple-500" />,
    mysql: <FontAwesomeIcon icon={faDatabase} className="text-blue-500" />, // Ícono de MySQL
    // Agrega más iconos según las tecnologías que utilices
  };
  
  const TechnologyIcon = ({ technologies }) => {
    const techArray = technologies.toLowerCase().split(", ");
  
    return (
      <>
        {techArray.map((tech, index) => (
          <div key={index} className="flex items-center">
            {technologyIcons[tech] ? (
              <>
                {technologyIcons[tech]}
                <p className="ml-2 capitalize">{tech}</p>
              </>
            ) : (
              <p key={index} className="capitalize">{tech}</p>
            )}
          </div>
        ))}
      </>
    );
  };
  
  export default TechnologyIcon;