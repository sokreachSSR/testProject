import React, { useEffect, useRef, useState } from "react";
import picture from "../../../../../assets/picture.png";
import camera from "../../../../../assets/camera.png";
import { Link, Outlet } from "react-router-dom";
import { UserProfile } from "../../../../../Redux/service/UserProfile";
import { PostUser } from "../../../../../Redux/service/Post";
import { BASE_URL1 } from "../../../../../utils/Utils";

export default function MiniProfile({ change, value, setUser, user, previewUrl, setPreviewUrl,previewCover,setPreviewCover,btnClickProfile}) {
  const [postImage, setpostImage] = useState();
  const [cover, setCover] = useState();
  const imgReff = useRef();
  const imgReff1 = useRef();
  const inputRef = useRef(null);
  const [isDropdownOpen,setIsDropdownOpen] = useState(false);


  useEffect(() => {
    UserProfile().then((resoponse) => {
      setUser(resoponse.data.payload);
    });
  }, []);

  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log(user);
  };
  const handleTabClick = (tab) => {
    change(tab);

  };

  const handleImageUpload = (event) => {
    const fileName = event.target.files[0];
    setpostImage(fileName);
    setUser({...user,profileImage:fileName});
    console.log("profile",fileName)

    if (fileName) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(fileName);
    }
  };
  const handleImageCover = (event) => {
    const fileName = event.target.files[0];
    setCover(fileName);
    setUser({...user,coverImage:fileName});
    console.log("cover",fileName)
    if (fileName) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewCover(reader.result);
      };
      reader.readAsDataURL(fileName);
    }
  };
  const handleClick = () => {
    imgReff.current.click();
    
  };
  const handleClick1 = () => {
    imgReff1.current.click();
    
  };

  const args = { hover: true };


  return (
    <div className="">
      
      <div
        className={`rounded-none border-b-2 rounded-b-none w-full m-auto font-MainFont pt-1 px-4`}
      >
        <div className="relative h-0">
          <button>
            <img
              onClick={handleClick}
              src={camera}
              className="absolute top-[165px] right-4 border bg-gray-100 rounded-full p-1 w-6"
              alt=""
            />

            <input
              ref={imgReff}
              onChange={handleImageCover}
              className="hidden"
              type="file"
            />
          </button>
        </div>
        <div className="border rounded-t-[20px]">
          <img
            src={previewCover?previewCover:`${BASE_URL1 + user.coverImage}`}
            className="w-full m-auto h-[200px] object-cover rounded-t-[20px]"
            alt=""
          />
        </div>



        <div className="flex relative">
          <button >
            {/* <img
              src={camera}
              className="absolute top-[20px] right-4 border bg-gray-100 rounded-full p-1 w-6"
              alt=""
            /> */}
            <img
              onClick={handleClick1}
              src={camera}
              className="absolute top-[20px] left-[100px] z-10 border bg-gray-100 rounded-full p-1 w-6"
              alt=""
            />

            <input
              ref={imgReff1}
              onChange={handleImageUpload}
              className="hidden"
              type="file"
            />
          </button>
        </div>
        <div className="flex justify-between h-[60px]">
          <div>
            <div className="flex relative">
              <div className="absolute left-5 -top-9">
                <img
                  src={previewUrl ? previewUrl:`${BASE_URL1 + user.profileImage}`}
                  className="w-[100px] object-cover h-[100px] border-gray-300 rounded-full border-[3px] bg-white"
                  alt=""
                />
              </div>
            </div>
            <div className="ml-[140px] mt-3">
              <div>
                <h1 className="font-SecondaryFont text-[20px] font-semibold">
                  {user.fullName}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-evenly pt-3 ">
          <div>
            <button onClick={() => handleTabClick(true)} type="button" className="">
              <p className="py-1 font-semibold font-SecondaryFont">
                Personal Information
              </p>
              <div
                className={` ${
                  value ? "w-full h-[4px] rounded-[20px] bg-green_custom" : ""
                }`}
              ></div>
            </button>
          </div>
          <div>
            <button onClick={() => handleTabClick(false)} type="button" className="">
              <p className="py-1 font-semibold font-SecondaryFont ">
                Education Background
              </p>
              <div
                className={` ${
                  value ? "" : "w-full h-[4px] rounded-[20px] bg-green_custom"
                }`}
              ></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
