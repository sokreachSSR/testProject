import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setJobCard } from "../../Redux/slices/JobAnnountment";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import { setLikeUpdate } from "../../Redux/slices/LikeUpdateSlice";
import { BeatLoader } from "react-spinners";
import { setRealTimeComment } from "../../Redux/slices/commentOnRealTimeSlice";
import { BASE_URL1 } from "../../utils/Utils";
import { Link } from "react-router-dom";

var stompClient = null;

function InfiniteScrollNewfeed({
  linkAPI,
  linkComponent: LinkComponent,
  Style,
  Dispatch,
  SetSlide,
  getData,
}) {
  const [data, setData] = useState([]);
  const [More, setMore] = useState(true);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const pageRef = useRef(null);

  const dispatch = useDispatch();
  const isInitialRender = useRef(true);
  // useEffect(() => {
  //   if (isInitialRender.current) {
  //     isInitialRender.current = false;
  //     return;
  //   }
  //   fetchData();
  // }, [page]);

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
    if (payloadData) {
      if (payloadData.status === "comment") {
        dispatch(setRealTimeComment(payloadData));
      }
    }
    dispatch(setLikeUpdate(payloadData));
  };

  const sendComment = (postId, comment) => {
    let com = {
      [postId]: comment,
      status: "comment",
    };
    try {
      stompClient
        .send("/app/likeUpdate", {}, JSON.stringify(com))
        .catch((e) => {});
    } catch (err) {}
  };

  const sendLikeUpdate = (index, likeNumber) => {
    let number = {
      index: index,
      likeNumber: likeNumber,
      status: "like",
    };
    try {
      stompClient
        .send("/app/likeUpdate", {}, JSON.stringify(number))
        .catch((e) => {});
    } catch (err) {}
  };

  useEffect(() => {
    //connect to websocket
    connect();
    fetchData(); // Fetch initial data when the component mounts
  }, []);

  const fetchData = () => {
    // console.log("get data from landing page ",getData)
    setIsLoading(true);
    // Simulate API call or fetch data from an API
    setTimeout(() => {
      linkAPI(page).then((res) => {
        if (res.data && res.data.payload.length > 0) {
          Dispatch(SetSlide([...getData, ...res.data.payload]));
          setPage((data) => data + 1);
        } else {
          setMore(false);
        }
      });
      setIsLoading(false);
    }, 1000);
  };

  const handleObserver = (entries) => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    const target = entries[0];
    if (target.isIntersecting && !isLoading && More) {
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
      {getData?.map(
        (e, i) =>
          LinkComponent && (
            <LinkComponent
              item={e}
              index={i}
              sendLikeUpdate={sendLikeUpdate}
              sendComment={sendComment}
            ></LinkComponent>
          )
      )}
      {isLoading && (
        <div>
          <div class="text-center">
            <div role="status">
              <div className="mt-16 mb-8 ">
                <BeatLoader color="#04AA9C" size={14} />
              </div>
            </div>
          </div>
        </div>
      )}
      {!isLoading && (
        <div>
          <div class="text-center">
            <div className="mt-8">
              <div class="welcome-message">
                Start exploring and connecting with others to see more posts.
              </div>
              <div className="mt-8 mb-8">
                <Link to="/home/connection" className="follow-button">Follow others</Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div ref={pageRef}></div>
      {/* <div>&nbsp;</div> */}
    </div>
  );
}

export default InfiniteScrollNewfeed;
