import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { BeatLoader, ClipLoader } from "react-spinners";



function InfiniteScrollmessage({
  linkAPI,
  linkComponent: LinkComponent,
  Style,
  id,
  userDetail,
}) {
  const [data, setData] = useState([]);
  const [More, setMore] = useState(true);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const pageRef = useRef(null);
  

  const dispatch = useDispatch();

  useEffect(() => {
    fetchData(); // Fetch initial data when the component mounts
  }, []);

  const fetchData = () => {
    // console.log("get data from landing page ",getData)
    setIsLoading(true);
    // Simulate API call or fetch data from an API
    setTimeout(() => {
      linkAPI(id, page).then((res) => {
        if (res.data && res.data.payload.length) {
          setData((prevData) => [...prevData, ...res.data.payload]);
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
      {data.length > 0 ? (
        data.map(
          (e, i) =>
            LinkComponent && (
              <LinkComponent
                item={e}
                index={i}
              ></LinkComponent>
            )
        )
      ) : (
        <div className="flex justify-center text-lg font-semibold items-center w-full h-full text-black text-center p-20 pt-36">
          No Chat
        </div>
      )}
      {isLoading && (
        <div>
          <div class="text-center mt-5">
            <div role="status">
              <ClipLoader
               color="#04AA9C" size={50} />
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

export default InfiniteScrollmessage;
