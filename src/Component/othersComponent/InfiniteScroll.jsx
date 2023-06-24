import React, { useState, useEffect, useRef } from "react";
import { BeatLoader } from "react-spinners";

function InfiniteScroll({ linkAPI, linkComponent }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const pageRef = useRef(null);

  useEffect(() => {
    fetchData(); // Fetch initial data when the component mounts
  }, []);

  const fetchData = () => {
    setIsLoading(true);
    // Simulate API call or fetch data from an API
    setTimeout(() => {
      const newData = generateNewData();
      setData((prevData) => [...prevData, ...newData]);
      setIsLoading(false);
    }, 1000);
  };

  const generateNewData = () => {
    // Generate new data to append to the array
    const newData = [];
    for (let i = 0; i < 20; i++) {
      newData.push(`Item ${data.length + i + 1}`);
    }
    return newData;
  };

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && !isLoading) {
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
    <div>
      {data.map((item, index) => linkComponent)}
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
      {/* <div>&nbsp;</div> */}
    </div>
  );
}

export default InfiniteScroll;
