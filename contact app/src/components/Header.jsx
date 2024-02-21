import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p>
        <a href="www.linkedin.com/in/samira-dorchalian-a61789219">
          My Llinkedin
        </a>
        | React.js
      </p>
    </div>
  );
}

export default Header;
