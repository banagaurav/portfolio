import { LOCATION } from "@/app/constant";
import { memo } from "react";
import Image from "next/image";

import LaptopImage from "../laptopImage";
import Python from "../../assets/icons/data/python-icon.svg";
import Pandas from "../../assets/icons/data/pandas-icon.svg";

const DataSection = () => {
  return (
    <div className="bg-red-400 flex ">
      <div className="flex-1">
        <div className="flex flex-row items-center gap-4">
          <div className="flex flex-row items-center gap-4">
            <Image src={Python} alt="Python.img" />
            <p className="text-figma text-2xl">Python</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="flex flex-row items-center gap-4">
            <Image src={Pandas} alt="Pandas.img" />
            <p className="text-figma text-2xl">Pandas</p>
          </div>
        </div>

        <p className="text-white text-base mt-28 ">
          I specialize in data engineering and analysis using Python with
          Pandas, building powerful data processing capabilities into backend
          systems. Python provides the foundation for scalable data workflows,
          while Pandas enables efficient manipulation and analysis of complex
          datasets. This dual expertise allows me to create sophisticated data
          pipelines, implement analytical features, and transform raw data into
          actionable insights within full-stack applications.
        </p>
      </div>

      <div className="bg-red-400 flex ">
        <LaptopImage location={LOCATION.DATA} />
      </div>
    </div>
  );
};

export default memo(DataSection);
