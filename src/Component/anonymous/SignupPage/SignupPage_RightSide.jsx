import React from 'react'
import { GreenBackGround } from '../../../utils/Style'
import { StaticImage } from '../../../utils/StaticImage'

export default function SignupPage_RightSide() {
  return (
    <div className={`${GreenBackGround} flex flex-wrap flex-col justify-center items-center ` }>
         <img src={StaticImage.SignUpImage}></img>
    </div>
  )
}
