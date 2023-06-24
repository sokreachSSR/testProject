import React from 'react'
import CompanyProfile from '../Component/user/Homepage/CenterSide/Card/CompanyProfile'
import CreatePost from '../Component/user/Homepage/CenterSide/CreatePost'
import AboutCompanyPro from '../Component/user/Homepage/CenterSide/Card/AboutCompanyPro'
import CompanySuggestUser from '../Component/user/Homepage/CenterSide/CompanyHomePage'
import { Outlet } from 'react-router-dom'
import UserNavBar from '../Component/user/UserNavBar'
import UserProfile_Post from '../Component/user/Homepage/CenterSide/UserProfile_Post'

export default function ViewOwnCompanyProfile() {

  return (
    <div className='bg-light_gray_custom'>
      <UserNavBar />
      <div className='py-20 px-4 2md:px-10 lg:px-32 xl:px-52 2xl:px-80'>
        <CompanyProfile />  
        <Outlet />
      </div>
    </div>
  )
} 