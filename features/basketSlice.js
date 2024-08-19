import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cannot remove product (name: ${action.payload.name}) as it's not in the basket!`
        );
      }
      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

/* export const selectBasketItemsWithId = (state, name) =>
  state.basket.items.filter((item) => item.name === name); */

/* returns an array of items with specific ID */
export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => item.id === id);

/* accumalates total value of selected basket */
export const selectBasketTotal = (state) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);

export default basketSlice.reducer;
