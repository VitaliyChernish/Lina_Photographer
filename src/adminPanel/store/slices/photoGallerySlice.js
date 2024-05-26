import { createSlice } from "@reduxjs/toolkit";

const photoGallery = createSlice({
    name: 'createGallery',
    initialState: {
        galleryes: [],
    },
    reducers: {
        createGallery(state, action){
            console.log('action: ', action);
            
            state.galleryes.push({
                id: new Date().toISOString(),
                // text: action.payload,
                toggle: action.payload,
            })
        },
        deleteGallery(state, action){},
    }
})

export const {createGallery, deleteGallery} = photoGallery.actions;
export default photoGallery.reducer;