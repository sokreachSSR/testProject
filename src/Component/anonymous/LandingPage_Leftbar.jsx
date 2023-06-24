import React, { useEffect } from "react";
import { loginService, register } from "../../Redux/service/login.service";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { DropShadow } from "../../utils/Style";
import GoogleSignup from "../othersComponent/GoogleSignup";
import SignupPage from "./SignupPage/SignupPage";
import { useDispatch, useSelector } from "react-redux";
import { setPopup } from "../../Redux/slices/PopupSlice";

export default function LandingPage_Leftbar() {
  const dispatch = useDispatch();

  return (
    <div>
      <div
        className={`${DropShadow} fixed top-20 left-4 md:left-8 lg:left-10 xl:left-12 2xl:left-20 lg:w-[280px] 2lg:w-[325px] 3lg:w-[335px] xl:w-[255px] 2xl:w-[275px] hidden lg:block`}
      >
        <h1 className="font-bold text-2xl p-2 lg:p-5 text-black">
          Need to Portify?
        </h1>
        <h3 className="font-medium text-[15px] pl-2 lg:pl-5 text-black">
          Sign up now to get your own personalized timeline!
        </h3>
        <div className="flex flex-wrap flex-col items-center p-2 2xl:p-5">
          <div className="w-[90%]">
            <GoogleSignup></GoogleSignup>
          </div>
          {/*  Register session  */}
          <label
            onClick={() => {
              dispatch(setPopup("register"));
            }}
            htmlFor="my-modal"
            class="hover:cursor-pointer text-[15px] px-2 flex text-black items-center justify-center rounded-[20px] font-medium border-2 border-green_custom h-12 w-[90%]"
          >
            New to Portify? &nbsp;{" "}
            <span className="text-green_custom">Join Now!</span>
          </label>
          <span className=" text-center text-black text-[13px] mt-2 md:mt-5">
            By signing up, you agree to the Terms of Service and Privacy Policy,
            including Cookie Use.
          </span>
        </div>
      </div>
    </div>
  );
}
