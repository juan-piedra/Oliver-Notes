export default function Nav({ links }) {
    return (
        <nav className="navbar navbar-expand-lg  rounded-1 rounded-top-0 bg-opacity-10">
            <div className="container-fluid">
                <div className=" navbar-collapse" id="navbarSupportedContent">
                    <div className="d-flex mb-3 justify-content-between">
                        <h1 className="me-auto p-3 text-white-50 " id="navTitle">Oliver Notes </h1>
                        <ul className="navbar-nav  p-3 fs-5">
                            {links.map((link) => link)}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
