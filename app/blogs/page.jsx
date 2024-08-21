'use client'

import React from "react";
import "../blogs/blogs.scss";
import { useGetAllCategoriesQuery } from "../services/apiSlice";
import { useRouter } from 'next/navigation';
// import { blogData } from "@/data/data";
function page() {
  const { data, error, isLoading } = useGetAllCategoriesQuery();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.message}</div>;
  const router = useRouter();  
  const handleClick = (id) => {
    router.push(`/detail/${id}`);
  };
  
  return (
    <div className="blog-sec">
      <div className="container">
        <h1>Blogs</h1>
        <br />
        {data.map((element, index) => {
          return (
            <div className="single-blog" key={index}>
              <button onClick={()=>handleClick(element.id)}>Read more</button>
              <img src={element.imageSrc} alt="movie" />
              <div className="blog-details">
                <div className="title-desc-details">
                  <span className="blog-title">{element.place}</span>
                  <span className="desc">{element.title}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default page;
