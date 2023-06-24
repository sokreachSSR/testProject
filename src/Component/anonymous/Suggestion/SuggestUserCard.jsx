import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPopup } from "../../../Redux/slices/PopupSlice";
import { NavLink } from "react-router-dom";
import { BASE_URL1 } from "../../../utils/Utils";

export default function SuggestUserCard({ item, key }) {
  const [followUser, setFollowUser] = useState(false);

  const handleFollowUser = () => {
    setFollowUser(!followUser);
  };

  const [followUser1, setFollowUser1] = useState(false);

  const handleFollowUser1 = () => {
    setFollowUser1(!followUser1);
  };
  const dispatch = useDispatch();
  const role = useSelector((state) => state.userDetail.userDetail.role);

  return (
    <div>
      <div className="flex justify-between px-2">
        {role !== "annonymous" ? (
          <div>
            <NavLink to={`/home/otherprofile/${item.userId}`}>
              <img
                src={BASE_URL1 + item.profileImage}
                className="w-12  h-12 object-cover rounded-full "
                alt=""
              />
            </NavLink>
          </div>
        ) : (
          <label
            htmlFor="my-modal"
            onClick={() => dispatch(setPopup("login"))}
          >
            <img
              src={BASE_URL1 + item.profileImage}
              className="w-12 h-12 object-cover rounded-full cursor-pointer"
              alt=""
            />
          </label>
        )}

        <div className="w-[180px] ml-2">
          {role === "annonymous" ? (
            <label
              htmlFor="my-modal"
              onClick={() => dispatch(setPopup("login"))}
            >
              <h1 className="font-semibold line-clamp-1 cursor-pointer">
                {item.fullName}
              </h1>
            </label>
          ) : (
            <NavLink to={`/home/otherprofile/${item.userId}`}>
              <h1 className="font-semibold line-clamp-1 cursor-pointer text-md text-gray-700">
                {item.fullName}
              </h1>
            </NavLink>
          )}
          <p className="text-xs line-clamp-1 text-gray-400">{item.jobType}</p>
          <p className="text-xs line-clamp-1 text-gray-400">{item.description}</p>
          {role === "annonymous" ? (
            <label
              type="button"
              onClick={() => dispatch(setPopup("login"))}
              htmlFor="my-modal"
              className="border-2 my-1 border-gray-500 text-gray-500 text-sm text-center py-0.5 rounded-full w-24 cursor-pointer"
            >
              {followUser ? "Following" : "Follow"}
            </label>
          ) : (
            <button
              className="border-2 my-1 border-gray-500 text-gray-500 text-sm text-center py-0.5 rounded-full w-24 cursor-pointer"
              onClick={handleFollowUser}
            >
              {followUser ? "Following" : "Follow"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
