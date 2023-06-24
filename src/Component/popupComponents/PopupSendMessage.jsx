import React from "react";

export default function PopupSendMessage() {
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal-6" className="btn">
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box p-0 bg-[#F6F6F6] main-container-popup-send-message">
          <div className="bg-green_custom rounded-b-2xl">
            <div className="flex flex-col justify-center items-center h-32">
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.75 0H5.25C3.85761 0 2.52226 0.582235 1.53769 1.61862C0.553124 2.65501 0 4.06065 0 5.52632V33.1579C0.000534375 33.4843 0.0834554 33.8047 0.240276 34.0863C0.397096 34.3679 0.622184 34.6006 0.8925 34.7605C1.15405 34.9166 1.44937 34.999 1.75 35C2.0641 34.9999 2.37238 34.9108 2.6425 34.7421L10.5 29.7316C10.7904 29.5496 11.1247 29.46 11.4625 29.4737H29.75C31.1424 29.4737 32.4777 28.8914 33.4623 27.8551C34.4469 26.8187 35 25.413 35 23.9474V5.52632C35 4.06065 34.4469 2.65501 33.4623 1.61862C32.4777 0.582235 31.1424 0 29.75 0ZM10.5 16.5789C10.1539 16.5789 9.81554 16.4709 9.52775 16.2685C9.23997 16.0661 9.01566 15.7784 8.88321 15.4418C8.75076 15.1052 8.7161 14.7348 8.78363 14.3775C8.85115 14.0201 9.01782 13.6919 9.26256 13.4343C9.50731 13.1767 9.81913 13.0012 10.1586 12.9301C10.4981 12.8591 10.8499 12.8955 11.1697 13.035C11.4895 13.1744 11.7628 13.4105 11.9551 13.7134C12.1474 14.0164 12.25 14.3725 12.25 14.7368C12.25 15.2254 12.0656 15.6939 11.7374 16.0394C11.4092 16.3849 10.9641 16.5789 10.5 16.5789ZM17.5 16.5789C17.1539 16.5789 16.8155 16.4709 16.5278 16.2685C16.24 16.0661 16.0157 15.7784 15.8832 15.4418C15.7508 15.1052 15.7161 14.7348 15.7836 14.3775C15.8511 14.0201 16.0178 13.6919 16.2626 13.4343C16.5073 13.1767 16.8191 13.0012 17.1586 12.9301C17.4981 12.8591 17.8499 12.8955 18.1697 13.035C18.4895 13.1744 18.7628 13.4105 18.9551 13.7134C19.1474 14.0164 19.25 14.3725 19.25 14.7368C19.25 15.2254 19.0656 15.6939 18.7374 16.0394C18.4092 16.3849 17.9641 16.5789 17.5 16.5789ZM24.5 16.5789C24.1539 16.5789 23.8155 16.4709 23.5278 16.2685C23.24 16.0661 23.0157 15.7784 22.8832 15.4418C22.7508 15.1052 22.7161 14.7348 22.7836 14.3775C22.8511 14.0201 23.0178 13.6919 23.2626 13.4343C23.5073 13.1767 23.8191 13.0012 24.1586 12.9301C24.4981 12.8591 24.8499 12.8955 25.1697 13.035C25.4895 13.1744 25.7628 13.4105 25.9551 13.7134C26.1474 14.0164 26.25 14.3725 26.25 14.7368C26.25 15.2254 26.0656 15.6939 25.7374 16.0394C25.4092 16.3849 24.9641 16.5789 24.5 16.5789Z"
                  fill="white"
                />
              </svg>
              <h3 className="font-bold text-2xl mt-3 text-white">
                send the message to them
              </h3>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <input
              type="text"
              placeholder="write message"
              className="input input-bordered w-full h-12 shadow-shadow_custom"
            />
          </div>
          <div className="modal-action mb-4 mr-4">
            <label
              htmlFor="my-modal-6"
              className="w-fit px-3 h-8 rounded-[20px] text-center bg-[#B6B6B6] text-white pt-0.5"
            >
              No, Thanks
            </label>
            <label
              htmlFor="my-modal-6"
              className="w-fit px-3 h-8 rounded-[20px] bg-green_custom text-center text-white pt-0.5"
            >
              Send
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
