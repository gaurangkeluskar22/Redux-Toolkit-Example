import { createSlice } from "@reduxjs/toolkit";

export const cartDetailSlice = createSlice({
  name: "cartDetail",
  initialState: {
    cart: [],
    len: 0,
  },
  reducers: {
    addProductToCart: (state, action) => {
      state.cart.push(action.payload);
      state.len = state.cart.length;
    },
    removeProductFromCart: (state,action) =>{
        if(action.payload){
            state.cart = state.cart.filter((ele)=> ele.id !== action.payload);
            state.len = state.cart.length;
        }
    }
  },
});

export default cartDetailSlice.reducer;
export const { addProductToCart, removeProductFromCart} = cartDetailSlice.actions;
