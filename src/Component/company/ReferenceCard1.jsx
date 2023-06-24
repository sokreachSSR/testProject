import React from "react";
import certification from "../../assets/Certificate(2).png";
import Component from "../../assets/Component 7.svg";
import Logo from "../../assets/LogoLetter.png";
import logo2 from "../../assets/Logo2.png";
import bg from "../../assets/Rectangle 6428.png";
import Reference from "../../assets/Reference(SVG).svg";

export default function ReferenceCard1({form}) {
  return (
    <div className="w-[90%] m-auto">
      <div className="flex justify-evenly  grid grid-cols-2 p-5 w-full">
        <div className="relative w-[570px] border-green_custom border-4 flex items-center justify-center rounded-[20px] p-1 ">
          <div className="absolute -top-1 -right-2 ">
            <img src={Component} className="w-40" alt="" />
          </div>

          <div className="flex w-[570px] border-green_custom border-4 border-dotted text-center py-1 rounded-[20px]">
            <div className="flex w-full">
              {/* card */}
              <div className="w-full flex flex-col pt-8 justify-center items-center h-auto bg-white border-2 m-auto bg-greens-custom  ">
              <div dangerouslySetInnerHTML={{ __html: form.substr(1, form.length-2).replaceAll("\\n", "")
  .replaceAll("\\", "")
  .replace(/[\r\n]+/g, "") }} />
              </div>
              {/* text */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
