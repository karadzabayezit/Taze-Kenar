import { animated, useInView } from "@react-spring/web";

import styles from "./styles.module.scss";

const composition = [
  { img: "static/img/water.png", p: "1" },
  { img: "static/img/oil.png", p: "2" },
  { img: "static/img/construction.jpg", p: "3" },
];
const translation = ["sdg_goals", "reliable_supplies", "oil_gas_excellence"];

const About = ({ t }: { t: any }) => {
  const [ref, springs] = useInView(
    () => ({
      from: { y: 100, opacity: 0 },
      to: { y: 0, opacity: 1 },
    }),
    {
      rootMargin: "-10% 0%",
      once: true,
    }
  );
  return (
    <div className={styles.section_about} id="section_about">
      <div className="u_center_text">
        <h2 className="heading_secondary">{t("home_page.theBestAbilities")}</h2>
      </div>
      <animated.div
        ref={ref}
        style={springs}
        className={`${styles.container} u_margin_top_big`}
      >
        <div className={styles.text}>
          {translation.map((title) => (
            <div key={title}>
              <h3 className="heading_tertiary u_margin_bottom_small">
                {t(`home_page.${title}.title`)}
              </h3>
              <p className="paragraph u_margin_bottom_small">
                {t(`home_page.${title}.description`)}
              </p>
            </div>
          ))}
          <a href="#" className={styles.btn}>
            {t("learnMore")} &rarr;
          </a>
        </div>

        <div className={styles.composition}>
          {composition.map(({ img, p }) => (
            <img
              key={img}
              src={img}
              alt={`Photo ${p}`}
              loading="lazy"
              className={`${styles.photo} ${styles["photo__" + p]}`}
            />
          ))}
        </div>
      </animated.div>
    </div>
  );
};

export default About;
