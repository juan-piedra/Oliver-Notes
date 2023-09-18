import '../Login/Login.css'
import { Link, useLocation } from 'react-router-dom';

const Login = () => {
  const handleForm = (event) => {
    event.preventDefault()
    console.log(event)
  }
  return (
      <div class="login-background-container">
        <div class="login-container">
          <h2 class="login-title">Login</h2>
          <form onSubmit={handleForm}>
            <div class="login-input-group">
              <label>Email:</label>
              <input type="email" />
            </div>
            <div class="login-input-group">
              <label>Password:</label>
              <input type="login-password" />
            </div>
            <button type="submit" class="login-btn">
              Sign In
            </button>
          </form>
          <Link style={{textDecoration: 'none'}} to="/SignUp">
            <p>Don't have an account?</p>
          </Link>
        </div>
      </div>
  );
};

export default Login;
