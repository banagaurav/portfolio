import headerIcon from "@/assets/icons/header-icon.svg";
import Image from "next/image";
export default function Header() {
   return (
      <header className="w-full  text-white py-4 ">
         <div className="flex justify-center items-center space-x-15 text-lg">
            <span className="text-gray-300">Tools</span>
            <span className="text-gray-300">Frontend</span>

            <div className="text-center leading-tight">
               <Image
                  src={headerIcon}
                  alt="Laptop Icon"
                  width={200}
                  height={200}                
               />
            </div>

            <span className="text-gray-300">Backend</span>
            <span className="text-gray-300">Database</span>
         </div>
      </header>
   );
}
