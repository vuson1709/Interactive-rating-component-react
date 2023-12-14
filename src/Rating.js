/*
- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating
 */
import IconStar from "./images/icon-star.svg";
import ImgThankYou from "./images/illustration-thank-you.svg";

export default function Rating() {
  return (
    <div className="rating">
      {/* <DisplayRating /> */}
      <DisplayThankYou />
    </div>
  );
}

function DisplayRating() {
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

      <Numbers />
      <button className="btn submit">Submit</button>
    </>
  );
}

function DisplayThankYou() {
  return (
    <div className="thank-you">
      <img src={ImgThankYou} alt="Thank you" />
      <span className="star-selected">You selected [X] out of 5</span>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

function Numbers() {
  return (
    <div className="numbers">
      <span className="circle">1</span>
      <span className="circle">2</span>
      <span className="circle">3</span>
      <span className="circle">4</span>
      <span className="circle">5</span>
    </div>
  );
}
