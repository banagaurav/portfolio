import { memo } from "react";
import Database from "../../assets/icons/database/postgreSQL-icon.svg";

import LaptopImage from "../laptopImage";
import { LOCATION } from "@/app/constant";
import Image from "next/image";

const DatabaseSection = () => {
  return (
    <div className="border border-gray-400 flex ">
      <div className="flex-1">
        <div className="flex flex-row items-center gap-4">
          <Image src={Database} alt="PostgreSql.img" />
          <p className="text-figma text-2xl">PostgreSql</p>
        </div>

        <p className="text-white text-base mt-28 ">
          I utilize PostgreSQL as my primary database system, leveraging its
          robust reliability, advanced features, and strong SQL compliance to
          build scalable and efficient data storage solutions for both .NET and
          NestJS backends.I utilize PostgreSQL as my primary database system,
          leveraging its robust reliability, advanced features, and strong SQL
          compliance to build scalable and efficient data storage solutions for
          both .NET and NestJS backends.
        </p>
      </div>

      <div className=" flex ">
        <LaptopImage location={LOCATION.DATABASE} />
      </div>
    </div>
  );
};

export default memo(DatabaseSection);
