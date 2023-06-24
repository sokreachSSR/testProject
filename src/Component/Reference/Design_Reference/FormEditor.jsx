import React, { useEffect, useState } from 'react'
import { DropShadow } from '../../../utils/Style'
import TinyEditor from '../../othersComponent/TinyEditor'
import portify_file from "../../../assets/portify-file.svg";
import { getReferenceRequest, getUserReference } from '../../../Redux/service/Reference';
import { useSelector } from 'react-redux';


export default function FormEditor() {
  const userDetail = useSelector((state)=> state.userDetail.userDetail)
  const [data,setData] = useState([])
  const [form,setForm] = useState('"<div><div><div><h1 style="text-align: center;"><strong>Reference Letter</strong></h1><p style="text-align: center;">This is to certify that</p><h2 style="text-align: center;"><strong>Sim Sokhen</strong></h2><p style="text-align: center;">has successfully completed the certification</p><h3 style="text-align: center;"><strong>Java Developer</strong></h3><p style="text-align: center;">with score of A+</p><p><strong><img style="display: block; margin-left: auto; margin-right: auto;" src="https://imgtr.ee/images/2023/06/23/d7Cfq.png" alt="" width="137" height="174"></strong></p><p style="text-align: center;">05 May, 2023</p></div></div></div>"')
  const [nameRef,setNameRef] = useState("Reference")
  const [status,setStatus] = useState("add")
  const [type,setType] = useState("REFERENCE")
  const [cerId,setCerId] = useState(0)
  useEffect(()=>{
    getUserReference().then((res)=>{
      const filterData = res.data.payload.filter((res) =>res.status==false)
      setData(filterData)
    })
  },[])
  const temref =()=>{
    setForm('"<div><div><div><h1 style="text-align: center;"><strong>Reference Letter</strong></h1><p style="text-align: center;">This is to certify that</p><h2 style="text-align: center;"><strong>Sim Sokhen</strong></h2><p style="text-align: center;">has successfully completed the certification</p><h3 style="text-align: center;"><strong>Java Developer</strong></h3><p style="text-align: center;">with score of A+</p><p><strong><img style="display: block; margin-left: auto; margin-right: auto;" src="https://imgtr.ee/images/2023/06/23/d7Cfq.png" alt="" width="137" height="174"></strong></p><p style="text-align: center;">05 May, 2023</p></div></div></div>"')
    setNameRef("Reference")
    setStatus("add")
    setType("REFERENCE")
  }
  const temcer =()=>{
    setForm('"<div><div><div><h1 style="text-align: center;"><strong>Reference Letter</strong></h1><p style="text-align: center;">This is to certify that</p><h2 style="text-align: center;"><strong>Sim Sokhen</strong></h2><p style="text-align: center;">has successfully completed the certification</p><h3 style="text-align: center;"><strong>Java Developer</strong></h3><p style="text-align: center;">with score of A+</p><p><strong><img style="display: block; margin-left: auto; margin-right: auto;" src="https://imgtr.ee/images/2023/06/23/d7Cfq.png" alt="" width="137" height="174"></strong></p><p style="text-align: center;">05 May, 2023</p></div></div></div>"')
    setNameRef("Certificate")
    setStatus("add")
    setType("CERTIFICATE")
  }
  return (
    <div>
       <div className={`${DropShadow} px-10 py-5  bg-white rounded-[20px] border-2 border-green_custom font-SecondaryFont`}>
            <div  className='flex justify-center mb-5'>
              <p>
                {nameRef} - <span className=' text-green_custom '>Portify</span> 
              </p>
            </div>
            <div>
              {/* The button to open modal */}
            <label htmlFor="my-modal-7" className="btn capitalize bg-green_custom border-0 mr-4">File</label>
            <label disabled={status==='update'?true:false} onClick={temref} className={`${type==="REFERENCE"?"btn-neutral":"bg-green_custom border-0"} mr-4  btn capitalize `}>Reference</label>
            <label disabled={status==='update'?true:false} onClick={temcer} className={`${type==="CERTIFICATE"?"btn-neutral":"bg-green_custom border-0"} mr-4  btn capitalize `}>Certificate</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-7" className="modal-toggle" />
              <label htmlFor="my-modal-7" className="modal cursor-pointer  ">
                <label className="modal-box relative" htmlFor="">
                  <label htmlFor="my-modal-7" onClick={()=>{setForm('"<div></div>"');setNameRef('Reference');setStatus("add");setType('add');}} className='flex justify-start gap-4 items-center mb-5'>
                    <img src={portify_file} className='w-14' alt="" />
                    <p>
                      Create new blank
                    </p>
                  </label>
                  {data.map((res)=>(
                    <label htmlFor="my-modal-7" onClick={()=>{setForm(res.form);setNameRef(res.title);setStatus("update");setType(res.type);setCerId(res.referenceId)}} className='flex justify-between items-center'>
                    <div className='flex justify-start gap-4 items-center mb-5'>
                      <img src={portify_file} className='w-14' alt="" />
                      <div>
                        <p>
                        {res.title}
                        </p>
                        <p className=' text-gray-400 text-sm'>
                        Reference for {userDetail.fullName}
                        </p>
                      </div>
                    </div>
                    <div className=' text-gray-400 text-xs'>
                    {res.time}
                    </div>
                  </label>
                  ))}
                 
                  
                  <label
                  htmlFor="my-modal-7"
                  className="btn w-28 bg-green_custom ml-[360px] border-0 capitalize hover:bg-pink_custom rounded-3xl"
                  >
                  Back
                </label>
                </label>
              </label>
            </div>
            <TinyEditor cerId={cerId} type={type} status={status} form={form.substr(1, form.length-2).replaceAll("\\n", "")
  .replaceAll("\\", "")
  .replace(/[\r\n]+/g, "")} />
       </div>
    </div>
  )
}
