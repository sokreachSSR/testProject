import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: [],
};

export const PostSlide = createSlice({
  name: "PostSlide",
  initialState,
  reducers: {
    setPostSlide: (state, action) => {
      state.post = action.payload;
    },
    },
});

// Action creators are generated for each case reducer function
export const { setPostSlide } = PostSlide.actions;

export default PostSlide.reducer;
