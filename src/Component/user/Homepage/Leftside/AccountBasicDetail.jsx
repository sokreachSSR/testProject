import React from 'react'
import UserProfileImage from '../../UserProfileImage'

export default function AccountBasicDetail() {
  return (
    <div className=' grid grid-cols-12'>
        <div className=' col-span-3'>
        <UserProfileImage></UserProfileImage>
        </div>
        <div className=' col-span-9'>
            <div className=' flex flex-col'>
                    <div>Name</div>
                    <div>Carreer</div>
                    <div>Location</div>
            </div>
        </div>
    </div>
  )
}
