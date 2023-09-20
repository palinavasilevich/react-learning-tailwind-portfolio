import React from "react";
import SectionTitle from "./SectionTitle";

import { projects } from "../data";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle title="Web Creations" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectsCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
