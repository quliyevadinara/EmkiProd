"use client";
import React from "react";
// import { imagesdata } from "@/data/data";
import "../events/events.scss";
import { useGetAllCategoriesQuery, useGetPostsQuery } from "../services/apiSlice";
function page() {

  const { data, error, isLoading } = useGetAllCategoriesQuery();
  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.message}</div>;
  return (
    
    <div className="events-sec">
      <div className="container">
        <h1>Events</h1> <br />
        {data?.map((element, index) => {
          return (
            <div className="single-events" key={index}>
              <button>Read more</button>
              <img src={element.imageSrc} alt="movie" />
              <div className="events-details">
                <div className="name-price-details">
                  <span>{element.artistName}</span>
                  <span className="price">{element.price}</span>
                </div>
                <div className="time-location-details">
                  <span className="time">{element.time}</span>
                  &bull;
                  <span className="location">{element.place}</span>
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
