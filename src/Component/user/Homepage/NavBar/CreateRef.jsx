import React from "react";
import { StaticImage } from "../../../../utils/StaticImage";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import create_ref_icn from "../../../../assets/create_ref_icon.svg";

export default function CreateRef({click}) {
  // const typeuser = useSelector((state) => state.userDetail.userDetail.role);
  const typeuser = useSelector((state) => state.userDetail.userDetail.role);
  const storedUserRole = localStorage.getItem("userRole") || "user"; // Get user role from localStorage, default to "user" if not found


  return (
    <div>
      {storedUserRole == "user" ? (
        <div onClick={()=>click()} className=" cursor-pointer">
          {/* width="23" height="25" */}
          {/* <img src={StaticImage.Document} className="w-24px -mt-1 md:w-12 xl:14px " /> */}
          <div className="w-8 h-8 md:w-10 md:h-10 flex justify-center items-center border-black-100 border rounded-full">
            <img src={create_ref_icn} className="w-4 h-4 md:w-7 md:h-7" />
          </div>
        </div>
      ) : (
        <Link to="/company-reference">
          <div className="w-8 h-8 md:w-10 md:h-10 flex justify-center items-center border-black-100 border rounded-full">
            <img src={create_ref_icn} className="w-4 h-4 md:w-7 md:h-7" />
          </div>
        </Link>
      )}
      {/* Put this part before </body> tag */}
      
      
    </div>
  );
}
