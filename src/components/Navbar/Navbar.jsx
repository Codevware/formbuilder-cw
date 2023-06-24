import { Link } from "react-router-dom";

const Navbar = () => {
  const Logo =
    "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_130,h_24/https://www.123formbuilder.com/wp-content/uploads/2021/10/cropped-123FormBuilder-logo-27px@2x.png";

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/solutions">
                  Solutions
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/integrations">
                  Integrations
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/templates">
                  Templates
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create">
                  Create
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/learn">
                  Learn
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/enterprise">
                  Enterprise
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-0 d-flex ">
              <li className="nav-item">
                <Link className="nav-link btn me-3" to="singin">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-primary" to="signup">
                  Try it Free
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
