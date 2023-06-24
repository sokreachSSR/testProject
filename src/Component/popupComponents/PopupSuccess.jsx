import React from "react";

export default function PopupSuccess() {
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal-6" className="btn">
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box p-0 bg-[#F6F6F6] main-container-popup-success">
          <svg
            width="180"
            height="112"
            viewBox="0 0 180 112"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="90" cy="89.1433" rx="90" ry="22.8571" fill="#DBFAF7" />
            <path
              d="M0 10C0 4.47716 4.47715 0 10 0H170C175.523 0 180 4.47715 180 10V89.1429H0V10Z"
              fill="#DBFAF7"
            />
            <path
              d="M90.5002 26.583C77.896 26.583 67.5835 36.8955 67.5835 49.4997C67.5835 62.1038 77.896 72.4163 90.5002 72.4163C103.104 72.4163 113.417 62.1038 113.417 49.4997C113.417 36.8955 103.104 26.583 90.5002 26.583ZM90.5002 67.833C80.3939 67.833 72.1668 59.6059 72.1668 49.4997C72.1668 39.3934 80.3939 31.1663 90.5002 31.1663C100.606 31.1663 108.833 39.3934 108.833 49.4997C108.833 59.6059 100.606 67.833 90.5002 67.833ZM101.019 39.3705L85.9168 54.4726L79.9814 48.5601L76.7502 51.7913L85.9168 60.958L104.25 42.6247L101.019 39.3705Z"
              fill="#04AA9C"
            />
          </svg>
          <div className="flex justify-center mt-5">
            <h3 className="font-normal text-xl">Successfully</h3>
          </div>
          <div className="modal-action mb-4 flex justify-center">
            <label
              htmlFor="my-modal-6"
              className="w-32 h-8 rounded-[20px] bg-green_custom text-center text-white pt-0.5"
            >
              Continue
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
