import React, { useContext } from "react";
import UserCardForCompany from "./Card/UserCardForCompany";
import PropValueContext from "../../../../utils/context";

export default function SuggestionPeopleCompany() {
  const filterCard = useContext(PropValueContext);
  return (
    <div>
      <div className="bg-white font-MainFont m-auto p-6">
        <div className="">
          <UserCardForCompany />
        </div>
      </div>
    </div>
  );
}
