import React, { createContext, useEffect, useRef, useState } from "react";
import picture from "../../../../../assets/picture.png";
import pencil from "../../../../../assets/pencil.svg";
import chat from "../../../../../assets/chatSvg.svg";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import {
  UserById,
  UserProfile,
} from "../../../../../Redux/service/UserProfile";
import { ConnectionUser } from "../../../../../Redux/service/ConnectionUser";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL1 } from "../../../../../utils/Utils";
import { setPopup } from "../../../../../Redux/slices/PopupSlice";
import { DropShadow } from "../../../../../utils/Style";
import PropValueContext from "../../../../../utils/context";
import plus from "../../../../../assets/plusIcon.svg";
import Message from "../../NavBar/Message";
import { ConnectionFollowUser } from "../../../../../Redux/service/Follower";
import { Following } from "../../../../../Redux/service/Following";
import { interestUser, interestUserForCompany } from "../../../../../Redux/service/Interest";
import message_icn from "../../../../../assets/message_icon.svg";
import { setChatWith } from "../../../../../Redux/slices/MessageDetailSlice";

export default function OtherProfile() {
  const { id } = useParams();
  const role = useSelector((state) => state.userDetail.userDetail.role);
  console.log(id);
  const activeTab = useLocation();
  const dispatch = useDispatch();
  const labelRef = useRef(null);
  const followRef = useRef(null);
  const [followUser, setFollowUser] = useState(false);
  const [follow, setFollow] = useState(false);
  const param = useParams();
  const [user, setUser] = useState([]);
  const [interestedUser, setInterestedUser] = useState(false);
  const meassgeRef = useRef()
  const userDetails = useSelector((State) => State.userDetail.userDetail);
  // const handleClick = (e) =>{
  //   UserById().then((result)=>{
  //     console.log(result)
  //     setUser(result.data.payload);
  //   })
  // }
  useEffect(() => {
    UserById(id).then((response) => {
      setUser(response.data ? response.data.payload : []);
    });

    interestUserForCompany().then((res) => {
      if (res.data) {
        res.data?.payload?.map((result) => {
          if (result.userId == id) {
            setInterestedUser(true);
          }
        });
      }
    });

    Following().then((res) => {
      console.log(res.data ? res.data.payload : [], "response");
      if (res.data) {
        res.data?.payload?.map((result) => {
          if (result.id == id) {
            setFollow(true);
          }
        });
      }
    });
  }, [id]);
  const handleButtonClick = () => {
    ConnectionFollowUser(user.userId).then(() => {
      console.log(user.userId);
    });
    setFollowUser(!followUser);
  };

  // const handleButtonClick = () => {
  //   if (followRef.current) {
  //     dispatch(setPopup("editpro"));
  //     labelRef.current.click();
  //   }
  // };

  const handleButtonFollow = () => {
    if (labelRef.current) {
      dispatch(setPopup("follow"));
      followRef.current.click();
    }
  };
  const [interest, setInterest] = useState(false);

  const handleFollowUser = () => {
    interestUser(user.userId).then(() => {
      console.log(user.userId, "user id"	);
    });
    setInterest(!interest);
  };
  const clickpopup = ()=>{
    console.log({userId:id,fullName:user?.fullName,profileImage:user?.profileImage},"very well")
    dispatch(setChatWith({userId:id,fullName:user?.fullName,profileImage:user?.profileImage}));
    meassgeRef.current.click()
  }
  return (
    <div
      className={`mt-20 bg-none px-4 2md:px-10 lg:px-32 xl:px-52 2xl:px-80`}
    >
      <div className="h-full bg-white border font-MainFont drop-shadow mt-5 rounded-[20px] p-3">
        <div className="border rounded-t-[20px]">
          <img
            src={BASE_URL1 + user?.coverImage}
            className="w-full rounded-t-[20px] object-cover m-auto h-[130px] sm:h-[200px] md:h-[300px]"
            alt=""
          />
        </div>

        <div className="block md:flex md:justify-between py-3">
          {/* profile part starts */}
          <div>
            <div className="flex relative">
              <div className="absolute left-6 -top-12">
                <img
                  src={BASE_URL1 + user?.profileImage}
                  className="w-32 h-32 object-cover bg-white bor rounded-full border-4 border-white"
                  alt=""
                />
              </div>
            </div>
            {/* name & followers following starts */}
            <div
              className="py-2 mt-20 sm:mt-0 ml-10 sm:ml-44 md:ml-48 lg:ml-44
            "
            >
              <div>
                <h1 className="text-2xl text-gray-600 font-bold">
                  {user?.fullName}
                </h1>
              </div>
              <div className="flex font-normal font-SecondaryFont text-gray-500 gap-6 py-1">
                <p>
                  <span className="font-semibold text-gray-600">
                    {user?.follower}
                  </span>
                  &nbsp;Followers
                </p>
                <p>
                  <span className="font-semibold text-gray-600">
                    {user?.following}
                  </span>
                  &nbsp;Following
                </p>
              </div>
            </div>
            {/* name & followers following ends */}
          </div>
          {/* profile part ends */}

          {/* follow btn, message btn start  */}
          {role === "user" ? (
            <div className="md:pt-3 flex gap-4 ml-10 sm:ml-44 md:ml-0 h-fit justify-center items-center">
              {follow ? (
                <button
                  onClick={() => handleButtonClick(setFollow(!follow))}
                  className="dropdown text-sm w-24 h-8 md:h-10 border-2 border-green_custom bg-green_custom rounded-[20px] flex text-center items-center justify-center"
                >
                  {/* <img src={plus} className="w-8 h-8 " alt="" /> */}
                  <span className="px-2 font-semibold text-white">
                    {follow ? "Following" : "Follow"}
                  </span>
                </button>
              ) : (
                <button
                  onClick={() => handleButtonClick(setFollow(!follow))}
                  className="dropdown text-sm w-24 h-8 md:h-10 border-2 border-green_custom bg-white rounded-[20px] flex text-center items-center justify-center"
                >
                  {/* <img src={plus} className="w-8 h-8 " alt="" /> */}
                  <span className="px-2 font-semibold text-gray-600">
                    {follow ? "Following" : "Follow"}
                  </span>
                </button>
              )}

              <Link  onClick={clickpopup} className="w-8 h-8 md:w-10 md:h-10 flex justify-center items-center border-black-100 border rounded-full message-toggle">
                <img src={message_icn} className="w-4 h-4 md:w-7 md:h-7 "/>
              </Link>
            </div>
          ) : (
            <div className="py-3 flex gap-4 ml-40 sm:ml-44 md:ml-0">
              <button
                onClick={() => handleFollowUser(setInterestedUser(!interestedUser))} 
                className={interestedUser ? `dropdown text-sm w-24 h-8 md:h-10 border-2 border-green_custom bg-green_custom text-white rounded-[20px] flex text-center items-center justify-center` 
              : `dropdown text-sm w-24 h-8 md:h-10 border-2 border-green_custom text-gray-600 bg-white rounded-[20px] flex text-center items-center justify-center`
            }
              >
                {/* <img src={plus} className="w-8 h-8 " alt="" /> */}
                <span className="px-2 font-semibold">
                  {interestedUser ? "Interested" : "Interest"}
                </span>
              </button>

              <Link className="flex items-center justify-center h-fit">
                <Message />
              </Link>
            </div>
          )}
          {/* follow btn, message btn end  */}
        </div>

        <div className="border-t-gray-200 border-t flex gap-12 py-3 px-10">
          <div>
            <Link
              to=""
              className=" font-SecondaryFont font-medium text-md sm:text-md md:text-md lg:text-xl text-gray-500"
            >
              About
              <div
                className={` ${
                  activeTab.pathname === `/home/otherprofile/${id}`
                    ? "w-full h-[5px] rounded-[20px] bg-green_custom"
                    : ""
                }`}
              ></div>
            </Link>
          </div>
          <div>
            <Link
              to="user-posts"
              className="font-SecondaryFont font-medium text-md sm:text-md md:text-md lg:text-xl text-gray-500"
            >
              Posts
              <div
                className={` ${
                  activeTab.pathname === `/home/otherprofile/${id}/user-posts`
                    ? "w-full h-[5px] rounded-[20px] bg-green_custom"
                    : ""
                }`}
              ></div>
            </Link>
          </div>
        </div>
      </div>
      <label
        ref={meassgeRef}
            htmlFor="my-modal-message"
            className="hidden absolute text-2xl right-3 top-1 text-gray-500 cursor-pointer"
      > hello</label>
      <PropValueContext.Provider value={user}>
        <Outlet />
      </PropValueContext.Provider>
    </div>
  );
}
