import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>
          <a href="https://github.com/SamiraDorchalian/React.js-projects">
            React.js | Projects
          </a>
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Samira with : ☕🍪</p>
      </footer>
    </>
  );
}

export default Layout;
