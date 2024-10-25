import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p>
        <a href="https://github.com/SamiraDorchalian"> GitGub </a> | React.js
        Project-App
      </p>
    </div>
  );
}

export default Header;
