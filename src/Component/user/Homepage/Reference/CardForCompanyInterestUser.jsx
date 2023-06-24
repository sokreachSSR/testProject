import React from "react";
import binance_pro from "../../../../assets/binance_pro1.png";
import binance_cover from "../../../../assets/binance_cv.jpg";
import phone_call from "../../../../assets/phone_call.svg";
import email from "../../../../assets/email.svg";
import founded from "../../../../assets/founded.svg";
import description from "../../../../assets/description.svg";
import address from "../../../../assets/address.svg";
import dropdown_btn from "../../../../assets/dropdown_btn.svg";
import GoogleMaps from "../../../othersComponent/GoogleMaps";
import { BASE_URL1, BASE_URL3 } from "../../../../utils/Utils";
import { Link } from "react-router-dom";

export default function CardForCompanyInterestUser({ item, key }) {
  console.log(item, "sdfdasfasd")
  return (
    <div className="flex flex-wrap gap-6 font-SecondaryFont justify-between relative">
      <div className=" w-[490px] ">
        <div className="border p-5 shadow-md rounded-[20px]">
          <div className="">
            <div className="relative">
              <img
                // src={binance_cover}
                src={`${BASE_URL1+item.coverImg}`}
                alt=""
              />
            </div>
            <div className="mt-3 flex items-center">
              {/* logo and name */}
              <img
                src={`${BASE_URL1+item.companyProfile}`}
                className="w-20 h-20 mr-4 rounded-full border-2 ring-2 ring-light_gray_custom bg-cover"
                alt=""
              />
              <div>
                <p className="w-full font-semibold font-MainFont text-black text-2xl">
                  {item.companyName}
                </p>
                <div className="">
                  <button className="text-sm w-fit bg-light_green_custom py-2 px-3 text-green_custom font-[600] rounded-3xl font-SecondaryFont">
                    {item.companyType}
                  </button>
                  <div className="my-1">
                    <Link to={`/home/otherprofilecompany/${item.companyId}`} className="font-semibold text-xs text-green_custom border font-SecondaryFont border-green_custom px-2 py-1 rounded-3xl">
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
              <p className="text-[16px] font-SecondaryFont  px-2">
                {item.phoneNumber}
              </p>
            </div>
            <div className="flex place-items-center ml-10">
              <div className="w-7 h-7">
                <img src={email} alt="" />
              </div>
              <p className="text-[16px] font-SecondaryFont   px-2">
                {item.email}
              </p>
            </div>
          </div>
          <div className="mt-5 ">
            <div className="f lex border-b-2 border-b-green_custom py-1">
              <p className="font-bold text-green_custom text-[20px] px-2">
                Background
              </p>
            </div>
            <div className="flex place-items-center ml-10 my-2">
              <div className="w-7 h-7 flex-shrink-0">
                <img src={founded} alt="" />
              </div>
              <p className="text-[16px] font-SecondaryFont font-normal px-2 line-clamp-2">
                {item.founded}
              </p>
            </div>
            <div className="flex place-items-center ml-10 my-2">
              <div className="w-7 h-7 flex-shrink-0">
                <img src={description} alt="" />
              </div>
              <p className="text-[16px] font-SecondaryFont font-normal px-2 line-clamp-2">
                {item.description}
              </p>
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
              <p className="text-[16px] font-SecondaryFont font-normal px-2 line-clamp-2">
                {item.address}
              </p>
            </div>
          </div>

          {/* google map */}
          <div className="mt-5">
            <div className="flex place-items-center my-2">
              <div className="w-full  h-full flex-shrink-0">
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
              </div>
            </div>
          </div>

          <div className="flex justify-between text-lg font-semibold mt-5 mx-10">
            <div>
              <button className="bg-green_custom text-white w-[350px] rounded-[20px] py-2 flex justify-center items-center">
                Follow
              </button>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
