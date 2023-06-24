import React from "react";

export default function PopupConfirm() {
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal-6" className="btn">
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex justify-between">
            <svg
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45.745 32.375L42.595 35.595C40.075 38.115 38.5 40.25 38.5 45.5H31.5V43.75C31.5 39.865 33.075 36.365 35.595 33.845L39.935 29.435C41.23 28.175 42 26.425 42 24.5C42 22.6435 41.2625 20.863 39.9497 19.5503C38.637 18.2375 36.8565 17.5 35 17.5C33.1435 17.5 31.363 18.2375 30.0503 19.5503C28.7375 20.863 28 22.6435 28 24.5H21C21 20.787 22.475 17.226 25.1005 14.6005C27.726 11.975 31.287 10.5 35 10.5C38.713 10.5 42.274 11.975 44.8995 14.6005C47.525 17.226 49 20.787 49 24.5C48.995 27.4513 47.8252 30.2814 45.745 32.375ZM38.5 59.5H31.5V52.5H38.5M35 0C30.4037 0 25.8525 0.905302 21.6061 2.66422C17.3597 4.42313 13.5013 7.00121 10.2513 10.2513C3.68749 16.815 0 25.7174 0 35C0 44.2826 3.68749 53.185 10.2513 59.7487C13.5013 62.9988 17.3597 65.5769 21.6061 67.3358C25.8525 69.0947 30.4037 70 35 70C44.2826 70 53.185 66.3125 59.7487 59.7487C66.3125 53.185 70 44.2826 70 35C70 15.645 54.25 0 35 0Z"
                fill="#04AA9C"
              />
            </svg>
            <div>
              <h3 className="font-bold text-lg">Confirm?</h3>
              <p className="mt-1">
                Do you really want to approve this Requested? <br />
                After confirmed, you can create reference for his/her.
              </p>
            </div>
          </div>
          <div className="border-b-2 mt-5"></div>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="w-20 h-8 rounded-[20px] text-center bg-[#B6B6B6] text-white pt-0.5">
              No
            </label>
            <label htmlFor="my-modal-6" className="w-20 h-8 rounded-[20px] bg-green_custom text-center text-white pt-0.5">
              Confirm
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
