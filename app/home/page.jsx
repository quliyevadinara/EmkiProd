import React from "react";
import "../home/home.scss";
import OurValues from "@/components/OurValues";
import Slider from "@/components/Slider";
import VerticalCarousel from "@/components/VerticalCarousel";
import BlogsSlider from "@/components/BlogsSlider";
import { GrFormNextLink } from "react-icons/gr";

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
            <br />
            <button>
              <span>Events</span>{" "}
              <span className="icon">
                <GrFormNextLink />
              </span>
            </button>
          </div>
          <div className="slider-container">
            <VerticalCarousel />
          </div>
        </div>
        <section id="discover-sec">
          <div className="discover-events">
            <Slider />
          </div>
        </section>

        <section id="ourvaluesSec">
          <div className="our-values-container">
            <OurValues />
          </div>
        </section>
        <section id="blogs-sec">
          <div className="blogs">
            <BlogsSlider />
          </div>
        </section>
        <section id="heroSponsors">
          <div className="sponsorsContainer">
            <div className="sponsorsAbout">
              <h1>Have A Project?</h1>
              {/* shbdshbhssss push etmek ucun yoxlayirdim*/}
              <p>
                Show your event to the world through any platform. We are
                leaders in streaming and broadcast services for events, offering
                consulting services and development of complete systems for our
                clients in event broadcasting.Show your event to the world
                through any platform. We are leaders in streaming and broadcast
                services for events, offering consulting services and
                development of complete systems for our clients in event
                broadcasting.
              </p>
            </div>
            <div className="sponsorsImg">
              <img
                src="https://emkistorage.blob.core.windows.net/web/Untitled%20design%20(2)20231021064958090.png"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default page;
