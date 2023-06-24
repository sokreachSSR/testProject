import React, { useEffect } from "react";
import { useState } from "react";
import { JobAnnouncement } from "../../Redux/service/InsertJobAnnouncement";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { updateJob } from "../../Redux/slices/JobAnnountment";
import { UpdateJobAnnountment } from "../../Redux/service/UpdateJobAnnountment";
import { useDispatch } from "react-redux";

const SignupSchema = Yup.object().shape({
  title: Yup.string().required("Title is not emtpy"),
});

export default function UpdateAnnoutmentV1({ data }) {
  console.log("lastweek", data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputList, setInputList] = useState([]);
  const [disable, setDisable] = useState(true);
  const [location, setLocation] = useState();
  const [salary, setSalary] = useState();
  const [selectedValue, setSelectedValue] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const [updateAnnouncement, setUpdateAnnountment] = useState({
    typeJob: data.typeJob,
    locationName: location,
    salary: salary,
    termJob: data.termJob,
    Experience: data.description.Experience,
  });

  useEffect(() => {
    setUpdateAnnountment({
      typeJob: data.typeJob.replace(" ", "_"),
      locationName: data.locationName.replace(" ", "_"),
      salary: "$" + data.salary.replace(" - ", "_TO_"),
      termJob: data.termJob,
      Experience: data.description.Experience,
    });

  }, []);


  const handleOnChange = (e) => {
    setUpdateAnnountment({
      ...updateAnnouncement,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    // dispatch(
    //   updateJob({ id: data.jobAnnouncementId, updates: updateAnnouncement,qualifications })
    // );
    // UpdateJobAnnountment(data.jobAnnouncementId, updateAnnouncement,qualifications);
    setIsOpen(false);
  };

  return (
    <div
      className={` h-[100vh]  Roboto overflow-y-auto ${isOpen ? "" : "hidden"}`}
    >
      <input
        type="checkbox"
        id={`my-modal-update${data.jobAnnouncementId}`}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box max-w-2xl  h-[530px] ">
          <label
            htmlFor={`my-modal-update${data.jobAnnouncementId}`}
            className=" btn-sm btn-circle absolute right-5 top-6 cursor-pointer"
          >
            ✕
          </label>

          <h3 className=" text-lg font-bold  text-center">
            Update Announcements{data.jobAnnouncementId}
          </h3>
          <hr className="w-full size-2 bg-gray-600 mt-2  " />

          <div
            className="grid grid-cols-3 "
            style={{ gridTemplateColumns: "49.9% 0.1% 4998%" }}
          >
            {/* part left */}
            <div>
              <div className="mt-1">
                <label htmlFor="" className="text-sm ml-3 font-bold mt-2 ">
                  Type
                </label>
                <br />
                <select
                  onChange={handleOnChange}
                  defaultValue={data.typeJob.replace(" ", "_")}
                  name="typeJob"
                  className="annountmentInput text-sm border-gray-400 mt-1 text-xs"
                >
                  <option
                    value="Accounting"
                    className="flex justify-center items-center text-sm py-2"
                  >
                    Accounting
                  </option>

                  <option value="Administration" className="">
                    Administration
                  </option>
                  <option value="Advertising">Advertising</option>
                  <option value="Architecture">Architecture</option>
                  <option value="Audit">Audit</option>
                  <option value="Banking">Banking</option>
                  <option value="Cashier">Cashier</option>
                  <option value="Design">Design</option>
                  <option value="Education">Education</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Finance">Finance</option>
                  <option value="Health">Health</option>
                  <option value="Hospitality">Hospitality</option>
                  <option value="Human_Resource">Human Resource</option>
                  <option value="Information_Technology">
                    Information Technology
                  </option>
                  <option value="Insurance">Insurance</option>
                  <option value="Legal_Service">Legal Service</option>
                  <option value="Management">Management</option>
                  <option value="Media">Media</option>
                  <option value="Project_Management">Project Management</option>
                  <option value="Receptionist">Receptionist</option>
                  <option value="Sales">Sales</option>
                  <option value="Taxation">Taxation</option>
                  <option value="Technician">Technician</option>
                  <option value="Training">Training</option>
                  <option value="Other">Other</option>
                </select>
                <br></br>
              </div>
              <div className="mt-3">
                <label htmlFor="" className="text-sm ml-3 font-bold mt-3">
                  Location
                </label>
                <br />
                <select
                  className="annountmentInput text-sm border-gray-400 mt-1 text-xs "
                  name="locationName"
                  defaultValue={data.locationName}
                  onChange={handleOnChange}
                >
                  <option
                    className="flex justify-center items-center "
                    value="Banteay_Meanchey"
                  >
                    Banteay Meanchey
                  </option>

                  <option value="Battambang">Battambang</option>
                  <option value="Kampong_Cham">Kampong Cham</option>
                  <option value="Kampong_Chhnang">Kampong Chhnang</option>
                  <option value="Kampong_Speu">Kampong Speu</option>
                  <option value="Kampong_Thom">Kampong Thom</option>
                  <option value="Kampot">Kampot</option>
                  <option value="Kandal">Kandal</option>
                  <option value="Kep">Kep</option>
                  <option value="Koh_Kong">Koh_Kong</option>
                  <option value="Kratie">Kratie</option>
                  <option value="Mondulkiri">Mondulkiri</option>
                  <option value="Oddar_Meanchey">Oddar Meanchey</option>
                  <option value="Pailin">Pailin</option>
                  <option value="Phnom_Penh">Phnom Penh</option>
                  <option value="Preah_Vihear">Preah Vihear</option>
                  <option value="Preah_Sihanouk">Preah Sihanouk</option>
                  <option value="Prey_Veng">Prey Veng</option>
                  <option value="Pursat">Pursat</option>
                  <option value="Ratanakiri">Ratanakiri</option>
                  <option value="Siem_Reap">Siem_Reap</option>
                  <option value="Stung_Treng">Stung Treng</option>
                  <option value="Svay_Rieng">Svay Rieng</option>
                  <option value="Takeo">Takeo</option>
                  <option value="Tboung_Khmum">Tboung Khmum</option>
                </select>

                <br></br>
              </div>

              <div className="mt-3">
                <label htmlFor="" className="text-sm ml-3 font-bold mt-3 w-36">
                  Salary Rang($)
                </label>
                <br />
                <select
                  name="salary"
                  className="annountmentInput  border-gray-400 mt-1 text-xs "
                  defaultValue={"$" + data.salary.replace(" - ", "_TO_")}
                  value={selectedValue}
                  onChange={handleOnChange}
                >
                  {/* {data.salary} */}

                  <option
                    value="$0_TO_0"
                    className="flex justify-center items-center  "
                  >
                    salary negotiation
                  </option>
                  <option
                    value="$0_TO_200"
                    className="flex justify-center items-center "
                  >
                    $0_TO_200
                  </option>
                  <option value="$201_TO_400">$201_TO_400</option>
                  <option value="$401_TO_600">$401_TO_600</option>
                  <option value="$601_TO_800">$601_TO_800</option>
                  <option value="$801_TO_1000">$801_TO_1000</option>
                  <option value="$1001_UP">$1001_UP</option>
                </select>
              </div>
              <div className="mt-3">
                <label htmlFor="" className="text-sm ml-3 font-bold mt-3">
                  Qualiyfications
                </label>
                <br />

                <ul className="list-disc">
                  {Object.entries(data.qualifications).map((item) => (
                    <li key={item[0]}>{item[1]}</li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-3 gap-10 mt-3 ">
                <div></div>

                {/* <img src={detelte} className="w-6 ml-8 " alt="" /> */}
              </div>
            </div>

            {/* center */}
            <div className="h-full bg-black"></div>

            {/* part right */}
            <div className="ml-4">
              <div className="mt-1">
                <label htmlFor="" className="text-sm ml-3 font-bold  ">
                  Experience
                </label>
                <br />
                <select
                  onChange={handleOnChange}
                  defaultValue={data.description.Experience}
                  name="Experience"
                  className="annountmentInput text-sm border-gray-400 mt-1 text-xs "
                >
                  <option
                    value="1-2(year)"
                    className="flex justify-center items-center "
                  >
                    1-2(year)
                  </option>
                  <option value="InternShip">InternShip</option>
                  <option value="NO Experience">NO Experience</option>
                  <option value="2-4(year)">2-4(year)</option>
                </select>
                <br></br>
              </div>
              <div className="mt-3">
                <label htmlFor="" className="text-sm ml-3 font-bold ">
                  Term
                </label>
                <br />
                <select
                  onChange={handleOnChange}
                  name="termJob"
                  defaultValue={data.termJob}
                  className="annountmentInput  border-gray-400 mt-1 text-xs "
                >
                  <option
                    value=" FULL_TIME"
                    className="flex justify-center items-center"
                  >
                    Full Time
                  </option>
                  <option value="PART_TIME">Part Time</option>
                </select>
                <br></br>
              </div>
              <div className="mt-3">
                <label htmlFor="" className="text-sm ml-3 mt-2 font-bold ">
                  Work Day
                </label>
                <br />
                <select
                  onChange={handleOnChange}
                  defaultValue={data.description.workday}
                  name="workday"
                  className="annountmentInput text-sm border-gray-400 mt-1 text-xs "
                >
                  <option
                    value="Monday-Friday"
                    className="flex justify-center items-center "
                  >
                    Monday-Friday
                  </option>
                  <option value="Wednesday-Sunday">Wednesday-Sunday</option>
                  <option value="Saturday-Sunday">Saturday-Sunday</option>
                  <option value="Other">Other</option>
                </select>
                {/* <div>
                  {inputList.map((e, i) => (
                    <div>
                      <textarea
                        rows="2"
                        cols="50"
                        className="flex w-72 rounded-lg text-xs mt-4"
                        name="comment"
                        form="usrform"
                      >
                        Enter Please
                      </textarea>

                      <img
                        src={detelte}
                        onClick={() => detelt(e)}
                        className="w-5 absolute right-0 -mt-4"
                        alt=""
                      />
                    </div>
                  ))}
                </div> */}
              </div>
              <div className="Roboto mt-3">
                <label htmlFor="" className="text-sm ml-3 mt-2 font-bold ">
                  Requment and skill{" "}
                </label>
                <br />
                <ul className="list-disc">
                  {Object.entries(data.requirementsAndSkill).map((item) => (
                    <li key={item[0]}>{item[1]}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <button
            // disabled={disable}
            onClick={handleUpdate}
            className={`flex justify-center bg-green_custom w-40 py-1.5 rounded-3xl m-auto mt-3 text-sm text-white `}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
