import React, { useEffect, useState } from "react";
import SearchComponent from "../../../othersComponent/SearchComponent";
import filter_letter from "../../../../assets/filter-letter.svg";
import { DropShadow } from "../../../../utils/Style";
import request_reference_pic from "../../../../assets/request_reference_pic.svg";
import request_certificate_pic from "../../../../assets/request_certificate_pic.svg";
import SearchCompanyCard from "./SearchCompanyCard";
import { SearchCompanyData, SearchFollowingCompany } from "../../../../Redux/service/UserReference";
import SearchCompanyComponent from "../../../othersComponent/SearchCompanyComponent";

export default function SearchCompany() {
  const [data, setData] = useState([]);

  useEffect(() => {
    SearchFollowingCompany().then((res) => {
      setData(res.data ? res.data.payload : []);
    });
  }, []);

  return (
    <div>
      <div className="bg-white w-full rounded-[20px] mt-4 p-6 shadow ml-4 md:ml-8 lg:ml-0 xl:ml-0 2xl:ml-0 mr-4 md:mr-8 lg:mr-10 xl:mr-12 2xl:mr-20">
        {/* title */}
        <h1 className="font-MainFont text-2xl font-bold not-italic text-gray-500">Company</h1>
        {/* function */}
        <div className="flex justify-between">
          {/* search bar */}
          {/* <div className=" w-[72%] mt-3">
            <SearchCompanyComponent />
          </div> */}
          {/* drop down filter company type */}
          {/* <select className="w-[21%] h-[48px] rounded-[20px] border border-gray-300 mt-3">
            <optgroup label="Select Company Type">
              <option value="all">
                <input
                  type="radio"
                  name="companyType"
                  id="all"
                  value="all"
                  checked
                />
                <label htmlFor="all">
                  <span className="icon">⚪</span> All
                </label>
              </option>
              <option value="technology">
                <label htmlFor="technology">
                  <span className="icon">⚪</span> Technology
                </label>
              </option>
              <option value="finance">
                <label htmlFor="finance">
                  <span className="icon">⚪</span> Finance
                </label>
              </option>
            </optgroup>
          </select> */}
          {/* filter letter */}
          {/* <button className="w-[5%] flex justify-center items-center h-[48px] rounded-[20px] bg-green_custom mt-3">
            <span className="icon">
              <img src={filter_letter} alt="" />
            </span>
          </button> */}
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
          {/* card */}
          {data.map((item, index) => (
            <SearchCompanyCard item={item} key={index} />
          ))}
        </div>
      </div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <label
        htmlFor="my-modal-5"
        className="modal cursor-pointer bg-transparent"
      >
        <div
          className={`${DropShadow} modal-box h-auto w-auto  absolute  bottom-10  border-2 border-gray-300`}
        >
          <div className="modal-action">
            <div>
              <label
                htmlFor="modal-box relative"
                className="btn flex justify-center items-center h-auto w-42 gap-2 bg-white border-0 capitalize hover:bg-light_gray_custom rounded-3xl"
              >
                <img src={request_reference_pic} alt="" />
                <p className="py-4 text-xl text-black">Request Reference</p>
              </label>
              <label
                htmlFor="modal-box relative"
                className="btn flex justify-center items-center h-auto w-42 gap-5  bg-white hover:bg-light_gray_custom border-0 capitalize rounded-3xl"
              >
                <img src={request_certificate_pic} alt="" />
                <p className="py-4 text-xl text-black">Request Certificate</p>
              </label>
            </div>
          </div>
        </div>
      </label>
    </div>
  );
}
