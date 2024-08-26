import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === newItem.id && item.variation === newItem.variation
      );

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += newItem.totalPrice;
      } else {
        state.items.push(newItem);
      }

      state.totalQuantity += newItem.quantity;
    },
    removeItem(state, action) {
      const index = action.payload;
      const itemToRemove = state.items[index];

      state.totalQuantity -= itemToRemove.quantity;
      state.items.splice(index, 1);
    },
    increaseQuantity(state, action) {
      const index = action.payload;
      const item = state.items[index];
      item.quantity += 1;
      item.totalPrice += item.totalPrice / (item.quantity - 1);
      state.totalQuantity += 1;
    },
    decreaseQuantity(state, action) {
      const index = action.payload;
      const item = state.items[index];

      if (item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice -= item.totalPrice / (item.quantity + 1);
        state.totalQuantity -= 1;
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, removeItem, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
