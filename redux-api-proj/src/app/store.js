import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/ProductsSlice';
import  cartReducer  from '../features/cart/CartsSlice';


export const store = configureStore({
  reducer: {
    product: productsReducer,
    cart: cartReducer
  },
});
