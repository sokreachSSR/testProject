import UserProfile_Post from "../UserProfile_Post";
import {
  GetPostUserProfile,
  getPostById,
} from "../../../../../Redux/service/Post";
import { contextType } from "google-map-react";
import InfiniteScrollV5 from "../../../../othersComponent/InfiniteScrollV5";
import NewPostComponentV1 from "../NewPostComponentV1";
import PropValueContext from "../../../../../utils/context";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

export default function PostOtherUserPro() {
  const { id } = useParams();
  
  return (
    <div className="bg-white mt-4 shadow-md border rounded-[20px]">
      <div className="w-full font-MainFont m-auto my-3  px-10 py-3">
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
          linkAPI={getPostById}   
          id={id}
          linkComponent={NewPostComponentV1}
        />
      
      </div>
    </div>
  );
}