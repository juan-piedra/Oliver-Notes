import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom';
import AddClass from '../../pages/AddClass/AddClass';
import Notes from '../../pages/Notes/Notes';
import Auth from '../../utils/Auth';


const Navbar = () => {
  return (
    <nav class="nav">
      <div class="nav-title">
        <Link to='/Search' style={{ textDecoration: 'none'}}>
          <h1>Oliver Notes</h1>
        </Link>
      </div>
      <div class="user-items">
        <div>
          <Link to="/UserNotes" style={{ textDecoration: 'none' }}>
            <p>My Notes</p>
          </Link>
          <button onClick={Auth.logout}>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
