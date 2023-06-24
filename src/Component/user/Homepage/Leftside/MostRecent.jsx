import React from 'react'
import UserHomePageRightSide from '../../UserHomePageRightSide'
import InfiniteScrollV1 from '../../../othersComponent/InfiniteScrollV1'
import { GetPostUserbyPage } from '../../../../Redux/service/Post'
import JobCardV1 from '../CenterSide/Card/JobCardV1'
import NewPostComponentV1 from '../CenterSide/NewPostComponentV1'
import { setPostSlide } from '../../../../Redux/slices/PostSlide'
import { useDispatch, useSelector } from 'react-redux'

export default function MostRecent() {
  const postData = useSelector((state) => state.postSlide.post);
  const dispatch = useDispatch();
  return (
    
    <div className='grid grid-cols-9 mt-10 lg:mt-20 gap-10'>
      <div className='col-span-9 xl:col-span-6 px-4 md:px-8 lg:pl-0 lg:pr-10 xl:pr-0'>
        <div >
          <InfiniteScrollV1 getData={postData}  Dispatch={dispatch} SetSlide={setPostSlide} linkAPI={GetPostUserbyPage} linkComponent={NewPostComponentV1} />
        </div>
      </div>
      <div className='xl:col-span-3'>
        <UserHomePageRightSide></UserHomePageRightSide>
      </div>
    </div>
  )
}
