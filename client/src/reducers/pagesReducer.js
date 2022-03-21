import { createSlice } from '@reduxjs/toolkit'


export const pageSlice = createSlice({
  name: 'products',
  initialState: {
    isCheckOutPage: false,
  },
  reducers: {
    setCheckOutPage: (state, action) => {
      state.isCheckOutPage = action.payload
    },
  },
})

export const { setCheckOutPage } = pageSlice.actions
export default pageSlice.reducer
