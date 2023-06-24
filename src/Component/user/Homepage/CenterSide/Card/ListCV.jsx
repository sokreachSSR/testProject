import React, { useEffect, useState } from "react";
import { GetUserCV } from "../../../../../Redux/service/GetCV";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserCardCV from "./UserCardCV";
import CardForOneUserConV1 from "./CardForOneUserConV1";
export default function ListCV() {
const [data, setData] = useState([]);
  const { state } = useLocation();
  console.log("State : ", state);
  const [id, setId] = useState();
  useEffect(() => {
    if(state){
    
      GetUserCV(state).then((resoponse) => {
        setData(resoponse.data.payload);
        console.log("User Profile : ", resoponse.data.payload);
      });
    }
    
  }, []);

  return (
    <div className="mt-5 grid gap-6 grid-cols-1 md:grid-cols-2 bg-white p-6 rounded-[20px] shadow">
      
      {data?.map((item) => (
        <div className=" ">
       <CardForOneUserConV1 key={item.id} item={item} />
       
       </div>
      ))}
      
    </div>


       
    
               
      
    
                

                 

             
  );
}
