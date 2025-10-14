import { memo } from "react";

const FooterAboutMe = () => {
  return (
    <div>
      <p
        style={{
          fontFamily: "Noto Sans Georgian",
          color: "#FEBE0D",
          fontSize: "16px",
        }}
      >
        About Me :
      </p>
      <p
        style={{
          fontFamily: "Noto Sans Georgian",
          color: "#FFFFFF",
          fontSize: "16px",
        }}
      >
        Resume :
      </p>
      <p
        style={{
          fontFamily: "Noto Sans Georgian",
          color: "#FFFFFF",
          fontSize: "16px",
        }}
      >
        Next-Page :
      </p>
    </div>
  );
};

export default memo(FooterAboutMe);
