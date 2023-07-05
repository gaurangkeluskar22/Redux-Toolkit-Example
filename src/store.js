import {configureStore} from '@reduxjs/toolkit';
import productDetail from './Features/productDetailSlice';
import cartDetail from './Features/cartDetailSlice';

export const store = configureStore({
    reducer :{
        app:productDetail,
        cart:cartDetail,
    }
});