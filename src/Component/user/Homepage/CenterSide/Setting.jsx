import React from "react";
import { Link } from "react-router-dom";
import { DropShadow } from "../../../../utils/Style";

export default function Setting() {
  return (
    <div
      className={`${DropShadow} w-[92.5%] h-[620px] bg-white rounded-[20px] pb-10 mt-20 md:ml-0 lg:ml-2`}
    >
      <h2 className="pl-20 pt-14 font-bold text-3xl lg:text-2xl lg:pl-14 md:pl-12 xs:pl-8 xs:pt-8">Setting</h2>
      <p className="pl-20 pt-10 mb-7 font-normal text-lg lg:pl-14 md:pl-12 xs:pl-8">General</p>
      <div className="ml-20 mr-72 border-b-2 border-[#D9D9D9] mb-12 lg:ml-14 lg:mr-32 md:ml-12 md:mr-16 xs:ml-8 xs:mr-8">
        <Link to={"/profile"} className="flex justify-between items-center">
          <div className="flex items-center mb-4">
            <div className="w-[70px] h-[70px] rounded-full bg-green_custom flex justify-center items-center lg:w-[60px] lg:h-[60px] md:w-[50px] md:h-[50px] xs:w-[48px] xs:h-[48px]">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 0C17.3736 0 14.7728 0.517315 12.3463 1.52241C9.91982 2.5275 7.71504 4.00069 5.85786 5.85786C2.10714 9.60859 0 14.6957 0 20C0 25.3043 2.10714 30.3914 5.85786 34.1421C7.71504 35.9993 9.91982 37.4725 12.3463 38.4776C14.7728 39.4827 17.3736 40 20 40C25.3043 40 30.3914 37.8929 34.1421 34.1421C37.8929 30.3914 40 25.3043 40 20C40 17.3736 39.4827 14.7728 38.4776 12.3463C37.4725 9.91982 35.9993 7.71504 34.1421 5.85786C32.285 4.00069 30.0802 2.5275 27.6537 1.52241C25.2272 0.517315 22.6264 0 20 0ZM10.14 32.56C11 30.76 16.24 29 20 29C23.76 29 29 30.76 29.86 32.56C27.0588 34.7921 23.5817 36.0051 20 36C16.28 36 12.86 34.72 10.14 32.56ZM32.72 29.66C29.86 26.18 22.92 25 20 25C17.08 25 10.14 26.18 7.28 29.66C5.15237 26.8892 3.99933 23.4934 4 20C4 11.18 11.18 4 20 4C28.82 4 36 11.18 36 20C36 23.64 34.76 27 32.72 29.66ZM20 8C16.12 8 13 11.12 13 15C13 18.88 16.12 22 20 22C23.88 22 27 18.88 27 15C27 11.12 23.88 8 20 8ZM20 18C19.2044 18 18.4413 17.6839 17.8787 17.1213C17.3161 16.5587 17 15.7956 17 15C17 14.2044 17.3161 13.4413 17.8787 12.8787C18.4413 12.3161 19.2044 12 20 12C20.7957 12 21.5587 12.3161 22.1213 12.8787C22.6839 13.4413 23 14.2044 23 15C23 15.7956 22.6839 16.5587 22.1213 17.1213C21.5587 17.6839 20.7957 18 20 18Z"
                  fill="#F6F6F6"
                />
              </svg>
            </div>

            <p className="pl-8 font-normal text-2xl capitalize lg:text-xl text-lg xs:pl-4">
              user information
            </p>
          </div>
          <svg
            width="12"
            height="23"
            viewBox="0 0 12 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L10.6276 10.6276C10.7453 10.7404 10.839 10.8758 10.903 11.0257C10.967 11.1755 11 11.3368 11 11.4998C11 11.6628 10.967 11.8241 10.903 11.974C10.839 12.1239 10.7453 12.2593 10.6276 12.372L1 21.9997"
              stroke="#CCCCCC"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      </div>
      <div className="ml-20 mr-72 border-b-2 border-[#D9D9D9] mb-12 lg:ml-14 lg:mr-32 md:ml-12 md:mr-16 xs:ml-8 xs:mr-8">
        <Link
          to="/home/change-password"
          className="flex justify-between items-center"
        >
          <div className="flex items-center mb-4">
            <div className="w-[70px] h-[70px] rounded-full bg-[#1A73E8] flex justify-center items-center lg:w-[60px] lg:h-[60px] md:w-[50px] md:h-[50px] xs:w-[48px] xs:h-[48px]">
              <svg
                className="mr-1"
                width="40"
                height="36"
                viewBox="0 0 40 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.3145 0C32.0848 0 40 7.95053 40 17.6678C40 27.3852 32.0848 35.3357 22.3145 35.3357C16.1131 35.3357 10.689 32.1201 7.5265 27.2615L10.318 25.053C12.8092 29.0989 17.2438 31.8021 22.3322 31.8021C26.0808 31.8021 29.6759 30.313 32.3266 27.6623C34.9773 25.0116 36.4664 21.4165 36.4664 17.6678C36.4664 13.9192 34.9773 10.3241 32.3266 7.6734C29.6759 5.02271 26.0808 3.53357 22.3322 3.53357C15.1237 3.53357 9.18728 8.93993 8.32156 15.9011H13.1979L6.59011 22.4912L0 15.9011H4.75265C5.63604 6.9788 13.1625 0 22.3145 0ZM27.5442 14.5583C28.4276 14.576 29.1519 15.2827 29.1519 16.1837V24.3286C29.1519 25.212 28.4276 25.9541 27.5265 25.9541H17.7562C16.8551 25.9541 16.1307 25.212 16.1307 24.3286V16.1837C16.1307 15.2827 16.8551 14.576 17.7385 14.5583V12.7739C17.7385 10.0707 19.947 7.87986 22.6325 7.87986C25.3357 7.87986 27.5442 10.0707 27.5442 12.7739V14.5583ZM22.6325 10.3534C21.3074 10.3534 20.212 11.4311 20.212 12.7739V14.5583H25.0707V12.7739C25.0707 11.4311 23.9753 10.3534 22.6325 10.3534Z"
                  fill="#F6F6F6"
                />
              </svg>
            </div>
            <p className="pl-8 font-normal text-2xl capitalize lg:text-xl text-lg xs:pl-4">
              change password
            </p>
          </div>
          <svg
            width="12"
            height="23"
            viewBox="0 0 12 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L10.6276 10.6276C10.7453 10.7404 10.839 10.8758 10.903 11.0257C10.967 11.1755 11 11.3368 11 11.4998C11 11.6628 10.967 11.8241 10.903 11.974C10.839 12.1239 10.7453 12.2593 10.6276 12.372L1 21.9997"
              stroke="#CCCCCC"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      </div>
      <div className="ml-20 mr-72 border-b-2 border-[#D9D9D9] mb-12 lg:ml-14 lg:mr-32 md:ml-12 md:mr-16 xs:ml-8 xs:mr-8">
        <a href="#" className="flex justify-between items-center">
          <div className="flex items-center mb-4">
            <div className="w-[70px] h-[70px] rounded-full bg-[#D61355] flex justify-center items-center lg:w-[60px] lg:h-[60px] md:w-[50px] md:h-[50px] xs:w-[48px] xs:h-[48px]">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 30V10H5.625V7.14286C5.625 5.16667 6.53938 3.48191 8.36813 2.08857C10.1969 0.695239 12.4075 -0.000951405 15 9.758e-07C17.5938 9.758e-07 19.805 0.696668 21.6338 2.09C23.4625 3.48333 24.3762 5.16762 24.375 7.14286V10H30V30H0ZM9.375 10H20.625V7.14286C20.625 5.95238 20.0781 4.94048 18.9844 4.10714C17.8906 3.27381 16.5625 2.85714 15 2.85714C13.4375 2.85714 12.1094 3.27381 11.0156 4.10714C9.92188 4.94048 9.375 5.95238 9.375 7.14286V10ZM3.75 27.1429H26.25V12.8571H3.75V27.1429ZM15 22.8571C16.0312 22.8571 16.9144 22.5771 17.6494 22.0171C18.3844 21.4571 18.7512 20.7848 18.75 20C18.75 19.2143 18.3825 18.5414 17.6475 17.9814C16.9125 17.4214 16.03 17.1419 15 17.1429C13.9688 17.1429 13.0856 17.4229 12.3506 17.9829C11.6156 18.5429 11.2488 19.2152 11.25 20C11.25 20.7857 11.6175 21.4586 12.3525 22.0186C13.0875 22.5786 13.97 22.8581 15 22.8571Z"
                  fill="#F6F6F6"
                />
              </svg>
            </div>
            <p className="pl-8 font-normal text-2xl capitalize lg:text-xl text-lg xs:pl-4">log out</p>
          </div>
          <svg
            width="12"
            height="23"
            viewBox="0 0 12 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L10.6276 10.6276C10.7453 10.7404 10.839 10.8758 10.903 11.0257C10.967 11.1755 11 11.3368 11 11.4998C11 11.6628 10.967 11.8241 10.903 11.974C10.839 12.1239 10.7453 12.2593 10.6276 12.372L1 21.9997"
              stroke="#CCCCCC"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
