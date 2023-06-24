import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setJobCard } from "../../Redux/slices/JobAnnountment";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import { setLikeUpdate } from "../../Redux/slices/LikeUpdateSlice";
import { BASE_URL1 } from "../../utils/Utils";

var stompClient = null;

function InfiniteScrollV6({
  id,
  linkAPI,
  linkComponent: LinkComponent,
  Style,
}) {
  const [data, setData] = useState(null);
  const [More, setMore] = useState(true);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const pageRef = useRef(null);
  const dispatch = useDispatch();

  // connect to websocket server
  const connect = () => {
    let Sock = new SockJS(`${BASE_URL1}/ws`);
    stompClient = over(Sock);
    stompClient.debug = function () {};
    //test token
    let Token = localStorage.getItem("Token");
    stompClient.connect(
      {
        Authorization: `Bearer ${Token}`,
      },
      onConnected,
      onError
    );
  };
  const onConnected = () => {

     try{
      stompClient.subscribe("/likeUpdateRealTime", onReceivedLikeUpdate);
    }catch(e){}
  };
  const onError = () => {
    setTimeout(() => {
      connect();
    }, 3000);
  };
  const onReceivedLikeUpdate = (payload) => {
    var payloadData = JSON.parse(payload.body);
    dispatch(setLikeUpdate(payloadData));
  };
  const sendLikeUpdate = (index, likeNumber) => {
    let number = {
      index: index,
      likeNumber: likeNumber,
    };
    try{
      stompClient.send("/app/likeUpdate", {}, JSON.stringify(number)).catch((e) => {
      });
    }catch  (e){
    }
  };

  useEffect(() => {
    //connect to websocket
    connect();
    fetchData(); // Fetch initial data when the component mounts
  }, []);
  useEffect(() => {
    //connect to websocket
    fetchData(); // Fetch initial data when the component mounts
  }, [id]);

  const fetchData = () => {
    // console.log("get data from landing page ",getData)
    setIsLoading(true);
    // Simulate API call or fetch data from an API
    setTimeout(() => {
      linkAPI(id).then((res) => {
        if (res.data) {
          setData(res.data.payload);
        }
        setIsLoading(false);
      });
    }, 1000);
  };

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && isLoading) {
      fetchData();
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (pageRef.current) {
      observer.observe(pageRef.current);
    }

    return () => {
      if (pageRef.current) {
        observer.unobserve(pageRef.current);
      }
    };
  }, [isLoading]);

  return (
    <div className={`${Style}`}>
      {LinkComponent && data != null && (
        <LinkComponent
          item={data} 
          sendLikeUpdate={sendLikeUpdate}
        ></LinkComponent>
      )}
      {isLoading && (
        <div>
          <div class="text-center">
            <div role="status">
              <svg
                aria-hidden="true"
                class="inline w-8 h-8 mr-2 text-gray-200 animate-spin fill-green_custom"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      )}
      <div ref={pageRef}></div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
    </div>
  );
}

export default InfiniteScrollV6;
