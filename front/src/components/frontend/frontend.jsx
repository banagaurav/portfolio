import { memo } from "react";
import Image from "next/image";

import figmaIcon from "@/assets/icons/laptop/frontend.svg";

const Frontend = () => {
  return (
    <div>
      <div className="flex flex-row items-left gap-2">
        <Image src={figmaIcon} alt="Figma Icon" />
      </div>
    </div>
  );
};

export default memo(Frontend);
