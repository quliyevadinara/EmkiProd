"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { blogData } from "..//data/data";
import "../components/blogSlider.scss";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
};

const BlogsSlider = () => {
  return (
    <div className="parent">
      <p>Blogs</p>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {blogData.map((element, index) => {
          return (
            <div className="slider" key={index}>
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
      </Carousel>
    </div>
  );
};
export default BlogsSlider;
