import { Link } from "react-router-dom";
import { useState } from "react";
import "../SignUp/SignUp.css";
import { useMutation } from "@apollo/client";
import { ADD_USER } from '../../utils/mutations';
import Auth from "../../utils/Auth";

const SignUp = () => {
  const [addUser] = useMutation(ADD_USER);
  const [formData, setFormData] = useState({
    username: '',
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
      const { data } = await addUser({
        variables: { ...formData },
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setFormData({
      username: '',
      email: '',
      password: '',
    });
  }
  
  return (
      <div className="signup-background-container">
        <div className="signup-container">
          <h2 className="signup-title">Sign Up</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="signup-input-group">
              <label>Username:</label>
              <input type="text" name="username" onChange={handleInputChange} value={formData.username} />
            </div>
            <div className="signup-input-group">
              <label>Email:</label>
              <input type="email" name="email" onChange={handleInputChange} value={formData.email} />
            </div>
            <div className="signup-input-group">
              <label>Password:</label>
              <input type="password" name="password" onChange={handleInputChange} value={formData.password} />
            </div>
            <button type="submit" className="signup-btn">
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
