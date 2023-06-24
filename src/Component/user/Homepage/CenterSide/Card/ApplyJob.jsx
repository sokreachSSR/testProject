import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import apply from "../../../../../assets/Group.png";
import delete_pic from "../../../../../assets/delete.png";

export default function ApplyJob() {
  const [show, setShow] = useState("hidden");
  const notify = () => toast("Your Submit is Successfully");
  const [uploadName, setUploadName] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);

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

  const changeHandler = (e) => {
    if (e.target.files.length > 0) {
      let filename = e.target.files[0].name;
      setUploadName(filename);
      setIsUploaded(true);
      setShow("");
      localStorage.setItem("uploadName", filename);
      localStorage.setItem("isUploaded", "true");
    }
  };

  const handleDelete = () => {
    setUploadName("");
    setIsUploaded(false);
    setShow("hidden");
    localStorage.removeItem("uploadName");
    localStorage.setItem("isUploaded", "false");
  };

  return (
    <div className="modal">
      <div className="modal-box  overflow-y-scroll  md:w-[400px] overflow-x-hidden ">
        {/*block popup*/}
        <label
          htmlFor="my-modal-job"
          className="btn btn-sm btn-circle fixed  bg-green_custom border-0 hover:bg-hover_green_custom right-2 top-2"
        >
          ✕
        </label>
        <div>
          <h2 class="mb-2 text-sm font-semibold text-gray-900 mt-2 ml-2 ">
            Description
          </h2>
          <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside text-xs ml-5">
            <li>Type : Full time</li>
            <li>Salary : $350-650$</li>
            <li> Work : Monday-Firday(8am-5pm)</li>
          </ul>
          <h2 class="mb-2 text-sm font-semibold text-gray-900 mt-2 ml-2 ">
            Qualifications
          </h2>
          <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside text-xs ml-5">
            <li>Learn IT</li>
            <li>Diligent and honest</li>
            <li>Friendly and communicative</li>
            <li>Enjoys working in a team</li>
          </ul>
          <h2 class="mb-2 text-sm font-semibold text-gray-900 mt-2 ml-2 ">
            Requirements and Skill
          </h2>
          <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside text-xs ml-5  text-start">
            <li>
              Bachelor's degree in computer sciences, technology or related
              fields.
            </li>
            <li>Excellent communication, people and managerial skills.</li>
            <li>BS in Computer Science, MIS or similar field</li>
          </ul>
        </div>
        <h2 class="mb-1 mt-4 ml-3 text-xs font-semibold text-gray-900   ">
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
                onClick={() => document.querySelector(".input-field").click()}
              />
            </div>
            <div className="flex">
              <div className=" text-[10px] ml-3">
                <h6>Enter your resume here</h6>

                <h6 className="mt-0.5">File : DOCX,PDF(Maximum Size:5MB)</h6>

                <button
                  onClick={Uploade}
                  className="text-[10px]  mt-1.5  w-16 h-5 rounded-lg border  border-[#04AA9C] text-[#04AA9C]"
                >
                  {/* <input type='file' className="input-field" onChange={changeHandler} hidden /> {uploadName} */}
                  <input
                    type="file"
                    className="input-field"
                    onChange={changeHandler}
                    hidden
                  />
                  Enter CV
                </button>
              </div>
            </div>
            <button className="w-14 h-6 bg-[#04AA9C] rounded-md text-[10px] ml-6 mt-4   text-white">
              Submit
            </button>
          </div>
        </div>

        {/* upload */}
        <div className={`${show} w-[360px]`}>
          <div
            className={` w-[360px] bg-[#F6F6F6]  h-14 mt-2 flex  ml-3 pl-3 mr-3 rounded-md `}
          >
            <img src={apply} className="w-10 h-10 mt-1" />

            <div className="grid grid-cols-2 gap-1 mt-3 ml-4  ">
              <div className="b text-xs ">
                {uploadName}
                <hr className="w-48 mt-1 h-1 bg-blue-500 rounded-lg" />
              </div>

              <div className="">
                <img
                  src={delete_pic}
                  alt=""
                  onClick={handleDelete}
                  className="w-6 fixed right-10"
                />
              </div>
            </div>
          </div>
          <button
            className="w-14 h-6 bg-[#04AA9C] rounded-md text-[10px] ml-40 mt-1.5  text-white"
            onClick={notify}
          >
            Submit
          </button>

          <div></div>
        </div>
      </div>
    </div>
  );
}
