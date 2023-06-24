import React from 'react'
import { DropShadow } from '../../../utils/Style'
import UserRequestCard from './UserRequestCard'
import InfiniteScroll from '../../othersComponent/InfiniteScroll'
import InfiniteScrollV2 from '../../othersComponent/InfiniteScrollV2'
import { companyGetRequestList } from '../../../Redux/service/Reference'

export default function SortCertificateReq() {
  return (
    <div>
      <div className={`${DropShadow}  bg-white border-2 border-light_gray_custom mt-5  font-MainFont m-auto py-4 custom-scrollbar`} >
        <p className="p-5 font-bold font-MainFont text-xl" >Sort Certificate</p>
        <div className="">
          <InfiniteScrollV2 linkAPI={companyGetRequestList}  linkComponent={UserRequestCard}></InfiniteScrollV2>
        </div>
      </div>
  </div>
  )
}
