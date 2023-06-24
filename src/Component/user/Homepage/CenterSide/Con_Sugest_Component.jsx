import React, { useEffect, useState } from "react";
import tesla from "../../../../assets/tesla.png";
import linger from "../../../../assets/Profilelinger.jpg";
import { ConnectionCompany } from "../../../../Redux/service/ConnectionPage";
import CompanyCard from "./Card/CompanyCard";

export default function Con_Sugest_Component() {
  return (
    <div className="pl-4 md:pl-8 lg:pl-0 pr-4 md:pr-8 lg:pr-10 xl:pr-12 2xl:pr-20">
      <div className="bg-white h-full my-2.5 rounded-3xl p-6 border drop-shadow">
        <div className="mb-4">
          <h1 className="text-gray-900 text-lg font-medium">More suggestions for you</h1>
        </div>
        <CompanyCard />
      </div>
    </div>
  );
}
