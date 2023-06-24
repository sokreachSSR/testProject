import React from "react";
import { StaticImage } from "../../../../utils/StaticImage";
import { DropShadow } from "../../../../utils/Style";

export default function ReferenceTemplate1({item}) {
  return (
    <div className={ `${DropShadow} w-[598px] bg-white   border-2 relative`}>
        <div className="relative border-green_custom border-4 flex items-center justify-center rounded-[20px] p-1">
         
          <div
            className="flex border-green_custom border-4 border-dotted text-center py-1 rounded-[20px]  "
          >
            <div className="flex">
              {/* card */}
              <div className="w-full p-6 grow h-auto bg-white border-2 m-auto bg-greens-custom ">
                <div className="bg-white p-2 border border-gray-400">
                  <div className=" p-1 border-green_custom border-4 flex items-center justify-center">
                    <div className=" border-green_custom border-2 border-dotted text-center py-1">
                      {/* <h1 className="font-bold text-lg text-green_custom">
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
                    <p className="font-medium text-sm mt-1">05 May, 2023 </p> */}
                      {item.form && (
                        <div
                          className="form-html text" // Replace with appropriate CSS classes
                          style={{ width: "100%", padding: "20px" }}
                          dangerouslySetInnerHTML={{
                            // __html: item.form
                            // .replaceAll("\\n", "")
                            //   .replace(/"/g, "")
                            //   .replace(/[\r\n\\"]+/g, "") 
                             __html: item.form.substring(1,item.form.length - 1)
                            .replaceAll("\\n", "")
                            .replace(/\\"/g, '"')
                            .replace(/[\r\n]+/g, "")

                          }}
                        ></div>
                      )}
                    </div>
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
