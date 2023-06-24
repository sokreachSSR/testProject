import React, { useState, useEffect } from "react";
import { search, search111 } from "../../Redux/service/search";
import { BASE_URL1 } from "../../utils/Utils";
import InfiniteScrollV3 from "./InfiniteScrollV3";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../Redux/slices/searchSlice";
import { useNavigate } from "react-router-dom";
import { setChatPopUp } from "../../Redux/slices/ChatPopUp";
import { it } from "date-fns/locale";

export default function SearchUserInChat({popupMessage}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState({
    query: "",
    list: [],
  });
  const [search2s, setSearch2s] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);
  
  const click = (e) => {
    popupMessage(e)
  };
  const [submitted, setSubmitted] = useState("");
  const ListUser = (item, index) => {
    return (
      <li>
        <div
          onClick={() => {
            let chatUser = {
              userId : item.item.id,
              fullName: item.item.name,
              profileImage: item.item.profile
            }
            click(chatUser);
          }}
        >
          <img
            src={BASE_URL1 + item.item.profile}
            className="w-10 h-10 object-cover border-2 rounded-full "
            alt=""
          />
          <a className="flex">{item.item.name}</a>
        </div>
      </li>
    );
  };

  const handleChange = (e) => {
    if (e.target.value === "") setSearch2s("");
    setSearch({
      query: e.target.value,
      list: [],
    });
    clearTimeout(timeoutId);
    // Set a new timeout for 2 seconds
    const newTimeoutId = setTimeout(() => {
      setSearch2s(e.target.value);
    }, 2000);
    setTimeoutId(newTimeoutId);
  };
  return (
    <div className=" z-50 w-[92%]">
      <div className="relative w-full">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-4 h-4 md:w-6 md:h-6 my-auto text-gray-400 left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={search.query}
              onChange={handleChange}
              id="simple-search"
              placeholder="Search"
              required
              className="w-full border-gray-300 py-0 md:py-2 pl-12 pr-4 text-gray-500 border rounded-[20px] outline-none bg-gray-50 focus:ring-green_custom focus:border-green_custom"
            />
          </div>
      </div>
      <div className="relative">
        <ul
          className={` h-72 absolute top-0 dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full overflow-y-auto ${
            search2s === "" ? "hidden" : ""
          }`}
        >
          {search2s === "" ? (
            ""
          ) : (
            <InfiniteScrollV3
              // className="h-16"
              linkAPI={search111}
              Param1={search2s}
              linkComponent={ListUser}
            />
          )}
        </ul>
      </div>
    </div>
  );
}
