import React from "react";
import "../blogs/blogs.scss";
import { blogData } from "@/data/data";
function page() {
  return (
    <div className="blog-sec">
      <div className="container">
        <h1>Blogs</h1>
        <br />
        {blogData.map((element, index) => {
          return (
            <div className="single-blog" key={index}>
              <button>Read more</button>
              <img src={element.link} alt="movie" />
              <div className="blog-details">
                <div className="title-desc-details">
                  <span className="blog-title">{element.title}</span>
                  <span className="desc">{element.description}</span>
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
