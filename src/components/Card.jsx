import { useState } from "react";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import { reviews } from "../utils/Data";

const Card = () => {
  const [index, setIndex] = useState(0);
  const { name, text, image, job } = reviews[index];

  const checkIndex = (newIndex) => {
    if (newIndex > reviews.length - 1) {
      return 0;
    } else if (newIndex < 0) {
      return reviews.length - 1;
    }

    return newIndex;
  };

  const handleNextCard = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const handlePrevCard = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  return (
    <div className="card-container">
      <div className="card-box">
        <div className="card-image">
          <img src={image} alt={name} />
        </div>
        <div className="card-details">
          <h4>{name}</h4>
          <p className="job-title">{job}</p>
          <p className="review-text">{text}</p>
        </div>
        <div className="slider-icon">
          <HiArrowSmallLeft className="prev-card" onClick={handlePrevCard} />
          <HiArrowSmallRight className="next-card" onClick={handleNextCard} />
        </div>
      </div>
    </div>
  );
};

export default Card;
