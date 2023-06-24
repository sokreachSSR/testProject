import React, { useEffect, useRef, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import pinAddress from "../../assets/pinAddr.svg";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL1 } from "../../utils/Utils";
import { NavLink } from "react-router-dom";
import ApplyJob from "./ApplyJob";
import { setPopupJobAnnoumentDetail } from "../../Redux/slices/PopupJobAnnoumentDetail";

export default function DetailJob() {
  const data = useSelector((state)=>state.JobAnnoumentDetail.value)
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
  const formattedDate = `${dateObj.getDate()}/${dateObj.getMonth() + 1
    }/${dateObj.getFullYear().toString().slice(-2)}`;

  const job = data.termJob;
  let termjobs;

  if (job === "FULL_TIME") {
    termjobs = "Full Time";
  } else if (job === "PART_TIME") {
    termjobs = "Part Time";
  }
  const dispatch = useDispatch()
  return (
  <div> { Object.keys(data).length !== 0 && (
    <div
    tabIndex="-1"
    aria-hidden="true"
    className="flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-10 p-4  bg-gray-400 bg-opacity-50"
    style={{ backdropFilter: "blur(0px)" }}
  >
        {/* Modal content */}
        <div className="relative w-[600px] bg-white rounded-[20px] h-[600px] py-4 px-8 overflow-y-scroll">
          <div className="border-b-2 ">
            <div className="flex justify-center px-5 py-3 " ref={popupRef}>
              <p className="font-MainFont font-extrabold text-green_custom text-[18px]">
                Job details
              </p>
              <label
              onClick={()=>dispatch(setPopupJobAnnoumentDetail({}))}
              className="btn btn-sm btn-circle absolute text-black bg-light_gray_custom border-0 hover:bg-gray-200 right-2 top-2"
            >
              ✕
            </label>
            </div>
            
          </div>
          {/* <div className="bg-white absolute  w-full"> */}
                <img
                  src={`${BASE_URL1}${data.companyCover}`}
                  className="w-full rounded-t-[20px] object-cover m-auto h-[170px]"
                  alt=""
                />
                <NavLink to="/company">
                  <div className="absolute left-60 top-48">
                    <img
                      src={`${BASE_URL1}${data.companyProfile}`}
                      className="w-24 h-24 rounded-full border-2 object-cover ring-2 ring-bg_custom bg-white border-white"
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

                  <div className="my-2 mt-3">
                    <iframe
                      title="Google Map"
                      width="100%"
                      height="100%"
                      className="rounded-lg shadow-lg"
                      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA8ixZTgNLIK2uFt63EfBTiQQA2q_c73dg&q=${companyDetail.maps ? companyDetail.maps.lat : ""
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

              <ApplyJob data={data}></ApplyJob>
            </div>
          {/* </div> */}
    </div>)}
    </div>
  );
}
