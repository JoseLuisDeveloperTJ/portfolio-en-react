import React from "react";
import { technologyIcons } from "../TechnologyIcon";

const SkillCarousel = () => {

    const techs = Object.keys(technologyIcons);
    const doubleTechs = [...techs, ...techs];

    return (
    <div className="relative w-full overflow-hidden  py-12  ">
      {/* Gradientes laterales para suavizar la entrada/salida */}
      <div className="absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r"></div>
      <div className="absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l "></div>

      <div className="flex w-max animate-marquee">
        {doubleTechs.map((tech, index) => (
          <div
            key={index}
            className="mx-12 flex items-center space-x-4  transition-all duration-500"
          >
            <img
              src={technologyIcons[tech]}
              alt={tech}
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-medium text-slate-300 uppercase tracking-[0.2em]">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};


export default SkillCarousel;