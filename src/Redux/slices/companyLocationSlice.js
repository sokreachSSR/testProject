import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    map: {},
};


export const companyLocationSlice = createSlice({
  name: "companyLocationSlice",
  initialState,
  reducers: {
    setCompanyLocation: (state,action) => {
        state.map = action.payload;
    },
  }
});

// Action creators are generated for each case reducer function
export const { setCompanyLocation } = companyLocationSlice.actions

export default companyLocationSlice.reducer;