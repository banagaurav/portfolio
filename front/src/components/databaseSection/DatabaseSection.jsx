import { memo } from "react";
import Database from "../../assets/icons/database/postgreSQL-icon.svg";
import LaptopImage from "../laptopImage";
import { LOCATION } from "@/app/constant";
import Image from "next/image";

const DatabaseSection = () => {
   return (
      <section className="min-h-screen w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-12 text-white">
         {/* Left Section */}
         <div className="flex-1 flex flex-col justify-center">
            {/* Icon and Title */}
            <div className="flex items-center gap-4">
               <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Image src={Database} alt="PostgreSQL Logo" width={50} height={50} />
               </div>
               <h2 className="text-4xl font-bold text-[#336791] tracking-wide">PostgreSQL</h2>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed mt-16 max-w-xl">
               I utilize <span className="text-[#336791] font-semibold">PostgreSQL</span> as my primary database system,
               leveraging its robust reliability, advanced features, and strong SQL compliance to build scalable and
               efficient data storage solutions for both <span className="text-blue-400">.NET</span> and{" "}
               <span className="text-yellow-400">NestJS</span> backends. Its flexibility and stability make it ideal for
               handling complex queries and ensuring consistent performance in production environments.
            </p>

            {/* Accent Line */}
            <div className="w-24 h-[2px] bg-[#336791]/70 rounded-full mt-8"></div>
         </div>

         {/* Right Section */}
         <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0 relative">
            <LaptopImage location={LOCATION.DATABASE} />
            {/* Subtle Glow Behind Laptop */}
            <div className="absolute inset-0 blur-3xl bg-[#336791]/15 -z-10 rounded-3xl"></div>
         </div>
      </section>
   );
};

export default memo(DatabaseSection);
