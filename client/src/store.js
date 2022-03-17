import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './reducers/cartReducer';
import productsReducer from './reducers/productsReducer';
import currentProductReducer from './reducers/currentProductReducer';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    currentProduct: currentProductReducer
  },
})


export default store;
