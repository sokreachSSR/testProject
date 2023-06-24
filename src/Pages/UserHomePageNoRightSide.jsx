import React from 'react'
import UserNavBar from '../Component/user/UserNavBar'
import UserHomePageLeftSide from '../Component/user/UserHomePageLeftSide'
import UserHomePageCenterSide from '../Component/user/UserHomePageCenterSide'
import UserHomePageRightSide from '../Component/user/UserHomePageRightSide'
import { GreyBackGround } from '../utils/Style'
import { Outlet } from 'react-router-dom'
import UserLeftSideFeature from '../Component/user/Homepage/Leftside/UserLeftSideFeature'
import ProfileComponent from '../Component/user/Homepage/Leftside/ProfileComponent'

export default function UserHomePageNoRightSide() {
  return (
    <div className={`${GreyBackGround} min-h-screen relative`}>
      <UserNavBar></UserNavBar>
      <div className='grid grid-cols-12 gap-2 md:gap-5'>
        <div className='col-span-3'>
          <ProfileComponent></ProfileComponent>
          <UserLeftSideFeature></UserLeftSideFeature>
        </div>
        <div className='col-span-9'>
            <Outlet />
        </div>
      
      </div>
    </div>
  )
}
