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
import { deleteReference, getUserReference } from "../../../../../Redux/service/Reference";

export default function ReferenceCreated() {
  const [data, setData] = useState([])
  useEffect(() => {
    getUserReference().then((res) => {
      const filterData = res.data.payload.filter((res) => res.status == true).map((res) => ({ ...res, popup: false }))
      console.log("test", filterData)
      setData(filterData)
    })
  }, [])
  const handleDropClick = (id) => {
    const filterData = data.map((res) => (res.referenceId === id ? { ...res, popup: !res.popup } : res))
    setData(filterData)
  };
  const deleteRef = (id)=>{
    deleteReference(id).then((res)=>{
      if(res.status === 200){
        const filterData = data.filter((res) => res.referenceId != id)
        setData(filterData)
      }
    })
  }


  const Cardref = ({ res }) => {
    const apiDateTime = res.time;
    // Convert the API date and time string to a Date object
    const dateTime = new Date(apiDateTime);
    
    // Format the date and time
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDateTime = dateTime.toLocaleString('en-US', options);
    return (<div><div className="flex justify-between my-2">
      <div className="flex items-center">
        <img src={ref_created} className="w-6" alt="" />
        <p className="mx-5 font-SecondaryFont">
          <span className="text-green_custom font-[18px]">Created on </span> {formattedDateTime}
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
