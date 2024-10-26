import { TbMessage2Search } from "react-icons/tb";

import styles from "./SearchBox.module.css";

function SearchBox({ search, setSearch, searchHandler }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="search title"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <TbMessage2Search />
      </button>
    </div>
  );
}

export default SearchBox;
