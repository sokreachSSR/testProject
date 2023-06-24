import React from "react";
import { Link } from "react-router-dom";
import Suggest_Company from "./Suggestion/Suggest_Company";
import Suggest_User from "./Suggestion/Suggest_User";

export default function LandingPage_Rightbar() {
  return (
    <div className="fixed top-20 hidden xl:block md:right-8 lg:right-10 xl:right-12 2xl:right-20">
        <Suggest_Company/>
        <Suggest_User/>
    </div>
  );
}
