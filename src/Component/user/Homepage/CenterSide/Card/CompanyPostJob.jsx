import React, { useEffect } from 'react'
import InfiniteScrollV1 from '../../../../othersComponent/InfiniteScrollV1'
import JobCardV2 from './JobCardV2'
import { useDispatch, useSelector } from 'react-redux';
import { setJobCard } from '../../../../../Redux/slices/JobAnnountment';
import { Jobsbypage, Jobsbyuser } from '../../../../../Redux/service/Jobs';

import InfiniteScrollV4 from '../../../../othersComponent/InfiniteScrollV4';

export default function CompanyPostJob() {
 const jobcarddata = useSelector((state) => state.jobCard.jobCard);
  
    
    
  return (
   
    <div className='mt-5 bg-white p-6 rounded-[20px] shadow'>
      <InfiniteScrollV4 dataSlide={jobcarddata}  SetSlide={setJobCard} linkAPI={Jobsbyuser} linkComponent={JobCardV2} Style={" grid grid-cols-1 sm:grid-cols-2 sm:gap-12 ml-5"}></InfiniteScrollV4>
    </div>
  )
}
