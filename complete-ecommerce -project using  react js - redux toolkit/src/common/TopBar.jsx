import { Link } from "react-router-dom";

function TopBar() {
  return (
    <>
      <div className="container topbar bg-primary d-none d-lg-block">
        <div className="d-flex justify-content-between">
          <div className="top-info ps-2">
            <small className="me-3">
              <i className="fas fa-map-marker-alt me-2 text-secondary"></i>
              <Link className="text-white">123 street, New York</Link>
            </small>
            <small className="me-3">
              <i className="fas fa-envelope me-2 text-secondary"></i>
              <Link className="text-white">email@example.com</Link>
            </small>
          </div>
          <div className="top-link pe-2">
            <Link to="#" className="text-white">
              <small className="text-white mx-2">Privacy Policy</small>
            </Link>
            <Link to="#" className="text-white">
              <small className="text-white mx-2">Terms of Use</small>
            </Link>
            <Link to="#" className="text-white">
              <small className="text-white mx-2">Sales and Refurds</small>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
