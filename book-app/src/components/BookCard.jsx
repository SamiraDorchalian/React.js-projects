import { useState } from "react";
import { BiSolidBookHeart } from "react-icons/bi";

import styles from "./BookCard.module.css";

function BookCard({ data, handleLikesList }) {
  const { title, author, image, language, pages } = data;

  const [like, setLike] = useState(false);

  const likeHandler = () => {
    handleLikesList(data, like);
    setLike((like) => !like);
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <span>{language}</span>
          <span>{pages} pages</span>
        </div>
      </div>
      <button onClick={likeHandler}>
        <BiSolidBookHeart
          color={like ? "#9d0208" : "#faa307"}
          fontSize="1.8rem"
        />
      </button>
    </div>
  );
}

export default BookCard;
