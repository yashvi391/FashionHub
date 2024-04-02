import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import StatusCode from "../utils/StatusCode";
// const initialState ={
//     data:[],
//     status:StatusCode.IDLE
// }

const initialState = {
  data: [],
  status: StatusCode.IDLE,
  products: [],
}

const productSlice =createSlice({
  name: "products",
  initialState, 
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload); // Assuming payload contains the new product
      // state.data.push({
      //   ...action.payload,
      //   image: 'IGNORE_FILE' // Marking the image property as 'IGNORE_FILE'
      // });
    },
    // fetchProducts(state,action){
    //     state.data=action.payload;
    // }
  },
  
  extraReducers: (builder) =>{
    builder
    .addCase(getProducts.pending,(state,action)=>{
        state.status=StatusCode.LOADING;
    })
    .addCase(getProducts.fulfilled,(state,action)=>{
        state.data=action.payload;
        state.status=StatusCode.IDLE
    })
    .addCase(getProducts.rejected,(state,action)=>{
        state.status=StatusCode.ERROR
    })
  }
});

export const { addProduct } = productSlice.actions;
export const selectProducts = (state) => state.products;
export const {fetchProducts} = productSlice.actions;
export default productSlice.reducer;

// export const getProducts =createAsyncThunk('products/get',async()=>{
//     // const data = await fetch('https://fakestoreapi.com/products')
//     const data = await fetch('http://localhost:8081/products')
//     const result=data.json();
//     return result;
// })


// export const getProducts = createAsyncThunk('fetchproduct/get', async () => {
  export const getProducts = createAsyncThunk('products/getProducts', async () => {
  try {
    const response = await fetch('http://localhost:8081/fetchproduct');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; // Rethrow the error so that it can be caught by the rejected action
  }
});


// export function getProducts(){
//     return async function getProductsThunk(dispatch,getState){
//        const data = await fetch('https://fakestoreapi.com/products')
//        const result=data.json();
//        dispatch(fetchProducts(result));
//     }
// }