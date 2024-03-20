import { Link } from "react-router-dom";

import { CgDetailsMore } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import { MdRemoveShoppingCart } from "react-icons/md";

import { productQuantity, shortenText } from "../helpers/helper";
import { useCart } from "../context/CartContext";

import styles from "./Card.module.css";

function Card({ data }) {
  const { id, title, image, price } = data;

  const [state, dispatch] = useCart();

  const quantity = productQuantity(state, id);
  console.log(quantity);

  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };

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
            <button onClick={() => clickHandler("REMOVE_ITEM")}>
              <MdRemoveShoppingCart />
            </button>
          )}
          {quantity > 1 && (
            <button onClick={() => clickHandler("DECREASE")}>-</button>
          )}
          {!!quantity && <span>{quantity}</span>}
          {quantity === 0 ? (
            <button onClick={() => clickHandler("ADD_ITEM")}>
              <FaCartShopping />
            </button>
          ) : (
            <button onClick={() => clickHandler("INCREASE")}>+</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
