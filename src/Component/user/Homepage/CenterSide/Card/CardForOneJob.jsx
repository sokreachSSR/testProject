import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPopup } from "../../../../../Redux/slices/PopupSlice";
import { Label } from "flowbite-react";

export default function CardForOneJob() {
  const dispatch = useDispatch();
  const [saveJob, setSaveJob] = useState(true);
  const handleSaveJob = () => {
    setSaveJob(!saveJob);
  };
  const role = useSelector((state) => state.userDetail.userDetail.role);

  return (
    <div>
      {role === "annonymous" ? (
        <label
          type="button"
          className="cursor-pointer"
          onClick={() => dispatch(setPopup("register"))}
          htmlFor="my-modal"
        >
          <svg
            width="17"
            height="23"
            viewBox="0 0 17 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.0933 1.3677C15.1939 1.51337 16 2.59554 16 3.85918V21.5287L8.5 17.2519L1 21.5287V3.85918C1 2.59554 1.80608 1.51337 2.90668 1.3677C4.74156 1.12484 6.608 1 8.5 1C10.392 1 12.2584 1.12484 14.0933 1.3677Z"
              fill={saveJob ? "none" : "#04AA9C"}
              stroke={saveJob ? "#5D6D79" : "#04AA9C"}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </label>
      ) : (
        <button type="button" className="cursor-pointer" onClick={handleSaveJob}>
          <svg
            width="17"
            height="23"
            viewBox="0 0 17 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.0933 1.3677C15.1939 1.51337 16 2.59554 16 3.85918V21.5287L8.5 17.2519L1 21.5287V3.85918C1 2.59554 1.80608 1.51337 2.90668 1.3677C4.74156 1.12484 6.608 1 8.5 1C10.392 1 12.2584 1.12484 14.0933 1.3677Z"
              fill={saveJob ? "none" : "#04AA9C"}
              stroke={saveJob ? "#5D6D79" : "#04AA9C"}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
