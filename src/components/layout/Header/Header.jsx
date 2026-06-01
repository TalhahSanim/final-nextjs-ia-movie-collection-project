import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Link href="/">
          <span className={styles.logoCore}>
            {/* <Image
              src="/public/images/favicon.ico.svg"
              alt="s"
              width={32}
              height={32}
            /> */}
            Movie Flix 107
            <span className={styles.logoEmoji}>🍿</span>
          </span>
        </Link>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/movies/Movies">Movies</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/tvshows/TVShows">TV Shows</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/anime/Anime">Anime</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/cartoons/Cartoons">Cartoons</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
