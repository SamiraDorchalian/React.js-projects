import { Link } from "react-router-dom";
import TopBar from "./TopBar";

function Header() {
  return (
    <>
      <div className="conatiner-fluid fixed-top">
        <TopBar />
        <div className="conatiner px-0">
          <nav className="navbar navbar-light bg-white navbar-expand-x1">
            <Link to="/" to="" className="navbar-brand">
              <h1 className="text-primary display-6">Fruitables</h1>
            </Link>
            <button type="btn" className="navbar-toggler py-2 px-3">
              <span className="fa fa-bars text-primary"></span>
            </button>
            <div className="collapse navbar-collapse bg-white">
              <div className="navbar-nav mx-auto">
                <Link to="/" className="nav-item nav-link active">
                  Home
                </Link>
                <Link to="/shop" className="nav-item nav-link">
                  Shop
                </Link>
                <Link to="/shop-detail" className="nav-item nav-link">
                  Shop Detail
                </Link>
                <div className="nav-item dropdown">
                  <Link
                    to=""
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Category
                  </Link>
                  <div className="dropdown-menu m-0 bg-secondary rounded-0">
                    <Link className="dropdown-item">Vegetables</Link>
                    <Link className="dropdown-item">Fruites</Link>
                    <Link className="dropdown-item">Bread</Link>
                    <Link className="dropdown-item">Meat</Link>
                  </div>
                </div>
                <Link to="/contact" className="nav-item nav-link">
                  Contact
                </Link>
              </div>
              <div className="d-flex m-3 me-0">
                <button className="btn=search btn border border-secondery btn-md-square rounded-circle bg-white me-4">
                  <i className="fas fa-search text-primary"></i>
                </button>
                <Link>cart</Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
