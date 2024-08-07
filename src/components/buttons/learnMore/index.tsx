import { animated, useInView, useSpring } from "@react-spring/web";
import "./styles.scss";

const LearnMore = () => {
  const [ref, inView] = useInView({ once: true });
  const fromBottom = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translate(0, 0)" : "translate(0, 200%)",
    from: { opacity: 0, transform: "translate(0, 200%)" },
    delay: 600,
  });
  return (
    <animated.button ref={ref} style={fromBottom} className="learn_more">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button_text">Learn More</span>
    </animated.button>
  );
};

export default LearnMore;
