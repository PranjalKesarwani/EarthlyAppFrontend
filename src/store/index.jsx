import { configureStore } from "@reduxjs/toolkit";
import userSlice from './slices/userSlice'
import productSlice from "./slices/productSlice";
import orderSlice from "./slices/orderSlice";


const store = configureStore({
    reducer:{
     user:userSlice,
     products:productSlice,
     order:orderSlice,
    },
});

export default store;