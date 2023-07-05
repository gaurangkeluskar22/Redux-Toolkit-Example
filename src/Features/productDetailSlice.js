import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk(
    "fetchData",
    async (data,{rejectWithValue})=>{
        const response = await fetch('https://fakestoreapi.com/products');
        try{
            const data = response.json();
            return data;
        }
        catch(error){
            return rejectWithValue(error);
        }
    }
);

export const productDetailSlice = createSlice({
    name:"productDetail",
    initialState:{
        products:[],
        loading:false,
        error:null,
    },
    extraReducers:{
        [fetchData.pending]:(state)=>{
            state.loading=true;
        },
        [fetchData.fulfilled]:(state,action)=>{
            state.products = action.payload;
            state.loading = false;
        },
        [fetchData.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        },
    },
});



export default productDetailSlice.reducer;
