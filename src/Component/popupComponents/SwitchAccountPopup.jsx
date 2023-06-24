import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RingLoader } from "react-spinners";
import logo from "../../assets/Logo.png";

export default function SwitchAccountPopup() {
  const companyDetail = useSelector(
    (state) => state.companyDetail.company_detail
  );
  const userDetails = useSelector((State) => State.userDetail.userDetail);
  const role = useSelector((state) => state.userDetail.userDetail.role);
  const [switchName,setSwitchName] =useState()
  const [check,setCheck] =useState(true)
  useEffect(()=>{
    if(userDetails.fullName && companyDetail.companyName && check){
      setSwitchName( role == "company"? userDetails.fullName : companyDetail.companyName)
        setCheck(false);
    }
  })
  
  return (
    <div>
      {/* The button to open modal */}
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_switch" className="modal-toggle" />
      <div
        className="modal bg-transparent bg-white"
      >
        <div
          className="modal-box py-32 bg-white"
          style={{
            maxWidth: "42rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="flex flex-col items-center">
            <div role="status" className="mb-4">
              <RingLoader color="#04AA9C" size={80} />
            </div>
            <p className="text-gray-600 text-lg">
              Switching to{" "}
              <span className=" font-semibold">{switchName}</span>
            </p>
          </div>
          {/* <div className="flex justify-center">
            <img className="w-1/6" src={logo} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
