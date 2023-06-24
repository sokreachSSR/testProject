import React, { useEffect, useState } from "react";
import { GetPostUser } from "../../../../Redux/service/Post";
import NewPostCardComponent from "./NewPostCardComponent";

export default function NewPostComponent() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    GetPostUser().then((res) => {
      setData(res.data ? res.data.payload : []);
    });
  }, []);

  return data.map((item, index) => (
    <NewPostCardComponent item={item} index={index} />
  ));
}
