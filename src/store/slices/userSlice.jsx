import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
    name: 'user',
    initialState: {
        userId: '',
        username: '',
        email: '',
        cart:[],
        addresses: [],
        orders: []
    },
    reducers: {
        changeQuantity(state, action) {
            const { imgUrl, title, price, quantity } = action.payload;
            return {
              ...state,
              cart: state.cart.map(item => {
                if (item.imgUrl === imgUrl && item.price === price) {
                  return { imgUrl, title, price, quantity };
                }
                return item;
              })
            };
          },
        removeProduct(state, action) {
            const newItems = state.cart.filter((item) => item._id !== action.payload._id);
            return { ...state, cart: newItems };
          },
        addInCart(state, action) {
            // console.log(action.payload);
            return { ...state, cart: [...state.cart, action.payload] }
      
          },
        loginUser(state, action) {
            // console.log(action.payload);
            return { ...state, userId: action.payload.user._id, username: action.payload.user.username, email: action.payload.user.email, cart: action.payload.user.cart, addresses: action.payload.user.addresses, orders: action.payload.user.orders }
        },
        addAddress(state, action) {
            return { ...state, addresses: [...state.addresses, action.payload] };
        },
        checkAuth(state, action) {

            return { ...state };
        },
        initializeUser(state, action) {

            return { ...state, ...action.payload }

        }

    }
})



export default userSlice.reducer;  //This is for going in store

export const { changeQuantity,loginUser, addAddress, checkAuth, initializeUser,addInCart,removeProduct } = userSlice.actions; //This is for fetching from any component