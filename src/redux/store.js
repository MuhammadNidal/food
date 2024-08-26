// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Correct import of the cartReducer

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
