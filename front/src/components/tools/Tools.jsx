import { memo } from "react";
import Figma from "../../assets/icons/tools/figma-icon.svg";
import { LOCATION } from "@/app/constant";
import Image from "next/image";
import laptopImage from "../laptopImage";
import LaptopImage from "../laptopImage";

const Tools = () => {
  return (
    <section className="min-h-screen w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-12 text-white">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center space-y-8">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
            <Image src={Figma} alt="Figma Logo" width={48} height={48} />
          </div>
          <h2 className="text-4xl font-bold tracking-wide text-[#FEBE0D]">
            Figma
          </h2>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
          I use <span className="text-[#FEBE0D] font-semibold">Figma</span> to
          design my projects before coding. It helps me plan layouts, create
          prototypes, and establish a clear visual style. This blueprint phase
          ensures I build polished, user-friendly interfaces efficiently, with
          precise measurements and exportable assets.
        </p>

        {/* Accent Line */}
        <div className="w-24 h-[2px] bg-[#FEBE0D]/70 rounded-full mt-4"></div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0 relative">
        <LaptopImage location={LOCATION.TOOLS} />
        {/* Floating Glow */}
        <div className="absolute inset-0 blur-3xl bg-[#FEBE0D]/20 rounded-3xl -z-10"></div>
      </div>
    </section>
  );
};

export default memo(Tools);
