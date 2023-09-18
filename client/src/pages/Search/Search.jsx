import "./Search.css";

const Search = () => {
  return (
      <>
        <nav class="nav">
          <div class="title">
            <h1>Oliver Notes</h1>
          </div>
          <div class="user-items">
            <ul>
              <li>1</li>
            </ul>
          </div>
        </nav>
        <main class="search-main">
          <section class="search-left-side">
            <div class="search-container">
              <select
                id="schoolVal"
                class="form-select"
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
                class="form-select"
                aria-label="Default select example"
              >
                <option selected>Select class</option>
                <option value="1">Class 1</option>
                <option value="2">Class 2</option>
                <option value="3">Class 3</option>
              </select>
            </div>
            <button>Can't find your class?</button>
          </section>
          <section class="search-right-side">
            <button class="search-btn">Show Me The Notes!</button>
          </section>
        </main>
      </>
  );
};

export default Search;
