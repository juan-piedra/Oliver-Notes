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
        <body className="notes-body">
          {(window.currentLocation = "/Notes" ? <Navbar /> : null)}
          <div className="notes-main">
            <section className="notes-note-container">
              <div className="notes-img-container">
                <img src={notePNG} alt="note picture" />
              </div>
              <div className="notes-information-container">
                <div className="notes-top">
                  <div className="notes-title">Very Good Notes</div>
                  <div className="notes-author">by John Doe</div>
                </div>
                <div className="notes-bottom">
                  <div className="notes-description">
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
              <div className="notes-price-container">
                <div className="notes-price">$4.99</div>
                <button className="notes-buy-now-btn">Buy Now!</button>
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
