import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (payload, { rejectWithValue }) => {
    const response = await fetch('http://localhost:8000/api/products')
    // const response = await fetch('http://192.168.1.63:8000/api/products')
    const data = await response.json()
    return data
  }
)


export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    status: null,
    products: [],
  },
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.products = action.payload
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = 'failed'
    },
  },
})

export default productsSlice.reducer
