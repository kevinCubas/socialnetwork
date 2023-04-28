import { configureStore } from '@reduxjs/toolkit'
import authUserSlice from './Features/authUserSlice'
import { postsApi } from './api/apiSlice'
import modalSlice from './Features/modalSlice'

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    authUser: authUserSlice,
    modal: modalSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch