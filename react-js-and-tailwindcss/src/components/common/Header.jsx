import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt1, HiViewGrid } from "react-icons/hi";
import { BiShoppingBag } from "react-icons/bi";
import { linkData } from "./../assets/data/dummydata";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="bg-white py-4 text-black sticky z-50 shadow-md top-0 left-0 w-full">
        <div className="container flex justify-between items-center">
          <div className="logo flex items-center gap-6">
            <img src="" alt="imagelogo" className="h-5" />
            <div>
              <HiViewGrid size={20} />
              <span>category</span>
            </div>
          </div>

          <nav className={open ? "mobile-veiw" : "desktop-view"}>
            <ul className="flex items-center gap-6">
              {linkData.map((link, index) => (
                <li key={index} onClick={() => setOpen(null)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-primary text-sm" : "text-[15px]"
                    }
                    to={link.url}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="account flex items-center gap-5">
            <button>
              <BiShoppingBag size={25} />
            </button>
            <button>Login</button>{" "}
            <button className="open-menu" onClick={() => setOpen(!open)}>
              <HiOutlineMenuAlt1 size={25} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
