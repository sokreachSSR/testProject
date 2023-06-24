import React, { useEffect, useState } from "react";
import pic from "../../../../assets/picture.png";
import { Following } from "../../../../Redux/service/Following";
import { Follower } from "../../../../Redux/service/Follower";
import { BASE_URL1 } from "../../../../utils/Utils";

export default function FollowingCom() {
  const [following, setFollowing] = useState([]);
  const [follower, setFollower] = useState([]);

  useEffect(() => {
    Following().then((response) => {
      setFollowing(response.data ? response.data.payload : []);
    });
    // Follower().then((response) => {
    //   setFollower(response.data ? response.data.payload : []);
    // });
  }, []); 


  return (
    <div>
      {/* map following */}
      {following.map((item) => (
       
        <div className="bg-white pb-2 w-[600px] m-auto rounded-[20px]">
          <div className="flex justify-between hover:bg-gray-100 items-center py-4 ">
            <div className="flex gap-2 items-center px-5">
              <img
                src={`${BASE_URL1+item.profileImg}`}
                className="w-12 h-12 rounded-full"
                alt=""
              />
              <p className="font-SecondaryFont text-[18px] text-black font-semibold mx-4">
                {item.name}
              </p>
            </div>
            <div className="px-5">
              <button className="border font-semibold font-SecondaryFont hover:bg-gray-200  rounded-[20px] px-4 py-1 text-sm">
                Follower
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* map follower */}
      {follower.map((item) => (
        <div className="bg-white pb-2 w-[600px] m-auto rounded-[20px] hidden">
          <div className="flex justify-between hover:bg-gray-100 items-center py-4 ">
            <div className="flex gap-2 items-center px-5">
              <img
                src={`${BASE_URL1+item.profileImg}`}
                className="w-12 h-12 rounded-full"
                alt=""
              />
              <p className="font-SecondaryFont text-[18px] text-black font-semibold mx-4">
                {item.name}
              </p>
            </div>
            <div className="px-5">
              <button className="border font-semibold font-SecondaryFont hover:bg-gray-200  rounded-[20px] px-4 py-1 text-sm">
                Following
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
