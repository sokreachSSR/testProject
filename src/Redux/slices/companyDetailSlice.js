import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    company_detail : {onesignal:"",role:"company"}
}

export const companyDetailSlice = createSlice({
    name : "companyDetailSlice",
    initialState,
    reducers: {
        setCompanyDetail: (state,action) => {
            state.company_detail = action.payload;
        },
    }
})

export const { setCompanyDetail } = companyDetailSlice.actions
export default companyDetailSlice.reducer