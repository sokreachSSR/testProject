import React from "react";
import { Link, useLocation } from "react-router-dom";
import com_gray from "../../../../assets/Company_Gray.svg";
import com_white from "../../../../assets/Company_White.svg";
import user_gray from "../../../../assets/User_Gray.svg";
import user_white from "../../../../assets/User_White.svg";

export default function SubNavComponentSavePost() {

const activeTab = useLocation();

  return (
    <div className="grid grid-cols-9 gap-10">
      <div className="col-span-9 xl:col-span-6 px-4 md:px-8 lg:ml-0 md:ml-0 mt-10 lg:mt-20 pl-4 md:pl-8 lg:pl-0 pr-4 md:pr-8 lg:pr-10 xl:pr-0">
        <div className="w-full h-[70px] p-4 rounded-3xl items-center drop-shadow text-black bg-white flex gap-4">
          <div>
            <Link 
            to="/home/saved"
            className={`${activeTab.pathname === "/home/saved" ? "flex items-center bg-green_custom text-white border px-2 rounded-[20px]" : "flex items-center border px-2 rounded-[20px]"}`}>
              <img src={`${activeTab.pathname === "/home/saved" ? user_white : user_gray }`} className="w-4 h-4 md:w-7 md:h-7"/>
              <div><p className="p-2">Posts</p></div>
            </Link>
          </div>
          <div>
            <Link
            to="/home/saved/company"
            className={`${activeTab.pathname === "/home/saved/company" ? "flex items-center bg-green_custom text-white border px-2 rounded-[20px]" : "flex items-center border px-2 rounded-[20px]"}`}>
              <img src={`${activeTab.pathname === "/home/saved/company" ? com_white :  com_gray }`} className="w-4 h-4 md:w-7 md:h-7"/>
              <div><p className="p-2">Job Annoucements</p></div>
            </Link>
          </div>
        </div>
      </div>
      <div className="xl:col-span-3 hidden xl:block">

      </div>
    </div>
  );
}
