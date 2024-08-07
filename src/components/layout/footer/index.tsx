import styles from "./styles.module.scss";

const footerList = ["home", "services", "about", "careers", "blog"];

const Footer = ({ t }: { t: any }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contacts}>
        <p>example@gmail.com</p> <p>+993 6x xxxxxx</p>
      </div>
      <ul className={styles.footer__nav}>
        {footerList.map((name) => (
          <li className={styles.footer__item} key={name}>
            <a className={styles.footer__link} href="#">
              {t(name)}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.footer__logo}>TAZE KENAR</div>
      {/* <img src="img/icon.png" alt="TAZE KENAR" className="footer__logo" /> */}
      <p className={styles.footer__copyright}>
        &copy; Copyright. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
