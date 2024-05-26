import { createSlice } from "@reduxjs/toolkit";

const mobileNawigate = createSlice({
    name: 'whatPageSelected',
    initialState: {
        selectedPage: window.location.pathname,
    },
    reducers: {
        selectedPage(state, action) {
            state.selectedPage = action.payload
        }
    }
})

export const { selectedPage } = mobileNawigate.actions;
export default mobileNawigate.reducer;