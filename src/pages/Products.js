import  React, { useState, useEffect } from "react";

const Products = () =>{
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchProducts = async () =>{
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            setProducts(data);
        }
        fetchProducts();
    },[]);

    return(
        <div className="products">
            {
                products.map(product =>{
                    <div className="card" key={product.id}>
                        <img src={product.image}></img>
                    </div>
                })
            }
        </div>
    )
}

export default Products;