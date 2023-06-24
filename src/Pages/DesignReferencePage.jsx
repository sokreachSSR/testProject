import React, { useEffect, useRef, useState } from "react";
import { DropShadow, GreyBackGround } from "../utils/Style";
import UserNavBar from "../Component/user/UserNavBar";
import { Link, Outlet, useLocation } from "react-router-dom";
import { StaticImage } from "../../src/utils/StaticImage";

export default function ReferencePage() {
  const activeTab = useLocation();

  const location = useLocation();

  useEffect(() => {
    // Reset the scroll position to the top when navigating
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div  className=" h-[100vh] min-h-screen">
      <div  className={`${GreyBackGround} relative`}>
        <UserNavBar />
      </div>
      <div className="h-full mt-[90px] w-full">
        <div className="min-w-fit h-[334px] bg-white shadow-lg relative mx-10 rounded-tl-[9999px] rounded-[520px]">
          <img
            src={StaticImage.ImgCertificate}
            alt=""
            className="w-[340px] absolute right-0 top-28"
          />
          <div className="w-[360px] h-[334px] bg-green_custom rounded-tr-[100px] absolute -left-10 -top-5 -z-50"></div>
          <div className="w-10 h-[2222px] bg-green_custom absolute -left-10 -z-10"></div>
          <div className="flex justify-center">
            <h1 className="font-bold text-3xl mt-5">
              Choose a template create your beautiful reference or certificate
            </h1>
          </div>
          <div className="mt-5 text-center">
            <h3 className="font-bold text-xl text-[#949494]">
              Pick your favorite! You'll be able to change it late
            </h3>
            <div className="flex justify-center items-center mt-7">
              <div className="flex justify-between items-center px-14 w-[720px] h-24 rounded-[10px] shadow-lg">
                <Link
                  to=""
                  className="font-medium text-2xl"
                >
                  All
                  <div
                    className={` ${
                      activeTab.pathname === "/design-reference"
                        ? "w-10 h-2 rounded-[20px] bg-green_custom"
                        : " "
                    } `}
                  ></div>
                </Link>
                <Link
                  to="sort-reference"
                  className="font-medium text-2xl"
                >
                  Reference
                  <div
                    className={` ${
                      activeTab.pathname === "/design-reference/sort-reference"
                        ? "w-30 h-2 rounded-[20px] bg-green_custom"
                        : " "
                    } `}
                  ></div>
                </Link>
                <Link
                  to="sort-certificate"
                  className="font-medium text-2xl"
                >
                  Certificate
                  <div
                    className={` ${
                      activeTab.pathname === "/design-reference/sort-certificate"
                        ? "w-30 h-2 rounded-[20px] bg-green_custom"
                        : " "
                    } `}
                  ></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${DropShadow} min-w-fit flex items-center h-[160px] mr-10 ml-28 mt-10 bg-white border-2 border-green_custom rounded-[20px]`}
        >
          <div className="grid content-center w-1/2 h-[160px] bg-green_custom rounded-l-[20px] rounded-r-[100px] pl-5 -ml-0.5">
            <h2 className="font-medium text-[38px] text-white mb-2">
              Design Reference or Certificate{" "}
            </h2>
            <p className="font-light text-base text-white">
              You are on progress to creating Reference or Certificate. Make a
              beautiful <br />
              Reference or Certificate for{" "}
              <span className="capitalize text-lg font-semibold">
                you
              </span>
            </p>
          </div>
          <div className="w-1/2 h-[160px] rounded-r-[18px] flex items-end pb-5 pl-4">
            <Link to="form-editor"
              href="#"
              className="flex items-end text-xl underline font-medium text-green_custom"
            >
              Go to Design
              <svg
                className="ml-3"
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_364_34388)">
                  <path
                    d="M10.6458 21.6927C10.3785 21.4253 10.2385 21.0851 10.2258 20.6719C10.2132 20.2587 10.341 19.9184 10.6094 19.651L17.7552 12.5052H1.45834C1.04514 12.5052 0.698547 12.3652 0.418547 12.0852C0.138547 11.8052 -0.000967176 11.4591 5.04613e-06 11.0469C5.04613e-06 10.6337 0.140005 10.2871 0.420005 10.0071C0.700005 9.72708 1.04612 9.58757 1.45834 9.58854H17.7552L10.6094 2.44271C10.342 2.17535 10.2142 1.83507 10.2258 1.42187C10.2375 1.00868 10.3775 0.668402 10.6458 0.401041C10.9132 0.13368 11.2535 0 11.6667 0C12.0799 0 12.4201 0.13368 12.6875 0.401041L22.3125 10.026C22.4583 10.1476 22.5619 10.2997 22.6231 10.4825C22.6844 10.6653 22.7145 10.8534 22.7135 11.0469C22.7135 11.2413 22.6834 11.4236 22.6231 11.5937C22.5629 11.7639 22.4593 11.9219 22.3125 12.0677L12.6875 21.6927C12.4201 21.9601 12.0799 22.0937 11.6667 22.0937C11.2535 22.0937 10.9132 21.9601 10.6458 21.6927Z"
                    fill="#04AA9C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_364_34388">
                    <rect width="22.7136" height="22.0938" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
        </div>
        <div className="min-w-fit mr-10 ml-28 mt-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
