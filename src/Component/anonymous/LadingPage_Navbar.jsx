import React, { useState } from "react";
import { StaticImage } from "../../utils/StaticImage";
import { logoLink } from "../../utils/Constant";
import SearchComponent from "../othersComponent/SearchComponent";
import LandingPage_Leftbar from "./LandingPage_Leftbar";
import home_ic from "../../assets/home-icon.svg";
import home_icb from "../../assets/home-bold-icon.svg";
import { Link } from "react-router-dom";
export default function LadingPage_Navbar() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    localStorage.setItem("ActiveStateNav", tab);
    localStorage.setItem("ActiveStateNav", tab);
  };
  return (
    <div className="w-full bg-white drop-shadow fixed top-0 z-50 h-16">
      <div className="h-full grid grid-cols-10 px-4 md:px-8 lg:px-10 xl:px-12 2xl:px-20 items-center justify-center gap-8">
        {/* <div className="h-full grid grid-cols-12 items-center justify-center"> */}
        {/* logo starts */}
        <div className="col-span-2 flex items-center">
          <div className="w-20">{logoLink}</div>
        </div>
        {/* logo ends */}

        {/* RIGHT RIGHT side starts */}
        <div className="col-span-8 md:pl-7 w-full">
          <div className="flex justify-between">
            {/* the middle part starts*/}
            <div className="md:w-[50%] lg:w-[65%] xl:w-[73%] self-center">
              <div className="flex items-center">
                {/* search */}
                <SearchComponent></SearchComponent>
                {/* home btn */}
                <Link
                  to="/home"
                  onClick={() => handleTabClick("home")}
                  className="w-6 h-6 md:w-10 md:h-10 flex justify-center items-center border-black-100 border rounded-full ml-1 sm:ml-2 lg:ml-3 xl:ml-4"
                >
                  <img
                    src={activeTab === "home" ? home_icb : home_ic}
                    className=" w-4 h-4 md:w-6 md:h-6"
                  />
                </Link>
              </div>
            </div>
            {/* middle part ends */}
            {/* right part starts */}
            <div className="flex gap-1 sm:gap-2 lg:gap-3 xl:gap-4">
              {/* sign in btn hidden starts */}
              <button className="block lg:hidden text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl  border w-20 md:w-28 rounded-[20px] md:rounded-3xl ml-1 sm:ml-2 text-white bg-green_custom border-gray-300 hover:bg-white hover:text-green_custom hover:border-green_custom hover:border-2">
                Sign in
              </button>
              {/* sign in btn hidden ends */}
            </div>
            {/* right part ends */}
          </div>
        </div>
        {/* RIGHT RIGHT side ends */}
      </div>
    </div>
  );
}