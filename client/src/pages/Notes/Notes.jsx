import "../Notes/Notes.css";
import notePNG from "./assets/notepng.png";

const Notes = () => {
  return (
    <body class="notes-body">
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                nam esse laboriosam totam ut, similique omnis natus officiis
                deserunt cumque minus magnam accusantium molestiae. Accusamus
                provident, qui ut alias cupiditate esse amet est consequuntur
                mollitia nemo, minima perferendis eaque sed sint laboriosam unde
                similique autem temporibus inventore eum repellat numquam sit
                tempor.
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
  );
};

export default Notes;
