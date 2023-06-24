import React, { useEffect, useState } from "react";
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

export default function AboutUserPro() {
  const userDetails = useSelector((state) => state.userDetail.userDetail);
  // handle format date of birth
  // Format the date of birth
  const dobDate = new Date(userDetails.dateOfBirth);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDOB = dobDate.toLocaleString("en-US", options);
  return (
    <div className="pb-5">
      <div className="bg-white font-MainFont shadow border m-auto mt-3 rounded-[20px] px-10 pt-3">
        <div>
          <div className="mt-2">
            <h1 className="text-2xl font-bold text-gray-700">About</h1>
          </div>
          <div className="mt-5">
            <div className="flex border-b-2 border-b-green_custom py-1">
              <img src={workIcon} className="w-8 h-8" alt="" />
              <p className=" font-bold text-green_custom text-xl py-1 px-2 ">
                Job Type
              </p>
            </div>
            <div className=" ">
              <ul className="ml-10 list-none text-xl capitalize font-SecondaryFont py-3">
                <li>
                  <p className="font-medium">
                    {userDetails.jobType ? userDetails.jobType : "Other"}
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="my-2">
            <div className="flex border-b-2 border-b-green_custom py-1 ">
              <img src={badge} className="w-8 h-8" alt="" />
              <p className="font-bold text-green_custom text-xl py-1 px-2">
                Skills
              </p>
            </div>
            <div className="">
              {userDetails.skill ? (
                <ul className="leading-10 ml-10 list-none text-xl capitalize font-SecondaryFont py-4">
                  {userDetails.skill &&
                    Object.entries(userDetails.skill).map(([key, value]) => (
                      <li key={key} className=" font-medium text-[20px]">
                        {value}
                      </li>
                    ))}
                </ul>
              ) : (
                <ul className="leading-10 ml-10 list-none text-xl capitalize font-SecondaryFont py-4">
                  <li className=" font-medium text-gray-400 text-[20px]">No Information</li>
                </ul>
              )}
            </div>
          </div>

          <div>
            <div className="flex border-b-2 border-b-green_custom py-1">
              <img src={searchIcon} className="w-8 h-8" alt="" />
              <p className="font-bold text-green_custom text-xl py-1 px-2">
                Personal Information
              </p>
            </div>
            <div className="">
              <ul className="leading-8 ml-8 list-none font-medium text-[20px] font-SecondaryFont py-4">
                <li className="flex items-start gap-[7px]">
                  <img src={userIcon} className="w-10 h-10" alt="" />
                  <div className="mt-1.5">
                    <p className="px-3 break-all line-clamp-1 capitalize">
                      {userDetails.gender}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-[7px] mt-1">
                  <div className="w-10 flex justify-center">
                    <img src={BDIcon} className="w-7 h-7" alt="" />
                  </div>
                  <p className="px-3 break-all line-clamp-1 ">{formattedDOB}</p>
                </li>
                <li className="flex items-start gap-1">
                  <img src={call} className="w-11 h-11" alt="" />
                  <div className="mt-1.5">
                  {userDetails.phoneNumber ? (
                    <p className="px-3 break-all line-clamp-1">
                      {userDetails.phoneNumber}
                    </p>
                  ) : (
                    <p className="px-3 text-gray-400 break-all line-clamp-1">
                      No phone number
                    </p>
                  )}
                  </div>
                </li>
                <li className="flex items-start ">
                  <div className="flex justify-center items-center">
                    <div className="w-11 flex justify-center items-center">
                      <img src={email} className="w-6" alt="" />
                    </div>
                    <div className="">
                      <p className="px-4 line-clamp-1 break-all">
                        {userDetails.email}
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-1">
                  <img src={Pin} className="w-11 h-11" alt="" />
                  <div className="mt-1.5">
                    {userDetails.address ? (
                    <p className="px-3 break-all line-clamp-1">
                      {userDetails.address}
                    </p>
                    ) : (
                      <p className="px-3 text-gray-400 break-all line-clamp-1">
                      No address
                    </p>
                    )}
                  </div>
                </li>
                <li className="flex items-start gap-1 ">
                  <img src={desc} className="w-11 h-11" alt="" />
                  <div className="mt-1.5">
                    {userDetails.description ? (
                      <p className="px-3 text-justify capitalize">
                        {userDetails.description}
                      </p>
                    ) : (
                      <p className="px-3 text-justify text-gray-400 capitalize">
                        No description
                      </p>
                    )}
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
            {userDetails.education ? (
              <ul className="leading-10 ml-10 list-none text-xl font-SecondaryFont py-4">
                {userDetails.education &&
                  Object.entries(userDetails.education).map(([key, value]) => (
                    <li key={key} className="font-medium text-[20px]">
                      {value}
                    </li>
                  ))}
              </ul>
            ) : (
              <ul className="leading-10 ml-10 list-none text-xl font-SecondaryFont py-4">
                    <li className="font-medium text-gray-400 text-[20px]">
                      No Information
                    </li>
              </ul>
            )}
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
              {userDetails.experience ? (
              <ul className="leading-5 ml-10 list-none font-SecondaryFont font-semibold py-4">
                {userDetails.experience &&
                  Object.entries(userDetails.experience).map(([key, value]) => (
                    <li key={key} className="py-1 font-medium text-[20px]">
                      {key}
                      <ul className="list-disc px-7 text-[13px] py-2">
                        {value &&
                          value.map((val, key) => (
                            <li className="font-light leading-7 font-SecondaryFont text-[18px]">
                              {val.description}
                            </li>
                          ))}
                      </ul>
                    </li>
                  ))}
              </ul>
              ) : (
                <ul className="leading-5 ml-10 list-none font-SecondaryFont font-semibold py-4">
                    <li className="py-1 font-medium text-[20px]">
                      <ul className="list-disc px-7 text-[13px] py-2">
                            <li className="font-light leading-7 text-gray-400 font-SecondaryFont text-[18px]">
                              No Information
                            </li>
                      </ul>
                    </li>
              </ul>
              )}
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
