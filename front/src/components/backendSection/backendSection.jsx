import { LOCATION } from "@/app/constant";
import { memo } from "react";
import LaptopImage from "../laptopImage";
import Image from "next/image";
import dotnet from "../../assets/icons/backend/dotnet-icon.svg";
import nestJs from "../../assets/icons/backend/nestJs-icon.svg";

const BackendSection = () => {
   return (
      <section className="min-h-screen w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-12  text-white">
         {/* Left Section */}
         <div className="flex-1 flex flex-col justify-center space-y-8">
            {/* Backend Stack */}
            <div className="space-y-6">
               <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                     <Image src={dotnet} alt=".NET Logo" width={50} height={50} />
                  </div>
                  <h2 className="text-4xl font-bold text-[#512BD4] tracking-wide">.NET</h2>
               </div>

               <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                     <Image src={nestJs} alt="NestJS Logo" width={50} height={50} />
                  </div>
                  <h2 className="text-4xl font-bold text-[#E0234E] tracking-wide">NestJS</h2>
               </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed mt-12 max-w-xl">
               I specialize in backend development using <span className="text-[#512BD4] font-semibold">.NET</span> and{" "}
               <span className="text-[#E0234E] font-semibold">NestJS</span>, leveraging both ecosystems to build robust,
               scalable, and secure server-side solutions.
               <span className="text-[#512BD4]"> .NET</span> provides powerful enterprise-grade performance for complex
               applications, while <span className="text-[#E0234E]">NestJS</span> offers a modular, TypeScript-first
               approach to modern API development. This combination allows me to architect efficient, maintainable, and
               high-performing systems.
            </p>

            {/* Accent Line */}
            <div className="w-24 h-[2px] bg-[#512BD4]/70 rounded-full mt-6"></div>
         </div>

         {/* Right Section */}
         <div className="flex-1 flex justify-center md:justify-end mt-12 md:mt-0 relative">
            <LaptopImage location={LOCATION.BACKEND} />
            {/* Glow effect */}
            <div className="absolute inset-0 blur-3xl bg-[#E0234E]/10 -z-10 rounded-3xl"></div>
         </div>
      </section>
   );
};

export default memo(BackendSection);
