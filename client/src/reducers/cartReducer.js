import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    items: 0,
    totalAmount: 0,
  },
  reducers: {
    cleanUp: (state) => {
      state.products = []
      state.items = 0
      state.totalAmount = 0
    },
    addItem: (state, action) => { 

      const index = state.products.findIndex(product => product.id === action.payload.id)
      let products = null;
      if (index !== -1){
        products = state.products.map((p, i) => i === index ? {...p, quantity: p.quantity + action.payload.quantity} : p)
      }else{
        products = [...state.products, action.payload]
      }

      return {
        ...state,
        products,
        totalAmount: Math.round(
          (products.reduce(
                    (a, b) => a + (b['quantity'] * b['price'] || 0), 0)) * 100) / 100,
        items: state.items + action.payload.quantity
      }
     },
    removeItem: (state, action) => (
      {
        ...state,
        products: state.products.filter(product => product.id !== action.payload.id),
        totalAmount: Math.round((state.totalAmount - action.payload.price * action.payload.quantity) * 100) / 100,
        items: state.items - action.payload.quantity
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
        totalAmount: Math.round((state.totalAmount - action.payload.price) * 100) / 100,
        items: state.items - 1
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
        totalAmount: Math.round((state.totalAmount + action.payload.price) * 100) / 100,
        items: state.items + 1
      }
    ),
  },
})

export const { addItem, removeItem, decreaseByOne, increaseByOne, cleanUp } = cartSlice.actions
export default cartSlice.reducer
