import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  realTimeComment: {},
};

export const commentOnRealTimeSlice = createSlice({
  name: "commentOnRealTimeSlice",
  initialState,
  reducers: {
    setRealTimeComment: (state, action) => {
      state.realTimeComment = action.payload;
    },
    },
});

// Action creators are generated for each case reducer function
export const { setRealTimeComment } = commentOnRealTimeSlice.actions;

export default commentOnRealTimeSlice.reducer;