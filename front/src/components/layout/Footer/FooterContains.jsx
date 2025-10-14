import { memo } from "react";
import FooterAboutMe from "./FooterAboutMe";
import FooterContacts from "./FooterContacts";
import FooterMedias from "./FooterMedias";

const FooterContains = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "20px",
      }}
    >
      <FooterAboutMe />
      <FooterContacts />
      <FooterMedias />
    </div>
  );
};

export default memo(FooterContains);
