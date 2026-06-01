import styles from "./Footer.module.css";

function Footer() {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>&copy; {getCurrentYear()} MovieFlix107. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
