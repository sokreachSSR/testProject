import React from 'react'
import AboutUserPro from '../Component/user/Homepage/CenterSide/Card/AboutUserPro'
import UserCard from '../Component/user/Homepage/CenterSide/Card/UserCard'
import Profile from '../Component/user/Homepage/CenterSide/Card/Profile'
import { Outlet } from 'react-router-dom'
import OtherProfile from '../Component/user/Homepage/CenterSide/Card/OtherProfile'
import EditProfilePopup from '../Component/user/Homepage/CenterSide/EditUserProfilePopup'

export default function UserProfilePage() {
  return (
        // <div className='mt-[60px] bg-light_gray_custom col-span-12 px-4 md:px-8 lg:px-10 xl:px-12 2xl:px-20'>
        <div className='bg-light_gray_custom px-4 2md:px-10 lg:px-32 xl:px-52 2xl:px-80'>
          <Profile></Profile>
          <Outlet />
        </div>
  )
} 
