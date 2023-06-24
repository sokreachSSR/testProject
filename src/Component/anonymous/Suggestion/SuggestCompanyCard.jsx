import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPopup } from "../../../../src/Redux/slices/PopupSlice";
import { ConnectionFollowCompany } from "../../../Redux/service/ConnectionPage";
import { BASE_URL3 } from "../../../utils/Utils";
import { Link } from "react-router-dom";

export default function SuggestCompanyCard({ item, key }) {
  const [followCompany, setFollowCompany] = useState(false);

  const handleFollowCompany = () => {
    ConnectionFollowCompany(item.companyId).then(() => {
    });
    setFollowCompany(!followCompany);
  };

  const dispatch = useDispatch();
  const role = useSelector((state) => state.userDetail.userDetail.role);
  return (
    <div>
      <div className="flex justify-between px-2">
        {role !== "annonymous" ? (
          <Link to={`/home/otherprofilecompany/${item.companyId}`}>
            <img
              // src={StaticImage.Profilelinger}
              src={BASE_URL3 + item.profileImage}
              className="w-12 h-12 object-cover rounded-full "
              alt=""
            />
          </Link>
        ) : (
          <label
            type="button"
            onClick={() => dispatch(setPopup("login"))}
            htmlFor="my-modal"
            className="cursor-pointer"
          >
            <img
              // src={StaticImage.Profilelinger}
              src={BASE_URL3 + item.profileImage}
              className="w-12 h-12 object-cover rounded-full "
              alt=""
            />
          </label>
        )}

        <div className="w-[180px] ml-2">
          {role !== "annonymous" ? (
            <Link to={`/home/otherprofilecompany/${item.companyId}`}>
              <h1 className="font-semibold line-clamp-1 cursor-pointer text-gray-700 text-md">{item.companyName}</h1>
            </Link>
          ) : (
            <label
            type="button"
            onClick={() => dispatch(setPopup("login"))}
            htmlFor="my-modal"
            className="cursor-pointer"
            >
              <h1 className="font-semibold line-clamp-1 cursor-pointer text-gray-700 text-md">{item.companyName}</h1>
            </label>
          )}
          <p className="text-xs line-clamp-2 text-gray-500">{item.companyType}</p>
          <p className="text-xs line-clamp-1 text-gray-400">
            {item.follower} People follow our company
          </p>
          {role === "annonymous" ? (
            <label
              type="button"
              onClick={() => dispatch(setPopup("login"))}
              htmlFor="my-modal"
              className="border-2 my-1 border-gray-500 text-gray-500 text-sm text-center py-0.5 rounded-full w-24 cursor-pointer"
            >
              {followCompany ? "Following" : "Follow"}
            </label>
          ) : (
            <button
              className="border-2 my-1 border-gray-500 text-gray-500 text-sm text-center py-0.5 rounded-full w-24 cursor-pointer"
              onClick={handleFollowCompany}
            >
              {followCompany ? "Following" : "Follow"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
