import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name:'order',
    initialState:{
        items:[],
        delivery_charge:0,
        delivery_address:'',
        discount_in_percent:0,
        total_items:0,
        total_cost:0,
        discounted_amount:0
    },
    reducers:{
        orderDetails(state,action){
          
            const items = action.payload;
            const total_items = items.reduce((total,item)=>{return total + (item.quantity*1)},0);
            const total_cost = items.reduce((total,item)=>{return total + (item.price*item.quantity)},0);
            const discounted_amount = total_cost + state.delivery_charge - state.discount_in_percent*total_cost/100;

            if(items.length===0){
                return {...state,items:items,total_items:0,total_cost:0,discounted_amount:0,discount_in_percent:0,delivery_charge:0} 
            }

            return {...state,items:items,total_items:total_items,total_cost:total_cost,discounted_amount:discounted_amount,discount_in_percent:10,delivery_charge:40}
        },
        setOrderAddress(state,action){
            return {...state,delivery_address:`${action.payload.address} ${action.payload.address2}, ${action.payload.city}, ${action.payload.zip}, ${action.payload.state}`};
  
        }

    }
});

export default orderSlice.reducer;

export const {orderDetails,setOrderAddress} = orderSlice.actions;


