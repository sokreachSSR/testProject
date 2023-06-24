import React from "react";
import { DropShadow } from "../../utils/Style";
import UserHomePageRightSide from "./UserHomePageRightSide";
import CreatePostHomePage from "./Homepage/CenterSide/CreatePostHomePage";
import { GetPostUserbyPage } from "../../Redux/service/Post";
import InfiniteScrollV1 from "../othersComponent/InfiniteScrollV1";
import NewPostComponentV1 from "./Homepage/CenterSide/NewPostComponentV1";
import { useDispatch, useSelector } from "react-redux";
import { setJobCard } from "../../Redux/slices/JobAnnountment";
import { setPostSlide } from "../../Redux/slices/PostSlide";
import InfiniteScrollNewfeed from "../othersComponent/InfiniteScrollNewfeed";
export default function UserHomePageCenterSide() {
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.postSlide.post);
  
  return (
    <div className="grid grid-cols-9 mt-6 lg:mt-16 gap-10">
      <div className="col-span-9 xl:col-span-6 px-4 md:px-8 lg:pl-0 lg:pr-10 xl:pr-0">
        <div className="w-full">
          <CreatePostHomePage></CreatePostHomePage>
        </div>
        <div className="w-full">
        <InfiniteScrollNewfeed getData={postData}  Dispatch={dispatch} SetSlide={setPostSlide} linkAPI={GetPostUserbyPage} linkComponent={NewPostComponentV1} />
        </div>
      </div>
      <div className="xl:col-span-3">
        <UserHomePageRightSide ></UserHomePageRightSide>
      </div>
    </div>
  );
}
