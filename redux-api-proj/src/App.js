import React, { useState,useEffect } from 'react';
import {Products} from './features/products/Products';
import { Cart } from './features/cart/Carts';
import { useSelector,useDispatch } from 'react-redux';
import { CfetchAsync } from './features/cart/CartsSlice';
import './App.css';

function App() {

  const [showCart,setShowCart] = useState(false);
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(CfetchAsync());
  },[]);

    return (
    <div className="App">
      <button onClick={()=>setShowCart(!showCart)}>Cart [{items.length}]</button>
      { showCart ? <Cart></Cart> : <Products></Products> }      
    </div>
  );
}

export default App;
