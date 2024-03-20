import styles from "./Loader.module.css";
import { Hourglass } from "react-loader-spinner";

function Loader() {
  return (
    <div className={styles.loader}>
      <Hourglass
        visible={true}
        height="80px"
        width="80px"
        ariaLabel="hourglass-loading"
        colors={["#a7c957", "#104911"]}
      />
    </div>
  );
}

export default Loader;
