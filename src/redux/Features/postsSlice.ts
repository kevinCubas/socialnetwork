import { handleAddToast } from "../../util/handleAddToast";
import { postsApi } from "../api/apiSlice";
type updatePostType = {
  id: number;
  body: {
    title: string;
    content: string;
  }
}

// https://dev.codeleap.co.uk/careers/?limit=10&offset=10
export const extendedPostsSlice = postsApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<IRequesPost, number>({
      query: (amount) => `careers/?limit=${amount}`,
      providesTags: (data) =>
        // is data available?
        data
          ? // successful query
            [
              ...data.results.map(({ id }) => ({ type: 'Posts', id } as const)),
              { type: 'Posts', id: 'LIST' },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
            [{ type: 'Posts', id: 'LIST' }],
    }),
    addPost: builder.mutation({
      query: (post) => ({
        url: "careers/",
        method: "POST",
        body: post,
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          handleAddToast({ message: "Post Created", type: "success" });
        } catch (error: unknown) {
          if(error instanceof Error) {
            handleAddToast({ message: error.message, type: "error" });
          }
        }
      }
    }),
    editPost: builder.mutation({
      query: ({ id, body }: updatePostType) => ({
        url: `careers/${id}/`,
        method: "PATCH",
        body
      }),
      invalidatesTags: (_result, _error, arg) => [{ type: 'Posts', id: arg.id }],
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          handleAddToast({ message: "Post Updated", type: "success" });
        } catch (error: unknown) {
          if(error instanceof Error) {
            handleAddToast({ message: error.message, type: "error" });
          }
        }
      }
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `careers/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          handleAddToast({ message: "Deleted post", type: "success" });
        } catch (error: unknown) {
          if(error instanceof Error) {
            handleAddToast({ message: error.message, type: "error" });
          }
        }
      }
    })
  }),
  overrideExisting: false,
})

export const { useGetPostsQuery, 
  useAddPostMutation, 
  useDeletePostMutation,
  useEditPostMutation } = extendedPostsSlice
