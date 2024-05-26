import { configureStore } from "@reduxjs/toolkit";
import photoGalleryReducer from "./slices/photoGallerySlice";
import priceCardsReducer from './slices/priceCardSlice'
import swipeSideReducer from './slices/swipeSideSlice'
import selectedPageReducer from './slices/mobileNavigationSlice'
import calendarDataSlice from "./slices/calendarDataSlice";
import freeDataSlice from "./slices/freeDataSlice";

export const store = configureStore({
    reducer: {
        photoGallery: photoGalleryReducer,
        priceCards: priceCardsReducer,
        side: swipeSideReducer,
        selectedPage: selectedPageReducer,
        calendarAdminData: calendarDataSlice,
        freeData: freeDataSlice,
    },
})