import "../AddClass/AddClass.css";
import { Link, useLocation, Navigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Auth from "../../utils/Auth";

const AddClass = () => {
  let currentLocation = useLocation();

  return (
    <>
      {Auth.loggedIn() ? (
        <body>
          {(window.currentLocation = "/AddClass" ? <Navbar /> : null)}
          <div class="addClass-wrapper">
            <section class="addClass-container">
              <div class="addClass-title">
                <h2>Add a Class!</h2>
              </div>
              <form class="addClass-form">
                <select
                  class="addClass form-select"
                  aria-label="Default select example"
                >
                  <option selected>Select school</option>
                  <option value="1">School 1</option>
                  <option value="2">School 2</option>
                  <option value="3">School 3</option>
                </select>
                <div class="my-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Enter class:
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="1"
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
              <Link to="/Search">
                <p class="addClass-back-btn">Go back</p>
              </Link>
            </section>
          </div>
        </body>
      ) : (
        <Navigate replace to="/Login" />
      )}
    </>
  );
};

export default AddClass;
