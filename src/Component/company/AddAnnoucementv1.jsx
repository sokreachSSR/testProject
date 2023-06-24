import React, { useEffect } from "react";
import { useState } from "react";
import { JobAnnouncement } from "../../Redux/service/InsertJobAnnouncement";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  title: Yup.string().required("Title is not emtpy"),
});
// JobAnnouncement 

export default function AddAnouncement() {
  const navigate = useNavigate();
  

  const [inputList, setInputList] = useState([]);
  const [disable, setDisable] = useState(true);

  const [postAnouncement, setpostAnouncement] = useState({
    Location: "Banteay_Meanchey",
    typeOfJob: "Accounting",
    salary: "$0_TO_0",
    termJob: "FULL_TIME",
    Experience:"InternShip"

  });
  const handleOnChange = (e) => {
    setpostAnouncement({
      ...postAnouncement,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = (event) => {
    event.preventDefault();
    JobAnnouncement(postAnouncement);
     navigate("/home/job")

  };





  return (
    <div className="h-[100vh]  Roboto">
      <input
        type="checkbox"
        id="my-modal-annoucement"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box max-w-2xl  h-[530px] ">
          <label
            htmlFor="my-modal-annoucement"
            className=" btn-sm btn-circle absolute right-5 top-6 cursor-pointer"
          >
            ✕
          </label>

          <h3 className=" text-lg font-bold  text-center">
            Create Announcements
          </h3>
          <hr className="w-full size-2 bg-gray-600 mt-2  " />

          <div
            className="grid grid-cols-3 "
            style={{ gridTemplateColumns: "49.9% 0.1% 4998%" }}
          >
            {/* part left */}
            <div>
              {/* <div>
                <label htmlFor="" className="text-xs ml-3 font-bold mt-3">
                  Title
                </label>
                <br />
                <Formik
                  initialValues={{ title: "" }}
                  validationSchema={SignupSchema}
                  onSubmit={(values) => {
                  }}
                >
                  {({ errors, touched, setFieldValue }) => (
                    <Form>
                      <Field
                        name="title"
                        className="annountmentInput text-xs border-gray-400 "
                        type="text"
                        placeholder="Name"
                        onChange={(event) => {
                          setpostAnouncement({
                            ...postAnouncement,
                            title: event.target.value,
                          });
                          const selectedValue = event.target.value;
                          selectedValue === ""
                            ? setDisable(true)
                            : setDisable(false);
                          setFieldValue("title", selectedValue);
                        }}
                      />

                      {errors.title && touched.title ? (
                        <div className="text-red-500">{errors.title}</div>
                      ) : null}
                    </Form>
                  )}
                </Formik>
              </div> */}
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
                    Information_Technology
                  </option>
                  <option value="Insurance">Insurance</option>
                  <option value=">Legal_Service">Legal_Service</option>
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
                  className="annountmentInput text-xs border-gray-400 mt-1 "
                  name="Location"
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
                <label htmlFor="" className="text-sm ml-3 font-bold mt-3 w-36">
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
              <div className="mt-3">
                <label htmlFor="" className="text-sm ml-3 font-bold mt-3">
                Qualification
                </label>
                <br />
                <textarea
                  rows="5"
                  cols="500"
                  className="w-72 rounded-lg text-xs mt-1"
                  name="qualifications"
                  onChange={handleOnChange}
                  form="userform"
                  placeholder="Enter text here...."
                ></textarea>
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
                    1-2(Year)
                  </option>
                  <option value="InternShip">Internship</option>
                  <option value="NO Experience">No Experience</option>
                  <option value="2-4(year)">2-4(Year)</option>
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
                  <option value="PART TIME">Part Time</option>
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
                Requirements and Skills{" "}
                </label>
                <br />
                <textarea
                  onChange={handleOnChange}
                  rows="5"
                  cols="500"
                  className="w-72 rounded-lg text-xs mt-1"
                  name="requirementsAndSkill"
                  form="usrform"
                  placeholder="Input requirement Skills"
                ></textarea>
              </div>
            </div>
          </div>
          <button
            // disabled={disable}
            onClick={handleClick}
            className={`flex justify-center bg-green_custom w-40 py-1.5 rounded-3xl m-auto mt-3 text-sm text-white `}
          >
            Add Announcement
          </button>
        </div>
      </div>
      <ToastContainer limit={1} />
    </div>
  );
}
