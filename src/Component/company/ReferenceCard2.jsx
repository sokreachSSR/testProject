import React from "react";
import certification from "../../assets/Certificate(2).png";
import Ellipse from "../../assets/Ellipse(Java).png";
import Component from "../../assets/Component 7.svg";
import certification1 from "../../assets/photo_2023-05-24_22-12-50.jpg";

export default function ReferenceCard2() {
  return (
    <div className="">
      <div className="relative w-[570px] border-green_custom border-4 flex items-center justify-center rounded-[20px] p-1 ">
        <div className="absolute -top-1 -right-2 ">
          <img src={Component} className="w-40" alt="" />
        </div>

        <div className="flex w-[570px] border-green_custom border-4 border-dotted text-center py-1 rounded-[20px]  ">
          <div className="flex">
            {/* card */}
            <div className="w-full p-6 grow h-auto bg-white border-2 m-auto bg-greens-custom ">
              <div className="bg-white p-2 border border-gray-400">
                <div className="w-full  p-1 border-green_custom border-4 flex items-center justify-center">
                  <div className="w-full  border-green_custom border-2 border-dotted text-center py-1">
                    <h1 className="font-bold text-lg text-green_custom">
                      Certificate of Completion
                    </h1>
                    <p className="font-medium text-base italic mt-2">
                      This is to certify that
                    </p>
                    <h2 className="font-bold text-xl text-pink_custom mt-1">
                      Saut Sokreach
                    </h2>
                    <p className="font-medium text-sm italic mt-1">
                      has successfully completed the certification
                    </p>
                    <h3 className="font-semibold text-xl mt-1">
                      Java Developer 
                    </h3>
                    <p className="font-medium text-base ">with score of A+</p>
                    <div className="flex justify-center ">
                      <img src={certification1} alt="" className="w-11" />
                    </div>
                    <p className="font-medium text-sm mt-1">05 May, 2023 </p>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <div className="flex  mt-3">
                  <p className="text-green_custom text-2xl font-semibold mr-3 ">
                    Verified on
                  </p>
                  <p className=" text-xl mt-1 mr-3"> 30 January 2023 </p>

                  <p className="text-green_custom text-2xl font-bold mr-3">
                    By
                  </p>
                  <img src={certification} className="w-14 -mt-2 ml-2" alt="" />
                </div>

                <div className="flex mt-1 ml-2 ">
                  <img src={Ellipse} className="w-14" alt="" />
                  <div className="mt-1 ml-3">
                    <p className="text-black text-2xl font-semibold flex justify-start ">
                      JAVA
                    </p>
                    <p className="text-xl">
                      Company-
                      <span className="text-sub-text  font-semibold  ">
                        Technology
                      </span>
                    </p>
                  </div>
                </div>
                <div>
                  <p className="mt-3 text-left ">
                    I confirm that I have known Mr. Rin Phearun for 5 years. He
                    was my colleague and I have seen her working with sincerity
                    all throughout closely as we both worked together on the
                    same project couple of months.{""}
                  </p>
                </div>
              </div>
            </div>
            {/* text */}
          </div>
        </div>
      </div>
    </div>
  );
}