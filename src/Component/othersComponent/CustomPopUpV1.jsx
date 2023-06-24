import React from 'react'

export default function CustomPopUpV1() {
    const popup = useSelector((state) => state.PopupSlice.value);
  return (
    <div>   
             <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal overflow-y-scroll">
        <label className=" w-auto relative" htmlFor="">
          <label
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2 z-30 bg-green_custom border-none hover:bg-hover_green_custom"
          >
            ✕
          </label>
                      
          </label>
      </div>
    </div>
  )
}
