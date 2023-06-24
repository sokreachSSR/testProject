import React, { useEffect, useRef, useState } from "react";
import InputBtn from "../../../othersComponent/InputBtn";
import { StaticImage } from "../../../../utils/StaticImage";
import { useDispatch, useSelector } from "react-redux";
import { setPopup } from "../../../../Redux/slices/PopupSlice";
import { DropShadow } from "../../../../utils/Style";
import { BASE_URL, BASE_URL1 } from "../../../../utils/Utils";


export default function CreatePostHomePage() {
  const dispatch = useDispatch();
  const labelRef = useRef(null);
  
  const handleButtonClick = () => {
    if (labelRef.current) {
      labelRef.current.click();
    }
  };
  const userDetails = useSelector((State) => State.userDetail.userDetail);

  return (
    <div className=" justify-between">
      <div
        className={`${DropShadow} drop-shadow flex gap-4 my-4 px-4 bg-white py-[19px] rounded-[20px] items-center`}
      >
        <img 
        src={
          userDetails.role == "user"
            ? `${BASE_URL1 + userDetails.profileImage}`
            : StaticImage.Company_pro
        } 
        className=" border-2 border-black-100 rounded-full  object-cover w-[45px] h-[45px]" />
        <input
          type="text"
          onClick={handleButtonClick}
          className="dropdown font-SecondaryFont bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] block w-[90%] placeholder:font-normal focus:drop-shadow-xl  focus:outline-none focus:ring-2 focus:ring-green_custom focus:border-transparent"
          placeholder="Create Post"
        />
        <label
          ref={labelRef}
          onClick={() => {
            dispatch(setPopup("createpost"));
          }}
          htmlFor="my-modal"
        ></label>
      </div>
    </div>
  );
}
