import React from 'react';

import { 
  BriefcaseIcon, 
  DatabaseIcon, 
  ChartBarIcon, 
  AcademicCapIcon 
} from '@heroicons/react/outline';

const ExperienceTimeline = () => {
  const experiences = [
    {
      title: "Customer Operations Analyst (E-commerce Support)",
      company: "XB Fulfillment",
      date: "may. 2025 - feb. 2026",
      location: "Murua Oriente, 22465 Tijuana, B.C. · Remote",
      description: `
      - KPI & Scorecard Management: Responsible for tracking and reporting daily critical performance metrics (SLAs) to determine productivity and quality bonuses.
     
    - Productivity & QA Analysis: Monitored compliance with operational goals, including a 45-ticket daily standard and a minimum 88% Quality Assurance (QA) threshold.

    - Incentive Calculation: Executed the calculation model for performance bonuses (approx. $1,750 MXN), applying deductions based on quality and productivity metric variances.

    - Customer Satisfaction Reporting: Analyzed end-user ratings and CSAT (Customer Satisfaction Score) metrics to identify service improvement areas.

    - Hybrid Operational Support: Performed high-level customer support tasks (tickets/emails) during peak periods, ensuring consistent alignment with Service Level Agreements (SLAs).

    - Shopify Administration: Managed databases for refund and return processing, ensuring the integrity of financial and inventory data.
      `,
      icon: <BriefcaseIcon className="w-5 h-5" />,
    },
        {
      title: "Data Entry & Process Improvement Analyst | CCSI (Backoffice Financial)",
      company: "Call Center Services International(CCSI)",
      date: "abr. 2024 - feb. 2025",
      location: "Parque Internacional Industrial Tijuana, 22424",
      description: `
- Financial Data Management: Managed high-volume data entry for auto-loan refinancing contracts, ensuring 100% accuracy and consistency across legal financial records.

- Excel Workflow Automation: Redesigned the team’s core Excel templates by implementing VBA Macros to automate data cleaning and daily date synchronization, significantly reducing manual processing time.

- Error Mitigation & Validation: Developed a "Smart Reset" feature using Visual Basic to clear previous customer data with a single click, preventing cross-contamination of sensitive financial information.

- Proactive Data Quality Control: Implemented advanced Conditional Formatting and automated "Pending Information" alerts to highlight missing fields, minimizing human error during contract preparation.

- Automated Financial Calculations: Streamlined the calculation of Monthly Payments and New APRs by replacing manual entry with dynamic formulas, increasing the precision of customer offers.

- Process Standardization: Created a standardized reporting template adopted by the entire department, resulting in faster contract turnaround times and improved data integrity.
`,
      icon: <BriefcaseIcon className="w-5 h-5" />,
    },
        {
      title: "Junior Technical Support (Web Foundations)",
      company: "Inmersys",
      date: "may. 2025 - feb. 2026",
      location: "Narvarte Poniente, Benito Juárez, 03020 Ciudad de México, CDMX · En remoto",
      description: `
      System Performance: Developed ReactJS and JavaScript components to enhance the efficiency of internal digital tools.
      `,
      icon: <BriefcaseIcon className="w-5 h-5" />,
    },

  ];

  return (
    <section id="projects" className="py-12  mx-auto max-w-screen-2xl">

                <div className="text-center mb-20">
          <BriefcaseIcon className="w-10 inline-block mb-4 text-fuchsia-500" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Experience
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
           I transform manual data processes into autonomous cloud ecosystems. My focus has evolved from traditional analysis to Analytics Engineering, specialized in architecting event-driven pipelines with n8n, Python, and Snowflake. I replace reactive reporting with real-time, scalable solutions that drive proactive business decisions
          </p>
        </div>


{/* Contenedor principal: Vertical en móvil, Horizontal en desktop */}
<div className="relative flex flex-col lg:flex-row lg:justify-between items-start">


  
  {/* LÍNEA DE CONEXIÓN DESKTOP: Ahora usamos una posición fija que coincida con el icono */}
  <div className="hidden lg:block absolute top-[28px] left-0 w-full h-0.5 bg-fuchsia-400 z-0"></div>

  {experiences.map((exp, index) => (
    <div key={index} className="relative w-full px-8 z-10 group px-2">
      
      {/* CONTENEDOR DEL ICONO (Anclaje para la línea) */}
      <div className="hidden lg:flex relative h-14 items-center justify-center mb-4">
        <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-fuchsia-500 flex items-center justify-center text-fuchsia-500 group-hover:bg-fuchsia-500 group-hover:text-slate-900 transition-colors duration-300 z-20">
          {exp.icon}
        </div>
      </div>

      {/* CARD DE EXPERIENCIA */}
      <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-fuchsia-500 transition-all duration-300 ml-8 lg:ml-0 relative z-10 mb-2">
        
        {/* INDICADOR MÓVIL (Línea vertical - Se mantiene igual ya que funciona bien) */}
        <div className="lg:hidden absolute -left-10 top-0 bottom-0 w-0.5 bg-fuchsia-500 ">
          <div className="absolute top-6 -left-[15px] w-8 h-8 rounded-full bg-slate-900 border-2 border-fuchsia-500 flex items-center justify-center text-fuchsia-500">
            {exp.icon}
          </div>
        </div>

        <span className="text-fuchsia-400 text-sm font-mono font-medium">{exp.date}</span>
        <h3 className="text-xl font-bold text-white mt-2 leading-tight">{exp.title}</h3>
        <p className="text-fuchsia-500 text-sm font-medium mb-4">{exp.company}</p>
        
        <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
          {exp.description}
        </p>

        <div className="mt-4 flex items-center text-slate-500 text-xs italic">
        <span>{exp.location}</span>
        </div>
      </div>
    </div>
  ))}
</div>
    </section>
  );
};

export default ExperienceTimeline;