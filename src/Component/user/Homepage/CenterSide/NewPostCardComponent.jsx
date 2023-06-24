import React, { useEffect, useState } from "react";
import NewpostOption from "./NewpostOption";
import { DropShadow } from "../../../../utils/Style";
import { sendNotification } from "../../../../Redux/service/Notification";
import { formatDistanceToNow } from "date-fns";
import { useSelector } from "react-redux";
import { getLikeNumber, isLike, likeDisLikePost } from "../../../../Redux/service/PostInteractService";
import { NavLink } from "react-router-dom";
import { BASE_URL1 } from "../../../../utils/Utils";

export default function NewPostCardComponent({ item, index }) {
  const [saveHomepage, setSaveHomePage] = useState(true);
  const handleSaveHomePage = () => {
    setSaveHomePage(!saveHomepage);
  };

  const [likeHomePage, setLikeHomePage] = useState(false);
  const [likeNumber, setLikeNumber] = useState({index : item.postInteract.Like_count});
  
  useEffect(() => {
    // set isLike
    isLike(item.postId).then((result) => {
      if(result.data.payload){
        setLikeHomePage(result.data.payload);
      }else{
        setLikeHomePage(false);
      }
    });
  });

  const handleLikeHomePage = () => {
    // send notification
    sendNotification();

    //set is like state
    setLikeHomePage(!likeHomePage);

    // like and disLike handler sections
    likeDisLikePost(item.postId)
    .then((result) => {
      if(result){
        if(result.data.payload === "Like Successfully"){
          getLikeNumber(item.postId).then((res) =>{
            if(res){
              setLikeNumber({...likeNumber, index : res.data.payload})
            }
          });
        }else if(result.data.payload === "Dislike Successfully"){
          getLikeNumber(item.postId).then((res) =>{
            if(res){
              setLikeNumber({...likeNumber, index : res.data.payload})
            }
          });
        }
      }
    });
  };

  const getTimeDifference = (timestamp) => {
    const currentTime = new Date();
    const postTime = new Date(timestamp);
    return formatDistanceToNow(postTime, { addSuffix: true });
  };

  // handle see more
  const [expanded, setExpanded] = useState(false);
  const handleToggleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength);
  };

  const renderContent = () => {
    if (expanded) {
      return item.title; // Render the full content if expanded
    } else {
      return truncateText(item.title, 150); // Truncate the content to 100 characters
    }
  };

  const renderSeeMoreLink = () => {
    if (item.title.length > 150) {
      // Customize the threshold as per your requirements
      return (
        <button onClick={handleToggleExpansion} className=" text-green_custom ">
          {expanded ? " ...See Less" : " ...See More"}
        </button>
      );
    }
    return null;
  };

  const userDetail = useSelector((State) => State.userDetail.userDetail);

  return (
    <div className="mb-2" key={index}>
      <div className={`${DropShadow} bg-white w-full py-4 rounded-[20px] px-5`}>
        <div className="flex justify-between items-center">
          <div className="flex justify-between ">
            <img
              src={`${
                item.company
                  ? BASE_URL1 + item.user.companyProfile
                  : BASE_URL1 + item.user.user_profile
              }`}
              // src={dafualt_profile}
              className="w-[50px] object-cover h-[50px] rounded-full "
              alt=""
            />
            <div className="ml-3 font-semibold">
              <NavLink
              to="/profile">
              {item.company
                ? item.user.companyName
                  ? item.user.companyName
                  : "Unkown"
                : item.user.username
                ? item.user.username
                : "Unkown"}
              </NavLink>
              <div className="flex items-center">
                <span className="text-gray-400 pr-2">
                  {getTimeDifference(item.time)}
                </span>
                <NewpostOption></NewpostOption>
              </div>
            </div>
          </div>

          <button type="button" className="" onClick={handleSaveHomePage}>
            <svg
              width="35"
              height="43"
              viewBox="0 0 35 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.3366 10.3778C14.0307 10.1282 15.7537 10 17.5 10C19.2463 10 20.9693 10.1282 22.6634 10.3778C24.0247 10.5783 25 12.0622 25 13.7581V31.6346C25 31.9345 24.8776 32.2131 24.6766 32.3708C24.4756 32.5284 24.2246 32.5428 24.0133 32.4086L17.5 28.2752L10.9867 32.4086C10.7754 32.5428 10.5244 32.5284 10.3234 32.3708C10.1224 32.2131 10 31.9345 10 31.6346V13.7581C10 12.0622 10.9753 10.5783 12.3366 10.3778Z"
                fill={saveHomepage ? "none" : "#04AA9C"}
                stroke={saveHomepage ? "#5D6D79" : "#04AA9C"}
                stroke-width="2"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="py-3">
          <p className={`leading-tight whitespace-pre-wrap text-gray-500`}>
            {renderContent()}<span className="">&nbsp;{renderSeeMoreLink()}</span>
          </p>
        </div>
        <div className="flex  justify-center">
          <img
            src={`${BASE_URL1} + item.postImage`}
            alt=""
            className="w-[720px] rounded-[20px]"
          />
        </div>
        <div className=" font-SecondaryFont flex justify-between mb-1 mt-3">
          <div>
            <span>{likeNumber['index']} </span>
            <span>Likes</span>
          </div>
          <div>
            <span>{item.postInteract.Comment_count} </span>
            <span>Comment</span>
          </div>
        </div>
        <div className="flex font-SecondaryFont justify-around border-b-2 border-t-2">
          <div
            className="flex items-center cursor-pointer"
            onClick={handleLikeHomePage}
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.25 20.3125C36.25 17.2059 33.6267 14.6875 30.3906 14.6875C27.9711 14.6875 25.8941 16.0953 25 18.1043C24.1059 16.0953 22.0289 14.6875 19.6094 14.6875C16.3733 14.6875 13.75 17.2059 13.75 20.3125C13.75 29.3382 25 35.3125 25 35.3125C25 35.3125 36.25 29.3382 36.25 20.3125Z"
                stroke={likeHomePage ? "none" : "#5D6D79"}
                fill={likeHomePage ? "#DE5753" : "none"}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className={likeHomePage ? "text-[#DE5753]" : "text-black"}>
              Like
            </span>
          </div>
          <div className="flex items-center cursor-pointer">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 35.3125C31.2132 35.3125 36.25 30.6954 36.25 25C36.25 19.3046 31.2132 14.6875 25 14.6875C18.7868 14.6875 13.75 19.3046 13.75 25C13.75 27.7145 14.8942 30.1841 16.7645 32.0256C17.2072 32.4614 17.5076 33.0533 17.38 33.6613C17.1852 34.5899 16.7614 35.4342 16.1697 36.1325C16.3647 36.1674 16.5625 36.1947 16.7621 36.2142C17.0047 36.2379 17.251 36.25 17.5 36.25C19.1025 36.25 20.5877 35.7473 21.8065 34.8911C22.8188 35.1653 23.8907 35.3125 25 35.3125Z"
                stroke="#5D6D79"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Comment</span>
          </div>
        </div>
        <div className="flex justify-between gap-2 mt-4">
            <img
              src={
                userDetail.user_profile
                  ? BASE_URL1 + userDetail.user_profile
                  : dafualt_profile
              }
              alt=""
              className="w-[40px] h-[40px] rounded-full"
            />
          <div className="w-full">
            <input
              type="text"
              class="bg-gray-100 font-SecondaryFont border w-full border-input_custom text-gray-900 text-base rounded-[20px] focus:outline-b-green_custom focus:border-2 focus:drop-shadow-md  focus:border-b-green_custom   focus:ring-0 focus:border-transparent  block pl-2.5 placeholder-gray-800"
              placeholder="Write a comment..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
 