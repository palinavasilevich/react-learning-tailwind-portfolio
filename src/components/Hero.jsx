import React from "react";
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import heroImg from "../assets/hero.svg";

const Hero = () => {
  return (
    <section className="bg-emerald-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <div>
          <h1 className="text-7xl font-bold tracking-wider">I'm Palina</h1>
          <h2 className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Front-end Developer
          </h2>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            Turning Ideas Into Interactive Reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a
              href="#"
              className="h-8 w-8 text-slate-500 hover:text-black duration-300"
            >
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaInstagramSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <img src={heroImg} alt="hero img" className="h-80 lg:h-96" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
