import React, { useEffect, useRef, useState } from "react";
import { UpdatePostUserProfile } from "../../../../Redux/service/Post";
import publicIcon from "../../../../assets/public.svg";
import picture from "../../../../assets/picture.png";
import publicColor from "../../../../assets/publicColor.svg";
import KeyColor from "../../../../assets/KeyColor.svg";
import "flowbite";
import { UserProfile } from "../../../../Redux/service/UserProfile";
import { json } from "react-router-dom";
import { setPostSlide } from "../../../../Redux/slices/PostSlide";
import { useDispatch, useSelector } from "react-redux";
import { setPopup } from "../../../../Redux/slices/PopupSlice";
import { BASE_URL1 } from "../../../../utils/Utils";
import LoadingComponentBtn from "../../../othersComponent/LoadingComponentBtn";
import { setLoading } from "../../../../Redux/slices/LoadingSlice";

export default function EditPostPop({ id, item }) {
  const newId = id;
  const [postContent, setPostContent] = useState();
  const [postImage, setpostImage] = useState("");
  const imgReff = useRef();
  const [previewUrl, setPreviewUrl] = useState("");
  const inputRef = useRef(null);
  const [user, setUser] = useState([]);
  const data = JSON.parse(localStorage.getItem("editPostId"));
  const dispatch = useDispatch();
  const Loading = useSelector((state) => state.loading.value);

  useEffect(() => {
    UserProfile().then((response) => {
      setUser(response?.data?.payload || "");
    });
  }, []);

  const handleOnchange = (event) => {
    const value = event.target.value;
    setPostContent(value);
  };
  const postData = useSelector((state) => state.postSlide.post);
  const updatepost = () => {
    dispatch(setLoading(true));
    if (postContent) {
      UpdatePostUserProfile(data.postId, postContent).then((response) => {
        setPostContent("");
        setpostImage(null);
        setPreviewUrl("");
        dispatch(
          setPostSlide(
            postData.map((post) => {
              if (post.postId === data.postId) {
                return { ...post, title: postContent };
              } else return post;
            })
          )
        );

        dispatch(setPopup("close"));
      dispatch(setLoading(false));

      });
      setPostContent("");
      inputRef.current.value = "";

    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setpostImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    imgReff.current.click();
  };
  const role = useSelector((state) => state.userDetail.userDetail.role);
  const companyDetail = useSelector(
    (state) => state.companyDetail.company_detail
  );
  const args = { hover: true };
  return (
    <div className="flex w-[600px] justify-center items-center">
      <div className={` bg-input_custom overflow-y-hidden rounded-3xl w-full`}>
        <div className="flex w-full xs:w-full md:w-full flex-wrap flex-col bg-white px-5 py-3">
          <div className=" font-bold mt-0 flex justify-center items-center">
            <p className="m-2 text-[20px] text-green_custom">Edit Post</p>
          </div>
          <hr className="" />
          <div className="flex items-center mt-3">
            <img
              src={`${
                BASE_URL1 + role === "user"
                  ? user.profileImage
                  : companyDetail.profileImg
              }`}
              className="w-12 object-cover border-2 rounded-full h-12"
              alt=""
            />
            <div className="ml-3">
              <div className="font-MainFont font-extrabold text-[20px]">
                <span>
                  {role === "user" ? user.fullName : companyDetail.companyName}
                </span>
              </div>
              <div className="flex items-center">
                <div>
                  {/* <div className="">
                    <button
                      onClick={toggleDropdown}
                      className="text-gray-400 bg-gray-200 focus:ring-2 focus:outline-none focus:ring-gray-300 border h-5 rounded-md text-[10px] text-center inline-flex items-center"
                      type="button"
                    >
                      <span className="w-7 p-0">
                        <img src={publicIcon} className="" alt="" />
                      </span>
                      Privacy{" "}
                      <svg
                        className="w-3 h-3 mx-2 "
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                    {isDropdownOpen && (
                      <div
                        id="dropdown"
                        className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-[86px] "
                      >
                        <ul
                          className="py-1 text-xs text-gray-700 "
                          aria-labelledby="dropdownDefaultButton"
                        >
                          <li className="flex items-center">
                            <img src={publicColor} className="w-7" alt="" />
                            <a
                              href="#"
                              className="block py-2  hover:bg-gray-100 "
                            >
                              Public
                            </a>
                          </li>
                          <li className="flex items-center">
                            <img src={KeyColor} className="w-3.5 m-1.5 object-cover" alt="" />
                            <a
                              href="#"
                              className="block py-2 hover:bg-gray-100"
                            >
                              Private
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <input
            ref={inputRef}
            type="text"
            onChange={handleOnchange}
            defaultValue={data.title}
            className=" text-gray-900 text-sm border-0 focus:ring-0 w-full py-8"
            placeholder="What's on your mind"
          />
          {data.postImage ? (
            <div className="w-full flex justify-center rounded-[20px] my-2 items-center object-cover h-fit border">
              <img
                src={`${BASE_URL1 + data.postImage}`}
                className="w-full h-fit max-h-[400px] object-cover rounded-[20px]"
                alt="Preview"
              />
            </div>
          ) : null}

          <div className="flex flex-nowrap justify-between w-full h-8 gap-1 ">
            <button
              onClick={updatepost}
              className="w-full shadow-md hover:shadow-lg hover:bg-hover_green_custom bg-green_custom text-white font-medium rounded-[20px] "
            >
              {Loading ? <LoadingComponentBtn /> : "Update"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
