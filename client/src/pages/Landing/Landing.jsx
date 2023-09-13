import "./Landing.css";

const Login = () => {
  return (
    <>
      <div class="top-half">
        <div class="image-container">
          <div class="main">
            <div class="main-container">
              <h2>Oliver Notes</h2>
              <button class="main-signup-btn">Sign Up/Login</button>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-half">
        <h3>About Us</h3>
        <p>
          Oliver Notes is a premium crowdsourcing service for college students looking to make some extra cash by selling their notes and those who want to buy notes for courses at their university.  Inspired by much-ballyhooed film director Oliver Stone ("Notes" is an anagram), students seeking to find notes will see results based on an upvote/downvote system.  Those who wish to sell their notes will upload images and then when their notes get bought, they'll get paid on Any Given Sunday.
        </p>
      </div>
    </>
  );
};

export default Login;
