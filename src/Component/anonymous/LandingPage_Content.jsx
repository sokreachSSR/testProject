import React, { useRef } from 'react'
import { DropShadow } from '../../utils/Style'
import { sendNotification } from '../../Redux/service/Notification'
import JobCard from '../user/Homepage/CenterSide/Card/JobCard'
import LadingPage_Center from './LadingPage_Center'
import JobCardV1 from '../user/Homepage/CenterSide/Card/JobCardV1'

export default function LandingPage_Content() {
  // const test = ()=>{
  //   sendNotification(1802)
  // }
  return (
    <div className={`${DropShadow} flex justify-between`}>       
          <JobCardV1 />
    </div>
  )
}