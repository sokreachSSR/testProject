import React, { useEffect, useState } from "react";
import cash from "../../../../../assets/money.png";
import experience from "../../../../../assets/list (1).png";
import tesla from "../../../../../assets/tesla.png";
import pin from "../../../../../assets/pin.png";
import { Jobs } from "../../../../../Redux/service/Jobs";
import DetailJob from "../../../DetailJob";
import { Link } from "react-router-dom";
import { setPopup } from "../../../../../Redux/slices/PopupSlice";
import { useDispatch, useSelector } from "react-redux";
import CardForOneJob from "./CardForOneJob";
import {
  AddSavePostAnnouncement,
  DeleteSavePost,
  SavePostForCompanyAnnouncement,
} from "../../../../../Redux/service/SavePost";
import { BASE_URL1 } from "../../../../../utils/Utils";
import { setPopupJobAnnoumentDetail } from "../../../../../Redux/slices/PopupJobAnnoumentDetail";

export default function JobCardV1({ item, index }) {
  const [job, setJob] = useState([]);
  const dispatch = useDispatch();
  const role = useSelector((state) => state.userDetail.userDetail.role);
  const [saveJob, setSaveJob] = useState(true);
  const handleSaveJob = () => {
    AddSavePostAnnouncement(item.jobAnnouncementId).then(() => {
      console.log(item.jobAnnouncementId);
    });
    setSaveJob(!saveJob);
  };

  const [unSaveAnnouncement, setUnSaveAnnouncement] = useState(null);
  const [saveAnnouncement, setSaveAnnouncement] = useState(true);
  useEffect(() => {
    SavePostForCompanyAnnouncement().then((res) => {
      if (res.data) {
        res.data.payload.map((result) => {
          if (
            result.jobAnnouncement.jobAnnouncementId == item.jobAnnouncementId
          ) {
            setUnSaveAnnouncement(result.savePostId);
            setSaveAnnouncement(false);
          }
        });
      }
    });
  }, []);

  const handleUnSavePostAnnouncement = () => {
    DeleteSavePost(unSaveAnnouncement).then(() => {
      console.log("dddd");
    });
    setSaveAnnouncement(!saveAnnouncement, "un save");
  };
  const clickPopupJob = () => {
    dispatch(setPopupJobAnnoumentDetail(item));
  }
  return (
    <div className="text-black p-5 rounded-3xl border-2 grid content-between ">
      <div>
        {/* 1. type and btn */}
        <div className="flex justify-between ">
          {/* type of job */}
          <h1 className="font-semibold">{item.typeJob}</h1>
          {/* save btn */}
          <div>
            {role === "annonymous" ? (
              <label
                type="button"
                className="cursor-pointer"
                onClick={() => dispatch(setPopup("login"))}
                htmlFor="my-modal"
              >
                <svg
                  width="17"
                  height="23"
                  viewBox="0 0 17 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.0933 1.3677C15.1939 1.51337 16 2.59554 16 3.85918V21.5287L8.5 17.2519L1 21.5287V3.85918C1 2.59554 1.80608 1.51337 2.90668 1.3677C4.74156 1.12484 6.608 1 8.5 1C10.392 1 12.2584 1.12484 14.0933 1.3677Z"
                    fill={saveJob ? "none" : "#04AA9C"}
                    stroke={saveJob ? "#5D6D79" : "#04AA9C"}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </label>
            ) : (
              <div>
                {saveAnnouncement ? (
                  <button
                    type="button"
                    className="cursor-pointer"
                    onClick={() =>
                      handleSaveJob(setSaveAnnouncement(!saveAnnouncement))
                    }
                  >
                    <svg
                      width="17"
                      height="23"
                      viewBox="0 0 17 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.0933 1.3677C15.1939 1.51337 16 2.59554 16 3.85918V21.5287L8.5 17.2519L1 21.5287V3.85918C1 2.59554 1.80608 1.51337 2.90668 1.3677C4.74156 1.12484 6.608 1 8.5 1C10.392 1 12.2584 1.12484 14.0933 1.3677Z"
                        fill={saveAnnouncement ? "none" : "#04AA9C"}
                        stroke={saveAnnouncement ? "#5D6D79" : "#04AA9C"}
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="cursor-pointer"
                    onClick={() =>
                      handleSaveJob(
                        handleUnSavePostAnnouncement(!saveAnnouncement)
                      )
                    }
                  >
                    <svg
                      width="17"
                      height="23"
                      viewBox="0 0 17 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.0933 1.3677C15.1939 1.51337 16 2.59554 16 3.85918V21.5287L8.5 17.2519L1 21.5287V3.85918C1 2.59554 1.80608 1.51337 2.90668 1.3677C4.74156 1.12484 6.608 1 8.5 1C10.392 1 12.2584 1.12484 14.0933 1.3677Z"
                        fill={saveAnnouncement ? "none" : "#04AA9C"}
                        stroke={saveAnnouncement ? "#5D6D79" : "#04AA9C"}
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        {/* 2. job term, salary & experience */}
        <div className="flex text-sm mt-3 gap-3">
          {/* job term */}
          <div className="uppercase text-center h-5 text-xs bg-green-100 text-green_custom px-1">
            {item.termJob}
          </div>
          {/* salary and experince */}
          <div className="text-sm text-gray-500">
            {/* sal */}
            <div className="flex place-items-center mb-1">
              <img src={cash} className="w-4 h-4" alt="" />
              <p className="px-2">
                Salary:{" "}
                <span>
                  {item.salary == "0 - 0" ? "Negotiable" : item.salary}
                </span>
              </p>
            </div>
            {/* exp */}
            <div className="flex place-items-start">
              <img src={experience} className="mt-[3px] w-4 h-4" alt="" />
              <p className="px-2">
                Experience:&nbsp;
                {item.description && item.description.Experience
                  ? item.description.Experience
                  : null}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* 3. pic, name, location */}
        <div className="mt-3 flex">
          {/* pic */}
          <div className="">
            <div className="w-20">
              <img
                src={BASE_URL1 + item.companyProfile ?? ""}
                className="w-20 h-20 object-cover rounded-lg"
                alt=""
              />
            </div>
          </div>
          {/* name, location */}
          <div className="ml-3 w-full">
            {/* n */}
            <p className="text-lg font-semibold line-clamp-1 break-all">
              {item.companyName}
            </p>
            {/* l */}
            <div className="flex text-sm text-gray-500 items-center">
              <div className="mr-2">
                <img src={pin} className="w-4 h-4 " />
              </div>
              <p className="line-clamp-1 break-all">{item.locationName}</p>
            </div>
          </div>
          </div>

          <div className="mt-4">
            <div className="flex justify-between gap-2 mt-1">
              <label
                onClick={clickPopupJob}
                className="w-[50%] btn btn-sm border text-xs font-normal py-1.5 rounded-[20px] bg-transparent capitalize text-green_custom border-green_custom hover:bg-green_custom hover:text-white hover:border-0"
              >
                detail
              </label>

              <label
                onClick={() => {
                  role === "annonymous"
                    ? dispatch(setPopup("login"))
                    :dispatch(setPopupJobAnnoumentDetail(item));
                }}
                className="w-[50%] border text-xs py-1.5 text-white text-center rounded-[20px] bg-green_custom border-green_custom hover:bg-hover_green_custom cursor-pointer"
              >
                Apply
              </label>
            </div>
          </div>
        </div>
      </div>
  );
}
