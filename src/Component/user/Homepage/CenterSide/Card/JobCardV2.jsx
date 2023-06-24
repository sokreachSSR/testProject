import React, { useEffect, useState } from "react";
import cash from "../../../../../assets/money.png";
import experience from "../../../../../assets/list (1).png";
import pin from "../../../../../assets/pin.png";
import list from "../../../../../assets/....svg";
import { setPopup } from "../../../../../Redux/slices/PopupSlice";
import { useDispatch, useSelector } from "react-redux";
import UpdateAnnoutment from "../../../../company/UpdateAnnoutment";
import DetailJob from "../../../DetailJob";
import { deleteJobCard } from "../../../../../Redux/slices/JobAnnountment";
import { deleteJobAnnouncement } from "../../../../../Redux/service/DeleteJobAnnoument";
import { useRef } from "react";
import { salaryConstant } from "../../../../../utils/Constant";
import { Link, useNavigate } from "react-router-dom";
import ListCV from "./ListCV";
import DetailJobV1 from "../../../DetailJobV1";
import { GetUserCV } from "../../../../../Redux/service/GetCV";
import { BASE_URL1 } from "../../../../../utils/Utils";

export default function JobCardV2({ item, index }) {
  console.log("itemv2",item)
 
  const catMenu = useRef(null);
  console.log("itemsy", item.salary);
  const LISTCV_PATH = "listcv";
  const navigate = useNavigate();
  const [job, setJob] = useState([]);
  const dispatch = useDispatch();
  const role = useSelector((state) => state.userDetail.userDetail.role);
  const [deleteJob, setDeleteJob] = useState({});

  const[isOpen, setIsOpen] = useState([]);

  const [data ,setData]=useState({})
  const [isDropdownOpen,setIsDropdownOpen] = useState([]);  
  const [count, setCount] = useState([]);
  useEffect(() => {
    GetUserCV(item.jobAnnouncementId).then((resoponse) => {
      console.log(resoponse, "resp");
      setData(resoponse.data.payload ? resoponse.data.payload : []);
      //   setUser(resoponse.data.payload);
    });
  }, []);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handledelete = (id) => {
    // console.log("id for delete : ",id)
    deleteJobAnnouncement(id).then(() => {
      dispatch(deleteJobCard(id));
      setIsOpen(!isOpen);
    });
  };

  useEffect(() => {
    GetUserCV().then((resoponse) => {
      console.log("User Profile : ", resoponse);
      //   setUser(resoponse.data.payload);
    });
  });

  return (
    <div>
      <div className="w-[90%]">
        <div className="text-black h-fit p-6 rounded-3xl border-2">
          <div className="flex justify-between ">
            <h1 className="font-semibold">{item.typeJob}</h1>

          
             
          

<div className="dropdown">
      <label tabIndex={0} className="m-1" onClick={toggleDropdown}>
        <img src={list} className="w-8 -mt-5" alt="" />
      </label>

      {isOpen && (
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box -mt-10 -ml-20 w-32"
        >
          <li  htmlFor={`my-modal-update${item.jobAnnouncementId}`}>
            <a>
             <label
                       
                        className=" bg-transparent border-none text-black hover:border-none hover:bg-transparent"
                        title="Edit Job Announcement"
                      >
                        Edit
                      </label>
            </a>
          </li>

          <li className="hover:bg-red-500" onClick={() => handledelete(item.jobAnnouncementId)}>
            <a>
              <label
                className="bg-transparent border-none text-black hover:border-none hover:bg-transparent"
                title="Delete Job Announcement"
              >
                Delete
              </label>
            </a>
          </li>
        </ul>
      )}
    </div>

          </div>
          <div className="grid grid-cols-4 text-sm -mt-1">
            <div className="col-span-1">
              <span className=" uppercase text-xs bg-green-100 text-green_custom px-1">
                {item.termJob.replace(/_/g, " ")}
              </span>
            </div>
            <div className="col-span-3 text-sm ml-2 text-gray-500">
              <div className="flex place-items-center ">
                <img src={cash} className="w-4 h-4" alt="" />
                <p className="px-2">
                  {/* Salary: $<span>200,000</span> - $<span>250,000</span> */}
                  Salary:{" "}
                  <span>
                    {/* {item.salary == "0 - 0" ? "Negotiable" :item.salary} */}
                    {item.salary == "0 - 0" || item.salary == "$0_TO_0"
                      ? "Negotiable"
                      : "$" +
                        item.salary.replace("$", "").replace("_TO_", " - ")}
                  </span>
                </p>
              </div>
              <div className="flex place-items-center py-3">
                <img src={experience} className="w-4 h-4" alt="" />
                <p className="px-2">
                  Experience: &nbsp;
                  {item.description && item.description.Experience
                    ? item.description.Experience
                    : null}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-4">
            <div className="col-span-1">
              <img
                src={BASE_URL1 + item.companyProfile ?? ""}
                className="w-20 h-16 object-cover"
                alt=""
              />
            </div>
            <div className="ml-5 col-span-3">
              <p className="text-lg font-semibold">{item.companyName}</p>
              <div className="flex mt-2 text-sm text-gray-500 items-center">
                <span>
                  {" "}
                  <img src={pin} className="w-3 h-3" alt="" />{" "}
                </span>
                <p className="px-2">{item.locationName.replace(/_/g, " ")}</p>
              </div>
              <div className="">
                    <p className="   text-xs hover:underline text-green_custom  mt-1.5 ml-0.5">
                

              <button item={item} onClick={() => {navigate('listcv', { state: item.jobAnnouncementId})}}>
               {data.length} People Apply Job</button>
                    </p>
                

              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between gap-2 mt-1">
              <label
                htmlFor={`my-modal-job${item.jobAnnouncementId}`}
                className="w-full btn btn-sm border text-xs font-normal py-1.5 rounded-xl bg-transparent capitalize text-green_custom border-green_custom hover:bg-green_custom hover:text-white hover:border-0"
              >
                Details
              </label>
            </div>
          </div>
        </div>
      </div>
      <input
        type="checkbox"
        id={`my-modal-job${item.jobAnnouncementId}`}
        className="modal-toggle"
      />
      <DetailJobV1 data={item} />
      <div className=" absolute">
        <UpdateAnnoutment data={item} />
      </div>
    </div>
  );
}
