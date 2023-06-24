import React, { useEffect, useState } from "react";
import save from "../../../../assets/save.png";
import cash from "../../../../assets/money.png";
import experience from "../../../../assets/list (1).png";
import tesla from "../../../../assets/tesla.png";
import { Jobs, Jobsbypage } from "../../../../Redux/service/Jobs";
import JobCard from "./Card/JobCard";
import { useDispatch, useSelector } from "react-redux";
import JobCardV1 from "./Card/JobCardV1";
import { setJobCard } from "../../../../Redux/slices/JobAnnountment";
import InfiniteScrollV1 from "../../../othersComponent/InfiniteScrollV1";
import JobCardV2 from "./Card/JobCardV2";

export default function Job_Rec() {
  const dispatch = useDispatch();
  const jobcarddata = useSelector((state) => state.jobCard.jobCard);
  const test = useSelector((state) => state);
  return (
    <div className="pl-4 md:pl-8 lg:pl-0 pr-4 md:pr-8 lg:pr-10 xl:pr-12 2xl:pr-20">
      <div className="bg-white h-full my-2.5 rounded-3xl p-6 mb-5 border drop-shadow-md mt-10 lg:mt-20">
        <div className="mb-4">
          <h1 className="text-gray-900 text-lg font-medium">More suggestions for you</h1>
        </div>
        <InfiniteScrollV1 getData={jobcarddata} Dispatch={dispatch} SetSlide={setJobCard} linkAPI={Jobsbypage} linkComponent={JobCardV1} Style={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"}></InfiniteScrollV1>
      </div>
    </div>
  );
}
