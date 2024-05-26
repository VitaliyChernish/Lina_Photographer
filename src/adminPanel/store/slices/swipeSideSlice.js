import { createSlice } from "@reduxjs/toolkit";

const swipeSide = createSlice({
    name: 'choiceSide',
    initialState: {
        side: '',
    },
    reducers: {
        whatSide(state, action) {
            state.side = action.payload
        }
    }
})

export const { whatSide } = swipeSide.actions;
export default swipeSide.reducer;