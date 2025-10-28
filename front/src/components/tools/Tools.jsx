import { memo } from "react";
import LaptopImage from "../laptopImage";
import { LOCATION } from "@/app/constant";

const Tools = () => {
  return (
    <div className=" max-w-md ">
      <LaptopImage location={LOCATION.TOOLS} />

      <p className="text-figma text-2xl mt-4">Figma</p>

      <p className="text-white text-base mt-2 pl-14">
        I use Figma to design my projects before coding. It helps me plan
        layouts, create prototypes, and establish visual style. This blueprint
        phase ensures I build polished, user-friendly interfaces efficiently by
        providing precise measurements and assets.
      </p>
    </div>
  );
};

export default memo(Tools);
