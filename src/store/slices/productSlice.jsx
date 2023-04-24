import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: []
    },
    reducers: {
        getProducts(state,action){
      
            return {...state,products:action.payload}
        }
    }
})

export default productSlice.reducer;  //This is for going in store

export const { getProducts } = productSlice.actions; //This is for fetching from any component
