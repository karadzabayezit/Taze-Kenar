import { animated, useSpring } from "@react-spring/web";
import { FC, ReactNode } from "react";

import styles from "./styles.module.scss";

interface IProps {
  children: ReactNode;
  cut?: boolean;
  src: string;
}

const Hero: FC<IProps> = ({ children, cut = false, src }) => {
  const headerAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 300,
  });

  return (
    <animated.div style={headerAnimation} className={styles.container}>
      <img className={`${styles.img} ${cut && styles.cutted}`} src={src}></img>
      <div className={styles.centeredBox}>{children}</div>
    </animated.div>
  );
};

export default Hero;
