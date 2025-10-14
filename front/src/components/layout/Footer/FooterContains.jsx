import { memo } from "react";
import FooterAboutMe from "./FooterAboutMe";

const FooterContains = () => {
  return (
    <>
      <FooterAboutMe />
    </>
  );
};

export default memo(FooterContains);
