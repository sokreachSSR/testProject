import React from "react";
import UserLeftSideFeature from "../Component/user/Homepage/Leftside/UserLeftSideFeature";
import LadingPage_Navbar from "../Component/anonymous/LadingPage_Navbar";
import SubNavComponent from "../Component/user/Homepage/CenterSide/SubNavComponent";
import Con_Sugest_Component from "../Component/user/Homepage/CenterSide/Con_Sugest_Component";
import Job_Rec from "../Component/user/Homepage/CenterSide/Job_Rec";
import ProfileComponent from "../Component/user/Homepage/Leftside/ProfileComponent";
import ConectionPageSeeUser from "../Component/user/Homepage/CenterSide/ConectionPageSeeUser";
import AboutUserPro from "../Component/user/Homepage/CenterSide/Card/AboutUserPro";
import Profile from "../Component/user/Homepage/CenterSide/Card/Profile";
import AboutCompanyPro from "../Component/user/Homepage/CenterSide/Card/AboutCompanyPro";
import CreatePost from "../Component/user/Homepage/CenterSide/CreatePost";
import CompanyProfile from "../Component/user/Homepage/CenterSide/Card/CompanyProfile";
import ViewOwnUserProfile from "../Component/user/Homepage/CenterSide/ViewOwnUserProfile";
import ViewOwnCompanyProfile from "./ViewOwnCompanyProfile";

export default function MainComponent() {
  return (
    <div className="bg-gray-100">
      {/* <LadingPage_Navbar /> */}
      {/* <Profile /> */}
      {/* <ViewOwnUserProfile /> */}
      {/* <ViewOwnCompanyProfile /> */}
      {/* <References /> */}
      {/* <div className="grid grid-cols-12 gap-4 mx-14 my-[30px]">
        <div className="col-span-12 sm:col-span-12 md:col-span-3 lg:col-span-3">
          <ProfileComponent />
          <UserLeftSideFeature />
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-3 lg:col-span-9">
          <SubNavComponent />
          <Con_Sugest_Component />
          <Job_Rec />
          <ConectionPageSeeUser />
          <AboutPage />
        </div>
        <div className='col-span-3'>

        </div>
      </div> */}
    </div>
  );
}
