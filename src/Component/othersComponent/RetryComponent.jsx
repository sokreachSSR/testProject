import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPopup } from "../../Redux/slices/PopupSlice";
import {
  RegisterWithGoogle,
  loginWithGoogle,
} from "../../Redux/service/Register_Service";
import { WhenLogin } from "../../Redux/service/login.service";
import { UserProfile } from "../../Redux/service/UserProfile";
import { setUserDetail } from "../../Redux/slices/userDetailSlide";
import { Navigate } from "react-router-dom";

export default function RetryComponent() {
  const googleUser = useSelector((state) => state.userDetail.userDetail);
  const retryLogin = () => {
    dispatch(setPopup("spinner"));
    RegisterWithGoogle(googleUser).then((result) => {
      if (result.status === 200 || result.response) {
        loginWithGoogle(googleUser).then((r) => {
          WhenLogin(r);
          if (r.status === 200) {
            UserProfile().then((res) => {
              dispatch(setPopup(""));
              dispatch(setUserDetail({ ...res.data.payload, role: "user" }));
              console.log(res);
            });
            Navigate("/home");
          }
        });
      } else {
        dispatch(setPopup("errorapi"));
      }
    });
  };
  const dispatch = useDispatch();
  return (
    <div  class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 bg-opacity-75 flex flex-col items-center justify-center">
    {/* <button onClick={retryLogin} type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Retry Again</button>
    <button onClick={()=>{dispatch(setPopup(""))}} type="button" class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 shadow-lg shadow-lime-500/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Close</button> */}

      <div className="bg-white  rounded-lg shadow-lg p-8 space-y-4">
        <p className="text-lg text-gray-900 ">
          Something went wrong. Please retry.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={retryLogin}
            type="button"
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 shadow-lg rounded-lg text-sm px-5 py-2.5"
          >
            Retry Again
          </button>
          <button
            onClick={() => dispatch(setPopup(""))}
            type="button"
            className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 shadow-lg rounded-lg text-sm px-5 py-2.5"
          >
            Close
          </button>
        </div>
      </div>
    </div>

  );
}
