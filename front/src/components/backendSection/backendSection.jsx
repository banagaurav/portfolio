import { LOCATION } from "@/app/constant";
import { memo } from "react";
import LaptopImage from "../laptopImage";
import Image from "next/image";
import dotent from "../../assets/icons/backend/dotnet-icon.svg";
import nestJs from "../../assets/icons/backend/nestJs-icon.svg";

const BackendSection = () => {
  return (
    <div className="bg-red-400 flex ">
      <div className="flex-1">
        <div className="flex flex-row items-center gap-4">
          <Image src={dotent} alt="dotent.img" />
          <p className="text-figma text-2xl">dotent</p>
        </div>
        <div className="flex flex-row items-center gap-4">
          <Image src={nestJs} alt="nestJs.img" />
          <p className="text-figma text-2xl">nestJs</p>
        </div>

        <p className="text-white text-base mt-28 ">
          I specialize in backend development with .NET and NestJS, leveraging
          both ecosystems to build robust, scalable server-side solutions. .NET
          provides powerful enterprise-grade capabilities for complex
          applications, while NestJS offers a modular, TypeScript-first approach
          for modern API development. This dual expertise allows me to architect
          efficient, maintainable systems with optimal performance.
        </p>
      </div>

      <div className="bg-red-400 flex ">
        <LaptopImage location={LOCATION.BACKEND} />
      </div>
    </div>
  );
};

export default memo(BackendSection);
