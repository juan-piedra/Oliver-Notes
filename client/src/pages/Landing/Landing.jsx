import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <main className="landing-body">
      <div className="landing-top-half">
        <div className="landing-image-container">
          <div className="landing-main">
            <div className="landing-main-container">
              <h2>Oliver Notes</h2>
              <Link to='/Login'>
              <button className="landing-main-signup-btn">Sign Up / Login</button></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-bottom-half">
        <h3>About Us</h3>
        <p>
          Oliver Notes is a premium crowdsourcing service for college students looking to make some extra cash by selling their notes and those who want to buy notes for courses at their university.  Inspired by much-ballyhooed film director Oliver Stone ("Notes" is an anagram), students seeking to find notes will see results listed when looking down...and to the left.  Those who wish to sell their notes will upload images and then when their notes get bought, they'll get paid on Any Given Sunday.
        </p>
      </div>
    </main>
  );
};

export default Landing;
