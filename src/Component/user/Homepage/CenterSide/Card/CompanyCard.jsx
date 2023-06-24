import React, { useEffect, useState } from "react";

import CardForOneCompanyCon from "./CardForOneCompanyCon";
import InfiniteScrollV1 from "../../../../othersComponent/InfiniteScrollV1";
import { useDispatch, useSelector } from "react-redux";
import { setCompanyFollow } from "../../../../../Redux/slices/CompanyFollowing";
import { suggestionForCompany } from "../../../../../Redux/service/Suggestion";

export default function CompanyCard() {

  const dispatch = useDispatch()
  const data = useSelector((state) => state.companyFollow.value)
  const [company, setCompany] = useState([]);
  useEffect(() => {
    suggestionForCompany().then((response) => {
      setCompany(response.data?.payload)
    });
  }, []);

  return (
    <div className="font-SecondaryFont grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {/* <InfiniteScrollV1 Dispatch={dispatch} SetSlide={setCompanyFollow} getData={data} linkAPI={suggestionForCompany}  linkComponent={CardForOneCompanyCon} Style={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6"} /> */}
      {company.map((item) => (
        <CardForOneCompanyCon key={item.id} item={item} ></CardForOneCompanyCon>
      ))}
    </div>
  );
}
