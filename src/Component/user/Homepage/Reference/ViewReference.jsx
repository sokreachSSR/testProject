import React from 'react'
import { useEffect } from 'react'
import ask_to_cancel from "../../../../assets/ask_to_cancel.svg";

import RequestListCompanyCard from "./RequestListCompanyCard";
import {
  Deleteref,
  getReferenceRequest,
} from "../../../../Redux/service/Reference";
import { useState } from "react";

export default function ViewReference() {
    const [dataRequest, SetDataRequest] = useState([]);
    var deleteId = 0;
    const getDeleteId = (e) => {
      deleteId = e;
    };
    useEffect(() => {
      getReferenceRequest(1).then((res) => {
        SetDataRequest(res.data?.payload.filter((data) => data.referenceStatus==="completed"));
      });
    }, []);
    const Delete = () => {
      Deleteref(deleteId).then((res) => {});
    };
    return (
      <div>
        <div className="bg-white rounded-[20px] shadow mt-4 p-6 ml-4 md:ml-8 lg:ml-0 xl:ml-0 2xl:ml-0 mr-4 md:mr-8 lg:mr-10 xl:mr-12 2xl:mr-20">
          <div className="w-full flex justify-between items-center">
            {/* title */}
            <h1 className="font-MainFont text-2xl text-gray-500 font-bold not-italic">
              Completed List
            </h1>
            {/* function */}
            <div className="">
              {/* drop down filter company type */}
              {/* <select className="rounded-[20px] border-2 border-gray-500">
                <optgroup label="Choose the date">
                  <option value="all">
                    <input
                      type="radio"
                      name="companyType"
                      id="all"
                      value="all"
                      checked
                    />
                    <label htmlFor="lastday">
                      <span className="icon">⚪</span> All
                    </label>
                  </option>
                  <option value="technology">
                    <label htmlFor="lastweek">
                      <span className="icon">⚪</span> Last week
                    </label>
                  </option>
                  <option value="last15days">
                    <label htmlFor="last15days">
                      <span className="icon">⚪</span> Last 15 days
                    </label>
                  </option>
                </optgroup>
              </select> */}
            </div>
          </div>
  
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
            {/* card */}
            {dataRequest.map((value, key) => (
              <RequestListCompanyCard
                item={value}
                index={key}
                getDeleteId={getDeleteId}
              />
            ))}
          </div>
        </div>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box h-auto">
            <div className="flex justify-center items-center">
              <img className="w-20 h-20" src={ask_to_cancel} alt="" />
            </div>
            <div className="w-full h-10 flex justify-center items-center mt-10">
              <h3 className="font-semibold text-3xl">Are you sure to Cancel?</h3>
            </div>
            <div className="flex justify-center w-42">
              <p className="py-4 text-xl">
                Do you really want to cancel this request?
              </p>
            </div>
            <div className="modal-action flex justify-center">
              <label
                onClick={Delete}
                htmlFor="my-modal"
                className="btn  w-28 bg-red-500 border-0 capitalize hover:bg-red-700 rounded-3xl"
              >
                Yes, sure!
              </label>
              <label
                htmlFor="my-modal"
                className="btn w-28 bg-gray-500 hover:bg-gray-700 border-0 capitalize rounded-3xl"
              >
                Cancel
              </label>
            </div>
          </div>
        </div>
      </div>
    );
}
