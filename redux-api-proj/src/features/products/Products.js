import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsync } from "./ProductsSlice";
import { addAsync } from "../cart/CartsSlice";
import "./Products.css";

export function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(()=>{
    dispatch(fetchAsync())
  },[]);
  
  return (
    <div>
      {products.map((product) => (
        <div className="card">
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{ width: "100%" }}
          />
          <h1>{product.title}</h1>
          <p className="price">{product.price}</p>
          <p>{product.description}</p>
          <p>
            <button onClick={() => dispatch(addAsync(product))}>
              Add to Cart
            </button>
          </p>
        </div>
      ))}
    </div>
  );
}
