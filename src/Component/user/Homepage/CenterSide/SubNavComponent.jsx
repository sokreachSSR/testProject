import React, { useEffect, useState } from "react";
import users from "../../../../assets/users.png";
import list from "../../../../assets/list.png";
import { Link, useLocation } from "react-router-dom";
import con_com_white from "../../../../assets/con_com_white.svg";
import con_user_white from "../../../../assets/connectionUser.svg";
import con_com_black from "../../../../assets/con_com_black.svg";

import com_gray from "../../../../assets/Company_Gray.svg";
import com_white from "../../../../assets/Company_White.svg";
import user_gray from "../../../../assets/User_Gray.svg";
import user_white from "../../../../assets/User_White.svg";



export default function SubNavComponent() {
  // const [activeTab, setActiveTab] = useState("user-con");

  // useEffect(() => {
  //   if(localStorage.getItem("ActiveStateCon")){
  //   setActiveTab(localStorage.getItem("ActiveStateCon"));
  // }

// },[])
//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     localStorage.setItem("ActiveStateCon",tab)
//   };
const activeTab = useLocation();

  return (
    <div className="lg:ml-0 md:ml-0 mt-10 lg:mt-20 mb-4 pl-4 md:pl-8 lg:pl-0 pr-4 md:pr-8 lg:pr-10 xl:pr-12 2xl:pr-20">
      <div className="w-full h-[70px] p-4 rounded-3xl items-center drop-shadow text-black bg-white flex gap-4">
        <div>
          <Link
          to="/home/connection"
          className={`${activeTab.pathname === "/home/connection" ? "flex items-center bg-green_custom text-white border px-2 rounded-[20px]" : "flex items-center border px-2 rounded-[20px]"}`}>
            <img src={`${activeTab.pathname === "/home/connection" ? user_white :  user_gray }`} className="w-4 h-4 md:w-7 md:h-7"/>
            <div><p className="p-2">Users</p></div>
          </Link>
        </div>
        <div>
          <Link
          to="/home/connection/company"
          className={`${activeTab.pathname === "/home/connection/company" ? "flex items-center bg-green_custom text-white border px-2 rounded-[20px]" : "flex items-center border px-2 rounded-[20px]"}`}>
            <img src={`${activeTab.pathname === "/home/connection/company" ? com_white :  com_gray }`} className="w-4 h-4 md:w-7 md:h-7"/>
            <div><p className="p-2">Companies</p></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
