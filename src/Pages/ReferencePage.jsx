import React from 'react'
import UserNavBar from '../Component/user/UserNavBar'
import ReferenceNavbar from '../Component/user/Homepage/Reference/ReferenceNavbar'
import UserLeftSideFeature from '../Component/user/Homepage/Leftside/UserLeftSideFeature'
import { Outlet } from 'react-router-dom'

export default function ReferencePage() {
    return (
        <div className="">
            <ReferenceNavbar />
            <Outlet />
        </div> 
    )
}
