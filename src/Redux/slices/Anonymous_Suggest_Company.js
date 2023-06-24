import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [{fullname:"Ann Zaslow-Rethaber",job:"President-Isc Jobs",job_type:"executive Search for Sales,Finance..."},{}],
};

export const Anonymous_Suggest_Company = createSlice({
  name: "Anonymous_Suggest_Company",
  initialState,
  reducers: {
    // setUser: (state,action) => {
    //     state.user = action.payload;
    // },
  }
});

// Action creators are generated for each case reducer function
// export const { setUser } = userSlice.actions

export default Anonymous_Suggest_Company.reducer;