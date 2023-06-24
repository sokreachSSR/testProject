import React from "react";
import SearchComponent from "../../../othersComponent/SearchComponent";
import { HiOutlineExclamationCircle } from "react-icons/hi";

import filter_letter from "../../../../assets/filter-letter.svg";
import binance_pro from "../../../../assets/binance_pro1.png";
import binance_cover from "../../../../assets/binance_cv.jpg";
import phone_call from "../../../../assets/phone_call.svg";
import email from "../../../../assets/email.svg";
import founded from "../../../../assets/founded.svg";
import description from "../../../../assets/description.svg";
import address from "../../../../assets/address.svg";
import google_map from "../../../../assets/map.svg";
import dropdown from "../../../../assets/dropdown.svg";
// status svg
import reject_status from "../../../../assets/reject_status.svg";
import approved_status from "../../../../assets/approved_status.svg";
import approved_df from "../../../../assets/approved_df.svg";
import completed_status from "../../../../assets/completed_status.svg";
import completed_df from "../../../../assets/completed_df.svg";
import progress_status from "../../../../assets/progress_status.svg";
import progress_df from "../../../../assets/progress_df.svg";
import pending_status from "../../../../assets/pending_status.svg";
import trash from "../../../../assets/trash.svg";
import { BASE_URL1, BASE_URL2 } from "../../../../utils/Utils";
export default function RequestListCompanyCard({ item, index, getDeleteId }) {
  console.log(item, "sssdfasdf");
  const apiDateTime = item.date;

// Convert the API date and time string to a Date object
const dateTime = new Date(apiDateTime);

// Format the date and time
const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
const formattedDateTime = dateTime.toLocaleString('en-US', options);
  return (
    <div>
      <div className="font-SecondaryFont justify-between">
        <div className="border p-6 shadow-md rounded-[20px]">
          <div className="">
            <div className="relative">
              <img
                src={`${BASE_URL1}/api/v1/images/PROFILE?fileName=${item.coverImg}`}
                className="w-full rounded-t-[20px] object-cover max-h-[500px] xl:h-[230px] 2xl:h-[250px]"
              />
            </div>
            {/* logo and name */}
            <div className="mt-3 flex items-center">
              <img
                src={`${BASE_URL1}/api/v1/images/PROFILE?fileName=${item.profileImg}`}
                className="w-20 h-20 mr-4 rounded-full border-2 ring-2 ring-light_gray_custom self-start"
              />
              <div>
                <p className="w-full font-semibold font-MainFont line-clamp-1 text-2xl text-gray-800 mb-2">
                  {item.companyName}
                  {/* <div className="flex place-items-center">
                    <p className="text-xs font-SecondaryFont font-normal">
                    {item.companyName}
                    </p>
                  </div>
                  <div className="flex place-items-center">
                    <p className="text-xs font-SecondaryFont font-normal">
                    {item.companyName}
                    </p>
                  </div> */}
                </p>
                <button className="text-sm bg-light_green_custom py-2 px-3 text-green_custom font-[600] rounded-3xl font-SecondaryFont">
                  {item.companyType}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 font-SecondaryFont"></div>
          <div className="mt-5 ">
            <div className="flex place-items-center ml-10 my-2">
              <div className="w-7 h-7 flex-shrink-0">
                <img src={address} alt="" />
              </div>
              {item.address ? (
                <p className="text-[16px] font-SecondaryFont font-normal px-2 line-clamp-1">
                  {item.address}
                </p>
              ) : (
                <p className="text-[16px] text-gray-400 font-SecondaryFont font-normal px-2 line-clamp-1">
                  No address
                </p>
              )}
            </div>

            <div className="flex place-items-center ml-10 my-2">
              <div className="w-7 h-7 flex-shrink-0">
                <img src={description} alt="" />
              </div>
              {item.description ? (
                <p className="text-[16px] font-SecondaryFont font-normal px-2 line-clamp-1">
                  {item.description}
                </p>
              ) : (
                <p className="text-[16px] text-gray-400 font-SecondaryFont font-normal px-2 line-clamp-1">
                  No description
                </p>
              )}
            </div>
          </div>
          {/* Approval process */}
          <p className="font-bold text-lg text-gray-800 text-[20px] px-2 py-2">
            Approval process
          </p>
          <div className="flex flex-wrap">
            <img
              className="w-24 my-2"
              style={
                item.referenceStatus === "pending"
                  ? {}
                  : { filter: "grayscale(100%)" }
              }
              src={pending_status}
              alt=""
            />
            <img
              className="w-24 my-2"
              style={
                item.referenceStatus === "approve"
                  ? {}
                  : { filter: "grayscale(100%)" }
              }
              src={approved_status}
              alt=""
            />
            <img
              className="w-24 my-2"
              style={
                item.referenceStatus === "progress"
                  ? {}
                  : { filter: "grayscale(100%)" }
              }
              src={progress_status}
              alt=""
            />
            <img
              className="w-24 my-2"
              style={
                item.referenceStatus === "completed"
                  ? {}
                  : { filter: "grayscale(100%)" }
              }
              src={completed_status}
              alt=""
            />
          </div>

          {/* cancel */}
          <div className="flex justify-between">
            <p className="font-bold text-lg text-black  px-2 mt-2">Cancel</p>
            <p className="font-bold text-sm text-green_custom px-2 mt-2">
            {formattedDateTime}
            </p>
          </div>
          <p className="font-normal text-sm text-gray-400  px-2">
            You can click button remove to cancel the requested
          </p>

          {/* button */}
          {/* The button to open modal */}
          <label
            onClick={() => {
              getDeleteId(item.referenceId);
            }}
            htmlFor="my-modal"
            className="btn w-full rounded-full mt-2 text-red-500 bg-white border-2 capitalize border-red-500 hover:bg-red-100 hover:border-red-500"
          >
            Remove request
            <img className="ml-2" src={trash} alt="" />
          </label>
        </div>
      </div>
    </div>
  );
}
