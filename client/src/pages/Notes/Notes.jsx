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
                  <div className="notes-title">Good Notes</div>
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
                <button className="notes-purchased">Purchased</button>
              </div>
            </section>
            <section className="notes-note-container">
              <div className="notes-img-container">
                <img src={notePNG} alt="note picture" />
              </div>
              <div className="notes-information-container">
                <div className="notes-top">
                  <div className="notes-title">Extremely Good Notes</div>
                  <div className="notes-author">by Jonathan Doughnut</div>
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
                <div className="notes-price">$7.99</div>
                <button className="notes-purchased">Purchased</button>
              </div>
            </section>
            <section className="notes-note-container">
              <div className="notes-img-container">
                <img src={notePNG} alt="note picture" />
              </div>
              <div className="notes-information-container">
                <div className="notes-top">
                  <div className="notes-title">Pretty Good Notes</div>
                  <div className="notes-author">by Macie Becke</div>
                </div>
                <div className="notes-bottom">
                  <div className="notes-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias est accusamus ut? Corrupti assumenda quae, omnis
                    distinctio ipsum, beatae consequatur accusantium corporis
                    repellendus deserunt maiores animi odit voluptates harum
                    vero nostrum quas veritatis quam ducimus labore. Quidem,
                    aliquam sunt commodi voluptas accusamus qui?
                  </div>
                </div>
              </div>
              <div className="notes-price-container">
                <div className="notes-price">$6.99</div>
                <button className="notes-buy-now-btn">Buy Now!</button>
              </div>
            </section>
            <section className="notes-note-container">
              <div className="notes-img-container">
                <img src={notePNG} alt="note picture" />
              </div>
              <div className="notes-information-container">
                <div className="notes-top">
                  <div className="notes-title">Semi Good Notes</div>
                  <div className="notes-author">by John Doe</div>
                </div>
                <div className="notes-bottom">
                  <div className="notes-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis, hic mollitia cum rerum est, enim ut libero eius
                    illo facilis obcaecati inventore exercitationem architecto.
                    Fugiat, inventore vero voluptate sit quam exercitationem
                    assumenda architecto veritatis perferendis recusandae labore
                    excepturi consequatur ea ab commodi et illum soluta. Nihil
                    architecto vero vitae beatae, dicta provident odit tempore
                    sit facere cumque suscipit, dolor nemo at dolorem
                    voluptatibus rerum!
                  </div>
                </div>
              </div>
              <div className="notes-price-container">
                <div className="notes-price">$4.99</div>
                <button className="notes-buy-now-btn">Buy Now!</button>
              </div>
            </section>
            <section className="notes-note-container">
              <div className="notes-img-container">
                <img src={notePNG} alt="note picture" />
              </div>
              <div className="notes-information-container">
                <div className="notes-top">
                  <div className="notes-title">Really Good Notes</div>
                  <div className="notes-author">by John Doe</div>
                </div>
                <div className="notes-bottom">
                  <div className="notes-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque provident nostrum nisi illum a odio expedita.
                    Reprehenderit, hic! Consequatur minima dolores excepturi
                    fugit ut? Ipsa dolorum sequi rem dignissimos perferendis
                    provident quo inventore, voluptate magni quis cum, nostrum
                    architecto eum sit pariatur quaerat autem vitae esse sint?
                  </div>
                </div>
              </div>
              <div className="notes-price-container">
                <div className="notes-price">$5.99</div>
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
