import React from "react";
import SectionTitle from "./SectionTitle";

import aboutImg from "../assets/about.svg";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gar-16">
        <img src={aboutImg} alt="about img" className="w-full h-64" />
        <div>
          <SectionTitle title="Code And Coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            maiores itaque doloribus asperiores dolorum quas voluptates
            distinctio, porro beatae quam provident libero animi totam,
            praesentium voluptatem corrupti dignissimos ipsum accusantium!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
