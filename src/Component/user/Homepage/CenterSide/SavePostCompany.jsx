import React, { useEffect, useState } from "react";
import UserHomePageRightSide from "../../UserHomePageRightSide";
import SaveForCompanyCard from "./SaveForCompanyCard";
import { SavePostForCompanyAnnouncement } from "../../../../Redux/service/SavePost";

export default function SavePostCompany() {
    // Save Post Announcement
    const [savePostAnnouncement, setSavePostAnnouncement] = useState([]);
    useEffect(() => {
      SavePostForCompanyAnnouncement().then((e) => {
        setSavePostAnnouncement(e.data ? e.data.payload : []);
      });
    }, []);

  return (
    <div className="grid grid-cols-9 gap-10">
      <div className="col-span-9 xl:col-span-6 px-4 md:px-8 lg:pl-0 lg:pr-10 xl:pr-0 mt-3 lg:mt-4">
        <div className="lg:[90%]">
          <div className="bg-white w-full h-auto rounded-[20px] shadow mb-3 p-6">
            <p className="text-gray-900 text-lg font-medium">Saved Job Announcements</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              {savePostAnnouncement.map((item) => (
                <SaveForCompanyCard item={item}/>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="xl:col-span-3">
        <UserHomePageRightSide></UserHomePageRightSide>
      </div>
    </div>
  );
}
