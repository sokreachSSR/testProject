import React, { useEffect, useState } from "react";
import { ConnectionUser } from "../../../../../Redux/service/ConnectionUser";
import CardForOneUserCon from "./CardForOneUserCon";
import { useDispatch, useSelector } from "react-redux";
import { setUserFollow } from "../../../../../Redux/slices/UserFollowing";
import InfiniteScrollV1 from "../../../../othersComponent/InfiniteScrollV1";

export default function UserCard() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.userFollow.value);
  const [conUser, setConUser] = useState([]);
  useEffect(() => {
    ConnectionUser().then((response) => {
      console.log("user card: ", response);
      setConUser(response.data ? response.data.payload : []);
    });
  }, []);

  return (
    <div className="font-SecondaryFont w-full grid grid-cols-1 2md:grid-cols-2 gap-6">
      {/* {conUser.map((items, index) => (
      <CardForOneUserCon item={items}/>
      ))} */}
      {/* <InfiniteScrollV1 Dispatch={dispatch} SetSlide={setUserFollow} getData={data} linkAPI={ConnectionUser}  linkComponent={CardForOneUserCon} Style={"grid grid-cols-1 2md:grid-cols-2 gap-6"} /> */}
      {conUser.map((item) => (
        <CardForOneUserCon key={item.id} item={item} />
      ))}
    </div>
  );
}
