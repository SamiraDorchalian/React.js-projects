import image from "../images/empty.png";

import styles from "./EmptyPage.module.css";

function EmptyPage() {
  return (
    <div className={styles.container}>
      <div>
        <p>Your Basket is Empty</p>
      </div>
      <div>
        <img src={image} alt="image" />
      </div>
    </div>
  );
}

export default EmptyPage;
