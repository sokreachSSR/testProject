import React, { useEffect, useState } from "react";
import { Following } from "../../../../Redux/service/Following";
import { ConnectionFollowUser, Follower } from "../../../../Redux/service/Follower";
import { BASE_URL3 } from "../../../../utils/Utils";
import FollowerForPopUp from "./FollowerForPopUp";
import FollowingForPopUp from "./FollowingForPopUp";

export default function FollowPopup() {
  const [activeTab, setActiveTab] = useState("followers");
  const [following, setFollowing] = useState([]);
  const [follower, setFollower] = useState([]);
  const [update , setUpdate] = useState(1);

  useEffect(() => {
    // map follower
    Follower().then((response) => {
      setFollower(response.data ? response.data.payload : []);
    });
  }, []);

  useEffect(() => {
    // map following
    Following().then((res) => {
      setFollowing(res.data ? res.data.payload : []);
    });
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="rounded-[20px] w-[600px] h-96 m-auto bg-white font-MainFont shadow-md overflow-y-scroll overflow-x-hidden scrollbar">
        <div className="border-b border-gray-400 sticky top-0 bg-white py-3">
          <div className="mx-4 flex justify-around text-lg font-semibold font-MainFont py-3">
            <div>
              <button
                className={
                  activeTab === "followers" ? "font-bold text-green_custom border-b-2 border-green_custom" : ""
                }
                onClick={() => handleTabChange("followers")}
              >
                Follower
              </button>
            </div>
            <div>
              <button
                className={
                  activeTab === "following" ? "font-bold text-green_custom border-b-2 border-green_custom" : ""
                }
                onClick={() => handleTabChange("following")}
              >
                Following
              </button>
            </div>
          </div>
        </div>
        <div className={activeTab === "followers" ? "" : "hidden"}>
          {/* map follower */}
          <div>
            {follower.map((list) => (
              <FollowerForPopUp list={list} setUpdate={setUpdate} />
            ))}
          </div>
        </div>
        <div className={activeTab === "following" ? "" : "hidden"}>
          {/* map following */}
          <div>
            {following.map((item) => (
              <FollowingForPopUp item={item} setUpdate={setUpdate} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}