import React, { useEffect, useRef, useState } from "react";
import { StaticImage } from "../../../../utils/StaticImage";
import InputBtn from "../../../othersComponent/InputBtn";
import { PostUser } from "../../../../Redux/service/Post";
import { Dropdown } from "flowbite-react";
import publicIcon from "../../../../assets/public.svg";
import picture from "../../../../assets/picture.png";
import publicColor from "../../../../assets/publicColor.svg";
import KeyColor from "../../../../assets/KeyColor.svg";
import "flowbite";
import MiniProfile from "./Card/MiniProfile";
import EditUser from "./Card/EditPersonalInfromation";
import EditPersonalInfromation from "./Card/EditPersonalInfromation";
import EditEducationBackground from "./Card/EditEducationBackground";
import BtnCancelSave from "./Card/BtnCancelSave";
import { Navigate } from "react-router-dom";
import {
  UpdateUserCover,
  UpdateUserDetails,
  UpdateUserProfile,
} from "../../../../Redux/service/UpdateUserProfile";
import { UserProfile } from "../../../../Redux/service/UserProfile";
import { setLoading } from "../../../../Redux/slices/LoadingSlice";
import { setUserDetail } from "../../../../Redux/slices/userDetailSlide";
import { useDispatch, useSelector } from "react-redux";
import { setPopup } from "../../../../Redux/slices/PopupSlice";

export default function EditProfilePopup() {
  const [user, setUser] = useState({
    jobType : "Accounting",
    skill : {},
    phoneNumber : "",
    description : "",
    address: "",
    education : {},
    experience : {},
  });
  const [tab, setTab] = useState(true);
  const [previewUrl, setPreviewUrl] = useState("");
  const [previewCover, setPreviewCover] = useState("");
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [isComponentOpen, setComponentOpen] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const Loading = useSelector((state) => state.loading.value);
  const dispatch = useDispatch();
  useEffect(() => {
    UserProfile().then((response) => {
      if (response.data.payload.jobType === null)
      setUser({ ...response.data.payload, jobType: "Accounting" })
    else setUser(response.data.payload);
    });
  }, []);

  const handleClick = (e) => {
    dispatch(setLoading(true))
    const newEdu = user.education;
    const newSkill = user.skill;
    const newExp = user.experience;
    var newitemEdu = {};
    var newitemSkill = {};
    var newitemExp = {};
    
    Object.entries(newEdu?newEdu:{}).map((item, keyboard) => {
      if (item[1] != "") newitemEdu = { ...newitemEdu, [item[0]]: item[1] };
    });
    Object.entries(newSkill?newSkill:{}).map((item, keyboard) => {
      if (item[1] != "") newitemSkill = { ...newitemSkill, [item[0]]: item[1] };
    });
    Object.entries(newExp?newExp:{}).map((item, keyboard) => {
      // if (item[1] != "") newitemExp = { ...newitemExp, [item[0]]: item[1] };

      var abc = item[1].filter((items,indexs)=>{
        if (items){
        if (items.description!=="") {
          return items};
        }
      })
      
      if([item[0]][0] !=="" &&!(item.length===1 || item[1].length===0 ))
      newitemExp = { ...newitemExp, [item[0]]: abc };

    });
    setUser({ ...user, education: newitemEdu ,skill: newitemSkill,experience: newitemExp});
    // setUser({ ...user, skill: newitemSkill });
    // setUser({ ...user, experience: newitemExp });


    UpdateUserDetails({ ...user, education: newitemEdu ,skill: newitemSkill,experience: newitemExp}).then((res)=>{
      dispatch(setLoading(false))
      dispatch(setPopup("close"));
      setComponentOpen(false);
    }).catch((error) => {
    });

    if (previewUrl != "") {
      UpdateUserProfile(user).catch((error) => {
      });
    }

    if (previewCover != "") {
      UpdateUserCover(user).catch((error) => {
      });
    }
    setTimeout(() =>{
      UserProfile().then((res4) =>{
        dispatch(setUserDetail({...res4.data.payload,role:"user"}));
      })
    },1000)
  };
  const handleCancel = () => {
    setComponentOpen(false);
  };
  // if (!isComponentOpen) {
  //   return null; // Render nothing if the component is closed
  // }
  const handleSave = () => {
    // Perform save operations or update data
    setIsValidPhone(true); // Example: Update the isValidPhone state

    setIsPopupOpen(false); // Close the popup
  };

  return (
    <div className=" h-[670px] bg-white pt-2 rounded-[20px] mb-5 pb-2 w-[300px] sm:w-[600px] m-auto">
      {/* absolute  */}
      <div className="flex bg-white items-center rounded-t-[20px] justify-center my-1 pb-2 border-b-2">
        <p className="font-MainFont text-green_custom text-[20px] font-black ">
          Edit profile
        </p>
      </div>
      <div className="absolute rounded-b-[20px] bg-white overflow-hidden2 w-full">
        <div className="">
          <div className="h-[570px]" style={{ overflowY: "scroll" }}>
            <div className="">
              <MiniProfile
                change={setTab}
                value={tab}
                setUser={setUser}
                user={user}
                previewUrl={previewUrl}
                setPreviewUrl={setPreviewUrl}
                setPreviewCover={setPreviewCover}
                previewCover={previewCover}
              />
            </div>
            <div className="ml-4 mr-3 mb-3">
              {tab ? (
                <EditPersonalInfromation setUser={setUser} user={user} phone={isValidPhone} setPhone={setIsValidPhone} />
              ) : (
                <EditEducationBackground setUser={setUser} user={user} />
              )}
            </div>
          </div>
        </div>
        <div className="mb-2">
          <BtnCancelSave Loading={Loading} change={handleClick} cancel={handleCancel} phone={isValidPhone} setPhone={setIsValidPhone} isComponentOpen={isComponentOpen}/>
        </div>
      </div>
    </div>
  );
}
