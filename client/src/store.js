import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './reducers/cartReducer';
import productsReducer from './reducers/productsReducer';
import currentProductReducer from './reducers/currentProductReducer';
import pagesReducer from './reducers/pagesReducer';
import datosEnvioSlice from './reducers/datosEnvioReducer';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    currentProduct: currentProductReducer,
    pages: pagesReducer,
    datosEnvio: datosEnvioSlice
  },
})


export default store;
