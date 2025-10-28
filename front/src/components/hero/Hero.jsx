import { memo } from "react";
import FrontendSection from "../frontendSection/frontendSection";
import BackendSection from "../backendSection/backendSection";
import Tools from "../tools/Tools";
import DataSection from "../dataSection/DataSection";
import DatabaseSection from "../databaseSection/DatabaseSection";

const Hero = () => {
  return (
    <>
      <Tools />
      <FrontendSection />
      <DatabaseSection />
      <BackendSection />
      <DataSection />
    </>
  );
};

export default memo(Hero);
