import React, { useState } from "react";
import { ConnectionFollowCompany } from "../../../../../Redux/service/ConnectionPage";
import { Link } from "react-router-dom";
import { BASE_URL3 } from "../../../../../utils/Utils";

export default function CardForOneCompanyCon({ item }) {
  const [followCon, setFollowCon] = useState(false);
  const handleFollowCon = () => {
    ConnectionFollowCompany(item.companyId).then(() => {
      setFollowCon(!followCon);
    });
  };

  return (
    <div className="grid content-between text-black border shadow p-6 rounded-[20px]">
      <div>
        {/* logo */}
        <div className="flex items-center justify-center">
          <Link to={`/home/otherprofilecompany/${item.companyId}`} >
            <img
              src={
                BASE_URL3 + item.profileImage
              }
              className="w-20 h-20 object-cover bg-white rounded-full border-4 border-white xs:w-24 xs:h-24 md:w-30 md:h-30 ring-1 ring-bg_custom"
              alt=""
            />
          </Link>
        </div>
        {/* name skills followers */}
        <div className="text-center">
          <Link to={`/home/otherprofilecompany/${item.companyId}`}>
            <p className="font-medium text-xl font-MainFont my-3">
              {item.companyName ?? ""}
            </p>
          </Link>
          <div className=" text-gray-500">
            <p className="text-xs">{item.companyType ?? ""}</p>
            <p className="text-xs my-2">{item.follower} follower</p>
          </div>
        </div>
      </div>
      {/* follow btn */}
      <div className="flex justify-center items-center mt-3">
        <button
          className="border-2 text-center font-SecondaryFont text-green_custom text-[14px] py-0.5 border-green_custom w-full rounded-[20px]"
          onClick={() => handleFollowCon(item.companyId)}
        >
          {followCon ? "Following" : "Follow"}
        </button>
      </div>
    </div>
  );
}
