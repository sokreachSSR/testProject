import React, { useState } from "react";
import { BASE_URL1 } from "../../../../utils/Utils";
import cash from "../../../../assets/money.png";
import pin from "../../../../assets/pin.png";
import experience from "../../../../assets/list (1).png";
import {
  AddSavePostAnnouncement,
  DeleteSavePost,
} from "../../../../Redux/service/SavePost";
import DetailJobWhenSave from "../../DetailJobWhenSave";

export default function SaveForCompanyCard({ item }) {
  const [saveJob, setSaveJob] = useState(false);
  const handleSaveJob = () => {
    DeleteSavePost(item.savePostId).then();
    setSaveJob(!saveJob);
  };

  const handleUnSaveJob = () => {
    AddSavePostAnnouncement(item.jobAnnouncement.jobAnnouncementId).then();
    setSaveJob(!saveJob);
  };

  return (
    <div>
      <div className="">
        <div className=" text-black h-fit p-5 rounded-3xl border-2">
          <div className="flex justify-between ">
            <h1 className="font-semibold">{item.jobAnnouncement.typeJob}</h1>
            {saveJob ? (
              <button
                type="button"
                className="cursor-pointer"
                onClick={handleUnSaveJob}
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
              </button>
            ) : (
              <button
                type="button"
                className="cursor-pointer"
                onClick={handleSaveJob}
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
              </button>
            )}
          </div>
          <div className="grid grid-cols-4 text-sm mt-3">
            <div className="col-span-1">
              <span className=" uppercase text-xs bg-green-100 text-green_custom px-1">
                {item.jobAnnouncement.termJob}
              </span>
            </div>
            <div className="col-span-3 text-sm ml-2 text-gray-500">
              <div className="flex place-items-center ">
                <img src={cash} className="w-4 h-4" alt="" />
                <p className="px-2">
                  Salary:{" "}
                  <span>
                    {item.jobAnnouncement.salary == "0 - 0"
                      ? "Inegotiable"
                      : item.jobAnnouncement.salary}
                  </span>
                </p>
              </div>
              <div className="flex place-items-center py-3">
                <img src={experience} className="w-4 h-4" alt="" />
                <p className="px-2">
                  Experience: &nbsp;{" "}
                  {item.jobAnnouncement.description.Experience}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-4">
            <div className="col-span-1">
              <img
                src={BASE_URL1 + item.jobAnnouncement.companyProfile}
                className="w-20 h-20 rounded-lg object-cover"
                alt=""
              />
            </div>
            <div className="ml-5 col-span-3">
              <p className="text-lg font-semibold">
                {item.jobAnnouncement.companyName}
              </p>
              <div className="flex mt-2 text-sm text-gray-500 items-center">
                <span>
                  {" "}
                  <img src={pin} className="w-3 h-3" alt="" />{" "}
                </span>
                <p className="px-2">{item.jobAnnouncement.locationName}</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between gap-2 mt-1">
              <label
                htmlFor={`my-modal-job${item.jobAnnouncement.jobAnnouncementId}`}
                className="w-[50%] btn btn-sm border text-xs font-normal py-1.5 rounded-[20px] bg-transparent capitalize text-green_custom border-green_custom hover:bg-green_custom hover:text-white hover:border-0"
              >
                detail
              </label>

              <label
                htmlFor="my-modal"
                className="w-[50%] border text-xs py-1.5 text-white text-center rounded-[20px] bg-green_custom border-green_custom hover:bg-hover_green_custom cursor-pointer"
              >
                Apply
              </label>
            </div>
          </div>
        </div>
      </div>
      <input
        type="checkbox"
        id={`my-modal-job${item.jobAnnouncement.jobAnnouncementId}`}
        className="modal-toggle"
      />
      <DetailJobWhenSave data={item} />
    </div>
  );
}
