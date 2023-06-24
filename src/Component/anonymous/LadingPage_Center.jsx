import { RadioSelect } from "@atlaskit/select";
import React, { useEffect, useRef, useState } from "react";
import Select from "react-dropdown-select";

import JobCard from "../user/Homepage/CenterSide/Card/JobCard";
import InfiniteScroll from "../othersComponent/InfiniteScroll";
import InfiniteScrollV1 from "../othersComponent/InfiniteScrollV1";
import { Jobsbypage } from "../../Redux/service/Jobs";
import JobCardV1 from "../user/Homepage/CenterSide/Card/JobCardV1";
import { useDispatch, useSelector } from "react-redux";
import { setJobCard } from "../../Redux/slices/JobAnnountment";
import drop_icn from "../../assets/drop_icon_landin.svg";
import drop_white_icn from "../../assets/drop_icon_white.svg";
import { useOnHoverOutside } from "../../Redux/service/useOnHoverOutside";
import JobTypeMenu from "./Suggestion/JobTypeMenu";
import InfiniteScrollV1LandingPage from "../othersComponent/InfiniteScrollV1LandingPage";

export default function LadingPage_Center() {
  const [jobTypeHovered, setJobTypeHovered] = useState(false);
  const [jobTermHovered, setJobTermHovered] = useState(false);
  const [placeHovered, setPlaceHovered] = useState(false);
  const [salaryHovered, setSalaryHovered] = useState(false);

  const dispatch = useDispatch();

  const dropdownRef = useRef(null); // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  // Function to close dropdown
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook



  const jobcarddata = useSelector((state) => state.jobCard.jobCard);
  const jobType = [
    { label: "All JobType", value: "All JobType" },
    { label: "Accounting", value: "Accounting" },
    { label: "Administration", value: "Administration" },
    { label: "Advertising", value: "Advertising" },
    { label: "Architecture", value: "Architecture" },
    { label: "Audit", value: "Audit" },
    { label: "Banking", value: "Banking" },
    { label: "Cashier", value: "Cashier" },
    { label: "Design", value: "Design" },
    { label: "Education", value: "Education" },
    { label: "Engineering", value: "Engineering" },
    { label: "Finance", value: "Finance" },
    { label: "Health", value: "Health" },
    { label: "Hospitality", value: "Hospitality" },
    { label: "Human Resource", value: "Human_Resource" },
    { label: "Information Technology", value: "Information Technology" },
    { label: "Insurance", value: "Insurance" },
    { label: "Legal Service", value: "Legal_Service" },
    { label: "Management", value: "Management" },
    { label: "Media", value: "Media" },
    { label: "Project Management", value: "Project_Management" },
    { label: "Receptionist", value: "Receptionist" },
    { label: "Sales", value: "Sales" },
    { label: "Taxation", value: "Taxation" },
    { label: "Technician", value: "Technician" },
    { label: "Training", value: "Training" },
    { label: "Other", value: "Other" },
  ];
  const JobTerm = [
    { label: "All Job Term", value: "All Job Term" },
    { label: "Full Time", value: "FULL_TIME" },
    { label: "Part Time", value: "PART_TIME" },
  ];
  const Place = [
   { label: "All Place", value: "All Place"},
   { label: "Kandal", value: "Kandal"},
    { label: "Kompot", value: "Kompot" },
    { label: "Banteay Meanchey", value: "Banteay Meanchey" },
    { label: "Battambang", value: "Battambang" },
    { label: "Kampong Cham", value: "Kampong Cham" },
    { label: "Kampong Chhnang", value: "Kampong Chhnang" },
    { label: "Kampong Speu", value: "Kampong Speu" },
    { label: "Kampong Thom", value: "Kampong Thom" },
    { label: "Kep", value: "Kep" },
    { label: "Koh Kong", value: "Koh Kong" },
    { label: "Kratie", value: "Kratie" },
    { label: "Mondulkiri", value: "Mondulkiri" },
    { label: "Oddar Meanchey", value: "Oddar Meanchey" },
    { label: "Pailin", value: "Pailin" },
    { label: "Phnom Penh", value: "Phnom Penh" },
    { label: "Preah Vihear", value: "Preah Vihear" },
    { label: "Preah Sihanouk", value: "Preah Sihanouk" },
    { label: "Prey Veng", value: "Prey Veng" },
    { label: "Pursat", value: "Pursat" },
    { label: "Ratanakiri", value: "Ratanakiri" },
    { label: "Siem Reap", value: "Siem Reap" },
    { label: "Stung Treng", value: "Stung Treng" },
    { label: "Svay Rieng", value: "Svay Rieng" },
    { label: "Takeo", value: "Takeo" },
    { label: "Tboung Khmum", value: "Tboung Khmum" },
  ];
  const Salary = [
    { label: "All Salary", values: "All Salary"},
    { label: "100$-150$", values: "100 - 150"},
    { label: "250$-500$", values: "250 - 500" },
    { label: "1000$-1500$", values: "1000-1500" },
    // { label: "$0-$0", values: "0 - 0" },
    { label: "$0-$200", values: "0 - 200" },
    { label: "$201-$400", values: "201 - 400" },
    { label: "$401-$600", values: "401 - 600" },
    { label: "$601-$800", values: "601 - 800" },
    { label: "$801-$1000", values:"801 - 1000" },
    { label: "$1001+", values: "1001 - 1001" },
  ];
  // const [placeHovered, setPlaceHovered] = useState(false);
  const [filter, setFilter] = useState({ jobType: "All JobType", job: "All Job Term", salary: "All Salary", place: "All Place" });
  const onChangeFilter = (e) => {
    setFilter({ ...filter, [e.target.getAttribute('name')]: e.target.getAttribute('data-set') })
  }
  const [filterData, setFilterData] = useState()
  useEffect(() => {
    var result = jobcarddata;
    if (result.length > 0) {
      if (filter.jobType !== "All JobType") result = result.filter((item) => item.typeJob === filter.jobType)
      if (filter.job !== "All Job Term") result = result.filter((item) => item.termJob === filter.job)
      if (filter.salary !== "All Salary") result = result.filter((item) => item.salary === filter.salary)
      if (filter.place !== "All Place") result = result.filter((item) => item.locationName === filter.place)
    }  
    setFilterData(result)

  }, [jobcarddata, filter])
  return (
    <div className="xl:pr-[115px] mt-20 lg:mt-0">
      <div className="mt-10 relative z-[3] lg:mt-20 h-fit p-4 rounded-3xl items-center border drop-shadow text-black bg-white flex gap-4 flex-wrap w-full">
        {/* div s */}
        <div>
          <button
            className="flex justify-center z-40 items-center w-30 h-10 border rounded-[20px] gap-2 cursor-pointer hover:rounded-b-none text-gray-500 font-medium hover:bg-green_custom hover:w-44 hover:justify-between hover:text-white "
            onMouseEnter={() => setJobTypeHovered(true)}
            onMouseLeave={() => setJobTypeHovered(false)}
          >
            <p className="relative px-4"  >{filter.jobType}</p>
            <img
              src={jobTypeHovered ? drop_white_icn : drop_icn}
              className="hover:fill-white px-4"
              alt="Icon"
            />
            {jobTypeHovered && (
              <div className="absolute w-[175px] mt-[217px] bg-white rounded-none z-10  rounded-b-[5px] shadow-md overflow-y-scroll h-[180px]"
              >
                {jobType.map((value, index) => (
                  <p
                    onClick={onChangeFilter}
                    name="jobType"
                    key={index}
                    data-set={value.value}
                    className=" px-4 text-left py-2 text-black hover:bg-gray-200 mb-1 cursor-pointer"
                  >
                    {value.label}
                  </p>
                ))}
              </div>
            )}
          </button>
        </div>

        <div
          className="flex justify-center z-40 items-center w-30 h-10 border rounded-[20px] gap-2 cursor-pointer hover:rounded-b-none text-gray-500 font-medium hover:bg-green_custom  hover:w-44 hover:justify-between hover:text-white"
          onMouseEnter={() => setJobTermHovered(true)}
          onMouseLeave={() => setJobTermHovered(false)}
        >
          <p className="relative px-4" >{filter.job}</p>
          <img
            src={jobTermHovered ? drop_white_icn : drop_icn}
            className="hover:fill-white px-4"
            alt="Icon"
          />
          {jobTermHovered && (
            <div className="absolute w-[175px] mt-[129px]  bg-white rounded-none z-10  rounded-b-[5px]  shadow-md "
            >
              {JobTerm.map((value, index) => (
                <p onClick={onChangeFilter}
                  name="job"
                  key={index}
                  data-set={value.value}
                  className=" px-4 py-2 text-black hover:bg-gray-200 mb-1 cursor-pointer"
                >
                  {value.label}
                </p>
              ))}
            </div>
          )}
        </div>

        <div
          className="flex justify-center items-center w-30 h-10 border rounded-[20px] -z-10 gap-2 cursor-pointer hover:rounded-b-none text-gray-500 font-medium hover:bg-green_custom hover:w-44 hover:justify-between hover:text-white"
          onMouseEnter={() => setPlaceHovered(true)}
          onMouseLeave={() => setPlaceHovered(false)}
        >
          <p className="relative px-4">{filter.place}</p>
          <img
            src={placeHovered ? drop_white_icn : drop_icn}
            className="hover:fill-white px-4"
            alt="Icon"
          />
          {placeHovered && (
            <div className="absolute w-44 mt-[176px] bg-white rounded-none rounded-b-[5px] overflow-y-scroll h-36  shadow-md"
            >
              {Place.map((value, index) => (
                <p
                  onClick={onChangeFilter}
                  name="place"
                  key={index}
                  data-set={value.value}
                  className=" px-4 py-2 text-black hover:bg-gray-200 mb-1 cursor-pointer"
                >
                  {value.label}
                </p>
              ))}
            </div>
          )}
        </div>

        <div
          className="flex justify-center items-center w-30 h-10 border rounded-[20px] -z-10 gap-2 cursor-pointer hover:rounded-b-none text-gray-500 font-medium hover:bg-green_custom hover:w-44 hover:justify-between hover:text-white"
          onMouseEnter={() => setSalaryHovered(true)}
          onMouseLeave={() => setSalaryHovered(false)}
        >
          <p className="relative px-4" >{filter.salary}</p>
          <img
            src={salaryHovered ? drop_white_icn : drop_icn}
            className="hover:fill-white px-4"
            alt="Icon"
          />
          {salaryHovered && (
            <div className="absolute w-44 mt-[176px] bg-white rounded-none  rounded-b-[5px] overflow-y-scroll h-36  shadow-md"
            >
              {Salary.map((value, index) => (
                <p
                  onClick={onChangeFilter}
                  name="salary"
                  key={index}
                  data-set={value.values}
                  className=" px-4 py-2 text-black hover:bg-gray-200 mb-1  cursor-pointer"
                >
                  {value.label}
                </p>
              ))}
            </div>
          )}
        </div>
        {/* div e */}
      </div>

      <div className="flex flex-col justify-center drop-shadow w-full">
        <div className="mt-3 -z-10 xl:grid-cols-2 min-h-screen  flex-grow overflow-hidden p-4 md:p-6 bg-white w-full  rounded-[20px] top-0 ">
          <InfiniteScrollV1LandingPage
            filterData={filterData}
            getData={jobcarddata}
            Dispatch={dispatch}
            SetSlide={setJobCard}
            linkAPI={Jobsbypage}
            linkComponent={JobCardV1}
            Style={"grid grid-cols-1 md:grid-cols-2 gap-6"}
          ></InfiniteScrollV1LandingPage>
        </div>
      </div>
    </div>
  );
}
