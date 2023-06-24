import React, { useEffect, useState } from "react";
import img from "../../assets/Microsoft.png";
import cash from "../../assets/cash.png";
import vector from "../../assets/Vector.png";
import vectors from "../../assets/MapPin.png";
import Campnany from "../../assets/Rectangle 139.png";
import logo from "../../assets/pf.png";
import apply from "../../assets/Group.png";
import delete_pic from "../../assets/delete.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import save from "../../assets/Intersect.png";
import iconTick from "../../assets/iconTick.png";
import pinAddress from "../../assets/pinAddr.svg";

import { useSelector } from "react-redux";
import { BASE_URL1 } from "../../utils/Utils";

export default function DetailJobWhenSave({ data }) {
  const [show, setShow] = useState("hidden");
  const notify = () => toast("Your Submit is Successfully");
  const [uploadName, setUploadName] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const companyDetail = useSelector(
    (state) => state.companyDetail.company_detail
  );

  const dateTimeString = data.jobAnnouncement.dateTime;
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

  useEffect(() => {
    const storedUploadName = localStorage.getItem("uploadName");
    const storedIsUploaded = localStorage.getItem("isUploaded");

    if (storedUploadName) {
      setUploadName(storedUploadName);
    }

    if (storedIsUploaded) {
      setIsUploaded(storedIsUploaded === "true");
    }
  }, []);

  const Uploade = () => {
    document.querySelector(".input-field").click();
  };

  const handleDelete = () => {
    setUploadName("");
    setIsUploaded(false);
    setShow("hidden");
    localStorage.removeItem("uploadName");
    localStorage.setItem("isUploaded", "false");
  };
  const changeHandler = (e) => {
    if (e.target.files.length > 0) {
      let filename = e.target.files[0].name;
      setUploadName(filename);
      setIsUploaded(true);
      setShow("");
      localStorage.setItem("uploadName", filename);
      localStorage.setItem("isUploaded", "true");

      const data = new FormData();
      data.append("file", e.target.files[0]);

      const xhr = new XMLHttpRequest();
      xhr.open("POST", "/upload");
      xhr.upload.addEventListener("progress", (event) => {
        const percent = Math.round((event.loaded / event.total) * 100);
        setProgress(percent);
        if (percent == 100) {
          setProgress(<img src={iconTick} className="w-5 " alt="" />);
        }
      });
      xhr.send(data);
    }
  };
  return (
    <div className="modal detail-box ">
      <div className="modal-box h-[690px] bg-white pt-2 rounded-[20px] pb-2 w-full m-auto">
        {/*block popup*/}
        <div className="border-b-2 ">
          <div className="flex justify-center px-5 py-3">
            <p className="font-MainFont font-extrabold text-green_custom text-[18px]">
              Job details
            </p>
          </div>
          <label
            htmlFor={`my-modal-job${data.jobAnnouncement.jobAnnouncementId}`}
            className="btn btn-sm btn-circle fixed text-black bg-light_gray_custom border-0 hover:bg-gray-200 right-2 top-2"
          >
            ✕
          </label>
        </div>
        <div className="absolute overflow-hidden2 w-full">
          <div className="overscroll-x-none px-5 py-3">
            <div className="static">
              <img
                src={`${BASE_URL1}${data.jobAnnouncement.companyCover}`}
                className="w-full rounded-t-[20px] object-cover m-auto h-[130px]"
                alt=""
              />

              <div className="absolute right-11 top-28">
                <img
                  src={`${BASE_URL1}${data.jobAnnouncement.companyProfile}`}
                  className="w-28 h-28 rounded-full border-4 object-cover ring-2 ring-bg_custom bg-white border-white"
                  alt=""
                />
              </div>

              {/* map */}
              <div className="mt-3 line-clamp-1 break-all">
                <div className="flex border-b-2 border-b-green_custom py-1">
                  <img src={pinAddress} className="w-8 h-8" alt="" />
                  <p className="font-bold text-green_custom text-base px-2 mt-1">
                    Address
                  </p>
                </div>
                {/* <div className="py-4">
              <p className="ml-8 text-xl font-SecondaryFont">
                {companyDetail.address}
              </p>
            </div> */}
                <div className="mx-2 my-2 mt-3">
                  <iframe
                    title="Google Map"
                    width="330"
                    height="100%"
                    className="rounded-lg shadow-lg"
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA8ixZTgNLIK2uFt63EfBTiQQA2q_c73dg&q=${
                      data.jobAnnouncement.maps ? data.jobAnnouncement.maps.lat : ""
                    },${data.jobAnnouncement.maps ? data.jobAnnouncement.maps.lng : ""}`}
                    allowFullScreen
                  />
                </div>
              </div>
              {/* text */}
              <div className="">
                <div>
                  <h2 class="mb-2 text-sm font-semibold text-gray-900 mt-3 ml-2">
                    Description
                  </h2>
                  <ul class="list-disc max-w-md space-y-1 text-black list-inside text-sm ml-5 Roboto">
                    <li>
                      Type : <label className="text-gray-500">{data.jobAnnouncement.termJob ? "Full Time" : null}</label>{" "}
                    </li>
                    <li>
                      Salary :{" "}
                      <label className="text-gray-500">
                        {data.jobAnnouncement.salary == "0 - 0"
                          ? "Inegotiable"
                          : "$" + data.jobAnnouncement.salary}
                      </label>
                    </li>

                    <li>
                      Workday :{" "}
                      <label className="text-gray-500">
                        {data.jobAnnouncement?.description?.workday}
                      </label>
                    </li>
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
              <div className="-ml-0.5">
                {data.qualifications &&
                Object.entries(data.qualifications).length > 0 ? (
                  <div
                    style={{
                      whiteSpace: "pre-line",
                    }}
                    className="max-w-md space-y-1 text-gray-500 list-disc list-inside text-xs ml-5 text-start"
                  >
                    <h2 className="mb-2 text-sm font-semibold text-gray-900 mt-2 -ml-3 dark:text-white">
                      Qualifications
                    </h2>
                    <ul className="list-disc">
                      {Object.entries(data.qualifications).map((item) => (
                        <li key={item[0]}>{item[1]}</li>
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
                      {Object.entries(data.requirementsAndSkill).map((item) => (
                        <li key={item[0]}>{item[1]}</li>
                      ))}
                    </ul>
                    <br />
                  </div>
                ) : null}
              </div>
            </div>
            <h2 class="mb-1 mt-4 ml-3 text-xs font-semibold text-gray-900  dark:text-white ">
              If you interesting for Apply now :
            </h2>
            {/* apply job    */}
            <div
              className={` ${
                show == "hidden" ? "" : "hidden"
              }  ml-2 mt-1.5 w-[360px] p-1 h-20 bg-[#F6F6F6] items-center pl-4 pt-3 rounded-lg `}
            >
              <div className="flex flex-wrap">
                <div>
                  <img
                    src={apply}
                    className=" w-9"
                    alt=""
                    onClick={() =>
                      document.querySelector(".input-field").click()
                    }
                  />
                </div>
                <div className="flex ml-5">
                  <div className=" text-xs ml-3">
                    <h6>Enter your resume here</h6>

                    <h6 className="mt-0.5">Type-File : Only PDF </h6>

                    <button
                      onClick={Uploade}
                      className="text-[10px]  mt-1.5  w-16 h-5 rounded-lg border  border-[#04AA9C] text-[#04AA9C]"
                    >
                      {/* <input type='file' className="input-field" onChange={changeHandler} hidden /> {uploadName} */}
                      <input
                        type="file"
                        // accept=".pdf,.zip"
                        className="input-field"
                        onChange={changeHandler}
                        hidden
                      />
                      Enter CV
                    </button>
                  </div>
                </div>
                <button className="w-14 h-6 bg-[#04AA9C] rounded-md text-[10px] ml- mt-4   text-white">
                  Submit
                </button>
              </div>
            </div>

            {/* upload */}
            <div className={`${show} w-[360px]`}>
              <div
                className={` w-[360px] bg-[#F6F6F6]  h-20 mt-2 flex  ml-3 pl-3 mr-3 rounded-md `}
              >
                <img src={apply} className="w-10 h-10 mt-1" />

                <div className="grid grid-cols-5 gap-1 mt-3 ml-4  ">
                  <div className="col-span-4">
                    <div className="b text-xs ">
                      {uploadName}
                      <br />
                      {/* <hr className="w-48 mt-1 h-1 bg-blue-500 rounded-lg" /> */}
                    </div>
                    <div className="-mt-6">
                      <br />
                      {progress > 0 ? (
                        <div>
                          <div
                            style={{
                              width: `${progress}%`,
                              backgroundColor: "green",
                              height: "4px",
                              marginLeft: "1px",
                              marginTop: "10px",
                              marginRight: "3px",
                              borderRadius: "5px",
                            }}
                          ></div>
                          <p>Upload File {progress}%</p>
                        </div>
                      ) : (
                        <div>
                          <div
                            style={{
                              width: `${progress}`,
                              backgroundColor: "green",
                              height: "4px",
                              marginLeft: "1px",
                              float: "left",
                              width: "83%",
                              alignSelf: "start",
                              marginTop: "6px",
                              marginRight: "3px",
                              borderRadius: "5px",
                            }}
                          ></div>
                          <div>{progress}</div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1">
                    <img
                      src={delete_pic}
                      alt=""
                      onClick={handleDelete}
                      className="w-5 fixed right-2"
                    />
                  </div>
                </div>
                <div></div>
              </div>
              <button
                className="w-14 h-6 bg-[#04AA9C] rounded-md text-[10px] ml-40 mt-1.5  text-white"
                onClick={notify}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}