  import React, { useState } from 'react'

export default function InputBtn({setPostContent}) {
    const handleChange = (e) => {
      console.log(e.target.value)
      setPostContent(e.target.value)
    }
  return (
    <input type="text"  onChange={handleChange}  className=" text-gray-900 text-sm border-0 focus:ring-0 w-full" placeholder="What’s on your mind, Phearun?" required />
  )
}
