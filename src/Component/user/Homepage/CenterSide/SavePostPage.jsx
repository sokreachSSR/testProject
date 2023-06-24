import React from "react";
import { StaticImage } from "../../../../utils/StaticImage";
import SubNavComponent from "./SubNavComponent";
import SavePostCard from "./SavePostCard";
import InfiniteScrollV2 from "../../../othersComponent/InfiniteScrollV2";
import UserHomePageRightSide from "../../UserHomePageRightSide";
import SavePostCardV1 from "./SavePostCardV1";
import { SavePostV1 } from "../../../../Redux/service/SavePost";

export default function SavePostPage() {
  return (
    <div className="grid grid-cols-9 gap-10">
      <div className="col-span-9 xl:col-span-6 px-4 md:px-8 lg:pl-0 lg:pr-10 xl:pr-0 mt-3 lg:mt-4">
        {/* <SubNavComponent /> */}
        <div className="bg-white w-full h-auto rounded-[20px] shadow mb-3 p-6">
          <p className="text-gray-900 text-lg font-medium">
            Saved Posts 
          </p>
        </div>
        <div className="mt-4">
          <InfiniteScrollV2
            linkAPI={SavePostV1}
            linkComponent={SavePostCardV1}
          />
        </div>
      </div>
      <div className="xl:col-span-3">
        <UserHomePageRightSide></UserHomePageRightSide>
      </div>
    </div>
  );
}
