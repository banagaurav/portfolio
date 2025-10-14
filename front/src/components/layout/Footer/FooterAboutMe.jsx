import { memo } from "react";
import Link from "next/link";

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
      <Link href="/aboutMe">
        <p
          style={{
            fontFamily: "Noto Sans Georgian",
            color: "#FFFFFF",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Next-Page :
        </p>
      </Link>
    </div>
  );
};

export default memo(FooterAboutMe);
