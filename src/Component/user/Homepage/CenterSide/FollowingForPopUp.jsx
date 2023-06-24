import React from "react";
import { BASE_URL3 } from "../../../../utils/Utils";
import { useState } from "react";
import { ConnectionFollowUser } from "../../../../Redux/service/Follower";
import { ConnectionFollowCompany } from "../../../../Redux/service/ConnectionPage";
import { useDispatch, useSelector } from "react-redux";
import { setFollowUser } from "../../../../Redux/slices/FollowUser";

export default function FollowingForPopUp({ item, setUpdate }) {
  const [following, setFollowing] = useState(false);
  const user = useSelector((state) => state.followUser.value);
  const dispatch = useDispatch();
  const handleFollowing = () => {
    ConnectionFollowUser(item.id).then();
    ConnectionFollowCompany(item.id).then();
    setFollowing(!following)
    dispatch(setFollowUser({...user,following:(user.following + (following ? 1 : -1))}));
    setUpdate((result) => result + 1)
  };
  return (
    <div className="bg-white pb-2 w-[600px] m-auto rounded-[20px]">
      <div className="flex justify-between hover:bg-gray-100 items-center py-4 ">
        <div className="flex gap-2 items-center px-5">
          <img
            src={`${BASE_URL3}` + item.profileImg}
            className="w-12 h-12 object-cover rounded-full"
            alt=""
          />
          <p className="font-SecondaryFont text-[18px] text-black font-semibold mx-4">
            {item.name}
          </p>
        </div>
        <div className="px-5">
          <button
            className={
              following
                ? `border font-semibold font-SecondaryFont hover:bg-gray-200 rounded-[20px] px-4 py-1 text-sm`
                : `border font-semibold font-SecondaryFont bg-green_custom text-white rounded-[20px] px-4 py-1 text-sm`
            }
            onClick={handleFollowing}
          >
            {following ? "Follow" : "Following"}
          </button>
        </div>
      </div>
    </div>
  );
}
