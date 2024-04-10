import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { CgDetailsMore } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import { MdRemoveShoppingCart } from "react-icons/md";

import {
  removeItem,
  decrease,
  increase,
  checkout,
  addItem,
} from "../features/cart/cartSlice";
import { productQuantity, shortenText } from "../helpers/helper";

import styles from "./Card.module.css";

function Card({ data }) {
  const { id, title, image, price } = data;

  const state = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const quantity = productQuantity(state, id);

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <CgDetailsMore />
        </Link>
        <div>
          {quantity === 1 && (
            <button onClick={() => dispatch(removeItem(data))}>
              <MdRemoveShoppingCart />
            </button>
          )}
          {quantity > 1 && (
            <button onClick={() => dispatch(decrease(data))}>-</button>
          )}
          {!!quantity && <span>{quantity}</span>}
          {quantity === 0 ? (
            <button onClick={() => dispatch(addItem(data))}>
              <FaCartShopping />
            </button>
          ) : (
            <button onClick={() => dispatch(increase(data))}>+</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
