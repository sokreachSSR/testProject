import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stompClient : null,
};


export const WebSocketSlice = createSlice({
  name: "WebSocketSlice",
  initialState,
  reducers: {
    setStompClient: (state,action) => {
        state.stompClient = action.payload;
    },
  }
});

// Action creators are generated for each case reducer function
export const { setStompClient } = WebSocketSlice.actions;

export default WebSocketSlice.reducer;