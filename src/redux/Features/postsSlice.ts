import { postsApi } from "../api/apiSlice";
// https://dev.codeleap.co.uk/careers/?limit=10&offset=10
export const extendedPostsSlice = postsApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<IRequesPost, number>({
      query: (amount) => `careers/?limit=${amount}`,
    }),
  }),
  overrideExisting: false,
})

export const { useGetPostsQuery } = extendedPostsSlice