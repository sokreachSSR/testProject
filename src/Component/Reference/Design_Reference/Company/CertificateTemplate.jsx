import React from "react";
import { StaticImage } from "../../../../utils/StaticImage";
import { DropShadow } from "../../../../utils/Style";
import badge_flower from "../../../../assets/badge-cert.svg";

export default function CertificateTemplate() {
  return (
    <div
      className={`${DropShadow} w-[552px] h-auto bg-white flex items-center justify-center border-2 `}
    >
      <div className="w-[552px] p-2 border-green_custom border-4 flex items-center justify-center ">
        <div className="w-[552px] border-green_custom border-2 border-dotted text-center py-16">
          <h1 className="font-bold text-3xl text-green_custom">
            Certificate of Completion
          </h1>
          <p className="font-medium text-base italic mt-3">
            This is to certify that
          </p>
          <h2 className="font-bold text-2xl text-pink_custom mt-2">
            Saut Sokreach
          </h2>
          <p className="font-medium text-base italic mt-2">
            has successfully completed the certification
          </p>
          <h3 className="font-semibold text-2xl mt-2">Java Developer</h3>
          <p className="font-medium text-base mt-2">with score of A+</p>
          <div className="flex justify-center mt-2">
            <img src={badge_flower} alt="" className="w-16" />
          </div>
          <p className="font-medium text-base mt-2">05 May, 2023 </p>
        </div>
      </div>
    </div>
  );
}
