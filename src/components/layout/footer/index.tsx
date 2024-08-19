import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const footerList = ["home", "services", "about", "contact"];

const Footer = ({ t }: { t: any }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contacts}>
        <a href="mailto:contact@tazekenar.com">contact@tazekenar.com</a>
        <a href="tel:+99363997225">+993 63 997 225</a>
      </div>
      <ul className={styles.footer__nav}>
        {footerList.map((name) => (
          <li className={styles.footer__item} key={name}>
            <Link className={styles.footer__link} to={name}>
              {t(name)}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.footer__logo}>TAZE KENAR</div>
      {/* <img src="img/icon.png" alt="TAZE KENAR" className="footer__logo" /> */}
      <p className={styles.footer__copyright}>
        &copy; Copyright. {t("all_rights")}
      </p>
    </footer>
  );
};

export default Footer;
