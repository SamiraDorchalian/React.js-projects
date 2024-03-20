import { createQueryObject } from "../helpers/helper";

import { TbBasketSearch } from "react-icons/tb";

import styles from "./SearchBox.module.css";

function SearchBox({ search, setSearch, setQuery }) {
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchHandler}>
        <TbBasketSearch />
      </button>
    </div>
  );
}

export default SearchBox;
