import { GiEmptyMetalBucketHandle } from "react-icons/gi";

import styles from "./EmptyPage.module.css";
import { Link } from "react-router-dom";

function EmptyPage() {
  return (
    <div className={styles.empty}>
      <p>
        Your shopping cart is empty <span>╰（‵□′）╯</span> Please skip as soon
        as possible . Thank you <span> ￣へ￣</span>
      </p>
      <span>
        <Link to="/products">
          <GiEmptyMetalBucketHandle />
        </Link>
      </span>
    </div>
  );
}

export default EmptyPage;
