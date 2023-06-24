import React, { useEffect } from "react";
import { useState } from "react";
import { JobAnnouncement } from "../../Redux/service/InsertJobAnnouncement";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import Add from "../../assets/Add.png";
import { useRef } from "react";

const SignupSchema = Yup.object().shape({
  title: Yup.string().required("Title is not emtpy"),
});
// JobAnnouncement

export default function AddAnouncement() {
  const navigate = useNavigate();
  const [temUser, setTemUser] = useState([]);
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
  const [company, setCompany] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleAddQualification = () => {
    // if (inputValue.trim() !== "") {
    //   const newQualifications = {
    //     ...qualification,
    //     [inputValue]: true,
    //   };
    //   setQualification(newQualifications);
    //   setInputValue("");
    // }
  };

  const handleInputChanges = (event) => {
    setInputValues(event.target.value);
  };

  const handleAddRequirementOrSkill = () => {
    if (inputValues.trim() !== "") {
      const newRequirementsAndSkills = {
        ...requirementsAndSkills,
        [inputValues]: true,
      };
      setRequirementsAndSkills(newRequirementsAndSkills);
      setInputValues("");
    }
  };

  const [postAnouncement, setpostAnouncement] = useState({
    locationName: "Banteay_Meanchey",
    typeOfJob: "Accounting",
    salary: "$0_TO_0",
    termJob: "FULL_TIME",
    Experience: "1-2(Years)",
    workday: "Monday-Friday",
    other: "",
  });

  useEffect(() => {
    JobAnnouncement().then((response) => {
      setCompany(response?.data?.payload);
    });
    if (isElementVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  const handleOnChange = (e) => {
    setpostAnouncement({
      ...postAnouncement,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (event) => {
    const newQualifications = postAnouncement.qualifications;
    var newItem = {};
    if (newQualifications)
      Object.entries(newQualifications).map((item, keyboard) => {

        if (item[1] != "") newItem = { ...newItem, [item[0]]: item[1] };
      });

    const newRequirementsAndSkills = postAnouncement.requirementsAndSkill;
    var newItems = {};
    if (newRequirementsAndSkills)
      Object.entries(newRequirementsAndSkills).map((item, keyboard) => {

        if (item[1] != "") newItems = { ...newItems, [item[0]]: item[1] };
      });
    setpostAnouncement({
      ...postAnouncement,
      qualifications: newItem,
      requirementsAndSkill: newItems,
    });

    event.preventDefault();

    JobAnnouncement({
      ...postAnouncement,

      qualifications: newItem,
      requirementsAndSkill: newItems,
    });
    //  navigate("/home/job")

  };
  const OnChangeEdit = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setpostAnouncement({
      ...postAnouncement,
      qualifications: {
        ...postAnouncement.qualifications,
        ...qualification,
        [name]: value,
      },
    });

    setQualification({
      ...postAnouncement.qualifications,
      [name]: value,
    });
    // setEdu(new Date().getUTCMilliseconds());
    // setElementVisible(false);
  };

  const OnChangeEdits = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setpostAnouncement({
      ...postAnouncement,
      requirementsAndSkill: {
        ...postAnouncement.requirementsAndSkill,
        [name]: value,
      },
    });

    setRequirementsAndSkills({
      ...postAnouncement.requirementsAndSkill,
      [name]: value,
    });
    // setEdu(new Date().getUTCMilliseconds());
    // setElementVisible(false);
  };

  const handleEditQualification = (e) => {
    var inputLength = document.getElementsByClassName("edu-info").length;
    for (var i = 0; i < inputLength; i++) {
      document
        .getElementsByClassName("edu-info")
        [i].removeAttribute("disabled");
      document.getElementsByClassName("edu-info")[i].focus();
    }
  };

  const inputQualification = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQualification({
      ...qualification,
      [name]: value,
    });
  };

  const inputSkill = (ev) => {
    const names = ev.target.name;
    const values = ev.target.value;
    setRequirementsAndSkills({
      ...requirementsAndSkills,
      [names]: values,
    });
  };

  const btnDoneQualification = (e) => {
    setpostAnouncement({
      ...postAnouncement,
      qualifications: { ...postAnouncement.qualifications, ...qualification },
    });
    setQual(new Date().getUTCMilliseconds());
    setElementVisible(false);
  };

  const btnDoneRequirement = (e) => {
    setpostAnouncement({
      ...postAnouncement,
      requirementsAndSkill: {
        ...postAnouncement.requirementsAndSkill,
        ...requirementsAndSkills,
      },
    });
    setSkil(new Date().getUTCMilliseconds());
    setElementVisibles(false);
  };

  return (
    <div className="h-[100vh] Roboto">
      <input
        type="checkbox"
        id="my-modal-annoucement"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box max-w-2xl h-[530px] bg-white">
          <div>
            <label
              htmlFor="my-modal-annoucement"
              className=" btn-sm btn-circle absolute right-5 top-6 cursor-pointer text-white bg-green_custom flex items-center justify-center"
            >
              ✕
            </label>

            <h3 className=" text-lg font-bold font-SecondaryFont text-center text-green_custom">
              Create Announcements
            </h3>
          </div>
          <hr className="w-full size-2 bg-gray-600 mt-2  " />

          <div className="flex justify-around">
            {/* part left */}
            <div className=" ">
              <div>
                <div className="mt-1">
                  <label htmlFor="" className="text-sm ml-3 font-bold mt-2 ">
                    Type
                  </label>
                  <br />
                  <select
                    onChange={handleOnChange}
                    name="typeOfJob"
                    className="annountmentInput text-xs border-gray-400 mt-1"
                  >
                    <option
                      value="Accounting"
                      className="flex justify-center items-center  py-2"
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
                    <option value=">Legal_Service">Legal Service</option>
                    <option value="Management">Management</option>
                    <option value="Media">Media</option>
                    <option value="Project_Management">
                      Project Management
                    </option>
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
                    className="annountmentInput text-xs border-gray-400 mt-1 "
                    name="locationName"
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
                    <option value="Siem_Reap">Siem Reap</option>
                    <option value="Stung_Treng">Stung Treng</option>
                    <option value="Svay_Rieng">Svay Rieng</option>
                    <option value="Takeo">Takeo</option>
                    <option value="Tboung_Khmum">Tboung Khmum</option>
                  </select>

                  <br></br>
                </div>

                <div className="mt-3">
                  <label
                    htmlFor=""
                    className="text-sm ml-3 font-bold mt-3 w-36"
                  >
                    Salary Range($)
                  </label>
                  <br />
                  <select
                    onChange={handleOnChange}
                    name="salary"
                    className="annountmentInput text-xs border-gray-400 mt-1 "
                  >
                    <option
                      value="$0_TO_0"
                      className="flex justify-center items-center "
                    >
                    Salary Negotiable

                    </option>
                    <option
                      value=" $0_TO_200"
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
                <div className="mt-3 flex justify-between">
                  <label htmlFor="" className="text-sm ml-3 font-bold mt-3">
                  Qualification
                  </label>

                  {/* <button onClick={handleEditQualification}>
                    <svg
                      className="text-green_custom"
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 44 44"
                      fill="none"
                    >
                      <path
                        d="M26.8617 14.4867L28.5492 12.7992C29.2814 12.0669 30.4686 12.0669 31.2008 12.7992C31.9331 13.5314 31.9331 14.7186 31.2008 15.4508L20.5822 26.0695C20.0535 26.5981 19.4014 26.9868 18.6849 27.2002L16 28L16.7998 25.3151C17.0132 24.5986 17.4018 23.9465 17.9305 23.4178L26.8617 14.4867ZM26.8617 14.4867L29.5 17.125M28 24V28.75C28 29.9926 26.9926 31 25.75 31H15.25C14.0074 31 13 29.9926 13 28.75V18.25C13 17.0074 14.0074 16 15.25 16H20"
                        stroke="#0F172A" 
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button> */}
                  <br />
                </div>

                <ul className="list-disc px-7 text-[13px] py-2">
                  {postAnouncement.qualifications &&
                    Object.entries(postAnouncement.qualifications).map(
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
                        className="px-5 py-1 rounded-[20px] text-white font-semibold text-xs bg-green_custom"
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
            </div>
            {/* part Right */}
            <div class=" w-5 mx-3 bg-icons_color">
              <p></p>
            </div>

            <div>
              <div className="">
                <div className="mt-1">
                  <label htmlFor="" className="text-sm ml-3 font-bold ">
                    Experience
                  </label>
                  <br />
                  <select
                    onChange={handleOnChange}
                    name="Experience"
                    className="annountmentInput text-xs border-gray-400 mt-1 "
                  >
                    <option
                      value="1-2(year)"
                      className="flex justify-center items-center "
                    >
                      1-2(Years)
                    </option>
                    <option value="InternShip">Internship</option>
                    <option value="no experience">no experience</option>
                    <option value="2-4(year)">2-4(Years)</option>
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
                    className="annountmentInput  border-gray-400 -pt-1 "
                  >
                    <option
                      value=" FULL_TIME"
                      className="flex justify-center items-center "
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
                    name="workday"
                    className="annountmentInput text-xs border-gray-400 mt-1 "
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
                <div className="mt-3">
                  <label htmlFor="" className="text-sm ml-3 mt-2 font-bold ">
                    Other
                  </label>
                  <br></br>

                  <textarea
                    id="textarea"
                    onChange={handleOnChange}
                    className="text-xs rounded-[20px] ml-1"
                    name="other"
                    placeholder="Description"
                    rows="3"
                    cols="41"
                  />
                </div>

                <div className="Roboto mt-3">
                  <label htmlFor="" className="text-sm ml-3 mt-2 font-bold ">
                  Requirements and Skills{" "}
                  </label>
                  <br />
                  <ul className="list-disc px-7 text-[13px] py-2">
                    {postAnouncement.requirementsAndSkill &&
                      Object.entries(postAnouncement.requirementsAndSkill).map(
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
                    <div className="flex justify-evenly mb-2">
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
                          className="px-5 py-1 rounded-[20px] text-white font-semibold text-xs bg-green_custom"
                        >
                          Done
                        </button>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center content-center justify-center border-t">
                    <button onClick={() => setElementVisibles(true)}>
                      <img src={Add} className="w-7 mt-3" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              // disabled={disable}
              onClick={handleClick}
              className={`flex justify-center bg-green_custom w-40 py-1.5 rounded-3xl m-auto mt-3 text-sm text-white `}
            >
              Add Announcement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
