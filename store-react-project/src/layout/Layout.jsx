import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

import { useCart } from "../context/CartContext";

import styles from "./Layout.module.css";

function Layout({ children }) {
  const [state] = useCart();
  return (
    <>
      <header className={styles.header}>
        <Link to={"https://github.com/SamiraDorchalian/React.js-projects.git"}>ShopReact</Link>
        <Link to="/checkout">
          <div>
            <FaCartShopping />

            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Samira with 🍪☕</p>
      </footer>
    </>
  );
}

export default Layout;
