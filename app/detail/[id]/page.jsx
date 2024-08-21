"use client"
import { useGetAllCategoriesByIdQuery } from '@/app/services/apiSlice';
import React from 'react'

function page({params}) {
    const { id } = params; // URL parametresi
  const { data: blog, error, isLoading } = useGetAllCategoriesByIdQuery(id)
  console.log(blog);
  console.log(id);
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.message}</div>;
  return (
    <div>
      
    </div>
  )
}

export default page
