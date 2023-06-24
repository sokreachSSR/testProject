import React from 'react'
import SubNavComponentSavePost from '../CenterSide/SubNavComponentSavePost'
import { Outlet } from 'react-router-dom'

export default function SavedPost() {
  return (
    <div>
      <SubNavComponentSavePost />
      <Outlet />
    </div>
  )
}
