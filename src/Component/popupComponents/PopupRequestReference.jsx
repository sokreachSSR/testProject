import React from "react";
import { Link } from "react-router-dom";
import request_ref_btn from "../../assets/request_referencce_btn.svg";
import create_ref_btn from "../../assets/create_reference_btn.svg";
import { DropShadow } from "../../utils/Style";

export default function PopupRequestReference() {
  return (
    <div>
      <input type="checkbox" id="my-modal-ref" className="modal-toggle" />
      <label htmlFor="my-modal-ref" className="modal cursor-pointer" style={{backgroundColor: "transparent"}} >
        <div
          className={`${DropShadow} modal-box absolute top-14 right-32 p-2 w-fit`}
          style={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
            backgroundColor: "transperent"
          }}
        >
          <div className="modal-action flex flex-col mt-0">
            {/* request */}
            <Link  onClick={() => window.location.href = '/home/reference'} className="">
              <label
                htmlFor="my-modal-ref"
                className="flex items-center bg-white hover:bg-light_gray_custom capitalize px-2 rounded-[20px]"
              >
                <img src={request_ref_btn} className="w-10 h-10" />
                <p className="py-4 text-gray-700 text-md ml-4 font-semibold">Request reference</p>
              </label>
            </Link>
            {/* create */}
            <Link onClick={() => window.location.href = '/design-reference'} className=""
            style={{
              margin: "0 0 0 0",
            }}  
            >
              <label
                htmlFor="my-modal-ref"
                className="flex items-center bg-white hover:bg-light_gray_custom capitalize px-2 rounded-[20px]"
              >
                <img src={create_ref_btn} alt="" className="w-10 h-10" />
                <p className="py-4 text-gray-700 text-md ml-4 font-semibold">Create reference</p>
              </label>
            </Link>
          </div>
        </div>
      </label>
    </div>
  );
}
