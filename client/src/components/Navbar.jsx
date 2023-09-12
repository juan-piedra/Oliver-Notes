import { Link } from "react-scroll";
import NavUI from "./UI/NavUI";

export default function Nav() {
    return (
        <NavUI
            links={[
                <Link className="nav-link  inline-block navChoice text-light" to="/" key={1} smooth={true} duration={50} spy={true}>
                    Find Notes
                </Link>,
                <Link className="nav-link inline-block navChoice text-light" to="/" key={3} smooth={true} duration={50}>
                Submit Notes
                </Link>,

                <Link className="nav-link inline-block navChoice text-light " to="/" key={2} smooth={true} duration={50} spy={true}>
                    My Cart
                </Link>,
                <Link className="nav-link inline-block navChoice text-light" to="/" key={4} smooth={true} duration={50}>
                    About Us
                </Link>,
            ]}
        />
    );
}
