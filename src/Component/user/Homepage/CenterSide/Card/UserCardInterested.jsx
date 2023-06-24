import React, { useContext, useEffect, useState } from "react";
import picture from "../../../../../assets/picture.png";
import contact from "../../../../../assets/contact.svg";
import bg_work from "../../../../../assets/bg-work.svg";
import badge from "../../../../../assets/badge.svg";
import call from "../../../../../assets/call.svg";
import email from "../../../../../assets/email.svg";
import { ConnectionUser } from "../../../../../Redux/service/ConnectionUser";
import { Link } from "react-router-dom";
import {
  interestUser,
  interestUserForCompany,
} from "../../../../../Redux/service/Interest";
import PropValueContext from "../../../../../utils/context";
import { BASE_URL1 } from "../../../../../utils/Utils";

export default function UserCardInterested({ prop }) {
  // const [conUser, setConUser] = useState([]);
  // useEffect(() => {
  //   ConnectionUser().then((response) => {
  //     if (response.data) setConUser(response.data.payload);
  //   });
  // }, []);
  const [interestedUser, setInterestedUser] = useState([]);
  const [temData, setTemData] = useState([]);

  useEffect(() => {
    interestUserForCompany().then((response) => {
      if (response.data) {
        setInterestedUser(response.data.payload);
        prop(response.data.payload);
        setTemData(response.data.payload);
      }
    });
  }, []);
  console.log(interestedUser.length, "interestedUser");

  // const [interest, setInterest] = useState(false);

  const handleFollowUser = (id) => {
    interestUser(id).then((res) => {
      setInterestedUser(interestedUser.filter((item) => item.userId !== id));
    });
  };

  const filterCard = useContext(PropValueContext);
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
  useEffect(() => {
    if (filterCard == "all") setInterestedUser(temData);
    else
      setInterestedUser(temData.filter((item) => item.jobType == filterCard));
  }, [filterCard]);
  return (
    <div>
      {interestedUser.length > 0 ? (
        <div className="grid grid-cols-1 2md:grid-cols-2 gap-6 ">
          {interestedUser.map((item) => (
            <div className="grid border p-5 shadow rounded-[20px] content-between">
              <div className="w-full">
                <div className="flex">
                  <div>
                    <img
                      src={BASE_URL1 + item.profileImage}
                      className="w-28 h-28 rounded-full border-4 object-cover"
                      alt=""
                    />
                  </div>
                  <div className="mx-5">
                    <p className="text-gray-500 font-bold font-SecondaryFont text-[20px] line-clamp-1">
                      {item.fullname}
                    </p>
                    <div className="mx-1 ">
                      <div className=" ">
                        {item.jobType ? (
                          <button className="text-sm text-green_custom font-[600] rounded-3xl font-SecondaryFont">
                            {jobTypeMapping[item.jobType]}
                          </button>
                        ) : (
                          <button className="text-sm text-green_custom font-[600] rounded-3xl font-SecondaryFont">
                            Other
                          </button>
                        )}
                      </div>
                      <div className="my-1">
                        <Link to={`/home/otherprofile/${item.userId}`}>
                          <button className="font-semibold text-xs text-green_custom border font-SecondaryFont border-green_custom px-2 py-1 rounded-3xl">
                            View profile
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
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
                        No phione number
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
                            <li key={key} className="line-clamp-1">
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
                    <ul className="leading-5 w-full  line-clamp-1 list-none font-semibold pt-2">
                      {item.experience &&
                        Object.entries(item.experience)
                          .slice(0, 1)
                          .map(([key, value]) => (
                            <li
                              key={key}
                              className="py-1 font-medium text-[16px] line-clamp-1"
                            >
                              {key}
                              <ul className=" px-7 line-clamp-1 text-[13px] py-0">
                                {value.slice(0, 1).map((val, key) => (
                                  <li className=" font-normal leading-5 font-SecondaryFont text-[13px] line-clamp-1">
                                    <span className="bullet"></span>
                                    {val.description}
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                    </ul>
                  </div>
                </div>
              </div>
              {/* btns */}
              <div className="flex justify-center gap-5 text-sm mt-6 h-[36px] font-SecondaryFont">
                <button
                  className="bg-red-500 text-white rounded-[20px] py-2 text-md w-1/2 flex justify-center items-center"
                  onClick={() => handleFollowUser(item.userId)}
                >
                  {/* {interest ? "Interested" : "Interest"} */}
                  Remove
                </button>
                <button className="bg-white border border-green_custom text-green_custom rounded-[20px] py-2 w-1/2 flex justify-center items-center">
                  Message
                </button>
              </div>
            </div>
          ))}
          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal">
            <div className="h-auto">
              <div className="flex justify-center items-center"></div>
              <div className="w-full h-10 flex justify-center items-center mt-10">
                <h3 className="font-semibold text-3xl">
                  Are you sure to Cancel?
                </h3>
              </div>
              <div className="flex justify-center w-42">
                <p className="py-4 text-xl">
                  Do you really want to cancel this request?
                </p>
              </div>
              <div className="modal-action flex justify-center">
                <label
                  htmlFor="my-modal-6"
                  className="btn  w-28 bg-red-500 border-0 capitalize hover:bg-red-700 rounded-3xl"
                >
                  Yes, sure!
                </label>
                <label
                  htmlFor="my-modal-6"
                  className="btn w-28 bg-gray-500 hover:bg-gray-700 border-0 capitalize rounded-3xl"
                >
                  Cancel
                </label>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full text-green_custom font-bold text-sm text-center">
          No Data Available
        </div>
      )}
    </div>
  );
}
