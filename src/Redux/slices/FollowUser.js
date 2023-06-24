import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value : {},
};

export const FollowUser = createSlice({
  name: "FollowUser",
  initialState,
  reducers: {
    setFollowUser: (state, action) => {
      state.value = action.payload;
    },
    },
});

// Action creators are generated for each case reducer function
export const { setFollowUser } = FollowUser.actions;

export default FollowUser.reducer;
