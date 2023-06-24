import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

export const CreateKey = createSlice({
  name: "CreateKey",
  initialState,
  reducers: {
    setCreateKey: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCreateKey } = CreateKey.actions;

export default CreateKey.reducer;
