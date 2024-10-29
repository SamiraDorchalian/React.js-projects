import { useState } from "react";
import { useEffect } from "react";

import TableCoin from "../modules/TableCoin";
import { getCoinsList } from "../../services/cryptoApi";
import Pagination from "../modules/Pagination";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // fetch(getCoinsList())
    //   .then((res) => res.json())
    //   .then((json) => setCoins(json));
    setIsLoading(true);
    const getData = async () => {
      const res = await fetch(getCoinsList(page));
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    };
    getData();
  }, [page]);
  return (
    <div>
      <TableCoin coins={coins} isLoading={isLoading} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default HomePage;
