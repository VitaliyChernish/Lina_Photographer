import { createSlice } from "@reduxjs/toolkit";

const calendarDataSlice = createSlice({
    name: 'calendarAdminData',
    initialState: {
        calendar: '',
    },
    reducers: {
        calendarAdminData(state, action){
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

export const {calendarAdminData, deleteGallery} = calendarDataSlice.actions;
export default calendarDataSlice.reducer;