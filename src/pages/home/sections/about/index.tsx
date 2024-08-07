import { animated, useInView } from "@react-spring/web";

import styles from "./styles.module.scss";

const composition = [
  { img: "static/img/water.png", p: "1" },
  { img: "static/img/oil.png", p: "2" },
  { img: "static/img/construction.jpg", p: "3" },
];
const compositionText = [
  {
    heading: "STRIVING FOR SDG GOALS",
    p: "We are committed to achieving the Sustainable Development Goals (SDGs). Our company implements eco-friendly and sustainable practices to contribute to a better future for all.",
  },
  {
    heading: "RELIABLE SUPPLIES FOR YOUR BUSINESS",
    p: "We provide reliable supplies of building materials for your business. Our personalized approach and timely delivery ensure the successful completion of your projects.",
  },
  {
    heading: "DELIVERING EXCELLENCE IN OIL & GAS",
    p: "Our supplies for oil and gas companies help ensure uninterrupted operations and high-quality project execution. We care about deadlines and reliability, allowing you to focus on what matters most.",
  },
];

const About = () => {
  const [ref, springs] = useInView(
    () => ({
      from: { y: 100, opacity: 0 },
      to: { y: 0, opacity: 1 },
    }),
    {
      rootMargin: "10% 0%",
      once: true,
    }
  );
  return (
    <div className={styles.section_about} id="section_about">
      <div className="u_center_text">
        <h2 className="heading_secondary">
          THE BEST ABILITIES FOR ANY COMPANY
        </h2>
      </div>
      <animated.div
        ref={ref}
        style={springs}
        className={`${styles.container} u_margin_top_big`}
      >
        <div className={styles.text}>
          {compositionText.map(({ heading, p }) => (
            <div key={heading}>
              <h3 className="heading_tertiary u_margin_bottom_small">
                {heading}
              </h3>
              <p className="paragraph u_margin_bottom_small">{p}</p>
            </div>
          ))}
          <a href="#" className="btn_text">
            Learn more &rarr;
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
