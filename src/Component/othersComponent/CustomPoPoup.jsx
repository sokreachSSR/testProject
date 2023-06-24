import React, { useState } from "react";
import { useSelector } from "react-redux";
import VerifyEmail from "../anonymous/SignupPage/VerifyEmail";
import SignupPage from "../anonymous/SignupPage/SignupPage";
import LoginPage from "../../Pages/LoginPage";
import CreatePostPopUp from "../user/Homepage/CenterSide/CreatePostPopUp";
import SendOTPwithEmail from "../anonymous/ResetPassword/SendOTPwithEmail";
import VerifyOTPCode from "../anonymous/ResetPassword/VerifyOTPCode";
import ApplyJob from "../user/Homepage/CenterSide/Card/ApplyJob";
import EditProfilePopup from "../user/Homepage/CenterSide/EditUserProfilePopup";
import ComfirmPW from "../anonymous/ResetPassword/ComfirmPW";
import FollowPopup from "../user/Homepage/CenterSide/FollowPopup";
import EditPostPop from "../user/Homepage/CenterSide/EditPostPop";
import { useRef } from "react";
import { useEffect } from "react";

export default function CustomPoPoup() {
  const popup = useSelector((state) => state.PopupSlice.value);
  const [user, setUser] = useState({});
  const hello = useRef(null);
  const handleClick = (e) => {
    setUser(user);
    console.log("data", user);
  };
  useEffect(() => {
    if (popup == "spinner") {
      hello
      .current.style.display = 'none';
    }
    if (popup == "close") {
      hello
      .current.click();
    }
  }, [popup]);

  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
      {/* overflow-y-scroll */}
        <label className="w-auto h-auto relative">
          <label
            ref={hello}
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute right-3 top-2 z-30 text-white bg-green_custom border-none hover:bg-hover_green_custom"
          >
            ✕
          </label>
          {popup == "verify" ? <VerifyEmail></VerifyEmail> : ""}
          {popup == "register" ? <SignupPage /> : ""}
          {popup == "login" ? <LoginPage /> : ""}
          {popup == "sendOTP" ? <SendOTPwithEmail /> : ""}
          {popup == "verifyOTP" ? <VerifyOTPCode /> : ""}
          {popup == "confirmpassword" ? <ComfirmPW /> : ""}
          {popup == "createpost" ? <CreatePostPopUp /> : ""}
          {popup == "applyjob" ? <ApplyJob /> : ""}
          {popup == "editpro" ? <EditProfilePopup /> : ""}
          {popup == "follow" ? <FollowPopup /> : ""}
          {popup == "editpost" ? <EditPostPop /> : ""}
        </label>
      </div>
    </div>
  );
}
