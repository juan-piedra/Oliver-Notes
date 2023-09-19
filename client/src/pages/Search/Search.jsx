import "./Search.css";
import { Link, Navigate, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Auth from "../../utils/Auth";
import { useQuery } from "@apollo/client";
import { QUERY_SCHOOLS } from "../../utils/queries";

const Search = () => {
  let currentLocation = useLocation();
  const { loading, data } = useQuery(QUERY_SCHOOLS);
  const schoolData = data?.schools || [];
  console.log(schoolData);

  return (
    <>
      {Auth.loggedIn() ? (
        <>
          {(window.currentLocation = "/Search" ? <Navbar /> : null)}
          <main>
            <form className="search-main">
              <section className="search-left-side">
                <div className="search-container">
                  <select
                    id="schoolVal"
                    className="search form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select school</option>
                    {schoolData.map((school) => {
                      return (
                        <option value={school._id}>{school.schoolName}</option>
                      );
                    })}
                  </select>
                </div>
                <div className="search-container">
                  <select
                    id="classVal"
                    className="search form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select Name</option>
                    <option value="1">Class 1</option>
                  </select>
                </div>
                <Link to="/AddClass">
                  <button>Can't find your class?</button>
                </Link>
              </section>
              <section className="search-right-side">
                <button className="search-btn">Show Me The Notes!</button>
              </section>
            </form>
          </main>
        </>
      ) : (
        <Navigate replace to="/Login" />
      )}
    </>
  );
};

export default Search;
