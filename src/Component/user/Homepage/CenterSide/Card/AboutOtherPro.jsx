import React, { useContext, useEffect, useState } from "react";
import workIcon from "../../../../../assets/Frame 3222.svg";
import badge from "../../../../../assets/badge.svg";
import searchIcon from "../../../../../assets/searchIcon.svg";
import education from "../../../../../assets/education.svg";
import userIcon from "../../../../../assets/userIcon.svg";
import BDIcon from "../../../../../assets/bdIcon.svg";
import call from "../../../../../assets/call.svg";
import email from "../../../../../assets/email.svg";
import Pin from "../../../../../assets/pinIcon.svg";
import desc from "../../../../../assets/Describe.svg";
import { UserProfile } from "../../../../../Redux/service/UserProfile";
import References from "./ReferencesRecieved";
import ReferenceAbout from "./ReferenceAbout";
import { useSelector } from "react-redux";
import PropValueContext from "../../../../../utils/context";

export default function AboutOtherPro() {
  const data = useContext(PropValueContext);
  return (
    <div className="mb-5">
      <div className=" bg-white font-MainFont shadow-md border m-auto mt-3 rounded-[20px] px-10 pt-3">
        <div>
          <div className="mt-2">
            <h1 className="text-2xl font-bold">About</h1>
          </div>
          <div className="mt-5">
            <div className="flex border-b-2 border-b-green_custom py-1">
              <img src={workIcon} className="w-8 h-8" alt="" />
              <p className="font-semibold text-green_custom text-xl px-2 py-1">
                Job Type
              </p>
            </div>
            <div className=" ">
              <ul className="leading-8 ml-10 list-none text-xl font-SecondaryFont py-4">
                <li>
                  <p className="">{data?.jobType}</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="my-3">
            <div className="flex border-b-2 border-b-green_custom py-1 ">
              <img src={badge} className="w-8 h-8" alt="" />
              <p className="font-bold text-green_custom text-xl px-2 py-1">Skills</p>
            </div>
            <div className="">
              <ul className="leading-10 ml-10 list-none text-xl font-SecondaryFont py-4">
              {data?.skill && Object.entries(data?.skill).map(([key, value]) => (
                <li key={key} className=" ">
                  {/* {key} - {value} */}
                {value}
                  </li>
              ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="flex border-b-2 border-b-green_custom py-1">
              <img src={searchIcon} className="w-8 h-8" alt="" />
              <p className="font-bold text-green_custom text-xl px-2 py-1">
                Personal Information
              </p>
            </div>
            <div className="">
              <ul className="leading-8 ml-8 list-none text-xl font-SecondaryFont py-4">
                <li className="flex items-start gap-[7px]">
                  <img src={userIcon} className="w-10 h-10" alt="" />
                  <div className="mt-1.5">
                    <p className="px-3 break-all line-clamp-1 capitalize">{data?.gender}</p>
                  </div>
                </li>
                <li className="flex items-start gap-[7px] mt-1">
                  <div className="w-10 flex justify-center">
                    <img src={BDIcon} className="w-7 h-7" alt="" />
                  </div>
                  <p className="px-3 break-all line-clamp-1">{data?.dateOfBirth}</p>
                </li>
                <li className="flex items-start gap-1 ">
                  <img src={call} className="w-11 h-11" alt="" />
                  <div className="mt-1.5">
                    <p className="px-3 break-all line-clamp-1">{data?.phoneNumber}</p>
                  </div>
                </li>
                <li className="flex items-start ">
                  <div className="flex justify-center items-center">
                    <div className="w-11 flex justify-center items-center">
                      <img src={email} className="w-6" alt="" />
                    </div>
                    <div className="">
                      <p className="px-4 line-clamp-1 break-all">{data?.email}</p>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-1">
                  <img src={Pin} className="w-11 h-11" alt="" />
                  <div className="mt-1.5">
                    <p className="px-3 break-all line-clamp-1">{data?.address}</p>
                  </div>
                </li>
                <li className="flex items-start  gap-1">
                  <img src={desc} className="w-11 h-11" alt="" />
                  <div className="mt-1.5">
                    <p className="px-3 break-all line-clamp-1 text-justify">{data?.description}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="my-3">
            <div className="flex border-b-2 border-b-green_custom py-1">
              <img src={education} className="w-8 h-8" alt="" />
              <p className="font-bold text-green_custom text-xl px-2 py-1">
                Education
              </p>
            </div>
            <div className="">
              <ul className="leading-10 ml-10 list-none text-xl font-SecondaryFont py-4">
                {data?.education &&
                  Object.entries(data?.education).map(([key, value]) => (
                    <li key={key} className=" ">
                      {/* {key} - {value} */}
                      {value}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex border-b-2 border-b-green_custom py-1">
              <img src={workIcon} className="w-8 h-8" alt="" />
              <p className="font-bold text-green_custom text-xl px-2 py-1">
                Work Experience
              </p>
            </div>

            <div className="">
              <ul className="leading-5 ml-10 list-none font-semibold py-4">
                {data?.experience &&
                  Object.entries(data?.experience).map(([key, value]) => (
                    <li key={key} className=" py-1 font-medium text-[20px]">
                      {key}
                      <ul className="list-disc px-7 text-[13px] py-2">
                        {value && value !== null
                          ? value.map((val, key) => (
                              <li className="font-normal leading-7 font-SecondaryFont text-[18px]">
                                {val.description}
                              </li>
                            ))
                          : ""}
                      </ul>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <ReferenceAbout />
        </div>
        <div></div>
      </div>
    </div>
  );
}
