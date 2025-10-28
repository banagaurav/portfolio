"use client";
import { memo } from "react";
import FrontendSection from "../frontendSection/frontendSection";
import BackendSection from "../backendSection/backendSection";
import Tools from "../tools/Tools";
import DataSection from "../dataSection/DataSection";
import DatabaseSection from "../databaseSection/DatabaseSection";
import ResumeSection from "../resume-section/ResumeSection";
import ProjectsSection from "../projects-section/ProjectsSection";
import PortfolioNav from "../menu/PortfolioNav"; // Import the nav
import HeroSection from "./HeroSection";

const Hero = () => {
   return (
      <>
         <PortfolioNav />
         <div className="grid flex-row justify-center gap-10 py-20 px-20 flex-wrap">
            {/* Home Section */}
            <section id="home" className="min-h-screen">
               {/* Your hero/header content goes here */}
               <div className="flex items-center justify-center min-h-screen">
                  <HeroSection />
               </div>
            </section>

            {/* About Section - You can place your tools/skills here */}
            <section id="tools">
               <Tools />
            </section>
            <section id="frontend">       
               <FrontendSection />   
            </section>
            <section id="backend">
               <BackendSection />
            </section>
            <section id="database">
               <DatabaseSection />
            </section>
            <section id="data">
               <DataSection />
            </section>
            {/* Projects Section */}
            <section id="projects">
               <ProjectsSection />
            </section>

            <ResumeSection />
         </div>
      </>
   );
};

export default memo(Hero);
