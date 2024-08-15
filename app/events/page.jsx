import React from 'react'
import { imagesdata } from '@/data/data'
import "../events/events.scss";
function page() {
  return (
    <div className='events-sec'>
      <div className='container'>
      {imagesdata.map((element, index) => {
          return (
            <div className="single-events" key={index}>
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
      </div>
    </div>
  )
}

export default page
