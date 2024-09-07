import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar has-background-warning-dark">
          <div className="navbar-brand navbar-container">
            <Link to="/" className="navbar-item has-text-grey-lighter">
              Home
            </Link>
            <Link to="/atlas" className="navbar-item has-text-grey-lighter">
              {" "}
              Atlas
            </Link>
            <Link to="/visited" className="navbar-item has-text-grey-lighter">
              Visited Countries
            </Link>
            <Link to="/quiz" className="navbar-item has-text-grey-lighter">
              Quiz
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
