import { memo } from "react";
import LaptopImage from "../laptopImage";
import { LOCATION } from "@/app/constant";

const FrontendSection = () => {
  return (
    <div>
      <div className="flex flex-row items-left gap-2">
        <LaptopImage location={LOCATION.FRONTEND} />
      </div>
    </div>
  );
};

export default memo(FrontendSection);
