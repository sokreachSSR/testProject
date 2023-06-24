import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import home_ic from "../../../../assets/home-icon.svg";
import home_icb from "../../../../assets/home-bold-icon.svg";
import connection_ic from "../../../../assets/connection-icon.svg";
import connection_icb from "../../../../assets/connection-icon-bold.svg";
import job_ic from "../../../../assets/job-iconn.svg";
import job_icb from "../../../../assets/job-icon-bold.svg";
import most_ic from "../../../../assets/most-recent-icon.svg";
import most_icb from "../../../../assets/most-recent-bold.svg";
import save_ic from "../../../../assets/save-post-icon.svg";
import save_icb from "../../../../assets/save-post-bold.svg";
import lang_icn from "../../../../../src/assets/lang_icon.svg"
import location_icn from "../../../../../src/assets/location_icon.svg"

import { UserProfile } from "../../../../Redux/service/UserProfile";
import { useSelector } from "react-redux";
import { BASE_URL1 } from "../../../../utils/Utils";

export default function UserLeftSideFeature() {
  // const [activeTab, setActiveTab] = useState("home");
  const userDetail = useSelector((State) => State.userDetail.userDetail);
  const activeTab = useLocation();
  // alert(abc.pathname)

  // const handleTabClick = (tab) => {
  //   setActiveTab(tab);
  //   localStorage.setItem("ActiveStateNav", tab);
  //   localStorage.setItem("ActiveStateNav", tab);
  // };

  return (
    <div className="fixed top-20 sm:left-4 md:left-8 lg:left-10 xl:left-12 2xl:left-20">
      {/* user information starts */}
      <div className="text-lg lg:font-semibold lg:text-base xl:text-lg rounded-[20px] hidden lg:block mb-4 self-end">
        <ul to="/profile" className="bg-white py-[10px] text-black drop-shadow rounded-[20px] px-2">
          <Link
            to="/profile"
            // onClick={() => handleTabClick("profile")}
            className="flex py-0.5 items-center px-3 hover:bg-gray-100 rounded-[20px]"
          >
            {/* pfp user starts */}
            <div className=" border border-black-100 rounded-full">
              <img
                src={BASE_URL1 + userDetail.profileImage}
                className="w-[50px] h-[50px] border object-cover rounded-full"
              />
            </div>
            {/* pfp user ends */}
            {/* user details starts */}
            <div className="ml-4 w-10 lg:w-[100px] 2lg:w-[130px] xl:w-[155px]">
              <p className="font-bold text-md text-gray-900 left line-clamp-1">{userDetail.fullName}</p>
              { userDetail.jobType ? 
                <div className="flex items-start">
                  <div className="w-[13%] mt-[2px]">
                    <img src={lang_icn} className="w-3"/>
                  </div>
                  <p className="w-[82%] text-gray-600 text-xs break-all line-clamp-1">{userDetail.jobType}</p>
                </div> 
              : null }
              { userDetail.address ? 
                <div className="flex items-start">
                  <div className="w-[13%] mt-[2px]">
                    <img src={location_icn} className="w-3"/>
                  </div>
                  <p className="w-[82%] text-gray-600 text-xs break-all line-clamp-1">{userDetail.address}</p>
                </div>
              : null }
            </div>
            {/* user details ends */}
          </Link>
        </ul>
      </div>
      {/* user information ends */}
      {/* bottom sidebar starts */}
      <div className="text-lg lg:font-semibold lg:text-base xl:text-lg rounded-[20px] hidden lg:block">
        <ul className="bg-white py-2 text-black drop-shadow rounded-[20px] px-2">
          {/* NEW home icon */}
          <Link
            to="/home"
            // onClick={() => handleTabClick("home")}
            className="flex py-2 items-center px-3 hover:bg-gray-100 rounded-[20px]"
          >
            <div className="w-10 h-10 flex justify-center items-center border-black-100 border rounded-full">
              <img src={activeTab.pathname === "/home" ? home_icb : home_ic} />
            </div>
            <div
              className={`${
                activeTab.pathname === "/home"
                  ? "ml-4 font-semibold text-green_custom"
                  : "font-semibold ml-4"
              }`}
            >
              Home
            </div>
          </Link>
          {/* new connection icon */}
          <li>
            <Link
              // onClick={() => handleTabClick("connection")}
              to={"/home/connection"}
              className="flex py-2 items-center px-3 hover:bg-gray-100 rounded-[20px]"
            >
              <div className="w-10 h-10 flex justify-center items-center border-black-100 border rounded-full">
                {/* connection img svg (none-primary) */}
                <img
                  src={
                    activeTab.pathname === "/home/connection" || activeTab.pathname === "/home/connection/company"
                      ? connection_icb
                      : connection_ic
                  }
                />
              </div>
              <div
                className={`${
                  activeTab.pathname === "/home/connection" || activeTab.pathname === "/home/connection/company"
                    ? "ml-4 font-semibold text-green_custom"
                    : "font-semibold ml-4"
                }`}
              >
                Connections
              </div>
            </Link>
          </li>
          {/* new job icon/img */}
          <li>
            <Link
              // onClick={() => handleTabClick("job")}
              to={"/home/job"}
              className="flex py-2 items-center px-3 hover:bg-gray-100 rounded-[20px]"
            >
              {" "}
              <div className="flex justify-center items-center border-black-100 border rounded-full w-10 h-10">
                <img src={activeTab.pathname === "/home/job" ? job_icb : job_ic} />
              </div>
              <div
                className={`${
                  activeTab.pathname === "/home/job"
                    ? "ml-4 font-semibold text-green_custom"
                    : "font-semibold ml-4"
                }`}
              >
                Jobs
              </div>
            </Link>
          </li>
          {/* NEW most recent icon/img */}
          <Link
            // onClick={() => handleTabClick("recent")}
            to="/home/recent"
            className="flex py-2 items-center px-3 hover:bg-gray-100 rounded-[20px]"
          >
            <div className="flex justify-center items-center border-black-100 border rounded-full w-10 h-10">
              <img src={activeTab.pathname === "/home/recent" ? most_icb : most_ic} />
            </div>
            <div
              className={`${
                activeTab.pathname === "/home/recent" ? "text-green_custom" : ""
              // } ml-4 lg:mr-0 xl:mr-12`}
              } ml-4`}
            >
              <div>Most Recent</div>
            </div>
          </Link>
          {/* NEW save post icon */}
          <Link
            // onClick={() => handleTabClick("saved")}
            to="/home/saved"
            className="flex py-2 items-center px-3 hover:bg-gray-100 rounded-[20px]"
          >
            <div className="flex justify-center items-center border-black-100 border rounded-full w-10 h-10">
              <img src={activeTab.pathname === "/home/saved" || activeTab.pathname ==="/home/saved/company" ? save_icb : save_ic} />
            </div>
            <div
              className={`${
                activeTab.pathname === "/home/saved" || activeTab.pathname ==="/home/saved/company" ? "ml-4 text-green_custom" : "ml-4"
              }`}
            >
              Saved Post
            </div>
          </Link>
        </ul>
      </div>
      {/* bottom sidebar ends */}
    </div>

  );
}