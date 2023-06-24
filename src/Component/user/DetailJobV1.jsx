import React, { useEffect, useRef, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import pinAddress from "../../assets/pinAddr.svg";
import { useSelector } from "react-redux";
import { BASE_URL1 } from "../../utils/Utils";
import { NavLink } from "react-router-dom";
import ApplyJob from "./ApplyJob";

export default function DetailJobV1({ data }) {
  const [show, setShow] = useState("hidden");
 
  const [uploadName, setUploadName] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const companyDetail = useSelector(
    (state) => state.companyDetail.company_detail
  );
  const popupRef = useRef(null);
  useEffect(() => {
    if (popupRef.current) {
      popupRef.current.scrollBottom = popupRef.current.scrollHeight;
    }
  }, []);

  const dateTimeString = data.dateTime;
  const dateObj = new Date(dateTimeString);
  const formattedDate = `${dateObj.getDate()}/${
    dateObj.getMonth() + 1
  }/${dateObj.getFullYear().toString().slice(-2)}`;

  const job = data.termJob;
  let termjobs;

  if (job === "FULL_TIME") {
    termjobs = "Full Time";
  } else if (job === "PART_TIME") {
    termjobs = "Part Time";
  }

  return (
    <div className="modal detail-box popup ">
      <div className="modal-box   h-[690px] bg-white  pt-2 rounded-[20px] mb-5 pb-2 max-w-sm m-auto">
        {/*block popup*/}
        <div className="border-b-2 ">
          <div className="flex justify-center px-5 py-3 "  ref={popupRef}>
            <p className="font-MainFont font-extrabold text-green_custom text-[18px]">
              Job details
            </p>
          </div>
          <label
            htmlFor={`my-modal-job${data.jobAnnouncementId}`}
            className="btn btn-sm btn-circle fixed text-black bg-light_gray_custom border-0 hover:bg-gray-200 right-2 top-2"
          >
            ✕
          </label>
        </div>
        <div className="absolute  w-full">
          <div className=" px-5 py-3">
            <div className="static">
              <img
                src={`${BASE_URL1}${data.companyCover}`}
                className="w-full rounded-t-[20px] object-cover m-auto h-[130px]"
                alt=""
              />
              <NavLink to="/company">
                <div className="absolute left-28 top-28">
                  <img
                    src={`${BASE_URL1}/api/v1/images/PROFILE?fileName=${companyDetail.companyProfile}`}
                    className="w-24 h-24 rounded-full border-4 object-cover ring-2 ring-bg_custom bg-white border-white"
                    alt=""
                  />
                </div>
              </NavLink>

              {/* map */}
              <div className="mt-12">
                <div className="flex border-b-2 border-b-green_custom py-1">
                  <img src={pinAddress} className="w-8 h-8" alt="" />
                  <p className="font-bold text-green_custom text-base px-2 mt-1">
                    Address
                  </p>
                </div>

                <div className="mx-2 my-2 mt-3">
                  <iframe
                    title="Google Map"
                    width="330"
                    height="100%"
                    className="rounded-lg shadow-lg"
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA8ixZTgNLIK2uFt63EfBTiQQA2q_c73dg&q=${
                      companyDetail.maps ? companyDetail.maps.lat : ""
                    },${companyDetail.maps ? companyDetail.maps.lng : ""}`}
                    allowFullScreen
                  />
                </div>
              </div>
              {/* text */}
              <div className="">
                <div>
                  <h2 class="mb-2 text-sm font-semibold text-gray-900 mt-3 ml-2" >
                    Description
                  </h2>
                  <ul class="   max-w-md space-y-1 text-black list-disc list-inside text-xs ml-5 Roboto">
                    <li>
                      Type : <label className="text-gray-500">{termjobs}</label>{" "}
                    </li>
                    <li>
                      salary :{" "}
                      <label className="text-gray-500">
                        {data.salary == "0 - 0" || data.salary == "$0_TO_0"
                          ? "Negotiable"
                          : "$" +
                            data.salary.replace("$", "").replace("_TO_", " - ")}
                      </label>
                    </li>

                    {data.description && data.description.workday ? (
                      <li>
                        Workday:{" "}
                        <label className="text-gray-500">
                          {" "}
                          {data.description.workday}
                        </label>
                      </li>
                    ) : (
                      ""
                    )}
                    <li>
                      Posted by Day :{" "}
                      <label className="text-gray-500">{formattedDate}</label>{" "}
                    </li>
                    <div>
                      {" "}
                      {data.description && data.description.other ? (
                        <li>
                          description:{" "}
                          <label className="text-gray-500">
                            {" "}
                            {data.description.other}
                          </label>
                        </li>
                      ) : (
                        ""
                      )}{" "}
                    </div>
                  </ul>
                </div>
              </div>
              <div className="-ml-0.5 ">
                {data.qualifications &&
                Object.entries(data.qualifications).length > 0 ? (
                  <div
                    style={{
                      whiteSpace: "pre-line",
                    }}
                    className="max-w-md space-y-1 text-gray-500 list-disc list-inside text-xs ml-5 text-start"
                  >
                    <h2 className="mb-2 text-sm font-semibold text-gray-900 mt-2 -ml-3 dark:text-white "  >
                      Qualifications
                    </h2>
                    <ul
                      className="list-disc
                    "
                    >
                      {Object.entries(data.qualifications).map((item) => (
                        <li className="text-black  ml-5 " key={item[0]}>
                          {" "}
                          <label className="text-gray-500">{item[1]}</label>
                        </li>
                      ))}
                    </ul>
                    <br />
                  </div>
                ) : null}
                {data.requirementsAndSkill &&
                Object.entries(data.requirementsAndSkill).length > 0 ? (
                  <div
                    style={{
                      whiteSpace: "pre-line",
                    }}
                    className="max-w-md space-y-1 text-gray-500 list-disc list-inside text-xs ml-5 text-start"
                  >
                    <h2 className="mb-2 text-sm font-semibold text-gray-900 mt-2 -ml-3 dark:text-white">
                      RequirementsAndSkills
                    </h2>
                    <ul className="list-disc">
                      {Object.entries(data.requirementsAndSkill).map(
                        (items) => (
                          <li className="text-black  ml-5" key={items[0]}>
                            <label className="text-gray-500">{items[1]}</label>
                          </li>
                        )
                      )}
                    </ul>
                    <br />
                  </div>
                ) : null}
              </div>
            </div>
            
            {/* <ApplyJob data={data}></ApplyJob> */}
          </div>
        </div>
      </div>
    </div>
  );
}
