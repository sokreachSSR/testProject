import React, { useState } from "react";
import { StaticImage } from "../../../../utils/StaticImage";

export default function SavePostCard() {
  const [save, setSave] = useState(false);
  const [like, setLike] = useState(false);


  const handleSave = () => {
    setSave(!save);
  };

  const handleLike = () => {
    setLike(!like);
  };


  return (
    <div className="lg:[90%]">
      <div className="bg-white w-full h-fit rounded-[20px] shadow-sm mb-3">
        <div className="flex justify-between items-center">
          <a href="" className="flex ml-[30px] mt-[30px]">
            <img
              src={StaticImage.Profilelinger}
              alt=""
              className="w-[50px] h-[50px] rounded-full"
            />
            <div className="ml-3">
              <h3 className="font-normal text-xl">Kim Ji-A</h3>
              <div className="flex items-center">
                <span className="text-gray-400 pr-2">2h . </span>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.99985 4C9.27599 4 9.49985 4.22386 9.49985 4.5C9.49985 5.24675 9.17181 5.91751 8.65363 6.37487C8.44659 6.5576 8.13062 6.5379 7.94789 6.33087C7.76516 6.12383 7.78486 5.80786 7.99189 5.62513C8.30413 5.34954 8.49985 4.94794 8.49985 4.5C8.49985 4.22386 8.72371 4 8.99985 4Z"
                    fill="#5D6D79"
                    fill-opacity="0.7"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C10.0899 13 13 10.0899 13 6.5C13 2.91015 10.0899 0 6.5 0ZM1.54993 8.90013C2.4413 10.7351 4.32294 12 6.5 12C6.9415 12 7.37086 11.948 7.78227 11.8497C7.59095 11.3402 7.10291 11 6.55522 11C6.23483 11 5.9614 10.7684 5.90872 10.4523L5.86008 10.1605C5.79737 9.78423 6.02707 9.42084 6.39384 9.31605L7.053 9.12772C7.33783 9.04634 7.57543 8.84914 7.70791 8.58419L7.73224 8.53552C7.89634 8.20732 8.23179 8 8.59873 8C8.85566 8 9.10207 8.10207 9.28374 8.28374L9.5 8.5H9.91886C10.4779 8.5 10.9827 8.80976 11.2405 9.29049C11.7231 8.47243 12 7.51855 12 6.5C12 3.63454 9.8087 1.28088 7.01043 1.02337C7.03997 1.19868 7.1312 1.35934 7.26986 1.47488L7.98227 2.06856C8.27672 2.31393 8.33878 2.74183 8.12617 3.06075L7.78548 3.57178C7.60046 3.84932 7.3282 4.05727 7.01175 4.16275L6.91693 4.19436C6.45514 4.34829 6.26612 4.89918 6.53613 5.3042C6.78244 5.67366 6.6492 6.1754 6.25203 6.37398L4.5 7.25L4.78226 7.95566C4.90533 8.26334 4.77202 8.61399 4.47562 8.76219C4.2002 8.8999 3.8657 8.82094 3.68094 8.57459L3.22812 7.97082C2.89359 7.52479 2.20663 7.58673 1.95729 8.08541L1.54993 8.90013Z"
                    fill="#5D6D79"
                    fill-opacity="0.7"
                  />
                </svg>
              </div>
            </div>
          </a>
          <button
            type="button"
            className="mr-[20px] mt-[10px]"
            onClick={handleSave}
          >
            <svg
              width="35"
              height="43"
              viewBox="0 0 35 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.3366 10.3778C14.0307 10.1282 15.7537 10 17.5 10C19.2463 10 20.9693 10.1282 22.6634 10.3778C24.0247 10.5783 25 12.0622 25 13.7581V31.6346C25 31.9345 24.8776 32.2131 24.6766 32.3708C24.4756 32.5284 24.2246 32.5428 24.0133 32.4086L17.5 28.2752L10.9867 32.4086C10.7754 32.5428 10.5244 32.5284 10.3234 32.3708C10.1224 32.2131 10 31.9345 10 31.6346V13.7581C10 12.0622 10.9753 10.5783 12.3366 10.3778Z"
                fill={save ? "none" : "#04AA9C"}
                stroke={save ? "#5D6D79" : "#04AA9C"}
                stroke-width="2"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <p className="line-clamp-3 px-[30px] py-3 leading-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At qui nemo
          vel itaque voluptatibus blanditiis dignissimos? Amet similique
          exercitationem iure veritatis non repellat accusantium placeat atque
          dolorem mollitia. Eveniet corrupti facilis ab repudiandae inventore
          blanditiis, deleniti magnam modi culpa nisi nulla voluptatibus vero
          dolores porro, officiis dicta asperiores aliquam sequi? Nam nobis quos
          quibusdam, doloremque provident totam, nemo molestias vero assumenda
          nihil! Explicabo commodi pariatur dignissimos nesciunt. Accusantium
          debitis molestiae distinctio earum ipsa voluptatum minus nemo
          possimus! Harum sed amet eos tenetur quas aliquam nulla.
        </p>
        <div className="flex justify-center px-[30px]">
          <img
            src={StaticImage.Profilelinger}
            alt=""
            className="w-full h-fit"
          />
        </div>
        <div className="flex justify-between mx-[30px] mt-3 border-b-2 pb-1">
          <div>
            <span>200 </span>
            <span>likes</span>
          </div>
          <div>
            <span>200 </span>
            <span>comment</span>
          </div>
        </div>
        <div className="flex justify-around mx-[30px] border-b-2 pb-1">
          <div className="flex items-center cursor-pointer" onClick={handleLike}>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.25 20.3125C36.25 17.2059 33.6267 14.6875 30.3906 14.6875C27.9711 14.6875 25.8941 16.0953 25 18.1043C24.1059 16.0953 22.0289 14.6875 19.6094 14.6875C16.3733 14.6875 13.75 17.2059 13.75 20.3125C13.75 29.3382 25 35.3125 25 35.3125C25 35.3125 36.25 29.3382 36.25 20.3125Z"
                stroke={like ? "none" : "#5D6D79"} 
                fill={like ? "#DE5753" : "none"}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className={like ? "text-[#DE5753]" : "text-black"}>Like</span>
          </div>
          <div className="flex items-center">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 35.3125C31.2132 35.3125 36.25 30.6954 36.25 25C36.25 19.3046 31.2132 14.6875 25 14.6875C18.7868 14.6875 13.75 19.3046 13.75 25C13.75 27.7145 14.8942 30.1841 16.7645 32.0256C17.2072 32.4614 17.5076 33.0533 17.38 33.6613C17.1852 34.5899 16.7614 35.4342 16.1697 36.1325C16.3647 36.1674 16.5625 36.1947 16.7621 36.2142C17.0047 36.2379 17.251 36.25 17.5 36.25C19.1025 36.25 20.5877 35.7473 21.8065 34.8911C22.8188 35.1653 23.8907 35.3125 25 35.3125Z"
                stroke="#5D6D79"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>comment</span>
          </div>
        </div>
        <div className="flex mx-[30px] justify-between mt-4">
          <a href="">
            <img
              src={StaticImage.Profilelinger}
              alt=""
              className="w-[40px] h-[40px] rounded-full"
            />
          </a>
          <div className="w-[92%] pb-5">
            <input
              type="text"
              class="bg-gray-100 border w-full h-[40px] border-input_custom text-gray-900 text-base rounded-[20px] focus:ring-blue-500 focus:border-blue-500 block pl-2.5 placeholder-gray-800"
              placeholder="write a comment"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
