import styles from "./Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";

import { DM_Sans } from "next/font/google";

const elmsSans = DM_Sans({
  subsets: ["latin"],
  // weight: ["300", "400", "700"],
  // style: ["normal", "italic"],
  display: "swap",
});

function Layout(props) {
  return (
    <div className={`${styles.app} ${elmsSans.className}`}>
      <Header />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
