import { LOCATION } from "@/app/constant";
import { memo } from "react";
import LaptopImage from "../laptopImage";

const DataSection = () => {
  return (
    <div>
      <LaptopImage location={LOCATION.DATA} />
    </div>
  );
};

export default memo(DataSection);
