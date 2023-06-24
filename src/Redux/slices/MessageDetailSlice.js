import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messageDetail: {},
    chatWith: {},
};


export const messageDetailSlice = createSlice({
  name: "messageDetailSlice",
  initialState,
  reducers: {
    setMessageDetail: (state,action) => {
        state.messageDetail = action.payload;
    },
    setChatWith: (state,action) => {
      state.chatWith = action.payload;
    },
  }
});

// Action creators are generated for each case reducer function
export const { setMessageDetail, setChatWith } = messageDetailSlice.actions

export default messageDetailSlice.reducer;