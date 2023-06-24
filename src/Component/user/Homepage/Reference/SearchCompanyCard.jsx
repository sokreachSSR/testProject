import React from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import filter_letter from "../../../../assets/filter-letter.svg";
import binance_pro from "../../../../assets/binance_pro1.png";
import binance_cover from "../../../../assets/binance_cv.jpg";
import phone_call from "../../../../assets/phone_call.svg";
import email from "../../../../assets/email.svg";
import founded from "../../../../assets/founded.svg";
import description from "../../../../assets/description.svg";
import address from "../../../../assets/address.svg";
import google_map from "../../../../assets/map.svg";
import dropdown_btn from "../../../../assets/dropdown_btn.svg";
import GoogleMaps from "../../../othersComponent/GoogleMaps";
import { BASE_URL1, BASE_URL2, BASE_URL3 } from "../../../../utils/Utils";
import request_reference_pic from "../../../../assets/request_reference_pic.svg";
import request_certificate_pic from "../../../../assets/request_certificate_pic.svg";
import { RequestReferenceService } from "../../../../Redux/service/Reference";
import { useNavigate } from "react-router";
import { sendNotification } from "../../../../Redux/service/Notification";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function SearchCompanyCard({ item, key }) {
  const navigate = useNavigate();
  const name = useSelector((state) => state.userDetail.userDetail.fullName);
  const RequestReference = () => {
    RequestReferenceService(item.companyId, "REFERENCE").then((res) => {
      if (res.status === 200) {
        sendNotification(
          "user" + item.userID,
          "Request Reference",
          name + " has Reqeuseted Reference",
          BASE_URL2 + "/company-reference"
        );
        navigate("/home/reference/requested-list");
      }
    });
  };
  const RequestCertificate = () => {
    RequestReferenceService(item.companyId, "CERTIFICATE").then((res) => {
      if (res.status === 200) {
        sendNotification(
          "user" + item.userID,
          "Request Certificate",
          name + " has Reqeuseted Reference",
          BASE_URL2 + "/company-reference"
        );
        navigate("/home/reference/requested-list");
      }
    });
  };
  return (
    <div>
      <div className="flex flex-wrap gap-6 font-SecondaryFont justify-between relative">
        <div className="w-full wborder p-5 shadow-md rounded-[20px]">
          <div className="">
            <div className="relative">
              <img
                // src={binance_cover}
                src={`${BASE_URL1}/api/v1/images/PROFILE?fileName=${item.coverImage}`}
                className="w-full rounded-t-[20px] object-cover max-h-[500px] xl:h-[230px] 2xl:h-[250px]"
              />
            </div>
            <div className="mt-3 flex items-center">
              {/* logo and name */}
              {/* <div className="h-full "> */}
              <Link to={`/home/otherprofilecompany/${item.companyId}`}>
                <img
                  // src={binance_pro}
                  src={`${BASE_URL1}/api/v1/images/PROFILE?fileName=${item.companyProfile}`}
                  className="w-20 h-20 mr-4 rounded-full border-2 ring-2 ring-light_gray_custom self-start"
                />
                {/* </div> */}
              </Link>
              <div>
                <Link
                  to={`/home/otherprofilecompany/${item.companyId}`}
                  className="w-full font-semibold font-MainFont text-gray-800 text-2xl line-clamp-1"
                >
                  {item.companyName}
                </Link>
                <div className="">
                  <button className="my-2 text-sm bg-light_green_custom py-2 px-3 text-green_custom font-[600] rounded-3xl font-SecondaryFont line-clamp-1 break-all">
                    {item.companyType}
                  </button>
                  <div className="">
                    <Link
                      to={`/home/otherprofilecompany/${item.companyId}`}
                      className="font-semibold text-md text-green_custom border font-SecondaryFont border-green_custom px-2 py-1 rounded-3xl"
                    >
                      More details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 font-SecondaryFont">
            <div className="flex border-b-2 border-b-green_custom py-1 ">
              <p className="font-bold text-green_custom text-[20px] px-2">
                Contact
              </p>
            </div>
            <div className="flex place-items-center ml-10 my-2">
              <div className="w-7 h-7">
                <img src={phone_call} alt="" />
              </div>
              {item.phoneNumber ? (
                <p className="text-[16px] font-SecondaryFont px-2">
                  {item.phoneNumber}
                </p>
              ) : (
                <p className="text-[16px] text-gray-400 font-SecondaryFont px-2">
                  No phone number
                </p>
              )}
            </div>
            <div className="flex place-items-center ml-10">
              <div className="w-7 h-7">
                <img src={email} alt="" />
              </div>
              {item.email ? (
                <p className="text-[16px] font-SecondaryFont px-2">
                  {item.email}
                </p>
              ) : (
                <p className="text-[16px] text-gray-400 font-SecondaryFont  px-2">
                  No email
                </p>
              )}
            </div>
          </div>
          <div className="mt-5 ">
            <div className="f lex border-b-2 border-b-green_custom py-1">
              <p className="font-bold text-green_custom text-[20px] px-2">
                Some Information
              </p>
            </div>
            <div className="flex place-items-center ml-10 my-2">
              <div className="w-7 h-7 flex-shrink-0">
                <img src={founded} alt="" />
              </div>
              {item.founded ? (
                <p className="text-[16px] font-SecondaryFont font-normal px-2 line-clamp-1">
                  Founded in {item.founded}
                </p>
              ) : (
                <p className="text-[16px] text-gray-400 font-SecondaryFont font-normal px-2 line-clamp-1">
                  No founded year
                </p>
              )}
            </div>
            <div className="flex place-items-center ml-10 my-2">
              <div className="w-7 h-7 flex-shrink-0">
                <img src={description} alt="" />
              </div>
              {item.description ? (
                <p className="text-[16px] font-SecondaryFont font-normal px-2 line-clamp-1">
                  {item.description}
                </p>
              ) : (
                <p className="text-[16px] text-gray-400 font-SecondaryFont font-normal px-2 line-clamp-1">
                  No description
                </p>
              )}
            </div>
          </div>
          <div className="mt-5">
            <div className="flex border-b-2 border-b-green_custom py-1">
              <p className="font-bold text-green_custom text-[20px] px-2">
                Address
              </p>
            </div>
            <div className="flex place-items-center ml-10 my-2">
              <div className="w-7 h-7 flex-shrink-0">
                <img src={address} alt="" />
              </div>
              {item.address ? (
                <p className="text-[16px] font-SecondaryFont font-normal px-2 line-clamp-1">
                  {item.address}
                </p>
              ) : (
                <p className="text-[16px] text-gray-400 font-SecondaryFont font-normal px-2 line-clamp-1">
                  No adress avialble
                </p>
              )}
            </div>
          </div>
          {/* google map */}
          {item.maps ? (
            <div className="mt-5">
              <div className="flex place-items-center my-2">
                <div className="w-full  h-full flex-shrink-0">
                  <div>
                    <div className="mx-10 mb-5">
                      <iframe
                        title="Google Map"
                        width="100%"
                        height="100%"
                        className="rounded-lg shadow-lg"
                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA8ixZTgNLIK2uFt63EfBTiQQA2q_c73dg&q=${
                          item.maps ? item.maps.lat : ""
                        },${item.maps ? item.maps.lng : ""}`}
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-5 mb-8">
              <div className="flex place-items-center my-2">
                <div className="w-full bg-light_gray_custom flex justify-center items-center h-40 flex-shrink-0">
                  <div>
                    <div className="mx-10 mb-5">No map available</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="w-full text-lg font-semibold mt-5 mb-3">
            <div className="dropdown w-full">
              <label
                tabIndex={0}
                className="bg-green_custom  text-white w-full rounded-[20px] py-2 flex justify-center items-center shadow " 
              >
                Request Reference
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content bg-light_gray_custom rounded-2xl shadow menu p-2 shadow   w-52"
              >
                <li
                  name={"reference"}
                  onClick={RequestReference}
                  className=" text-sm text-black  justify-center items-center h-auto   bg-white hover:bg-light_gray_custom border-0 capitalize"
                >
                  <div>
                    <img src={request_reference_pic} alt="" />
                    <div> Request Reference</div>
                  </div>
                </li>
                <li
                  name={"certificate"}
                  onClick={RequestCertificate}
                  className=" text-sm text-black  justify-center items-center h-auto   bg-white hover:bg-light_gray_custom border-0 capitalize"
                >
                  <div>
                    <img src={request_reference_pic} alt="" />
                    <div> Request Certificate</div>
                  </div>
                </li>
              </ul>
            </div>
            {/* <div className="w-1/2">
              <button className=" bg-light_green_custom border border-green_custom text-green_custom w-full rounded-[20px] py-2">
                Message
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
