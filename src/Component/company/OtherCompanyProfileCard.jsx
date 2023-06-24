import React, { useEffect, useState } from "react";
import pencil from "../../assets/pencil.svg";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { BASE_URL1 } from "../../utils/Utils";
import { companyById } from "../../Redux/service/CompanyService";
import PropValueContext from "../../utils/context";
import { ConnectionFollowCompany } from "../../Redux/service/ConnectionPage";
import { Following } from "../../Redux/service/Following";

export default function OtherCompanyProfileCard() {
  const [followCon, setFollowCon] = useState(false);
  const handleFollowCon = () => {
    ConnectionFollowCompany(company.companyId).then(() => {
      console.log(company.companyId);
      setFollowCon(!followCon);
    });
  };

  
  const [follow, setFollow] = useState(false);
  useEffect(() => {
    Following().then((res) => {
      console.log(res.data ? res.data.payload : [], "response");
      if (res.data) {
        res.data.payload.map((result) => {
          if (result.id == id) {
            setFollow(true);
          }
        });
      }
    });
  }, []);
  
  const companyDetail = useSelector(
    (state) => state.companyDetail.company_detail
  );
  const { id } = useParams();
  const [company, setCompany] = useState([]);
  console.log(company )
  useEffect(() => {
    companyById(id).then((response) => {
      setCompany(response.data ? response.data.payload : []);
    });
  }, [id]);
  const activeTab = useLocation();
  return (
    <div className=" px-4 2md:px-10 lg:px-32 xl:px-52 2xl:px-80">
      <div>
      <div className=" h-fit bg-white border font-MainFont mt-5 rounded-[20px] p-2">
        <div className="border rounded-t-[20px]">
            <img
              src={`${BASE_URL1}/api/v1/images/PROFILE?fileName=${company.coverImage}`}
              className="w-full rounded-t-[20px] object-cover m-auto h-[300px]"
              alt=""
            />
          </div>
          <div className="flex justify-between h-[125px]">
            <div>
              <div className="flex relative">
                <div className="absolute left-6 -top-12">
                  <img
                    src={`${BASE_URL1}/api/v1/images/PROFILE?fileName=${company.companyProfile}`}
                    className="w-32 h-32 rounded-full border-4 object-cover bg-white border-white"
                    alt=""
                  />
                </div>
              </div>
              <div className="ml-48 py-2">
                <div>
                  <h1 className="font-MainFont text-[28px] font-bold">
                    {company.companyName}
                  </h1>
                </div>
                <div className="flex font-normal font-SecondaryFont text-gray-500 gap-12 py-1">
                  <p>{company.following} Followers</p>
                </div>
              </div>
            </div>
            <div className="py-3">
              <button className={follow ? `text-sm w-28 py-1.5 border-2 border-green_custom bg-green_custom text-white rounded-[20px] flex text-center items-center justify-center` 
                                : `text-sm w-28 py-1.5 border-2 border-gray-400 rounded-[20px] flex text-center items-center justify-center`}
                onClick={() => handleFollowCon(setFollow(!follow))}
              >
                <span className="px-2"> {follow ? "Following" : "Follow"} </span>
              </button>
            </div>
          </div>

          <div className="border-t-gray-200 border-t flex gap-12 py-3 px-10 text-gray-500">
            <div>
              <Link
                to=""
                className=" font-SecondaryFont font-medium text-md sm:text-md md:text-md lg:text-xl text-gray-500"
              >
                About
                <div
                  className={` ${
                    activeTab.pathname === `/home/otherprofilecompany/${id}`
                      ? "w-full h-[5px]  bg-green_custom"
                      : ""
                  }`}
                ></div>
              </Link>
            </div>
            <div>
              <Link
                to="othercompanyposts"
                className="font-SecondaryFont font-medium text-md sm:text-md md:text-md lg:text-xl text-gray-500"
              >
                Posts
                <div
                  className={` ${
                    activeTab.pathname === `/home/otherprofilecompany/${id}/othercompanyposts`
                      ? "w-full h-[5px] rounded-[20px] bg-green_custom"
                      : ""
                  }`}
                ></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <PropValueContext.Provider value={company}>
        <Outlet />
      </PropValueContext.Provider>
    </div>
  );
}
