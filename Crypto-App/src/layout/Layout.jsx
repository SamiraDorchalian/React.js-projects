import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto_App</h1>
        <p>
          <a href="https://github.com/SamiraDorchalian/React.js-projects">
            React.js |
          </a>{" "}
          projects
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Milad with ☕🍪</p>
      </footer>
    </>
  );
}

export default Layout;
