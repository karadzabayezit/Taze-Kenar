import { FC } from "react";
import styles from "./styles.module.scss";
import { animated, useInView, useSpring } from "@react-spring/web";

interface Props {
  animate?: boolean;
  shadows?: boolean;
}
const logos = [
  {
    title: "Vercel",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg",
  },
  {
    title: "Nextjs",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881475/nextjs_logo_dark_gfkf8m.svg",
  },
  {
    title: "Prime",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/t2awrrfzdvmg1chnzyfr.svg",
  },
  {
    title: "Trustpilot",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tkfspxqmjflfllbuqxsi.svg",
  },
  {
    title: "Webflow",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/nymiivu48d5lywhf9rpf.svg",
  },

  {
    title: "Airbnb",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/pmblusboe7vkw8vxdknx.svg",
  },
  {
    title: "Tina",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/afqhiygywyphuou6xtxc.svg",
  },
  {
    title: "Stackoverflow",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/ts1j4mkooxqmscgptafa.svg",
  },
  {
    title: "mistral",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tyos2ayezryjskox3wzs.svg",
  },
];

const LogoCarousel: FC<Props> = ({ animate = true, shadows = true }) => {
  const [ref2, inView2] = useInView({ once: true, rootMargin: "-20% 0%" });

  const fromLeft = useSpring({
    opacity: inView2 ? 1 : 0,
    transform: inView2 ? "translate(0, 0)" : "translate(-100%, 0)",
    from: { opacity: 0, transform: "translate(-100%, 0)" },
    delay: 200,
  });
  const fromRight = useSpring({
    opacity: inView2 ? 1 : 0,
    transform: inView2 ? "translate(0, 0)" : "translate(100%, 0)",
    from: { opacity: 0, transform: "translate(100%, 0)" },
    delay: 200,
  });
  return (
    <section ref={ref2} className={styles.container}>
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
