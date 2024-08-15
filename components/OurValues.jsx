import React from "react";
import { ourValuesData } from "../data/data";
import "../components/ourvalues.scss";
const OurValues = () => {
  return (
    <>
    <span className="head-text">Our Values</span>
      <div className="container">
        <div className="our-values-box">
          {ourValuesData.map((element, index) => {
            return (
              <div key={index} className="details">
                <img src={element.link} alt="value" />
                <div className="title-desc">
                  <h1>{element.title}</h1>
                  <p>{element.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OurValues;