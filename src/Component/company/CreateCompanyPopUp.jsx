import React, { useEffect } from "react";
import { useState } from "react";
import {
  createCompany,
  createCompanyDetails,
  getCompany,
} from "../../Redux/service/CompanyService";
import { useDispatch, useSelector } from "react-redux";
import { setPopup } from "../../Redux/slices/PopupSlice";
import { setPopupCreateCom } from "../../Redux/slices/CreateCompany";
import { Link, useNavigate } from "react-router-dom";
import LoadingComponentBtn from "../othersComponent/LoadingComponentBtn";
import { setLoading } from "../../Redux/slices/LoadingSlice";
import { setUserDetail } from "../../Redux/slices/userDetailSlide";
import { setCompanyDetail } from "../../Redux/slices/companyDetailSlice";
import { CompanyDetailProfile } from "../../Redux/service/CompanyProfile";

export default function CreateCompanyPopUp() {
  // const [isModalVisibleCreateCompany, setIsModalVisibleCreateCompany] = useState(false);
  const isModalVisible = useSelector((state) => state.popupCreateCom.value);
  const [check, setCheck] = useState(false);
  const Loading = useSelector((state) => state.loading.value);
  // const navigate = useNavigate()

  // company state
  const [companyName, setCompanyName] = useState({});
  const [selectedCompanyType, setSelectedCompanyType] = useState(
    "SOFTWARE_DEVELOPEMENT"
  );
  const [companyDetails, setCompanyDetails] = useState({});
  const companyLocation = useSelector((State) => State.companyLocation.map);
  const [isValidPhone, setIsValidPhone] = useState(true);

  const dispatch = useDispatch();

  const companyTypeMapping = {
    SOFTWARE_DEVELOPEMENT: "Software Development",
    FINANCE_AND_BANKING: "Finance and Banking",
    CIVIL_SERVICES: "Civil Services",
    ENGINEERRING: "Engineering",
    ENTERTAINMENT: "Entertainment",
    MANUFACTURING: "Manufacturing",
    TELECOMMUNICATION: "Telecommunication",
    OTHER: "Other",
  };
  const companyType = [
    "SOFTWARE_DEVELOPEMENT",
    "FINANCE_AND_BANKING",
    "CIVIL_SERVICES",
    "ENGINEERRING",
    "ENTERTAINMENT",
    "MANUFACTURING",
    "TELECOMMUNICATION",
    "OTHER",
  ];



  // list of years, 500 years
  const currentYear = new Date().getFullYear();
  const years = Array.from(new Array(500), (val, index) => currentYear - index);
  const userDetails = useSelector((State) => State.userDetail.userDetail);
  const [isCompanyNameValid, setIsCompanyNameValid] = useState(true);

  const role = localStorage.getItem("userRole") || "user";

  const toggleModal = () => {
    dispatch(setPopupCreateCom(!isModalVisible));
  };

  // handler company name
  const handleCompanyName = (event) => {
    const { name, value } = event.target;
    setCompanyName({ ...companyName, [name]: value });
    setIsCompanyNameValid(value.trim() !== ""); // Check if the trimmed value is not empty
  };

  //handle companyType
  const handleCompanyType = (event) => {
    const { value } = event.target;
    setSelectedCompanyType(value);
  };

  // handler companyDetails
  const handleCompanyDetails = (event) => {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    // const { name, value } = event.target;
    setCompanyDetails({ ...companyDetails, [inputName]: inputValue });
  };
  const handlePhone = (event) => {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    // const { name, value } = event.target;
    setCompanyDetails({ ...companyDetails, [inputName]: inputValue });
    setIsValidPhone(
      inputValue === "" || inputValue.match(/^[0-9]{3} [0-9]{3} [0-9]{3}$/)
    );
  };

  // handler companyDetails submit
  const handleSubmit = () => {
    
    dispatch(setLoading(true));
    createCompany(companyName)
      .then((result) => {
        if (result.status === 200) {
          createCompanyDetails(selectedCompanyType, companyDetails)
            .then((companyDetails) => {
              if (companyDetails === undefined) {
                setCheck(true);
              } else {
                setCheck(false);
                dispatch(setPopupCreateCom(!isModalVisible));
              }
            })
            .catch(() => {
              setCheck(true);
            });
        }
        dispatch(setLoading(false));
        setTimeout(() => {
          localStorage.removeItem("ActiveStateCom");
          const newRole = role === "user" ? "company" : "user";
          localStorage.setItem("userRole", newRole); // Save updated user role to localStorage
          CompanyDetailProfile().then((rescom) => {
              dispatch(setCompanyDetail({ ...rescom.data.payload }));
              dispatch(setUserDetail({ ...userDetails, role: "company" }));
          });
          // navigate("/company");
        }, 0);
      })
      .catch((error) => {
      });
  };

  useEffect(() => {
    setCompanyDetails({ ...companyDetails, maps: companyLocation });
  }, [companyLocation]);

  // handle company name submission
  const handleNext = () => {
    if (isCompanyNameValid) {
      setCheck(!check);
    }
  };

  return (
    <div>
      {isModalVisible && (
        <div
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed  top-0 bg-left-0 right-0 z-10 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-0rem)] max-h-full bg-gray-400 bg-opacity-50"
          style={{ backdropFilter: "blur(0px)" }}
        >
          <div className="relative w-full flex content-center items-center justify-center m-auto h-full max-h-full">
            {/* Modal content */}
            <div className="relative w-[600px] shadow bg-white rounded-[20px] shadow py-4 px-8">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-green_custom bg-transparent hover:bg-gray-200 hover:text-hover_green_custom border-2 border-green_custom rounded-full text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-hide="authentication-modal"
                onClick={toggleModal}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>

              <div className={`px-6 py-6 lg:px-8 ${check ? "hidden" : ""}`}>
                <form className="space-y-4">
                  <h3 className="mb-1 text-xl font-medium text-green_custom text-center">
                    Create company
                  </h3>
                  <div>
                    <label
                      htmlFor="company-name"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      id="companyName"
                      onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
                      className={`bg-gray-50 border my-2 border-gray-300 text-gray-900 text-sm rounded-[20px] focus:outline-b-green_custom focus:border-2 focus:drop-shadow-md focus:border-b-green_custom   focus:ring-0 focus:border-transparent block w-full p-2 ${
                        !isCompanyNameValid ? "border-red-500" : ""
                      }`}
                      placeholder=""
                      onChange={handleCompanyName}
                    />
                    {(!companyName.companyName ||
                      /^\s*$/.test(companyName.companyName)) && (
                      <p className="text-gray-500">
                        Please enter company name.
                      </p>
                    )}
                  </div>
                  {/* Rest of the form fields */}
                  <div className="flex justify-center">
                    <button
                      type="button"
                      onClick={handleNext}
                      className={`swap-on w-full text-white   focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-[20px] text-sm mt-2 px-5 py-2.5 text-center ${
                        !companyName.companyName ||
                        /^\s*$/.test(companyName.companyName)
                          ? "bg-gray-400 cursor-not-allowed hover:bg-red-500"
                          : "bg-green_custom hover:bg-teal-500 cursor-pointer"
                      }`}
                      disabled={
                        !companyName.companyName ||
                        /^\s*$/.test(companyName.companyName)
                      }
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>

              {/* companyDetail section */}
              <div className={`px-6 py-5 lg:px-8 ${check ? "" : "hidden"}`}>
                <form className=" ">
                  <h3 className=" text-[20px] pb-3 border-b-2 font-MainFont font-bold text-green_custom text-center">
                    Add company details
                  </h3>
                  <div className=" font-SecondaryFont">
                    <div>
                      <label
                        htmlFor="companyType"
                        className=" flex gap-2 items-center mb-1 mt-3 text-sm font-medium text-gray-900 "
                      >
                        <p>Company Type</p>
                        <span className="text-red-500 rounded-full text-lg">*</span>
                      </label>
                      <select
                        id="companyType"
                        name="companyType"
                        className="w-full focus:outline-b-green_custom focus:border-2 focus:drop-shadow-md focus:border-b-green_custom focus:ring-0 focus:border-transparent rounded-3xl h-[40px] text-gray-400"
                        onChange={handleCompanyType}
                      >
                        {companyType.map((item) => (
                          <option value={item} key={item}>
                            {companyTypeMapping[item] || item}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="pt-2">
                      <label
                        for="description"
                        class="block mb-1 text-sm font-medium text-gray-900 "
                      >
                        Desription
                      </label>
                      <input
                        type="text"
                        name="description"
                        id="description"
                        placeholder=""
                        onChange={handleCompanyDetails}
                        class="w-full focus:ring-green_custom focus:border-green_custom rounded-3xl h-[40px] focus:outline-b-green_custom focus:border-2 focus:drop-shadow-md focus:border-b-green_custom   focus:ring-0 focus:border-transparent text-gray-400 "
                      />
                    </div>
                    <div className="pt-2">
                      <label
                        for="phoneNumber"
                        class="flex items-center gap-2 mb-1 text-sm font-medium text-gray-900 "
                      >
                        <p>Phone Number</p>
                        <span className="text-red-500 rounded-full text-lg">*</span>

                      </label>
                      <input
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                        onChange={handlePhone}
                        className={`w-full focus:ring-green_custom focus:border-green_custom rounded-3xl h-[40px] focus:outline-b-green_custom focus:border-2 focus:drop-shadow-md focus:border-b-green_custom   focus:ring-0 focus:border-transparent text-gray-400 ${
                          !isValidPhone ? "border-red-500" : ""
                        }`}
                      />
                      {!isValidPhone && (
                        <p className="text-red-500 text-sm mt-1">
                          Invalid phone number! Please enter like this example
                          012 345 678.
                        </p>
                      )}
                    </div>

                    <div className="pt-2">
                      <label
                        for="address"
                        class="block mb-1  text-sm font-medium text-gray-900 "
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder=""
                        onChange={handleCompanyDetails}
                        class="w-full focus:ring-green_custom focus:border-green_custom rounded-3xl h-[40px] focus:outline-b-green_custom focus:border-2 focus:drop-shadow-md focus:border-b-green_custom   focus:ring-0 focus:border-transparent text-gray-400"
                      />
                    </div>

                    <div className="py-2">
                      <label
                        for="founded"
                        class="block mb-1 text-sm font-medium text-gray-900 "
                      >
                        Founded Year
                      </label>
                      <div className="">
                        <select
                          id="founded"
                          name="founded"
                          onChange={handleCompanyDetails}
                          class="w-full focus:ring-green_custom focus:border-green_custom rounded-3xl h-[40px] focus:outline-b-green_custom focus:border-2 focus:drop-shadow-md focus:border-b-green_custom   focus:ring-0 focus:border-transparent text-gray-400"
                        >
                          {years.map((year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* show map when chose */}
                    {companyLocation.lat ? (
                      <div className="h-40 w-full my-4">
                        <iframe
                          title="Google Map"
                          width="100%"
                          height="100%"
                          className="rounded-lg shadow-lg"
                          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA8ixZTgNLIK2uFt63EfBTiQQA2q_c73dg&q=${companyLocation.lat},${companyLocation.lng}`}
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <div></div>
                    )}

                    {/* Choose location */}
                    <div>
                      <button
                        type="button"
                        class="mt-2 w-full text-[16px] text-gray-500 text-md border-2 border-green_custom bg-white hover:text-white hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-blue-300 h-7 text-xs font-medium rounded-[20px] px-5 py-1 text-center"
                        onClick={() => dispatch(setPopup("map"))}
                      >
                        {companyLocation.lat
                          ? "Change Location"
                          : "Choose location"}
                      </button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <hr />
                  </div>
                  {/* Rest of the form fields */}
                  <div className="flex justify-center">
                    <Link
                      // to="/company"
                      type="button"
                      onClick={handleSubmit}
                      disabled={!isValidPhone}
                      className={`swap-on w-full text-white focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-[20px] text-sm mt-2 px-5 py-2.5 text-center ${
                        !isValidPhone ? "bg-gray-400 cursor-not-allowed hover:bg-red-500" : "bg-green_custom hover:bg-teal-500 cursor-pointer"
                      }`}
                    >
                      <p>{Loading ? <LoadingComponentBtn /> : "Done"}</p>
                    </Link>
                  </div>
                </form>
                {/* End of company Detail section */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
