import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getMessageDetail,
  insertMessage,
} from "../../Redux/service/MessageService";
import { setMessageDetail } from "../../Redux/slices/MessageDetailSlice";
import { BeatLoader, ClipLoader } from "react-spinners";
import EmojiPicker from "emoji-picker-react";
import { setStompClient } from "../../Redux/slices/WebSocketSlice";
import { BASE_URL1, TOKEN } from "../../utils/Utils";
import 'react-toastify/dist/ReactToastify.css';

export default function ChatIndiviual({ stompClient }) {
  const chatWith = useSelector((state) => state.messageDetail.chatWith);
  const userDetail = useSelector((state) => state.userDetail.userDetail);
  const [messages, setMessages] = useState("");
  const messageDetail = useSelector(
    (state) => state.messageDetail.messageDetail
  );
  const [a, setA] = useState("");
  const dispatch = useDispatch();
  const chatContainerRef = useRef(null);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(16);
  const [noMoreData, setNoMoreData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // ---------- Emoji ------------------
  const [isClickEmoji, setIsClickEmoji] = useState(false);

  const handleEmojiClick = () => {
    isClickEmoji ? setIsClickEmoji(false) : setIsClickEmoji(true);
  };
  // ---------- End Emoji -------------

  // get LocalDateTime
  const padZero = (num) => {
    return num.toString().padStart(2, "0");
  };
  const getLocalDateTime = () => {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1; // Note: JavaScript months are zero-based.
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    // Format the components as desired
    var dateTime =
      year +
      "-" +
      padZero(month) +
      "-" +
      padZero(day) +
      " " +
      padZero(hour) +
      ":" +
      padZero(minute) +
      ":" +
      padZero(second);

    return dateTime;
  };

  const connect = () => {
    //test token
    let Token = localStorage.getItem("Token");
    if (stompClient) {
      stompClient.connect(
        {
          Authorization: `Bearer ${Token}`,
        },
        onConnected,
        onError
      );
    }
    dispatch(setStompClient(stompClient));
  };
  const onConnected = () => {
    try{
      stompClient.subscribe(
        "/user/" + userDetail.userId + "/private",
        onReceivedMessage
      );
    }catch(e){}

  };
  const onError = () => {
    setTimeout(() => {
      connect();
    }, 3000);
  };
  const onReceivedMessage = (payload) => {
    var payloadData = JSON.parse(payload.body);

    console.log(payloadData);
  };
  const sendMessageWebSocket = (event) => {
    event.preventDefault();
    const messageInSendMessage = {
      sender_id: userDetail.userId,
      receiver_id: chatWith.userId,
      message: messages,
      time: getLocalDateTime(),
    };
    if (stompClient.connected) {
      //set value in input field to null
      const newArray = [...messageDetail[chatWith.userId]];
      newArray.splice(0, 0, messageInSendMessage);
      const newMessage = { ...messageDetail, [chatWith.userId]: newArray };
      setMessages("");
      dispatch(setMessageDetail(newMessage));
      insertMessage(messageInSendMessage).then((result) => {
        if (result) {
          if (result.data) {
            if (result.data.status === 200) {
              try {
                stompClient.send(
                  "/app/private-message",
                  {},
                  JSON.stringify(messageInSendMessage)
                )
              } catch (e) {
                
              }
            }
          }
        }
      });
    } else {
      alert("Chat disconnected! Please reload.");
    }
  };

  // on Stomp client change
  useEffect(() => {
    connect();
  }, [stompClient]);

  // scroll handler section
  useEffect(() => {
    if (page === 1) {
      scrollToBottom();
    }
  }, [messageDetail]);

  const scrollToBottom = () => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  };

  const loadMoreMessages = () => {
    setPage((prevPage) => prevPage + 1);
    fetchMoreMessages();
  };

  const handleScroll = () => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer.scrollTop === 0 && page >= 1) {
      loadMoreMessages();
      setIsLoading(true);
    }
  };

  const fetchMoreMessages = () => {
    getMessageDetail(chatWith.userId, page, size).then((result) => {
      if (result.data) {
        if (result.data.payload.length === 0) {
          setNoMoreData(true);
        } else {
          const newArray = messageDetail[chatWith.userId].concat(
            result.data.payload
          );
          const newMessage = { ...messageDetail, [chatWith.userId]: newArray };
          dispatch(setMessageDetail(newMessage));
        }
      }
    });
  };

  const fetchMessages = () => {
    getMessageDetail(chatWith.userId, page, size).then((result) => {
      if (result.data) {
        dispatch(
          setMessageDetail({
            ...messageDetail,
            [chatWith.userId]: result.data.payload,
          })
        );
      }
    });
  };

  // end of scroll handler section

  const changeInput = (e) => {
    setMessages(e.target.value);
  };
  const sendMessage = () => {
    setA(messages);
  };

  //convert timestamp to normal time
  const convertTimestampForChat = (timestamp) => {
    const currentTime = new Date();
    const postTime = new Date(timestamp);
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const diffDays = Math.round(Math.abs((currentTime - postTime) / oneDay));
    if (diffDays > 1) {
      if (postTime.getFullYear() !== currentTime.getFullYear()) {
        return postTime.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
      }
      return postTime.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    }
    var hours = postTime.getHours();
    var minutes = postTime.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    if (diffDays === 1) {
      return "Yesterday " + strTime;
    }
    return strTime;
  };

  useEffect(() => {
    fetchMessages();
  }, [chatWith]);
  return (
    <div>
      <input type="checkbox" id="my-modal-message" className="modal-toggle" />
      <div className="modal flex items-end justify-end">
        <div
          className="modal-backdrop drop-shadow-xl relative bg-white rounded-[20px] pt-3 pb-7 px-4 w-[400px] overflow-clip "
          style={{ marginRight: "25%" }}
        >
          <div className="flex items-center justify-between border-b-2 pb-2">
           <div className="flex items-center">
           <Link to={"/home/otherprofile"}>
              <img
                // here need change when server
                src={`${BASE_URL1}/api/v1/images/PROFILE?fileName=${chatWith.profileImage}`}
                alt=""
                className="w-12 h-12 object-cover border-[1px] rounded-full"
              />
            </Link>

            <h3 className="ml-3 text-lg font-medium">{chatWith.fullName}</h3>
           </div>
            <label
              htmlFor="my-modal-message"
              className=" text-2xl right-3 top-1 text-gray-500 cursor-pointer"
            >
              ✕
            </label>
          </div>
          <div
            className="overflow-y-auto h-[260px] scroll-smooth scrollbar"
            ref={chatContainerRef}
            onScroll={handleScroll}
          >
            {page > 1 && noMoreData ? (
              <div className=" w-full text-center font-semibold text-lg"></div>
            ) : (
              isLoading && (
                <div className=" w-full flex justify-center items-center">
                  <ClipLoader size={24} color="#04AA9C" />
                </div>
              )
            )}
            {/* loop here */}
            {Array.isArray(messageDetail[chatWith.userId]) &&
              [...messageDetail[chatWith.userId]]
                .reverse()
                .map((message, index) => (
                  <div
                    key={index}
                    className={`w-auto ${
                      userDetail.userId === message.sender_id
                        ? "mx-4 mt-4 flex items-end justify-end"
                        : "mx-4 mt-4"
                    }`}
                  >
                    <div className="flex flex-col w-fit">
                      <p
                        className={`${
                          userDetail.userId === message.sender_id
                            ? "bg-green_custom text-white rounded-l-[15px] rounded-tr-[15px] py-3 px-4"
                            : "bg-[#F4F3F2] rounded-r-[15px] rounded-tl-[15px] py-3 px-4 text-base font-normal"
                        }`}
                      >
                        {message.message}
                      </p>
                      <p
                        className={`w-full ${
                          userDetail.userId === message.sender_id
                            ? "text-end mr-5"
                            : "ml-1"
                        }`}
                      >
                        {convertTimestampForChat(message.time)}
                      </p>
                    </div>
                  </div>
                ))}
          </div>
          <div className="border-t-2 mt-2 w-full flex justify-between items-center pt-1 h-[25px]">
            <div className="flex mt-6 justify-center items-center w-full">
              <button onClick={handleEmojiClick} className="mr-4">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 19.375C15.4125 19.375 17.875 17.55 18.8875 15H6.1125C7.1125 17.55 9.5875 19.375 12.5 19.375ZM8.125 11.25C8.62228 11.25 9.09919 11.0525 9.45083 10.7008C9.80246 10.3492 10 9.87228 10 9.375C10 8.87772 9.80246 8.40081 9.45083 8.04917C9.09919 7.69754 8.62228 7.5 8.125 7.5C7.62772 7.5 7.15081 7.69754 6.79917 8.04917C6.44754 8.40081 6.25 8.87772 6.25 9.375C6.25 9.87228 6.44754 10.3492 6.79917 10.7008C7.15081 11.0525 7.62772 11.25 8.125 11.25ZM16.875 11.25C17.3723 11.25 17.8492 11.0525 18.2008 10.7008C18.5525 10.3492 18.75 9.87228 18.75 9.375C18.75 8.87772 18.5525 8.40081 18.2008 8.04917C17.8492 7.69754 17.3723 7.5 16.875 7.5C16.3777 7.5 15.9008 7.69754 15.5492 8.04917C15.1975 8.40081 15 8.87772 15 9.375C15 9.87228 15.1975 10.3492 15.5492 10.7008C15.9008 11.0525 16.3777 11.25 16.875 11.25ZM12.5 22.5C9.84784 22.5 7.3043 21.4464 5.42893 19.5711C3.55357 17.6957 2.5 15.1522 2.5 12.5C2.5 9.84784 3.55357 7.3043 5.42893 5.42893C7.3043 3.55357 9.84784 2.5 12.5 2.5C15.1522 2.5 17.6957 3.55357 19.5711 5.42893C21.4464 7.3043 22.5 9.84784 22.5 12.5C22.5 15.1522 21.4464 17.6957 19.5711 19.5711C17.6957 21.4464 15.1522 22.5 12.5 22.5ZM12.5 0C5.5875 0 0 5.625 0 12.5C0 15.8152 1.31696 18.9946 3.66117 21.3388C4.8219 22.4996 6.19989 23.4203 7.71646 24.0485C9.23303 24.6767 10.8585 25 12.5 25C15.8152 25 18.9946 23.683 21.3388 21.3388C23.683 18.9946 25 15.8152 25 12.5C25 10.8585 24.6767 9.23303 24.0485 7.71646C23.4203 6.19989 22.4996 4.8219 21.3388 3.66117C20.1781 2.50043 18.8001 1.57969 17.2835 0.951506C15.767 0.323322 14.1415 0 12.5 0Z"
                    fill="#04AA9C"
                  />
                </svg>
              </button>
              <form onSubmit={sendMessageWebSocket} className="flex">
                <input
                  onChange={changeInput}
                  type="text"
                  placeholder="Start typing..."
                  value={messages}
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-green_custom focus:border-green_custom block w-[240px] h-9 p-2.5"
                />
                <button
                  type="submit"
                  className="font-bold text-green_custom ml-4"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
          {/* emoji */}
          <div
            className={`${
              isClickEmoji ? "" : "hidden"
            } mt-6 z-50 flex justify-between items-center w-full`}
          >
            <EmojiPicker
              onEmojiClick={(event, emojiObject) => {
                setMessages(messages + event.emoji);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
