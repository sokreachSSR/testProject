import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {}
};

export const PopupJobAnnoumentDetail = createSlice({
  name: "PopupJobAnnoumentDetail",
  initialState,
  reducers: {
    setPopupJobAnnoumentDetail: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPopupJobAnnoumentDetail } = PopupJobAnnoumentDetail.actions;

export default PopupJobAnnoumentDetail.reducer;
