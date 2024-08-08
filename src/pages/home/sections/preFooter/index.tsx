import { animated, useInView } from "@react-spring/web";
import React from "react";
import styles from "./styles.module.scss";
const PreFooter = ({ t }: { t: any }) => {
  const [ref, springs] = useInView(() => ({ from: { y: 200 }, to: { y: 0 } }), {
    rootMargin: "-15% 0%",
    once: true,
  });

  function sendEmail() {
    window.location.href = "mailto:bayezitkarajaew@gmail.com";
  }

  return (
    <animated.div ref={ref} style={springs} className={styles.section}>
      <div className={styles.section__title}>
        <h3 className={`${styles.section__header} heading_secondary`}>
          {t("home_page.best_day_first")}
          <br />
          {t("home_page.best_day_second")}
        </h3>
      </div>
      <button className={styles.btn} onClick={sendEmail}>
        {t("email_us_now")}
      </button>
    </animated.div>
  );
};

export default PreFooter;
