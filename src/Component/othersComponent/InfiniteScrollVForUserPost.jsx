import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLikeUpdate } from "../../Redux/slices/LikeUpdateSlice";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import { GetPostUserProfileGetPost, getPostByCompany } from "../../Redux/service/Post";
import { setPostSlide } from "../../Redux/slices/PostSlide";
import { BeatLoader } from "react-spinners";
import { BASE_URL1 } from "../../utils/Utils";

function InfiniteScrollVForUserPost({
  linkAPI,
  linkComponent: LinkComponent,
  Style,
}) {
  const [data, setData] = useState([]);
  const [More, setMore] = useState(true);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const pageRef = useRef(null);
  var stompClient = useSelector((state) => state.stompClient.stompClient);
  const likeUpdate = useSelector((state) => state.likeUpdate.likeUpdate);
  const postData = useSelector((state) => state.postSlide.post);
  const dispatch = useDispatch();
 
  // connect to websocket server
  const connect = () => {
    let Sock = new SockJS(`${BASE_URL1}/ws`);
    stompClient = over(Sock);
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
    }catch(e){
    }
  };

  useEffect(() => {
    //connect to websocket
    connect();
    fetchData(); // Fetch initial data when the component mounts
  }, []);

  useEffect(() => {
    connect();
  }, [likeUpdate]);

  const fetchData = () => {
    // console.log("get data from landing page ",getData)
    setIsLoading(true);
    // Simulate API call or fetch data from an API
    setTimeout(() => {
      linkAPI(page).then((res) => {
        if (res.data && res.data.payload.length > 0) {
          if (linkAPI === GetPostUserProfileGetPost ||linkAPI === getPostByCompany ) {
            setData([...data, ...res.data.payload]);
            dispatch(setPostSlide([...data, ...res.data.payload]));
          } else {
            setData((prevData) => [...prevData, ...res.data.payload]);
          }
          setPage((data) => data + 1);
        } else {
          setMore(false);
        }
        setIsLoading(false);
      });
    }, 1000);
  };

  const handleObserver = (entries) => {
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
      {postData.map(
        (e, i) =>
          LinkComponent && (
            <LinkComponent
              item={e}
              index={i}
              sendLikeUpdate={sendLikeUpdate}
              connect={connect}
            ></LinkComponent>
          )
      )}
      {isLoading && (
        <div>
          <div class="text-center">
            <div role="status">
              <BeatLoader color="#04AA9C" size={14} />
            </div>
          </div>
        </div>
      )}
      <div ref={pageRef}></div>
      {/* <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div> */}
    </div>
  );
}

export default InfiniteScrollVForUserPost;
