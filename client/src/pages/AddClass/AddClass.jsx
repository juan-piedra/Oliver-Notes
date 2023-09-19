import "../AddClass/AddClass.css";
import { Link, useLocation, Navigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Auth from "../../utils/Auth";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import { QUERY_SCHOOLS, QUERY_CLASSES } from "../../utils/queries";

const AddClass = () => {
  let currentLocation = useLocation();
  const { loading, data } = useQuery(QUERY_SCHOOLS);
  const schoolData = data?.schools || [];

  return (
    <>
      {Auth.loggedIn() ? (
        <body>
          {(window.currentLocation = "/AddClass" ? <Navbar /> : null)}
          <div className="addClass-wrapper">
            <section className="addClass-container">
              <div className="addClass-title">
                <h2>Add a Class!</h2>
              </div>
              <form className="addClass-form">
                <select
                  className="addClass form-select"
                  aria-label="Default select example"
                >
                  <option selected>Select school</option>
                  {schoolData.map((school) => {
                      return (
                        <option value={school._id} key={school._id}>
                          {school.schoolName}
                        </option>
                      );
                    })}
                </select>
                <div class="my-3">
                  <label for="exampleFormControlTextarea1" className="form-label">
                    Enter class:
                  </label>
                  <input type="text" name="className"/>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
              <Link to="/Search">
                <p className="addClass-back-btn">Go back</p>
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
