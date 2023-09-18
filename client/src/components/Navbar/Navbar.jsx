import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom';
import AddClass from '../../pages/AddClass/AddClass';
import Notes from '../../pages/Notes/Notes';
import Auth from '../../utils/Auth';


const Navbar = () => {
  return (
    <nav class="nav">
      <div class="nav-title">
        <h1>Oliver Notes</h1>
      </div>
      <div class="user-items">
        <ul>
          <button onClick={Auth.logout}>Logout</button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
