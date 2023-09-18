import "../UserNotes/UserNotes.css";
import notePNG from "./assets/notepng.png";

const UserNotes = () => {
  return (
    <body class="userNotes-body">
      <nav class="nav">
        <div class="nav-title">
          <h1>Oliver Notes</h1>
          <p> / My Notes</p>
        </div>
        <div class="user-items">
          <ul>
            <li>1</li>
          </ul>
        </div>
      </nav>
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
          <div class="userNotes-open-container">
            <button class="userNotes-open-btn">Open</button>
          </div>
        </section>
      </div>
    </body>
  );
};

export default UserNotes;
