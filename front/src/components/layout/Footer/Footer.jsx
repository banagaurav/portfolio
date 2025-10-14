import { memo } from "react";
import FooterContains from "./FooterContains";

const Footer = () => {
  return (
    <div className="bg-red-500 text-white h-50">
      <FooterContains />
    </div>
  );
};

export default memo(Footer);
