import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../../../src/App.css";
import all_w from "../../../assets/All-k-w.svg";
import all_b from "../../../assets/All-k-b.svg";
import ref_b from "../../../assets/ref-k-b.svg";
import ref_w from "../../../assets/ref-k-w.svg";
import cert_b from "../../../assets/cert-k-b.svg";
import cert_w from "../../../assets/cert-k-w.svg";
import reference_pic from "../../../assets/reference_nav_pic.png";
import reference_bg_pic from "../../../assets/reference_bg_pic.svg";

export default function ReferenceNavbarCom() {
  const activeTab = useLocation();
  return (
    <div>
      {/* original */}
      <div className="flex justify-center sm:justify-between items-center rounded-[20px] shadow bg-white">
        {/* left */}
        <div
          className='w-[30%] hidden sm:flex rounded-r-full bg-green_custom justify-start items-center pr-2'
        >
          {/* picture */}
          <div className="w-[50%]">
            <img
              src={reference_pic}
              alt=""
              className="w-full h-[200px] object-contain rounded-s-[20px]"
            />
          </div>
          {/* text */}
          <div>
            <p className="text-white font-SecondaryFont text-md md:text-lg lg:text-xl xl:text-2xl font-bold ">
              <p>What make</p>
              <p>you unique?</p>
            </p>
          </div>
          {/* <p className="text-white font-SecondaryFont text-3xl font-bold break-all">
            What make you unique?
          </p> */}
        </div>

        {/* center */}
        <div className="flex justify-center items-center bg-white w-[450px] h-[200px] rounded-[20%]">
          <div className="h-[100px]">
            <ul className="">
              <li className="flex justify-evenly gap-2">
                <Link
                  to=""
                  className={`text-black font-SecondaryFont text-[16px] font-bold ${
                    activeTab.pathname === "/company-reference" ? "active" : ""
                  }`}
                >
                  <div
                    className={`w-[86px] h-[60px] flex justify-center ${
                      activeTab.pathname === "/company-reference"
                        ? "active"
                        : ""
                    }`}
                  >
                    <div
                      className={`w-[60px] h-[60px] rounded-full ${
                        activeTab.pathname === "/company-reference"
                          ? "bg-green_custom"
                          : "bg-light_gray_custom"
                      } flex justify-center items-center`}
                    >
                      <img
                        src={`${
                          activeTab.pathname === "/company-reference"
                            ? all_w
                            : all_b
                        }`}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w[86px] h-[30px] font-normal flex justify-center">
                    <p>All</p>
                  </div>
                  <div
                    className={`w-[86px] h-[60px] flex justify-center ${
                      activeTab.pathname === "/company-reference"
                        ? "active"
                        : ""
                    }`}
                  >
                    <div
                      className={` ${
                        activeTab.pathname === "/company-reference"
                          ? "w-full h-[5px] rounded-[20px] bg-green_custom"
                          : ""
                      }`}
                    ></div>
                  </div>
                </Link>
                <Link
                  to="reference-request"
                  className={`text-black font-SecondaryFont text-[16px] font-bold ${
                    activeTab.pathname ===
                    "/company-reference/reference-request"
                      ? "active"
                      : ""
                  }`}
                >
                  <div
                    className={`w-[86px] h-[60px] flex justify-center ${
                      activeTab.pathname ===
                      "/company-reference/reference-request"
                        ? "active"
                        : ""
                    }`}
                  >
                    <div
                      className={`w-[60px] h-[60px] rounded-full ${
                        activeTab.pathname ===
                        "/company-reference/reference-request"
                          ? "bg-green_custom"
                          : "bg-light_gray_custom"
                      } flex justify-center items-center`}
                    >
                      <img
                        src={`${
                          activeTab.pathname ===
                          "/company-reference/reference-request"
                            ? ref_w
                            : ref_b
                        }`}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w[86px] h-[30px] font-normal flex justify-center">
                    <p>Reference</p>
                  </div>
                  <div
                    className={`w-[86px] h-[60px] flex justify-center ${
                      activeTab.pathname ===
                      "/company-reference/reference-request"
                        ? "active"
                        : ""
                    }`}
                  >
                    <div
                      className={` ${
                        activeTab.pathname ===
                        "/company-reference/reference-request"
                          ? "w-full h-[5px] rounded-[20px] bg-green_custom"
                          : ""
                      }`}
                    ></div>
                  </div>
                </Link>
                <Link
                  to="certificate-request"
                  className={`text-black font-SecondaryFont text-[16px] font-bold ${
                    activeTab.pathname ===
                    "/company-reference/certificate-request"
                      ? "active"
                      : ""
                  }`}
                >
                  <div
                    className={`w-[86px] h-[60px] flex justify-center ${
                      activeTab.pathname ===
                      "/company-reference/certificate-request"
                        ? "active"
                        : ""
                    }`}
                  >
                    <div
                      className={`w-[60px] h-[60px] rounded-full ${
                        activeTab.pathname ===
                        "/company-reference/certificate-request"
                          ? "bg-green_custom"
                          : "bg-light_gray_custom"
                      } flex justify-center items-center`}
                    >
                      <img
                        src={`${
                          activeTab.pathname ===
                          "/company-reference/certificate-request"
                            ? cert_w
                            : cert_b
                        }`}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w[86px] h-[30px] font-normal flex justify-center">
                    <p>Certificate</p>
                  </div>
                  <div
                    className={`w-[86px] h-[60px] flex justify-center ${
                      activeTab.pathname ===
                      "/company-reference/certificate-request"
                        ? "active"
                        : ""
                    }`}
                  >
                    <div
                      className={` ${
                        activeTab.pathname ===
                        "/company-reference/certificate-request"
                          ? "w-full h-[5px] rounded-[20px] bg-green_custom"
                          : ""
                      }`}
                    ></div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* right */}
        <div className="hidden md:block w-[253px]">
          <img
            src={reference_bg_pic}
            alt=""
            className="w-full h-[200px] object-contain"
          />
        </div>
      </div>
      {/* go to design */}
      <div className="w-full flex justify-end items-end mt-5">
        <Link
          to="/company/design-reference/form-editor"
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
  );
}
