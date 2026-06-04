import styles from "./Footer.module.css";
import Image from "next/image";

function Footer() {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>&copy; {getCurrentYear()} MovieFlix107. All rights reserved.</p>
      <Image
        src="/images/favicon.ico.svg"
        alt="MovieFlix107"
        width={350}
        height={280}
        priority
      />
    </footer>
  );
}

export default Footer;
