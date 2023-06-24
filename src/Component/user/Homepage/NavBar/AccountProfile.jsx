import React, { useEffect, useState } from "react";
import { StaticImage } from "../../../../utils/StaticImage";
import { DpdnProImg } from "../../../../utils/DpdnProImg";
import { Link } from "react-router-dom";
import CreateCompanyPopUp from "../../../company/CreateCompanyPopUp";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetail } from "../../../../Redux/slices/userDetailSlide";
import { UserProfile } from "../../../../Redux/service/UserProfile";
import { BASE_URL1 } from "../../../../utils/Utils";
import { setPopup } from "../../../../Redux/slices/PopupSlice";
import { setPopupCreateCom } from "../../../../Redux/slices/CreateCompany";
import switchIcon from "../../../../assets/switchicons.svg";
import { useRef } from "react";

export default function AccountProfile({ func }) {
  // const role = useSelector((state) => state.userDetail.userDetail.role);
  // const dispatch = useDispatch();
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };
  // const changeRole = () => {
  //   localStorage.removeItem("ActiveStateCom");
  //   dispatch(setUserDetail({ role: role == "user" ? "company" : "user" }));
  //   console.log(role);
  // };
  const dispatch = useDispatch();
  const userDetails = useSelector((State) => State.userDetail.userDetail);
  const companyDetail = useSelector(
    (state) => state.companyDetail.company_detail
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const role = localStorage.getItem("userRole") || "user"; // Get user role from localStorage, default to "user" if not found
  const [user, setUser] = useState([]);

  useEffect(() => {
    dispatch(setUserDetail({ ...userDetails, role: role }));

    UserProfile().then((resoponse) => {
      console.log("user : ", resoponse);
      setUser(resoponse.data ? resoponse.data.payload : []);
    });
  }, []);
  const logout = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("userRole");
    dispatch(setUserDetail({ onesignal: "", role: "annonymous" }));
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const changeRole = () => {
    func();
    setTimeout(() => {
      localStorage.removeItem("ActiveStateCom");
      const newRole = role === "user" ? "company" : "user";
      localStorage.setItem("userRole", newRole); // Save updated user role to localStorage
      dispatch(setUserDetail({ ...userDetails, role: newRole }));
      window.location.reload();
    }, 2000);

    // const switchName = role === "company" ? userDetails.fullName : companyDetail.companyName;
  };

  // handle click outside
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.classList.contains("accountpro-toggle")
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={toggleDropdown}
        className="relative font-medium rounded-full text-sm w-max h-auto text-center inline-flex items-center accountpro-toggle"
        type="button"
      >
        <img
          src={
            userDetails.role == "user"
              ? `${BASE_URL1 + userDetails.profileImage}`
              : `${BASE_URL1}/api/v1/images/PROFILE?fileName=${companyDetail.companyProfile}`
          }
          className="w-8 h-8 object-cover md:w-10 md:h-10 flex justify-center items-center ring-1 ring-green_custom rounded-full accountpro-toggle"
        />
      </button>
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="z-10 dropdown-content bg-white rounded-[20px] shadow w-96 h-auto absolute right-5 top-16"
        >
          {/* User Profile */}
          <div className="flex justify-between pt-7 pl-7 pr-7">
            <div className="flex items-center">
              <img
                src={
                  userDetails.role == "user"
                    ? BASE_URL1 + userDetails.profileImage
                    : `${BASE_URL1}/api/v1/images/PROFILE?fileName=${companyDetail.companyProfile}`
                }
                alt=""
                className="w-12 h-12 object-cover rounded-full border-2 border-gray-300"
              />
              <h3 className="pl-4 font-bold text-xl text-black">
                {userDetails.role == "user"
                  ? `${user.fullName}`
                  : `${companyDetail.companyName}`}
              </h3>
            </div>
            {/* Switch Btn */}
            {companyDetail.companyId && (
              <div>
                {userDetails.role == "user" ? (
                  <div onClick={changeRole} className="switch-button">
                    <div className="switch-icon vs:w-8 vs:h-8 xs:h-8 xs:w-8 md:w-10 md:h-10 flex justify-center items-center border-black-100 border rounded-full hover:bg-gray-100">
                      <img
                        src={DpdnProImg.SwitchAcc}
                        className="vs:h-5 vs:w-5 xs:h-5 xs:w-5 md:w-7 md:h-7 object-cover switch-image"
                      />
                    </div>
                  </div>
                ) : (
                  <div onClick={changeRole} className="switch-button">
                    <div className="switch-icon vs:w-8 vs:h-8 xs:h-8 xs:w-8 md:w-10 md:h-10 flex justify-center items-center border-black-100 border rounded-full hover:bg-gray-100">
                      <img
                        src={DpdnProImg.SwitchAcc}
                        className="vs:h-5 vs:w-5 xs:h-5 xs:w-5 md:w-7 md:h-7 object-cover switch-image"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          {/* View Profile Btn */}
          {userDetails.role == "user" ? (
            <Link to={"/profile"}>
              <button className="ml-7 mr-7 mt-3 py-2 w-80 text-sm font-medium text-green_custom focus:outline-none capitalize bg-white rounded-full border-2 border-green_custom hover:bg-gray-100 hover:text-green_custom focus:z-10 focus:ring-1 focus:ring-green_custom text-xs md:text-lg">
                view profile
              </button>
            </Link>
          ) : (
            <Link to={"/company"}>
              <button className="ml-7 mr-7 mt-3 py-2 w-80 text-sm font-medium text-green_custom focus:outline-none capitalize bg-white rounded-full border-2 border-green_custom hover:bg-gray-100 hover:text-green_custom focus:z-10 focus:ring-1 focus:ring-green_custom text-xs md:text-lg">
                view profile
              </button>
            </Link>
          )}
          {/* Menu Below */}
          <ul
            className="py-2 px-2 text-sm text-gray-700"
            aria-labelledby="dropdownAccountUser"
          >
            {companyDetail.companyId ? (
              <div>
                {/* switch Company */}
                {userDetails.role == "user" ? (
                  <li
                    onClick={changeRole}
                    className="block hover:bg-gray-100 rounded-[20px]"
                  >
                    <div className="flex mr-5 ml-5 py-2.5 items-center">
                      <div className="w-8 h-8 md:w-10 md:h-10 flex justify-center items-center border-black-100 border rounded-full">
                        <img
                          src={switchIcon}
                          className="w-5 h-5 md:w-7 md:h-7"
                        />
                      </div>
                      <span className="text-lg pl-4 font-medium text-sm md:text-lg">
                        Switch to company
                      </span>
                    </div>
                  </li>
                ) : null}
              </div>
            ) : (
              <div>
                {/* Create Company */}
                {userDetails.role == "user" ? (
                  <li
                    onClick={() => {
                      dispatch(setPopupCreateCom(true));
                      setIsDropdownOpen(false);
                    }}
                    className="block hover:bg-gray-100 rounded-[20px]"
                  >
                    <div className="flex mr-5 ml-5 py-2.5 items-center">
                      <div className="w-8 h-8 md:w-10 md:h-10 flex justify-center items-center border-black-100 border rounded-full">
                        <img
                          src={DpdnProImg.CreateCom}
                          className="w-5 h-5 md:w-7 md:h-7"
                        />
                      </div>
                      <span className="text-lg pl-4 font-medium text-sm md:text-lg">
                        Create Company
                      </span>
                    </div>
                  </li>
                ) : null}
              </div>
            )}
            {/* Edit Profile */}
            <li>
              <Link
                onClick={() => setIsDropdownOpen(false)}
                className="block hover:bg-gray-100 rounded-[20px]"
              >
                {role === "company" ? (
                <div className="flex mr-5 ml-5 py-2.5 items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 flex justify-center items-center border-black-100 border rounded-full">
                    <img
                      src={DpdnProImg.EditPro}
                      className="w-5 h-5 md:w-7 md:h-7"
                    />
                  </div>
                  <span className="text-lg pl-4 font-medium text-sm md:text-lg">
                    Edit Profile
                  </span>
                </div>
                ) : ("") }
              </Link>
            </li>
            {/* Settings */}
            {userDetails.role == "user" ? (
              <li>
                <Link
                  onClick={() => setIsDropdownOpen(false)}
                  to="/home/setting"
                  className="block hover:bg-gray-100 rounded-[20px]"
                >
                  <div className="flex mr-5 ml-5 py-2.5 items-center">
                    <div className="w-8 h-8 md:w-10 md:h-10 flex justify-center items-center border-black-100 border rounded-full">
                      <img
                        src={DpdnProImg.Settings}
                        className="w-5 h-5 md:w-7 md:h-7"
                      />
                    </div>
                    <span className="text-lg pl-4 font-medium text-sm md:text-lg">
                      Settings
                    </span>
                  </div>
                </Link>
              </li>
            ) : null}
            {/* Logout */}
            <li>
              <a className="block hover:bg-gray-100 rounded-[20px]">
                <Link
                  to="/"
                  className="flex mr-5 ml-5 py-2.5 items-center"
                  onClick={logout}
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 flex justify-center items-center border-black-100 border rounded-full">
                    <img
                      src={DpdnProImg.Logout}
                      className="w-5 h-5 md:w-7 md:h-7"
                    />
                  </div>
                  <span className="text-lg pl-4 font-medium text-sm md:text-lg text-red-500">
                    Logout
                  </span>
                </Link>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
