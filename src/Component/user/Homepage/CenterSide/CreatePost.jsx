import React, { useRef, useState } from "react";
import InputBtn from "../../../othersComponent/InputBtn";
import { StaticImage } from "../../../../utils/StaticImage";
import { useDispatch, useSelector } from "react-redux";
import { setPopup } from "../../../../Redux/slices/PopupSlice";
import { DropShadow } from "../../../../utils/Style";
import ring from "../../../../assets/ring.svg";
import AddAnouncement from "../../../company/AddAnouncement";
import { BASE_URL1 } from "../../../../utils/Utils";

export default function CreatePost() {
  const dispatch = useDispatch();
  const labelRef = useRef();

  const handleButtonClick = () => {
    if (labelRef.current) {
      labelRef.current.click();
    }
  };
  const userDetails = useSelector((State) => State.userDetail.userDetail);
  const companyDetail = useSelector(
    (state) => state.companyDetail.company_detail
  );
  return (
    <div>
      <div>
        <div
          className={`${DropShadow} flex my-1 bg-white p-5 m-auto rounded-[20px]`}
        >
          <div className="w-[75px]">
            <img
              src={userDetails.role == "user" ? `${BASE_URL1+userDetails.profileImage}` : `${BASE_URL1}/api/v1/images/PROFILE?fileName=${companyDetail.companyProfile}`
              }
              className="rounded-full object-cover w-[50px] h-[50px]"
            />
          </div>
          {/* post input */}
          <input
            type="text"
            onClick={handleButtonClick}
            className="w-full dropdown font-SecondaryFont bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] placeholder:font-normal focus:drop-shadow  focus:outline-none focus:ring-2 focus:ring-green_custom focus:border-transparent block px-6 "
            placeholder="Create Post"
          />
          <label
            ref={labelRef}
            onClick={() => {
              dispatch(setPopup("createpost"));
            }}
            htmlFor="my-modal"
          ></label>
          {/* annoucement post */}
          <label
            htmlFor="my-modal-annoucement"
            className="rounded-full w-[75px] flex justify-end"
          >
            <img src={ring} alt="w-[50px] h-[50px]" />
          </label>
        </div>
      </div>
      <div className="absolute">
        <AddAnouncement />
      </div>
    </div>
  );
}
