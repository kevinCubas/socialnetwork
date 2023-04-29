import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.ts'
import { extendedPostsSlice } from './redux/Features/postsSlice.ts'
import { RouterProvider } from 'react-router-dom';
import { router } from "./router/index.tsx";
import { PersistGate } from 'redux-persist/integration/react'
import { Toasts } from './components/Toasts/index.tsx'

store.dispatch(extendedPostsSlice.endpoints.getPosts.initiate(10))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Toasts />
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
