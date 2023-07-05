import React, { useState, useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux';
import { fetchData } from "../Features/productDetailSlice";
import  {addProductToCart,findLenOfCart} from '../Features/cartDetailSlice';

const Products = () => {
  const { products, loading } = useSelector((state) => state.app);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="products">
      {loading == true ? (
        <h1 className="text-center mt-5">Loading</h1>
      ) : (
        products.map((product) => {
          return (
            <div className="card mx-auto w-50 m-2" key={product.id}>
              <img
                className="p-2 mx-auto"
                src={product.image}
                style={{ width: 100 }}
              ></img>
              <button className="btn btn-primary w-50 mx-auto" onClick={()=>dispatch(addProductToCart(product))}>
                Add to Cart
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Products;
