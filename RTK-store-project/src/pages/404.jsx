import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <>
      <div className={styles.notfound}>PageNotFound ... ¯\(°_o)/¯</div>
      <div className={styles.backToShop}>
        <Link to="/products">Back to shop ⚆_⚆</Link>
      </div>
    </>
  );
}

export default PageNotFound;
