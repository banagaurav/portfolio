import ProjectsSection from "@/components/projects-section/ProjectsSection";
import ResumeSection from "@/components/resume-section/ResumeSection";
import { memo } from "react";

const Page = () => {
  return (
    <div>
      <ResumeSection />
      <ProjectsSection />
    </div>
  );
};

export default memo(Page);
