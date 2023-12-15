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
  const [rating, setRating] = useState(null);
  const [actualRating, setActualRating] = useState(null);

  return (
    <div className="rating">
      {actualRating ? (
        <DisplayThankYou actualRating={actualRating} />
      ) : (
        <DisplayRating
          rating={rating}
          setRating={setRating}
          setActualRating={setActualRating}
        />
      )}
    </div>
  );
}

function DisplayRating({ rating, setRating, setActualRating }) {
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

      <Numbers rating={rating} setRating={setRating} />
      <button className="btn submit" onClick={() => setActualRating(rating)}>
        Submit
      </button>
    </>
  );
}

function DisplayThankYou({ actualRating }) {
  return (
    <div className="thank-you">
      <img src={ImgThankYou} alt="Thank you" />
      <span className="star-selected">
        You selected {actualRating} out of 5
      </span>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

function Numbers({ rating, setRating }) {
  return (
    <form className="numbers">
      <span
        className={`circle ${rating === 1 ? "active" : ""}`}
        onClick={() => setRating(1)}
      >
        1
      </span>
      <span
        className={`circle ${rating === 2 ? "active" : ""}`}
        onClick={() => setRating(2)}
      >
        2
      </span>
      <span
        className={`circle ${rating === 3 ? "active" : ""}`}
        onClick={() => setRating(3)}
      >
        3
      </span>
      <span
        className={`circle ${rating === 4 ? "active" : ""}`}
        onClick={() => setRating(4)}
      >
        4
      </span>
      <span
        className={`circle ${rating === 5 ? "active" : ""}`}
        onClick={() => setRating(5)}
      >
        5
      </span>
    </form>
  );
}
