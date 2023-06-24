import React from 'react'
import UserNavBar from '../Component/user/UserNavBar'
import UserHomePageLeftSide from '../Component/user/UserHomePageLeftSide'
import UserHomePageCenterSide from '../Component/user/UserHomePageCenterSide'
import UserHomePageRightSide from '../Component/user/UserHomePageRightSide'
import { GreyBackGround } from '../utils/Style'
import { Outlet } from 'react-router-dom'
import UserLeftSideFeature from '../Component/user/Homepage/Leftside/UserLeftSideFeature'
import ProfileComponent from '../Component/user/Homepage/Leftside/ProfileComponent'

// export default function UserHomePage() {
//   return (
//     <div className={`${GreyBackGround} min-h-screen relative w-full`}>
//       <UserNavBar></UserNavBar>
//       <div className='grid grid-cols-12'>
//         <div className='md:col-span-3'>
//             <UserLeftSideFeature></UserLeftSideFeature>
//         </div>
//         <div className='col-span-9 md:col-span-9 xs:col-span-11 md:w-full'>
//             <Outlet />
//         </div>
//       </div>
//     </div>
//   )
// }

export default function UserHomePage() {
  return (
    <div className={`${GreyBackGround} min-h-screen w-full`}>
      <UserNavBar></UserNavBar>
      <div className='grid grid-cols-12 gap-10 w-full'>
        <div className='md:col-span-3'>
          <UserLeftSideFeature></UserLeftSideFeature>
        </div>
        <div className='col-span-12 lg:col-span-9 bg-bg_custom'>
            <Outlet />
        </div>

      </div>
    </div>
  )
}