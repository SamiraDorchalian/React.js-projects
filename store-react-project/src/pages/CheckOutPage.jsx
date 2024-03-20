import BasketCard from "../components/BasketCard";
import { useCart } from "../context/CartContext";
import EmptyPage from "../components/EmptyPage";
import BasketSidebar from "../components/BasketSidebar";

import styles from "./CheckOutPage.module.css";

function CheckOutPage() {
  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => dispatch({ type, payload });
  if (!state.itemsCounter) {
    return <EmptyPage />;
  }
  return (
    <div className={styles.container}>
      <BasketSidebar state={state} clickHandler={clickHandler} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default CheckOutPage;
