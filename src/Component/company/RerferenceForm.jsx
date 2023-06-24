import React from "react";
import certification from "../../assets/Certificate(2).png";
import Component from "../../assets/Component 7.svg";
import Logo from "../../assets/LogoLetter.png";
import logo2 from "../../assets/Logo2.png";
import bg from "../../assets/Rectangle 6428.png";
import Reference from "../../assets/Reference(SVG).svg";
import RerferenceCard2 from "./CertificateForm";

export default function RerferenceForm() {
  return (
    <div className="w-[90%] m-auto">
      <div className="m-auto ">
         <div className="flex pt-3 mb-1  p-3 m-auto  w-full mr-5">
          <img src={Reference} className="w-20 " alt="" />
          <p className="text-green_custom font-bold text-2xl flex justify-center items-center ml-4">Reference</p>
         </div>
         <hr className=" m-auto pt-2  w-full h-px my-8  border-0  bg-green_custom" />
         </div>
         
    <div className=" justify-evenly  grid grid-cols-2 p-5 w-full">
    
      <div className="relative w-[570px] border-green_custom border-4 flex items-center justify-center rounded-[20px] p-1 ">
        <div className="absolute -top-1 -right-2 ">
          <img src={Component} className="w-40" alt="" />
        </div>

        <div className="flex w-[570px] border-green_custom border-4 border-dotted text-center py-1 rounded-[20px]  ">
          <div className="flex">
            {/* card */}
            <div className="w-full flex flex-col pt-8 justify-center items-center h-auto bg-white border-2 m-auto bg-greens-custom  ">
              <div className="  w-[450px] h-[520px]  border-4 border-black  -z-9 ">
                <img
                  src={bg} 
                  alt=""
                  className="absolute  top-1/3 left-1/2 transform  w-[70%] -translate-x-1/2 -translate-y-1/2  "
                />
                <div className="  flex justify-between mt-8 px-8 border-b-2 border-gray-300">
                  <div className="flex items-center -mt-4">
                    <img src={Logo} alt="" className="w-[110px] " />
                  </div>
                  <div className="mb-2">
                    <h1 className="  text-right -mr-5 font-semibold text-xs leading-4">
                      ACME GLOBAL Company
                    </h1>
                    <p className="text-right -mr-5 font-medium text-font-10 leading-4">
                      123 Maple Street, Houston, TX, 77002 <br />
                      example@example.com <br />
                      www.example.com <br />
                      (123) 1234567
                    </p>
                  </div>
                </div>
                <div className="px-8 text-left">
                  <h1 className="font-bold text-lg mt-2">Rerference Letter</h1>
                  <h3 className="font-bold text-sm mt-2">
                    Date : 30th Janaury 2023
                  </h3>
                  <h3 className="font-bold text-xs mt-2">
                    To whom it may concern
                  </h3>
                </div>
                <div className="px-8 mt-3 flex flex-col text-xs space-y-5 text-left">
                  <p className="font-normal">
                    I confirm that I have known Mr . Rin Phearun for 5 years. He
                    was my colleague and I have seen her working with sincerity
                    all throughout closely as we both worked together on the
                    same project couple of months.
                  </p>
                  <p className="font-normal">
                    {" "}
                    At all times I have found him to realiable, hard-working,
                    conscientious in my journey with him. I think his skill set
                    matches the current job roles.{" "}
                  </p>
                  <p className="font-normal">
                    I’m happy to provide further information if required on the
                    same.
                  </p>
                </div>
                <div className="px-8 text-left">
                  <h3 className="font-bold text-sm mt-4">Yours faithfully,</h3>
                  <h3 className="font-bold text-sm mt-2 pb-8">
                    CEO Sim Sokhen
                  </h3>
                </div>
              </div>
             <div className="p-12 ">
              <div className="flex  -mt-2">
                <p className="text-green_custom  font-semibold mr-3 text-2xl ">
                  Verified on
                </p>
                <p className="text-2xl   mr-3"> 30 January 2023 </p>

                <p className="text-green_custom  font-bold mr-6 text-2xl">By</p>
                <img src={certification} className="w-14 -mt-2 ml-2" alt="" />
              </div>

              <div className="flex mt-1">
                <img src={logo2} className="w-20 " alt="" />
                <div className="mt-1 ml-3">
                  <p className="text-black text-2xl font-semibold flex justify-start ">
                    ACME GLOBAL Investment
                  </p>
                  <p className=" text-lg  -ml-24">
                  Company-
                  <span className="text-sub-text   font-semibold  ">
                    Technology
                  </span></p>
                </div>
              </div>
              <div>
                <p className="mt-2 text-left  ">
                  I confirm that I have known Mr. Rin Phearun for 5 years. He
                  was my colleague and I have seen her working with sincerity
                  all throughout closely as we both worked together on the same
                  project couple of months.{""}
                </p>
              </div>
              </div>
            </div>
            {/* text */}
          </div>
        </div>
      </div>
      <div ><RerferenceCard2></RerferenceCard2></div>
      
    </div>
    </div>
  );
}
