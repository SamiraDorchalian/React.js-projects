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
        colors={["#caf0f8", "#03045e"]}
      />
    </div>
  );
}

export default Loader;
