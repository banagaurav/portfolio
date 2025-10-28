import { memo } from "react";
import FrontendSection from "../frontendSection/frontendSection";
import BackendSection from "../backendSection/backendSection";
import Tools from "../tools/Tools";
import DataSection from "../dataSection/DataSection";
import DatabaseSection from "../databaseSection/DatabaseSection";

const Hero = () => {
  return (
    <div className="bg-red-200 grid flex-row justify-center gap-10 py-20 px-20 flex-wrap  ">
      <Tools />
      <FrontendSection />
      <DatabaseSection />
      <BackendSection />
      <DataSection />
    </div>
  );
};

export default memo(Hero);
