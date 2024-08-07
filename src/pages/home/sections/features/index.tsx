import { animated, useInView, useSpring, useTrail } from "@react-spring/web";
import {
  BadgeDollarSign,
  Building2,
  ChevronRight,
  MessagesSquare,
  Truck,
} from "lucide-react";
import GoToButton from "../../../../components/buttons/goTo";
import styles from "./styles.module.scss";

const cards = [
  {
    icon: <Building2 className={styles.icon} />,
    heading: "Поставки для компаний",
    p: "Надежные поставки строительных материалов для бизнеса с индивидуальным подходом и своевременной доставкой.",
  },
  {
    icon: <Truck className={styles.icon} />,
    heading: "Доставка и логистика",
    p: "Быстрая и надежная доставка материалов прямо на объект. Мы заботимся о сроках и качестве.",
  },
  {
    icon: <BadgeDollarSign className={styles.icon} />,
    heading: "Специальные предложения",
    p: "Акции и скидки на строительные материалы. Следите за нашими выгодными предложениями!",
  },
  {
    icon: <MessagesSquare className={styles.icon} />,
    heading: "Консультации и поддержка",
    p: "Профессиональные консультации по выбору материалов. Поможем найти идеальное решение для вашего проекта.",
  },
];

const Features = () => {
  const [ref, inView] = useInView({ once: true, rootMargin: "-20% 0%" });
  const trail = useTrail(cards.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? "translate(0, 0)" : "translate(0, 100px)",
    from: { opacity: 0, transform: "translate(0, 100px)" },
    delay: 200,
  });

  return (
    <section className={styles.features}>
      <div className={styles.back} />
      <div ref={ref} className={styles.row}>
        {trail.map((style, index) => (
          <animated.div
            style={style}
            className={styles.row__item}
            key={cards[index].heading}
          >
            <div className={styles.box}>
              {cards[index].icon}
              <h3 className="heading_tertiary u_margin_bottom_small">
                {cards[index].heading}
              </h3>
              <p className="feature_box__text">{cards[index].p}</p>
            </div>
            <GoToButton link="/services">
              Services <ChevronRight />
            </GoToButton>
          </animated.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
