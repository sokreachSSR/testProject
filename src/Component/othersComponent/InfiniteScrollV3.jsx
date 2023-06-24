import React, { useState, useEffect, useRef } from "react";
import { BeatLoader, ClipLoader } from 'react-spinners';


function InfiniteScrollV3({
  linkAPI,
  Param1,
  linkComponent: LinkComponent,
  Style,
}) {
  const [data, setData] = useState([]);
  const [More, setMore] = useState(true);
  const [page, setPage] = useState(1);
  const [isParamChange, setIsParamChange] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const pageRef = useRef(null);

  const isInitialRender = useRef(true);
  // useEffect(() => {
  //   fetchData(); // Fetch initial data when the component mounts
  // }, []);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    setData([]);
    setPage(1);
    setMore(true);
    setIsLoading(false);
  }, [Param1]);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    fetchData();
  }, [page]);

  const fetchData = () => {
    console.log(page);
    // console.log("get data from landing page ",getData)
    setIsLoading(true);
    // Simulate API call or fetch data from an API
    setTimeout(() => {
      linkAPI(Param1, page).then((res) => {
        if (res.data && res.data.payload.length) {
          setPage(page + 1);
          setData((prevData) => [...prevData, ...res.data.payload]);
        } else {
          setMore(false);
        }
        setIsLoading(false);
      });
    }, 2000);
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
      {data?.map(
        (e, i) =>
          LinkComponent && <LinkComponent item={e} index={i}></LinkComponent>
      )}
      {isLoading && More && (
        <div>
          <div class="text-center">
            <div role="status">
              <BeatLoader color="#04AA9C"  size={16} />
            </div>
          </div>
        </div>
      )}
       {data.length ===0 && (
        <div>
          <div class="text-center">
            <div className="flex justify-center text-lg font-semibold items-center w-full h-full text-black text-center p-20 pt-36">
          No Data Available
        </div>          
          </div>
        </div>
      )}
      <div ref={pageRef}></div>
      {/* <div>&nbsp;</div> */}
    </div>
  );
}

export default InfiniteScrollV3;
