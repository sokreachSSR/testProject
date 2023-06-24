import React, { useEffect, useState } from "react";
import user from "../../../../assets/users.png";
import like from "../../../../assets/ei_like.svg";
import work from "../../../../assets/suitcase.png";
import sugg_people_white from "../../../../assets/sugg_people_white.svg";
import like_white from "../../../../assets/like_white_btn.svg";
import UserCard from "./Card/UserCard";
import CreatePost from "./CreatePost";
import { DropShadow } from "../../../../utils/Style";
import InfiniteScroll from "../../../othersComponent/InfiniteScroll";
import { Outlet } from "react-router";
import { Link, useLocation } from "react-router-dom";
import PropValueContext from "../../../../utils/context";
import { set } from "date-fns";

export default function CompanyHomePage() {
  const [filterCard, setFilterCard] = useState("all");
  const [optionData, setOptionData] = useState([]);
  const activeTab = useLocation();

  const jobTypeMapping = {
    1: "Accounting",
    2: "Administration",
    3: "Advertising",
    4: "Architecture",
    5: "Audit",
    6: "Banking",
    7: "Cashier",
    8: "Design",
    9: "Education",
    10: "Engineering",
    11: "Finance",
    12: "Health",
    13: "Hospitality",
    14: "Human_Resource",
    15: "Information_Technology",
    16: "Insurance",
    17: "Legal_Service",
    18: "Management",
    19: "Media",
    20: "Project_Management",
    21: "Receptionist",
    22: "Sales",
    23: "Taxation",
    24: "Technician",
    25: "Training",
    26: "Other",
  };
  const changeSelect = (e) => {
    setFilterCard(e.target.value);
  };
  return (
    <div>
      <div className="mt-3">
        <CreatePost />
      </div>
      <div className="mt-3">
        <div className={`${DropShadow} bg-white rounded-[20px] `}>
          <div className="border-b bg-white font-MainFont rounded-t-[20px] py-4">
            <div className="w-full flex justify-between items-center  px-6">
              <div className="font-MainFont text-[20px] font-[700] xl:mb-0 mb-2 border-b-gray-600">
                <p>Suggestion people</p>
              </div>
              {/* all */}
              <div className="md:mb-0 mb-2">
                {/* <button className="border px-2 py-2 flex gap-2 rounded-[20px] shadow-md font-SecondaryFont">
                    <img src={work} className="w-5" alt="" />
                    Information technology
                  </button> */}
                <select
                  onChange={changeSelect}
                  className=" px-2 py-2 flex gap-2 rounded-[20px] font-SecondaryFont border-gray-300 border-1 text-gray-400 focus:outline-none focus:ring-1 focus:border-none focus:ring-green_custom"
                >
                  <optgroup label="Select Company Type" >
                    <option value="all" >
                      <input
                        type="radio"
                        name="companyType"
                        id="all"
                        value="all"
                        checked
                      />
                      <label htmlFor="all">
                        <span className="icon">⚪</span> All
                      </label>
                    </option>
                    {Object.entries(jobTypeMapping).map(([key, value]) => (
                      <option key={key} value={key}>
                        <label htmlFor={value}>
                          <span className="icon">⚪</span> {value}
                        </label>
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>
            </div>

            <div className=" w-full bg-light_gray_custom h-[1px] my-3"></div>

            <div className="xl:flex  justify-between items-center px-6">
              <div className="md:flex justify-between w-full gap-2">
                {/* suggestion people */}
                <div className=" w-full">
                  <div className="flex md:mb-0 mb-2">
                    <Link
                      onClick={() => setFilterCard("all")}
                      to=""
                      className={`font-SecondaryFont w-full  px-2 py-1 flex justify-center items-center gap-2 text-black`}
                    >
                      <img src={user} className="w-6" alt="" />
                      <span className="text-[16px] ">Suggestion people</span>
                    </Link>
                  </div>
                  <div
                    className={`${
                      activeTab.pathname === "/company"
                        ? "w-full h-1 bg-green_custom rounded-full"
                        : ""
                    }`}
                  ></div>
                </div>
                {/* interested people */}
                <div className=" w-full">
                  <div className="flex md:mb-0 mb-2">
                    <Link
                      onClick={() => setFilterCard("all")}
                      to="interested-people"
                      className={`font-SecondaryFont w-full px-2 py-1 flex justify-center items-center  gap-2 rounded-[20px] md:mb-0 mb-2 text-black `}
                    >
                      <img src={like} className="w-6" alt="" />
                      <span className="text-[16px] ">Interested people</span>
                    </Link>
                  </div>
                  <div
                    className={`${
                      activeTab.pathname === "/company/interested-people"
                        ? "w-full h-1 bg-green_custom rounded-full"
                        : ""
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <PropValueContext.Provider value={filterCard}>
            <Outlet />
          </PropValueContext.Provider>
        </div>
      </div>
    </div>
  );
}
