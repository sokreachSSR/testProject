import React, { useState } from "react";
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
import DetailJob from "./DetailJob";
import { GreenBackGround } from "../../utils/Style";

export default function CardJobPage() {
  const [color, setColor] = useState();
  const ChangeColor = () => {
    let purple = "#A020F0";
    setColor(purple);
  };

  return (
    <div className="h-[1000px] w-auto ml-auto mr-auto Roboto ">
      <div className="flex flex-nowrap ">
        <div className="grid  grid-cols-1 md:grid-cols-1 gap- m-auto  lg:grid-cols-2 xl:grid-cols-3  gap-3">
          {/* Card1 */}
          <div className="w-full  md:w-72 h-48  border-gray-300  bg-white rounded-[20px] md:border  md:border-gray-300 mr-2 mt-2   ">
            {/* Type Job IT Post */}
            <div className="flex">
              <h4 className="md:ml-3 ml-0 mt-2 font-bold ">
                Techical Support Specialist{" "}
              </h4>
              <img
                src={save}
                className="w-4 h-6 md:ml-12 ml-24 mt-2  focus:ring-gray-200"
                alt=""
              />
            </div>

            {/* this block have time_work salary & requemnt */}

            <div className="flex flex-wrap">
              <div>
                <button className="md:ml-3 ml-1 mt-2 w-16 h-4 bg-[#E7F6EA] text-[#04AA9C] font-semibold rounded-sm text-[10px] hover hover:text-red-500 ">
                  FULL TIME
                </button>
              </div>

              {/* this block have salary & requment  */}
              <div>
                {/* about Salary text & logo */}
                <div className="flex">
                  <img
                    className="mr-2 md:ml-2 ml-8 w-4 h-4 mt-2 "
                    src={cash}
                    alt=""
                  />
                  <p className="mt-2 text-sm">Salary: $1000- $25,000</p>
                </div>
                {/* about requement text & logo */}
                <div className="flex">
                  <img
                    className="mr-2 md:ml-2 ml-8 w-3 h-3 mt-1"
                    src={vector}
                    alt=""
                  />
                  <p className="mt-0.5 text-sm">Experience (1-2year)</p>
                </div>
              </div>
            </div>
            {/* this block about location & details Company & apply-job */}
            <div className="flex flex-wrap">
              {/* logo Company */}
              <div>
                <img src={img} className="w-[70px]  ml-3 mt-2.5" alt="" />
              </div>

              <div>
                {/* name Company */}
                <h4 className="ml-3 mt-3 font-bold ">Microsoft</h4>

                {/* logo location & text */}
                <div className="flex text-[10px] ml-3 -mb-1">
                  <img className="w-4 h-4 mt-0.5 mr-1 " src={vectors} alt="" />
                  <p className="text-sm">SenSok Tower,(Cambodia)</p>
                </div>

                {/* button apply */}
                <button className="text-[10px] ml-3 bg-[#04AA9C] text-white w-44 h-4  rounded-lg hover hover:bg-red-500">
                  Apply Now
                </button>
                {/* button datils & Company */}

                <div className="flex mt-1">
                  <label
                    htmlFor="my-modal-3"
                    className=" text-[10px] ml-3 pl-6 text-green-500 w-20 h-4  rounded-lg border border-green-500"
                  >
                    Datils
                  </label>
                  <button className="text-[10px] ml-3  text-green-500 w-20 h-4 rounded-lg border border-green-500 ">
                    Campany
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Card2 */}
          <div className="w-72 h-48 bg-white rounded-[20px] border border-gray-300 mr-2 mt-2  ">
            {/* Type Job IT Post */}
            <div className="flex">
              <h4 className="ml-3 mt-2 font-bold ">
                Techical Support Specialist{" "}
              </h4>
              <img src={save} className="w-4 h-6 ml-12 mt-2" alt="" />
            </div>

            {/* this block have time_work salary & requemnt */}

            <div className="flex flex-wrap">
              <div>
                <button className="ml-3 mt-2 w-16 h-4 bg-[#E7F6EA] text-[#04AA9C] font-semibold rounded-sm text-[10px] hover hover:text-red-500 ">
                  FULL TIME
                </button>
              </div>

              {/* this block have salary & requment  */}
              <div>
                {/* about Salary text & logo */}
                <div className="flex">
                  <img className="mr-2 ml-2 w-4 h-4 mt-2 " src={cash} alt="" />
                  <p className="mt-2 text-sm">Salary: $1000- $25,000</p>
                </div>
                {/* about requement text & logo */}
                <div className="flex">
                  <img className="mr-2 ml-3 w-3 h-3 mt-1" src={vector} alt="" />
                  <p className="mt-0.5 text-sm">Experience (1-2year)</p>
                </div>
              </div>
            </div>
            {/* this block about location & details Company & apply-job */}
            <div className="flex flex-wrap">
              {/* logo Company */}
              <div>
                <img src={img} className="w-[70px]  ml-3 mt-2.5" alt="" />
              </div>

              <div>
                {/* name Company */}
                <h4 className="ml-3 mt-3 font-bold ">Microsoft</h4>

                {/* logo location & text */}
                <div className="flex text-[10px] ml-3 -mb-1">
                  <img className="w-4 h-4 mt-0.5 mr-1 " src={vectors} alt="" />
                  <p className="text-sm">SenSok Tower,(Cambodia)</p>
                </div>

                {/* button apply */}
                <button className="text-[10px] ml-3 bg-[#04AA9C] text-white w-44 h-4 rounded-lg hover hover:bg-red-500">
                  Apply Now
                </button>
                {/* button datils & Company */}

                <div className="flex mt-1">
                  <label
                    htmlFor="my-modal-3"
                    className=" text-[10px] ml-3 pl-6 text-green-500 w-20 h-4  rounded-lg border border-green-500"
                  >
                    Datils
                  </label>
                  <button className="text-[10px] ml-3  text-green-500 w-20 h-4 rounded-lg border border-green-500 ">
                    Campany
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card1 */}
          <div className="w-72 h-48 bg-white rounded-[20px] border border-gray-300 mr-2 mt-2  ">
            {/* Type Job IT Post */}
            <div className="flex">
              <h4 className="ml-3 mt-2 font-bold ">
                Techical Support Specialist{" "}
              </h4>
              <img src={save} className="w-4 h-6 ml-12 mt-2" alt="" />
            </div>

            {/* this block have time_work salary & requemnt */}

            <div className="flex flex-wrap">
              <div>
                <button className="ml-3 mt-2 w-16 h-4 bg-[#E7F6EA] text-[#04AA9C] font-semibold rounded-sm text-[10px] hover hover:text-red-500 ">
                  FULL TIME
                </button>
              </div>

              {/* this block have salary & requment  */}
              <div>
                {/* about Salary text & logo */}
                <div className="flex">
                  <img className="mr-2 ml-2 w-4 h-4 mt-2 " src={cash} alt="" />
                  <p className="mt-2 text-sm">Salary: $1000- $25,000</p>
                </div>
                {/* about requement text & logo */}
                <div className="flex">
                  <img className="mr-2 ml-3 w-3 h-3 mt-1" src={vector} alt="" />
                  <p className="mt-0.5 text-sm">Experience (1-2year)</p>
                </div>
              </div>
            </div>
            {/* this block about location & details Company & apply-job */}
            <div className="flex flex-wrap">
              {/* logo Company */}
              <div>
                <img src={img} className="w-[70px]  ml-3 mt-2.5" alt="" />
              </div>

              <div>
                {/* name Company */}
                <h4 className="ml-3 mt-3 font-bold ">Microsoft</h4>

                {/* logo location & text */}
                <div className="flex text-[10px] ml-3 -mb-1">
                  <img className="w-4 h-4 mt-0.5 mr-1 " src={vectors} alt="" />
                  <p className="text-sm">SenSok Tower,(Cambodia)</p>
                </div>

                {/* button apply */}
                <button className="text-[10px] ml-3 bg-[#04AA9C] text-white w-44 h-4 rounded-lg hover hover:bg-red-500">
                  Apply Now
                </button>
                {/* button datils & Company */}

                <div className="flex mt-1">
                  <label
                    htmlFor="my-modal-3"
                    className=" text-[10px] ml-3 pl-6 text-green-500 w-20 h-4 rounded-lg border border-green-500"
                  >
                    Datils
                  </label>
                  <button className="text-[10px] ml-3  text-green-500 w-20 h-4 rounded-lg border border-green-500 ">
                    Campany
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
      <div>
        <input
          type="checkbox"
          id="my-modal-3"
          className="modal-toggle  bg-red-500  rounded-sm"
        />
        <div className="modal justify-start mt-3 flex-col  rounded-sm ">
          <div className="modal-box  relative w-[400px] overflow-x-hidden scrollbar-thin h-[80vh] scrollbar-thumb-blue-700 scrollbar-track-blue-300  overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full ">
            <DetailJob></DetailJob>
          </div>
        </div>
      </div>
    </div>
  );
}
