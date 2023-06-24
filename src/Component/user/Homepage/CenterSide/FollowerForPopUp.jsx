import React from "react";
import { BASE_URL3 } from "../../../../utils/Utils";
import { useState } from "react";
import { Following } from "../../../../Redux/service/Following";
import { useEffect } from "react";
import { ConnectionFollowUser } from "../../../../Redux/service/Follower";
import { useDispatch, useSelector } from "react-redux";
import { setFollowUser } from "../../../../Redux/slices/FollowUser";

export default function FollowerForPopUp({ list, setUpdate }) {
  const [follow, setFollow] = useState(false);
  const user = useSelector((state) => state.followUser.value);
  const dispatch = useDispatch();
  const handleFollow = () => {
    ConnectionFollowUser(list.follower).then();
    setFollow(!follow);
    dispatch(setFollowUser({...user,following:(user.following-(follow?1:-1))}));
    setUpdate((result) => result + 1)
  };

  useEffect(() => {
    Following().then((res) => {
      if (res.data) {
        res.data.payload.map((result) => {
          if (result.id == list?.follower) {
            setFollow(true);
          }
        });
      }
    });
  }, []);

  return (
    <div className="bg-white pb-2 w-[600px] m-auto rounded-[20px]">
      <div className="flex justify-between hover:bg-gray-100 items-center py-4 ">
        <div className="flex gap-2 items-center px-5">
          <img
            src={`${BASE_URL3}` + list.profileImg}
            className="w-12 h-12 object-cover rounded-full"
            alt=""
          />
          <p className="font-SecondaryFont text-[18px] text-black font-semibold mx-4">
            {list.fullName}
          </p>
        </div>
        <div className="px-5">
          <button
            className={
              follow
                ? `border font-semibold font-SecondaryFont bg-green_custom text-white rounded-[20px] px-4 py-1 text-sm`
                : `border font-semibold font-SecondaryFont hover:bg-gray-200 rounded-[20px] px-4 py-1 text-sm`
            }
            onClick={() => handleFollow(setFollow(!follow))}
          >
            {follow ? "Following" : "Follow"}
          </button>
        </div>
      </div>
    </div>
  );
}
