import React from "react";
import tyimg from "../../assets/illustration-thank-you.svg";
import "./RatingSummary.css";

const RatingSummary = ({ rating }) => {
    return (
      <div className="card">
        <img src={tyimg} alt="Thank You" />
        <div className="rating-summary">
        <p class="selected-rating">You selected {rating} out of 5</p>
        <h3>Thank you!</h3>
        <p>  We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      </div>
      </div>
    );
  };
  
  export default RatingSummary;