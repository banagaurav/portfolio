"use client";

import { memo, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Example project images (replace with your own)
import Project1 from "../../assets/icons/projects/project1.jpg";
import Project2 from "../../assets/icons/projects/project2.jpg";
import { SECTION } from "@/app/constant";

const projects = [
  {
    title: "Study Notes Platform",
    description:
      "A subscription-based web application for students to upload, buy, and share study notes. Built with React, Node.js, and MongoDB.",
    tech: ["React", "Node.js", "MongoDB"],
    image: Project1,
  },
  {
    title: "Company Management System",
    description:
      "An internal system managing projects, employees, inventory, and payroll for an IT company using Next.js and Supabase.",
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    image: Project2,
  },
  {
    title: "Personal Portfolio",
    description:
      "A sleek, animated portfolio website showcasing my work, skills, and background with smooth scroll and section transitions.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    image: Project1,
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef(null);

  return (
    <section
      id={SECTION.PROJECTS}
      className="py-24 px-6 md:px-20 bg-transparent text-white"
    >
      <div ref={sectionRef} className="max-w-7xl mx-auto ">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FEBE0D]">
            Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            A collection of my featured works, blending design precision with
            technical depth.
          </p>
          <div className="w-24 h-[2px] bg-[#FEBE0D]/70 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 border border-gray-700 rounded-2xl overflow-hidden backdrop-blur-md hover:border-[#FEBE0D]/50 hover:scale-[1.02] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#FEBE0D] mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#FEBE0D]/20 text-[#FEBE0D] px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ProjectsSection);
