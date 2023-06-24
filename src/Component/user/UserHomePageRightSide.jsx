import React from 'react'
import { DropShadow } from '../../utils/Style'
import Suggest_Company from '../anonymous/Suggestion/Suggest_Company'
import Suggest_User from '../anonymous/Suggestion/Suggest_User'

// export default function UserHomePageRightSide() {
  
//   return (
//     <div className={`fixed top-20 ml-10 mx-14`}>
//       <Suggest_Company/>
//       <Suggest_User/>
//     </div>
//   )
// }

export default function UserHomePageRightSide() {
  
  return (
    <div className={`fixed top-20 hidden xl:block md:right-8 lg:right-10 xl:right-12 2xl:right-20`}>
      <Suggest_Company/>
      <Suggest_User/>
    </div>
  )
}