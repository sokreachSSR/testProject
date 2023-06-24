import React from 'react'
import LadingPage_Navbar from '../../../anonymous/LadingPage_Navbar'
import UserLeftSideFeature from './UserLeftSideFeature'
import { Link, Outlet } from 'react-router-dom'
import SubNavComponent from '../CenterSide/SubNavComponent'


export default function Connections() {
  return (
    <div className='' >
      <SubNavComponent></SubNavComponent>
      <Outlet></Outlet>
    </div>
  )
}
