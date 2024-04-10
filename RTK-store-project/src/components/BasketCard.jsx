import { useDispatch } from "react-redux";

import { MdRemoveShoppingCart } from "react-icons/md";

import { shortenText } from "../helpers/helper";
import { removeItem, decrease, increase } from "../features/cart/cartSlice";

import styles from "./BasketCard.module.css";

function BasketCard({ data }) {
  const { image, title, quantity } = data;

  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{shortenText(title)}</p>
      <div className={styles.actions}>
        {quantity === 1 && (
          <button onClick={() => dispatch(removeItem(data))}>
            <MdRemoveShoppingCart />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => dispatch(decrease(data))}>-</button>
        )}
        <span>{quantity}</span>
        <button onClick={() => dispatch(increase(data))}>+</button>
      </div>
    </div>
  );
}

export default BasketCard;
