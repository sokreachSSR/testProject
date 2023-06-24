import React from 'react'
import LinkComponent from '../othersComponent/LinkComponent'

export default function LandingPage_Float_SignIn() {
  return (
    <div>
    <div className={`grid grid-cols-12 gap-2 md:gap-5  bg-[#04AA9C] p-2 md:p-2`}>
        <div className='col-span-3'></div>
        <div className='col-span-6'>
            <div className=' text-3xl font-bold text-white'>
            Don’t miss what’s happening
            </div>
            <div className='text-xl  text-white pt-1 md:pt-2'>
            People on Portify are the first to know.
            </div>
        </div>
        <div className='col-span-3 flex items-center flex-wrap'>
        <LinkComponent value='Login' target='/loginpage' style='text-white border-white border-2 bg-none hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2'></LinkComponent>
        <LinkComponent value='Sign Up' target='/SignUp' style='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2'></LinkComponent>
        </div>
    </div>
    </div>
  )
}
