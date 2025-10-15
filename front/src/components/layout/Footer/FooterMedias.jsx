import { memo } from "react";
import Image from "next/image";

import githubIcon from "@/assets/icons/social-media/github-icon.svg";
import linkedInIcon from "@/assets/icons/social-media/linkedIn-icon.svg";
import whatsAppIcon from "@/assets/icons/social-media/whatsApp-icon.svg";

const FooterMedias = () => {
  return (
    <div>
      <p
        style={{
          fontFamily: "Noto Sans Georgian",
          color: "#FEBE0D",
          fontSize: "16px",
        }}
      >
        Socials :
      </p>
      <div style={{ display: "flex", gap: "10px" }}>
        <Image src={githubIcon} alt="github Icon" width={36} height={36} />
        <Image src={linkedInIcon} alt="linkedIn Icon" width={36} height={36} />
        <Image src={whatsAppIcon} alt="whatsApp Icon" width={36} height={36} />
      </div>
    </div>
  );
};

export default memo(FooterMedias);
