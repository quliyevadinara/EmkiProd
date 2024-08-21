'use client'
import React from "react";
import "./aboutUs.scss";
import VerticalCarousel from "@/components/VerticalCarousel";
import AppBar from '../../components/AppBar.jsx'

function page() {
  return (
    <>
      <main>
        <section id="heroAbout">
          <div className="aboutUsContainer">
            <div>
              <h1>Unleash Your Event's Potential:</h1>
              <p>Elevate Your Streaming with Our Expertise!</p>
              <span>
                Show your event to the world through any platform. We are
                leaders in streaming and broadcast services for events, offering
                consulting services and development of complete systems for our
                clients in event broadcasting.
              </span>
            </div>
            <video
              className="aboutVideo"
              controls
              autoPlay
              src="/public/videos/aboutVideo.c897207ee41f2c003ee5.mp4"
            ></video>
          </div>
        </section>
  
        <section>
          
        </section>
      </main>
    </>
  );
}

export default page;
