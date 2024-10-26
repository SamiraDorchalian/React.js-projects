import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>
          <a href="https://github.com/SamiraDorchalian">GitHub</a> | React.js
          Project
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by samira with ☕🍪</p>
      </footer>
    </>
  );
}

export default Layout;
