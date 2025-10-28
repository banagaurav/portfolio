"use client";
const { Home, Box, ArrowUp } = require("lucide-react");

const PortfolioNav = () => {
   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
         element.scrollIntoView({ behavior: "smooth" });
      }
   };

   return (
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50">
         <div className="flex flex-col gap-2 bg-[hsl(var(--nav-bg))] p-3 rounded-2xl shadow-[0_0.5rem_1rem_0rem_rgb(255,255,255,0.1)]">
            <button
               onClick={() => scrollToSection("home")}
               className="h-12 w-12 rounded-xl hover:bg-[hsl(var(--nav-active-bg))] text-[hsl(var(--nav-item))] hover:text-[hsl(var(--nav-item-hover))] transition-all flex items-center justify-center"
               aria-label="Home"
            >
               <Home className="h-5 w-5" />
            </button>

            <button
               onClick={() => scrollToSection("resume")}
               className="h-10 px-4 rounded-xl bg-[hsl(var(--nav-active-bg))] hover:bg-[hsl(var(--nav-active-bg))]/80 text-[hsl(var(--nav-item-hover))] font-medium transition-all"
            >
               me
            </button>

            <button
               onClick={() => scrollToSection("projects")}
               className="h-12 w-12 rounded-xl hover:bg-[hsl(var(--nav-active-bg))] text-[hsl(var(--nav-item))] hover:text-[hsl(var(--nav-item-hover))] transition-all flex items-center justify-center"
               aria-label="Projects"
            >
               <Box className="h-5 w-5" />
            </button>

            <button
               onClick={scrollToTop}
               className="h-12 w-12 rounded-xl hover:bg-[hsl(var(--nav-active-bg))] text-[hsl(var(--nav-item))] hover:text-[hsl(var(--nav-item-hover))] transition-all flex items-center justify-center"
               aria-label="Back to top"
            >
               <ArrowUp className="h-5 w-5" />
            </button>
         </div>
      </nav>
   );
};

export default PortfolioNav;
