import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value : []
}

export const CompanyFollowing = createSlice({
    name : "CompanyFollowing",
    initialState,
    reducers: {
        setCompanyFollow: (state,action) => {
            state.value = action.payload;
            
        },
    }
})

export const { setCompanyFollow } = CompanyFollowing.actions
export default CompanyFollowing.reducer