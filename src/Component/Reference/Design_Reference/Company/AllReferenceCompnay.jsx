import React, { useEffect, useState } from 'react'
import ReferenceTemplate from './ReferenceTemplate'
import ReferenceTemplate1 from './ReferenceTemplate1'
import CertificateTemplate from './CertificateTemplate'
import { DropShadow } from '../../../../utils/Style'
import { companyGetCompleteList, getUserReference } from '../../../../Redux/service/Reference'

export default function AllReferenceCompnay() {
  const [allReference,SetAllReference] = useState([])
  useEffect(()=>{
    // getUserReference().then((res)=>{
    //   SetAllReference(res.data?.payload)
    // })
    companyGetCompleteList().then((res)=>{
      SetAllReference(res.data?.payload)
    })
  },[])
  return (
    <div>
        <div className={`${DropShadow} p-10 grid grid-cols-2 gap-10 justify-between bg-white rounded-[20px] shadow-md`}>
          {/* <ReferenceTemplate /> */}
          {allReference.length> 0 ? allReference.map((item,index)=>(
          <ReferenceTemplate1 item={item}/>
        )) : <div>No Data available</div>}
        </div>
    </div>
  )
}
