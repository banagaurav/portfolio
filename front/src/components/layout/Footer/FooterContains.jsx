import { memo } from "react";
import FooterAboutMe from "./FooterAboutMe";
import FooterContacts from "./FooterContacts";
import FooterMedias from "./FooterMedias";

const FooterContains = () => {
  return (
    <div className="flex justify-around p-5">
      <FooterAboutMe />
      <FooterContacts />
      <FooterMedias />
    </div>
  );
};

export default memo(FooterContains);
