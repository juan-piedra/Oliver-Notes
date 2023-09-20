import '../Login/Login.css'
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { LOGIN_USER } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/Auth';

const Login = () => {
  const [login] = useMutation(LOGIN_USER);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault(); 
    try {
      const { data } = await login({
        variables: { ...formData },
      });
      console.log(data);
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }

    setFormData({
      email: '',
      password: '',
    });
  }

  return (
      <div className="login-background-container">
        <div className="login-container">
          <h2 className="login-title">Login</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="login-input-group">
              <label>Email:</label>
              <input type="email" name="email" onChange={handleInputChange} value={formData.email} />
            </div>
            <div className="login-input-group">
              <label>Password:</label>
              <input type="password" name="password" onChange={handleInputChange} value={formData.password} />
            </div>
            <button type="submit" className="login-btn">
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
