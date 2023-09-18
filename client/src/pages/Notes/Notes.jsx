import "../Notes/Notes.css";
import { Link, useLocation, Navigate } from "react-router-dom";
import notePNG from "./assets/notepng.png";
import Navbar from "../../components/Navbar/Navbar";
import Auth from "../../utils/Auth";

const Notes = () => {
  let currentLocation = useLocation();

  return (
    <>
      {Auth.loggedIn() ? (
        <body class="notes-body">
          {(window.currentLocation = "/Notes" ? <Navbar /> : null)}
          <div class="notes-main">
            <section class="notes-note-container">
              <div class="notes-img-container">
                <img src={notePNG} alt="note picture" />
              </div>
              <div class="notes-information-container">
                <div class="notes-top">
                  <div class="notes-title">Very Good Notes</div>
                  <div class="notes-author">by John Doe</div>
                </div>
                <div class="notes-bottom">
                  <div class="notes-description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Odit nam esse laboriosam totam ut, similique omnis natus
                    officiis deserunt cumque minus magnam accusantium molestiae.
                    Accusamus provident, qui ut alias cupiditate esse amet est
                    consequuntur mollitia nemo, minima perferendis eaque sed
                    sint laboriosam unde similique autem temporibus inventore
                    eum repellat numquam sit tempor.
                  </div>
                </div>
              </div>
              <div class="notes-price-container">
                <div class="notes-price">$4.99</div>
                <button class="notes-buy-now-btn">Buy Now!</button>
              </div>
            </section>
          </div>
        </body>
      ) : (
        <Navigate replace to="/Login" />
      )}
    </>
  );
};

export default Notes;
