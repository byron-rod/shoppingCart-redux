import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems"

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
     const itemId = action.payload;
     state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increaseItem: (state, {payload}) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount++;
    },
    decreaseItem: (state, {payload}) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount--;
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        total += item.price * item.amount;
        amount += item.amount;
      })
      state.total = total;
      state.amount = amount;
    },
  },
});

// console.log(cartSlice);
export const { clearCart, removeItem, increaseItem, decreaseItem, calculateTotal } = cartSlice.actions;

export default cartSlice.reducer;
