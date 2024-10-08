import { animated, useInView, useSpring } from "@react-spring/web";
import "./styles.scss";
import { useTranslation } from "react-i18next";

const LearnMore = () => {
  const { t } = useTranslation();
  const fromBottom = useSpring({
    opacity: 1,
    transform: "translate(0, 0)",
    from: { opacity: 0, transform: "translate(0, 200%)" },
    delay: 800,
  });

  const goTo = () => {
    document.querySelector("#section_about")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <animated.button style={fromBottom} className="learn_more" onClick={goTo}>
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button_text">{t("learnMore")}</span>
    </animated.button>
  );
};

export default LearnMore;
