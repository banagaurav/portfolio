import { memo } from "react";
import Image from "next/image";
import frontend from "@/assets/icons/laptop/frontend.svg";

const LaptopImage = () => {
  return (
    <div className="flex flex-row items-left gap-2">
      <Image src={frontend} alt="frontend Laptop" />
    </div>
  );
};

export default memo(LaptopImage);
