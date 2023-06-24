import React, { useContext, useEffect, useState } from "react";
import UserProfile_Post from "../UserProfile_Post";
import {
  GetPostUserProfile,
  GetPostUserProfileGetPost,
  getPostById,
} from "../../../../../Redux/service/Post";
import { contextType } from "google-map-react";
import InfiniteScrollV5 from "../../../../othersComponent/InfiniteScrollV5";
import NewPostComponentV1 from "../NewPostComponentV1";
import PropValueContext from "../../../../../utils/context";
import { da } from "date-fns/locale";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import InfiniteScrollV2 from "../../../../othersComponent/InfiniteScrollV2";
import InfiniteScrollV1 from "../../../../othersComponent/InfiniteScrollV1";
import InfiniteScrollV4 from "../../../../othersComponent/InfiniteScrollV4";
import NewPostComponentInUserPro from "../NewPostComponentInUserPro";
import InfiniteScrollVForUserPost from "../../../../othersComponent/InfiniteScrollVForUserPost";

export default function PostsUserPro() {
  const postData = useSelector((state)=>state.postSlide.post)
  console.log(postData,"test")
  const id = useSelector((selector) => selector.userDetail);
  console.log("objectId", id);
  const [getData, setGetData] = useState([]);
  useEffect(() => {
    GetPostUserProfile().then((res) => {
      console.log(res.data.payload);
      setGetData(res.data.payload);
    });
  }, []);

  return (
    <div className="pb-20">
      <div className="bg-white font-MainFont shadow border m-auto my-3 rounded-[20px] px-10 py-3">
        <div className="flex justify-between items-center ">
          <p className="font-bold text-2xl text-center font-MainFont text-gray-500">
            Posts
          </p>
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
      </div>
      <InfiniteScrollVForUserPost
          linkAPI={GetPostUserProfileGetPost}
          linkComponent={NewPostComponentInUserPro}
        />
    </div>
  );
}