import React, { useEffect, useRef, useState } from "react";
import { StaticImage } from "../../../../utils/StaticImage";
import { DropShadow } from "../../../../utils/Style";
import { formatDistanceToNow } from "date-fns";
import message_icn from "../../../../assets/message_icon.svg";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScrollmessage from "../../../othersComponent/InfiniteScrollmessage";
import { getChatWith } from "../../../../Redux/service/MessageService";
import { setMessageDetail } from "../../../../Redux/slices/MessageDetailSlice";
import Stomp from 'stompjs';
import { search111 } from "../../../../Redux/service/search";
import SearchUserInChat from "../../../othersComponent/SearchUserInChat";
import { BASE_URL1 } from "../../../../utils/Utils";

export default function Message({click}) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState("hello");
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const userDetail = useSelector((state) => state.userDetail.userDetail);
  var stompClient = useSelector((state)=>state.stompClient.stompClient);
  const messageDetail = useSelector((state) => state.messageDetail.messageDetail);
  const dispatch = useDispatch();
  const connect =()=>{
    let Token = localStorage.getItem('Token');
    stompClient.connect({
        Authorization: `Bearer ${Token}`
    }, onConnected, onError);
  };
  const onConnected = () => {
   
    try{
      stompClient.subscribe("/user/" + userDetail.userId + "/private", onReceivedMessage);
    }catch(e){}
  };
  const onError = () => {
    connect();
  };

  const onReceivedMessage = (payload) => {
    var payloadData = JSON.parse(payload.body);
    setMessages(payloadData);
  };



  useEffect(() => {
    connect();
  }, []);

  useEffect(() => {
    let newDetail = messageDetail;
      if(Array.isArray(messageDetail[messages.sender_id])){

        const newArray = [...messageDetail[chatWith.userId]];
        newArray.splice(0, 0, messages);        
        const newMessage = {...messageDetail, [chatWith.userId] : newArray};
        console.log("neww array",newArray)
        if(newMessage!={})
        dispatch(setMessageDetail(newMessage));
      }
  }, [messages]);
//  --------------------------------------
  const popupMessage = (user) => {
    click(user)
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

  //convert timestamp to normal time
  const convertTimestampForChat = (timestamp) => {
    const currentTime = new Date();
    const postTime = new Date(timestamp);
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const diffDays = Math.round(Math.abs((currentTime - postTime) / oneDay));
    if (diffDays > 1) {
      if (postTime.getFullYear() !== currentTime.getFullYear()) {
        return postTime.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
      }
      return postTime.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
    var hours = postTime.getHours();
    var minutes = postTime.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    if (diffDays === 1) {
      return "Yesterday " + strTime;
    }
    return strTime;
  };
  // handle click outside
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(
        "sokreach",
        dropdownRef.current &&
          !dropdownRef.current.contains(event.target) &&
          !event.target.classList.contains("message-toggle")
      );
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.classList.contains("message-toggle")
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // -------------------------------------------------------------
  const [timeoutId, setTimeoutId] = useState(null);

  const handleSearch = (event) => {
     clearTimeout(timeoutId);
    // Set a new timeout for 2 seconds
    const newTimeoutId = setTimeout(() => {
      search111(event.target.value).then((result) => {
        if(result){
          if(result.length > 0){
            setSearchResult(result.data.payload);
          }
        }
      });
    }, 2000);
    setTimeoutId(newTimeoutId);
  };

  // --------------- End of Search Handler -----------------------


  const messageCard = ({item, index}) => {
    return(
    <div
    className="dropdown dropdown-left w-full hover:bg-bg_custom rounded-lg py-4"
    tabIndex={0}
  >
    <div
      onClick={()=>popupMessage(item)}
      className="flex w-full justify-between items-center px-5 cursor-pointer"
    >
      <div className="flex items-center justify-center w-full">
        <div className="w-[70px]">
        <img
          src={`${BASE_URL1}/api/v1/images/PROFILE?fileName=${item.profileImage}`}
          alt=""
          className="w-14 h-14 object-cover border-[1px] rounded-full"
        />
        </div>
        <div className="ml-4 w-full">
          <h3 className="font-semibold text-lg mb-1">{item.fullName}</h3>
          <div className="flex w-full justify-between">
            <p className="font-normal text-md text-[#5D6D79]">
              {item.lastMessage}
            </p>
            {/* message time */}
            <p className="font-normal text-sm text-[#5D6D79]">{convertTimestampForChat(item.lastMessageTime)}</p>
          </div>
        </div>
      </div>
    </div>
    {/* end dropdown */}
  </div>)
  }
  // show all person we chat with
  const chatWith = useSelector((state) => state.messageDetail.chatWith);

  return (
    <div>
      <div className="w-8 h-8 md:w-10 md:h-10 flex justify-center items-center border-black-100 border rounded-full message-toggle" onClick={toggleDropdown}>
      <img src={message_icn} className="w-4 h-4 md:w-7 md:h-7 message-toggle"/>
      </div>
      {isDropdownOpen && (
        <div
          // id="dropdownMessage"
          ref={dropdownRef}
          className={`${DropShadow} z-10 bg-white absolute right-0 border-black-400 rounded-[20px] shadow w-96 h-[678px]`}
          data-dropdown-toggle="dropdownOffset"
          data-dropdown-offset-distance="5"
          data-dropdown-offset-skidding="100"
          data-dropdown-placement="right"
        >
          <div class="pt-4 text-black">
            <h2 className="text-md ml-4 font-bold text-green_custom">Message</h2>
          </div>
          <div class="py-2 flex justify-center relative mt-2">
            <div class="absolute inset-y-0 left-5 flex items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            {/* <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-[20px] focus:ring-green_custom focus:border-green_custom mx-5 h-12 w-[340px] px-10"
              placeholder="search..."
              onChange={handleSearch}
            /> */}
            <SearchUserInChat popupMessage={popupMessage}></SearchUserInChat>
          </div>

          {/* component chat message */}
          <InfiniteScrollmessage linkAPI={getChatWith} linkComponent={messageCard} id={userDetail.userId} userDetail={userDetail} />
          {/* end component chat message */}
        </div>
      )}

      {/* Put this part before </body> tag */}
      {/* Put this part before </body> tag */}
    </div>
  );
}
