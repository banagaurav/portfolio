import { memo } from "react";
import css from "../../assets/icons/Frontend/css-icon.svg";
import html from "../../assets/icons/Frontend/html-icon.svg";
import js from "../../assets/icons/Frontend/javascript-icon.svg";
import react from "../../assets/icons/Frontend/reactJs-icon.svg";
import next from "../../assets/icons/Frontend/nextJs-icon.svg";
import tailwindCSS from "../../assets/icons/Frontend/tailwindCSS-icon.svg";
import Image from "next/image";

import LaptopImage from "../laptopImage";
import { LOCATION } from "@/app/constant";

const FrontendSection = () => {
  return (
    <div className="border border-gray-400 flex ">
      <div className="flex-1">
        <div className="grid grid-cols-2 grid-rows-3 gap-4">
          <div className="flex flex-row items-center">
            <Image src={html} alt="html.img" />
            <p className="text-html text-2xl">html</p>
          </div>
          <div className="flex flex-row items-center">
            <Image src={css} alt="css.img" />
            <p className="text-css text-2xl">css</p>
          </div>
          <div className="flex flex-row items-center">
            <Image src={tailwindCSS} alt="tailwindCSS.img" />
            <p className="text-tailwindCSS text-2xl">tailwindCSS</p>
          </div>
          <div className="flex flex-row items-center">
            <Image src={js} alt="js.img" />
            <p className="text-js text-2xl">javascript</p>
          </div>
          <div className="flex flex-row items-center">
            <Image src={react} alt="react.img" />
            <p className="text-react text-2xl">reactJs</p>
          </div>
          <div className="flex flex-row items-center">
            <Image src={next} alt="next.img" />
            <p className="text-next text-2xl">nextJs</p>
          </div>
        </div>

        <p className="text-white text-base mt-28 ">
          I specialize in modern frontend development with React.js, Next.js,
          and TailwindCSS. This stack enables me to build scalable,
          component-based UIs with optimized routing and efficient styling. I
          leverage these technologies to create performant, maintainable web
          applications with exceptional user experiences.I specialize in modern
          frontend development with React.js, Next.js, and TailwindCSS. This
          stack enables me to build scalable, component-based UIs with optimized
          routing and efficient styling. I leverage these technologies to create
          performant, maintainable web applications with exceptional user
          experiences.
        </p>
      </div>

      <div className="flex-1 flex justify-end">
        <LaptopImage location={LOCATION.FRONTEND} />
      </div>
    </div>
  );
};

export default memo(FrontendSection);
