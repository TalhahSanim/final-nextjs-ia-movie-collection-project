import styles from "./Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";

import { DM_Sans, Bebas_Neue, Crimson_Pro } from "next/font/google";

const elmsSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });
const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
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
