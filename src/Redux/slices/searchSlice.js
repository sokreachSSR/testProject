import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        query: "",
        list: [],
    }
    
};


export const SearchSlice = createSlice({
  name: "SearchSlice",
  initialState,
  reducers: {
    setSearch: (state,action) => {
        state.value = action.payload;
    },
  }
});

export const { setSearch} = SearchSlice.actions  

export default SearchSlice.reducer;