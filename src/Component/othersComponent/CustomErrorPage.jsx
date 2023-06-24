import React from "react";
import { useSelector } from "react-redux";
import VerifyEmail from "../anonymous/SignupPage/VerifyEmail";
import SignupPage from "../anonymous/SignupPage/SignupPage";
import LoginPage from "../../Pages/LoginPage";
import CreatePostPopUp from "../user/Homepage/CenterSide/CreatePostPopUp";
import SendOTPwithEmail from "../anonymous/ResetPassword/SendOTPwithEmail";
import VerifyOTPCode from "../anonymous/ResetPassword/VerifyOTPCode";
import Spinner from "./Spinner";
import SpinnerNew1 from "./SpinnerNew1";
import BackendError from "./BackendError";
import RetryComponent from "./RetryComponent";
import GoogleMaps from "./GoogleMaps";
import Map from "./Map";
export default function CustomErrorPage() {
  const popup = useSelector((state) => state.PopupSlice.value);

  return (
    <div>
    {popup=="spinner"? <SpinnerNew1></SpinnerNew1>:""}
    {popup=="spinner1"? <Spinner></Spinner>:""}
    {popup=="retry"? <RetryComponent></RetryComponent>:""}
    {popup=="errorapi"? <BackendError></BackendError>:""}
    {popup=="map"? <Map></Map>:""}
    </div>

  );
}
