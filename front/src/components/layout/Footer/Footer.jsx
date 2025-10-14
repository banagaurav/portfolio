import { memo } from "react";
import FooterContains from "./FooterContains";

const Footer = () => {
  return (
    <div className="h-50">
      <hr
        style={{
          fontFamily: "Noto Sans Georgian",
          color: "#FEBE0D",
          fontSize: "16px",
          marginLeft: "120px",
          marginRight: "120px",
        }}
      />
      <FooterContains />
    </div>
  );
};

export default memo(Footer);
