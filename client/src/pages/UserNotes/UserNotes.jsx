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
        <body class="userNotes-body">
          {(window.currentLocation = "/UserNotes" ? <Navbar /> : null)}
          <div class="userNotes-main">
            <section class="userNotes-container">
              <div class="userNotes-img-container">
                <img src={notePNG} alt="note picture" />
              </div>
              <div class="userNotes-information-container">
                <div class="userNotes-top">
                  <div class="userNotes-title">Very Good Notes</div>
                  <div class="userNotes-author">by John Doe</div>
                </div>
                <div class="userNotes-bottom">
                  <div class="userNotes-description">
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
              <div class="userNotes-open-container">
                <button class="userNotes-open-btn">Open</button>
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
