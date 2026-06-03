import Image from "next/image";
import Link from "next/link";
import styles from "../styles/notfound.module.css";
import notFound from "../../public/images/notFound.png";

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundBox}>
      <div className={styles.twinBox}>
        <div className={styles.errorCode}>404</div>
        <span className={styles.notFoundImage}>
          <Image src={notFound} alt="not found 404" height={80} width={90} />
        </span>
        <p className={styles.message}>Page Not Found</p>
        <p className={styles.sub}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className={styles.homeLink}>
          🏠 Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
