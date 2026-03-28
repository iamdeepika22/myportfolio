import React from "react";

const projectList = [
  {
    id: 1,
    title: "Smart Farm",
    image: "/myportfolio/assets/projects/AgriNet.png",
    description:
      "A website that provides information about farming, including climate conditions, NPK analysis, disease prediction, and fertilizer recommendations",
  },
  {
    id: 2,
    title: "Key Press",
    image: "/myportfolio/assets/projects/keypress.png",
    description:
      "Analyze YouTube product reviews to help users make better purchase decisions.",
  },
  {
    id: 3,
    title: "Dash",
    image: "/myportfolio/assets/projects/.png",
    description:
      "Custom Unix shell supporting command execution, piping, and file operations.",
  },
];

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="projects-flex">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            
            <h3 className="project-title">{project.title}</h3>
            
            <p className="project-desc">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;