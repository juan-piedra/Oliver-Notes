import { Link } from "react-router-dom";
import "../SignUp/SignUp.css";

const SignUp = () => {
  return (
    <body>
      <div class="background-container">
        <div class="login-container">
          <h2 class="login-title">Sign Up</h2>
          <form>
            <div class="input-group">
              <label>Username:</label>
              <input type="text" />
            </div>
            <div class="input-group">
              <label>Email:</label>
              <input type="email" />
            </div>
            <div class="input-group">
              <label>Password:</label>
              <input type="password" />
            </div>
            <button type="submit" class="login-btn">
              Sign Up
            </button>
          </form>
          <Link to='/Login'>
            <p>Already have an account?</p>
          </Link>
        </div>
      </div>
    </body>
  );
};

export default SignUp;
