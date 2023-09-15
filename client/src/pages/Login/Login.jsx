import '../Login/Login.css'

const Login = () => {
  return (
    <body>
      <div class="background-container">
        <div class="login-container">
          <h2 class="login-title">Login</h2>
          <form>
            <div class="input-group">
              <label>Email:</label>
              <input type="email" />
            </div>
            <div class="input-group">
              <label>Password:</label>
              <input type="password" />
            </div>
            <button type="submit" class="login-btn">
              Sign In
            </button>
          </form>
          <p>Don't have an account?</p>
        </div>
      </div>
    </body>
  );
};

export default Login;
