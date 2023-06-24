import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  LikeUpdate: {},
};

export const LikeUpdateSlice = createSlice({
  name: "LikeUpdateSlice",
  initialState,
  reducers: {
    setLikeUpdate: (state, action) => {
      state.LikeUpdate = action.payload;
    },
    },
});

// Action creators are generated for each case reducer function
export const { setLikeUpdate } = LikeUpdateSlice.actions;

export default LikeUpdateSlice.reducer;