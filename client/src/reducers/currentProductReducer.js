import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProductById = createAsyncThunk(
  'product/fetchProductById',
  async (payload, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:8000/api/products/${payload.id}`)
    // const response = await fetch(`http://192.168.1.63:8000/api/products/${payload.id}`)
    const data = await response.json()
    return data
  }
)


export const currentProductSlice = createSlice({
  name: 'currentProduct',
  initialState: {
    status: null,
    product: null,
  },
  reducers: {
    setProduct: (state, action) => (
      {
        ...state,
        status : 'succeeded',
        product: action.payload
      }
    ),
    cleanProduct: (state) => (
      {
        ...state,
        status: 'loading',
        product: null
      }
    )
  },
  extraReducers: {
    [fetchProductById.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchProductById.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.product = action.payload
    },
    [fetchProductById.rejected]: (state, action) => {
      state.status = 'failed'
    },
  },
})

export const { setProduct, cleanProduct } = currentProductSlice.actions
export default currentProductSlice.reducer
