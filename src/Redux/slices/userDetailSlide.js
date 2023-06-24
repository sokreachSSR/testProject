import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDetail: {onesignal:"",role:null}
};


export const userDetailSlice = createSlice({
  name: "userDetailSlice",
  initialState,
  reducers: {
    setUserDetail: (state,action) => {
        state.userDetail = action.payload;
        
    },
  }
});

// Action creators are generated for each case reducer function
export const { setUserDetail }   = userDetailSlice.actions

export default userDetailSlice.reducer;