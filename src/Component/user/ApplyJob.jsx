import React, { useEffect, useState } from "react";
import apply from "../../assets/Group.png";
import delete_pic from "../../assets/delete.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import iconTick from "../../assets/iconTick.png";
import { useSelector } from "react-redux";
import { uploadFile } from "../../Redux/service/InsertJobAnnouncement";

export default function ApplyJob({ data }) {
  const [show, setShow] = useState("hidden");
  const [uploadName, setUploadName] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const companyDetail = useSelector(
    (state) => state.companyDetail.company_detail
  );

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
    document.querySelector(`.input-field${data.jobAnnouncementId}`).click();
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
      setFile(e.target.files[0]);
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

  const handleSubmit = () => {
    uploadFile(data.jobAnnouncementId, file).then((resoponse) => {});
  };

  return (
    <div>
      <h2 class="mb-1 mt-4 ml-3 text-xs font-semibold text-gray-900  dark:text-white ">
        If you interesting for Apply now :
      </h2>
      {/* apply job    */}
      <div
        className={` ${
          show == "hidden" ? "" : "hidden"
        }   flex justify-center w-full ml-2 mt-1.5 p-1 h-20  items-center pl-4 pt-3 rounded-lg `}
      >
        <div className="flex flex-wrap bg-[#F6F6F6] px-10 py-5 rounded-2xl">
          <div>
            <img
              src={apply}
              className=" w-9"
              alt=""
              onClick={() => document.querySelector(".input-field").click()}
            />
          </div>
          <div className="flex ml-5">
            <div className=" text-xs ml-3">
              <h6>Enter your resume here</h6>

              <h6 className="mt-0.5">Type-File : Only PDF </h6>
            </div>
            <div className="ml-3 mt-3">
              <button
                onClick={Uploade}
                className="text-[10px]  mt-1.5  w-16 h-5 rounded-lg border  border-[#04AA9C] text-[#04AA9C]"
              >
                <input
                  type="file"
                  accept=".pdf"
                  className={`input-field${data.jobAnnouncementId}`}
                  onChange={changeHandler}
                  hidden
                />
                Enter CV
              </button>
            </div>
          </div>
          {/* <button className="w-14 h-6 bg-[#04AA9C] rounded-md text-[10px] ml- mt-4   text-white">
                  Submit
                </button> */}
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
       <div className="flext justify-center items-center my-2 w-full">
       <button
          onClick={handleSubmit}
          className="w-[120px]  bg-[#04AA9C] py-2 px-6 rounded-2xl font-medium text-[14px] text-white"
        >
          Submit
        </button>
       </div>
      </div>

      {/* <div>
          <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Toggle modal
</button>

<div id="popup-modal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="p-6 text-center">
                <svg aria-hidden="true" class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                <button data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    Yes, I'm sure
                </button>
                <button data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
            </div>
        </div>
    </div>
</div>

          </div>
           */}
    </div>
  );
}
