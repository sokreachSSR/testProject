import React, { useContext, useEffect, useState } from "react";
import { AllConnectionUser, ConnectionUser } from "../../../../../Redux/service/ConnectionUser";
import { useDispatch, useSelector } from "react-redux";
import { setUserFollow } from "../../../../../Redux/slices/UserFollowing";
import InfiniteScrollV1 from "../../../../othersComponent/InfiniteScrollV1";
import CardForOneUserConCompany from "./CardForOneUserConCompany";
import {
  interestUser,
  interestUserForCompany,
} from "../../../../../Redux/service/Interest";
import PropValueContext from "../../../../../utils/context";

export default function UserCardForCompany() {
  const filterCard = useContext(PropValueContext);
  console.log(filterCard, "filterCard");
  const jobTypeMapping = {
    1: "Accounting",
    2: "Administration",
    3: "Advertising",
    4: "Architecture",
    5: "Audit",
    6: "Banking",
    7: "Cashier",
    8: "Design",
    9: "Education",
    10: "Engineering",
    11: "Finance",
    12: "Health",
    13: "Hospitality",
    14: "Human_Resource",
    15: "Information_Technology",
    16: "Insurance",
    17: "Legal_Service",
    18: "Management",
    19: "Media",
    20: "Project_Management",
    21: "Receptionist",
    22: "Sales",
    23: "Taxation",
    24: "Technician",
    25: "Training",
    26: "Other",
  };
  const dispatch = useDispatch();
  const data = useSelector((state) => state.userFollow.value);
  const [conUser, setConUser] = useState([]);
  const [temData, setTemData] = useState([]);
  useEffect(() => {
    AllConnectionUser().then((response) => {
      interestUserForCompany().then((res) => {
        var abc = [];
        response.data?.payload.map((item) => {
          var check = true;
          res.data?.payload.map((item1) => {
            if (item1.userId == item.userId) {
              check = false;
            }
          });
          if (check) {
            abc.push(item);
          }
        });
        console.log(abc, "abc");
        setTemData(abc);
        setConUser(abc);
      });
    });
  }, []);

  const deleteInterest = (id) => {
    // interestUser(id).then((res) => {
    // console.log(res)
    setConUser(conUser.filter((item) => item.userId !== id));
    // })
  };
  useEffect(() => {
    if (filterCard == "all") setConUser(temData);
    else
      setConUser(
        temData.filter((item) => item.jobType == jobTypeMapping[filterCard])
      );
  }, [filterCard]);
  return (
    <div className="font-SecondaryFont w-full grid grid-cols-1 2md:grid-cols-2 gap-6">
      {/* <InfiniteScrollV1 Dispatch={dispatch} SetSlide={setUserFollow} getData={data} linkAPI={ConnectionUser}  linkComponent={CardForOneUserConCompany} Style={"grid grid-cols-1 2md:grid-cols-2 gap-6"} /> */}
      {conUser.map((item) => (
        <CardForOneUserConCompany
          deleteInterest={deleteInterest}
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}
