import React from "react";
import company from "../../../../../assets/company.svg";
import searchIcon from "../../../../../assets/searchIcon.svg";
import factory from "../../../../../assets/factory.svg";
import Pin from "../../../../../assets/pinIcon.svg";
import desc from "../../../../../assets/Describe.svg";
import call from "../../../../../assets/call.svg";
import email from "../../../../../assets/email.svg";
import pinAddress from "../../../../../assets/pinAddr.svg";
import GoogleMaps from "../../../../othersComponent/GoogleMaps";
import { useSelector } from "react-redux";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function AboutCompanyPro() {
  const companyDetail = useSelector(
    (state) => state.companyDetail.company_detail
  );
  const companyTypeMapping = {
    SOFTWARE_DEVELOPEMENT: "Software Development",
    FINANCE_AND_BANKING: "Finance and Banking",
    CIVIL_SERVICES: "Civil Services",
    ENGINEERRING: "Engineering",
    ENTERTAINMENT: "Entertainment",
    MANUFACTURING: "Manufacturing",
    TELECOMMUNICATION: "Telecommunication",
    OTHER: "Other",
  };

  return (
    <div>
      <div className="bg-white font-MainFont shadow border m-auto my-3 rounded-[20px] px-10 py-3">
        <div>
          <div className="mt-2">
            <h1 className="text-2xl font-bold">About</h1>
          </div>
          <div className="mt-5">
            <div className="flex border-b-2 border-b-green_custom py-1">
              <img src={company} className="w-8 h-8" alt="" />
              <p className="font-semibold text-green_custom text-xl px-2 py-1">
                Company Type
              </p>
            </div>
            <div className=" ">
              <ul className="leading-8 ml-10 list-none text-xl font-SecondaryFont py-4">
                <li>
                  <p className="">{companyDetail.companyType}</p>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex border-b-2 border-b-green_custom py-1">
                <img src={searchIcon} className="w-8 h-8" alt="" />
                <p className="font-bold text-green_custom text-xl px-2 py-1">
                  Company Information
                </p>
              </div>
              <div className="">
                <ul className="leading-8 ml-8 list-none text-xl font-SecondaryFont py-4 space-y-1">
                  <li className="flex items-center gap-1">
                    <img src={call} className="w-11 h-11" alt="" />
                    <div className=" ">
                      {companyDetail.phoneNumber ? (
                      <p className="px-1 text-justify">{companyDetail.phoneNumber}</p>
                     ) : (
                      <p className="px-1 text-justify text-gray-400 ">
                        No phone number
                      </p>
                    )}
                      </div>
                  </li>
                  <li className="flex gap-4 items-center">
                    <img src={email} className="w-6 h-6 ml-[10px]" alt="" />
                    <div className="">
                      {companyDetail.email ? (
                        <p className="px-1">{companyDetail.email}</p>
                      ) : (
                        <p className="px-1 text-gray-400">No email</p>
                      )}
                    </div>
                  </li>
                  <li className="flex gap-3 items-center">
                    <div className="w-9 h-9 ">
                      <img src={factory} className="w-9 ml-1" alt="" />
                    </div>
                    <div className="">
                      {companyDetail.founded ? (
                        <p className="px-1">{companyDetail.founded}</p>
                      ) : (
                        <p className="px-1 text-gray-400">No founded year</p>
                      )}
                    </div>
                  </li>
                  <li className="flex gap-1 items-center ">
                    <div className="w-10 h-10 ">
                      <img src={Pin} className="w-11 h-11" alt="" />
                    </div>
                    <div className="">
                      {companyDetail.description ? (
                        <p className=" px-2">{companyDetail.description}</p>
                      ) : (
                        <p className="px-2 text-gray-400">No description</p>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="flex border-b-2 border-b-green_custom py-1">
                <img src={pinAddress} className="w-8 h-8" alt="" />
                <p className="font-bold text-green_custom text-xl py-1 px-2">
                  Address
                </p>
              </div>
              <div className="py-4">
                <p className="ml-8 text-xl font-SecondaryFont">
                  {companyDetail.address}
                </p>
              </div>
              <div className="mx-10 mb-5">
                <iframe
                  title="Google Map"
                  width="100%"
                  height="100%"
                  className="rounded-lg shadow-lg"
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA8ixZTgNLIK2uFt63EfBTiQQA2q_c73dg&q=${
                    companyDetail.maps ? companyDetail.maps.lat : ""
                  },${companyDetail.maps ? companyDetail.maps.lng : ""}`}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
