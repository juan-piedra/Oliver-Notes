import "../SingleNote/SingleNote.css";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import pdf from './assets/randomPDF1.pdf'

const SingleNote = () => {
    let currentLocation = useLocation();
  
    return (
    <>
    {(window.currentLocation = "/Notes" ? <Navbar /> : null)}
    <div className="singleNote-body">
      <div className="singleNote-container">
        <iframe
          type="application/pdf"
          src={pdf}
          width="100%"
          height="1100px"
          title="Note"
        ></iframe>
      </div>
    </div>
    </>
  );
};

export default SingleNote;
