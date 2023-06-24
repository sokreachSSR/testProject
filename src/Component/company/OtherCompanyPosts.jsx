import React, { useEffect, useState } from "react";
import { GetPostUserProfile, getCompanyPost, getPostById } from "../../Redux/service/Post";
import { useParams } from "react-router-dom";
import InfiniteScrollV4 from "../othersComponent/InfiniteScrollV4";
import SavePostCardV1 from "../user/Homepage/CenterSide/SavePostCardV1";
import NewPostComponentV1 from "../user/Homepage/CenterSide/NewPostComponentV1";
import InfiniteScrollV5 from "../othersComponent/InfiniteScrollV5";

export default function OtherCompanyPosts() {
  const [getData, setGetData] = useState([]);
  const { id } = useParams();  
  const [data, setData] = useState(null);

  useEffect(() => {
    GetPostUserProfile().then((res) => {
      // console.log(res.data.payload)
      setGetData(res.data.payload);
    });
  }, []);

  return (
    <div>
      <div className="bg-white font-MainFont shadow-md border m-auto my-3 rounded-[20px] px-10 py-3">
        <div className="flex justify-between items-center pb-4">
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
        <InfiniteScrollV5
        linkAPI={getCompanyPost}
        id={id}
        linkComponent={NewPostComponentV1}
      />
      </div>
    </div>
  );
}
