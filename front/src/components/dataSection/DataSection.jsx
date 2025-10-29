import { LOCATION } from "@/app/constant";
import { memo } from "react";
import Image from "next/image";
import LaptopImage from "../laptopImage";
import Python from "../../assets/icons/data/python-icon.svg";
import Pandas from "../../assets/icons/data/pandas-icon.svg";

const DataSection = () => {
   return (
      <section className="min-h-screen w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-12 text-white">
         {/* Left Section */}
         <div className="flex-1 flex flex-col justify-center space-y-8">
            {/* Python */}
            <div className="flex items-center gap-4">
               <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Image src={Python} alt="Python Logo" width={50} height={50} />
               </div>
               <h2 className="text-4xl font-bold text-[#3776AB] tracking-wide">Python</h2>
            </div>

            {/* Pandas */}
            <div className="flex items-center gap-4">
               <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Image src={Pandas} alt="Pandas Logo" width={50} height={50} />
               </div>
               <h2 className="text-4xl font-bold text-[#150458] tracking-wide">Pandas</h2>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed mt-12 max-w-xl">
               I specialize in <span className="text-[#3776AB] font-semibold">data engineering</span> and{" "}
               <span className="text-[#150458] font-semibold">analysis</span> using{" "}
               <span className="text-[#3776AB] font-semibold">Python</span> with{" "}
               <span className="text-[#150458] font-semibold">Pandas</span>, building powerful data processing
               capabilities into backend systems. Python provides the foundation for scalable data workflows, while
               Pandas enables efficient manipulation and analysis of complex datasets. This expertise allows me to
               create data pipelines, implement analytical features, and transform raw data into actionable insights
               within full-stack applications.
            </p>

            {/* Accent Line */}
            <div className="w-24 h-[2px] bg-[#3776AB]/70 rounded-full mt-6"></div>
         </div>

         {/* Right Section */}
         <div className="flex-1 flex justify-center md:justify-end mt-12 md:mt-0 relative">
            <LaptopImage location={LOCATION.DATA} />
            {/* Glow */}
            <div className="absolute inset-0 blur-3xl bg-[#3776AB]/15 -z-10 rounded-3xl"></div>
         </div>
      </section>
   );
};

export default memo(DataSection);
