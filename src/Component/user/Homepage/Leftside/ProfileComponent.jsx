import React from "react";
import linger from "../../../../assets/Profilelinger.jpg";
import pin from "../../../../assets/pin.png";
import job from "../../../../assets/suitcase.png";


export default function ProfileComponent() {
  return (
    <div className="w-[100px] md:w-[325px]">
      <div className="bg-white h-[70px] xl:w-full lg:w-full py-2 px-5 text-black flex items-center border drop-shadow-md rounded-3xl">
        <div lassName=" border border-black-100 w-11 rounded-full">
          <img
            src={linger}
            className="w-[50px] text-[20px] border rounded-full"
            alt=""
          />
        </div>
        <div className="ml-5">
          <p className="font-bold xl:text-sm lg:text-base hidden md:flex">
            Nhom Linger
          </p>
          <div className=" items-center xl:flex hidden lg:flex">
            <img src={job} className="w-[12px]" alt="" />
            <p className="ml-2 text-gray-400 text-xs">Project Manager</p>
          </div>
          <div className=" items-center xl:flex hidden lg:flex">
            <img src={pin} className="w-[12px]" alt="" />
            <p className="ml-2 text-gray-400 text-xs ">Phnom Penh, Cambodia</p>
          </div>
        </div>
      </div>
    </div>
  );
}
