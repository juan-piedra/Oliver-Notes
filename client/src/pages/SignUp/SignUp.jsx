import { Link } from "react-router-dom";
import "../SignUp/SignUp.css";

const SignUp = () => {
  return (
      <div class="signup-background-container">
        <div class="signup-container">
          <h2 class="signup-title">Sign Up</h2>
          <form>
            <div class="signup-input-group">
              <label>Username:</label>
              <input type="text" />
            </div>
            <div class="signup-input-group">
              <label>Email:</label>
              <input type="email" />
            </div>
            <div class="signup-input-group">
              <label>Password:</label>
              <input type="password" />
            </div>
            <button type="submit" class="signup-btn">
              Sign Up
            </button>
          </form>
          <Link to='/Login'>
            <p>Already have an account?</p>
          </Link>
        </div>
      </div>
  );
};

export default SignUp;
