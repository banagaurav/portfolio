import { memo } from "react";
import Image from "next/image";
import toolsSvg from "@/assets/icons/laptop/tools.svg";
import frontendSvg from "@/assets/icons/laptop/frontend.svg";
import backendSvg from "@/assets/icons/laptop/backend.svg";
import databaseSvg from "@/assets/icons/laptop/database.svg";
import dataSvg from "@/assets/icons/laptop/data.svg";

const LaptopImage = ({ location }) => {
  const laptopImageMapping = {
    TOOLS: toolsSvg,
    BACKEND: backendSvg,
    DATABASE: databaseSvg,
    FRONTEND: frontendSvg,
    DATA: dataSvg,
  };

  const LaptopImageSource = laptopImageMapping[location];

  return (
    <>
      {LaptopImageSource && (
        <Image
          className=" gap-2 w-100 "
          src={LaptopImageSource}
          alt={`${location} laptop`}
        />
      )}
    </>
  );
};

export default memo(LaptopImage);
