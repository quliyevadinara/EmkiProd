"use client";
// services/apiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://emki-app-c841c0ee2e8c.herokuapp.com/"}),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => `announcement-translations`,
    }),
    getAllCategoriesById: builder.query({
      query: (id) => `announcement-translations/${id}`,
    }),
    deleteCategoriesById: builder.mutation({
    query:(id)=>({

        url:`announcement-translations/${id}`,
        method:"DELETE",
    }),
    }),
    postCategory:builder.mutation({
        query:(payload)=>({
            url:`announcement-translations`,
            method:"POST",
            body:payload,
            headers:{
                "Content-Type":"application/json"
            }
           
        })
    }),
    putCategory:builder.mutation({
        query:(id,payload)=>({
            url:`announcement-translations/${id}`,
            method:"PUT",
            body:payload,
            headers:{
                "Content-Type":"application/json"
            }
           
        })
    })
  }),
});
export const {usePutCategoryMutation,usePostCategoryMutation, useGetAllCategoriesByIdQuery, useGetAllCategoriesQuery,useDeleteCategoriesByIdMutation } =
  categoriesApi;
