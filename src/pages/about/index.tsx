import { animated, useSpring } from "@react-spring/web";

import "./styles.scss";

const AboutPage = () => {
  // const [springs, api] = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });

  return (
    <animated.div className="page about">
      <h2>Our Story</h2>
      <p>
        Founded in 2024, Taze Kenar is committed to delivering exceptional
        services to our clients. Our journey began with a small team of
        passionate individuals who believed in making a difference. Today, we
        have grown into a respected company known for our integrity, excellence,
        and innovation.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to empower businesses with reliable and innovative
        solutions. We strive to build lasting relationships with our clients by
        consistently delivering high-quality services and exceeding
        expectations.
      </p>
      <h2>Our Values</h2>
      <ul>
        <li>
          Integrity: We adhere to the highest standards of honesty and
          transparency in all our dealings.
        </li>
        <li>
          Excellence: We are committed to providing top-tier services and
          continuously improving our processes.
        </li>
        <li>
          Innovation: We embrace new ideas and technologies to stay ahead in a
          rapidly changing world.
        </li>
      </ul>
    </animated.div>
  );
};

export default AboutPage;
