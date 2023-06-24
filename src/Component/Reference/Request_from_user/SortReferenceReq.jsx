import React from 'react'
import "../../../index.css"
import InfiniteScroll from '../../othersComponent/InfiniteScroll'
import UserRequestCard from './UserRequestCard'
import { DropShadow } from '../../../utils/Style'
import InfiniteScrollV2 from '../../othersComponent/InfiniteScrollV2'
import { companyGetRequestList } from '../../../Redux/service/Reference'

export default function SortReferenceReq() {
  return (
    <div>
      <div className={`${DropShadow} bg-white border-2 border-light_gray_custom mt-5  font-MainFont m-auto py-4 custom-scrollbar`}>
        <p className="p-5 font-bold font-MainFont text-xl">Sort Reference</p>
        <div className="">
          <InfiniteScrollV2 linkAPI={companyGetRequestList} linkComponent={UserRequestCard}></InfiniteScrollV2>
        </div>
      </div>
  </div>
  )
}
