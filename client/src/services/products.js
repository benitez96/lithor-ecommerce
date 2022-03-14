import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (name) => `products`,
    }),
  }),
})

export const { useGetProducts } = productsApi
