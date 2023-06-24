import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
};


export const CreateCompany = createSlice({
  name: "CreateCompany",
  initialState,
  reducers: {
    setPopupCreateCom: (state,action) => {
        state.value = action.payload;
    },
  }
});

// Action creators are generated for each case reducer function
export const { setPopupCreateCom } = CreateCompany.actions

export default CreateCompany.reducer;