import { Link } from "react-router-dom";
import { PiShoppingBagBold } from "react-icons/pi";
import { useSelector } from "react-redux";

import styles from "./Layout.module.css";

function Layout({ children }) {
  const state = useSelector((store) => store.cart);

  return (
    <>
      <header className={styles.header}>
        <Link to="/products">Store-React-Project</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingBagBold />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Samira with ♥</p>
      </footer>
    </>
  );
}

export default Layout;
