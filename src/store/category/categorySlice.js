import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URI, POSTFIX } from "../../const";

const initialState = {
  category: [],
  error: '',
  activeCategory: 0,
};

export const fetchNavCategories = createAsyncThunk(
  'category/fetch',
  async () => {
    try {
      const res = await fetch(`${API_URI}${POSTFIX}/category`);
      return await res.json();
    } catch (error) {
      return ({ error });
    }
  })

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    changeCategory(state, action){
      state.activeCategory = action.payload.indexCategory
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNavCategories.pending, state => { state.error = '' })
      .addCase(fetchNavCategories.fulfilled, (state, action) => {
        state.category = action.payload;
        state.error = '';
      })
      .addCase(fetchNavCategories.rejected, (state, action) => { state.error = action.payload.error })
  }
})

export const { changeCategory } = categorySlice.actions;
export default categorySlice.reducer;