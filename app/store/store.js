"use client";
import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { categoriesApi } from '../services/apiSlice'

export const store = configureStore({
  reducer: {
    
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoriesApi.middleware),
})

setupListeners(store.dispatch)
export default store