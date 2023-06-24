import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchComponent from "../othersComponent/SearchComponent";
import { logoLink } from "../../utils/Constant";
import { StaticImage } from "../../utils/StaticImage";
import CreateRef from "./Homepage/NavBar/CreateRef";
import Message from "./Homepage/NavBar/Message";
import Notification from "./Homepage/NavBar/Notification";
import AccountProfile from "./Homepage/NavBar/AccountProfile";
import home_ic from "../../assets/home-icon.svg";
import home_icb from "../../assets/home-bold-icon.svg";
import connection_ic from "../../assets/connection-icon.svg";
import connection_icb from "../../assets/connection-icon-bold.svg";
import job_ic from "../../assets/job-iconn.svg";
import job_icb from "../../assets/job-icon-bold.svg";
import most_ic from "../../assets/most-recent-icon.svg";
import most_icb from "../../assets/most-recent-bold.svg";
import save_ic from "../../assets/save-post-icon.svg";
import save_icb from "../../assets/save-post-bold.svg";
import { useRef } from "react";
import { setChatWith, setMessageDetail } from "../../Redux/slices/MessageDetailSlice";
import { useDispatch } from "react-redux";

export default function UserNavBar() {
  const role = localStorage.getItem("userRole") || "user"; // Get user role from localStorage, default to "user" if not found
  const Switch = useRef();
  const message = useRef();
  const reference = useRef()
  const activeTab = useLocation();

  const dispatch = useDispatch();

  const clickSwitch=()=>{
    Switch.current.click()
  }
  const messageClick=(item)=>{
    dispatch(setChatWith(item));
    message.current.click();
  }
  const referenceClick=()=>{
    reference.current.click();
  }
  return (
    <div className="w-full bg-white drop-shadow fixed top-0 z-40 h-16">
      <div className="h-full grid grid-cols-10 px-4 md:px-8 lg:px-10 xl:px-12 2xl:px-20 items-center justify-center gap-8">
        {/* <div className="h-full grid grid-cols-12 items-center justify-center"> */}
        {/* logo starts */}
        <label ref={Switch}
              htmlFor="my_modal_switch"
              className="hidden btn"
            >
              open modal
            </label>
        <div className="col-span-2 flex items-center">
          <div className="w-20">{logoLink}</div>
        </div>
        {/* logo ends */}

        {/* RIGHT RIGHT side starts */}
        <div className="col-span-8 pl-10 w-full">
          <div className="flex justify-end lg:justify-between">
            {/* the middle part starts*/}
            <div className="hidden lg:block lg:w-[65%] xl:w-[73%]">
              <div className="flex" >
                {/* search */}
                <SearchComponent></SearchComponent>
                {/* home btn */}
                <Link
                  to="/home"
                  className=" ml-1 sm:ml-2 lg:ml-3"
                >
                  <div className="w-10 h-10 flex justify-center items-center border-black-100 border rounded-full">
                    <img src={activeTab.pathname === "/home" ? home_icb : home_ic} />
                  </div>
                </Link>
              </div>
            </div>
            {/* middle part ends */}
            {/* right part starts */}
            <div className="flex gap-1 sm:gap-2 lg:gap-3 xl:gap-4">
              <CreateRef click={referenceClick}/>
              <Link className="flex items-center justify-center">
                <Message click={messageClick} />
              </Link>
              <Link className="flex items-center justify-center">
                <Notification />
              </Link>
              <Link className="flex items-center justify-center">
                <AccountProfile func={clickSwitch} />
              </Link>
              {/* dropdown burger bar starts */}
              <a className="lg:hidden flex items-center justify-center">
                <div className="dropdown self-stretch dropdown-end">
                  {/* burger btn starts */}
                  <button
                    data-collapse-toggle="navbar-hamburger"
                    type="button"
                    class="text-sm text-gray-500 h-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-full"
                    aria-controls="navbar-hamburger"
                    aria-expanded="false"
                  >
                    <span class="sr-only">Open main menu</span>
                    <svg
                      class="w-8 h-4 md:w-12 md:h-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  {/* burger btn ends */}
                  {/* lists starts */}
                  <ul
                    tabIndex={0}
                    className="dropdown-content bg-white menu p-2 shadow rounded-box w-96 mt-3 py-2 text-black px-2"
                  >
                    <div className="my-2 w-full px-3">
                      {/* search input starts */}
                      <SearchComponent />
                      {/* search input ends */}
                    </div>
                    {/* home icon */}
                    <Link
                      to="/home"
                      className="flex py-2 items-center px-3 hover:bg-gray-100 rounded-[20px]"
                    >
                      <div className="w-10 h-10 flex justify-center items-center border-black-100 border rounded-full">
                        <img src={activeTab.pathname === "/home" ? home_icb : home_ic} className="w-5 h-5 md:w-7 md:h-7" />
                      </div>
                      <div
                        className={`${
                          activeTab.pathname === "/home"
                            ? "text-green_custom"
                            : ""
                        } ml-4 font-semibold text-sm md:text-lg`}
                      >
                        Home
                      </div>
                    </Link>
                    {/* connections icon/img */}
                    <Link
                      to="/home/connection"
                      className="flex py-2 items-center px-3 hover:bg-gray-100 rounded-[20px]"
                    >
                      <div className="flex justify-center items-center border-black-100 border rounded-full w-10 h-10">
                        <img src={activeTab.pathname === "/home/connection" ? connection_icb : connection_ic} className="w-5 h-5 md:w-7 md:h-7" />
                      </div>
                      <div
                        className={`${
                          activeTab.pathname === "/home/connection" ? "text-green_custom" : ""
                        // } ml-4 lg:mr-0 xl:mr-12`}
                        } ml-4 font-semibold text-sm md:text-lg`}
                      >
                        <div>Connections</div>
                      </div>
                    </Link>
                    {/* jobs icon/img */}
                    <Link
                      to="/home/job"
                      className="flex py-2 items-center px-3 hover:bg-gray-100 rounded-[20px]"
                    >
                      <div className="flex justify-center items-center border-black-100 border rounded-full w-10 h-10">
                        <img src={activeTab.pathname === "/home/job" ? job_icb : job_ic} className="w-5 h-5 md:w-7 md:h-7" />
                      </div>
                      <div
                        className={`${
                          activeTab.pathname === "/home/job" ? "text-green_custom" : ""
                        // } ml-4 lg:mr-0 xl:mr-12`}
                        } ml-4 font-semibold text-sm md:text-lg`}
                      >
                        <div>Jobs</div>
                      </div>
                    </Link>
                    {/* most recent icon/img */}
                    <Link
                      to="/home/recent"
                      className="flex py-2 items-center px-3 hover:bg-gray-100 rounded-[20px]"
                    >
                      <div className="flex justify-center items-center border-black-100 border rounded-full w-10 h-10">
                        <img src={activeTab.pathname === "/home/recent"  ? most_icb : most_ic} className="w-5 h-5 md:w-7 md:h-7" />
                      </div>
                      <div
                        className={`${
                          activeTab.pathname === "/home/recent" ? "text-green_custom" : ""
                        // } ml-4 lg:mr-0 xl:mr-12`}
                        } ml-4 font-semibold text-sm md:text-lg`}
                      >
                        <div>Most Recent</div>
                      </div>
                    </Link>
                    {/* save post icon */}
                    <Link
                      to="/home/saved"
                      className="flex py-2 items-center px-3 hover:bg-gray-100 rounded-[20px]"
                    >
                      <div className="flex justify-center items-center border-black-100 border rounded-full w-10 h-10">
                        <img src={activeTab.pathname === "/home/saved" ? save_icb : save_ic} className="w-5 h-5 md:w-7 md:h-7"/>
                      </div>
                      <div
                        className={`${
                          activeTab.pathname === "/home/saved"  ? "text-green_custom" : ""
                        } ml-4 font-semibold text-sm md:text-lg`}
                      >
                        Saved Post
                      </div>
                    </Link>
                  </ul>
                  {/* lists starts */}
                </div>
              </a>
              {/* dropdown burger bar ends */}
            </div>
            {/* right part ends */}
          </div>
        </div>
        {/* RIGHT RIGHT side ends */}
      </div>
      <label
        ref={message}
            htmlFor="my-modal-message"
            className="hidden absolute text-2xl right-3 top-1 text-gray-500 cursor-pointer"
      />
        <label htmlFor="my-modal-ref" className=" hidden cursor-pointer">
          {/* width="23" height="25" */}
          {/* <img src={StaticImage.Document} className="w-24px -mt-1 md:w-12 xl:14px " /> */}
          <div ref={reference} className=" w-8 h-8 md:w-10 md:h-10  justify-center items-center border-black-100 border rounded-full">
            <img src={StaticImage.Bell} className="w-4 h-4 md:w-7 md:h-7" />
          </div>
        </label>
    </div>
  );
}
