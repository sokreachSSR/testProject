import React from "react";
import sokhen from "../../../../assets/Sim Sokhen.jpg";
import phone from "../../../../assets/list.png";
import UserCard from "./Card/UserCard";
import InfiniteScroll from "../../../othersComponent/InfiniteScroll";

export default function ConectionPageSeeUser() {
  return (
    <div className="">
      <div className="pl-4 md:pl-8 lg:pl-0 pr-4 md:pr-8 lg:pr-10 xl:pr-12 2xl:pr-20">
        <div className="bg-white h-auto my-2.5 rounded-3xl mb-5 border drop-shadow p-6">
          <div className="mb-6">
            <h1 className="text-gray-900 text-lg font-medium">More suggestions for you</h1>
          </div>
          <div className="">
            <UserCard />
          </div>
        </div>
      </div>
    </div>
  );
}
