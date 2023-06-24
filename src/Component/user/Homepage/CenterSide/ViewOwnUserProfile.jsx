import React from 'react'
import CreatePost from './CreatePost'
import Profile from './Card/Profile'
import AboutUserPro from './Card/AboutUserPro'
import UserProfile_Post from './UserProfile_Post'
import { Outlet } from 'react-router'
import References from './Card/ReferencesRecieved'

export default function ViewOwnUserProfile() {
  return (
    <div className='my-5'>
      <Profile />
      <AboutUserPro />
      <References />
      <Outlet />
    </div>
  )
}
