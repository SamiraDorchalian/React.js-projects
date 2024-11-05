import { Link } from "react-router-dom";
import image from "../images/pageNotFound.png";

import styles from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <div className={styles.container}>
      <div>
        <p>PageNotFound</p>
        <button>
          <Link to="/products">Go To Shop</Link>
        </button>
      </div>
      <div>
        <img src={image} alt="image" />
      </div>
    </div>
  );
}

export default PageNotFound;
