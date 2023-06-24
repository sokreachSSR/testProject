import React from 'react'
import UserNavBar from '../Component/user/UserNavBar'
import { GreyBackGround } from '../utils/Style'
import { Outlet } from 'react-router-dom'

export default function UserHomePageNoLeftRightSideFomCom() {
  return (
    <div className={`${GreyBackGround} min-h-screen relative`}>
      <UserNavBar></UserNavBar>
      <div className='grid grid-cols-9 gap-2 md:gap-5'>
      <div className='col-span-9  lg:col-span-9 bg-bg_custom'>
            <Outlet />
        </div>

      </div>
    </div>
  )
}
