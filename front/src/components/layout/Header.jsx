"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import headerIcon from "@/assets/icons/header-icon.svg";

export default function Header() {
   const [activeSection, setActiveSection] = useState("");

   useEffect(() => {
      const sections = ["tools", "frontend", "backend", "database"];

      const handleScroll = () => {
         const scrollPosition = window.scrollY + 150; // offset for header
         let foundSection = "";

         for (let section of sections) {
            const el = document.getElementById(section);
            if (el) {
               const top = el.offsetTop;
               const bottom = top + el.offsetHeight;
               if (scrollPosition >= top && scrollPosition < bottom) {
                  foundSection = section;
                  break;
               }
            }
         }

         // Only update state if it changed, prevents flicker
         setActiveSection((prev) => (prev !== foundSection ? foundSection : prev));
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll(); // initial check

      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const menuItems = [
      { id: "tools", label: "Tools" },
      { id: "frontend", label: "Frontend" },
      { id: "backend", label: "Backend" },
      { id: "database", label: "Database" },
   ];

   const handleClick = (id) => {
      const el = document.getElementById(id);
      if (el) {
         el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
   };

   return (
      <header className="fixed top-0 left-0 w-full text-white py-4 z-50 bg-blur-md">
         <div className="flex justify-center items-center space-x-10 text-lg">
            {menuItems.slice(0, 2).map((item) => (
               <span
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className={`cursor-pointer transition ${
                     activeSection === item.id ? "text-[#FEBE0D] font-bold" : "text-gray-300"
                  }`}
               >
                  {item.label}
               </span>
            ))}

            <div className="text-center leading-tight">
               <Image src={headerIcon} alt="Laptop Icon" width={200} height={200} />
            </div>

            {menuItems.slice(2).map((item) => (
               <span
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className={`cursor-pointer transition ${
                     activeSection === item.id ? "text-[#FEBE0D] font-bold" : "text-gray-300"
                  }`}
               >
                  {item.label}
               </span>
            ))}
         </div>
      </header>
   );
}
