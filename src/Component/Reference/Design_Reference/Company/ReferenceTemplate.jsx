import React from 'react'
import { StaticImage } from "../../../../utils/StaticImage";
import { DropShadow } from '../../../../utils/Style';


export default function ReferenceTemplate() {
  return (
    <div className={ `${DropShadow} w-[598px] border-4 bg-white border-black relative` }>
        <img src={StaticImage.ReferenceBg} alt="" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10' />
        <div className='flex justify-between mt-8 px-12 border-b-2 border-gray-300'>
            <div className='flex items-center -mt-8'>
                <img src={StaticImage.Reference} alt="" className='w-[158px]' />
            </div>
            <div className='mb-2'>
                <h1 className='text-right font-semibold text-base leading-5'>ACME GLOBAL Company</h1>
                <p className='text-right font-medium text-xs leading-4'>123 Maple Street, Houston, TX, 77002 <br />
                    example@example.com <br />
                    www.example.com <br />
                    (123) 1234567</p> 
            </div>
        </div>
        <div className='px-12'>
            <h1 className='font-bold text-2xl mt-5'>Rerference Letter</h1>
            <h3 className='font-bold text-lg mt-5'>Date : 30th Janaury 2023</h3>
            <h3 className='font-bold text-lg mt-5'>To whom it may concern</h3>
        </div>
        <div className='px-12 mt-7 flex flex-col space-y-6'>
            <p className='font-normal'>I confirm that I have known Mr . Rin Phearun for 5 years. He was my colleague and 
                I have seen her working with sincerity all throughout closely as we both 
                worked together on the same  project couple of months.</p>
            <p className='font-normal'> At all times I have found him to realiable, hard-working, conscientious 
                in my journey with him. I think his skill set matches the current job roles.  </p>
            <p className='font-normal'>I’m happy to provide further information if required on the same.</p>
        </div>
        <div className='px-12'>
            <h3 className='font-bold text-lg mt-12'>Yours faithfully,</h3>
            <h3 className='font-bold text-lg mt-5 pb-10'>CEO Sim Sokhen</h3>
        </div>
    </div>
  )
}