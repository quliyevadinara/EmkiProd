import React from "react";
import "../home/home.scss";
import OurValues from "@/components/OurValues";
import Slider from "@/components/Slider";
import VerticalCarousel from "@/components/VerticalCarousel";
function page() {
  return (
    <div>
      <div className="home-page">
        <div className="home-page-events">
          <div className="home-page-events-title">
            <h1>Elevate Your Concert Experience</h1>
            <span>
              Welcome to the ultimate destination for music enthusiasts and
              concert-goers! At EMKI Production, we're passionate about bringing
              you the very best in live music experiences. Whether you're a
              die-hard fan or a casual listener, we've got something special in
              store for you.
            </span>
          </div>
          <div className="slider-container">
            <VerticalCarousel />
          </div>
        </div>
        <div className="discover-events">
          <Slider />
        </div>
        <section id="ourvaluesSec">
          <div className="our-values-container">
            <OurValues />
          </div>
        </section>
      </div>
    </div>
  );
}

export default page;
