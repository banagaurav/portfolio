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
        View Resume :
      </p>
    </div>
  );
};

export default memo(FooterAboutMe);
