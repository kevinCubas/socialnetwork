import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dev.codeleap.co.uk/' }),
  tagTypes: ['Posts'],
  endpoints: () => ({}),
})