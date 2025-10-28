import { memo } from "react";
import FrontendSection from "../frontendSection/frontendSection";
import BackendSection from "../backendSection/backendSection";
import Tools from "../tools/Tools";
import DataSection from "../dataSection/DataSection";
import DatabaseSection from "../databaseSection/DatabaseSection";
import ResumeSection from "../resume-section/ResumeSection";
import ProjectsSection from "../projects-section/ProjectsSection";

const Hero = () => {
  return (
    <div className="border border-gray-400 grid flex-row justify-center gap-10 py-20 px-20 flex-wrap  ">
      <Tools />
      <FrontendSection />
      <DatabaseSection />
      <BackendSection />
      <DataSection />

      <ResumeSection />
      <ProjectsSection />
    </div>
  );
};

export default memo(Hero);
