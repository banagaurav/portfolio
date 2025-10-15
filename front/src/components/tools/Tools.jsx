import { memo, useState, useEffect } from "react";
import Image from "next/image";
import figmaIcon from "@/assets/icons/tools/figma-icon.svg";

const Tools = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className=" max-w-md ">
      <div className="flex flex-row items-left gap-2">
        <Image
          src={figmaIcon}
          alt="Figma Icon"
          width={50}
          height={50}
          className={`transform transition duration-1000 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        />
        <p className="text-figma text-2xl text-orange-300 mt-4">Figma</p>
      </div>

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
