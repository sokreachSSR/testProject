import { isValid } from "date-fns";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponentBtn from "../../../../othersComponent/LoadingComponentBtn";
import { setLoading } from "../../../../../Redux/slices/LoadingSlice";

export default function BtnCancelSave(
  { change, cancel, phone, setPhone, isComponentOpen,Loading }
) {
  
  const btnOnclick = () => {
    change();
  };
  const btnCancel = () => {
    cancel();
  };
  return (
    <div className="">
      <div className="flex justify-end pt-2 border-t-2 bg-white gap-4 px-5 m-auto rounded-b-[20px]">
        <button
          className="border w-24 py-1 rounded-[20px] hover:bg-input_custom bg-gray-100 font-SecondaryFont"
          onClick={btnCancel}
        >
          Cancel
        </button>

        <button
          className="border w-24 py-1 rounded-[20px] hover:bg-hover_green_custom bg-green_custom text-white font-SecondaryFont"
          onClick={btnOnclick}
          disabled={!phone}
          type="submit"
        >
          {Loading ? <LoadingComponentBtn /> : "Save"}
        </button>
      </div>
    </div>
  );
}
