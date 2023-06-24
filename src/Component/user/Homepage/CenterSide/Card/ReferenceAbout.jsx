import React, { useEffect, useState } from "react";
import reference from "../../../../../assets/reference.svg";
import edit from "../../../../../assets/editIcon.svg";
import plus from "../../../../../assets/plusIcon.svg";
import dropdown from "../../../../../assets/dropdown.svg";
import drop from "../../../../../assets/drop.svg";
import doneRef from "../../../../../assets/doneRef.svg";
import btn_delete from "../../../../../assets/btn_delete.svg";
import ReferenceCreated from "./ReferenceCreated";
import ReferencesRecieved from "./ReferencesRecieved";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function ReferenceAbout() {
  const activeTab = useLocation();
  return (
    <div>
      <div className=" font-MainFont rounded-[20px] mb-5">
        <div className="">
          <div className="flex border-b-2 border-b-green_custom py-1">
            <img src={reference} className="w-8 h-8" alt="" />
            <p className="font-semibold text-green_custom text-xl px-2 py-1 font-MainFont">
              Reference
            </p>
          </div>
          <div className="ml-5 md:ml-10">
            <div className="md:flex my-5 gap-5 text-[#5D6D79]">
              <div className="mb-4 md:mb-0">
                <Link 
                to=""
                className={`${activeTab.pathname === "/profile" ? "border bg-green_custom text-white rounded-[20px] py-1 px-5 w-28 font-SecondaryFont" : "border rounded-[20px] py-1 px-5 w-28 font-SecondaryFont" }`}>
                  Received
                </Link>
              </div>
              <div>
                {/* <button className='border bg-green_custom text-white mx-4 rounded-[20px] py-1 px-5 w-32'>Created</button> */}
                <Link 
                to="reference-created"
                className={`${activeTab.pathname === "/profile/reference-created" ? "border bg-green_custom text-white rounded-[20px] py-1 px-5 w-28 font-SecondaryFont" : "border rounded-[20px] py-1 px-5 w-28 font-SecondaryFont" }`} 
                >
                  Created
                </Link>
              </div>
            </div>

            {/* reference outlet */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
