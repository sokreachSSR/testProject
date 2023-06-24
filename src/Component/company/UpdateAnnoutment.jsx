import React, { useEffect, useRef } from "react";
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
import Add from "../../assets/Add.png";
import { salaryConstant, salaryConstantvlue } from "../../utils/Constant";

export default function UpdateAnnoutment({ data }) {
  console.log("fride",data)
  console.log("frise",data.description.workday)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedValue, setSelectedValue] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const [qualification, setQualification] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [isElementVisible, setElementVisible] = useState(false);
  const inputRef = useRef(null);
  const [qual, setQual] = useState(new Date().getUTCMilliseconds());
  const [requirementsAndSkills, setRequirementsAndSkills] = useState({});

  const [inputValues, setInputValues] = useState("");
  const inputRefs = useRef(null);
  const [skill, setSkil] = useState(new Date().getUTCMilliseconds());
  const [isElementVisibles, setElementVisibles] = useState(false);
  const originalsalary = data.salary;
  const replacedString = originalsalary.replace(/(\d+) - (\d+)/, "$$$1_TO_$2");
  console.log("satest", replacedString);

  const location = data.locationName;
  const Location = location.replace(" ", "_");

  const [updateAnnouncement, setUpdateAnnountment] = useState({
    // typeJob: data.typeJob,
    // locationName: location,
    // salary: salary,
    // termJob: data.termJob,
    // Experience: data.description.Experience,
  });

  useEffect(() => {
    setUpdateAnnountment({
      typeJob: data.typeJob.replace(" ", "_"),
      location: data.locationName.replace(" ", "_"),
      salary:salaryConstantvlue[data.salary],
      termJob: data.termJob,
      Experience: data.description.Experience,
      qualifications: data.qualifications,
      workday: data.description.workday,
      requirementsAndSkill: data.requirementsAndSkill,
    });
  }, []);

  
  const handleOnChange = (e) => {
      setUpdateAnnountment({
      ...updateAnnouncement,
      [e.target.name]: e.target.value,
    });

    console.log("eeeeee", {
      ...updateAnnouncement,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    const newQualifications = updateAnnouncement.qualifications;
    var newItem = {};
    if (newQualifications)
      Object.entries(newQualifications).map((item, keyboard) => {
        console.log(newItem);

        if (item[1] != "") newItem = { ...newItem, [item[0]]: item[1] };
      });

    const newRequirementsAndSkills = updateAnnouncement.requirementsAndSkill;
    var newItems = {};
    if (newRequirementsAndSkills)
      Object.entries(newRequirementsAndSkills).map((item, keyboard) => {
        console.log(newItems);

        if (item[1] != "") newItems = { ...newItems, [item[0]]: item[1] };
      });
      
    dispatch(
      updateJob({
        id: data.jobAnnouncementId,
        updates: updateAnnouncement,
        newItem,
        newItems,
      })
    );
    UpdateJobAnnountment(
      data.jobAnnouncementId,
      updateAnnouncement
    );
    setIsOpen(false);
    console.log("vv33", {
      id: data.jobAnnouncementId,
      updates: updateAnnouncement,
      newItem,
      newItems,
    });
  };

  const inputQualification = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log("name and vavlue ", name, value);
    setQualification({
      ...qualification,
      [name]: value,
    });
  };

  const inputSkill = (ev) => {
    const names = ev.target.name;
    const values = ev.target.value;
    console.log("skilllll ", names, values);
    setRequirementsAndSkills({
      ...requirementsAndSkills,
      [names]: values,
    });
  };

  const btnDoneQualification = (e) => {
    setUpdateAnnountment({
      ...updateAnnouncement,
      qualifications: {
        ...updateAnnouncement.qualifications,
        ...qualification,
      },
    });
    console.log("userrrrrrrrrrrr", updateAnnouncement);
    setQual(new Date().getUTCMilliseconds());
    setElementVisible(false);
  };

  const btnDoneRequirement = (e) => {
    setUpdateAnnountment({
      ...updateAnnouncement,
      requirementsAndSkill: {
        ...updateAnnouncement.requirementsAndSkill,
        ...requirementsAndSkills,
      },
    });
    console.log(" btnDoneRequirement", updateAnnouncement);
    setSkil(new Date().getUTCMilliseconds());
    setElementVisibles(false);
  };

  const handleClick = (event) => {
    const newQualifications = updateAnnouncement.qualifications;
    var newItem = {};
    if (newQualifications)
      Object.entries(newQualifications).map((item, keyboard) => {
        console.log(newItem);

        if (item[1] != "") newItem = { ...newItem, [item[0]]: item[1] };
      });

    const newRequirementsAndSkills = updateAnnouncement.requirementsAndSkill;
    var newItems = {};
    if (newRequirementsAndSkills)
      Object.entries(newRequirementsAndSkills).map((item, keyboard) => {
        console.log(newItems);

        if (item[1] != "") newItems = { ...newItems, [item[0]]: item[1] };
      });
    setUpdateAnnountment({
      ...updateAnnouncement,
      qualifications: newItem,
      requirementsAndSkill: newItems,
    });

    event.preventDefault();

    JobAnnouncement({
      ...updateAnnouncement,

      qualifications: newItem,
      requirementsAndSkill: newItems,
    });
    //  navigate("/home/job")

    console.log("data", updateAnnouncement);
  };
  const OnChangeEdit = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log("name and vavlue ", name, value);
    setQualification({
      ...updateAnnouncement,
      qualifications: {
        ...updateAnnouncement.qualifications,
        ...qualification,
        [name]: value,
      },
    });

    setQualification({
      ...updateAnnouncement.qualifications,
      [name]: value,
    });
    console.log("upAnouncement : ", qualification);
    // setEdu(new Date().getUTCMilliseconds());
    // setElementVisible(false);
  };

  const OnChangeEdits = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log("onchanfeedit ", name, value);
    setUpdateAnnountment({
      ...updateAnnouncement,
      requirementsAndSkill: {
        ...updateAnnouncement.requirementsAndSkill,
        [name]: value,
      },
    });

    setRequirementsAndSkills({
      ...updateAnnouncement.requirementsAndSkill,
      [name]: value,
    });
    console.log("upAnouncement : ", requirementsAndSkills);
    // setEdu(new Date().getUTCMilliseconds());
    // setElementVisible(false);
  };

  return (
    <div
      className={` h-[100vh]  Roboto overflow-y-auto`}
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
                  defaultValue={Location}
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
                  <option value="Koh_Kong">Koh Kong</option>
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
                  defaultValue={salaryConstantvlue[data.salary]}
                  onChange={handleOnChange}
                >
                  <option
                    value="$0_TO_0"
                    className="flex justify-center items-center "
                  >
                    Salary Negotiable
                  </option>
                  <option
                    value="$0_TO_200"
                    className="flex justify-center items-center "
                  >
                    $0 To 200
                  </option>

                  <option value="$201_TO_400">$201 To $400</option>
                  <option value="$401_TO_600">$401 To $600</option>
                  <option value="$601_TO_800">$601 To $800</option>
                  <option value="$801_TO_1000">$801 To $1000</option>
                  <option value="$1001_UP">$1001 Up</option>
                </select>
              </div>
              <div className="mt-3">
                <label htmlFor="" className="text-sm ml-3 font-bold mt-3">
                  Qualiyfications
                </label>
                <br />
                <ul className="list-disc px-7 text-[13px] py-2">
                  {updateAnnouncement.qualifications &&
                    Object.entries(updateAnnouncement.qualifications).map(
                      ([key, value]) => (
                        <li key={key} id="dropdown" className="">
                          <div className="w-full">
                            <input
                              type="text"
                              className="edu-info w-full focus:outline-0 focus:border-none focus:ring-0 border-none text-[13px] py-0"
                              name={`${key}`}
                              onChange={OnChangeEdit}
                              // onChange={handleEditQualification}
                              defaultValue={value}
                              // onFocus={handleFocus}
                            />
                          </div>
                        </li>
                      )
                    )}
                </ul>

                {isElementVisible && (
                  <div className="flex justify-evenly mb-2">
                    <input
                      onChange={inputQualification}
                      ref={inputRef}
                      type="text"
                      name={`Qualification${qual}`}
                      id=""
                      placeholder="Enter education here..."
                      className="w-5/6 py-1 h-7 text-[13px] font-SecondaryFont font-medium border-none focus:underline focus:underline-offset-8 focus:ring-0 focus:ring-border-b"
                    />
                    <div className="">
                      <button
                        onClick={btnDoneQualification}
                        className="px-5 py-1 rounded-xl text-white font-semibold text-xs bg-green_custom"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                )}
                <div className="flex items-center content-center justify-center border-t">
                  <button onClick={() => setElementVisible(true)}>
                    <img src={Add} className="w-7 mt-3" alt="" />
                  </button>
                </div>
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
              </div>
              <div>
              <textarea
                  onChange={handleOnChange}
                  rows="3"
                  cols="41"
                  className="w-72 rounded-lg text-xs mt-1"
                  name="other"
                  defaultValue={data.description.other}
                  placeholder="description"
                ></textarea>
              </div>
              <div className="Roboto mt-3">
                <label htmlFor="" className="text-sm ml-3 mt-2 font-bold ">
                  Requment and skill{" "}
                </label>
                <br />
                <ul className="list-disc px-7 text-[13px] py-2">
                  {updateAnnouncement.requirementsAndSkill &&
                    Object.entries(updateAnnouncement.requirementsAndSkill).map(
                      ([key, value]) => (
                        <li key={key} id="dropdown" className="">
                          <div className="w-full">
                            <input
                              type="text"
                              className="edu-info w-full focus:outline-0 focus:border-none focus:ring-0 border-none text-[13px] py-0"
                              name={`${key}`}
                              onChange={OnChangeEdits}
                              defaultValue={value}
                              // onFocus={handleFocus}
                            />
                          </div>
                        </li>
                      )
                    )}
                </ul>

                {isElementVisibles && (
                  <div className="inline-flex justify-evenly mb-2">
                    <input
                      onChange={inputSkill}
                      ref={inputRefs}
                      type="text"
                      name={`Skill
                        ${skill}`}
                      id=""
                      placeholder="Enter education here..."
                      className="w-5/6 py-1 h-7 text-[13px] font-SecondaryFont font-medium border-none focus:underline focus:underline-offset-8 focus:ring-0 focus:ring-border-b"
                    />

                    <div className="">
                      <button
                        onClick={btnDoneRequirement}
                        className="px-5 py-1 rounded-xl text-white font-semibold text-xs bg-green_custom"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                )}
                <div className="table-row items-center content-center justify-center border-t m-auto ">
                  <button onClick={() => setElementVisibles(true)}>
                    <img src={Add} className="w-7 mt-3" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <label
          htmlFor={`my-modal-update${data.jobAnnouncementId}`}
            // disabled={disable}
            onClick={handleUpdate}
            className={`flex justify-center bg-green_custom w-40 py-1.5 rounded-3xl m-auto mt-3 text-sm text-white `}
          >
            Update
          </label>
        </div>
      </div>
    </div>
  );
}
