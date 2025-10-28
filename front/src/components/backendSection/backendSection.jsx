import { LOCATION } from "@/app/constant";
import { memo } from "react";
import LaptopImage from "../laptopImage";

const BackendSection = () => {
  return (
    <div>
      <LaptopImage location={LOCATION.BACKEND} />
    </div>
  );
};

export default memo(BackendSection);
