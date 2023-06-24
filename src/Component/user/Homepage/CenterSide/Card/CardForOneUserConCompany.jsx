import React, { useState } from "react";
import contact from "../../../../../assets/contact.svg";
import bg_work from "../../../../../assets/bg-work.svg";
import badge from "../../../../../assets/badge.svg";
import { Link } from "react-router-dom";
import { BASE_URL1 } from "../../../../../utils/Utils";
import { ConnectionFollowUser } from "../../../../../Redux/service/Follower";
import { interestUser } from "../../../../../Redux/service/Interest";

export default function CardForOneUserConCompany({ item, deleteInterest }) {
  const [interest, setInterest] = useState(false);
  const handleFollowUser = () => {
    interestUser(item.userId).then(() => {
      deleteInterest(item.userId);
    });
    setInterest(!interest);
  };
  return (
    <div className="border shadow rounded-[20px]">
      <div className="w-full grid content-between items-end h-[33rem] p-6 rounded-[20px] line-clamp-1 break-all">
        <div className="w-full">
          <div className="flex">
            <div className="">
              <img
                src={`${BASE_URL1}/api/v1/images/PROFILE?fileName=${item.profileImage}`}
                className="w-20 h-20 object-cover bg-white rounded-full border-4 border-white xs:w-24 xs:h-24 md:w-30 md:h-30 ring-2 ring-bg_custom"
              />
            </div>
            <div className="mx-5">
              <p className=" text-gray-500 font-bold font-SecondaryFont text-[20px] line-clamp-1">
                {item.fullName}
              </p>
              <div className="mx-1 ">
                <div className=" ">
                  {item.jobType ? (
                    <button className="text-sm text-green_custom font-[600] rounded-3xl font-SecondaryFont">
                      {item.jobType}
                    </button>
                  ) : (
                    <button className="text-sm text-green_custom font-[600] rounded-3xl font-SecondaryFont">
                      Other
                    </button>
                  )}
                </div>
                <div className="my-1">
                  <Link
                    to={`/home/otherprofile/${item.userId}`}
                    className="font-semibold text-xs text-green_custom border font-SecondaryFont border-green_custom px-2 py-1 rounded-3xl"
                  >
                    View profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* contact */}
          <div className="mt-3 font-SecondaryFont">
            <div className="flex border-b-2 border-b-green_custom py-1 ">
              <img src={contact} className="w-8 h-8" alt="" />
              <p className="font-semibold text-green_custom text-[18px] py-1 px-2">
                Contact
              </p>
            </div>
            <div className="flex items-center ml-10 mt-2 py-1">
              <div className="">
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.66723C1 14.2594 7.99555 21.2247 16.625 21.2247H18.9688C20.2632 21.2247 21.3125 20.1799 21.3125 18.8911V17.4685C21.3125 16.933 20.9465 16.4663 20.4248 16.3365L15.8174 15.1896C15.3599 15.0757 14.8785 15.2459 14.5956 15.6215L13.585 16.9632C13.2917 17.3526 12.7844 17.5248 12.3254 17.3573C8.88062 16.1009 6.14599 13.3781 4.88413 9.94829C4.71598 9.49124 4.88892 8.98613 5.28 8.69409L6.62752 7.68781C7.00472 7.40614 7.17564 6.92682 7.06128 6.47138L5.90941 1.88382C5.77899 1.36439 5.31026 1 4.77253 1H3.34375C2.04933 1 1 2.0448 1 3.33362V5.66723Z"
                    stroke="#04AA9C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              {item.phoneNumber ? (
                <p className="text-[16px] font-SecondaryFont px-3">
                  {item.phoneNumber}
                </p>
              ) : (
                <p className="text-[16px] font-SecondaryFont px-3">
                  No phone number
                </p>
              )}
            </div>

            <div className="flex items-center ml-10 py-1">
              <div className="">
                <svg
                  width="23"
                  height="27"
                  viewBox="0 0 23 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3125 3.33362V14.2238C21.3125 15.5126 20.2632 16.5574 18.9688 16.5574H3.34375C2.04933 16.5574 1 15.5126 1 14.2238V3.33362M21.3125 3.33362C21.3125 2.0448 20.2632 1 18.9688 1H3.34375C2.04933 1 1 2.0448 1 3.33362M21.3125 3.33362V3.58535C21.3125 4.39572 20.8903 5.14808 20.1971 5.57279L12.3846 10.3597C11.6313 10.8213 10.6812 10.8213 9.9279 10.3597L2.1154 5.57279C1.42224 5.14808 1 4.39572 1 3.58535V3.33362"
                    stroke="#04AA9C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span className="text-[16px] font-SecondaryFont px-3 line-clamp-1">
                {item.email}
              </span>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex border-b-2 border-b-green_custom py-1">
              <img src={badge} className="w-8 h-8" alt="" />
              <p className="font-semibold  text-green_custom text-[18px] py-1 px-2">
                Skills
              </p>
            </div>
            <div className="flex place-items-center ml-10 mt-2">
              <ul className="leading-2 line-clamp-1 list-none text-[16px] font-SecondaryFont">
                {item.skill ? (
                  Object.entries(item.skill)
                    .slice(0, 1)
                    .map(([key, value]) => (
                      <li key={key} className="line-climp-1">
                        {value}
                      </li>
                    ))
                ) : (
                  <div>
                    <p className="text-[16px] font-SecondaryFont">
                      No Information
                    </p>
                  </div>
                )}
              </ul>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex border-b-2 border-b-green_custom py-1">
              <img src={bg_work} className="w-8 h-8" alt="" />
              <p className="font-semibold text-green_custom text-[18px] py-1 px-2">
                Work Experience
              </p>
            </div>
            <div className="ml-10">
              <ul className="leading-5 w-full  list-none font-semibold pt-2">
                {item.experience ? (
                  Object.entries(item.experience)
                    .slice(0, 1)
                    .map(([key, value]) => (
                      <li
                        key={key}
                        className="py-1 font-medium text-[16px] line-clamp-1"
                      >
                        {key}
                        <ul className="px-7 text-[13px] py-0">
                          {value.slice(0,1).map((val, index) => (
                            <li
                              key={index}
                              className="font-normal leading-5 font-SecondaryFont text-[13px] line-clamp-1"
                            >
                              <span className="bullet"></span>
                              {val.description}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))
                ) : (
                  <div>
                    <p className="text-[16px] font-SecondaryFont">
                      No Information
                    </p>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-5 text-sm mt-6 h-[36px]">
          <button
            className="bg-green_custom text-white rounded-[20px] py-2 text-md w-1/2 flex justify-center items-center"
            onClick={handleFollowUser}
          >
            Interest
          </button>
          <button className="bg-white border border-green_custom text-green_custom rounded-[20px] py-2 w-1/2 flex justify-center items-center">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}
