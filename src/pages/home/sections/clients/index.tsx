import { FC } from "react";
import styles from "./styles.module.scss";
import { animated, useInView, useSpring } from "@react-spring/web";

interface Props {
  animate?: boolean;
  shadows?: boolean;
}
const logos = [
  {
    title: "Dragon Oil",
    url: "static/img/clients/dragonOil.png",
  },
  {
    title: "Chalik Enerji",
    url: "static/img/clients/chalik.jpg",
  },
  {
    title: "BASF",
    url: "static/img/clients/basf.png",
  },
  {
    title: "Schlumberger",
    url: "static/img/clients/schlumberger.jpg",
  },
  {
    title: "Halliburton",
    url: "static/img/clients/halliburton.png",
  },
  {
    title: "Petronas",
    url: "static/img/clients/petronas.png",
  },
];

const LogoCarousel: FC<Props> = ({ animate = true, shadows = true }) => {
  const [ref, inView] = useInView({ once: true, rootMargin: "-20% 0%" });

  const fromLeft = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translate(0, 0)" : "translate(-100%, 0)",
    from: { opacity: 0, transform: "translate(-100%, 0)" },
    delay: 200,
  });
  const fromRight = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translate(0, 0)" : "translate(100%, 0)",
    from: { opacity: 0, transform: "translate(100%, 0)" },
    delay: 200,
  });
  return (
    <section ref={ref} className={styles.container}>
      <animated.div style={fromLeft} className={styles.whyUs}>
        <h2>Why Choose Us?</h2>
        <p>
          At Taze Kenar, we prioritize your satisfaction and success. Our team
          of experts is dedicated to providing top-notch services, ensuring that
          every project we undertake meets your expectations and beyond.
        </p>
      </animated.div>
      <animated.div style={fromRight}>
        <h2 className={`${styles.heading} u_margin_bottom_small`}>
          Our clients:
        </h2>
        <div
          className={styles.logos_container}
          style={{
            maskImage: `${
              shadows &&
              "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 100%)"
            }`,
          }}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className={styles.block + " " + (animate && styles.animate)}
            >
              {logos.map(({ title, url }) => (
                <img
                  key={title}
                  src={url}
                  className={styles.logo}
                  alt={title}
                />
              ))}
            </div>
          ))}
        </div>
        <p className={`${styles.p} heading_tertiary u_margin_top_small`}>
          They trust us and win, contact us to win too.
        </p>
      </animated.div>
    </section>
  );
};

export default LogoCarousel;
