import React, { useEffect, useRef, useState } from "react";
import { PostUser } from "../../../../Redux/service/Post";
import publicIcon from "../../../../assets/public.svg";
import picture from "../../../../assets/picture.png";
import publicColor from "../../../../assets/publicColor.svg";
import KeyColor from "../../../../assets/KeyColor.svg";
import "flowbite";
import { UserProfile } from "../../../../Redux/service/UserProfile";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL1, BASE_URL3 } from "../../../../utils/Utils";
import PostSlide, { setPostSlide } from "../../../../Redux/slices/PostSlide";

export default function CreatePostPopUp() {
  const [postContent, setPostContent] = useState("");
  const [postImage, setPostImage] = useState("");
  const imgRef = useRef();
  const [previewUrl, setPreviewUrl] = useState("");
  const inputRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState([]);
  const [isPostDisabled, setIsPostDisabled] = useState(false);
  const userDetail = useSelector((state) => state.userDetail.userDetail);

  const MAX_CONSECUTIVE_CHARS = 60;
  const companyDetail = useSelector(
    (state) => state.companyDetail.company_detail
  );
  const role = useSelector((state) => state.userDetail.userDetail.role);
  const checkRole = role === "user" ? false : true;
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.postSlide.post);

  useEffect(() => {
    UserProfile().then((response) => {
      setUser(response.data.payload);
    });
  }, []);
  useEffect(() => {
    setIsPostDisabled(
      postContent.length > 500 ||
        (postContent.trim().length === 0 && !postImage) ||
        hasTooManyConsecutiveChars()
    );
  }, [postContent, postImage]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const addPost = () => {
    if (postContent.length === 0 && postImage) {
      // Create a placeholder postContent if it is empty but postImage is present
      setPostContent("");
    }

    if (postContent || postImage) {
      PostUser(postContent, checkRole, { image: postImage }).then(
        (response) => {
          if (role === "user") {
            const abc = {
              companyCover:
                "/api/v1/images/PROFILE?fileName=" + companyDetail.coverImage,
              companyId: companyDetail.companyId,
              companyName: companyDetail.companyName,
              companyProfile:
                "/api/v1/images/PROFILE?fileName=" + companyDetail.profileImg,
            };
            const def = {
              userId: userDetail.userId,
              user_profile: userDetail.profileImage,
              username: userDetail.fullName,
            };
            const newPost = {
              company: role === "user" ? false : true,
              postId: response.data.payload.postByUserId,
              postImage:"/api/v1/images/POST?fileName=" +
                response.data.payload.postImage,
              postInteract: { Comment_count: 0, Like_count: 0 },
              time: response.data.payload.time,
              title: response.data.payload.title,
              user: role === "user" ? def : abc,
            };

            dispatch(setPostSlide([newPost, ...postData]));
          }

          setPostContent("");
          setPostImage(null);
          setPreviewUrl("");
          imgRef.current.value = null;
        }
      );
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setPostImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    imgRef.current.click();
  };

  const hasTooManyConsecutiveChars = () => {
    const regex = new RegExp(`(.)\\1{${MAX_CONSECUTIVE_CHARS - 1},}`);
    return regex.test(postContent);
  };

  const [validationError, setValidationError] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (isPostDisabled) {
        setValidationError(
          "You cannot press enter without writing something first."
        );
      } else {
        setValidationError("");
        setPostContent((prevContent) => prevContent + " "); // Append a space to the existing content
      }
    }
  };

  const handleContentChange = (event) => {
    const trimmedContent = event.target.value.trim();
    if (trimmedContent === "") {
      setValidationError("You cannot post an empty message.");
    } else {
      setValidationError("");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-input_custom overflow-y-hidden rounded-3xl w-[40rem]">
        <div className="flex w-full xs:w-full md:w-full flex-wrap flex-col bg-white px-5 py-3">
          <div className="font-bold mt-0 flex justify-center items-center">
            <p className="m-2 text-[20px] font-MainFont text-green_custom">
              Create Post
            </p>
          </div>
          <hr className="" />
          <div className="flex  mt-3">
            {role == "user" ? (
              <div className="flex ">
                <img
                  src={` ${BASE_URL1 + user.profileImage}`}
                  className="w-12 rounded-full h-12 object-cover"
                  alt=""
                />
                <div className="ml-3 flex justify-center items-center">
                  <div className="font-SecondaryFont font-extrabold text-[18px]">
                    <span>{user.fullName}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex ">
                <img
                  src={`${BASE_URL3 + companyDetail.companyProfile}`}
                  className="w-12 rounded-full h-12 object-cover"
                  alt=""
                />
                <div className="ml-3 flex justify-center items-center">
                  <div className="font-SecondaryFont font-extrabold text-[18px]">
                    <span>{companyDetail.companyName}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <textarea
            ref={inputRef}
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            onKeyPress={handleKeyDown}
            onKeyDown={handleKeyDown}
            onKeyUp={handleContentChange}
            className="text-gray-900 py-4 text-sm border-0 focus:ring-0 w-full post-textarea"
            placeholder={`What's on your mind, ${
              role == "user" ? user.fullName : companyDetail.companyName
            }?`}
          />
          {validationError && <p className="text-red-500">{validationError}</p>}
          {postContent.length > 500 && (
            <p className="text-red-500 text-sm mt-2">
              Maximum character limit exceeded (500 characters maximum).
            </p>
          )}
          {hasTooManyConsecutiveChars() && (
            <p className="text-red-500 text-sm mt-2">
              Too many consecutive characters (maximum {MAX_CONSECUTIVE_CHARS}{" "}
              consecutive characters allowed).
            </p>
          )}
          {postContent.length === 0 && (
            <p className="text-gray-500 text-sm mt-2">
              Write something first....
            </p>
          )}
          <div className="w-full flex justify-center rounded-[20px] my-2 items-center object-cover h-fit border">
            {previewUrl && (
              <img
                src={previewUrl}
                className="w-full h-fit max-h-[500px] object-cover rounded-[20px]"
                alt="Preview"
              />
            )}
          </div>

          <div className="flex flex-nowrap justify-between w-full h-8 gap-1">
            <label
              htmlFor="my-modal"
              onClick={addPost}
              className={`w-full h-full shadow-md cursor-pointer hover:shadow-lg py-1 hover:bg-hover_green_custom bg-green_custom text-white font-medium rounded-[20px] text-center ${
                isPostDisabled || validationError !== ""
                  ? "opacity-50 bg-icons_color hover:bg-red-500 cursor-not-allowed"
                  : ""
              }`}
              disabled={isPostDisabled || validationError !== ""}
            >
              Post
            </label>
            <img
              onClick={handleClick}
              src={picture}
              className="w-10 h-10 p-1 rounded-full hover:border-2"
            />
            <input
              ref={imgRef}
              onChange={handleImageUpload}
              className="hidden"
              type="file"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
