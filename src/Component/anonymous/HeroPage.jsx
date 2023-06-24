import React from "react";
import logo from "../../assets/Logo.png";

export default function HeroPage() {
  return (
    <div className="bg-light_gray_custom w-screen h-screen flex flex-col justify-center items-center">
        <img className="w-1/6" src={logo} alt="" />
    </div>
  );
}
