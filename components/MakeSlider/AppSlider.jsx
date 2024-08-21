"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
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

function AppSlider() {
  return (
    <>
      <div className="parent">
        <p>Discover Events</p>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {((element, index) => {
            return (
              <div className="slider" key={index}>
                <button>Read more</button>
                <img src={element.link} alt="movie" />
                <div className="events-details">
                  <div className="name-price-details">
                    <span>{element.name}</span>
                    <span className="price">{element.price}</span>
                  </div>
                  <div className="time-location-details">
                    <span className="time">{element.time}</span>
                    &bull;
                    <span className="location">{element.location}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}

export default AppSlider;
