import { RadioSelect } from "@atlaskit/select";
import React, { useEffect, useState } from "react";
import LadingPage_Navbar from "./LadingPage_Navbar";
import LandingPage_Content from "./LandingPage_Content";
import LandingPage_Rightbar from "./LandingPage_Rightbar";
import LandingPage_Leftbar from "./LandingPage_Leftbar";
import { GreyBackGround } from "../../utils/Style";
import LadingPage_Center from "./LadingPage_Center";

export default function LandingPage() {
  const cities = [
    { label: "Teacher", value: "Teacher", extra: "extra" },
    { label: "IT", value: "IT" },
    { label: "Accounting", value: "Accounting" },
    { label: "Darwin", value: "darwin" },
  ];
  const JobTerm = [
    { label: "Full Time", value: "Full Time", extra: "extra" },
    { label: "Part Time", value: "Part Time" },
  ];
  const Place = [
    { label: "PP", value: "PP", extra: "extra" },
    { label: "Kandal", value: "Kandal" },
    { label: "Kompot", value: "Kompot" },
  ];
  const Salary = [
    { label: "100$-150$", value: "100-150", extra: "extra" },
    { label: "250$-500$", value: "250-500" },
    { label: "1000$-1500$", value: "1000-1500" },
  ];
  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    setVisible((current) => !current);
  };
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
  });
  return (
    <div className={`${GreyBackGround} relative `}>
      <LadingPage_Navbar></LadingPage_Navbar>

      {/* <div className="flex flex-col justify-center block md:hidden">
        <button onClick={handleToggle}>
          <svg
            class="block w-9 h-9 ml-2  sm:hidden "
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        {visible && (
          <p>
            <div className="  bg-green-200 h-60 w-40  flex flex-col justify-center ml-14  rounded-lg">
              <div className="w-44  -mt-4 -ml-4 flex justify-evenly md:hidden   ">
                <>
                  <RadioSelect
                    inputId="radio-select-example "
                    className="radio-select w-32  h-16 flex items-center rounded-3xl ml-2"
                    classNamePrefix="react-select"
                    options={[...cities]}
                    placeholder="Job Type"
                  />
                </>
              </div>
              <div className="w-44  -mt-4 -ml-4 flex justify-center  md:hidden ">
                <>
                  <RadioSelect
                    inputId="radio-select-example "
                    className="radio-select w-32  h-16 flex items-center rounded-3xl ml-2"
                    classNamePrefix="react-select"
                    options={[...JobTerm]}
                    placeholder="Job Term"
                  />
                </>
              </div>
              <div className="w-44 flex -mt-4 -ml-4 justify-center ml-1.5  md:hidden  ">
                <>
                  <RadioSelect
                    inputId="radio-select-example "
                    className="radio-select w-32  h-16 flex items-center rounded-3xl ml-2"
                    classNamePrefix="react-select"
                    options={[...Place]}
                    placeholder="Place"
                  />
                </>
              </div>
              <div className="w-44 flex -mt-4 -ml-4 justify-center  md:hidden ">
                <>
                  <RadioSelect
                    inputId="radio-select-example "
                    className="radio-select w-32  h-16 flex items-center rounded-3xl ml-2"
                    classNamePrefix="react-select"
                    options={[...Salary]}
                    placeholder="Salary"
                  />
                </>
              </div>
            </div>
          </p>
        )}

        <div className="hidden md:grid   md:grid-cols-6 text-xs    p-1  mt-7 bg-white  w-full h-20 rounded-[20px] ">
          <div className="w-44  flex justify-evenly">
            <>
              <RadioSelect
                inputId="radio-select-example "
                className="radio-select w-32  h-16 flex items-center rounded-3xl ml-2"
                classNamePrefix="react-select"
                options={[...cities]}
                placeholder="Job Type"
              />
            </>
          </div>
          <div className="w-44 flex justify-center  ">
            <>
              <RadioSelect
                inputId="radio-select-example "
                className="radio-select w-32  h-16 flex items-center rounded-3xl ml-2"
                classNamePrefix="react-select"
                options={[...JobTerm]}
                placeholder="Job Term"
              />
            </>
          </div>
          <div className="w-44 flex justify-center ml-1.5  ">
            <>
              <RadioSelect
                inputId="radio-select-example "
                className="radio-select w-32  h-16 flex items-center rounded-3xl ml-2"
                classNamePrefix="react-select"
                options={[...Place]}
                placeholder="Place"
              />
            </>
          </div>
          <div className="w-44 flex justify-center  ">
            <>
              <RadioSelect
                inputId="radio-select-example "
                className="radio-select w-32  h-16 flex items-center rounded-3xl ml-2"
                classNamePrefix="react-select"
                options={[...Salary]}
                placeholder="Salary"
              />
            </>
          </div>
        </div>
      </div> */}

      {/* <div className="grid grid-cols-12 gap-10 w-full">
        <div className="lg:col-span-4 xl:col-span-3">
          <LandingPage_Leftbar></LandingPage_Leftbar>
        </div>
        <div className="col-span-12 lg:col-span-8 xl:col-span-6 px-4 md:px-8 lg:pl-0 lg:pr-10 xl:pr-0 w-screen md:w-full">
          <LadingPage_Center></LadingPage_Center>
        </div>
        <div className="xl:col-span-3">
          <LandingPage_Rightbar></LandingPage_Rightbar>
        </div>
      </div> */}

      <div className="grid grid-cols-12 w-full">
        <div className="lg:col-span-4  xl:col-span-3">
          <LandingPage_Leftbar></LandingPage_Leftbar>
        </div>
        <div className="col-span-12 lg:col-span-8 xl:col-span-7 px-4 md:px-8 lg:pl-0 lg:pr-10 xl:pr-0 w-screen md:w-full">
          <LadingPage_Center></LadingPage_Center>
        </div>
        <div className="xl:col-span-2">
          <LandingPage_Rightbar></LandingPage_Rightbar>
        </div>
      </div>
    </div>
  );
}
