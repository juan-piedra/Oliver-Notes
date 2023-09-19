import "../UserNotes/UserNotes.css";
import notePNG from "./assets/notepng.png";
import { Link, useLocation, Navigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Auth from "../../utils/Auth";

const UserNotes = () => {
  let currentLocation = useLocation();

  return (
    <>
      {Auth.loggedIn() ? (
        <body className="userNotes-body">
          {(window.currentLocation = "/UserNotes" ? <Navbar /> : null)}
          <div className="userNotes-main">
            <section className="userNotes-container">
              <div className="userNotes-img-container">
                <img src={notePNG} alt="note picture" />
              </div>
              <div className="userNotes-information-container">
                <div className="userNotes-top">
                  <div className="userNotes-title">Very Good Notes</div>
                  <div className="userNotes-author">by John Doe</div>
                </div>
                <div className="userNotes-bottom">
                  <div className="userNotes-description">
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
              <div className="userNotes-open-container">
                <button className="userNotes-open-btn">Open</button>
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

export default UserNotes;
