/*
- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating
 */
import { useState } from "react";
import IconStar from "./images/icon-star.svg";
import ImgThankYou from "./images/illustration-thank-you.svg";

export default function Rating() {
  const [tempRating, setTempRating] = useState(null);
  const [rating, setRating] = useState(null);

  function handleTempRating(i) {
    setTempRating(i);
  }

  function handleRating() {
    setRating(tempRating);
  }

  return (
    <div className="rating">
      {rating ? (
        <DisplayThankYou rating={rating} />
      ) : (
        <DisplayRating
          tempRating={tempRating}
          onTempRating={handleTempRating}
          onRating={handleRating}
        />
      )}
    </div>
  );
}

function DisplayRating({ onTempRating, tempRating, onRating }) {
  return (
    <>
      <div className="circle">
        <img src={IconStar} alt="Icon Star" className="icon-star" />
      </div>
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <RatingNumbers
        onTempRating={onTempRating}
        tempRating={tempRating}
        onRating={onRating}
      />
    </>
  );
}

function DisplayThankYou({ rating }) {
  return (
    <div className="thank-you">
      <img src={ImgThankYou} alt="Thank you" />
      <span className="star-selected">You selected {rating} out of 5</span>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

function RatingNumbers({ onTempRating, tempRating, onRating }) {
  return (
    <>
      <div className="numbers">
        {Array.from({ length: 5 }, (_, i) => (
          <span
            className={`circle ${tempRating === i + 1 ? "active" : ""}`}
            onClick={() => onTempRating(i + 1)}
            key={i}
          >
            {i + 1}
          </span>
        ))}
      </div>
      <button className="btn submit" onClick={onRating}>
        Submit
      </button>
    </>
  );
}
