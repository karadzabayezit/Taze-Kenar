import Partners from "@/components/partners";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { useSpring, animated } from "@react-spring/web";

const imgs = [
  "static/img/certificates/certificate2.jpg",
  "static/img/certificates/certificate1.jpg",
];

const AboutUsPage = () => {
  const { t } = useTranslation();
  const headerAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 300,
  });
  return (
    <>
      <animated.div style={headerAnimation} className={styles.aboutUs}>
        <div className={styles.hero}>
          <h1 className="heading_secondary">About Taze Kenar</h1>
          <p className="heading_secondary--sub">
            We are a forward-thinking company dedicated to excellence in
            construction and logistics. Our mission is to deliver high-quality
            solutions tailored to the unique needs of our clients.
          </p>
        </div>
        <div className={styles.aboutUs__text}>
          <p className="heading_secondary--sub">
            Taze Kenar is a modern and dynamic company specializing in the
            supply of building materials, logistics, and project support within
            the oil and gas industry. Our goal is to provide high-quality
            solutions tailored to the unique needs of each client. We take pride
            in our experience and numerous successful projects that have helped
            our partners achieve significant results. Our team of experts
            combines deep knowledge with an innovative approach, enabling us to
            turn the boldest ideas into reality. We are committed to sustainable
            development and actively support the United Nations Sustainable
            Development Goals (SDGs) by utilizing eco-friendly materials and
            practices.
          </p>
        </div>
        <div className={styles.certificates}>
          <h1 className="heading_secondary">Certificates & Licenses:</h1>
          <div className={styles.certificates__imgs}>
            {imgs.map((src) => (
              <img className={styles.img} src={src} alt={src} />
            ))}
          </div>
        </div>
      </animated.div>
      <Partners t={t} />
    </>
  );
};

export default AboutUsPage;
