import React, { useEffect, useState } from 'react'
import { DropShadow } from '../../../../utils/Style'
import ReferenceTemplate1 from './ReferenceTemplate1'
import ReferenceTemplate from './ReferenceTemplate'
import { getUserReference, getUserReferenceType } from '../../../../Redux/service/Reference'
import { useLocation } from 'react-router'

export default function SortReference() {

  const [allReference,SetAllReference] = useState([])
  useEffect(()=>{
    getUserReference().then((res)=>{
      SetAllReference(res.data?.payload.filter((data) => data.type==="REFERENCE"))
    })
  },[])
  return (
    <div>
      <div className={`${DropShadow}  p-10 grid grid-cols-2 gap-10 justify-between bg-white rounded-[20px] shadow-md`} >
          {/* <ReferenceTemplate /> */}
          {allReference?.length> 0 ? allReference.map((item,index)=>(
          <ReferenceTemplate1 item={item}/>
        )) : <div>No Data available</div>}
        </div>
    </div>
  )
}
