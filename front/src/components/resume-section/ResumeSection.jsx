"use client";

import { useEffect, useRef } from "react";
import { Download, Eye, FileText } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Junior full-stack Developer",
    company: "Startup",
    period: "Jan 2022 - Present",
    description:
      "Worked as a junior full-stack developer in a startup, developing responsive web applications, implementing new features, and collaborating with designers to ensure optimal user experience.",
  },
  {
    id: 2,
    role: "Web Developer",
    company: "freelance",
    period: "Mar 2022 - Dec 2022",
    description:
      "Developed responsive websites and web applications. Collaborated with designers to implement pixel-perfect designs and ensure optimal user experience.",
  },
  {
    id: 3,
    role: "Junior Developer",
    company: "Startup",
    period: "Jun 2020 - Feb 2022",
    description:
      "Assisted in building and maintaining web applications. Gained hands-on experience with modern web technologies and agile development methodologies.",
  },
];

const education = [
  {
    id: 1,
    degree:
      "Bachelor of Science in Computer Science and Information Technology",
    institution: "Tribhuvan University",
    period: "2021 - 2025",
  },
  {
    id: 2,
    degree: "+2 in Computer Science",
    institution: "NEB",
    period: "2018 - 2020",
  },
];

const ResumeSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
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
            Experience & Education
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              color: "#FFFFFF",
            }}
          >
            Here's a summary of my professional experience and educational
            background. For a more detailed version, you can download my full
            resume.
          </p>
          <div className="mt-8">
            <a
              href="https://drive.google.com/file/d/1EIDD_IAlUBWorJ816bXuaiG_BXTq2M6g/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full hover-lift"
              style={{
                backgroundColor: "#FEBE0D",
                color: "#FFFFFF",
              }}
            >
              <Eye size={18} className="mr-2" />
              <p>View Resume</p>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 pl-25 lg:grid-cols-2 gap-12">
          <div className="reveal" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center mb-8">
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full mr-4"
                style={{
                  backgroundColor: "#FEBE0D",
                  color: "#FFFFFF",
                }}
              >
                <FileText size={24} />
              </div>
              <h3 className="text-2xl font-bold" style={{ color: "#FEBE0D" }}>
                Work Experience
              </h3>
            </div>
            <div className="space-y-10">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="relative pl-8"
                  style={{ borderLeft: "2px solid #FEBE0D" }}
                >
                  <div
                    className="absolute w-4 h-4 rounded-full left-[-9px] top-1"
                    style={{ backgroundColor: "#FEBE0D" }}
                  ></div>
                  <h4
                    className="text-xl font-semibold"
                    style={{ color: "#FEBE0D" }}
                  >
                    {exp.role}
                  </h4>
                  <div
                    className="flex items-center mb-2"
                    style={{ color: "#FFFFFF" }}
                  >
                    <span>{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.period}</span>
                  </div>
                  <p style={{ color: "#FFFFFF" }}>{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center mb-8">
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full mr-4"
                style={{
                  backgroundColor: "#FEBE0D",
                  color: "#FFFFFF",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold" style={{ color: "#FEBE0D" }}>
                Education
              </h3>
            </div>
            <div className="space-y-10">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="relative pl-8"
                  style={{ borderLeft: "2px solid #FEBE0D" }}
                >
                  <div
                    className="absolute w-4 h-4 rounded-full left-[-9px] top-1"
                    style={{ backgroundColor: "#FEBE0D" }}
                  ></div>
                  <h4
                    className="text-xl font-semibold"
                    style={{ color: "#FEBE0D" }}
                  >
                    {edu.degree}
                  </h4>
                  <div
                    className="flex items-center mb-2"
                    style={{ color: "#FFFFFF" }}
                  >
                    <span>{edu.institution}</span>
                    <span className="mx-2">•</span>
                    <span>{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <div className="flex items-center mb-8">
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-full mr-4"
                  style={{
                    backgroundColor: "#FEBE0D",
                    color: "#FFFFFF",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: "#FEBE0D" }}>
                  Certifications
                </h3>
              </div>
              <div className="space-y-4">
                <div className="pl-8">
                  <h4
                    className="text-lg font-semibold"
                    style={{ color: "#FEBE0D" }}
                  >
                    FreeCodeCamp JavaScript Certification
                  </h4>
                  <p style={{ color: "#FFFFFF" }}>FreeCodeCamp • Self-paced</p>
                </div>
                <div className="pl-8">
                  <h4
                    className="text-lg font-semibold"
                    style={{ color: "#FEBE0D" }}
                  >
                    React Certificate
                  </h4>
                  <p style={{ color: "#FFFFFF" }}>W3Schools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
