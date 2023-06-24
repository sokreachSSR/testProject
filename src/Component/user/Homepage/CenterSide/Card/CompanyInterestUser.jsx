import React, { useEffect, useState } from "react";
import CardForCompanyInterestUser from "../../Reference/CardForCompanyInterestUser";
import { CompanyInterest } from "../../../../../Redux/service/ProfileCompanyInterest";

export default function CompanyInterestUser() {
  const [data, setData] = useState([]);
  useEffect(() => {
    CompanyInterest().then((res) => {
      setData(res.data ? res.data.payload : []);
    });
  }, []);
  return (
    <div className="bg-white font-MainFont shadow grid grid-cols-2 border m-auto my-3 rounded-[20px] p-3 gap-3">
    {data.length === 0 ? (
      <div className=" flex justify-center text-lg font-semibold items-center w-full h-full text-gray-500 text-center p-36 pt-36">
          No Data Available
        </div>) : (
      data.map((item) =>
       <CardForCompanyInterestUser item={item} />)
    )}

{/* <div >
    {data.length === 0 ? (
      <div className="flex justify-center text-lg font-semibold items-center w-full h-full  text-black text-center p-20 pt-36">
          No Data Available
        </div>) : (
          <div className="bg-white font-MainFont shadow grid grid-cols-2 border m-auto my-3 rounded-[20px] p-3 gap-3">
            {data.map((item)=>{
               <CardForCompanyInterestUser item={item} />
            })}
       </div>
    )} */}
  </div>


  );
}