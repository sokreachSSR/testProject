import React from 'react'
import { DropShadow } from '../../utils/Style'
import UserLeftSideFeature from './Homepage/Leftside/UserLeftSideFeature'

export default function UserHomePageLeftSide() {
  return (
    <div className={`${DropShadow}`}>
        <UserLeftSideFeature></UserLeftSideFeature>
    </div>
  )
}
