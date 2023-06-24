import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import "../../../../../src/App.css"
import reference_pic from "../../../../assets/reference_nav_pic.png";
import search_com_icons from "../../../../assets/search_company.svg";
import requested_list from "../../../../assets/requested_list.svg";
import view_reference from "../../../../assets/view_reference.svg";
import reference_bg_pic from "../../../../assets/reference_bg_pic.svg";
import view_reference_white from "../../../../assets/view_reference_white.svg";
import requested_list_white from "../../../../assets/requested_list_white.svg";
import search_com_black from "../../../../assets/search_com_black.svg";


export default function ReferenceNavbar() {
  const activeTab = useLocation();

  return (
    <div className="flex justify-center sm:justify-between items-center mt-10 lg:mt-20 bg-white rounded-[20px] shadow ml-4 md:ml-8 lg:ml-0 xl:ml-0 2xl:ml-0 mr-4 md:mr-8 lg:mr-10 xl:mr-12 2xl:mr-20">
      {/* <div className="w-[1040px] h-[240px] flex rounded-[20px] shadow-xl bg-white"> */}
        {/* left */}
        <div
          className='w-[30%] hidden sm:flex rounded-r-full bg-green_custom justify-start items-center pr-2'
        >
          {/* picture */}
          <div className="w-[50%]">
            <img
              src={reference_pic}
              alt=""
              className="w-full h-[200px] object-contain rounded-s-[20px]"
            />
          </div>
          {/* text */}
          <div>
            <p className="text-white font-SecondaryFont text-md md:text-lg lg:text-xl xl:text-2xl font-bold ">
              <p>What make</p>
              <p>you unique?</p>
            </p>
          </div>
          {/* <p className="text-white font-SecondaryFont text-3xl font-bold break-all">
            What make you unique?
          </p> */}
        </div>
        {/* center */}
        <div className="flex justify-center items-center bg-white w-[450px] h-[200px] rounded-[20%]">
          <div className="w-[360px] h-[100px]">
            <ul>
              <li className="flex justify-evenly">
                <Link
                  to=""
                  className={`text-black font-SecondaryFont text-[16px] font-bold ${
                    activeTab.pathname === "/home/reference" ? "active" : ""
                  }`}
                >
                  <div
                    className={`w-[86px] h-[60px] flex justify-center ${
                      activeTab.pathname === "/home/reference" ? "active" : ""
                    }`}
                  >
                    <div
                      className={`w-[60px] h-[60px] rounded-full ${
                        activeTab.pathname === "/home/reference"
                          ? "bg-green_custom"
                          : "bg-light_gray_custom"
                      } flex justify-center items-center`}
                    >
                      <img 
                      src={`${activeTab.pathname === "/home/reference" ? search_com_icons : search_com_black}`} 
                      alt=""  
                      />
                    </div>
                  </div>
                  <div className="w[86px] h-[30px] font-normal flex justify-center">
                    <p>Company</p>
                  </div>
                  <div
                    className={`w-[86px] h-[60px] flex justify-center ${
                      activeTab.pathname === "/home/reference" ? "active" : ""
                    }`}
                  >
                    <div 
                    className={` ${
                      activeTab.pathname === "/home/reference" ? "w-full h-[5px] rounded-[20px] bg-green_custom" : ""
                    }`}
                    ></div>
                  </div>
                </Link>
                <Link
                  to="requested-list"
                  className={`text-black font-SecondaryFont text-[16px] font-bold ${
                    activeTab.pathname === "/home/reference/requested-list" ? "active" : ""
                  }`}
                >
                  <div
                    className={`w-[86px] h-[60px] flex justify-center ${
                      activeTab.pathname === "/home/reference/requested-list" ? "active" : ""
                    }`}
                  >
                    <div
                      className={`w-[60px] h-[60px] rounded-full ${
                        activeTab.pathname === "/home/reference/requested-list"
                          ? "bg-green_custom"
                          : "bg-light_gray_custom"
                      } flex justify-center items-center`}
                    >
                      <img 
                      src={`${activeTab.pathname === "/home/reference/requested-list" ? requested_list_white : requested_list}`}
                      alt="" />
                    </div>
                  </div>
                  <div className="w[86px] h-[30px] font-normal flex justify-center">
                    <p>Requested</p>
                  </div>
                  <div
                    className={`w-[86px] h-[60px] flex justify-center ${
                      activeTab.pathname === "/home/reference/requested-list" ? "active" : ""
                    }`}
                  >
                    <div 
                    className={` ${
                      activeTab.pathname === "/home/reference/requested-list" ? "w-full h-[5px] rounded-[20px] bg-green_custom" : ""
                    }`}
                    ></div>
                    
                  </div>
                </Link>
                <Link
                  to="view-reference"
                  className={`text-black font-SecondaryFont text-[16px] font-bold ${
                    activeTab.pathname === "/home/reference/view-reference" ? "active" : ""
                  }`}
                > 
                  <div
                    className={`w-[86px] h-[60px] flex justify-center ${
                      activeTab.pathname === "/home/reference/view-reference" ? "active" : ""
                    }`}
                  >
                    <div
                      className={`w-[60px] h-[60px] rounded-full ${
                        activeTab.pathname === "/home/reference/view-reference"
                          ? "bg-green_custom"
                          : "bg-light_gray_custom"
                      } flex justify-center items-center`}
                    >
                      <img 
                      src={`${activeTab.pathname === "/home/reference/view-reference" ? view_reference_white : view_reference}`}
                      alt="" />
                    </div>
                  </div>
                  <div className="w[86px] h-[30px] font-normal flex justify-center">
                    <p>Completed</p>
                  </div>
                  <div
                    className={`w-[86px] h-[60px] flex justify-center ${
                      activeTab.pathname === "/home/reference/view-reference" ? "active" : ""
                    }`}
                  >
                    <div 
                    className={` ${
                      activeTab.pathname === "/home/reference/view-reference" ? "w-full h-[5px] rounded-[20px] bg-green_custom" : ""
                    }`}
                    ></div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* right */}
        <div className="hidden md:block w-[253px]">
          <img
            src={reference_bg_pic}
            alt=""
            className="w-full h-[200px] object-contain"
          />
        </div>
      {/* </div> */}
    </div>
  );
}
