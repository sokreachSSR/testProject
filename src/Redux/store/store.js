import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../slices/userSlice';
import Anonymous_Suggest_Company from '../slices/Anonymous_Suggest_Company';
import PopupSlice from '../slices/PopupSlice';
import userDetailSlice from '../slices/userDetailSlide';
import LoadingSlice from '../slices/LoadingSlice';
import companyLocationSlice from '../slices/companyLocationSlice';
import JobAnnountments from '../slices/JobAnnountment';
import PostSlide from '../slices/PostSlide';
import companyDetailSlice  from '../slices/companyDetailSlice';
import LikeUpdateSlice from '../slices/LikeUpdateSlice';
import  SearchSlice  from '../slices/searchSlice';
import CompanyFollowing from '../slices/CompanyFollowing';
import commentOnRealTimeSlice from '../slices/commentOnRealTimeSlice';
import UserFollowing from '../slices/UserFollowing';
import  messageDetailSlice  from '../slices/MessageDetailSlice';
import CreateCompany from '../slices/CreateCompany';
import WebSocketSlice from '../slices/WebSocketSlice';
import  CreateKey  from '../slices/KeySlice';
import  CreateCount  from '../slices/CountSlice';
import ChatPopUp from '../slices/ChatPopUp';
import PopupJobAnnoumentDetail from '../slices/PopupJobAnnoumentDetail';
import FollowUser from '../slices/FollowUser';

const store = configureStore({
  reducer: {
    user: userSlice,
    Anonymous_Suggest_Company:Anonymous_Suggest_Company,
    PopupSlice:PopupSlice,
    userDetail:userDetailSlice,
    loading:LoadingSlice,
    companyLocation:companyLocationSlice,
    jobCard:JobAnnountments,
    postSlide:PostSlide,
    companyDetail: companyDetailSlice,
    likeUpdate:LikeUpdateSlice,
    search:SearchSlice,
    companyFollow:CompanyFollowing,
    realTimeComment: commentOnRealTimeSlice,
    userFollow: UserFollowing,
    messageDetail: messageDetailSlice,
    popupCreateCom : CreateCompany,
    stompClient : WebSocketSlice,
    Key: CreateKey,
    count:CreateCount,
    chatPopup : ChatPopUp,
    JobAnnoumentDetail:PopupJobAnnoumentDetail,
    followUser : FollowUser
  },
})

export  default store;