import React, { useState } from "react";
import reference from "../../../../../assets/reference.svg";
import edit from "../../../../../assets/editIcon.svg";
import plus from "../../../../../assets/plusIcon.svg";
import dropdown from "../../../../../assets/dropdown.svg";
import btn_delete from "../../../../../assets/btn_delete.svg";
import drop from "../../../../../assets/drop.svg";
import doneRef from "../../../../../assets/doneRef.svg";
import ref_created from "../../../../../assets/refCreated.svg";
import ref_created_plus from "../../../../../assets/refCreatedPlus.svg";
import tre3 from "../../../../../assets/tre3.svg";
import ReferenceCard2 from "../../../../company/ReferenceCard2";
import ReferenceCard1 from "../../../../company/ReferenceCard1";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { deleteReference, deleteReferenceOfCompany, getUserReference, getUserReferenceCompleteFromCompany } from "../../../../../Redux/service/Reference";


export default function ReferencesRecieved() {
  // // const [isComponentVisible, setComponentVisible] = useState(false);
  // // const [isComponentVisible1, setComponentVisible1] = useState(false);
  // // const [isAllOpen, setAllOpen] = useState(false);

  // // const handleDropClick = () => {
  // //   setComponentVisible(!isComponentVisible);
  // // };

  // // const handleCloseClick = () => {
  // //   setComponentVisible(false);
  // //   setComponentVisible1(false);
  // //   setAllOpen(false);
  // // };

  // // const handleDropClick1 = () => {
  // //   setComponentVisible1(!isComponentVisible1);
  // // };

  // // const handleToggleAll = () => {
  // //   if (isAllOpen) {
  // //     setComponentVisible(false);
  // //     setComponentVisible1(false);
  // //   } else {
  // //     setComponentVisible(true);
  // //     setComponentVisible1(true);
  // //   }
  // //   setAllOpen(!isAllOpen);
  // // };

  // // return (
  // //   <div>
  // //     <div className=" font-MainFont rounded-[20px] mb-5 relative">
  // //         <div className="ml-10">
  // //           {/* recieved button */}
  // //           <div className="mt-6">
  // //             <div className="md:flex justify-between my-2">
  // //               <div className="flex items-center">
  // //                 <img src={doneRef} className="w-8" alt="" />
  // //                 <p className="mx-3 font-SecondaryFont">30 January 2023 Verified by <span className=" font-bold">ACME GLOBAL Investment</span> </p>
  // //               </div>
  // //               <div className="flex items-center">
  // //                 <div>
  // //                   <img src={drop}
  // //                   className="w-8 mx-1 cursor-pointer"
  // //                   alt=""
  // //                   onClick={handleDropClick} />
  // //                 </div>
  // //                 <div>
  // //                   <img src={btn_delete} className="w-8 mx-1" alt="" />
  // //                 </div>  
  // //               </div>
  // //             </div>
  // //             {isComponentVisible && (
  // //             <div>
  // //               <div className="w-full">
  // //                 <ReferenceCard1 />
  // //               </div>
  // //             </div>
  // //             )}
  // //             <div className="md:flex justify-between my-2">
  // //               <div className="flex items-center">
  // //                 <img src={doneRef} className="w-8" alt="" />
  // //                 <p className="mx-3 font-SecondaryFont">30 January 2023 Verified by <span className=" font-bold">JAVA</span> </p>
  // //               </div>
  // //               <div className="flex items-center">
  // //                 <div>
  // //                 <img src={drop}
  // //                   className="w-8 mx-1 cursor-pointer"
  // //                   alt=""
  // //                   onClick={handleDropClick1} />
  // //                 </div>
  // //                 <div>
  // //                   <img src={btn_delete} className="w-8 mx-1" alt="" />
  // //                 </div>
  // //               </div>
  // //             </div>
  // //             {isComponentVisible1 && (
  // //             <div>
  // //               <div className=" ml-14">
  // //                 <ReferenceCard2 />
  // //               </div>
  // //             </div>
  // //             )}
  // //           </div>
  // //           <div className="flex justify-end mt-5 ">
  // //             <button
  // //               onClick={handleToggleAll}
  // //               className={`${isAllOpen ? 'bg-red-500 text-white py-2 px-4 font-SecondaryFont rounded-full' : ' bg-green_custom text-white py-2 px-4 font-SecondaryFont rounded-full'}`}
  // //             >
  // //               {isAllOpen ? "Close All" : "Preview All"}
  // //             </button>
  // //           </div>
  // //         </div>
  // //       </div>
  // //   </div>
  // );
  const [data, setData] = useState([])
  useEffect(() => {
    getUserReferenceCompleteFromCompany().then((res) => {
      const filterData = res.data.payload.map((res) => ({ ...res, popup: false }))
      setData(filterData)
    })
  }, [])
  const handleDropClick = (id) => {
    const filterData = data.map((res) => (res.referenceId === id ? { ...res, popup: !res.popup } : res))
    setData(filterData)
  };
  const deleteRef = (id)=>{
    deleteReferenceOfCompany(id).then((res)=>{
      if(res.status === 200){
        const filterData = data.filter((res) => res.referenceId != id)
        setData(filterData)
      }
    })
  }


  const Cardref = ({ res }) => {
    const apiDateTime = res.time?res.time:res.date;
    // Convert the API date and time string to a Date object
    const dateTime = new Date(apiDateTime);
    
    // Format the date and time
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDateTime = dateTime.toLocaleString('en-US', options);
    console.log(res, "sdfafasfas")
    return (<div><div className="flex justify-between my-2">
      <div className="flex items-center">
        <img src={ref_created} className="w-6" alt="" />
        <p className="mx-5 font-SecondaryFont">
          <span className=" text-green_custom font-[18px]">Verified on</span> {formattedDateTime} 
          <span className="text-green_custom font-[18px]"> By </span> <span className="font-bold">{res.companyName}</span>
        </p>
      </div>
      <div className="flex items-center">
        <div>
          <img src={drop}
            className="w-8 mx-1 cursor-pointer"
            alt=""
            onClick={() => handleDropClick(res.referenceId)} />
        </div>
        <div>
          <img src={btn_delete} onClick={()=>deleteRef(res.referenceId)} className="w-8 mx-1" alt="" />
        </div>
      </div>
    </div>
      {res.popup && (
        <div>
          <div className="w-full">
            <ReferenceCard1 form={res.form} />
          </div>
        </div>
      )}
    </div>)
  }

  return (
    <div>
      <div className=" font-MainFont rounded-[20px] mb-5">
        <div className="ml-10">
          {/* recieved button */}
          <div className="mt-6">
            {data.map((res) => (
              <Cardref res={res}></Cardref>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
