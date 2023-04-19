import styles from "./Footer.module.css";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.linkBox}>
        <Link href="#about" underline="none" className={styles.link}>
          About us
        </Link>
        <Link href="#products" underline="none" className={styles.link}>
          Products
        </Link>
        <Link href="#contact" underline="none" className={styles.link}>
          Contact us
        </Link>
      </div>

      <div className={styles.aboutBox}>
        <img
          src="/images/logos/OlwenMainReglogo.png"
          width={230}
          height={100}
          alt="olwen sciences"
        />
        <div className={styles.trademarkSection}>
          <img src="/images/other/mark1.jpg" width={60} height={60} />
          <img src="/images/other/mark2.jpg" width={60} height={60} />
          <img src="/images/other/mark3.jpg" width={60} height={60} />
        </div>
        <p className={styles.aboutText}>
          Welcome to Olwen Lifesciences Private Limited Olwen was established in
          the Year 2014.
        </p>
      </div>
    </div>
  );
};

export default Footer;
