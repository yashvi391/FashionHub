// import { createSlice } from "@reduxjs/toolkit";
// const initialState=[];
// const cardSlice =createSlice({
//     name: "card",
//   initialState: [],
//   reducers: {
//     add: (state, action) => {
//       state.push(action.payload);
//     },
//     remove(state,action){
//       return state.filter(item=>item.id!==action.payload);
//     }
//   },
// });
// export const {add,remove} = cardSlice.actions;
// export default cardSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: [],
  reducers: {
    add: (state, action) => {
      const { id, title, price, image } = action.payload;
      const existingProduct = state.find((product) => product.id === id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ id, title, price, image, quantity: 1 });
      } 
    },
    remove: (state, action) => {
      const productId = action.payload;
      return state.filter((product) => product.id !== productId);
    },
    increment: (state, action) => {
      const productId = action.payload;
      const product = state.find((p) => p.id === productId);

      if (product) {
        product.quantity += 1;
      }
    },
    decrement: (state, action) => {
      const productId = action.payload;
      const product = state.find((p) => p.id === productId);

      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
  },
});

export const { add, remove, increment, decrement } = cardSlice.actions;
export default cardSlice.reducer;
