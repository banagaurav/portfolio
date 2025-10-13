export default function Header() {
   return (
      <header className="w-full  text-white py-4 ">
         <div className="flex justify-center items-center space-x-10 text-sm font-light">
            <span className="text-gray-300">Tools</span>
            <span className="text-gray-300">Frontend</span>

            <div className="text-center leading-tight">
               <span className="text-yellow-400 text-lg font-serif block -mb-1">Gaurav</span>
               <span className="text-white text-lg font-serif">Raj </span>
               <span className="text-yellow-400 text-lg font-serif">Bana</span>
            </div>

            <span className="text-gray-300">Backend</span>
            <span className="text-gray-300">Database</span>
         </div>
      </header>
   );
}
