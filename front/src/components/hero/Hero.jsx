import { memo } from "react";
import laptopIcon from "@/assets/icons/laptop-icon.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[#202020]">
      <Image src={laptopIcon} alt="Laptop Icon" width={50} height={50} />
    </div>
  );
};

export default memo(Hero);
