import { createSlice } from "@reduxjs/toolkit";

const freeData = createSlice({
    name: 'toggleFreeData',
    initialState: {
        calendar: '',
    },
    reducers: {
        toggleFreeData(state, action){
            state.calendar = action.payload

            // state.calendar.push({
            //     id: new Date().toISOString(),
            //     // text: action.payload,
            //     data: action.payload,
            // })
        },
        deleteGallery(state, action){},
    }
})

export const {toggleFreeData, deleteGallery} = freeData.actions;
export default freeData.reducer;