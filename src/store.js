import {configureStore} from '@reduxjs/toolkit';
import productDetail from './Features/productDetailSlice';

export const store = configureStore({
    reducer :{
        app:productDetail,
    }
});