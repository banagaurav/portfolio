"use client";
import { memo, useState } from "react";

const FooterAboutMe = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleViewResume = () => {
    window.open("/CV.pdf", "_blank");
  };

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
          cursor: "pointer",
          textDecoration: isHovered ? "underline" : "none",
          transition: "text-decoration 0.2s",
        }}
        onClick={handleViewResume}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        View Resume
      </p>
    </div>
  );
};

export default memo(FooterAboutMe);
