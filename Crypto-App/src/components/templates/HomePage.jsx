import { useState } from "react";
import { useEffect } from "react";

import TableCoin from "../modules/TableCoin";
import { getCoinsList } from "../../services/cryptoApi";

function HomePage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    // fetch(getCoinsList())
    //   .then((res) => res.json())
    //   .then((json) => setCoins(json));
    const getData = async () => {
      const res = await fetch(getCoinsList());
      const json = await res.json();
      setCoins(json);
    };
    getData();
  }, []);
  return (
    <div>
      <TableCoin coins={coins} />
    </div>
  );
}

export default HomePage;
