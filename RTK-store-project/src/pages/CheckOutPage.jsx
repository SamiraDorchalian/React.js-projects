import { useSelector, useDispatch } from "react-redux";

import BasketCard from "../components/BasketCard";
import EmptyPage from "../components/EmptyPage";
import BasketSidebar from "../components/BasketSidebar";

import styles from "./CheckOutPage.module.css";

function CheckOutPage() {
  const state = useSelector((store) => store.cart);

  if (!state.itemsCounter) {
    return <EmptyPage />;
  }
  return (
    <div className={styles.container}>
      <BasketSidebar state={state} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default CheckOutPage;
