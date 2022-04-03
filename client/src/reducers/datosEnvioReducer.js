import { createSlice } from '@reduxjs/toolkit'


export const datosEnvioSlice = createSlice({
  name: 'datosEnvio',
  initialState: {
    shipping_data: {}

  },
  reducers: {
    updateDatosEnvio: (state, action) => ( 
      {
        ...state,
        shipping_data: action.payload
      }
    ),
  },
})

export const { updateDatosEnvio } = datosEnvioSlice.actions
export default datosEnvioSlice.reducer
