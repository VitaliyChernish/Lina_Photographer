import { createSlice } from "@reduxjs/toolkit";

const priceCard = createSlice({
    name: 'createPriceCard',
    initialState: {
        priceCards: [],
    },
    reducers: {
        createPriceCard(state, action){            
            state.priceCards.push({
                id: new Date().toISOString(),
                // text: action.payload,
                toggle: action.payload,
            })
        },
    }
})

export const {createPriceCard} = priceCard.actions;
export default priceCard.reducer;