import React, { useState } from "react";
import UserProfileName from "../../UserProfileName";
import NewpostOption from "./NewpostOption";
import { DropShadow } from "../../../../utils/Style";
import { BASE_URL, BASE_URL1 } from "../../../../utils/Utils";
import { useDispatch } from "react-redux";
import { setPopup } from "../../../../Redux/slices/PopupSlice";
import DeletePostUser from "./DeletePostUser";
import { formatDistanceToNow } from "date-fns";

export default function UserProfile_Post({ item }) {
  const prop =  item;
  const dispatch = useDispatch();
  const [likeProfileUser, setLikeProfileUser] = useState(false);
  const [commentProfileUser, setCommentProfileUser] = useState(false);
  
  const handleLikeProfileUser = () => {
    setLikeProfileUser(!likeProfileUser);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleEdit = () => {
    localStorage.setItem("editPostId", JSON.stringify(item) );
    dispatch(setPopup("editpost"));
  };
  const getTimeDifference = (timestamp) => {
    const currentTime = new Date();
    const postTime = new Date(timestamp);
    return formatDistanceToNow(postTime, { addSuffix: true });
  };

  return (
    <div className=" mb-5 font-SecondaryFont">
      <div
        className="rounded-[20px] bg-white drop-shadow w-full p-6"
      >
        <div className="flex justify-between items-center">
          <div className="flex">
            <img
              src={BASE_URL1 + prop.user.user_profile}
              className="w-14 h-14 rounded-full object-cover ring-2 ring-bg_custom"
            />
            <div className="ml-3 ">
              {/* name of user */}
              <UserProfileName props={prop.user}></UserProfileName>

              <div className="flex items-center">
                <span className="text-gray-400 font-SecondaryFont font-light pr-2">
                  {getTimeDifference(prop.time)}
                </span>
                {/* <NewpostOption></NewpostOption> */}
              </div>
            </div>
          </div>
          {/* btn starts */}
          <button
            className=" text-gray-500 hover:bg-gray-100 focus:ring-2 focus:outline-none focus:ring-gray-200 w-6 h-6 text-sm rounded-full"
            type="button"
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open dropdown</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
            </svg>
          </button>
          {/* Dropdown menu */}
          {isOpen && (
            <div
              id="dropdown"
              className="absolute border-[0.5px] right-0 z-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-36 "
            >
              <ul className="py-2">
                <li onClick={handleEdit}>
                  <label
                    htmlFor="my-modal"
                    className="block w-full  px-4 py-2 text-sm text-center text-gray-700 hover:bg-gray-100 "
                  >
                    Edit
                  </label>
                </li>
                <li>
                  <DeletePostUser id={prop.postId} />
                </li>
              </ul>
            </div>
          )}
          {/* btn ends */}
        </div>
        <p className="line-clamp-3 px-[30px] font-SecondaryFont py-3 leading-tight post-textarea whitespace-pre-wrap" >
          {prop.title}
        </p>
        <div className="flex justify-center">
          <img
            // src={StaticImage.Profilelinger}
            src={BASE_URL1 + prop.postImage}
            alt=""
            className="w-[720px] object-cover h-fit"
          />
        </div>
        <div className="flex justify-between mx-[30px] mt-3 border-b-2 pb-1">
          <div>
            <span> {prop.postInteract.Like_count} </span>
            <span>likes</span>
          </div>
          <div>
            <span>{prop.postInteract.Comment_count} </span>
            <span>comment</span>
          </div>
        </div>
        <div className="flex justify-around mx-[30px] border-b-2 pb-1">
          <div
            className="flex items-center cursor-pointer"
            onClick={handleLikeProfileUser}
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
                stroke={likeProfileUser ? "none" : "#5D6D79"}
                fill={likeProfileUser ? "#DE5753" : "none"}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className={likeProfileUser ? "text-[#DE5753]" : "text-black"}>
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
        <div className="flex mx-[30px] gap-4 mt-4 justify-between">
          <a href="">
            <img
              src={BASE_URL1 + prop.user.user_profile}
              // src={BASE_URL1+ prop.user.user_profile}
              alt=""
              className="w-[40px] h-[40px] object-cover rounded-full"
            />
          </a>
          <div className="w-[93%] mb-5">
            <input
              type="text"
              class="bg-gray-100 border w-full h-[40px] border-input_custom text-gray-900 text-base rounded-[20px] focus:ring-blue-500 focus:border-blue-500 block pl-2.5 placeholder-gray-800"
              placeholder="write a comment"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
