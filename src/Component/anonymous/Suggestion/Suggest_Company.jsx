import React, { useEffect, useState } from "react";
import { StaticImage } from "../../../utils/StaticImage";
import { Link } from "react-router-dom";
import { suggestionCompany, suggestionForCompany } from "../../../Redux/service/Suggestion";
import SuggestCompanyCard from "./SuggestCompanyCard";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "../../othersComponent/LoadingComponent";
import { setPopup } from "../../../Redux/slices/PopupSlice";
import { Following, FollowingUser } from "../../../Redux/service/Following";

export default function Suggest_Company() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const companyDetail = useSelector(
    (state) => state.companyDetail.company_detail
  );

  useEffect(() => {
    suggestionCompany().then((res) => {
      const fetchedData = res.data ? res.data.payload.filter((ress)=>ress.companyId !== companyDetail.companyId) : [];
      var test = fetchedData;
      FollowingUser().then((user) =>{
        test=fetchedData.filter((ress)=>{
          var check = true;
          user.data?.payload.map((ress1)=>{
            if(ress1.id===ress.companyId){
              check = false;
            }
          })
          return check;
        })
        const shuffledData = [...test].sort(() => Math.random() - 0.5);
        // Delay rendering of suggestion cards by 5 seconds
        setTimeout(() => {
          setData(shuffledData);
          setIsLoading(false);
        }, 2000);
      })
    });
  }, [companyDetail]);

  const [followCompany, setFollowCompany] = useState(false);

  const handleFollowCompany = () => {
    setFollowCompany(!followCompany);
  };
  const role = useSelector((state) => state.userDetail.userDetail.role);
  const dispatch = useDispatch();

  return (
    <div className="hidden lg:block">
      <div className="drop-shadow rounded-[20px] w-[16rem] bg-white">
        <div className="flex flex-wrap flex-col md:p-1 ">
          <h1 className="ml-3 text-base font-semibold text-gray-900 text-md">Suggested Companies</h1>
          <hr className="h-[2px] mt-2 border-0 bg-gray-900 w-full" />
          <div className="my-2 space-y-4">
            {/* Display loading state or suggestion cards */}
            {isLoading ? (
              <div className="flex justify-center">
                <LoadingComponent />
              </div>
            ) : (
              data
                .slice(0, 2)
                .map((item, index) => (
                  <SuggestCompanyCard item={item} key={index} />
                ))
            )}

            <hr className="mt-2 mr-3 ml-3" />
          </div>
          {role !== "annonymous" ? (
          <div className="mb-2 flex justify-center">
            <Link
              to="/home/connection/company"
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
