import React from 'react';
import conanTheLibrarian from "../utils/conan-the-librarian.jpg";
import oliverStoneCaricature from "../utils/oliver-stone-caricature.jpg";

const SearchClass = () => {
    return (
        <div className="pt-5">
            <div className="pt-5">
                <div className="app-container">
                    <div className="centered-title">
                        {/* <img src={oliverStoneCaricature} alt="Oliver Stone Caricature" className="header-image left" /> */}
                        <div>
                        <img src={oliverStoneCaricature} alt="Oliver Stone Caricature" className="header-image left" />
                            <h1>Oliver Notes</h1>
                            <h2>Trading Post For All Your University Notes</h2>
                        </div>
                        <div className="">
                            {/* <img src={conanTheLibrarian} alt="Conan the Librarian" className="header-image right py-4" /> */}
                        </div>
                    </div>
                    <div className="dropdown-container">
                        <select name="school" id="school-dropdown">
                            <option value="">School Name</option>
                            {/* Add school options here */}
                        </select>
                        <select name="course" id="course-dropdown">
                            <option value="">Course Name</option>
                            {/* Add course options here */}
                        </select>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary mt-4">Take Me to the Notes</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default SearchClass;
