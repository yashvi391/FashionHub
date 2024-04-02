import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cardSlice";
import productSlice from "./productSlice";


const store=configureStore({
    reducer:{
        cart:cardSlice,
        products:productSlice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['products/addProduct'], // Ignore the addProduct action
        ignoredPaths: ['payload.image'], // Ignore the image property in the payload
      },
    }),
})
export default store;