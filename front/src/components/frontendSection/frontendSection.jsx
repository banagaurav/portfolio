import { memo } from "react";
import css from "../../assets/icons/frontend/css-icon.svg";
import html from "../../assets/icons/frontend/html-icon.svg";
import js from "../../assets/icons/frontend/javascript-icon.svg";
import react from "../../assets/icons/frontend/reactJs-icon.svg";
import next from "../../assets/icons/frontend/nextJs-icon.svg";
import tailwindCSS from "../../assets/icons/frontend/tailwindCSS-icon.svg";
import Image from "next/image";
import LaptopImage from "../laptopImage";
import { LOCATION } from "@/app/constant";

const FrontendSection = () => {
  return (
    <section className="min-h-screen w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-12  text-white">
      {/* Left Side */}
      <div className="flex-1 w-full flex flex-col justify-center">
        {/* Tech Stack Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-8">
          {[
            { src: html, name: "HTML", color: "text-[#E44D26]" },
            { src: css, name: "CSS", color: "text-[#264DE4]" },
            { src: js, name: "JavaScript", color: "text-[#F7DF1E]" },
            { src: tailwindCSS, name: "TailwindCSS", color: "text-[#38BDF8]" },
            { src: react, name: "ReactJS", color: "text-[#61DAFB]" },
            { src: next, name: "NextJS", color: "text-white" },
          ].map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-4 group hover:scale-105 transition-transform"
            >
              <Image
                src={tech.src}
                alt={`${tech.name} icon`}
                width={40}
                height={40}
                className="drop-shadow-lg"
              />
              <p className={`text-2xl font-semibold ${tech.color}`}>
                {tech.name}
              </p>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed mt-16 max-w-xl">
          I specialize in modern frontend development using{" "}
          <span className="text-[#61DAFB] font-medium">React.js</span>,{" "}
          <span className="text-white font-medium">Next.js</span>, and{" "}
          <span className="text-[#38BDF8] font-medium">TailwindCSS</span>. This
          stack allows me to build scalable, fast, and maintainable web
          applications with beautiful, component-driven interfaces and smooth
          user experiences.
        </p>
      </div>

      {/* Right Side - Laptop Preview */}
      <div className="flex-1 flex justify-center md:justify-end mt-12 md:mt-0 relative">
        <LaptopImage location={LOCATION.FRONTEND} />
        <div className="absolute inset-0 blur-3xl bg-[#61DAFB]/10 -z-10 rounded-3xl"></div>
      </div>
    </section>
  );
};

export default memo(FrontendSection);
