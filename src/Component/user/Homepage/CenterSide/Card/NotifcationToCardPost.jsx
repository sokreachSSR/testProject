import React, { useEffect, useState } from "react";
import InfiniteScrollV1 from "../../../../othersComponent/InfiniteScrollV1";
import { useDispatch, useSelector } from "react-redux";
import { setPostSlide } from "../../../../../Redux/slices/PostSlide";
import {
  GetPostUserbyPage,
  getPostById,
  getPostId,
} from "../../../../../Redux/service/Post";
import NewPostComponentV1 from "../NewPostComponentV1";
import { useParams } from "react-router-dom";
import InfiniteScrollV6 from "../../../../othersComponent/InfiniteScrollV6";

export default function NotifcationToCardPost() {
  const [getData, setGetData] = useState({});
  const { id } = useParams();
  const myKey = useSelector((state) => state.Key.value);

  useEffect(() => {
    setGetData(id);
  }, [id]);

  return (
    <div className="mt-20 px-96" key={myKey}>
      <InfiniteScrollV6
        linkAPI={getPostId}
        id={getData}
        linkComponent={NewPostComponentV1}
      />
    </div>
  );
}
