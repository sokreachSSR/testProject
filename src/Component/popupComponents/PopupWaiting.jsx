import React from "react";

export default function PopupWaiting() {
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal-6" className="btn">
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box main-container-popup-waiting">
          <div className="flex items-center flex-col">
            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5041 37C16.2653 37.0015 13.0896 36.1038 10.3308 34.4067C7.57192 32.7097 5.33815 30.28 3.87824 27.3882C2.41833 24.4964 1.78958 21.2561 2.06201 18.028C2.33444 14.7999 3.49736 11.7108 5.42125 9.10475C7.34515 6.49867 9.95451 4.4779 12.9587 3.26747C15.963 2.05703 19.2441 1.70446 22.4369 2.24901C25.6296 2.79357 28.6085 4.21386 31.0419 6.35174C33.4753 8.48962 35.2677 11.2612 36.2194 14.3577M37 19.5V20.8462" stroke="#04AA9C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M35.9502 25.5059C34.563 29.2962 31.9104 32.4915 28.4404 34.552" stroke="#04AA9C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M26.3139 35.6543L25.0488 36.1389" stroke="#04AA9C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className="text-center mt-4">
              <h3 className="font-bold text-2xl">Please wait!</h3>
              <p className="mt-2">
                You have to wait until the company see <br />
                your request.
              </p>
            </div>
          </div>
          <div className="modal-action flex flex-col items-center">
            <label
              htmlFor="my-modal-6"
              className="w-24 h-8 rounded-[20px] bg-green_custom text-center text-white pt-0.5"
            >
              Ok
            </label>
            <a href="#" className="flex items-center text-green_custom mt-4 underline">
              Go to requested list
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3"
              >
                <g clip-path="url(#clip0_588_34127)">
                  <path
                    d="M6.08334 12.3958C5.93056 12.2431 5.85056 12.0486 5.84334 11.8125C5.83611 11.5764 5.90917 11.3819 6.0625 11.2292L10.1458 7.14583H0.833336C0.597225 7.14583 0.39917 7.06583 0.23917 6.90583C0.0791697 6.74583 -0.000552672 6.54806 2.8835e-06 6.3125C2.8835e-06 6.07639 0.080003 5.87833 0.240003 5.71833C0.400003 5.55833 0.597781 5.47861 0.833336 5.47917H10.1458L6.0625 1.39583C5.90972 1.24306 5.83667 1.04861 5.84334 0.8125C5.85 0.576389 5.93 0.381944 6.08334 0.229166C6.23611 0.0763886 6.43056 0 6.66667 0C6.90278 0 7.09723 0.0763886 7.25 0.229166L12.75 5.72917C12.8333 5.79861 12.8925 5.88556 12.9275 5.99C12.9625 6.09444 12.9797 6.20194 12.9792 6.3125C12.9792 6.42361 12.9619 6.52778 12.9275 6.625C12.8931 6.72222 12.8339 6.8125 12.75 6.89583L7.25 12.3958C7.09723 12.5486 6.90278 12.625 6.66667 12.625C6.43056 12.625 6.23611 12.5486 6.08334 12.3958Z"
                    fill="#04AA9C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_588_34127">
                    <rect width="12.9792" height="12.625" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
