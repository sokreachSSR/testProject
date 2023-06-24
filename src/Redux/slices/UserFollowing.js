import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value : []
}

export const UserFollowing = createSlice({
    name : "UserFollowing",
    initialState,
    reducers: {
        setUserFollow: (state,action) => {
            state.value = action.payload;
            
        },
    }
})

export const { setUserFollow } = UserFollowing.actions
export default UserFollowing.reducer