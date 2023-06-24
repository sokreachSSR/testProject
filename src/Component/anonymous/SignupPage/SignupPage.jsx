import React from "react";
import { GreyBackGround } from "../../../utils/Style";
import SignupPage_Content from "./SignupPage_Content";

export default function SignupPage() {
  return (
    <div className={` ${GreyBackGround} rounded-3xl `}>
      <SignupPage_Content></SignupPage_Content>
    </div>
  );
}
  