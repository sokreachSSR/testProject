import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPopup } from "../../../Redux/slices/PopupSlice";
import { suggestionUserLanding } from "../../../Redux/service/Suggestion";
import { NavLink } from "react-router-dom";
import { ConnectionFollowUser } from "../../../Redux/service/Follower";
import { BASE_URL1 } from "../../../utils/Utils";

export default function SuggestUserLandingCard({ item, key }) {
  const [followUser, setFollowUser] = useState(false);
  const handleFollowUser = () => {
    ConnectionFollowUser(item.userId).then(() => {
    });
    setFollowUser(!followUser);
  };

  const dispatch = useDispatch();
  const role = useSelector((state) => state.userDetail.userDetail.role);

  
  return (
    <div>
      <div className="flex justify-between px-2">
        <div>
        <NavLink to={`/home/otherprofile/${item.userId}`}>
          <img
            // src={StaticImage.Profilelinger}
            src={BASE_URL1 + item.profileImage}
            className="w-12 h-12 object-cover rounded-full "
            alt=""
          />
          </NavLink>
        </div>

        <div className="w-[180px] ml-2">
        <NavLink to={`/home/otherprofile/${item.userId}`}>
          <h1 className="font-semibold line-clamp-1 text-gray-700 text-md">{item.fullName}</h1>
          </NavLink>      
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
