import headerIcon from "@/assets/icons/header-icon.svg";
import Image from "next/image";

export default function Header() {
   return (
      <header className="sticky top-0 w-full text-white py-4 z-50">
         <div className="flex justify-center items-center space-x-10 text-lg">
            <span className="text-gray-300 cursor-pointer hover:text-white transition">Tools</span>
            <span className="text-gray-300 cursor-pointer hover:text-white transition">Frontend</span>

            <div className="text-center leading-tight">
               <Image src={headerIcon} alt="Laptop Icon" width={200} height={200} />
            </div>

            <span className="text-gray-300 cursor-pointer hover:text-white transition">Backend</span>
            <span className="text-gray-300 cursor-pointer hover:text-white transition">Database</span>
         </div>
      </header>
   );
}
