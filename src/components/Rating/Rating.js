import React, { useState } from "react";
import logo from "../../assets/icon-star.svg";
import "./Rating.css";
import RatingSummary from "../RatingSummary/RatingSummary";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleClick = (e) => {
    const ratingValue = parseInt(e.target.innerText);
    setRating(ratingValue);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <>
      {submitted ? (
        <RatingSummary rating={rating} />
      ) : (
        <div className="card">
          <div className="logo-container">
            <img className="logo-img" src={logo} alt="star logo" />
          </div>
          <div className="card-body">
            <div className="text">
              <h2>How did we do?</h2>
              <p>
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
            </div>
            <div className="rating-btns">
              {[1, 2, 3, 4, 5].map((num) => (
                <button className="btn" onClick={handleClick} key={num}>
                  {num}
                </button>
              ))}
            </div>
            <div className="submit">
              <button className="btn" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Rating;