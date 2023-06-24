import React from "react";
import { CountNotification, updateStatus } from "../../../../Redux/service/Notification";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCreateKey } from "../../../../Redux/slices/KeySlice";
import { setCreateCount } from "../../../../Redux/slices/CountSlice";
import { BASE_URL1 } from "../../../../utils/Utils";

export default function DetailNotification({ item, index }) {
  // Convert the date string to a JavaScript Date object
  const parsedDate = new Date(item.date);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const myKey = useSelector((state) => state.Key.value);
  // Format the date using the toLocaleString method
  const formattedDate = parsedDate.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const clickNotification = () => {
    dispatch(setCreateKey(myKey + 1));
    if (item.status === "unread") {
      updateStatus(item.notification_id).then((r) => {
        item.status = "";
        CountNotification().then((r) => {
          if (r.data) dispatch(setCreateCount(r.data.payload));
          console.log(r.data.payload)
        });
      });
    }
  };

  return (
    <li>
      <Link
        onClick={clickNotification}
        to={`/home/notification/${item.posttype_id}`}
        className="block hover:bg-gray-100"
        // onClick={() => clickNotification123()}
      >
        <div className="relative flex justify-between border-b-2 ml-7 mr-7 pb-2 pt-2">
          <div className="w-[82%]">
            {item.status === "unread" ? (
              <p className="absolute top-5 w-2 h-2 bg-blue-600 rounded-full"></p>
            ) : (
              ""
            )}
            <p className="ml-5 text-lg text-black font-semibold">
              {item.notification_type === "like"
                ? "Like on your post"
                : "Comment on your post"}
            </p>
            <p className="ml-5 text-sm font-medium text-gray-500 capitalize">
              {item.fullname} . {formattedDate}
            </p>
          </div>
          <div className="">
            <img
              src={
                BASE_URL1+"/api/v1/images/PROFILE?fileName=" +
                item.profile_img
              }
              alt=""
              className="h-12 w-12 object-cover border-2 rounded-full"
            />
          </div>
        </div>
      </Link>
    </li>
  );
}
