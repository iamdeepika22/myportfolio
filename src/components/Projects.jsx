import React from "react";

const projectList = [
  {
    id: 1,
    title: "Inforiver Admin Portal",
    image: "/myportfolio/assets/projects/Adminportal.png",
    description:
      "Inforiver console has options to manage your profile, users' details, subscriptions, export writeback logs, metrics, reports, and review/configure onboarding actions.",
  },
  {
    id: 2,
    title: "Key Press",
    image: "/myportfolio/assets/projects/keypress.png",
    description:
      "Reusable keypress component development",
  },
  {
    id: 3,
    title: "Smart Farm",
    image: "/myportfolio/assets/projects/AgriNet.png",
    description:
      "A website that provides information about farming, including climate conditions, NPK analysis, disease prediction, and fertilizer recommendations",
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