import React, { useEffect, useState } from "react";
import { StaticImage } from "../../../utils/StaticImage";
import { Link } from "react-router-dom";
import SuggestUserCard from "./SuggestUserCard";
import {
  suggestionUser,
  suggestionUserLanding,
} from "../../../Redux/service/Suggestion";
import SuggestUserLandingCard from "./SuggestUserLandingCard";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "../../othersComponent/LoadingComponent";
import { setPopup } from "../../../Redux/slices/PopupSlice";

export default function Suggest_User() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const userDetail = useSelector((state) => state.userDetail.userDetail);

  useEffect(() => {
    const fetchData = async () => {
      const userSuggestions = await suggestionUser();
      const landingSuggestions = await suggestionUserLanding();

      const combinedSuggestions = [
        ...(userSuggestions.data ? userSuggestions.data.payload : []),
        ...(landingSuggestions.data ? landingSuggestions.data.payload : []),
      ];

      setData(combinedSuggestions);
      setIsLoading(false);
    };

    const timer = setTimeout(() => {
      fetchData();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const role = useSelector((state) => state.userDetail.userDetail.role);

  // Shuffle the data array to display the cards in a random order
  const shuffledData = data.slice().sort(() => Math.random() - 0.5);
  const dispatch = useDispatch();

  return (
    <div className="hidden lg:block">
      <div className="drop-shadow rounded-[20px] w-[16rem] mt-4 bg-white">
        <div className="flex flex-wrap flex-col md:p-1 ">
          <h1 className="ml-3 text-base font-semibold text-gray-900">
            Suggested Users
          </h1>
          <hr className="h-[2px] mt-2 border-0 bg-gray-900 w-full" />
          <div className="my-2 space-y-4">
            {/* card */}
            {isLoading ? (
              <div className="flex justify-center">
                <LoadingComponent />
              </div>
            ) : (
              shuffledData
                .slice(0, 2)
                .map((item, index) =>
                  role === "annonymous" ? (
                    <SuggestUserCard item={item} key={index} />
                  ) : (
                    <SuggestUserLandingCard item={item} key={index} />
                  )
                )
            )}
            <hr className="mt-2 mr-3 ml-3" />
          </div>
          {role !== "annonymous" ? (
            <div className="mb-2 flex justify-center">
              <Link
                to="/home/connection"
                className="font-semibold px-2 py-1 rounded-[20px] cursor-pointer text-gray-900"
              >
                View all suggestions
              </Link>
            </div>
          ) : (
            <div className="mb-2 flex justify-center">
              <label
                type="button"
                htmlFor="my-modal"
                onClick={() => dispatch(setPopup("login"))}
                className="font-semibold px-2 py-1 rounded-[20px] cursor-pointer text-gray-900"
              >
                View all suggestions
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
