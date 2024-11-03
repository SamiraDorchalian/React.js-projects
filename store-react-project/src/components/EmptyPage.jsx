import { Link } from "react-router-dom";

import image from "../images/empty.png";

import styles from "./EmptyPage.module.css";

function EmptyPage() {
  return (
    <div className={styles.container}>
      <div>
        <Link to="/products">
          <p>Your Basket is Empty</p>
        </Link>
      </div>
      <div>
        <img src={image} alt="image" />
      </div>
    </div>
  );
}

export default EmptyPage;
