import React, { Children, useEffect, useRef, useState } from "react";
import picture from "../../../../../assets/pic.jpg";
import pencil from "../../../../../assets/pencil.svg";
import jiA from "../../../../../assets/jiA.jpg";
import { Link, useLocation } from "react-router-dom";
import { UserProfile } from "../../../../../Redux/service/UserProfile";
import { useDispatch, useSelector } from "react-redux";
import { setPopup } from "../../../../../Redux/slices/PopupSlice";
import { DropShadow } from "../../../../../utils/Style";
import FollowPopup from "../FollowPopup";
import { BASE_URL1 } from "../../../../../utils/Utils";
import ModalImage from "react-modal-image";
import { setFollowUser } from "../../../../../Redux/slices/FollowUser";

export default function Profile() {
  // const [activeTab, setActiveTab] = useState("user-about");
  const activeTab = useLocation();
  // const [user, setUser] = useState([]);
  const user = useSelector((state) => state.followUser.value);
  const dispatch = useDispatch();
  const labelRef = useRef(null);
  const followRef = useRef(null);

  useEffect(() => {
    UserProfile().then((response) => {
      console.log("User Profile : ", response);
      dispatch(setFollowUser(response.data.payload))
      // setUser(response.data.payload);
    });

    // if (localStorage.getItem("ActiveState")) {
    //   setActiveTab(localStorage.getItem("ActiveState"));
    // }
  }, []);
  // const handleTabClick = (tab) => {
  //   setActiveTab(tab);
  //   localStorage.setItem("ActiveState", tab);
  // };
  const handleButtonClick = () => {
    console.log("pf,cv : ", user);
    if (followRef.current) {
      dispatch(setPopup("editpro"));
      labelRef.current.click();
    }
  };
  const handleButtonFollow = () => {
    if (labelRef.current) {
      dispatch(setPopup("follow"));
      followRef.current.click();
    }
  };
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isCVFullScreen, setIsCVFullScreen] = useState(false);

  const handleClick = () => {
    setIsFullScreen(true);
  };
  const handleClickCV = () => {
    setIsCVFullScreen(true);
  };

  const handleClose = () => {
    setIsFullScreen(false);
  };
  const handleCloseCV = () => {
    setIsCVFullScreen(false);
  };
  return (
    <div className={` bg-white border font-MainFont shadow m-auto rounded-[20px] p-2 mt-4 `}>
      <div className="border rounded-t-[20px]">
    
              <ModalImage
                hideDownload={true}
                small={BASE_URL1 + user.coverImage}
                large={BASE_URL1 + user.coverImage}
                className="w-full cursor-pointer rounded-t-[20px] object-cover m-auto h-[130px] sm:h-[200px] md:h-[300px]"
                alt=""
              />


        {/* cover ends */}
        {/* below cover starts */}
        <div className="flex h-fit py-4">
          <div className="w-full">
            <div className="flex relative">
                <div className="absolute left-6 -top-12">
                  <ModalImage
                  hideDownload={true}
                  small={BASE_URL1 + user.profileImage}
                  large={BASE_URL1 + user.profileImage}
                    // src={BASE_URL1 + user.profileImage}
                    className="object-cover bg-white rounded-full border-[3px] border-white w-20 h-20 xs:w-28 xs:h-28 ring-2 ring-bg_custom cursor-pointer"
                    alt=""
                    onClick={handleClick}
                  />
                </div>
            </div>
            {/* profile ends */}
            {/* middle starts */}
            <div className="pt-[70px] md:pt-0 pl-10 md:pl-40 md:flex justify-between py-2 w-full">
              {/* name follows start */}
              <div className="">
                {/* name STARTS */}
                <div>
                  <h1 className="font-MainFont text-3xl font-bold text-gray-600">
                    {user.fullName}
                  </h1>
                </div>
                {/* name ends */}
                {/* following followers starts */}
                <div className="sm:flex font-normal font-SecondaryFont text-gray-500 gap-3 py-1">
                  <div>
                    <button
                      onClick={() => handleButtonFollow()}
                      className="dropdown text-md"
                    >
                      <span className=""> {user.follower} Followers</span>
                      <label
                        className=""
                        ref={followRef}
                        htmlFor="my-modal"
                      ></label>
                    </button>
                  </div>
                  <button
                    onClick={() => handleButtonFollow()}
                    className="dropdown text-md"
                  >
                    <span className=""> {user.following} Following</span>
                    <label
                      className=""
                      ref={followRef}
                      htmlFor="my-modal"
                    ></label>
                  </button>
                </div>
                {/* following followers end */}
              </div>
              {/* name follows ENDS */}
              {/* edit btn starts */}
              <button
                onClick={() => handleButtonClick()}
                className="w-28 h-10 mt-2 md:mt-0 dropdown text-sm py-1.5 border-2 border-gray-400 hover:bg-gray-100 rounded-[20px] flex text-center items-center justify-center"
              >
                <img src={pencil} className="w-4 h-4 " alt="" />
                <span className="px-2 text-gray-600 font-medium">Edit</span>
                <label
                  className=""
                  ref={labelRef}
                  // onClick={() => {
                  //   dispatch(setPopup("editpro"));
                  // }}
                  htmlFor="my-modal"
                ></label>
              </button>
              {/* edit btn ends */}
            </div>
            {/* middle ends */}
          </div>
        </div>
        {/* below cover starts */}
        {/* menu starts */}
        <div className="border-t-gray-200 text-gray-500 border-t flex flex-wrap gap-8 md:gap-12 py-3 px-10">
          {/* about starts */}
          <div>
            <Link
              to=""
              className="font-SecondaryFont font-medium text-sm sm:text-md md:text-md lg:text-xl"
            >
              About
              <div
                className={` ${
                  activeTab.pathname === "/profile" ||
                  activeTab.pathname === "/profile/reference-created"
                    ? "w-full h-[5px] rounded-[20px] bg-green_custom"
                    : ""
                }`}
              ></div>
            </Link>
          </div>
          {/* about ends */}
          {/* posts starts */}
          <div>
            <Link
              to="user-posts"
              className="font-SecondaryFont font-medium text-sm sm:text-md md:text-md lg:text-xl"
            >
              Posts
              <div
                className={` ${
                  activeTab.pathname === "/profile/user-posts"
                    ? "w-full h-[5px] rounded-[20px] bg-green_custom"
                    : ""
                }`}
              ></div>
            </Link>
          </div>
          {/* posts ends */}
          {/* company intereseted starts */}
          <div>
            <Link
              to="company-interest"
              className="font-SecondaryFont font-medium text-sm sm:text-md md:text-md lg:text-xl"
            >
              Company Interested
              <div
                className={` ${
                  activeTab.pathname === "/profile/company-interest"
                    ? "w-full h-[5px] rounded-[20px] bg-green_custom"
                    : ""
                }`}
              ></div>
            </Link>
          </div>
          {/* company intereseted ends */}
        </div>
        {/* menu ends */}
      </div>
    </div>
  );
}
