import { memo } from "react";
import FooterContains from "./FooterContains";

const Footer = () => {
  return (
    <div className="h-50">
      <hr className="border-t border-t-[#FEBE0D] ml-[120px] mr-[120px] mb-0.5" />
      <FooterContains />
    </div>
  );
};

export default memo(Footer);
