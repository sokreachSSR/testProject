import React, { useState } from "react";
import { DropShadow } from "../../../../../utils/Style";
import NewpostOption from "../NewpostOption";
import list from "../../../../../assets/....svg";
import picture from "../../../../../assets/picture.png";
import UserProfileName from "../../../UserProfileName";
import { StaticImage } from "../../../../../utils/StaticImage";
import InfiniteScrollV5 from "../../../../othersComponent/InfiniteScrollV5";
import { useParams } from "react-router-dom";
import { getCompanyPost, getPostByCompany } from "../../../../../Redux/service/Post";
import NewPostComponentV1 from "../NewPostComponentV1";
import InfiniteScrollV2 from "../../../../othersComponent/InfiniteScrollV2";
import UserProfile_Post from "../UserProfile_Post";
import NewPostComponentInUserPro from "../NewPostComponentInUserPro";
import InfiniteScrollVForUserPost from "../../../../othersComponent/InfiniteScrollVForUserPost";

export default function PostsCompany() {
  const { id } = useParams();  
  const [posts, setPosts] = useState([]);

  // const [likeProfile, setLikeProfile] = useState(false)
  // const handleLikeProfile = () => {
  //   setLikeProfile(!likeProfile)
  // } 
  // useEffect(() => {
  //   GetPostUserProfile().then((res) => {
  //     // console.log(res.data.payload)
  //     setGetData(res.data.payload);
  //   });
  // }, []);

  return (
    <div className={`p-6 mt-5 bg-white drop-shadow border-gray-300 rounded-[20px]`}>
      <div className={`border bg-white w-full h-auto rounded-[20px] p-5`}>
      <div className="flex justify-between items-center">
        <p className="font-bold text-xl font-MainFont">Posts</p>
        {/* <select className="rounded-[20px] border border-gray-300 mt-3">
          <optgroup label="Choose the date">
            <option value="all">
              <input
                type="radio"
                name="companyType"
                id="all"
                value="all"
                checked
              />
              <label htmlFor="lastday">
                <span className="icon">⚪</span> All
              </label>
            </option>
            <option value="technology">
              <label htmlFor="lastweek">
                <span className="icon">⚪</span> Last week
              </label>
            </option>
            <option value="last15days">
              <label htmlFor="last15days">
                <span className="icon">⚪</span> Last 15 days
              </label>
            </option>
          </optgroup>
        </select> */}
      </div>
      {posts !== null ? (
          <InfiniteScrollVForUserPost
            linkAPI={getPostByCompany}
            linkComponent={NewPostComponentInUserPro}
          />
        ) : (
          <div className="flex justify-center text-lg font-semibold items-center w-full h-full text-black text-center p-20 pt-36">
          No Data Available
        </div> 
        )}
        </div>
      </div>
  );
}
