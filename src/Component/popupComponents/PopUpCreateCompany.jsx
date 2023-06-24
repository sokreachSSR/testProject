import React, { useEffect } from "react";
import { useState } from "react";
import { createCompany, createCompanyDetails, getCompany } from "../../Redux/service/CompanyService";
import { useDispatch, useSelector } from "react-redux";
import { setPopup } from "../../Redux/slices/PopupSlice";

export default function PopUpCreateCompany() {
  //   const [isModalVisible, setModalVisible] = useState(false);
  //   const [check, setCheck] = useState(false);
  
  //   // company state
  //   const [companyName, setCompanyName] = useState({});
  //   const [selectedCompanyType, setSelectedCompanyType] = useState("");
  //   const [companyDetails, setCompanyDetails] = useState({});
  
  //   const companyLocation = useSelector(State => State.companyLocation.map);
  
  //   const dispatch = useDispatch();
  
  //   //static list 
  //   const companyType = ['SOFTWARE_DEVELOPEMENT', 'FINANCE_AND_BANKING', 'CIVIL_SERVICES', 'ENGINEERRING', 'ENTERTAINMENT', 'MANUFACTURING', 'TELECOMMUNICATION', 'OTHER'];
    
  //   // list of years, 500 years
  //   const currentYear = new Date().getFullYear();
  //   const years = Array.from(new Array(500), (val, index) => currentYear - index);
  
  //   const toggleModal = () => {
  //     setModalVisible(!isModalVisible);
  //   };
  
  //   // handler company name
  //   const handleCompanyName = (event) => {
  //     const {name, value} = event.target;
  //     setCompanyName({...companyName, [name]: value});
  //   }
  
  //   //handle companyType
  //   const handleCompanyType = (event) => {
  //     const {value} = event.target;
  //     setSelectedCompanyType(value)
  //   };
  
  //   // handler companyDetails
  //   const handleCompanyDetails = (event) => {
  //     const {name, value} = event.target;
  //     setCompanyDetails({...companyDetails, [name]: value});
  //   }
  
  //   // handler companyDetails submit
  //   const handleSubmit = () => {
  //     createCompanyDetails(selectedCompanyType ,companyDetails).then((companyDetails) =>{if(companyDetails === undefined){setCheck(true)}else{setCheck(false); setModalVisible(!isModalVisible);}}).catch(() =>{setCheck(true)});
  //   };
  
  //   useEffect(() => {
  //     setCompanyDetails({ ...companyDetails, 'maps': companyLocation });
  //   }, [companyLocation] )
  
  //   // handle company name submission
  //   const handleNext = () => {
  //     createCompany(companyName).then((result) => {
  //         if (result.status === 200) {
  //           setCheck(!check);
  //         }
  //     }).catch((error) => {
  //     });
  //   };
  // return (
  //   <div>
  //     {/* Main modal */}
  //     {isModalVisible && (
  //       <div
  //         id="authentication-modal"
  //         tabIndex="-1"
  //         aria-hidden="true"
  //         className="fixed  top-0 bg-left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-0rem)] max-h-full bg-gray-400 bg-opacity-50"
  //         style={{ backdropFilter: "blur(2px)" }}
  //       >
  //         <div className="relative w-full flex content-center items-center justify-center m-auto h-full max-h-full">
  //           {/* Modal content */}
  //           <div className="relative w-[600px] bg-white rounded-lg shadow">
  //             <button
  //               type="button"
  //               className="absolute top-3 right-2.5 text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 border-2 border-black rounded-full text-sm p-1.5 ml-auto inline-flex items-center"
  //               data-modal-hide="authentication-modal"
  //               onClick={toggleModal}
  //             >
  //               <svg
  //                 aria-hidden="true"
  //                 className="w-5 h-5"
  //                 fill="currentColor"
  //                 viewBox="0 0 20 20"
  //                 xmlns="http://www.w3.org/2000/svg"
  //               >
  //                 <path
  //                   fillRule="evenodd"
  //                   d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
  //                   clipRule="evenodd"
  //                 ></path>
  //               </svg>
  //               <span className="sr-only">Close modal</span>
  //             </button>

  //             <div className={`px-6 py-6 lg:px-8 ${check ? "hidden" : ""}`}>
  //               <form className="space-y-4">
  //                 <h3 className="mb-1 text-xl font-medium text-gray-900 text-center">
  //                   Create company
  //                 </h3>
  //                 <div>
  //                   <label
  //                     htmlFor="company-name"
  //                     className="block text-sm font-medium text-gray-900"
  //                   >
  //                     Company Name
  //                   </label>
  //                   <input
  //                     type="text"
  //                     name="companyName"
  //                     id="companyName"
  //                     className="bg-gray-50 border my-2 border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
  //                     placeholder=""
  //                     onChange={handleCompanyName}
  //                   />
  //                 </div>
  //                 {/* Rest of the form fields */}
  //                 <div className="flex justify-center">
  //                   <button
  //                     type="button"
  //                     onClick={handleNext}
  //                     className="swap-on text-white bg-green_custom hover:bg-teal-500 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-[20px] text-sm mt-2 px-5 py-2.5 text-center"
  //                   >
  //                     Submit
  //                   </button>
  //                 </div>
  //               </form>
  //             </div>

  //             {/* companyDetail section */}
  //             <div className={`px-6 py-6 lg:px-8 ${check ? "" : "hidden"}`}>
  //               <form className="space-y-4 ">
  //                 <h3 className="mb-1 text-xl font-medium text-gray-900 text-center">
  //                   Add company details
  //                 </h3>
  //                 <div className=" font-SecondaryFont">
  //                   <div>
  //                     <label
  //                       for="companyType"
  //                       class="block mb-1 text-sm font-medium text-gray-900 "
  //                     >
  //                       Company Type
  //                     </label>
  //                     <select
  //                       id="companyType"
  //                       name="companyType"
  //                       class="bg-gray-50 border my-2 border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
  //                       onChange={handleCompanyType}
  //                     >
  //                       {companyType.map((item) => (
  //                         <option value={item}>{item}</option>
  //                       ))}
  //                     </select>
  //                   </div>
  //                   <div>
  //                     <label
  //                       for="description"
  //                       class="block mb-1 text-sm font-medium text-gray-900 "
  //                     >
  //                       Desription
  //                     </label>
  //                     <input
  //                       type="text"
  //                       name="description"
  //                       id="description"
  //                       placeholder=""
  //                       onChange={handleCompanyDetails}
  //                       class="bg-gray-50 border my-2 border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
  //                     />
  //                   </div>
  //                   <div>
  //                     <label
  //                       for="phoneNumber"
  //                       class="block mb-1 text-sm font-medium text-gray-900 "
  //                     >
  //                       Phone Number
  //                     </label>
  //                     <input
  //                       type="text"
  //                       name="phoneNumber"
  //                       id="phoneNumber"
  //                       placeholder=""
  //                       onChange={handleCompanyDetails}
  //                       class="bg-gray-50 border my-2 border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
  //                     />
  //                   </div>
  //                   <div>
  //                     <label
  //                       for="address"
  //                       class="block mb-1 text-sm font-medium text-gray-900 "
  //                     >
  //                       Address
  //                     </label>
  //                     <input
  //                       type="text"
  //                       name="address"
  //                       id="address"
  //                       placeholder=""
  //                       onChange={handleCompanyDetails}
  //                       class="bg-gray-50 border my-2 border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
  //                     />

  //                     <label
  //                       for="founded"
  //                       class="block mb-1 text-sm font-medium text-gray-900 "
  //                     >
  //                       Founded Year
  //                     </label>
  //                     <div>
  //                       <select
  //                         id="founded"
  //                         name="founded"
  //                         onChange={handleCompanyDetails}
  //                         class="bg-gray-50 border my-2 border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
  //                       >
  //                         {years.map((year) => (
  //                           <option key={year} value={year}>
  //                             {year}
  //                           </option>
  //                         ))}
  //                       </select>
  //                     </div>

  //                     {/* show map when chose */}
  //                     {companyLocation.lat ? (
  //                       <div className="h-40 w-full my-4">
  //                         <iframe
  //                           title="Google Map"
  //                           width="100%"
  //                           height="100%"
  //                           className="rounded-lg shadow-lg"
  //                           src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA8ixZTgNLIK2uFt63EfBTiQQA2q_c73dg&q=${companyLocation.lat},${companyLocation.lng}`}
  //                           allowFullScreen
  //                         />
  //                       </div>
  //                     ) : (
  //                       <div></div>
  //                     )}

  //                     {/* Choose location */}
  //                     <div>
  //                       <button
  //                         type="button"
  //                         class=" text-white text-md bg-green_custom hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-blue-300 h-7 text-xs font-medium rounded-[20px] px-5 py-1 text-center"
  //                         onClick={() => dispatch(setPopup("map"))}
  //                       >
  //                         {companyLocation.lat
  //                           ? "Change Location"
  //                           : "Choose location"}
  //                       </button>
  //                     </div>
  //                   </div>
  //                 </div>

  //                 {/* Rest of the form fields */}
  //                 <div className="flex justify-center">
  //                   <button
  //                     type="button"
  //                     onClick={handleSubmit}
  //                     className="text-white bg-green_custom hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[20px] text-sm mt-2 px-5 py-2.5 text-center"
  //                   >
  //                     Done
  //                   </button>
  //                 </div>
  //               </form>
  //               {/* End of company Detail section */}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );
}
