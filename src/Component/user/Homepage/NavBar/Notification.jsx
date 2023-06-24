import React, { useState } from "react";
import { StaticImage } from "../../../../utils/StaticImage";
import { Dropdown } from "flowbite-react";
import { DropShadow } from "../../../../utils/Style";
import notification_icn from "../../../../assets/notification_icon.svg";
import {
  CountCompanyNotification,
  CountNotification,
  getCompanyNotification,
  getNotification,
} from "../../../../Redux/service/Notification";
import DetailNotification from "./DetailNotification";
import InfiniteScrollV2 from "../../../othersComponent/InfiniteScrollV2";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCreateCount } from "../../../../Redux/slices/CountSlice";

export default function Notification() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  // Notifications
  const count = useSelector((state) => state.count.value);
  const role = useSelector((state) => state.userDetail.userDetail.role);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.classList.contains("notification-toggle")
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (role === "user") {
      CountNotification().then((r) => {
        if (r.data) {dispatch(setCreateCount(r.data.payload))};
        console.log(r.data?.payload);
      });
    } else {
      CountCompanyNotification().then((r) => {
        if (r.data) {dispatch(setCreateCount(r.data.payload))};
        console.log(r.data?.payload);
      });
    }
  }, []);

  return (
    <div className="">
      {role === "user" ? (
        <button
          onClick={toggleDropdown}
          className="w-8 h-8 md:w-10 md:h-10 flex justify-center items-center border-black-100 border rounded-full relative notification-toggle"
          type="button"
        >
          <img
            src={notification_icn}
            className="w-4 h-4 md:w-7 md:h-7  notification-toggle"
          />
          {count !== 0 ? (
            <span className="absolute  -top-0.5 -right-0.5  bg-pink_custom w-4 h-4 text-xs text-white rounded-full flex items-center justify-center">
              {count}
            </span>
          ) : (
            ""
          )}
        </button>
      ) : (
        <button
          onClick={toggleDropdown}
          className="w-8 h-8 md:w-10 md:h-10 flex justify-center items-center border-black-100 border rounded-full relative notification-toggle"
          type="button"
        >
          <img
            src={notification_icn}
            className="w-4 h-4 md:w-7 md:h-7 notification-toggle"
          />
          {count !== 0 ? (
            <span className="absolute  -top-0.5 -right-0.5  bg-pink_custom w-4 h-4 text-xs text-white rounded-full flex items-center justify-center">
              {count}
            </span>
          ) : (
            ""
          )}
        </button>
      )}

      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          // id="dropdown"
          className={`${DropShadow} dropdown-content absolute h-[80vh] z-10 right-0 top-16 bg-white text-green_custom rounded-[20px]  w-96  overflow-auto scroll-smooth hover:scroll-auto scrollbar`}
        >
          <h1 className="pt-4 pl-4 text-md font-bold">Notifications</h1>
          <ul
            className="py-2 text-sm text-gray-700"
            aria-labelledby="dropdownDefaultButton"
          >
            {role === "user" ? (
              <div>
              <InfiniteScrollV2
                linkAPI={getNotification}
                linkComponent={DetailNotification}
              />
              </div>
            ) : (
              <div>
              <InfiniteScrollV2
                linkAPI={getCompanyNotification}
                linkComponent={DetailNotification}
              />
              </div>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
