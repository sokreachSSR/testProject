import React from "react";
import ReferenceNavbarCom from "../Component/Reference/Request_from_user/ReferenceNavbarCom";
import { Outlet } from "react-router-dom";
import UserNavBar from "../Component/user/UserNavBar";

export default function ReferenceRequestFromUserPage() {
  return (
    <div className="bg-light_gray_custom ">
      <UserNavBar />
      <div className="pt-20 px-4 2md:px-10 lg:px-32 xl:px-52 2xl:px-80">
        <ReferenceNavbarCom />
        <Outlet />
      </div>
    </div>
  );
}
