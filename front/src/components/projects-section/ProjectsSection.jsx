"use client";

import { memo, useRef } from "react";

const ProjectsSection = () => {
  const sectionRef = useRef(null);

  return (
    <div>
      <section id="resume" className="py-20">
        <div className="section-container" ref={sectionRef}>
          <div
            className="text-center mb-16 reveal"
            style={{
              color: "#FEBE0D",
            }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{
                color: "#FEBE0D",
              }}
            >
              Projects
            </h2>
            <p
              className="max-w-2xl mx-auto"
              style={{
                color: "#FFFFFF",
              }}
            >
              Here's a summary of my projects. For a more detailed version, you
              can view the projects listed below.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(ProjectsSection);
