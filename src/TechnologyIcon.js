import React from "react";

const technologyIcons = {
  mysql: "/icons/mysql.png",
  excel: "/icons/excel.png",
  powerbi: "/icons/powerbi.png",
  aws: "/icons/aws.png",
  python: "/icons/python.png",
  snowflake: "/icons/snowflake.png",
  n8n: "/icons/n8n.png",
  dbt: "/icons/dbt.png",
  airflow: "/icons/airflow.png",
};

const TechnologyIcon = ({ technologies }) => {
  const techArray = technologies.toLowerCase().split(", ");

  return (
    <>
      {techArray.map((tech, index) => (
        <div key={index} className="flex items-center">
          {technologyIcons[tech] ? (
            <>
              <img
                src={technologyIcons[tech]}
                alt={tech}
                className="w-7 h-6"
              />
              <p className="ml-2 uppercase">{tech}</p>
            </>
          ) : (
            <p className="capitalize">{tech}</p>
          )}
        </div>
      ))}
    </>
  );
};

export default TechnologyIcon;