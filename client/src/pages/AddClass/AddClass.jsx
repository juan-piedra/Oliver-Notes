import "../AddClass/AddClass.css";
import { Link, useLocation } from 'react-router-dom';

const AddClass = () => {
  return (
    <body>
      <nav class="nav">
        <div class="nav-title">
          <h1>Oliver Notes</h1>
        </div>
        <div class="user-items">
          <ul>
            <li>1</li>
          </ul>
        </div>
      </nav>
      <div class="addClass-wrapper">
          <section class="addClass-container">
            <div class="addClass-title">
              <h2>Add Class</h2>
            </div>
            <form>
              <select class="addClass form-select" aria-label="Default select example">
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
            <Link to='/Search'>
                <p class='addClass-back-btn'>Go back</p>
            </Link>
          </section>
      </div>
    </body>
  );
};

export default AddClass;
