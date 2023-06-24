import React, { useContext } from "react";
import company from "../../assets/company.svg";
import searchIcon from "../../assets/searchIcon.svg";
import factory from "../../assets/factory.svg";
import Pin from "../../assets/pinIcon.svg";
import call from "../../assets/call.svg";
import email from "../../assets/email.svg";
import pinAddress from "../../assets/pinAddr.svg";
import { useSelector } from "react-redux";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import PropValueContext from "../../utils/context";

export default function OtherCompanyAbout() {
  const data = useContext(PropValueContext);
  const companyDetail = useSelector(
    (state) => state.companyDetail.company_detail
  );
  console.log(data, "dfasfaf")
  return (
    <div>
      <div className="bg-white font-MainFont shadow-md border m-auto my-3 rounded-[20px] px-10 py-3">
        <div>
          <div className="mt-2">
            <h1 className="text-2xl font-bold">About</h1>
          </div>
          <div className="mt-5">
            <div className="flex border-b-2 border-b-green_custom py-1">
              <img src={company} className="w-8 h-8" alt="" />
              <p className="font-semibold text-green_custom text-xl px-2 ">
                Company Type
              </p>
            </div>
            <div className=" ">
              <ul className="leading-8 ml-10 list-none text-xl font-SecondaryFont py-4">
                <li>
                  <p className="">{data.companyType}</p>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex border-b-2 border-b-green_custom py-1">
                <img src={searchIcon} className="w-8 h-8" alt="" />
                <p className="font-bold text-green_custom text-xl px-2">
                  Personal Information
                </p>
              </div>
              <div className="">
                <ul className="leading-8 ml-8 list-none text-xl font-SecondaryFont py-4 ">
                  <li className="flex items-start ">
                    <img src={call} className="w-11 h-11" alt="" />
                    <div className="mt-1.5">
                      {data.phoneNumber ? (
                        <p className="px-3">{data.phoneNumber}</p>
                      ) : (
                        <p className="px-3 text-gray-400">No phone number</p>
                      )}
                    </div>
                  </li>
                  <li className="flex items-start ">
                    <img src={email} className="w-6 h-6 ml-3 mt-3" alt="" />
                    {data.email ? (
                      <div className="mt-1.5 ml-3">
                        <p className="px-3">{data.email}</p>
                      </div>
                    ) : (
                      <p className="px-3 text-gray-400">No email</p>
                    )}
                  </li>
                  <li className="flex items-start px-1">
                    <div className="w-12 h-12 mt-2">
                      <img src={factory} className="w-9" alt="" />
                    </div>
                    <div className="mt-3">
                      {data.founded ? (
                        <p className="px-2">{data.founded}</p>
                      ) : (
                        <p className="px-2 text-gray-400">No year founded</p>
                      )}
                    </div>
                  </li>
                  <li className="flex items-start ">
                    <img src={Pin} className="w-11 h-11" alt="" />
                    <div className="mt-1.5">
                    {data.description ? (
                      <p className="px-4 ">{data.description}</p>
                    ) : (
                      <p className="px-4 text-gray-400">No description</p>
                    )}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="flex border-b-2 border-b-green_custom py-1">
                <img src={pinAddress} className="w-8 h-8" alt="" />
                <p className="font-bold text-green_custom text-xl px-2">
                  Address
                </p>
              </div>
              <div className="py-4">
              {data.address ? (
                <p className="ml-8 text-xl font-SecondaryFont">
                  {data.address}
                </p>
              )   : (
                <p className="ml-8 text-xl font-SecondaryFont text-gray-400">
                  No address
                </p>
              )}
              </div>
              {data.maps ? (
              <div className="mx-10 mb-5">
                <iframe
                  title="Google Map"
                  width="100%"
                  height="100%"
                  className="rounded-lg shadow-lg"
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA8ixZTgNLIK2uFt63EfBTiQQA2q_c73dg&q=${
                    data.maps ? data.maps.lat : ""
                  },${data.maps ? data.maps.lng : ""}`}
                  allowFullScreen
                />
              </div>
              ) : (
                null
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
