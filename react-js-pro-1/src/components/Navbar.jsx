import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo.svg";
import { links } from "../data";
import { FaBars } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className="nav__links">
          {links.map(({ name, path }, index) => {
            return (
              <li>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button className="nav__toggle-btn">
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
