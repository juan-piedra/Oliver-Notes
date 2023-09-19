import "./Search.css";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Auth from "../../utils/Auth";
import { useQuery, useLazyQuery } from "@apollo/client";
import { QUERY_SCHOOLS, QUERY_CLASSES } from "../../utils/queries";
import { useEffect, useState } from "react";

const Search = () => {
  let currentLocation = useLocation();
  const { loading, data } = useQuery(QUERY_SCHOOLS);
  const schoolData = data?.schools || [];
  console.log(schoolData);
  const [formData, setFormData] = useState({ SchoolId: '', classId: '' });
  const [classOptions, setClassOptions] = useState([]);

  let navigate = useNavigate();

  // Move the useLazyQuery outside of the Hello function
  const [loadClass, { called, loading: classLoading, data: classData }] = useLazyQuery(
    QUERY_CLASSES,
    { variables: { SchoolId: formData.SchoolId } }
  );

  useEffect(() => {
    console.log("///", classData);

    if (classData?.Classes) {
      setClassOptions(classData.Classes.classes);
    }
  }, [classData]);

  useEffect(() => {
    console.log(formData.SchoolId);
    loadClass({ variables: { schoolId: formData.SchoolId } });
  }, [formData.SchoolId]);

  const handleInputChange = async (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (name === "SchoolId") {
      // Removed the Hello function, and instead, call loadClass directly here
      console.log(value);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (formData.classId) {
      navigate(`/Notes/${formData.classId}`);
    } else {
      console.error("Please select a class.");
    }
    setFormData({
      SchoolId: '',
      classId: ''
    });
  };

  return (
    <>
      {Auth.loggedIn() ? (
        <>
          {(window.currentLocation = "/Search" ? <Navbar /> : null)}
          <main>

            <form className="search-main" onSubmit={handleFormSubmit}>

              <section className="search-left-side">
                <div className="search-container">
                  <select
                    id="schoolVal"
                    className="search form-select"
                    aria-label="Default select example"

                    onChange={handleInputChange}
                    name="SchoolId"
                    value={formData.SchoolId}
                  >
                    <option value="" selected>
                      Select school
                    </option>
                    {schoolData.map((school) => {
                      return (
                        <option value={school._id} key={school._id}>
                          {school.schoolName}
                        </option>

                  
                      );
                    })}
                  </select>
                </div>
                <div className="search-container">
                  <select
                    id="classVal"
                    className="search form-select"
                    aria-label="Default select example"

                    onChange={handleInputChange}
                    name="classId"
                    value={formData.classId}
                  >
                    <option value="" selected>
                      Select Class Name
                    </option>
                    {classOptions.map((classItem) => (
                      <option value={classItem._id} key={classItem._id}>
                        {classItem.className}
                      </option>
                    ))}

            
                  </select>
                </div>
                <Link to="/AddClass">
                  <button>Can't find your class?</button>
                </Link>
              </section>
              <section className="search-right-side">

                <button className="search-btn" type="submit">
                  Show Me The Notes!
                </button>

             
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
