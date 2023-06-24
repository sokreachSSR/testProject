import "./App.css";
import LoginComponent from "./Component/LoginComponent";
import { Route, Routes } from "react-router-dom";
import Protected from "./Pages/Protected";
import LandingPage from "./Component/anonymous/LandingPage";
import SignupPage from "./Component/anonymous/SignupPage/SignupPage";
import LoginPage from "./Pages/LoginPage";
import UserHomePage from "./Pages/UserHomePage";
import SavePostPage from "./Component/user/Homepage/CenterSide/SavePostPage";
import UserHomePageCenterSide from "./Component/user/UserHomePageCenterSide";
import CustomPoPoup from "./Component/othersComponent/CustomPoPoup";
import { useEffect } from "react";
import { RegisterNotification, sendNotification } from "./Redux/service/Notification";
import Connections from "./Component/user/Homepage/Leftside/Connections";
import Job_Rec from "./Component/user/Homepage/CenterSide/Job_Rec";
import ConectionPageSeeUser from "./Component/user/Homepage/CenterSide/ConectionPageSeeUser";
import Con_Sugest_Component from "./Component/user/Homepage/CenterSide/Con_Sugest_Component";
import MostRecent from "./Component/user/Homepage/Leftside/MostRecent";
import ChangePassword from "./Component/user/Homepage/CenterSide/ChangePassword";
import Setting from "./Component/user/Homepage/CenterSide/Setting";
import UserProfilePage from "./Pages/UserProfilePage";
import UserHomePageNoLeftRightSide from "./Pages/UserHomePageNoLeftRightSide";
import ReferencePage from "./Pages/ReferencePage";
import SearchCompany from "./Component/user/Homepage/Reference/SearchCompany";
import RequestedList from "./Component/user/Homepage/Reference/RequestedList";
import ViewReference from "./Component/user/Homepage/Reference/ViewReference";
import DesignReferencePage from "./Pages/DesignReferencePage";
import AllReference from "./Component/Reference/Design_Reference/Company/AllReference";
import SortReference from "./Component/Reference/Design_Reference/Company/SortReference";
import SortCertificate from "./Component/Reference/Design_Reference/Company/SortCertificate";
import ViewOwnCompanyProfile from "./Pages/ViewOwnCompanyProfile";
import AboutCompanyPro from "./Component/user/Homepage/CenterSide/Card/AboutCompanyPro";
import PostsCompany from "./Component/user/Homepage/CenterSide/Card/PostsCompany";
import AboutUserPro from "./Component/user/Homepage/CenterSide/Card/AboutUserPro";
import PostsUserPro from "./Component/user/Homepage/CenterSide/Card/PostsUserPro";
import CompanyHomePage from "./Component/user/Homepage/CenterSide/CompanyHomePage";
import SuggestionPeopleCompany from "./Component/user/Homepage/CenterSide/SuggestionPeopleCompany";
import InterestedPeopleCompany from "./Component/user/Homepage/CenterSide/InterestedPeopleCompany";
import ReferenceRequestFromUserPage from "./Pages/ReferenceRequestFromUserPage";
import AllReferenceReq from "./Component/Reference/Request_from_user/AllReferenceReq";
import SortCertificateReq from "./Component/Reference/Request_from_user/SortCertificateReq";
import SortReferenceReq from "./Component/Reference/Request_from_user/SortReferenceReq";
import FormEditor from "./Component/Reference/Design_Reference/FormEditor";
import OtherProfile from "./Component/user/Homepage/CenterSide/Card/OtherProfile";
import { useDispatch, useSelector } from "react-redux";
import CustomErrorPage from "./Component/othersComponent/CustomErrorPage";
import ReferencesRecieved from "./Component/user/Homepage/CenterSide/Card/ReferencesRecieved";
import ReferenceCreated from "./Component/user/Homepage/CenterSide/Card/ReferenceCreated";
import { UserProfile } from "./Redux/service/UserProfile";
import { setUserDetail } from "./Redux/slices/userDetailSlide";
import ProtectedUser from "./Pages/ProtectedUser";
import { setCompanyDetail } from "./Redux/slices/companyDetailSlice";
import { CompanyDetailProfile, CompanyProfile } from "../src/Redux/service/CompanyProfile";
import ReferenceCard2 from "./Component/company/ReferenceCard2";
import ReferenceCard1 from "./Component/company/ReferenceCard1";
import ReferenceCardCreated2 from "./Component/Reference/RefereneCardCreated2";
import AboutOtherPro from "./Component/user/Homepage/CenterSide/Card/AboutOtherPro";
import { useState } from "react";
import PopupRequestReference from "./Component/popupComponents/PopupRequestReference";
import EditProfileCompany from "./Component/company/EditProfileCompany";
import JobCardV1 from "./Component/user/Homepage/CenterSide/Card/JobCardV1";
import JobCardV2 from "./Component/user/Homepage/CenterSide/Card/JobCardV2";
import CompanyPostJob from "./Component/user/Homepage/CenterSide/Card/CompanyPostJob";
import OtherProfileCompany from "./Component/company/OtherProfileCompany";
import OtherCompanyAbout from "./Component/company/OtherCompanyAbout";
import OtherCompanyPosts from "./Component/company/OtherCompanyPosts";
import SwitchAccountPopup from "./Component/popupComponents/SwitchAccountPopup";
import ProtectedCompany from "./Pages/ProtectedCompany";
import ChatIndiviual from "./Component/othersComponent/ChatIndiviual";
import HeroPage from "./Component/anonymous/HeroPage";
import CompanyInterestUser from "./Component/user/Homepage/CenterSide/Card/CompanyInterestUser";
import PostOtherUserPro from "./Component/user/Homepage/CenterSide/Card/PostOtherUserPro";
import CreateCompanyPopUp from "./Component/company/CreateCompanyPopUp";
import PopUpCreateCompany from "./Component/popupComponents/PopUpCreateCompany";
import ProtectedUserCompany from "./Pages/ProtectedUserCompany";
import UserHomePageNoLeftRightSideFomCom from "./Pages/UserHomePageNoLeftRightSideFomCom";
import TestTest from "./Component/othersComponent/TestTest";
import RetryComponent from "./Component/othersComponent/RetryComponent";
import DesignReferencePageCompany from "./Pages/DesignReferencePageCompany";
import AllReferenceCompnay from "./Component/Reference/Design_Reference/Company/AllReferenceCompnay";
import SortReferenceCompany from "./Component/Reference/Design_Reference/Company/SortReferenceCompany";
import SortCertificateCompany from "./Component/Reference/Design_Reference/Company/SortCertificateCompany";
import FormEditorCompany from "./Component/Reference/Design_Reference/FormEditorCompany";
import NotifcationToCardPost from "./Component/user/Homepage/CenterSide/Card/NotifcationToCardPost";
import SavedPost from "./Component/user/Homepage/Leftside/SavedPost";
import SavePostCompany from "./Component/user/Homepage/CenterSide/SavePostCompany";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import SuggestCompanyCard from "./Component/anonymous/Suggestion/SuggestCompanyCard";
import Suggest_Company from "./Component/anonymous/Suggestion/Suggest_Company";
import Suggest_User from "./Component/anonymous/Suggestion/Suggest_User";
import DetailJob from "./Component/user/DetailJob";
import DetailJobPopup from "./Component/user/Homepage/Reference/DetailJobPopup";
import ListCV from "./Component/user/Homepage/CenterSide/Card/ListCV";
import { StaticImage } from "./utils/StaticImage";
import { BASE_URL1 } from "./utils/Utils";

function App() {
  const role = useSelector((state) => state.userDetail.userDetail.role);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true); // Track loading statex
  const [stompClient, setStompClient2] = useState(null);

  const connect =()=>{
    let Sock = new SockJS(`${BASE_URL1}/ws`);
    let stompClient2 = over(Sock);
    // stompClient2.debug = function() {};
    stompClient2.onclose = () => {
      connect();
    }
    setStompClient2(stompClient2);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    // websocket connection 
    connect();

    return () => {
      clearTimeout(timer);
    };
  }, []);
  useEffect(() => {
    if (!localStorage.getItem("userRole")) localStorage.setItem("userRole", "user")
    if (localStorage.getItem("Token")) {
      UserProfile().then((res) => {
        
        if (res.status === 200) {
          RegisterNotification("user" + res.data.payload.userId);
          CompanyDetailProfile().then((rescom) => {
            if (rescom.status === 200) {
              dispatch(setCompanyDetail({ ...rescom.data.payload }));}
          });
          if (localStorage.getItem("userRole") === "user") {
            dispatch(setUserDetail({ ...res.data.payload, role: "user" }))
          }
          else
            dispatch(setUserDetail({ ...res.data.payload, role: "company" }))
        } else dispatch(setUserDetail({ onesignal: "", role: "annonymous" }))
      });
    } else dispatch(setUserDetail({ onesignal: "", role: "annonymous" }))
  }, []);
  useEffect(() => {
    if (role) setIsLoading(false);
  }, [role]);
  

  return (
    <div className="App">
      {isLoading ? <HeroPage /> : (

        <Routes>
          <Route path="/" element={<Protected role={role}><LandingPage /></Protected>} />
          <Route path="/signup" element={<Protected role={role}><SignupPage /></Protected>} />
          <Route path="/home" element={<ProtectedUser role={role}><UserHomePage /></ProtectedUser>}>
            {/* <Route path="otherprofile/:id" element={<OtherProfile />}>
            <Route path="" element={<AboutOtherPro />}></Route>
            <Route path="user-posts" element={<PostOtherUserPro />}></Route>
          </Route>
          <Route path="otherprofilecompany/:id" element={<OtherProfileCompany />}>
            <Route path="" element={<OtherCompanyAbout />}></Route>
            <Route path="othercompanyposts" element={<OtherCompanyPosts />}></Route>
          </Route> */}
            <Route path="reference" element={<ReferencePage />}>
              <Route path="" element={<SearchCompany></SearchCompany>} />
              <Route path="requested-list" element={<RequestedList></RequestedList>} />
              <Route path="view-reference" element={<ViewReference></ViewReference>} />
            </Route>
            <Route path="connection" element={<Connections />}>
              <Route path="" element={<ConectionPageSeeUser />}></Route>
              <Route path="company" element={<Con_Sugest_Component />}></Route>
            </Route>
            <Route path="job" element={<Job_Rec />}></Route>
            <Route path="recent" element={<MostRecent />}></Route>
            <Route path="test" element={<LoginComponent />}></Route>
            <Route path="saved" element={<SavedPost />}>
            <Route path="" element={<SavePostPage />}></Route>
            <Route path="company" element={<SavePostCompany />}></Route>
          </Route>
            <Route path="change-password" element={<ChangePassword />}></Route>
            <Route path="setting" element={<Setting />}></Route>
            {/* <Route path="otherprofile/:id" element={<OtherProfile />}></Route> */}
            <Route path="" element={<UserHomePageCenterSide></UserHomePageCenterSide>}></Route>
          </Route>


          <Route path="/home" element={<ProtectedUserCompany role={role}><UserHomePageNoLeftRightSideFomCom role={role} /></ProtectedUserCompany>}>
            <Route path="otherprofile/:id" element={<OtherProfile />}>
              <Route path="" element={<AboutOtherPro />}></Route>
              <Route path="user-posts" element={<PostOtherUserPro />}></Route>
            </Route>
            <Route path="otherprofilecompany/:id" element={<ProtectedUser role={role}><OtherProfileCompany role={role} /></ProtectedUser>}>
              <Route path="" element={<OtherCompanyAbout />}></Route>
              <Route path="othercompanyposts" element={<OtherCompanyPosts />}></Route>
            </Route>

            <Route path="connection" element={<Connections />}>
              <Route path="" element={<ConectionPageSeeUser />}></Route>
              <Route path="company" element={<Con_Sugest_Component />}></Route>
            </Route>
            <Route path="notification/:id" element={<NotifcationToCardPost></NotifcationToCardPost>}></Route>
          </Route>

          {/* for test */}
          <Route path="/cardref" element={<ReferenceCardCreated2 />}></Route>
          <Route path="/test" element={<Suggest_User/>}></Route>


          <Route path="design-reference" element={<DesignReferencePage />}>
            <Route path="" element={<AllReference></AllReference>} />
            <Route path="sort-reference" element={<SortReference></SortReference>} />
            <Route path="sort-certificate" element={<SortCertificate></SortCertificate>} />
            <Route path="form-editor" element={<FormEditor></FormEditor>} />
          </Route>

          <Route path="/company" element={<ProtectedCompany role={role}><ViewOwnCompanyProfile /></ProtectedCompany>}>
            <Route path="" element={<CompanyHomePage />}>
              <Route path="" element={<SuggestionPeopleCompany />}></Route>
              <Route path="interested-people" element={<InterestedPeopleCompany />}></Route>
            </Route>
            <Route path="company-about" element={<AboutCompanyPro />}></Route>
            <Route path="company-posts" element={<PostsCompany />}></Route>
            <Route path="company-annountment" element={<CompanyPostJob />}></Route>
            <Route path="company-annountment/listcv" element={<ListCV />}></Route>
          </Route>
            <Route path="/company/design-reference" element={<ProtectedCompany role={role}><DesignReferencePageCompany /></ProtectedCompany>}>
              <Route path="" element={<AllReferenceCompnay></AllReferenceCompnay>} />
              <Route path="sort-reference" element={<SortReferenceCompany></SortReferenceCompany>} />
              <Route path="sort-certificate" element={<SortCertificateCompany></SortCertificateCompany>} />
              <Route path="form-editor" element={<FormEditorCompany></FormEditorCompany>} />
            </Route>

          <Route path="company-reference" element={<ProtectedCompany role={role}><ReferenceRequestFromUserPage /></ProtectedCompany>}>
            <Route path="" element={<AllReferenceReq />}></Route>
            <Route path="reference-request" element={<SortReferenceReq />}></Route>
            <Route path="certificate-request" element={<SortCertificateReq />}></Route>
          </Route>
          <Route
            path="profile"
            element={
              <Protected>
                <UserHomePageNoLeftRightSide />
              </Protected>
            }
          >
            <Route path="" element={<ProtectedUser role={role}><UserProfilePage /></ProtectedUser>}>
              <Route path="" element={<AboutUserPro />}>
                <Route path="" element={<ReferencesRecieved />}></Route>
                <Route path="reference-created" element={<ReferenceCreated />}></Route>
              </Route>
              <Route path="user-posts" element={<PostsUserPro />}></Route>
              <Route path="company-interest" element={<CompanyInterestUser />}></Route>

            </Route>
          </Route>
          <Route path="/loginpage" element={<LoginPage />} />
          {/* <Route path="/design-reference" element={<ReferencePage />} /> */}
        </Routes>
      )}

      <CustomPoPoup></CustomPoPoup>
      <CustomErrorPage></CustomErrorPage>
      <SwitchAccountPopup></SwitchAccountPopup>
      <ChatIndiviual stompClient={stompClient}></ChatIndiviual>
      <CreateCompanyPopUp></CreateCompanyPopUp>
      <PopupRequestReference></PopupRequestReference>
      <DetailJob ></DetailJob>

    </div>
  );
}

export default App;
