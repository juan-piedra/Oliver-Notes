import "./Search.css";
import { Link, useLocation } from 'react-router-dom';

const Search = () => {
  return (
      <>
        <nav class="nav">
          <div class="nav-title">
            <h1>Oliver Notes</h1>
            <p> / Search</p>
          </div>
          <div class="user-items">
            <ul>
              <li>My Notes</li>
              <li>Log Out</li>
            </ul>
          </div>
        </nav>
        <main class="search-main">
          <section class="search-left-side">
            <div class="search-container">
              <select
                id="schoolVal"
                class="search form-select"
                aria-label="Default select example"
              >
                <option selected>Select school</option>
                <option value="1">School 1</option>
                <option value="2">School 2</option>
                <option value="3">School 3</option>
              </select>
            </div>
            <div class="search-container">
              <select
                id="classVal"
                class="search form-select"
                aria-label="Default select example"
              >
                <option selected>Select class</option>
                <option value="1">Class 1</option>
                <option value="2">Class 2</option>
                <option value="3">Class 3</option>
              </select>
            </div>
            <Link to='/AddClass'><button>Can't find your class?</button></Link>
          </section>
          <section class="search-right-side">
            <button class="search-btn">Show Me The Notes!</button>
          </section>
        </main>
      </>
  );
};

export default Search;
