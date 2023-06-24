import React, { useEffect, useState } from "react";
import {
  addNotificationPost,
  sendNotification,
} from "../../../../Redux/service/Notification";
import { formatDistanceToNow } from "date-fns";
import { DropShadow } from "../../../../utils/Style";
import dafualt_profile from "../../../../assets/Default_pfp.svg.png";
import NewpostOption from "./NewpostOption";
import {
  getComment,
  getLikeNumber,
  insertComment,
  isLike,
  likeDisLikePost,
} from "../../../../Redux/service/PostInteractService";
import { useDispatch, useSelector } from "react-redux";
import {
  AddSavePost,
  DeleteSavePost,
  SavePost,
} from "../../../../Redux/service/SavePost";
import { Link, NavLink } from "react-router-dom";
import { useRef } from "react";
import { BASE_URL1 } from "../../../../utils/Utils";
import DeleteCommentPopUp from "./Card/DeleteCommentPopUp";
import EditPostPop from "./EditPostPop";
import { setPopup } from "../../../../Redux/slices/PopupSlice";
import DeletePostUser from "./DeletePostUser";
import ModalImage from "react-modal-image";

export default function NewPostComponentInUserPro({
  item,
  index,
  sendLikeUpdate,
  sendComment,
  connect,
}) {
  const prop = item;
  const dispatch = useDispatch();
  const [saveHomepage, setSaveHomePage] = useState(true);
  const Name = useSelector((state) => state.userDetail.userDetail.fullName);
  const id = useSelector((state) => state.userDetail.userDetail.userId);
  const stompClient = useSelector((state)=>state.stompClient.stompClient);
  const role = useSelector((state) => state.userDetail.userDetail.role);
  const isSender = role === "user" ? false : true;
  const handleSaveHomePage = () => {
    AddSavePost(item.postId).then(() => console.log(item.postId));
    setSaveHomePage(!saveHomepage);
  };
  const commentRef = useRef(null);
  const [isOpen, setIsOpen] = useState({});

  const toggleDropdown = (commentId) => {
    if (isOpen) {
      if (isOpen[commentId]) {
        setIsOpen({ ...isOpen, [commentId]: false });
      } else {
        setIsOpen({ ...isOpen, [commentId]: true });
      }
    } else {
      setIsOpen({ ...isOpen, [commentId]: true });
    }
  };
  const [likeHomePage, setLikeHomePage] = useState(false);
  const [likeNumber, setLikeNumber] = useState({
    index: item.postInteract.Like_count,
  });
  const likeUpdate = useSelector((State) => State.likeUpdate.LikeUpdate);
  const [comments, setComments] = useState({});
  const realTimeComment = useSelector(
    (State) => State.realTimeComment.realTimeComment
  );
  const hello = () => {
    dispatch(setPopup("editpost"));
  };
  useEffect(() => {
    // set isLike
    isLike(item.postId).then((result) => {
      if (result.data && result.data.payload) {
        setLikeHomePage(result.data.payload);
      } else {
        setLikeHomePage(false);
      }
    }, []);
    //get comment

    getComment(item.postId, 1).then((result) => {
      if (result.data) {
        setComments({ ...comments, [item.postId]: result.data.payload });
      }
    });
  }, []);

  useEffect(() => {
    if (likeUpdate.index === index) {
      setLikeNumber({ ...likeNumber, index: likeUpdate.likeNumber });
    }
    // set isLike
    isLike(item.postId).then((result) => {
      if (result.data && result.data.payload) {
        setLikeHomePage(result.data.payload);
      } else {
        setLikeHomePage(false);
      }
    });
  }, [likeUpdate]);

  // comment realtime
  useEffect(() => {
    if (realTimeComment[item.postId]) {
      if (realTimeComment[item.postId].senderId !== userDetail.email) {
        comments[item.postId].push({ comments: realTimeComment[item.postId] });
      }
    }
  }, [realTimeComment]);

  const handleLikeHomePage = () => {
    if(item.user.userId!=id){
      addNotificationPost("POST", "Like",isSender ,{ postid: item.postId }).then(
        (result) => {
        }
      );
      // send notification

    }

    //set is like state
    setLikeHomePage(!likeHomePage);

    // like and disLike handler sections
    likeDisLikePost(item.postId).then((result) => {
      if (result) {
        if (result.data.payload === "Like Successfully") {
          getLikeNumber(item.postId).then((res) => {
            if (res) {
              sendLikeUpdate(index, res.data ? res.data.payload : "");
              setLikeNumber({ ...likeNumber, index: res.data.payload });
            }
          });
        } else if (result.data.payload === "Dislike Successfully") {
          getLikeNumber(item.postId).then((res) => {
            if (res) {
              sendLikeUpdate(index, res.data ? res.data.payload : "");
              setLikeNumber({ ...likeNumber, index: res.data.payload });
            }
          });
        }
      }
    });
  };

  const getTimeDifference = (timestamp) => {
    const currentTime = new Date();
    const postTime = new Date(timestamp);
    return formatDistanceToNow(postTime, { addSuffix: false });
  };

  // comment section
  const [comment, setComment] = useState({});
  const [show, setShow] = useState("hidden");

  // get LocalDateTime
  const padZero = (num) => {
    return num.toString().padStart(2, "0");
  };
  const getLocalDateTime = () => {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1; // Note: JavaScript months are zero-based.
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    // Format the components as desired
    var dateTime =
      year +
      "-" +
      padZero(month) +
      "-" +
      padZero(day) +
      " " +
      padZero(hour) +
      ":" +
      padZero(minute) +
      ":" +
      padZero(second);

    return dateTime;
  };
  // handle comment
  const handleComment = (event) => {
    const { name, value } = event.target;
    let com = {
      text: value,
      profile_image: userDetail.profileImage,
      username: userDetail.fullName,
      commentDate: getLocalDateTime(),
      senderId: userDetail.email,
    };
    setComment(com);
    if (value != "") {
      setShow("");
    } else {
      setShow("hidden");
    }
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if(item.user.userId!=id){
      addNotificationPost("POST", "Command",isSender ,{ postid: item.postId }).then(
        (result) => {
        }
      );
      // send notification

    }

    insertComment(item.postId, comment.text)
      .then((res) => {
        if (res.data) {
          if (res.data.payload === "Successfully") {
            setComment({ ...comment, text: "" });
            // set comment
            comments[item.postId].push({ comments: comment });
            //send the comment
            sendComment(item.postId, comment);
          }
        }
      })
      .catch((err) => {
      });
  };

  const userDetail = useSelector((State) => State.userDetail.userDetail);

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

  const [IsopenEdit, SetIsopenEdit] = useState(false);

  const toggleDropdownEdit = () => {
    SetIsopenEdit(!IsopenEdit);
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

  const [unSave, setUnSave] = useState(null);
  const [save, setSave] = useState(true);
  const [FirstImage, setFirstImage] = useState("");
  useEffect(() => {
    setFirstImage(
      item.company
        ? item.user.companyProfile
          ? BASE_URL1+item.user.companyProfile
          : dafualt_profile
        : item.user.user_profile
        ? BASE_URL1+item.user.user_profile
        : dafualt_profile
    );

    SavePost().then((res) => {
      if (res.data) {
        res.data.payload.map((result) => {

          if (result.post.postId == item.postId) {
            setUnSave(result.savePostId);
            setSave(false);
          }
        });
      }
    });
  }, []);

  const handleUnSavePost = () => {
    DeleteSavePost(unSave).then(() => {});
    setSave(!save);
  };
  const handleEdit = () => {
    localStorage.setItem("editPostId", JSON.stringify(item));
    dispatch(setPopup("editpost"));
    setTimeout(() => {
      toggleDropdownEdit();
    }, 500);
  };
  const language = "kh"; // Language code (e.g., "en" for English, "kh" for Khmer)

  const fontClass = language === "en" ? "font-roboto" : "font-notosanskhmer";

  return (
    <div className="mb-4" key={index}>
      <div className={`${DropShadow} bg-white w-full py-4 rounded-[20px] px-5`}>
        <div className="flex justify-between items-center">
          <div className="flex justify-between ">
            {
              // <NavLink
              //   to={`/home/${
              //     item.company ? "otherprofilecompany" : "otherprofile"
              //   }/${item.company ? item.user.companyId : item.user.userId}`}
              // >
                <img
                  src={FirstImage}
                  // src={dafualt_profile}
                  className="w-[50px] h-[50px] rounded-full object-cover ring-2 ring-bg_custom"
                  alt=""
                />
              // </NavLink>
            }
            <div className="ml-3 font-semibold font-SecondaryFont">
            {userDetail.userId != item.user.userId ? (
                <NavLink
                  to={`/home/${
                    item.company ? "otherprofilecompany" : "otherprofile"
                  }/${item.company ? item.user.companyId : item.user.userId}`}
                >
                  {item.company
                    ? item.user.companyName
                      ? item.user.companyName
                      : "Unkown"
                    : item.user.username
                    ? item.user.username
                    : "Unkown"}
                </NavLink>
              ) : (
                <NavLink
                  to="/profile"
                >
                  {item.company
                    ? item.user.companyName
                      ? item.user.companyName
                      : "Unkown"
                    : item.user.username
                    ? item.user.username
                    : "Unkown"}
                </NavLink>
              )}
              <div className="flex items-center ">
                <span className="text-gray-400 font-light pr-2">
                  {getTimeDifference(item.time)}
                </span>
                {/* <NewpostOption></NewpostOption> */}
              </div>
            </div>
          </div>
          {/* button save */}

          <button
            className=" text-gray-500 hover:bg-gray-100 focus:ring-2 focus:outline-none focus:ring-gray-200 w-6 h-6 text-sm rounded-full"
            type="button"
            onClick={toggleDropdownEdit}
          >
            <span className="sr-only">Open dropdown aaaa</span>
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
          {IsopenEdit && (
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
                  <DeletePostUser
                    toggleDropdownEdit={toggleDropdownEdit}
                    id={prop.postId}
                  />
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="py-3">
          <p className={`leading-tight whitespace-pre-wrap text-gray-500`}>
            {renderContent()}<span className="">&nbsp;{renderSeeMoreLink()}</span>
          </p>
        </div>
        <div className="flex justify-center">
          <img
            // small={BASE_URL1+item.postImage}
            // large={BASE_URL1+item.postImage}
            hideDownload={true}
            src={BASE_URL1+item.postImage}
            alt=""
            className="w-full object-cover rounded-[15px]"
          />
        </div>
        <div className=" font-SecondaryFont flex justify-between mb-1 mt-3">
          <div>
            {item.postInteract.Like_count <= 1 ? (
              <span>{likeNumber["index"]} Like</span>
            ) : item.postInteract.Like_count >= 2 ? (
              <span>{likeNumber["index"]} Likes</span>
            ) : (
              ""
            )}
          </div>
          <div>
            {item.postInteract.Comment_count <= 1 ? (
              <span>{item.postInteract.Comment_count} Comment</span>
            ) : item.postInteract.Comment_count >= 2 ? (
              <span>{item.postInteract.Comment_count} Comments</span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex font-SecondaryFont justify-around border-b-2 border-t-2">
          <div
            className="flex items-center cursor-pointer sokreach"
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
          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              commentRef.current.focus();
            }}
          >
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
        {/* show comment section*/}
        <div
          className={`flex flex-col font-SecondaryFont justify-start   px-5 ${
            item.postInteract.Comment_count !== 0 ? "border-b-2 py-5" : ""
          }`}
        >
          {Array.isArray(comments[item.postId]) &&
            comments[item.postId].map((comment, index) => (
              <div>
                {/* show comment */}
                <div className=" flex justify-start items-start w-full mb-2 group">
                  {/* profile */}
                  <a href="">
                    <img
                      src={
                        comment.comments.profile_image
                          ? BASE_URL1 +
                            comment.comments.profile_image
                          : dafualt_profile
                      }
                      alt=""
                      className="w-[40px] h-[40px] object-cover rounded-full mr-3 mt-2"
                    />
                  </a>
                  {/* comment detail */}
                  <div className="w-auto flex justify-center items-center">
                    <div className="flex flex-col">
                      <div className="min-w-[200px] h-auto rounded-[20px] shadow-sm bg-gray-200 p-2">
                        <a href="" className=" font-bold text-sm">
                          {comment.comments.username}
                        </a>
                        <p>{comment.comments.text}</p>
                      </div>
                      <p className=" ml-2 mt-1 font-semibold text-sm">
                        {getTimeDifference(comment.comments.commentDate)}
                      </p>
                    </div>
                  </div>
                  {/* more option */}
                  <button
                    onClick={() => toggleDropdown(comment.comments.commentId)}
                    className={` opacity-0 ${
                      userDetail.userId !== comment.comments.user_id
                        ? "hidden"
                        : "group-hover:opacity-100"
                    } mt-4 ml-1`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 1024 1024"
                    >
                      <path
                        fill="#7f8c95"
                        d="M456 231a56 56 0 1 0 112 0a56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0a56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0a56 56 0 1 0-112 0z"
                      />
                    </svg>
                  </button>
                  {/* Dropdown menu */}
                  {isOpen[comment.comments.commentId] && (
                    <div
                      id="dropdown"
                      className="flex flex-col z-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-36 "
                    >
                      <ul className="py-2">
                        <li>
                          <label
                            htmlFor="my-modal"
                            className="block w-full  px-4 py-2 text-sm text-center text-gray-700 hover:bg-gray-100 "
                          >
                            Edit
                          </label>
                        </li>
                        <li className="relative">
                          <DeleteCommentPopUp
                            index={index}
                            postId={item.postId}
                            commentId={comment.comments.commentId}
                            comments={comments}
                            setComments={setComments}
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                          />
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                {/* end of show comment */}
              </div>
            ))}
        </div>
        <div className="flex justify-between gap-2 mt-4">
            <img
              src={
                userDetail.profileImage
                  ? `${BASE_URL1}` + userDetail.profileImage
                  : dafualt_profile
              }
              alt=""
              className="w-[40px] object-cover h-[40px] rounded-full"
            />
          <form
            onSubmit={handleSubmitComment}
            className="w-full flex justify-center items-center relative"
          >
            <input
              type="text"
              id="comment"
              name={item.postId}
              value={comment.text}
              ref={commentRef}
              class="bg-gray-100 font-SecondaryFont border w-full border-input_custom text-gray-900 text-base rounded-[20px] focus:ring-blue-500 focus:border-blue-500 block pl-2.5 placeholder-gray-800"
              placeholder="Write a comment..."
              required
              onChange={handleComment}
            />
            <button type="submit" className={`absolute right-5 ${show}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
              >
                <path
                  fill="#04aa9c"
                  d="M3.79 2.625c-.963-.46-2.021.42-1.746 1.451l2.016 7.533a1 1 0 0 0 .824.732l9.884 1.412c.286.04.286.454 0 .495l-9.883 1.411a1 1 0 0 0-.824.732l-2.017 7.537c-.275 1.03.783 1.91 1.746 1.451L25.288 15.13c.949-.452.949-1.804 0-2.257L3.79 2.626Z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}