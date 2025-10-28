import { memo } from "react";
import Figma from "../../assets/icons/tools/figma-icon.svg";
import { LOCATION } from "@/app/constant";
import Image from "next/image";
import LaptopImage from "../laptopImage";

const Tools = () => {
  return (
    <div className="border border-gray-400 flex ">
      <div className="flex-1">
        <div className="flex flex-row items-center gap-4">
          <Image src={Figma} alt="Figma.img" />
          <p className="text-figma text-2xl">Figma</p>
        </div>

        <p className="text-white text-base mt-28 ">
          I use Figma to design my projects before coding. It helps me plan
          layouts, create prototypes, and establish visual style. This blueprint
          phase ensures I build polished, user-friendly interfaces efficiently
          by providing precise measurements and assets.
        </p>
      </div>

      <div className="flex-1 flex justify-end">
        <LaptopImage location={LOCATION.TOOLS} />
      </div>
    </div>
  );
};

export default memo(Tools);
