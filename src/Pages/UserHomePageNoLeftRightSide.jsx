import React from 'react'
import UserNavBar from '../Component/user/UserNavBar'
import { GreyBackGround } from '../utils/Style'
import { Outlet } from 'react-router-dom'
import UserLeftSideFeature from '../Component/user/Homepage/Leftside/UserLeftSideFeature'
import ProfileComponent from '../Component/user/Homepage/Leftside/ProfileComponent'

export default function UserHomePageNoLeftRightSide() {
  return (
    <div className={`${GreyBackGround} min-h-screen relative`}>
      <UserNavBar></UserNavBar>
      <div className=' pt-16'>
        <Outlet />
      </div>
    </div>
  )
}
