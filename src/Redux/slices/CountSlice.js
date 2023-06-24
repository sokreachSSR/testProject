import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const CreateCount = createSlice({
  name: "CreateCount",
  initialState,
  reducers: {
    setCreateCount: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCreateCount } = CreateCount.actions;

export default CreateCount.reducer;
