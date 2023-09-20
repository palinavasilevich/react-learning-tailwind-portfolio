import React from "react";
import { SectionTitle, SkillsCard } from "./";
import { skills } from "../data";

const Skills = () => {
  return (
    <section className="py-20 align-element" id="skills">
      <SectionTitle title="Tech Stack" />
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <SkillsCard key={skill.id} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
