import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    totalAmount: 0,
  },
  reducers: {
    addItem: (state, action) => ( 
      {
        ...state,
        products: [...state.products, action.payload],
        totalAmount: state.totalAmount + action.payload.price
      }
     ),
    removeItem: (state, action) => (
      {
        ...state,
        products: state.products.filter(product => product.id !== action.payload.id),
        totalAmount: state.totalAmount - action.payload.price
      }
    ),
    decreaseByOne: (state, action) => (
      {
        ...state,
        products: state.products.map(product => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: product.quantity - 1
            }
          }
          return product
        }),
        totalAmount: state.totalAmount - action.payload.price
      }
    ),
    increaseByOne: (state, action) => (
      {
        ...state,
        products: state.products.map(product => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: product.quantity + 1
            }
          }
          return product
        }),
        totalAmount: state.totalAmount + action.payload.price
      }
    ),
  },
})

export const { addItem, removeItem, decreaseByOne, increaseByOne } = cartSlice.actions
export default cartSlice.reducer
