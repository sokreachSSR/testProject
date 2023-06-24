import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setJobCard } from "../../Redux/slices/JobAnnountment";
import { BeatLoader } from "react-spinners";

function InfiniteScrollV4({
  linkAPI,
  linkComponent: LinkComponent,
  Style,
  SetSlide,
  dataSlide,
}) {
  const [data, setData] = useState([]);
  const [More, setMore] = useState(true);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const pageRef = useRef(null);
  const isInitialRender = useRef(true);

  const dispatch = useDispatch();

  // connect to websocket server

  useEffect(() => {
    fetchData(); // Fetch initial data when the component mounts
  }, []);

  const fetchData = () => {
    // console.log("get data from landing page ",getData)
    setIsLoading(true);
    // Simulate API call or fetch data from an API
    setTimeout(() => {
      linkAPI(page).then((res) => {
        if (res.data && res.data.payload.length) {
          setData((data) => [...data, ...res.data.payload]);
          dispatch(SetSlide([...data, ...res.data.payload]));
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
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
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
      {dataSlide?.map(
        (e, i) =>
          LinkComponent && <LinkComponent item={e} index={i}></LinkComponent>
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
      {data.length === 0 && (
        <div>
          <div class="text-center">
            <div className="flex justify-center text-lg font-semibold items-center w-full h-full text-black text-center p-20 pt-36">
              No Data Available
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

export default InfiniteScrollV4;
