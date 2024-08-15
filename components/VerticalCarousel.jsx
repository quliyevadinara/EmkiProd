"use client";
import React from "react";
import Slider from "react-slick";
import { imagesdata } from "@/data/data";
import "../components/verticalcarousel.scss";
const VerticalCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true, 
    autoplay: true,
    autoplaySpeed: 2000,
    verticalSwiping: true,
    cssEase: "linear",
  };
  const reverseSettings = {
    ...settings,
    rtl: true,
  };
  const firstSlide = imagesdata.slice(0, 3);
  const secondSlide = imagesdata.slice(3, 6);
  const thirdSlide = imagesdata.slice(6, 9);

  return (
    <div className="slider-components">
      <Slider {...settings}>
        {
            firstSlide.map((image) => (
                <div key={image.id}>
                <img src={image.link} alt="carousel" />
                </div>
            ))
        }
      </Slider>
      <Slider {...reverseSettings}>
        {
            secondSlide.map((image) => (
                <div key={image.id}>
                <img src={image.link} alt="carousel" />
                </div>
            ))
        }
      </Slider>
      <Slider {...settings}>
        {
            thirdSlide.map((image) => (
                <div key={image.id}>
                <img src={image.link} alt="carousel" />
                </div>
            ))
        }
      </Slider>
    </div>
  );
}

export default VerticalCarousel;
