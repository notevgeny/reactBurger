import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { API_URI, POSTFIX } from "../../const"

const initialState = {
  products: [],
  error: ''
}

export const fetchProducts = createAsyncThunk(
  'product/fetch',
  (category) => 
    fetch(`${API_URI}${POSTFIX}?category=${category}`)
      .then(res => res.json())
      .catch(error => ({ error }))
)

const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, state => { state.error = '' })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.error = '';
      })
      .addCase(fetchProducts.rejected, (state, action) => { state.error = action.payload.error })
  }
})

export default productSlice.reducer;
