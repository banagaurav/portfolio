import { memo } from "react";
import LaptopImage from "../laptopImage";
import { LOCATION } from "@/app/constant";

const DatabaseSection = () => {
  return (
    <div>
      <LaptopImage location={LOCATION.DATABASE} />
    </div>
  );
};

export default memo(DatabaseSection);
