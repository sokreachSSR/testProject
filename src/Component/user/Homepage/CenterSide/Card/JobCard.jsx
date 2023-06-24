// import React, { useEffect, useState } from "react";
// import cash from "../../../../../assets/money.png";
// import experience from "../../../../../assets/list (1).png";
// import tesla from "../../../../../assets/tesla.png";
// import pin from "../../../../../assets/pin.png";
// import { Jobs } from "../../../../../Redux/service/Jobs";
// import DetailJob from "../../../DetailJob";
// import { Link } from "react-router-dom";
// import { setPopup } from "../../../../../Redux/slices/PopupSlice";
// import { useDispatch, useSelector } from "react-redux";
// import CardForOneJob from "./CardForOneJob";
// import { setJobCard } from "../../../../../Redux/slices/JobAnnountment";

// export default function JobCard() {
//   const [job, setJob] = useState([]);
//   const dispatch = useDispatch();
//   const role = useSelector((state) => state.userDetail.userDetail.role);

//   useEffect(() => {
//     Jobs().then((response) => {
//       dispatch(setJobCard(response?.data?.payload));
//       setJob(response.data ? response.data.payload : []);
//     });
//   }, []);

//   return (
//     <div className="flex flex-wrap gap-6 justify-start p-1 px-4">
//       {job.map((item) => (
//         <div className="">
//           <div className=" text-black border border-black-200 w-[320px] h-fit p-5 rounded-3xl drop-shadow ">
//             <div className="flex justify-between ">
//               <h1 className="font-semibold">{item.typeJob}</h1>
//               <CardForOneJob />
//             </div>
//             <div className="grid grid-cols-4 text-sm mt-3">
//               <div className="col-span-1">
//                 <span className=" uppercase text-xs bg-green-100 text-green_custom px-1">
//                   full time
//                 </span>
//               </div>
//               <div className="col-span-3 text-sm ml-2 text-gray-500">
//                 <div className="flex place-items-center ">
//                   <img src={cash} className="w-4 h-4" alt="" />
//                   <p className="px-2">
//                     Salary: $<span>200,000</span> - $<span>250,000</span>
//                   </p>
//                 </div>
//                 <div className="flex place-items-center py-3">
//                   <img src={experience} className="w-4 h-4" alt="" />
//                   <p className="px-2">
//                     Experience: (<span>1</span>-<span>2</span> year)
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-5 grid grid-cols-4">
//               <div className="col-span-1">
//                 <img
//                   src={"http://localhost:8080" + item.companyProfile ?? ""}
//                   className="w-20 h-20 object-cover"
//                   alt=""
//                 />
//               </div>
//               <div className="ml-5 col-span-3">
//                 <p className="text-lg font-semibold">{item.companyName}</p>
//                 <div className="flex mt-2 text-sm text-gray-500 items-center">
//                   <span>
//                     {" "}
//                     <img src={pin} className="w-3 h-3" alt="" />{" "}
//                   </span>
//                   <p className="px-2">{item.locationName}</p>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-4">
//               <div className="flex justify-between gap-2 mt-1">
//                 <label
//                   htmlFor="my-modal-job"
//                   className="btn btn-sm border text-xs font-normal py-1.5 rounded-[20px] bg-transparent capitalize text-green_custom border-green_custom w-[130px] hover:bg-green_custom hover:text-white hover:border-0"
//                 >
//                   detail
//                   {/* <button className="border text-xs py-1.5 rounded-[20px] border-green_custom w-[130px]">
//                     Details
//                   </button> */}
//                 </label>

//                 <label
//                   onClick={() => {
//                     role === "annonymous"
//                       ? dispatch(setPopup("register"))
//                       : dispatch(setPopup("applyjob"));
//                   }}
//                   htmlFor="my-modal"
//                   className="border text-xs py-1.5 text-white text-center rounded-[20px] bg-green_custom border-green_custom w-[130px] hover:bg-hover_green_custom cursor-pointer"
//                 >
//                   Apply
//                 </label>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//       <input
//         type="checkbox"
//         id={`my-modal-job${data.jobAnnouncementId}`}
//         className="modal-toggle"
//       />
//       <DetailJob data={data}/>
//     </div>
//   );
// }
