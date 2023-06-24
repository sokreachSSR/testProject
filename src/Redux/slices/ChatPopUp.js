import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
};


export const ChatPopUp = createSlice({
  name: "ChatPopUp",
  initialState,
  reducers: {
    setChatPopUp: (state,action) => {
        state.value = action.payload;
    },
  }
});

// Action creators are generated for each case reducer function
export const { setChatPopUp } = ChatPopUp.actions

export default ChatPopUp.reducer;