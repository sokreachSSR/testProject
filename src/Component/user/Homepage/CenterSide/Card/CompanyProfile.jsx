import React, { useEffect, useState } from "react";
import picture from "../../../../../assets/picture.png";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { BASE_URL1 } from "../../../../../utils/Utils";
import EditProfileCompany from "../../../../company/EditProfileCompany";
import EditProfile_Company from "../../../../company/EditProfile_Company";
import ModalImage from "react-modal-image";

export default function CompanyProfile() {
  const companyDetail = useSelector(
    (state) => state.companyDetail.company_detail
  );

  const [company, setCompany] = useState({});
  const activeTab = useLocation();
    
  return (
    <div className=" bg-white border font-MainFont shadow m-auto rounded-[20px] p-2">
      <div className="border rounded-t-[20px]">
        <ModalImage
         hideDownload={true}
          small={`${BASE_URL1}/api/v1/images/PROFILE?fileName=${companyDetail.coverImage}`}
          large={`${BASE_URL1}/api/v1/images/PROFILE?fileName=${companyDetail.coverImage}`}
          className="w-full rounded-t-[20px] object-cover m-auto h-[130px] sm:h-[200px] md:h-[300px]"
          alt=""
        />
      </div>
      <div className="md:flex justify-between h-fit py-4">
        <div>
          <div className="flex relative">
            <div className="absolute left-6 -top-12">
              <ModalImage
              hideDownload={true}
              hideZoom={true}
                small={`${BASE_URL1}/api/v1/images/PROFILE?fileName=${companyDetail.companyProfile}`}
                large={`${BASE_URL1}/api/v1/images/PROFILE?fileName=${companyDetail.companyProfile}`}
                className="w-28 h-28 rounded-full border-4 object-cover ring-2 ring-bg_custom bg-white border-white"
                alt=""
              />
            </div>
          </div>
          <div className="pt-[70px] md:pt-0 pl-4 sm:pl-10 md:pl-40">
            <div>
              <h1 className="font-MainFont text-3xl font-bold text-gray-600">
                {companyDetail.companyName}
              </h1>
            </div>
            <div className="flex font-normal font-SecondaryFont text-gray-500 gap-12 py-1">
              <p>{companyDetail.following} Followers</p>
            </div>
          </div>
        </div>
        <div className="ml-4 sm:ml-10 md:ml-0 pt-2 pb-4 md:pb-0">
          <button className="w-28 h-10 dropdown text-sm py-1.5 border-2 border-gray-400 hover:bg-gray-100 rounded-[20px] flex text-center items-center justify-center">
            <span className="px-2">
              <EditProfile_Company comName={companyDetail}/>
            </span>
          </button>
        </div>
      </div>

      <div className="border-t-gray-200 border-t flex gap-2 sm:gap-4 md:gap-6 lg:gap-10 py-3 pl-0 sm:pl-4 md:pl-6 lg:pl-10 text-gray-500">
        {/* home */}
        <div>
          <Link
            to=""
            className="font-SecondaryFont font-medium text-sm sm:text-md md:text-md lg:text-xl"
          >
            Home
            <div
              className={` ${
                activeTab.pathname === "/company" || activeTab.pathname === "/company/interested-people"
                  ? "w-full h-[5px] rounded-[20px] bg-green_custom"
                  : ""
              }`}
            ></div>
          </Link>
        </div>
        {/* about */}
        <div>
          <Link
            to="company-about"
            className="font-SecondaryFont font-medium text-sm sm:text-md md:text-md lg:text-xl"
          >
            About
            <div
              className={` ${
                activeTab.pathname === "/company/company-about"
                  ? "w-full h-[5px] rounded-[20px] bg-green_custom"
                  : ""
              }`}
            ></div>
          </Link>
        </div>
        {/* posts */}
        <div>
          <Link
            to="company-posts"
            className="font-SecondaryFont font-medium text-sm sm:text-md md:text-md lg:text-xl"
          >
            Posts
            <div
              className={` ${
                activeTab.pathname === "/company/company-posts"
                  ? "w-full h-[5px] rounded-[20px] bg-green_custom"
                  : ""
              }`}
            ></div>
          </Link>
        </div>
        {/* announments */}
        <div>
          <Link
            to="company-annountment"
            className=" font-SecondaryFont font-medium text-sm sm:text-md md:text-md lg:text-xl"
          >
            Annountments
            <div
              className={` ${
                activeTab.pathname === "/company/company-annountment"
                  ? "w-full h-[5px] rounded-[20px] bg-green_custom"
                  : ""
              }`}
            ></div>
          </Link>
        </div>
      </div>
    </div>
  );
}