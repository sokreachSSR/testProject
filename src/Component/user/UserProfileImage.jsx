import React from "react";
import LinkComponent from "../othersComponent/LinkComponent";
import { Link } from "react-router-dom";

export default function UserProfileImage({ linkImage, linkID }) {
  return (
    <div>
      <Link to={`/${linkID}`}>
        <img src={linkImage} className="rounded-full w-[50px] h-[50px]"></img>
      </Link>
    </div>
  );
}
