import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setJobCard } from "../../Redux/slices/JobAnnountment";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import { setLikeUpdate } from "../../Redux/slices/LikeUpdateSlice";
import { BeatLoader } from "react-spinners";
import { setRealTimeComment } from "../../Redux/slices/commentOnRealTimeSlice";

var stompClient = null;

function InfiniteScrollV1LandingPage({
  linkAPI,
  linkComponent: LinkComponent,
  Style,
  Dispatch,
  SetSlide,
  getData,
  filterData
}) {
  const [More, setMore] = useState(true);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const pageRef = useRef(null);
  const isInitialRender = useRef(true);
  // useEffect(() => {
  //   if (isInitialRender.current) {
  //     isInitialRender.current = false;
  //     return;
  //   }
  //   fetchData();
  // }, [page]);

  // connect to websocket server


  useEffect(() => {
    //connect to websocket
    fetchData(); // Fetch initial data when the component mounts
  }, []);

  const fetchData = () => {
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
      {filterData?.map(
        (e, i) =>
          LinkComponent && (
            <LinkComponent
              item={e}
              index={i}
            ></LinkComponent>
          )
      )}
      {isLoading && (
        <div className="col-span-1 md:col-span-2 row-span-5 flex justify-center items-center">
            <div role="status">
              <div className="mt-8">
                <BeatLoader color="#04AA9C" size={14} />
              </div>
            </div>
        </div>
      )}
      {!isLoading && (
        <div className="text-lg text-gray-600 font-semibold col-span-1 md:col-span-2 row-span-5 flex justify-center items-center">
            No more available
        </div>
      )}
      <div ref={pageRef}></div>
      {/* <div>&nbsp;</div> */}
    </div>
  );
}

export default InfiniteScrollV1LandingPage;
