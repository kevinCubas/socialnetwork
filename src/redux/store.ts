import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authUserSlice from './Features/authUserSlice'
import { postsApi } from './api/apiSlice'
import modalSlice from './Features/modalSlice'
import { persistReducer, persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist';
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  [postsApi.reducerPath]: postsApi.reducer,
  authUser: authUserSlice,
  modal: modalSlice
}));


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(postsApi.middleware)
})

const persistor = persistStore(store);

export { store, persistor };

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch