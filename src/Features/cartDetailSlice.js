import {createSlice} from '@reduxjs/toolkit';

export const cartDetailSlice = createSlice({
    name:"cartDetail",
    initialState:{
        cart:[],
        len:0,
    },
    reducers:{
        addProductToCart:(state,action)=>{
            state.cart.push(action.payload);
        },
        findLenOfCart:(state)=>{
            state.len = state.cart.length;
        }
    }
});

export default cartDetailSlice.reducer;