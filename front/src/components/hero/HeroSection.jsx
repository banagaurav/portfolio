"use client";
import React from "react";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import BanaImage from "../../assets/icons/bana/bana.jpg";



const HeroSection = () => {
   return (
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
               {/* Text Content */}
               <div className="order-2 lg:order-1">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                     Hi, I'm <span className="text-[#FEBE0D]">Gaurav Raj Bana</span>
                     <br />
                     Web Developer
                  </h1>
                  <p className="text-gray-600 text-lg mb-8 max-w-lg">
                     I build modern, responsive web applications with clean design and exceptional user experience.
                     Let's create something amazing together.
                  </p>
                  <div className="flex space-x-6">
                     <a
                        href="https://github.com/banagaurav"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform transition-transform hover:scale-110"
                     >
                        <Github size={24} className="text-white-900" />
                     </a>
                     <a
                        href="https://linkedin.com/in/gaurav-raj-bana"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform transition-transform hover:scale-110"
                     >
                        <Linkedin size={24} className="text-white-900" />
                     </a>
                  </div>
               </div>

               {/* Image Content */}
               <div className="order-1 lg:order-2 flex justify-center">
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                     <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
                        <Image
                           src={BanaImage}
                           alt="Gaurav Raj Bana"
                           className="w-full h-full object-cover"
                           width={320}
                           height={320}
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default HeroSection;
