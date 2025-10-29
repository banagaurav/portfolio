"use client";

import { memo } from "react";
import { Download, Eye, FileText, Award } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Junior Full-stack Developer",
    company: "Startup",
    period: "Jan 2022 - Present",
    description:
      "Worked as a junior full-stack developer, building responsive web apps, implementing new features, and collaborating with designers to ensure optimal UX.",
  },
  {
    id: 2,
    role: "Web Developer",
    company: "Freelance",
    period: "Mar 2022 - Dec 2022",
    description:
      "Developed responsive websites and web apps, collaborating with designers to implement pixel-perfect designs and ensure optimal user experience.",
  },
  {
    id: 3,
    role: "Junior Developer",
    company: "Startup",
    period: "Jun 2020 - Feb 2022",
    description:
      "Assisted in building and maintaining web applications. Gained hands-on experience with modern web technologies and agile methodologies.",
  },
];

const education = [
  {
    id: 1,
    degree: "BSc in Computer Science and IT",
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

const certifications = [
  {
    id: 1,
    title: "FreeCodeCamp JavaScript Certification",
    issuer: "FreeCodeCamp",
  },
  {
    id: 2,
    title: "React Certificate",
    issuer: "W3Schools",
  },
];

const ResumeSection = () => {
  return (
    <section
      id="resume"
      className="min-h-screen w-full  text-white px-6 md:px-20 py-24"
    >
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-[#FEBE0D]">
          Experience & Education
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4">
          Here's a summary of my professional experience and educational
          background. You can also view my full resume.
        </p>
        <div className="mt-8">
          <a
            href="https://drive.google.com/file/d/1EIDD_IAlUBWorJ816bXuaiG_BXTq2M6g/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full bg-[#FEBE0D] text-black hover:scale-105 transition-transform"
          >
            <Eye size={18} className="mr-2" /> View Resume
          </a>
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-16 pl-25">
        {/* Work Experience */}
        <div>
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FEBE0D] text-black mr-4">
              <FileText size={24} />
            </div>
            <h3 className="text-2xl font-bold text-[#FEBE0D]">
              Work Experience
            </h3>
          </div>
          <div className="space-y-10">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="relative pl-8 border-l-2 border-[#FEBE0D]"
              >
                <div className="absolute w-4 h-4 rounded-full -left-2 top-2 bg-[#FEBE0D]" />
                <h4 className="text-xl font-semibold text-[#FEBE0D]">
                  {exp.role}
                </h4>
                <div className="flex items-center mb-2 text-gray-300">
                  <span>{exp.company}</span>
                  <span className="mx-2">•</span>
                  <span>{exp.period}</span>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div>
          {/* Education */}
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FEBE0D] text-black mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#FEBE0D]">Education</h3>
          </div>
          <div className="space-y-10">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="relative pl-8 border-l-2 border-[#FEBE0D]"
              >
                <div className="absolute w-4 h-4 rounded-full -left-2 top-2 bg-[#FEBE0D]" />
                <h4 className="text-xl font-semibold text-[#FEBE0D]">
                  {edu.degree}
                </h4>
                <div className="flex items-center mb-2 text-gray-300">
                  <span>{edu.institution}</span>
                  <span className="mx-2">•</span>
                  <span>{edu.period}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FEBE0D] text-black mr-4">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[#FEBE0D]">
                Certifications
              </h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="pl-8 border-l-2 border-[#FEBE0D] relative"
                >
                  <div className="absolute w-4 h-4 rounded-full -left-2 top-2 bg-[#FEBE0D]" />
                  <h4 className="text-lg font-semibold text-[#FEBE0D]">
                    {cert.title}
                  </h4>
                  <p className="text-gray-300">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ResumeSection);
